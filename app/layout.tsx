import type { Metadata, Viewport } from "next";
import { Navigation } from "@/components/navigation";
import { APPCODENAME, APPDESCRIPTION, APPNAME } from "@/lib/const";
import "./globals.css";

export const metadata: Metadata = {
  title: `${APPCODENAME} - ${APPNAME}`,
  description: APPDESCRIPTION,
};

export const viewport: Viewport = {
  initialScale: 1.0,
  width: "device-width",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
