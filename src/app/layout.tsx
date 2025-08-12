import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import GoogleAnalytics from "@/app/components/GoogleAnalytics";
import { LocaleProvider } from "@/lib/locale-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Meino - your AI Waiter",
  description: "AI-powered restaurant management",
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
        <LocaleProvider>
          {/* <Navigation /> */}
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
          <main>{children}</main>
          <Footer />
          {/* <ChatWidget /> */}
        </LocaleProvider>
      </body>
    </html>
  );
}
