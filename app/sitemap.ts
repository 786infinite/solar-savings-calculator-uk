import type { MetadataRoute } from "next";

const baseUrl = "https://solarcal.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/solar-savings-calculator",
    "/calculator-methodology",
    "/affiliate-disclosure",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
    "/contact",
    "/how-much-do-solar-panels-cost-uk",
    "/are-solar-panels-worth-it-uk",
    "/how-long-do-solar-panels-take-to-pay-for-themselves",
    "/solar-panels-for-3-bedroom-house",
    "/solar-panels-for-4-bedroom-house",
    "/solar-panels-with-battery-cost",
    "/solar-battery-worth-it",
    "/solar-panels-and-ev-charging",
    "/best-solar-panels-uk",
    "/best-solar-batteries-uk",
    "/best-portable-power-stations-uk",
    "/best-solar-generators-uk",
    "/best-ev-chargers-uk",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page === "" ? 1 : page.includes("calculator") ? 0.9 : 0.7,
  }));
}