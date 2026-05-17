const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "app", "page.tsx");

let content = fs.readFileSync(filePath, "utf8");

if (content.includes('/solar-panel-grants-uk')) {
  console.log("Solar grants already added to homepage.");
  process.exit(0);
}

const insertAfter = `  {
    title: "Are solar panels worth it?",
    href: "/are-solar-panels-worth-it-uk",
    description: "Understand when solar panels may make financial sense.",
  },`;

const grantsCard = `${insertAfter}
  {
    title: "Solar panel grants UK",
    href: "/solar-panel-grants-uk",
    description:
      "Check ECO4, 0% VAT, SEG payments, and other UK solar support.",
  },`;

if (!content.includes(insertAfter)) {
  throw new Error("Could not find the Are solar panels worth it card.");
}

content = content.replace(insertAfter, grantsCard);

content = content.replace(
  "Read simple guides about solar panel costs, payback, battery\n                storage, EV charging, and common home sizes.",
  "Read simple guides about solar panel costs, grants, payback,\n                battery storage, EV charging, and common home sizes."
);

fs.writeFileSync(filePath, content, "utf8");

console.log("Added solar grants guide to homepage.");