'use client';

import { useEffect } from 'react';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const softValues = [
  { letter: 'S', name: 'Smart', desc: '우리는 전문성을 가지며 더 큰 성장을 위해 끊임없이 고민하고 탐구합니다.' },
  { letter: 'O', name: 'Open Mind', desc: '우리는 자유롭게 생각을 공유하고 의견을 수용하며 서로를 존중합니다.' },
  { letter: 'F', name: 'Fast & Flexibility', desc: '우리는 변화하는 비즈니스 환경에서 유연하게 행동하며 빠르게 대처합니다.' },
  { letter: 'T', name: 'Trust', desc: '우리는 사회, 고객, 구성원과의 관계에서 신뢰를 바탕으로 행동하며 책임을 다합니다.' },
];

export default function CompanyPage() {
  const { markComplete } = useProgress();
  useEffect(() => { markComplete('company'); }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* 헤더 */}
      <div className="mb-6 sm:mb-8">
        <span className="text-brand-navy text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 1 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">🤖 클로봇 소개</h1>
        <p className="text-gray-500 text-sm sm:text-lg">클로봇의 정체성, 비전, 그리고 우리가 일하는 기준을 소개합니다.</p>
      </div>

      {/* 회사 소개 */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8 space-y-3">
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
          <strong>클로봇은 로봇 서비스 및 솔루션을 개발하고 운영하고 있는 Robotics Tech 회사</strong>입니다.
        </p>
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          세상에 존재하는 로봇기술을 통해 로봇이 단순하고 반복적인 업무를 대신해 사람이 더 중요하고 가치 있는 일에
          시간을 쓰며, 사람들의 생활이 더 나은 방향으로 향하도록 돕는 기술과 서비스를 개발하고 있습니다.
        </p>
      </div>

      {/* MTP */}
      <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-blue rounded-2xl p-6 sm:p-8 mb-4 sm:mb-5 text-white text-center shadow-md relative overflow-hidden">
        <div className="absolute top-3 right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-orange" />
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 mb-2 sm:mb-3">🚀 MTP</p>
        <p className="text-base sm:text-xl font-bold tracking-tight">We innovate the world</p>
      </div>

      {/* Vision */}
      <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-blue rounded-2xl p-6 sm:p-8 mb-6 sm:mb-8 text-white text-center shadow-md relative overflow-hidden">
        <div className="absolute top-3 right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-orange" />
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 mb-2 sm:mb-3">🎯 Vision</p>
        <p className="text-base sm:text-xl font-bold tracking-tight leading-snug">
          일과 삶의 공간을 로봇으로<br className="hidden sm:block" /> 안전하고 행복하게 만듭니다.
        </p>
      </div>

      {/* 핵심가치 SOFT */}
      <div className="mb-6 sm:mb-8">
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

      <SectionNav current="company" />
    </div>
  );
}
