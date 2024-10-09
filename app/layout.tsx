import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import LangProviderWrapper from "./context/LangContext/LangProviderWrapper";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Elys",
  description: "Build your next SaaS with Elys",
  icons: {
    icon: "/static/favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LangProviderWrapper>{children}</LangProviderWrapper>
      </body>
    </html>
  );
}
