'use client';

import { useEffect } from 'react';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const milestones = [
  { year: '2010', event: '회사 창립', desc: '서울 강남구에서 작은 스타트업으로 시작' },
  { year: '2014', event: '시리즈 A 투자 유치', desc: '50억원 투자를 통한 본격적인 성장 시작' },
  { year: '2018', event: '직원 200명 돌파', desc: '급속한 성장과 함께 글로벌 진출 시작' },
  { year: '2022', event: '코스피 상장', desc: '업계 선도 기업으로 자리매김' },
  { year: '현재', event: '직원 500+명', desc: '지속적인 성장을 이어가고 있습니다' },
];

export default function CompanyPage() {
  const { markComplete } = useProgress();
  useEffect(() => { markComplete('company'); }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* 헤더 */}
      <div className="mb-8 sm:mb-10">
        <span className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 1 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">🤖 클로봇 소개</h1>
        <p className="text-gray-500 text-sm sm:text-lg">저희 회사가 어떤 곳인지, 어디서 왔는지 함께 알아봐요.</p>
      </div>

      {/* 비전 & 미션 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">🎯</div>
          <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">비전 (Vision)</h2>
          <p className="text-gray-600 text-sm leading-relaxed">"모든 사람의 일상을 더 편리하고 풍요롭게 만드는 세상을 선도한다."</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
          <div className="text-3xl mb-3">🚀</div>
          <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-2">미션 (Mission)</h2>
          <p className="text-gray-600 text-sm leading-relaxed">"최고의 기술과 사람 중심의 서비스로 고객에게 최고의 가치를 제공한다."</p>
        </div>
      </div>

      {/* 주요 현황 */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 text-white">
        <h2 className="text-base sm:text-lg font-bold mb-4">📊 주요 현황</h2>
        <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
          {[
            { value: '500+', label: '임직원 수' },
            { value: '15년', label: '업력' },
            { value: '2,000억+', label: '연간 매출' },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-xl sm:text-3xl font-bold">{item.value}</p>
              <p className="text-indigo-200 text-xs mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 연혁 */}
      <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-5">📅 회사 연혁</h2>
        <div className="space-y-4">
          {milestones.map((m, i) => (
            <div key={i} className="flex gap-3 sm:gap-4">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-indigo-700 text-xs font-bold">{m.year}</span>
                </div>
                {i < milestones.length - 1 && <div className="w-0.5 flex-1 bg-indigo-100 mt-1" />}
              </div>
              <div className="pb-4">
                <p className="font-semibold text-gray-800 text-sm sm:text-base">{m.event}</p>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionNav current="company" />
    </div>
  );
}
