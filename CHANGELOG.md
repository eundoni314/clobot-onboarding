# 변경 이력 (Changelog)

이 파일은 사이트에 적용된 변경 사항을 시간 순으로 기록합니다.
가장 최근 변경 사항이 맨 위에 옵니다.

형식: `YYYY-MM-DD — 카테고리 — 내용 (#이슈번호)`

카테고리: `Added`(추가) · `Changed`(변경) · `Fixed`(수정) · `Removed`(삭제) · `Content`(내용 업데이트)

---

## 2026-05-19

### 비즈니스 소개 페이지 전면 개편 (PDF 9–15p 반영)
- **Removed** — 가짜 데이터 전면 제거: B2C/B2B/글로벌 사업 카드, 올해 매출 목표, NPS·재계약률 등 시장 위치 막대그래프
- **Added** — 사업 조직 구성 요약 박스 (네이비 그라데이션 + 주황 포인트)
- **Added** — 4개 사업부 카드 — 번호 뱃지, 한글·영문명, 주요 영역 태그, 활동 요약, 핵심 포인트 3개
  - 01 서비스로봇사업부 (Service Robot) — 청소로봇 운영·관제 (Charamel)
  - 02 필드로봇사업부 (Field Robot) — SPOT 산업 현장 솔루션
  - 03 물류로봇사업본부 (Logistics Robot) — AI 기반 물류 자동화·관제
  - 04 솔루션전략사업부 (Solution Strategy) — CHAMELEON / CROMS
- **Changed** — 서비스로봇 사업부 요약을 두 단락으로 분리 (가독성)
- **Changed** — 사업 조직 구성 박스 dash 제거, 두 줄 분리 + 줄 간격 조정 (`leading-snug` + `mt-0.5`)
- **Changed** — 보라/에메랄드 컬러를 브랜드 컬러(`brand-navy`/`brand-blue`/`brand-orange`)로 교체

### 메인 페이지
- **Fixed** — 1번 카드(클로봇 소개) 설명 정확성 보정: "비전, 미션, 사업 영역" → "MTP, 비전, 핵심가치"

---

## 2026-05-18

### 클로봇 소개 페이지 전면 개편 (#4)
- **Content** — 회사 소개 문구 추가 (PDF 자료 기준)
- **Content** — Vision 텍스트 업데이트: "일과 삶의 공간을 로봇으로 안전하고 행복하게 만듭니다."
- **Added** — MTP 섹션 (🚀 We innovate the world)
- **Added** — 핵심가치 SOFT 4종 카드 (Smart / Open Mind / Fast & Flexibility / Trust)
- **Removed** — 임시 데이터였던 "주요 현황", "회사 연혁" 섹션 삭제
- **Changed** — MTP / Vision 박스 디자인 통일 (다크 그라데이션 + 아이콘 + 주황 포인트)
- **Changed** — SOFT 카드 4개 균일 높이 + 세로 가운데 정렬 (`auto-rows-fr`)
- **Changed** — 서브타이틀을 페이지 내용에 맞게 수정

### 브랜드 디자인 시스템
- **Added** — CLOBOT 브랜드 컬러 시스템 globals.css 등록 (남색 #173273, 파랑, 주황)
- **Changed** — 보라/인디고 컬러를 브랜드 컬러로 교체 (클로봇 소개 페이지부터)

### 기존
- **Added** — 프로젝트 관리 구조 도입 (GitHub Issues, 라벨, CHANGELOG, ROADMAP)
- **Added** — 모바일/태블릿/데스크탑 반응형 최적화
- **Added** — 자유 이동 네비게이션 (`SectionNav` 컴포넌트)
- **Added** — Vercel 자동 배포 연결
- **Content** — CLOBOT 시스템 가이드 실제 데이터 반영 (비즈박스알파, JANDI, Confluence 등)
- **Changed** — 사이드바 클릭 동작 개선 (`<Link>` → `router.push`)
- **Fixed** — 진행 상태 무한 루프 (`useCallback` 적용)
- **Changed** — 히어로 텍스트 크기 축소 (`text-5xl` → `text-3xl`)
- **Changed** — 로고 PNG 흰색 배경이 자연스럽게 보이도록 배치 조정
