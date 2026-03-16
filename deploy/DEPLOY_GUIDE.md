# Deploy Guide — Windows PC + pm2 + nginx

## 1. Windows PC 준비

### Node.js 설치
https://nodejs.org 에서 LTS 버전 설치

### pm2 전역 설치
```bash
npm install -g pm2
```

### Git 설치 및 레포 클론
```bash
git clone https://github.com/Junseop-Shin/profile.git C:\Users\<USER>\profile
```

---

## 2. 첫 배포

```bash
cd C:\Users\<USER>\profile\next
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
pm2 startup   # Windows 시작 시 자동 실행 설정
```

---

## 3. Cloudflare Tunnel 설정 (권장 — 포트포워딩 불필요)

### cloudflared 설치
https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/

### 터널 생성 및 도메인 연결
```bash
cloudflared tunnel login
cloudflared tunnel create profile
cloudflared tunnel route dns profile YOUR_DOMAIN
```

### 터널 config 파일 (`~/.cloudflared/config.yml`)
```yaml
tunnel: <TUNNEL_ID>
credentials-file: C:\Users\<USER>\.cloudflared\<TUNNEL_ID>.json

ingress:
  - hostname: YOUR_DOMAIN
    service: http://localhost:3000
  - service: http_status:404
```

### 터널 서비스로 등록
```bash
cloudflared service install
```

---

## 4. GitHub Secrets 설정

레포 Settings → Secrets → Actions에 아래 추가:

| Secret | 값 |
|--------|---|
| `DEPLOY_HOST` | Windows PC IP 또는 Cloudflare Tunnel 내부 IP |
| `DEPLOY_USER` | Windows 사용자명 |
| `DEPLOY_SSH_KEY` | SSH 개인키 (Windows에 SSH 서버 설치 필요) |
| `DEPLOY_PATH` | 레포 경로 (예: `C:/Users/<USER>/profile`) |

### Windows SSH 서버 활성화
설정 → 앱 → 선택적 기능 → OpenSSH 서버 설치

---

## 5. 자동 배포 흐름

```
git push origin main  →  GitHub Actions 빌드  →  SSH로 Windows 접속  →  git pull + build + pm2 reload
```

---

## Cloudflare 없이 직접 포트포워딩 방식

1. 공유기 관리 페이지 접속 (192.168.x.1)
2. 포트포워딩: 외부 80/443 → Windows PC IP:3000
3. DDNS 설정 (ipTIME 내장 DDNS 또는 NoIP)
4. 도메인 DNS A레코드를 DDNS 주소로 CNAME 연결
5. nginx + Let's Encrypt certbot으로 SSL 적용
