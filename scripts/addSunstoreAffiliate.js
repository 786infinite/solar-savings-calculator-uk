const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "lib", "affiliateLinks.ts");

if (!fs.existsSync(filePath)) {
  throw new Error("Could not find lib/affiliateLinks.ts");
}

let content = fs.readFileSync(filePath, "utf8");

const sunstoreBlock = `

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
  },`;

if (content.includes('"sunstore"')) {
  content = content.replace(
    /\\n\\s*"sunstore":\\s*{[\\s\\S]*?\\n\\s*},/,
    sunstoreBlock
  );
  console.log("Updated existing Sunstore affiliate link.");
} else {
  content = content.replace(
    /\n};\s*$/,
    `${sunstoreBlock}\n};`
  );
  console.log("Added Sunstore affiliate link.");
}

fs.writeFileSync(filePath, content, "utf8");

console.log("Done. Sunstore route should be /go/sunstore");