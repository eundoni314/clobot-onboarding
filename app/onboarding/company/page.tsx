'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const ciMeanings = [
  {
    title: '점 (빨간색) = 로봇 | Physical Agent',
    desc: '빨간색은 생명력·에너지·역동성을 상징합니다. 로봇이 사람처럼 사고하고 움직이는 dynamic한 존재라는 메시지입니다.',
    accent: '#e8451f',
    bg: 'rgba(232,69,31,0.06)',
  },
  {
    title: '선 (파란색) = Cloud / AI / Data 연결망',
    desc: '파란색은 기술·신뢰·네트워크의 보편성을 상징합니다. 클로봇의 핵심 사업인 CROMS(이기종 로봇 관제) 기반의 클라우드 데이터 플로우와 AI 인텔리전스의 흐름을 표현합니다.',
    accent: '#2563b0',
    bg: 'rgba(37,99,176,0.06)',
  },
  {
    title: '로봇 형상 전체 = Physical AI의 완성체',
    desc: '형상 전체는 Physical AI의 본질을 시각적으로 담아낸 심볼입니다. 점과 선이 모여 사람(로봇) 형상을 이루듯, 개별 로봇(노드)들이 AI·클라우드로 연결되어 하나의 지능체 완성을 의미합니다.',
    accent: '#1e3a6e',
    bg: 'rgba(30,58,110,0.06)',
  },
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

      {/* CI 의미 */}
      <div className="mb-6 sm:mb-8">
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center">
            {/* 로고 */}
            <div className="flex-shrink-0">
              <Image
                src="/images/company/clobot-ci.png"
                alt="클로봇 CI 로고"
                width={170}
                height={140}
                className="object-contain"
              />
            </div>
            {/* 의미 */}
            <div className="flex-1 space-y-2.5 sm:space-y-3 w-full min-w-0">
              {ciMeanings.map((c) => (
                <div
                  key={c.title}
                  className="rounded-xl p-3 sm:p-4"
                  style={{ background: c.bg, borderLeft: `4px solid ${c.accent}` }}
                >
                  <p className="font-bold text-sm sm:text-base mb-1" style={{ color: c.accent }}>
                    {c.title}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionNav current="company" />
    </div>
  );
}
