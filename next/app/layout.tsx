import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import ThemeInit from "@/components/ThemeInit";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Junseop Shin — Frontend Developer",
  description:
    "수치로 증명하는 풀스택 개발자. React, Next.js, TypeScript, Java/Spring, Azure.",
  openGraph: {
    title: "Junseop Shin — Frontend Developer",
    description: "수치로 증명하는 풀스택 개발자",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background text-foreground antialiased`}
      >
        <ThemeInit />
        <Nav />
        {children}
      </body>
    </html>
  );
}
