import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solar Savings Calculator UK",
  description: "Estimate UK solar panel savings, installation costs, payback period, battery benefit, and EV charging potential.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
