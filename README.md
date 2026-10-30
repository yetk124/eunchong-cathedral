# Ave · 3D 온라인 성당

같은 성당에 들어온 사람끼리 서로의 캐릭터가 보이고, 초를 봉헌하면 함께 있는 사람들에게도 초가 켜져요.

## 폴더 구조
```
server.js        # 백엔드 (Express + Socket.IO)
package.json
render.yaml      # Render 자동 설정
public/
  index.html     # 성당 앱 (프론트)
  tex/           # 바닥·벽 텍스처
  snd/           # 성가·문 소리
```

## 내 컴퓨터에서 실행
```bash
npm install
npm start
# → http://localhost:3000
```
브라우저 창을 2개 열어 보면 서로 보여요.

## Render에 올리기
1. GitHub에 새 저장소를 만들고 이 폴더를 그대로 push 해요.
   ```bash
   git init && git add . && git commit -m "Ave"
   git branch -M main
   git remote add origin https://github.com/<내아이디>/ave-cathedral.git
   git push -u origin main
   ```
2. https://dashboard.render.com → **New +** → **Blueprint** → 방금 만든 저장소 선택 → **Apply**
   (render.yaml을 읽어서 자동으로 설정돼요)
   - Blueprint 대신 **Web Service**로 만들어도 돼요: Runtime `Node`, Build `npm install`, Start `npm start`
3. 배포가 끝나면 `https://ave-cathedral.onrender.com` 같은 주소가 생겨요.

## 백엔드 기능
| 기능 | 설명 |
|---|---|
| 실시간 접속 | 같은 성당 방에 있는 사람들의 위치·자세(앉기/기도)·옷차림이 보여요 |
| 접속자 수 | 상단 인원 수와 성당 목록에 실제 접속자 수가 나와요 |
| 초 봉헌 공유 | 누가 초를 봉헌하면 같은 방 사람들 화면에도 초가 켜지고 알림이 떠요 (오늘 몇 개인지 집계) |
| `GET /api/rooms` | 방별 접속자 수, 오늘 봉헌된 초 개수 |
| `GET /api/health` | 서버 상태 확인 |

- 도배 방지: 1초에 30개 넘는 메시지 무시, 초 봉헌은 5초에 1번
- 이름은 12자까지, 특수문자는 걸러요

## 알아둘 점
- **무료 플랜은 15분 동안 아무도 없으면 서버가 잠들어요.** 다음 접속 때 깨어나느라 30~60초 걸려요.
- **무료 플랜은 디스크가 저장되지 않아서**, 서버가 재시작되면 초 봉헌 집계(data.json)가 초기화돼요.
  계속 남기려면 Render의 유료 Disk를 붙이거나(환경변수 `DATA_FILE=/var/data/data.json`), Render Postgres 같은 DB를 연결하면 돼요.
- 서버 없이 `public/index.html`만 열어도 혼자 모드로 그대로 동작해요.
- 성가 mp3의 저작권을 확인해 주세요. 문 소리는 김용배, 「성당 나무문 열고 닫는2」(공유마당, CC BY)예요.

## 속도 최적화 (적용됨)
- 3D 라이브러리를 `public/vendor/three-bundle.js` 하나로 합쳐 같은 서버에서 제공 (외부 CDN 대기 없음, 1년 캐시)
- `index.html` 코드 압축 + 서버 gzip 압축 (`compression`)
- 텍스처는 WebP, 성가 mp3는 가볍게
- **무료 서버 잠들기 방지:** https://cron-job.org 같은 무료 서비스에서 `https://내주소.onrender.com/api/health` 를 10분마다 호출하게 등록하면 첫 접속 30~60초 대기가 사라져요.
