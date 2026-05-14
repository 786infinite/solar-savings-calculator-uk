export type AffiliateLink = {
  label: string;
  title: string;
  description: string;
  explanation: string;
  destinationUrl: string;
  buttonText: string;
  status: "placeholder" | "active";
  network?: string;
  partner?: string;
};

export const affiliateLinks: Record<string, AffiliateLink> = {
  "solar-quotes": {
    label: "Solar quote partner",
    title: "Compare free solar quotes",
    description:
      "This page will later send visitors to an approved UK solar quote partner.",
    explanation:
      "For now, this is a placeholder while affiliate and lead-generation partners are being reviewed. Once approved, this page can redirect to a tracked solar quote partner link.",
    destinationUrl: "/affiliate-disclosure",
    buttonText: "Continue",
    status: "placeholder",
    network: "Pending",
    partner: "Pending solar quote partner",
  },

  "solar-battery": {
    label: "Battery partner",
    title: "Compare solar battery options",
    description:
      "This page will later send visitors to a solar battery quote, retailer, or affiliate partner.",
    explanation:
      "Battery recommendations should depend on household usage, solar generation, evening electricity demand, tariff, and product compatibility.",
    destinationUrl: "/affiliate-disclosure",
    buttonText: "Continue",
    status: "placeholder",
    network: "Pending",
    partner: "Pending battery partner",
  },

  "ev-charger": {
    label: "EV charger partner",
    title: "See recommended EV chargers",
    description:
      "This page will later send visitors to an EV charger retailer, installer, or affiliate partner.",
    explanation:
      "EV charger recommendations should consider smart charging, solar compatibility, tethered or untethered design, installation cost, and vehicle needs.",
    destinationUrl: "/affiliate-disclosure",
    buttonText: "Continue",
    status: "placeholder",
    network: "Pending",
    partner: "Pending EV charger partner",
  },

  "portable-power": {
    label: "Portable power partner",
    title: "See portable power stations",
    description:
      "This page sends visitors to portable power station and solar generator product options.",
    explanation:
      "Portable power products may suit backup power, camping, off-grid use, or people who are not ready for a full roof solar installation. SolarCal may earn commission from qualifying purchases.",
    destinationUrl: "https://amzn.to/3RnGAsa",
    buttonText: "View portable power options",
    status: "active",
    network: "Amazon Associates UK",
    partner: "Amazon UK",
  },
};