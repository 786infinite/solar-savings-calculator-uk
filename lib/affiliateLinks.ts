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

  "blue-ape-renewables": {
    label: "Solar installer partner",
    title: "View Blue Ape Renewables",
    description:
      "This page sends visitors to Blue Ape Renewables for solar and renewable energy options.",
    explanation:
      "Blue Ape Renewables provides solar and renewable energy services. SolarCal may earn commission or referral income if visitors continue through this link.",
    destinationUrl:
      "https://blueaperenewables.co.uk/pages/blue-ape-landing-page?sca_ref=11276066.UzaTHVjluQZ&utm_source=11276066&utm_medium=promote&utm_campaign=m-a-raza",
    buttonText: "Visit Blue Ape Renewables",
    status: "active",
    network: "Direct",
    partner: "Blue Ape Renewables",
  },

  "solar-products": {
    label: "Solar product partner",
    title: "View solar panels, kits, batteries, and off-grid products",
    description:
      "This page sends visitors to Sunstore Solar product options, including solar panels, batteries, solar kits, off-grid power, and related solar equipment.",
    explanation:
      "Sunstore Solar sells solar products, kits, batteries, inverters, off-grid systems, and related solar equipment. SolarCal may earn commission if visitors buy through this link.",
    destinationUrl: "https://www.sunstore.co.uk/?aff=SolarCal",
    buttonText: "View Sunstore solar products",
    status: "active",
    network: "Direct",
    partner: "Sunstore Solar",
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

  "ev-accessories": {
    label: "EV accessories partner",
    title: "See EV charger accessories",
    description:
      "This page sends visitors to EV charger cable and accessory product options.",
    explanation:
      "EV charging accessories may include Type 2 charging cables, adapters, cable storage, and related home charging accessories. SolarCal may earn commission from qualifying purchases.",
    destinationUrl: "https://amzn.to/4uNvU4H",
    buttonText: "View EV accessories",
    status: "active",
    network: "Amazon Associates UK",
    partner: "Amazon UK",
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

  "allpowers": {
    label: "ALLPOWERS partner",
    title: "View ALLPOWERS portable power products",
    description:
      "This page sends visitors to ALLPOWERS UK portable power station, solar generator, and solar panel product options.",
    explanation:
      "ALLPOWERS products may suit backup power, camping, off-grid charging, portable solar, and solar generator use. SolarCal may earn commission from qualifying purchases.",
    destinationUrl: "https://uk.iallpowers.com/?ref=gvijmdgm&utm_source=aff",
    buttonText: "View ALLPOWERS products",
    status: "active",
    network: "GoAffPro",
    partner: "ALLPOWERS UK",
  },

  "solar-generators": {
    label: "Solar generator partner",
    title: "See solar generator options",
    description:
      "This page sends visitors to solar generator and portable solar power product options.",
    explanation:
      "Solar generators may suit camping, backup power, off-grid use, garden offices, and portable solar charging. SolarCal may earn commission from qualifying purchases.",
    destinationUrl: "https://amzn.to/4dMsg4j",
    buttonText: "View solar generator options",
    status: "active",
    network: "Amazon Associates UK",
    partner: "Amazon UK",
  },

  "sunstore": {
    label: "Solar product partner",
    title: "View Sunstore solar products",
    description:
      "This page sends visitors to Sunstore for solar panels, batteries, inverters, off-grid solar products, and related solar equipment.",
    explanation:
      "Sunstore supplies solar panels, batteries, inverters, off-grid solar kits, and related renewable energy products. SolarCal may earn commission or referral income if visitors continue through this link.",
    destinationUrl: "https://www.sunstore.co.uk/?aff=SolarCal",
    buttonText: "View Sunstore products",
    status: "active",
    network: "Direct",
    partner: "Sunstore Solar",
  },
};