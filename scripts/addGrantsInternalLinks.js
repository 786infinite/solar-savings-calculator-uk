const fs = require("fs");
const path = require("path");

const updates = [
  {
    file: "app/how-much-do-solar-panels-cost-uk/page.tsx",
    find: "/solar-panel-grants-uk",
    insertBefore:
      '<a\n                href="/solar-savings-calculator"',
    insert: `<a
                href="/solar-panel-grants-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Check solar grants
              </a>

              `,
  },
  {
    file: "app/are-solar-panels-worth-it-uk/page.tsx",
    find: "/solar-panel-grants-uk",
    insertBefore:
      '<a\n                href="/solar-savings-calculator"',
    insert: `<a
                href="/solar-panel-grants-uk"
                className="rounded-xl border border-white/15 px-6 py-4 text-center font-semibold text-white hover:bg-white/10"
              >
                Check solar grants
              </a>

              `,
  },
  {
    file: "app/solar-savings-calculator/page.tsx",
    find: "/solar-panel-grants-uk",
    insertBefore: "",
    insert: "",
    skipIfMissing: true,
  },
];

for (const update of updates) {
  const filePath = path.join(process.cwd(), update.file);

  if (!fs.existsSync(filePath)) {
    console.log(`Skipped missing file: ${update.file}`);
    continue;
  }

  let content = fs.readFileSync(filePath, "utf8");

  if (content.includes(update.find)) {
    console.log(`Already linked: ${update.file}`);
    continue;
  }

  if (update.skipIfMissing) {
    console.log(`Skipped client/page check: ${update.file}`);
    continue;
  }

  if (!content.includes(update.insertBefore)) {
    console.log(`Could not find insert point in: ${update.file}`);
    continue;
  }

  content = content.replace(update.insertBefore, update.insert + update.insertBefore);

  fs.writeFileSync(filePath, content, "utf8");
  console.log(`Updated: ${update.file}`);
}

console.log("Done. Now run npm run build.");