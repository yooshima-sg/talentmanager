import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "認証 - 資産管理システム",
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
