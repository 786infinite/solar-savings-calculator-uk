import type { Metadata } from "next";
import SolarSavingsCalculatorClient from "@/components/SolarSavingsCalculatorClient";

export const metadata: Metadata = {
  title: "Solar Savings Calculator UK | SolarCal",
  description:
    "Use the free SolarCal solar savings calculator to estimate UK solar panel costs, annual savings, payback period, battery benefit, EV charging potential, and next steps.",
};

export default function SolarSavingsCalculatorPage() {
  return <SolarSavingsCalculatorClient />;
}