'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ProgressProvider, useProgress, StepId } from '@/app/contexts/ProgressContext';

const NAV_STEPS = [
  { id: 'company' as StepId, label: '클로봇 소개', icon: '🤖', href: '/onboarding/company' },
  { id: 'business' as StepId, label: '비즈니스', icon: '💼', href: '/onboarding/business' },
  { id: 'culture' as StepId, label: '조직문화', icon: '🌟', href: '/onboarding/culture' },
  { id: 'systems' as StepId, label: '시스템 가이드', icon: '💻', href: '/onboarding/systems' },
];

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();
  const router = useRouter();
  const { completedSteps } = useProgress();
  const completed = completedSteps.size;
  const total = NAV_STEPS.length;
  const pct = Math.round((completed / total) * 100);

  const navigate = (href: string) => {
    router.push(href);
    onClose?.();
  };

  return (
    <div className="w-64 flex flex-col h-full text-white" style={{ background: 'linear-gradient(180deg, #0f172a 0%, #1e3a5f 60%, #1e40af 100%)' }}>
      {/* 로고 */}
      <div className="bg-white">
        <Link href="/" onClick={onClose} className="flex items-center justify-center px-6 py-4 hover:bg-gray-50 transition-colors">
          <Image src="/logo-horizontal.png" alt="CLOBOT" width={140} height={42} className="object-contain" />
        </Link>
        <div className="pb-3 flex items-center justify-center">
          <span className="text-xs text-gray-400 font-medium tracking-wide">신입 온보딩 가이드</span>
        </div>
      </div>

      {/* 진행률 */}
      <div className="px-5 py-4 border-b" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <div className="flex justify-between items-center mb-2">
          <span className="text-blue-300 text-xs font-medium">진행률</span>
          <span className="text-white text-xs font-bold">{completed}/{total} 완료</span>
        </div>
        <div className="w-full h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
          <div className="h-1.5 rounded-full transition-all duration-500" style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #34d399, #10b981)' }} />
        </div>
      </div>

      {/* 네비게이션 */}
      <nav className="flex-1 px-4 py-5 space-y-1.5 overflow-y-auto">
        {NAV_STEPS.map((step, i) => {
          const isComplete = completedSteps.has(step.id);
          const isActive = pathname === step.href;
          return (
            <button
              key={step.id}
              onClick={() => navigate(step.href)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-left"
              style={{
                background: isActive ? 'rgba(255,255,255,0.16)' : isComplete ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.04)',
                border: '1px solid',
                borderColor: isActive ? 'rgba(255,255,255,0.35)' : isComplete ? 'rgba(16,185,129,0.35)' : 'rgba(255,255,255,0.07)',
              }}
            >
              <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 text-white"
                style={{ background: isComplete ? '#10b981' : isActive ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.1)' }}>
                {isComplete ? '✓' : i + 1}
              </div>
              <span className={`text-sm font-medium ${isActive ? 'text-white' : isComplete ? 'text-emerald-300' : 'text-blue-200'}`}>
                {step.icon} {step.label}
              </span>
              {isActive && <span className="ml-auto text-white text-xs opacity-70">▶</span>}
            </button>
          );
        })}

        {completed === total && (
          <button onClick={() => navigate('/onboarding/complete')}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl mt-3 transition-all"
            style={{ background: 'rgba(251,191,36,0.15)', border: '1px solid rgba(251,191,36,0.4)' }}>
            <div className="w-7 h-7 rounded-full flex items-center justify-center text-sm" style={{ background: '#f59e0b' }}>🎊</div>
            <span className="text-amber-300 text-sm font-medium">온보딩 완료하기</span>
          </button>
        )}
      </nav>

      {/* 하단 연락처 */}
      <div className="px-5 py-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
        <p className="text-blue-300 text-xs font-semibold mb-1">📞 인사총무팀 메이브</p>
        <p className="text-blue-400 text-xs">maeve@clobot.co.kr</p>
        <p className="text-blue-400 text-xs">010.8648.8380</p>
      </div>
    </div>
  );
}

function OnboardingInner({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* 모바일 백드롭 */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/60 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* 사이드바: 데스크탑=고정, 모바일=슬라이드 */}
      <div className={`fixed inset-y-0 left-0 z-30 transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex-shrink-0 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto">
          <SidebarContent onClose={() => setSidebarOpen(false)} />
        </div>
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 모바일 상단 바 */}
        <header className="md:hidden bg-white border-b border-gray-200 flex items-center justify-between px-4 py-3 sticky top-0 z-10 shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="메뉴 열기"
          >
            <div className="space-y-1.5">
              <span className="block w-5 h-0.5 bg-gray-700 rounded" />
              <span className="block w-5 h-0.5 bg-gray-700 rounded" />
              <span className="block w-5 h-0.5 bg-gray-700 rounded" />
            </div>
          </button>
          <Image src="/logo-horizontal.png" alt="CLOBOT" width={100} height={30} className="object-contain" />
          <div className="w-9" />
        </header>

        <main className="flex-1 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ProgressProvider>
      <OnboardingInner>{children}</OnboardingInner>
    </ProgressProvider>
  );
}
