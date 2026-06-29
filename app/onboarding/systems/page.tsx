'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useProgress } from '@/app/contexts/ProgressContext';
import SectionNav from '@/app/components/SectionNav';

type StepLink = { label: string; url: string };
type Step = {
  icon: string;
  title: string;
  desc: string;
  note?: string;
  points?: string[];
  links?: StepLink[];
};

const steps: Step[] = [
  {
    icon: '📧',
    title: '클로봇 구글 계정 생성',
    desc: '개인 메일로 받은 초대 메일을 확인해 클로봇 구글 계정(ex. maeve@clobot.co.kr)을 생성하고 로그인하세요. 로그인 후 [클로봇 이용 가이드] 메일을 순서대로 진행하면 됩니다.',
    note: '간혹 초대 메일이 스팸함에 도착해 있을 수 있어요!',
    links: [{ label: 'Gmail 로그인', url: 'https://mail.google.com' }],
  },
  {
    icon: '💬',
    title: 'JANDI(협업툴) 가입 & 설정',
    desc: '구글 계정에서 JANDI 초대 메일을 확인해 가입하세요. 이름은 (영문명)_(국문명) 형식으로 만들어 주세요. 예) 메이브_장은경. 동료들이 얼굴을 빠르게 익힐 수 있도록 프로필 사진도 등록하고, ‘조직도’에서 팀별 구성원을 확인해 보세요.',
    note: '다른 이름으로 만들었다면 총무 담당자(벨라)에게 변경을 요청해 주세요.',
    points: [
      '01. 사내공지방 — 규정·제도·일정 안내',
      '05. 클로봇 talk — 자유롭게 이야기 나누는 공간',
      '07. 휴가/외근/출장 공유 — 원활한 협업을 위한 일정 공유',
      '13. 클로봇 Q&A — 서로 궁금한 점을 묻고 답하는 공간',
    ],
    links: [{ label: '잔디 바로가기', url: 'https://www.jandi.com' }],
  },
  {
    icon: '📖',
    title: 'Confluence 확인',
    desc: '전사 공지와 CLOBOT 생활 가이드(업무 매뉴얼)가 모여 있는 공간입니다. 클로봇 생활에 필요한 정보를 한곳에서 확인할 수 있어요.',
    note: '입사 당일 [전사공지 > 취업규칙]을 꼭 확인해 주세요!',
    links: [{ label: 'Confluence 바로가기', url: 'https://clobot.atlassian.net/wiki/home' }],
  },
  {
    icon: '📁',
    title: 'Google 공유 드라이브',
    desc: '실/팀별 폴더와 문서를 공유하는 공간입니다. [공유 드라이브 > 0. Clobot 생활 가이드]에서 ‘조직도 & 배치도’를 확인해 보세요.',
  },
  {
    icon: '📅',
    title: 'Google 캘린더 (회의실 예약)',
    desc: '회의실 사용 전에는 반드시 구글 캘린더로 예약해 주세요. 캘린더에 회의실을 추가하는 방법은 Confluence 회의실 사용법을 참고하면 됩니다.',
    links: [{ label: '회의실 사용법', url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/1815413022' }],
  },
  {
    icon: '🖥️',
    title: '그룹웨어 (Bizbox Alpha)',
    desc: '출퇴근·전자결재·근태 관리를 진행하는 그룹웨어입니다. 인사담당자가 ID·PW를 전달해 드려요(최초 비밀번호 1234). 항목별 이용법과 전자결재 작성 방법은 Confluence 그룹웨어 사용가이드에서 확인하세요.',
    links: [{ label: '비즈박스알파 로그인', url: 'https://erp.clobot.co.kr/gw/uat/uia/egovLoginUsr.do' }],
  },
  {
    icon: '⏰',
    title: '근태 — 출퇴근 & 유연근무',
    desc: '출퇴근은 사무실 근태단말기(사원증 또는 지문)로 진행합니다. 유연근무는 출근 8~10시(30분 단위), 코어타임 10~17시 기준이며 금요일은 10~17시로 고정입니다. 자세한 신청·진행 방법은 인사/근태 가이드를 확인해 주세요.',
    links: [{ label: '인사/근태 가이드', url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/2249785410/Bizbox' }],
  },
  {
    icon: '🏢',
    title: '마커스빌딩 출입 · 보안',
    desc: '건물 출입을 위해 1층 관리사무소에서 지문을 등록하세요(코어시간 10~17시 방문, "클로봇 직원입니다. 건물 출입 지문 등록하러 왔습니다"라고 말씀). 퇴근 시 각 층 마지막 퇴근자는 소등·냉난방 전원을 끄고, 20시 이후 마지막 퇴근자는 보안(경비) 설정까지 완료해 주세요.',
  },
];

export default function SystemsPage() {
  const { markComplete } = useProgress();

  useEffect(() => {
    markComplete('systems');
  }, [markComplete]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
      <div className="mb-6 sm:mb-8">
        <span className="text-brand-navy text-xs sm:text-sm font-semibold uppercase tracking-widest">Step 4 of 4</span>
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-2 mb-2 sm:mb-3">💻 시스템 가이드</h1>
        <p className="text-gray-500 text-sm sm:text-lg">업무 시 필요한 도구와 로그인 링크를 한눈에 확인하고 바로 접속하세요.</p>
      </div>

      {/* 안내 */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 sm:mb-8 flex gap-3">
        <span className="text-2xl flex-shrink-0">🧭</span>
        <div>
          <p className="font-semibold text-amber-800 text-sm">아래 순서대로 진행하면 가장 수월해요</p>
          <p className="text-amber-700 text-sm mt-1 leading-relaxed">
            구글 계정 생성부터 건물 출입까지, 신규 입사자에게 권장하는 순서대로 정리했어요. ①부터 차례대로 완료해 보세요.
          </p>
        </div>
      </div>

      {/* 단계별 가이드 */}
      <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 flex gap-3 sm:gap-4"
          >
            {/* 번호 배지 */}
            <div className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-brand-navy to-brand-blue text-white text-sm sm:text-base font-bold flex items-center justify-center shadow-sm">
              {i + 1}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <p className="font-bold text-gray-900 text-sm sm:text-base">
                  <span className="mr-1.5">{step.icon}</span>{step.title}
                </p>
                {step.links && step.links.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {step.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-brand-navy/5 text-brand-navy text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-brand-navy hover:text-white transition-colors whitespace-nowrap"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed">{step.desc}</p>

              {step.note && (
                <p className="mt-2 text-xs sm:text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 leading-relaxed">
                  💡 {step.note}
                </p>
              )}

              {step.points && (
                <ul className="mt-2.5 space-y-1">
                  {step.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-gray-600 text-xs sm:text-sm leading-relaxed">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5" />
                      <span className="flex-1">{p}</span>
                    </li>
                  ))}
                </ul>
              )}
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
