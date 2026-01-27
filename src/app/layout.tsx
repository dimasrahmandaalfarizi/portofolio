import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dimas Rahmanda Alfarizi | Web Developer & Informatics Student",
  description: "Portfolio of Dimas Rahmanda Alfarizi - A passionate web developer and informatics student at UPNVJATIM, Surabaya. Specializing in modern web applications with React, Next.js, and TypeScript.",
  keywords: ["Web Developer", "Portfolio", "Next.js", "React", "TypeScript", "Informatics", "UPNVJATIM"],
  authors: [{ name: "Dimas Rahmanda Alfarizi" }],
  openGraph: {
    title: "Dimas Rahmanda Alfarizi | Web Developer",
    description: "Portfolio of a passionate web developer and informatics student",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
