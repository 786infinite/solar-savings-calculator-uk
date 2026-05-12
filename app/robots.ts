import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/go/",
          "/affiliate-tracker",
        ],
      },
    ],
    sitemap: "https://solarcal.co.uk/sitemap.xml",
  };
}
