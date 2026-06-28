'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

const systemGroups = [
  {
    category: '🖥️ 필수 사이트',
    color: 'from-red-500 to-rose-600',
    items: [
      {
        icon: '📋',
        name: '비즈박스알파 (그룹웨어)',
        desc: '출퇴근, 근태 관리, 결재, 전자문서 — 초기 계정: 아이디 260503 / 비밀번호 1234',
        url: 'https://erp.clobot.co.kr/gw/uat/uia/egovLoginUsr.do',
        tag: '필수',
      },
      {
        icon: '💬',
        name: 'JANDI (잔디)',
        desc: '사내 메신저 — 초대 메일 확인 후 가입. 이름: 메이브_장은경 형식으로 설정. 프로필 사진 입사 다음날까지 등록!',
        url: 'https://www.jandi.com',
        tag: '필수',
      },
    ],
  },
  {
    category: '📚 참고 사이트 & 자료',
    color: 'from-blue-500 to-indigo-600',
    items: [
      {
        icon: '📖',
        name: 'Confluence (생활가이드)',
        desc: '전사 공지, CLOBOT 생활가이드, 각종 업무 매뉴얼 모음',
        url: 'https://clobot.atlassian.net/wiki/home',
        tag: '필수',
      },
      {
        icon: '🌐',
        name: '클로봇 채용 홈페이지',
        desc: '클로봇의 다양한 소식과 이야기를 확인해 보세요.',
        url: 'https://clobotroas-recruit.com/',
        tag: '참고',
      },
      {
        icon: '📁',
        name: '클로봇 공유 드라이브',
        desc: '기업소개서, 조직도, 배치도 등 — G:\\공유 드라이브\\0. Clobot 생활 가이드',
        url: '#',
        tag: '참고',
      },
    ],
  },
  {
    category: '⏰ 근태 관리',
    color: 'from-emerald-500 to-teal-600',
    items: [
      {
        icon: '🕐',
        name: '근태 가이드 (Bizbox)',
        desc: '출퇴근, 유연근무 진행 방법 및 연차 사용 방법. 유연근무 시 출퇴근 시간은 사전 또는 당일 변경!',
        url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/2249785410/Bizbox',
        tag: '필수',
      },
    ],
  },
  {
    category: '📅 캘린더 & 시설',
    color: 'from-violet-500 to-purple-600',
    items: [
      {
        icon: '🏠',
        name: '회의실 예약 가이드',
        desc: '구글 캘린더에서 회의실 아이디 구독 후 사용. 사용 전 반드시 예약 확인!',
        url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/1815413022',
        tag: '참고',
      },
      {
        icon: '🖨️',
        name: '복합기 설정 방법',
        desc: '본인 노트북에 프린터/스캐너 설정하는 방법. 처음 사용 전 설정 필수!',
        url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/1815347342',
        tag: '참고',
      },
      {
        icon: '🚗',
        name: '주차 등록',
        desc: '자차 이용 시 주차 등록 및 공제 신청 — 인사총무팀 벨라에게 문의',
        url: '#',
        tag: '해당자',
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  '필수': 'bg-red-100 text-red-700',
  '참고': 'bg-blue-100 text-blue-700',
  '해당자': 'bg-gray-100 text-gray-600',
};

export default function SystemsPage() {
  const { markComplete } = useProgress();

  useEffect(() => {
    markComplete('systems');
  }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="mb-8 sm:mb-10">
        <span className="text-indigo-600 text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 4 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">💻 시스템 가이드</h1>
        <p className="text-gray-500 text-sm sm:text-lg">업무 시 필요한 도구와 로그인 링크를 한눈에 확인하고 바로 접속하세요.</p>
      </div>

      {/* Quick tip */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-8 flex gap-3">
        <span className="text-2xl flex-shrink-0">⚠️</span>
        <div>
          <p className="font-semibold text-amber-800 text-sm">첫날 반드시 처리해야 하는 항목</p>
          <p className="text-amber-700 text-sm mt-1 leading-relaxed">
            <strong>① 비즈박스알파</strong> 로그인 후 비밀번호 변경 &nbsp;·&nbsp;
            <strong>② 잔디 초대 메일</strong> 확인 후 가입 및 이름/프로필 사진 등록 &nbsp;·&nbsp;
            <strong>③ 잔디 상태메시지</strong>에 본인 주요 업무(R&amp;R) 작성
          </p>
        </div>
      </div>

      {/* System groups */}
      <div className="space-y-5 sm:space-y-6 mb-6 sm:mb-8">
        {systemGroups.map((group) => (
          <div key={group.category}>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${group.color} text-white text-sm font-semibold mb-3`}>
              {group.category}
            </div>
            <div className="space-y-2">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="bg-white rounded-xl p-3 sm:p-4 shadow-sm border border-gray-100 flex items-start gap-3 sm:gap-4 hover:border-blue-200 hover:shadow-md transition-all group"
                >
                  <div className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  {item.url !== '#' && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 bg-indigo-50 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-full hover:bg-indigo-100 transition-colors group-hover:bg-indigo-600 group-hover:text-white whitespace-nowrap"
                    >
                      바로가기 →
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* HR Contact */}
      <div className="bg-gray-900 rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 text-white">
        <h2 className="font-bold mb-4 text-sm sm:text-base">🆘 궁금한 점이 있다면?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { icon: '👩‍💼', label: '담당자', value: '인사총무팀 메이브 (장은경)' },
            { icon: '📧', label: '이메일', value: 'maeve@clobot.co.kr' },
            { icon: '📞', label: '전화', value: '010.8648.8380' },
            { icon: '🏢', label: '경영지원실', value: 'management@clobot.co.kr' },
          ].map((c) => (
            <div key={c.label} className="flex items-start gap-2">
              <span className="text-lg flex-shrink-0">{c.icon}</span>
              <div>
                <p className="text-gray-400 text-xs">{c.label}</p>
                <p className="text-white text-sm font-medium">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionNav current="systems" />

      <div className="mt-6 text-center">
        <Link
          href="/onboarding/complete"
          className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold px-10 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md hover:shadow-lg"
        >
          🎉 모두 완료했어요!
        </Link>
      </div>
    </div>
  );
}
