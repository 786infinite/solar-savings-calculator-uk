import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import CookieNotice from "@/components/CookieNotice";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://solarcal.co.uk"),
  title: {
    default: "Solar Savings Calculator UK | Estimate Solar Panel Savings",
    template: "%s | Solar Savings Calculator UK",
  },
  description:
    "Use the free Solar Savings Calculator UK to estimate solar panel installation cost, annual savings, payback period, battery benefit, EV charging benefit, and next steps.",
  keywords: [
    "solar savings calculator UK",
    "solar panel cost calculator UK",
    "solar panel savings UK",
    "solar battery payback calculator",
    "EV charger cost calculator UK",
    "solar panels UK",
  ],
  verification: {
    google: "G-izENxozElAETAL4YXWtDSvnFR__pavQRQRd2s-DPs",
  },
  openGraph: {
    title: "Solar Savings Calculator UK",
    description:
      "Estimate solar panel savings, installation cost, payback period, battery benefit, and EV charging potential for UK homes.",
    url: "https://solarcal.co.uk",
    siteName: "Solar Savings Calculator UK",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Solar Savings Calculator UK",
    description:
      "Estimate UK solar panel savings, installation cost, payback period, battery benefit, and EV charging potential.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FL26Q4LFP4"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FL26Q4LFP4');
          `}
        </Script>

        {children}

        <CookieNotice />
      </body>
    </html>
  );
}