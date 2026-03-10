import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "则知科技 Zeta ACI | 企业级 AI Agent 落地服务",
  description:
    "则知科技帮助企业构建可编排、可协同、可自迭代、可治理的企业级智能体操作能力体系",
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh" suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
