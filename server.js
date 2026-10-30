// Ave 서버: 정적 파일 + 실시간 접속(Socket.IO)
const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');
const compression = require('compression');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;
const ROOMS = 10;                      // 성당 방 개수 (index.html의 THEMES 수와 같아야 해요)
const MAX_PER_ROOM = 50;           // 성당 하나당 최대 인원
const DATA_FILE = process.env.DATA_FILE || path.join(__dirname, 'data.json');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: false } });

// ---- 초 봉헌 기록 (날짜별, 방별) ----
let data = { day: today(), candles: Array(ROOMS).fill(0), totalCandles: 0 };
try { const d = JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); if (d && Array.isArray(d.candles)) data = d; } catch (e) {}
function today() { return new Date().toLocaleDateString('sv-SE', { timeZone: 'Asia/Seoul' }); }
function rollDay() { const t = today(); if (data.day !== t) { data.day = t; data.candles = Array(ROOMS).fill(0); } }
let dirty = false;
setInterval(() => { if (!dirty) return; dirty = false; fs.writeFile(DATA_FILE, JSON.stringify(data), () => {}); }, 10000);

// ---- 정적 파일 ----
app.disable('x-powered-by');
app.use(compression({ threshold: 1024 }));   // 글자 파일(html/js/css)을 gzip으로 압축해서 보내요
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '30d', setHeaders: (res, p) => {
  if (p.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache');            // 앱 본문은 매번 최신 확인
  else if (p.includes(path.sep + 'vendor' + path.sep)) res.setHeader('Cache-Control', 'public, max-age=31536000, immutable'); // 라이브러리는 1년 캐시
} }));
app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/rooms', (req, res) => { rollDay(); res.json({ counts: counts(), candlesToday: data.candles, totalCandles: data.totalCandles }); });

// ---- 고해소: 한 번에 한 사람, 나머지는 줄 서서 기다려요 ----
const TURN_HOLD = 40 * 1000;      // 차례가 된 사람이 들어오기를 기다리는 시간
const MAX_INSIDE = 15 * 60 * 1000; // 너무 오래 머물면 자동으로 비워요
const booths = {}; // room -> { id, name, since, queue: [ids], reserved, until }
function booth(room) { return booths[room] || (booths[room] = { id: null, name: '', since: 0, queue: [], reserved: null, until: 0, timer: null }); }
function boothPublic(room) { const b = booth(room); return { room, busy: !!b.id, id: b.id, name: b.id ? (players.get(b.id) || {}).name || '' : '', wait: b.queue.length + (b.reserved ? 1 : 0), queue: b.queue.slice(), reserved: b.reserved }; }
function boothBroadcast(room) { io.to('r' + room).emit('booth', boothPublic(room)); }
function boothNext(room) {
  const b = booth(room); clearTimeout(b.timer); b.reserved = null;
  while (b.queue.length) { const nid = b.queue.shift(); const p = players.get(nid); if (p && p.room === room) { b.reserved = nid; b.until = Date.now() + TURN_HOLD; io.to(nid).emit('booth:turn'); b.timer = setTimeout(() => { if (b.reserved === nid && !b.id) boothNext(room); }, TURN_HOLD); break; } }
  boothBroadcast(room);
}
function boothRelease(room, id) {
  if (room < 0) return; const b = booth(room); let changed = false;
  const qi = b.queue.indexOf(id); if (qi >= 0) { b.queue.splice(qi, 1); changed = true; }
  if (b.id === id) { b.id = null; boothNext(room); return; }
  if (b.reserved === id) { boothNext(room); return; }
  if (changed) boothBroadcast(room);
}
setInterval(() => { for (const r in booths) { const b = booths[r]; if (b.id && Date.now() - b.since > MAX_INSIDE) { b.id = null; boothNext(+r); } } }, 30000);

// ---- 접속자 관리 ----
const players = new Map(); // socket.id -> {room,name,look,x,z,f,p}
function counts() { const c = {}; for (let i = 0; i < ROOMS; i++) c[i] = 0; players.forEach(p => { if (p.room >= 0) c[p.room]++; }); return c; }
let countsTimer = null;
function broadcastCounts() { if (countsTimer) return; countsTimer = setTimeout(() => { countsTimer = null; io.emit('counts', counts()); }, 300); }

// 부적절한 이름 거르기 (클라이언트와 같은 목록)
const BAD_NAME = ['시발','씨발','씨팔','ㅅㅂ','ㅆㅂ','병신','ㅂㅅ','개새','새끼','좆','존나','졸라','니미','느금','지랄','염병','미친놈','미친년','썅','fuck','shit','bitch','sex','섹스','porn','야동','자지','보지'];
const badName = n => { const t = String(n).toLowerCase().replace(/[\s\d._\-~!@#$%^&*()+=]/g, ''); return BAD_NAME.some(w => t.includes(w)); };
const safeName = n => { const c = clean(n, 12); return !c || badName(c) ? '순례자' : c; };
const clean = (s, n) => String(s || '').replace(/[<>&"'`]/g, '').trim().slice(0, n);
const num = (v, lo, hi, d) => { v = Number(v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
const POSES = ['stand', 'sit', 'pray', 'bless', 'kneel', 'meditate', 'genuflect', 'bow', 'rosary'];
function cleanLook(l) {
  l = l || {}; const o = {};
  if (l.hair) o.hair = clean(l.hair, 12);
  if (l.outfit) o.outfit = clean(l.outfit, 12);
  if (Number.isFinite(Number(l.skin))) o.skin = num(l.skin, 0, 0xffffff, 0);
  if (Number.isFinite(Number(l.hairColor))) o.hairColor = num(l.hairColor, 0, 0xffffff, 0);
  o.acc = Array.isArray(l.acc) ? l.acc.slice(0, 4).map(a => clean(a, 12)).filter(Boolean) : [];
  return o;
}
const pub = (id, p) => ({ id, name: p.name, look: p.look, x: p.x, z: p.z, f: p.f, p: p.p });

io.on('connection', socket => {
  const me = { room: -1, name: '순례자', look: {}, x: 0, z: 21, f: Math.PI, p: 'stand', lastCandle: 0, msgs: 0 };
  players.set(socket.id, me);
  socket.emit('counts', counts());

  // 아주 간단한 도배 방지: 1초에 30개 넘는 메시지는 버려요
  const tick = setInterval(() => { me.msgs = 0; }, 1000);
  const ok = () => ++me.msgs <= 30;

  socket.on('join', d => {
    if (!ok() || !d) return;
    const room = Math.floor(num(d.room, 0, ROOMS - 1, 0));
    if (me.room === room) return;
    if (counts()[room] >= MAX_PER_ROOM) { socket.emit('full', room); return; }
    if (me.room >= 0) { boothRelease(me.room, socket.id); socket.leave('r' + me.room); socket.to('r' + me.room).emit('peer:leave', socket.id); }
    Object.assign(me, { room, name: safeName(d.name), look: cleanLook(d.look), x: num(d.x, -30, 40, 0), z: num(d.z, -30, 40, 21), f: num(d.f, -10, 10, Math.PI), p: POSES.includes(d.p) ? d.p : 'stand' });
    socket.join('r' + room);
    const others = []; players.forEach((p, id) => { if (id !== socket.id && p.room === room) others.push(pub(id, p)); });
    socket.emit('peers', others);
    socket.to('r' + room).emit('peer:join', pub(socket.id, me));
    socket.emit('booth', boothPublic(room));
    broadcastCounts();
  });

  socket.on('state', d => {
    if (!ok() || me.room < 0 || !d) return;
    me.x = num(d.x, -30, 40, me.x); me.z = num(d.z, -30, 40, me.z); me.f = num(d.f, -10, 10, me.f); if (POSES.includes(d.p)) me.p = d.p;
    socket.to('r' + me.room).volatile.emit('peer:state', { id: socket.id, x: me.x, z: me.z, f: me.f, p: me.p });
  });

  socket.on('look', d => {
    if (!ok() || me.room < 0 || !d) return;
    me.name = d.name ? safeName(d.name) : me.name; me.look = cleanLook(d.look);
    socket.to('r' + me.room).emit('peer:look', pub(socket.id, me));
  });

  // 인사(묵례): A가 B에게 건네면 B에게 알림이 가고, B도 A에게 건네면(15초 안) 둘이 함께 묵례해요.
  socket.on('greet', d => {
    if (!ok() || me.room < 0 || !d) return;
    const now = Date.now(); if (now - (me.lastGreet || 0) < 1500) return; me.lastGreet = now;
    const to = typeof d.to === 'string' ? d.to : null; const other = to && players.get(to);
    if (!other || other.room !== me.room || to === socket.id) return;
    if (other.greetTo === socket.id && now - other.greetAt < 15000) {
      other.greetTo = null; me.greetTo = null;
      io.to('r' + me.room).emit('greet:do', { a: to, b: socket.id });
    } else { me.greetTo = to; me.greetAt = now; io.to(to).emit('greet:req', { id: socket.id }); }
  });

  socket.on('booth:enter', (_, ack) => {
    if (!ok() || me.room < 0 || typeof ack !== 'function') return;
    const b = booth(me.room);
    const free = !b.id && (!b.reserved || b.reserved === socket.id || Date.now() > b.until);
    if (b.id === socket.id || free) { clearTimeout(b.timer); b.id = socket.id; b.since = Date.now(); b.reserved = null; const qi = b.queue.indexOf(socket.id); if (qi >= 0) b.queue.splice(qi, 1); ack({ ok: true }); boothBroadcast(me.room); }
    else ack({ ok: false, state: boothPublic(me.room) });
  });
  socket.on('booth:queue', (_, ack) => {
    if (!ok() || me.room < 0) return; const b = booth(me.room);
    if (b.id !== socket.id && b.reserved !== socket.id && !b.queue.includes(socket.id)) b.queue.push(socket.id);
    if (typeof ack === 'function') ack({ pos: b.queue.indexOf(socket.id) + 1 + (b.reserved ? 1 : 0) });
    if (!b.id && !b.reserved) boothNext(me.room); else boothBroadcast(me.room);
  });
  socket.on('booth:unqueue', () => { if (me.room >= 0) boothRelease(me.room, socket.id); });
  socket.on('booth:leave', () => { if (me.room >= 0 && booth(me.room).id === socket.id) boothRelease(me.room, socket.id); });

  socket.on('candle', () => {
    if (!ok() || me.room < 0) return;
    const now = Date.now(); if (now - me.lastCandle < 5000) return; me.lastCandle = now;
    rollDay(); data.candles[me.room]++; data.totalCandles++; dirty = true;
    io.to('r' + me.room).emit('candle', { id: socket.id, room: me.room, name: me.name, total: data.candles[me.room] });
  });

  socket.on('disconnect', () => {
    clearInterval(tick);
    if (me.room >= 0) { socket.to('r' + me.room).emit('peer:leave', socket.id); boothRelease(me.room, socket.id); }
    players.delete(socket.id); broadcastCounts();
  });
});

server.listen(PORT, () => console.log(`Ave 서버 실행 중: http://localhost:${PORT}`));
