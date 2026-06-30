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
  notes?: string[];
  points?: string[];
  links?: StepLink[];
};

const steps: Step[] = [
  {
    icon: '📧',
    title: '클로봇 구글 계정 생성',
    desc: '면접 시 인사담당자와 주고 받았던 개인 메일을 확인해 주세요.\n초대 메일을 확인해 클로봇 구글 계정을 생성하고 로그인하세요.\n로그인 후 [클로봇 이용 가이드] 메일을 순서대로 진행해 주시면 됩니다.',
    notes: [
      '메일을 받지 못하였을 경우 인사담당자에게 문의해 주세요.',
      '간혹 초대 메일이 스팸함에 도착해 있을 수 있어요!',
    ],
    links: [{ label: 'Gmail 로그인', url: 'https://mail.google.com' }],
  },
  {
    icon: '💬',
    title: 'JANDI(협업툴) 가입 & 설정',
    desc: '생성된 구글 계정에서 JANDI 초대 메일을 확인해 가입해 주세요.\n이름은 (영문명)_(국문명) 형식으로 만들어 주세요. (예) 메이브_장은경\n+ 동료들이 얼굴을 빠르게 익힐 수 있도록 프로필 사진을 등록해 주세요.',
    notes: ['다른 이름으로 만들었다면 총무 담당자(벨라)에게 변경을 요청해 주세요.'],
    links: [{ label: '잔디 바로가기', url: 'https://www.jandi.com' }],
  },
  {
    icon: '📖',
    title: 'Confluence 확인',
    desc: '전사 공지와 CLOBOT 생활 가이드(업무 매뉴얼)가 모여 있는 공간입니다.\n클로봇 생활에 필요한 정보를 한곳에서 확인할 수 있어요.',
    notes: ['입사 당일 [전사공지 > 취업규칙]을 꼭 확인해 주세요!'],
    links: [{ label: 'Confluence 바로가기', url: 'https://clobot.atlassian.net/wiki/home' }],
  },
  {
    icon: '📁',
    title: 'Google 공유 드라이브',
    desc: '클로봇의 폴더와 문서를 실/팀별로 공유하고 있어요.\n[공유 드라이브 > 0. Clobot 생활 가이드]에서 ‘조직도 & 배치도’도 확인할 수 있어요.',
  },
  {
    icon: '📅',
    title: 'Google 캘린더 (회의실 예약)',
    desc: '회의실 사용 전에는 반드시 구글 캘린더로 예약해 주세요.\n캘린더에 회의실 추가는 ‘Confluence 회의실 사용법’에서 가능합니다.',
    notes: ['원활한 협업을 위해 업무 일정 및 개인 휴가 일정도 캘린더에 등록해 주세요.'],
    links: [{ label: 'Google 캘린더 추가', url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/1815413022' }],
  },
  {
    icon: '🖥️',
    title: '그룹웨어 (Bizbox Alpha)',
    desc: '출퇴근 / 전자결재 / 근태 관리를 진행하는 그룹웨어입니다.\n인사담당자가 ID, PW를 전달해 드려요. (ID는 사번, 최초 PW는 1234)\n항목별 이용법과 전자결재 작성 방법은 ‘Confluence 그룹웨어 사용가이드’에서 확인해 주세요.',
    notes: [
      '모바일은 플레이/앱 스토어에서 어플 ‘Bizbox Alpha’를 다운로드 받은 후 진행해 주세요.\n(모바일 ID는 clobot이며, 사원ID·비밀번호는 PC와 동일합니다.)',
    ],
    links: [{ label: 'Bizbox Alpha 로그인', url: 'https://erp.clobot.co.kr/gw/uat/uia/egovLoginUsr.do' }],
  },
  {
    icon: '⏰',
    title: '근태 — 출퇴근 & 유연근무',
    desc: '기본 출퇴근(사무실 출근)의 경우 근태단말기 내 사원증 혹은 지문을 찍으셔야 합니다.\n\n전사원은 10-19시 근무계획 및 시간이 초기 설정되어 있는 상태입니다.\n개인 별 근무계획 및 시간 설정 변경을 희망하는 경우, 유연근무 신청을 통해 가능합니다.\n+ 유연근무 신청을 희망하는 경우 ‘그룹웨어 가이드_근태’를 통해 확인해 주세요.',
    notes: [
      '외근/출장 등으로 인해 출퇴근(근태단말기 사용) 진행이 어려울 경우 모바일로 출퇴근을 진행하며,\n모바일출퇴근을 진행할 경우 외근/출장신청서 기안 상신 혹은 잔디로 필히 일정을 공유해야 합니다.',
    ],
    links: [{ label: '인사/근태 가이드', url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/2249785410/Bizbox' }],
  },
  {
    icon: '🏢',
    title: '마커스빌딩 출입 · 보안',
    desc: '입사 당일 건물 출입을 위해 1층 관리사무소에서 지문을 등록해 주세요.\n(10~17시 방문하여, "클로봇 직원입니다. 건물 출입 지문 등록하러 왔습니다"라고 소장님께 말씀!)',
    notes: [
      '퇴근 시 각 층 마지막 퇴근자는 소등 및 냉난방 전원을 꺼주세요.\n20시 이후 마지막 퇴근자는 보안(경비) 설정까지 완료해 주세요.',
    ],
    links: [{ label: '마커스빌딩 안내', url: 'https://clobot.atlassian.net/wiki/spaces/ansdufdj1/pages/2038333446/_' }],
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
            구글 계정 생성부터 건물 출입까지, 신규 입사자에게 권장하는 순서대로 정리했어요.
            <br />
            ①부터 차례대로 완료해 보세요.
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

              <p className="text-gray-600 text-xs sm:text-sm mt-1.5 leading-relaxed whitespace-pre-line">{step.desc}</p>

              {step.notes && step.notes.length > 0 && (
                <div className="mt-2 space-y-1.5">
                  {step.notes.map((n) => (
                    <p
                      key={n}
                      className="text-xs sm:text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 leading-relaxed whitespace-pre-line"
                    >
                      💡 {n}
                    </p>
                  ))}
                </div>
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
        <h2 className="font-bold mb-4 text-sm sm:text-base">궁금한 점이 있다면?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          {[
            { icon: '👩‍💼', label: '담당자', value: '인사총무팀 메이브 (장은경)' },
            { icon: '📧', label: '이메일', value: 'maeve@clobot.co.kr' },
            { icon: '📞', label: '연락처', value: '010-8648-8380' },
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
