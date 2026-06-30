import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  metadataBase: new URL("https://onboarding-site-umber.vercel.app"),
  title: "신입 직원 온보딩 | Welcome",
  description: "클로봇 신규 입사자를 위한 온보딩 가이드",
  openGraph: {
    title: "클로봇 신입 직원 온보딩 | Welcome",
    description: "클로봇 가족이 되신 것을 진심으로 환영합니다! 온보딩 4단계를 순서대로 완료해 주세요.",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${geist.variable} h-full`}>
      <body className="h-full bg-gray-50 font-sans antialiased">{children}</body>
    </html>
  );
}
