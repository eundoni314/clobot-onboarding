'use client';

import { useEffect } from 'react';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const services = [
  { icon: '📱', name: 'B2C 플랫폼', desc: '소비자 대상 모바일 앱 및 웹 서비스. 현재 월간 활성 사용자 200만 명.' },
  { icon: '🏭', name: 'B2B 솔루션', desc: '기업 고객을 위한 SaaS 소프트웨어. 전국 500개 기업에 공급 중.' },
  { icon: '🌐', name: '글로벌 사업', desc: '동남아시아 3개국 진출. 현지화 서비스 운영 중.' },
];

const targets = [
  { label: '올해 매출 목표', value: '2,500억원', icon: '💰' },
  { label: '신규 고객사 목표', value: '100개사', icon: '🤝' },
  { label: '해외 사용자 목표', value: '50만 명', icon: '🌏' },
];

export default function BusinessPage() {
  const { markComplete } = useProgress();
  useEffect(() => { markComplete('business'); }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <span className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 2 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">💼 비즈니스 소개</h1>
        <p className="text-gray-500 text-sm sm:text-lg">우리가 무엇을 만들고, 어떤 고객에게 가치를 전달하는지 알아봐요.</p>
      </div>

      <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-5 sm:mb-6">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">🔍 우리가 하는 일</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          클로봇은 <strong>기술과 데이터를 기반으로 사람들의 생활을 더 편리하게</strong> 만드는 서비스를 개발합니다.
          B2C 플랫폼과 B2B 솔루션을 함께 운영하며, 국내외 다양한 고객에게 혁신적인 경험을 제공합니다.
        </p>
      </div>

      {/* 사업 영역 */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-800">📦 주요 사업 영역</h2>
        {services.map((s) => (
          <div key={s.name} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex gap-3 sm:gap-4 items-start">
            <div className="text-2xl sm:text-3xl flex-shrink-0">{s.icon}</div>
            <div>
              <p className="font-bold text-gray-800 text-sm sm:text-base">{s.name}</p>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* 목표 */}
      <div className="bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 text-white">
        <h2 className="text-base sm:text-lg font-bold mb-4">🎯 올해 주요 목표</h2>
        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
          {targets.map((t) => (
            <div key={t.label}>
              <div className="text-xl sm:text-2xl mb-1">{t.icon}</div>
              <p className="text-base sm:text-xl font-bold">{t.value}</p>
              <p className="text-emerald-100 text-xs mt-1 leading-tight">{t.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 시장 내 위치 */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4">🏆 시장 내 위치</h2>
        <div className="space-y-3">
          {[
            { label: '국내 시장 점유율', value: 23, color: 'bg-indigo-500' },
            { label: '고객 만족도 (NPS)', value: 78, color: 'bg-emerald-500' },
            { label: '재계약률', value: 91, color: 'bg-purple-500' },
          ].map((item) => (
            <div key={item.label}>
              <div className="flex justify-between text-xs sm:text-sm mb-1">
                <span className="text-gray-600">{item.label}</span>
                <span className="font-bold text-gray-800">{item.value}%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className={`h-2 rounded-full ${item.color}`} style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionNav current="business" />
    </div>
  );
}
