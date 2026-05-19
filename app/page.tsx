import Link from "next/link";
import Image from "next/image";

const steps = [
  { icon: "🤖", title: "클로봇 소개", desc: "MTP, 비전, 핵심가치", href: "/onboarding/company" },
  { icon: "💼", title: "비즈니스", desc: "주요 서비스 및 고객사", href: "/onboarding/business" },
  { icon: "🌟", title: "조직문화", desc: "핵심 가치 및 복지 혜택", href: "/onboarding/culture" },
  { icon: "💻", title: "시스템 가이드", desc: "업무 필수 도구 및 링크", href: "/onboarding/systems" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)" }}>

      {/* 상단 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
          <Image src="/logo-horizontal.png" alt="CLOBOT" width={120} height={36} className="object-contain sm:w-[140px]" />
          <span className="text-gray-400 text-xs sm:text-sm hidden sm:block">신입 직원 온보딩 가이드</span>
        </div>
      </header>

      {/* 히어로 */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-16 text-center">
        <div className="mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight leading-snug">
            클로봇 가족이 되신 것을<br />
            <span style={{ color: "#60a5fa" }}>진심으로 환영합니다!</span>
          </h1>
          <p className="text-blue-200 text-sm sm:text-base">온보딩 4단계를 순서대로 완료해 주세요. 약 30분이 소요됩니다.</p>
        </div>

        {/* 단계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8 sm:mb-10 w-full max-w-3xl">
          {steps.map((step, i) => (
            <Link
              key={i}
              href={step.href}
              className="rounded-2xl p-4 sm:p-5 text-center border transition-all hover:scale-105 hover:brightness-125 active:scale-95"
              style={{ background: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
            >
              <div className="text-2xl sm:text-3xl mb-1.5 sm:mb-2">{step.icon}</div>
              <p className="text-white font-semibold text-xs sm:text-sm">{i + 1}. {step.title}</p>
              <p className="text-blue-300 text-xs mt-1 hidden sm:block">{step.desc}</p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <Link
          href="/onboarding/company"
          className="bg-white font-bold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-3.5 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 w-full max-w-xs sm:w-auto text-center"
          style={{ color: "#1e3a8a" }}
        >
          온보딩 시작하기 →
        </Link>

        <p className="text-blue-400 text-xs sm:text-sm mt-4 sm:mt-5">언제든지 돌아와서 이어서 진행할 수 있습니다.</p>
      </main>

      {/* 푸터 */}
      <footer className="text-center pb-6 px-4" style={{ color: "rgba(147,197,253,0.6)", fontSize: "12px" }}>
        문의: 인사총무팀 메이브 (maeve@clobot.co.kr · 010.8648.8380)
      </footer>
    </div>
  );
}
