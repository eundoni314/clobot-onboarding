# 개발 가이드 (초보자용)

이 문서는 **혼자서도 안전하게 사이트를 수정하고 배포**할 수 있도록 안내하는 절차서입니다.

---

## 빠른 시작 — 평소 수정할 때 흐름

작은 수정 (예: 직원 수 변경, 문구 수정)은 아래 3줄이면 끝납니다.

```powershell
git add .
git commit -m "수정 내용 짧게"
git push
```

`git push` 하면 **Vercel이 자동으로 새 버전을 배포**합니다. 2~3분 후 라이브 사이트에 반영돼요.

---

## 안전한 수정 흐름 — 브랜치 사용 (큰 작업용)

큰 작업(예: 새 페이지 추가, 디자인 개편)을 할 때는 **브랜치(branch)** 를 만들어서 작업하세요.
이유: 브랜치에서 작업하면 라이브 사이트에 영향을 주지 않고, Vercel이 **미리보기 URL**을 만들어주기 때문에 안전하게 테스트할 수 있습니다.

### 1️⃣ 브랜치 만들고 이동

```powershell
git checkout -b feature/faq-search
```

브랜치 이름은 `feature/할일이름` 형식 (예: `feature/faq-search`, `feature/landing-redesign`).

### 2️⃣ 코드 수정

원하는 만큼 자유롭게 수정하세요.

### 3️⃣ 변경 사항 저장 & 푸시

```powershell
git add .
git commit -m "FAQ 검색 페이지 초안"
git push -u origin feature/faq-search
```

> ⚠️ 첫 푸시에만 `-u origin 브랜치이름`이 필요해요. 그다음부터는 `git push`만으로 충분합니다.

### 4️⃣ Vercel 미리보기 URL로 테스트

Vercel이 자동으로 이 브랜치 전용 미리보기 URL을 만들어요.
GitHub PR 페이지나 Vercel 대시보드에서 확인할 수 있습니다.

### 5️⃣ 마음에 들면 main에 합치기 (Pull Request)

```powershell
gh pr create --title "FAQ 검색 기능 추가" --body "이슈 #1 해결"
gh pr merge --merge
```

또는 GitHub 웹페이지에서 PR 만들고 Merge 버튼 클릭.

### 6️⃣ main 브랜치로 돌아오기

```powershell
git checkout main
git pull
```

---

## GitHub Issues로 할 일 관리하기

### 새 작업 등록하기

```powershell
gh issue create --title "직원수 700명으로 업데이트" --label "콘텐츠" --label "우선순위:높음"
```

### 내 이슈 목록 보기

```powershell
gh issue list
```

### 이슈 닫기 (작업 완료 후)

```powershell
gh issue close 1
```

> 💡 커밋 메시지에 `#이슈번호`를 적으면 자동으로 연결돼요. 예: `git commit -m "FAQ 페이지 추가 #1"`

### 라벨 종류

- `기능추가` — 새 기능
- `디자인` — UI/UX 개선
- `버그수정` — 동작 오류
- `콘텐츠` — 텍스트/숫자 업데이트
- `우선순위:높음/보통/낮음`

---

## 수정 내역 기록하기

큰 변경이 끝나면 [CHANGELOG.md](./CHANGELOG.md) 맨 위에 한 줄 추가하세요.

```markdown
## 2026-05-20
- **Added** — FAQ 검색 페이지 추가 (#1)
```

> 💡 작은 콘텐츠 수정은 CHANGELOG에 굳이 안 적어도 됩니다. **새 기능, 디자인 개편, 중요한 버그 수정**만 적어도 충분해요.

---

## 자주 쓰는 명령어 치트시트

| 하고 싶은 것 | 명령어 |
|---|---|
| 현재 상태 확인 | `git status` |
| 변경 사항 보기 | `git diff` |
| 모든 변경 저장 | `git add . ; git commit -m "메시지"` |
| GitHub에 올리기 | `git push` |
| 다른 사람 변경 받기 | `git pull` |
| 새 브랜치 만들기 | `git checkout -b feature/이름` |
| 브랜치 목록 | `git branch` |
| 이슈 만들기 | `gh issue create` |
| 이슈 목록 | `gh issue list` |
| PR 만들기 | `gh pr create` |

---

## 막혔을 때

1. `git status`로 현재 상태 확인
2. 에러 메시지를 그대로 Claude에게 전달
3. **절대 `git reset --hard` 같은 위험한 명령어는 직접 실행하지 마세요** — 작업이 사라질 수 있습니다
