'use client';

import { useEffect } from 'react';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const values = [
  { icon: '🤝', title: '신뢰', desc: '동료와 고객, 파트너 모두에게 신뢰를 쌓습니다. 약속을 지키고 투명하게 소통합니다.' },
  { icon: '💡', title: '혁신', desc: '현상에 안주하지 않고 더 나은 방법을 끊임없이 탐구합니다.' },
  { icon: '🌱', title: '성장', desc: '개인의 성장이 곧 회사의 성장입니다. 배움을 장려하고 실패에서 교훈을 찾습니다.' },
  { icon: '❤️', title: '배려', desc: '구성원과 고객을 소중히 여기고, 다양성과 포용을 실천합니다.' },
];

const benefits = [
  { category: '💰 보상', items: ['성과급 및 인센티브', '스톡옵션 프로그램', '연봉 정기 리뷰'] },
  { category: '📚 성장', items: ['도서 구입비 지원 (월 5만원)', '외부 교육 및 컨퍼런스 지원', '사내 스터디 그룹'] },
  { category: '🏖️ 휴가', items: ['연차 15일 (입사 즉시)', '리프레시 휴가 (3년마다 5일)', '생일 반차'] },
  { category: '🍱 편의', items: ['점심 식대 지원', '사내 카페테리아', '헬스장 이용권'] },
];

export default function CulturePage() {
  const { markComplete } = useProgress();
  useEffect(() => { markComplete('culture'); }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <span className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 3 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">🌟 조직문화</h1>
        <p className="text-gray-500 text-sm sm:text-lg">우리가 함께 일하는 방식과 회사가 구성원에게 제공하는 것들을 소개합니다.</p>
      </div>

      {/* 핵심 가치 */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4">✨ 핵심 가치 (Core Values)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {values.map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <div className="text-2xl sm:text-3xl mb-2">{v.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm sm:text-base mb-1">{v.title}</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 일하는 방식 */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 text-white">
        <h2 className="text-base sm:text-lg font-bold mb-4">🖥️ 우리의 일하는 방식</h2>
        <div className="space-y-3">
          {[
            { icon: '⏰', text: '유연근무제 — 코어타임 10시~4시, 나머지는 자유롭게' },
            { icon: '🏠', text: '하이브리드 근무 — 주 3일 사무실, 2일 재택 가능' },
            { icon: '🗣️', text: '수평적 소통 — 직급 대신 영어 이름으로 호칭' },
            { icon: '📢', text: '월간 전사 미팅 — 경영진이 직접 소통하는 올핸즈 미팅' },
          ].map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <span className="text-lg sm:text-xl flex-shrink-0">{item.icon}</span>
              <p className="text-violet-100 text-xs sm:text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 복지 혜택 */}
      <div className="mb-6 sm:mb-8">
        <h2 className="text-base sm:text-lg font-bold text-gray-800 mb-4">🎁 복지 혜택</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {benefits.map((b) => (
            <div key={b.category} className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-700 text-sm sm:text-base mb-3">{b.category}</h3>
              <ul className="space-y-1.5">
                {b.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <SectionNav current="culture" />
    </div>
  );
}
