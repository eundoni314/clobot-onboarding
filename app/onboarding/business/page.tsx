'use client';

import { useEffect } from 'react';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const divisions = [
  {
    no: '01',
    nameKo: '서비스로봇사업부',
    nameEn: 'Service Robot',
    tags: ['청소로봇', '안내로봇', 'Biz모델', '신규과제'],
    summary:
      '로봇 응용 소프트웨어와 자체 연동 기술을 바탕으로, 하드웨어 제약을 넘어선 자율주행 청소 환경을 설계합니다.\n현장 방문 컨설팅부터 전용 관제 시스템 ‘Charamel’을 통한 사후관리까지, 청소 자동화의 전 과정을 책임집니다.',
    highlights: [
      { title: '자동화 기반의 청소 운영', desc: '반복 청소를 자동화해 인력 의존도를 낮추고 운영 시간을 효율화하며 관리를 간소화합니다.' },
      { title: '제조사 관계없는 연동', desc: '어떤 엘리베이터든 연동 가능하며, 광범위한 환경에서도 안정적으로 주행합니다.' },
      { title: '유연한 운영 확장성', desc: '운영 환경에 맞춘 스케줄을 적용해 다양한 청소 환경에서 적용할 수 있습니다.' },
    ],
  },
  {
    no: '02',
    nameKo: '필드로봇사업부',
    nameEn: 'Field Robot',
    tags: ['SPOT', '휴머노이드', '선행기술개발'],
    summary:
      'SPOT은 복잡하고 위험한 환경에서도 안정적으로 자율 이동하며, 사람을 대신해 반복적이고 위험한 작업을 수행하는 지능형 산업 로봇입니다. 다양한 센서와 뛰어난 확장성을 바탕으로 시설 점검, 안전 관리, 데이터 수집 등 산업 현장에 최적화된 맞춤형 솔루션을 제공합니다.',
    highlights: [
      { title: '일관적인 데이터 확보', desc: '단 한 번의 티칭으로 규칙적이고 일정한 데이터를 자동으로 확보할 수 있습니다.' },
      { title: '설비 점검 비효율 해결', desc: '단순 반복 업무를 SPOT이 수행하여 부족한 인력을 충당할 수 있습니다.' },
      { title: '뛰어난 주행 능력', desc: 'Autowalk 기술로 계단 등 구조화되지 않은 환경에서도 균형을 유지하며 다닐 수 있습니다.' },
    ],
  },
  {
    no: '03',
    nameKo: '물류로봇사업본부',
    nameEn: 'Logistics Robot',
    tags: ['AMR', '물류 자동화', 'Smart Factory', '로봇 솔루션'],
    summary:
      'AI와 로봇 기반으로 고객 환경에 맞는 물류 자동화를 컨설팅하고 시스템을 구축합니다. 로봇 분야에 특화된 솔루션과 기술 역량을 바탕으로 고객 맞춤형 로봇 개발 및 이기종 로봇관제 구축 사업을 진행합니다.',
    highlights: [
      { title: '로봇 관제', desc: '국내 유일의 오픈형 물류로봇관제 플랫폼으로 다양한 물류로봇을 일괄 관리할 수 있습니다.' },
      { title: '고객 맞춤형 로봇 개발', desc: '물류 자동화 컨설팅을 바탕으로 모바일 로봇, 매니퓰레이터, 센서 등을 통합해 맞춤형 시스템을 구축합니다.' },
      { title: '운영 및 유지보수', desc: '설치, 프로그래밍, 시스템 통합 및 운영 등 On-site 기술지원과 유지보수를 진행합니다.' },
    ],
  },
  {
    no: '04',
    nameKo: '솔루션전략사업부',
    nameEn: 'Solution Strategy',
    tags: ['CHAMELEON', 'CROMS', '플랫폼 솔루션 기획', 'SI'],
    summary:
      '두 가지 핵심 자체 플랫폼을 중심으로 클로봇의 로봇 솔루션 전략을 이끕니다. 자율주행 솔루션 ‘카멜레온(CHAMELEON)’과 클라우드 로봇 관제 시스템 ‘CROMS’를 통해, 어떤 환경에서도 다수의 로봇을 안전하고 효율적으로 운영할 수 있게 합니다.',
    highlights: [
      { title: 'CHAMELEON — 자율주행 솔루션', desc: '운영 환경에 맞는 모빌리티 로봇을 손쉽게 구현하고, 다수의 로봇도 최적 경로를 생성해 안전하게 운영할 수 있는 범용 실내 자율주행 솔루션입니다.' },
      { title: 'CROMS — 로봇 관제 시스템', desc: '제조사·운영체제와 관계없이 다수의 로봇을 통합 관리·모니터링하는 국내 유일의 클라우드 로봇 관리 시스템입니다.' },
      { title: '플랫폼 솔루션 기획 / SI', desc: '고객 환경에 맞춰 자체 플랫폼을 조합·통합하는 솔루션 기획과 SI를 수행합니다.' },
    ],
  },
];

export default function BusinessPage() {
  const { markComplete } = useProgress();
  useEffect(() => { markComplete('business'); }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      {/* 헤더 */}
      <div className="mb-6 sm:mb-8">
        <span className="text-brand-navy text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 2 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">💼 비즈니스 소개</h1>
        <p className="text-gray-500 text-sm sm:text-lg">클로봇은 크게 4개 사업부로 구성되어 있어요. 각 사업부가 어떤 일을 하는지 알아봅시다.</p>
      </div>

      {/* 사업 조직 구성 요약 박스 */}
      <div className="bg-gradient-to-br from-brand-navy-dark via-brand-navy to-brand-blue rounded-2xl p-6 sm:p-7 mb-6 sm:mb-8 text-white shadow-md relative overflow-hidden">
        <div className="absolute top-3 right-4 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-brand-orange" />
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-blue-100 mb-2 sm:mb-3">🏢 사업 조직 구성</p>
        <p className="text-sm sm:text-base leading-snug text-blue-50">
          <strong className="text-white">서비스로봇 · 필드로봇 · 물류로봇 · 솔루션전략사업부</strong>
        </p>
        <p className="text-sm sm:text-base leading-snug text-blue-50 mt-0.5">
          4개 사업부가 함께 <span className="text-brand-orange-light font-semibold">Robot Makes Better Life</span>를 만들어 갑니다.
        </p>
      </div>

      {/* 사업부 카드 */}
      <div className="space-y-4 sm:space-y-5 mb-6 sm:mb-8">
        {divisions.map((d) => (
          <div key={d.no} className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100">
            {/* 카드 헤더 */}
            <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div className="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue text-white text-base sm:text-lg font-bold flex items-center justify-center shadow-sm">
                {d.no}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-base sm:text-lg leading-tight">{d.nameKo}</p>
                <p className="text-brand-blue text-xs sm:text-sm font-semibold uppercase tracking-wider mt-0.5">{d.nameEn}</p>
              </div>
            </div>

            {/* 주요 영역 태그 */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
              {d.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] sm:text-xs font-medium px-2.5 py-1 rounded-full bg-brand-navy/5 text-brand-navy border border-brand-navy/10"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* 요약 */}
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 whitespace-pre-line">{d.summary}</p>

            {/* 핵심 포인트 */}
            <div className="border-t border-gray-100 pt-3 sm:pt-4 space-y-2.5 sm:space-y-3">
              {d.highlights.map((h) => (
                <div key={h.title} className="flex gap-2.5 sm:gap-3">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 sm:mt-2" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm">{h.title}</p>
                    <p className="text-gray-500 text-xs sm:text-sm mt-0.5 leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <SectionNav current="business" />
    </div>
  );
}
