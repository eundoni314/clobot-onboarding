'use client';

import Link from 'next/link';
import { useProgress } from '@/app/contexts/ProgressContext';

const summaryItems = [
  { icon: '🤖', title: '클로봇 소개', href: '/onboarding/company' },
  { icon: '💼', title: '비즈니스', href: '/onboarding/business' },
  { icon: '🌟', title: '조직문화', href: '/onboarding/culture' },
  { icon: '💻', title: '시스템 가이드', href: '/onboarding/systems' },
];

export default function CompletePage() {
  const { completedSteps } = useProgress();
  const allDone = completedSteps.size === 4;

  return (
    <div className="max-w-2xl mx-auto px-8 py-16 text-center">
      {/* Celebration */}
      <div className="mb-8">
        <div className="text-8xl mb-4 animate-bounce">🎊</div>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          {allDone ? '온보딩 완료!' : '거의 다 왔어요!'}
        </h1>
        <p className="text-gray-500 text-lg">
          {allDone
            ? '모든 과정을 완료했습니다. 클로봇에서의 첫 발걸음을 성공적으로 내디뎠어요!'
            : '아직 완료하지 않은 단계가 있어요. 모두 완료해주세요!'}
        </p>
      </div>

      {/* Progress summary */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-6 text-left">
        <h2 className="font-bold text-gray-800 mb-4">📋 완료된 항목</h2>
        <div className="space-y-2">
          {summaryItems.map((item) => {
            const stepId = item.href.split('/').pop() as 'company' | 'business' | 'culture' | 'systems';
            const done = completedSteps.has(stepId);
            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${done ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-400'}`}>
                  {done ? '✓' : '○'}
                </div>
                <span className={`text-sm ${done ? 'text-gray-800' : 'text-gray-400 line-through'}`}>
                  {item.icon} {item.title}
                </span>
                {!done && (
                  <Link href={item.href} className="ml-auto text-xs text-indigo-600 hover:underline">
                    완료하기 →
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact HR */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 mb-8 text-white text-left">
        <h2 className="font-bold mb-3">❓ 궁금한 점이 있으신가요? ❓</h2>
        <p className="text-indigo-200 text-sm mb-1">경영관리실이 언제든지 도와드립니다!</p>
        <p className="text-indigo-200 text-sm mb-4">방문 시, 신규입사자 000이라고 말씀해 주세요!</p>
        <div className="flex gap-4">
          <div>
            <p className="text-indigo-300 text-xs">위치</p>
            <p className="font-semibold text-sm">마커스빌딩 7층</p>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3">
        <Link
          href="/"
          className="bg-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:bg-indigo-700 transition-colors"
        >
          처음 화면으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
