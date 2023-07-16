import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Header from '../components/header'

const noto = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NIS DEVS",
  description:
    "коммьюнити разработчиков со всех сфер Назарбаев Интеллектуальной Школы",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <body className={noto.className}>
          <main className="max-w-[70%] m-auto">
          <Header />
          {children}
          </main>
          </body>
      </html>
  );
}
