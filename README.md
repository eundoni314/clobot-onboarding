# CLOBOT 온보딩 사이트

신규 입사자가 입사 첫날부터 빠르게 적응할 수 있도록 만든 온보딩 안내 사이트입니다.

🌐 **라이브 사이트**: https://onboarding-site-umber.vercel.app

---

## 프로젝트 문서

- 📋 [CONTRIBUTING.md](./CONTRIBUTING.md) — **수정/배포 방법 (초보자용 가이드)**
- 🗺️ [ROADMAP.md](./ROADMAP.md) — 앞으로 할 일
- 📝 [CHANGELOG.md](./CHANGELOG.md) — 지금까지 한 일
- 🎫 [GitHub Issues](https://github.com/eundoni314/clobot-onboarding/issues) — 진행 중인 작업

---

## 로컬에서 실행하기

```powershell
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속.

---

## 배포

`main` 브랜치에 푸시하면 [Vercel](https://vercel.com)이 자동으로 배포합니다.
다른 브랜치에 푸시하면 Vercel이 미리보기 URL을 자동 생성합니다.

---

## 기술 스택

- Next.js (App Router, TypeScript)
- Tailwind CSS v4
- React Context (진행 상태 관리)
- localStorage (사용자별 완료 상태 저장)
- Vercel (호스팅 & 자동 배포)
