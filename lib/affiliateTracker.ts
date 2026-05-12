export type AffiliateTrackerItem = {
  category: string;
  partner: string;
  network: string;
  status: "not_applied" | "applied" | "approved" | "rejected" | "live";
  placeholderSlug: string;
  targetPages: string[];
  notes: string;
};

export const affiliateTracker: AffiliateTrackerItem[] = [
  {
    category: "Solar quotes",
    partner: "Solar Guide / Leads.io",
    network: "Direct / Leads.io",
    status: "not_applied",
    placeholderSlug: "solar-quotes",
    targetPages: [
      "/solar-savings-calculator",
      "/how-much-do-solar-panels-cost-uk",
      "/are-solar-panels-worth-it-uk",
      "/solar-panels-for-3-bedroom-house",
      "/solar-panels-for-4-bedroom-house",
      "/how-long-do-solar-panels-take-to-pay-for-themselves",
    ],
    notes:
      "Main monetisation route. Replace /go/solar-quotes destination once approved.",
  },
  {
    category: "Solar installer quotes",
    partner: "Project Solar",
    network: "Awin",
    status: "not_applied",
    placeholderSlug: "solar-quotes",
    targetPages: [
      "/solar-savings-calculator",
      "/best-solar-panels-uk",
      "/how-much-do-solar-panels-cost-uk",
    ],
    notes:
      "Potential solar installation affiliate/lead partner. Check Awin approval and terms.",
  },
  {
    category: "Solar installer quotes",
    partner: "Glow Green",
    network: "Awin",
    status: "not_applied",
    placeholderSlug: "solar-quotes",
    targetPages: [
      "/solar-savings-calculator",
      "/how-much-do-solar-panels-cost-uk",
      "/are-solar-panels-worth-it-uk",
    ],
    notes:
      "Potential solar/renewables quote partner. Check if programme accepts calculator/content sites.",
  },
  {
    category: "Solar and heating",
    partner: "OVO Solar & Heating",
    network: "Awin",
    status: "not_applied",
    placeholderSlug: "solar-quotes",
    targetPages: [
      "/solar-savings-calculator",
      "/how-much-do-solar-panels-cost-uk",
      "/solar-battery-worth-it",
    ],
    notes:
      "Potential solar/heating programme. Check current availability and payout rules.",
  },
  {
    category: "Portable power",
    partner: "EcoFlow UK",
    network: "Awin / Direct",
    status: "not_applied",
    placeholderSlug: "portable-power",
    targetPages: [
      "/best-portable-power-stations-uk",
      "/best-solar-generators-uk",
    ],
    notes:
      "Good fit for portable power station and solar generator pages.",
  },
  {
    category: "Portable power",
    partner: "Jackery UK",
    network: "Awin / Direct",
    status: "not_applied",
    placeholderSlug: "portable-power",
    targetPages: [
      "/best-portable-power-stations-uk",
      "/best-solar-generators-uk",
    ],
    notes:
      "Good fit for solar generator and camping/backup power content.",
  },
  {
    category: "Solar products",
    partner: "Amazon Associates UK",
    network: "Amazon",
    status: "not_applied",
    placeholderSlug: "portable-power",
    targetPages: [
      "/best-portable-power-stations-uk",
      "/best-solar-generators-uk",
      "/best-ev-chargers-uk",
      "/best-solar-panels-uk",
    ],
    notes:
      "Use for energy monitors, smart thermostats, EV accessories, portable panels, solar accessories.",
  },
  {
    category: "EV chargers",
    partner: "EV charger partner",
    network: "Pending",
    status: "not_applied",
    placeholderSlug: "ev-charger",
    targetPages: [
      "/best-ev-chargers-uk",
      "/solar-panels-and-ev-charging",
      "/solar-savings-calculator",
    ],
    notes:
      "Find UK EV charger affiliate or installer partner. Replace /go/ev-charger when approved.",
  },
  {
    category: "Solar batteries",
    partner: "Battery partner",
    network: "Pending",
    status: "not_applied",
    placeholderSlug: "solar-battery",
    targetPages: [
      "/solar-battery-worth-it",
      "/best-solar-batteries-uk",
      "/solar-panels-with-battery-cost",
      "/solar-savings-calculator",
    ],
    notes:
      "Find solar battery quote, retailer, or installer partner. Replace /go/solar-battery when approved.",
  },
];