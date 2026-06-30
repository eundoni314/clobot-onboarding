'use client';

import { useEffect } from 'react';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

// 전 직원 화상미팅을 표현한 일러스트 타일 (개발 / 기획 / 인사 / 연구 / 영업 등 다양한 직군)
const meetingTiles = [
  { emoji: '👩‍💻', bg: 'linear-gradient(135deg,#4338ca,#818cf8)' }, // 개발자
  { emoji: '🧑‍💼', bg: 'linear-gradient(135deg,#1e3a5f,#2563b0)' }, // 기획자
  { emoji: '👨‍💼', bg: 'linear-gradient(135deg,#7c2d12,#f97316)' }, // 인사담당자
  { emoji: '👩‍🔬', bg: 'linear-gradient(135deg,#0f766e,#14b8a6)', speaking: true }, // 연구개발자
  { emoji: '🧑‍💻', bg: 'linear-gradient(135deg,#312e81,#4f46e5)' }, // 개발자
  { emoji: '👩‍💼', bg: 'linear-gradient(135deg,#155e75,#0891b2)' }, // 영업담당자
  { emoji: '🧑‍🔬', bg: 'linear-gradient(135deg,#1e40af,#3b82f6)' }, // 연구개발자
  { emoji: '👨‍💻', bg: 'linear-gradient(135deg,#0e7490,#22d3ee)' }, // 개발자
];

const storyLinks = [
  { label: '클로봇 링크드인', icon: '💼', url: 'https://www.linkedin.com/company/34227640/admin/dashboard/' },
  { label: '클로봇 유튜브', icon: '▶️', url: 'https://www.youtube.com/channel/UCau5FLJpMxhvW-IHZ8c8qKQ' },
];

const softValues = [
  { letter: 'S', name: 'Smart', desc: '우리는 전문성을 가지며 더 큰 성장을 위해 끊임없이 고민하고 탐구합니다.' },
  { letter: 'O', name: 'Open Mind', desc: '우리는 자유롭게 생각을 공유하고 의견을 수용하며 서로를 존중합니다.' },
  { letter: 'F', name: 'Fast & Flexibility', desc: '우리는 변화하는 비즈니스 환경에서 유연하게 행동하며 빠르게 대처합니다.' },
  { letter: 'T', name: 'Trust', desc: '우리는 사회, 고객, 구성원과의 관계에서 신뢰를 바탕으로 행동하며 책임을 다합니다.' },
];

const talents = [
  { title: '자신의 일을 즐기며\n일을 주도하는 인재', desc: '클로봇 구성원들은 본인의 업무에 책임을 다하며 누구보다 열정적으로 행동합니다.' },
  { title: '빠르게 성장하며,\n도전하는 인재', desc: '클로봇 구성원들은 끊임없이 배우며 더 큰 역량으로 빠르게 성장합니다.' },
  { title: '다양한 역할과\n유연한 자세를 가지는 인재', desc: '클로봇 구성원들은 피드백을 적극적으로 수용하며 유연한 자세와 다양한 역할을 수행합니다.' },
  { title: '팀으로서 함께 일하고\n우리가 하는 일에\n기쁨을 느끼는 인재', desc: '클로봇 구성원들은 혼자가 아닌 팀으로 일하며 팀과 회사의 목표를 우선합니다.' },
  { title: '사람을 존중하고\n우선하는 인재', desc: '클로봇 구성원들은 상대방에 대한 예의와 배려를 바탕으로 서로를 존중합니다.' },
];

const supports = [
  {
    icon: '🤖',
    title: '클로봇만의 특별함',
    items: ['영어 이름을 통한 수평적 커뮤니케이션 문화', '정보공유회 및 타운홀미팅을 통한 정보 공유 및 소통의 시간', '창립기념일 유급휴가 및 특별 EVENT!'],
  },
  {
    icon: '⏰',
    title: '일과 삶의 균형',
    items: ['8시–10시까지 30분 단위로 원하는 시간에 출근', '매주 금요일은 10시–17시 근무 — 한 주의 피로를 날려버릴 수 있도록 Refresh!', '자유롭게 각자 연차/반차/반반차 사용'],
  },
  {
    icon: '💐',
    title: '특별한 날엔, 더 특별한 지원',
    items: ['생일/출산 선물 지원', '생일자 조기 퇴근 지원', '추석/설날 선물 지원', '수습기간 종료 후 축하 선물 지원', '임직원 종합 건강검진 지원'],
  },
  {
    icon: '🎸',
    title: '행복한 클로봇 생활',
    items: ['점심 및 저녁 식대 지원', '사내 동호회 지원', '팀별 워크숍 및 매월 부서운영비 지원'],
  },
  {
    icon: '🌴',
    title: '리프레시를 위한 휴가',
    items: ['장기 근속 포상제도 운영', '근로자휴가지원사업 전액 지원'],
  },
  {
    icon: '📘',
    title: '성장의 즐거움',
    items: ['직무 교육비 지원', '도서 구매 지원'],
  },
];

export default function CulturePage() {
  const { markComplete } = useProgress();
  useEffect(() => { markComplete('culture'); }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <span className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 3 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">🌟 조직문화</h1>
        <p className="text-gray-500 text-sm sm:text-lg">우리가 함께 일하는 방식과 함께 몰입하고 즐겁게 일할 수 있는 환경을 소개합니다.</p>
      </div>

      {/* 조직도 · 배치도 안내 */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">🗂️ 조직도 · 배치도</h2>
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex items-start gap-3 sm:gap-4">
          <span className="text-2xl flex-shrink-0">📁</span>
          <div className="flex-1 min-w-0">
            <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
              클로봇 소개자료 및 조직도와 배치도는 아래 드라이브에서 확인해 주세요!
            </p>
            <p className="mt-1.5 inline-block rounded-lg bg-gray-100 text-gray-700 text-xs sm:text-sm font-mono px-2.5 py-1 break-all">
              G:\공유 드라이브\0. Clobot 생활 가이드
            </p>
          </div>
        </div>
      </div>

      {/* 핵심가치 SOFT */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">⭐ 핵심가치 (Core Values) — SOFT</h2>
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed font-medium">
            클로봇 구성원들은 <strong className="text-brand-navy">SOFT</strong>한 핵심가치를 매일 실천합니다.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            클로봇의 <strong className="text-gray-800">SOFT</strong>한 핵심가치는 자신의 업무를 할 때, 동료와 함께 협업을 할 때, 고객과의 미팅을 할 때 등 모든 곳에서 공유되며 우리의 일하는 방식의 기준이 됩니다.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 auto-rows-fr">
          {softValues.map((v) => (
            <div key={v.letter} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-center">
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue text-white text-2xl sm:text-3xl font-bold flex items-center justify-center shadow-sm">
                {v.letter}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-800 text-sm sm:text-base">{v.name}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 인재상 */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">👥 인재상 — SOFT를 닮은 사람들</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
          <strong className="text-brand-navy">SOFT</strong>한 핵심가치를 바탕으로, 로봇과 함께하는 더 나은 내일을 만들어가는 클로봇의 인재상입니다.
        </p>
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 divide-y divide-gray-100">
          {talents.map((t) => (
            <div key={t.title} className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 py-2 sm:py-2.5 first:pt-0 last:pb-0">
              <div className="flex-shrink-0 sm:w-52 rounded-xl border-2 border-brand-navy px-3 py-2 sm:py-3 text-center">
                <p className="text-brand-navy font-bold text-xs sm:text-sm leading-snug whitespace-pre-line">{t.title}</p>
              </div>
              <p className="flex-1 text-gray-600 text-xs sm:text-sm leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* '몰입'을 위한 지원 */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">💪 ‘몰입’을 위한 지원</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
          구성원이 일에 <strong className="text-brand-navy">‘몰입’</strong>할 수 있도록, 클로봇은 다양한 제도와 복지로 일하는 환경을 함께 만들어 갑니다.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {supports.map((s) => (
            <div key={s.title} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="text-xl sm:text-2xl flex-shrink-0">{s.icon}</span>
                <h3 className="font-bold text-gray-800 text-sm sm:text-base leading-snug">{s.title}</h3>
              </div>
              <ul className="space-y-1.5">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0 mt-1.5" />
                    <span className="flex-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 클로봇 스토리 */}
      <div className="mb-12 sm:mb-16">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2 sm:mb-3">📖 클로봇 스토리</h2>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5">
          클로봇이 함께 일하고 즐기며 쌓아온 이야기들을 소개합니다.
        </p>

        {/* 월례미팅 (분기별) — 강조 */}
        <div className="rounded-2xl overflow-hidden border border-brand-navy/15 bg-white shadow-sm mb-4 sm:mb-5">
          <div className="grid sm:grid-cols-2">
            {/* 전 직원 화상미팅 일러스트 */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2 sm:mb-2.5">
                <span className="flex items-center gap-1.5 text-white/90 text-[10px] sm:text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> clobot monthly meeting
                </span>
                <span className="text-white/45 text-[10px]">참여자 140명</span>
              </div>
              <div className="grid grid-cols-4 gap-1 sm:gap-1.5">
                {meetingTiles.map((t, i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] rounded-md flex items-center justify-center text-sm sm:text-lg"
                    style={{ background: t.bg, boxShadow: t.speaking ? '0 0 0 2px #34d399' : undefined }}
                  >
                    <span>{t.emoji}</span>
                    <span className="absolute bottom-0.5 right-0.5 w-1 h-1 rounded-full bg-emerald-400" />
                  </div>
                ))}
              </div>
            </div>
            <div className="p-5 sm:p-6 flex flex-col justify-center">
              <span className="inline-block self-start rounded-full bg-brand-orange/10 text-brand-orange text-[11px] sm:text-xs font-bold px-2.5 py-1 mb-2">
                ⭐ 분기별 진행 · 전사 참여
              </span>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-1.5">월례미팅 &amp; 교육</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                분기별로 전 구성원이 한자리에 모여 회사 소식과 사업 현황을 공유하고, 함께 배우고 성장하는 클로봇의 가장 중요한 소통의 시간입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 채널 링크 */}
        <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 border border-gray-100">
          <p className="text-gray-600 text-xs sm:text-sm mb-3">다양한 클로봇 이야기는 아래 채널에서 확인해 주세요 😊</p>
          <div className="flex flex-wrap gap-2">
            {storyLinks.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-white border border-gray-200 text-gray-700 text-xs sm:text-sm font-semibold px-4 py-2 hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <span>{l.icon}</span>
                {l.label}
                <span className="opacity-60">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <SectionNav current="culture" />
    </div>
  );
}
