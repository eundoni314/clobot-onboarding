'use client';

import Link from 'next/link';
import { useProgress } from '@/app/contexts/ProgressContext';

const SECTIONS = [
  { id: 'company' as const, icon: '🤖', label: '클로봇 소개', href: '/onboarding/company' },
  { id: 'business' as const, icon: '💼', label: '비즈니스', href: '/onboarding/business' },
  { id: 'culture' as const, icon: '🌟', label: '조직문화', href: '/onboarding/culture' },
  { id: 'systems' as const, icon: '💻', label: '시스템 가이드', href: '/onboarding/systems' },
];

export default function SectionNav({ current }: { current: string }) {
  const { completedSteps } = useProgress();

  return (
    <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">다른 섹션으로 이동</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
        {SECTIONS.map((s) => {
          const isActive = s.id === current;
          const isDone = completedSteps.has(s.id);
          return (
            <Link
              key={s.id}
              href={s.href}
              className={`flex flex-col items-center gap-1.5 sm:gap-2 p-3 sm:p-4 rounded-xl border text-center transition-all hover:scale-105 active:scale-95 ${
                isActive ? 'border-brand-navy/30 bg-brand-navy/5 pointer-events-none' : 'border-gray-200 bg-white hover:border-brand-navy/30 hover:shadow-md'
              }`}
            >
              <div className="relative">
                <span className="text-xl sm:text-2xl">{s.icon}</span>
                {isDone && (
                  <span className="absolute -top-1 -right-2 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center text-white text-xs">✓</span>
                )}
              </div>
              <span className={`text-xs font-medium leading-tight ${isActive ? 'text-brand-navy' : 'text-gray-600'}`}>{s.label}</span>
              {isActive && <span className="text-xs text-brand-navy/70">NOW</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
