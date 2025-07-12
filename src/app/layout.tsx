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
  title: "Omar Yasser - Full Stack Developer",
  description: "Portfolio of Omar Yasser, a passionate full-stack developer creating modern web experiences.",
  openGraph: {
    title: "Omar Yasser - Full Stack Developer",
    description: "Portfolio of Omar Yasser, a passionate full-stack developer creating modern web experiences.",
    url: "https://ghost-web-ops.github.io/", // Replace with your actual URL
    siteName: "Omar Yasser Portfolio",
    
    
  },
  icons: {
    // ٢. إضافة الأيقونة هنا باستخدام رابط SVG data URI
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2245%22 fill=%22%230a192f%22 stroke=%22%2364ffda%22 stroke-width=%225%22/><path d=%22M 35 35 L 50 55 L 65 35 M 50 55 L 50 70%22 fill=%22none%22 stroke=%22%23ccd6f6%22 stroke-width=%228%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>",
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
