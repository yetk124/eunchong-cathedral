// 은총성당 서버: 정적 파일 + 실시간 접속(Socket.IO)
const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');
const { Server } = require('socket.io');

const PORT = process.env.PORT || 3000;
const ROOMS = 8;                       // 성당 방 개수 (index.html의 THEMES 수와 같아야 해요)
const MAX_PER_ROOM = 100;
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
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '7d', setHeaders: (res, p) => { if (p.endsWith('.html')) res.setHeader('Cache-Control', 'no-cache'); } }));
app.get('/api/health', (req, res) => res.json({ ok: true }));
app.get('/api/rooms', (req, res) => { rollDay(); res.json({ counts: counts(), candlesToday: data.candles, totalCandles: data.totalCandles }); });

// ---- 접속자 관리 ----
const players = new Map(); // socket.id -> {room,name,look,x,z,f,p}
function counts() { const c = {}; for (let i = 0; i < ROOMS; i++) c[i] = 0; players.forEach(p => { if (p.room >= 0) c[p.room]++; }); return c; }
let countsTimer = null;
function broadcastCounts() { if (countsTimer) return; countsTimer = setTimeout(() => { countsTimer = null; io.emit('counts', counts()); }, 300); }

const clean = (s, n) => String(s || '').replace(/[<>&"'`]/g, '').trim().slice(0, n);
const num = (v, lo, hi, d) => { v = Number(v); return Number.isFinite(v) ? Math.min(hi, Math.max(lo, v)) : d; };
const POSES = ['stand', 'sit', 'pray', 'bless', 'kneel'];
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
    if (me.room >= 0) { socket.leave('r' + me.room); socket.to('r' + me.room).emit('peer:leave', socket.id); }
    Object.assign(me, { room, name: clean(d.name, 12) || '순례자', look: cleanLook(d.look), x: num(d.x, -30, 40, 0), z: num(d.z, -30, 40, 21), f: num(d.f, -10, 10, Math.PI), p: POSES.includes(d.p) ? d.p : 'stand' });
    socket.join('r' + room);
    const others = []; players.forEach((p, id) => { if (id !== socket.id && p.room === room) others.push(pub(id, p)); });
    socket.emit('peers', others);
    socket.to('r' + room).emit('peer:join', pub(socket.id, me));
    broadcastCounts();
  });

  socket.on('state', d => {
    if (!ok() || me.room < 0 || !d) return;
    me.x = num(d.x, -30, 40, me.x); me.z = num(d.z, -30, 40, me.z); me.f = num(d.f, -10, 10, me.f); if (POSES.includes(d.p)) me.p = d.p;
    socket.to('r' + me.room).volatile.emit('peer:state', { id: socket.id, x: me.x, z: me.z, f: me.f, p: me.p });
  });

  socket.on('look', d => {
    if (!ok() || me.room < 0 || !d) return;
    me.name = clean(d.name, 12) || me.name; me.look = cleanLook(d.look);
    socket.to('r' + me.room).emit('peer:look', pub(socket.id, me));
  });

  socket.on('candle', () => {
    if (!ok() || me.room < 0) return;
    const now = Date.now(); if (now - me.lastCandle < 5000) return; me.lastCandle = now;
    rollDay(); data.candles[me.room]++; data.totalCandles++; dirty = true;
    io.to('r' + me.room).emit('candle', { id: socket.id, room: me.room, name: me.name, total: data.candles[me.room] });
  });

  socket.on('disconnect', () => {
    clearInterval(tick);
    if (me.room >= 0) socket.to('r' + me.room).emit('peer:leave', socket.id);
    players.delete(socket.id); broadcastCounts();
  });
});

server.listen(PORT, () => console.log(`은총성당 서버 실행 중: http://localhost:${PORT}`));
