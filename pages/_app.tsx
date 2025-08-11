import type { AppProps } from "next/app";
import { Geist, Geist_Mono } from "next/font/google";
import "../src/styles/globals.css";
import Navigation from "../src/components/Navigation";
import Footer from "../src/components/Footer";
import ChatWidget from "../src/components/ChatWidget";
import { LocaleProvider } from "../src/lib/locale-context";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <LocaleProvider>
        <Navigation />
        <main>
          <Component {...pageProps} />
        </main>
        <Footer />
        <ChatWidget />
      </LocaleProvider>
    </div>
  );
}
