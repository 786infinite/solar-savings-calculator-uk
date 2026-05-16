const fs = require("fs");
const path = require("path");

const root = process.cwd();

const replacements = [
  {
    file: "app/solar-panels-with-battery-cost/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Solar Panels with Battery Cost UK | SolarCal"',
  },
  {
    file: "app/best-portable-power-stations-uk/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Best Portable Power Stations UK | SolarCal"',
  },
  {
    file: "app/how-long-do-solar-panels-take-to-pay-for-themselves/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Solar Panel Payback Time UK | SolarCal"',
  },
  {
    file: "app/solar-panels-for-3-bedroom-house/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Solar Panels for 3-Bed House UK | SolarCal"',
  },
  {
    file: "app/solar-panels-for-4-bedroom-house/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Solar Panels for 4-Bed House UK | SolarCal"',
  },
  {
    file: "app/solar-panels-and-ev-charging/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Solar Panels and EV Charging UK | SolarCal"',
  },
  {
    file: "app/free-solar-guide/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Free UK Solar Guide 2026 | SolarCal"',
  },
  {
    file: "app/how-much-do-solar-panels-cost-uk/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Solar Panel Costs UK | SolarCal"',
  },
  {
    file: "app/about/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "About SolarCal | SolarCal"',
  },
  {
    file: "app/solar-battery-worth-it/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Is a Solar Battery Worth It UK? | SolarCal"',
  },
  {
    file: "app/are-solar-panels-worth-it-uk/page.tsx",
    find: /title:\s*"[^"]*"/,
    replace: 'title: "Are Solar Panels Worth It UK? | SolarCal"',
  },
];

for (const item of replacements) {
  const fullPath = path.join(root, item.file);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${item.file}`);
  }

  let content = fs.readFileSync(fullPath, "utf8");

  if (!item.find.test(content)) {
    throw new Error(`Could not find title in: ${item.file}`);
  }

  content = content.replace(item.find, item.replace);

  fs.writeFileSync(fullPath, content, "utf8");

  console.log(`Updated title: ${item.file}`);
}

console.log("Done. Now run: npm run build");