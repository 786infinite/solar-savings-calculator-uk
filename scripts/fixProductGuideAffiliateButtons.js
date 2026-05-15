const fs = require("fs");
const path = require("path");

const root = process.cwd();

const removals = [
  {
    file: "app/best-solar-panels-uk/page.tsx",
    startsWith:
      '          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">\n            <h2 className="text-3xl font-bold">\n              Solar products and equipment',
  },
  {
    file: "app/best-solar-batteries-uk/page.tsx",
    startsWith:
      '          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">\n            <h2 className="text-3xl font-bold">\n              Compare solar battery next steps',
  },
  {
    file: "app/best-ev-chargers-uk/page.tsx",
    startsWith:
      '          <section className="mt-12 rounded-3xl border border-emerald-400/20 bg-emerald-400/10 p-6">\n            <h2 className="text-3xl font-bold">\n              EV charger accessories and next steps',
  },
];

function removeSection(content, startsWith, file) {
  const start = content.indexOf(startsWith);

  if (start === -1) {
    console.log(`Section not found or already removed: ${file}`);
    return content;
  }

  const nextSection = content.indexOf("\n          <section", start + startsWith.length);

  if (nextSection === -1) {
    throw new Error(`Could not find end of section in: ${file}`);
  }

  return content.slice(0, start) + content.slice(nextSection + 1);
}

for (const item of removals) {
  const fullPath = path.join(root, item.file);

  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${item.file}`);
  }

  let content = fs.readFileSync(fullPath, "utf8");
  const updated = removeSection(content, item.startsWith, item.file);

  fs.writeFileSync(fullPath, updated, "utf8");
  console.log(`Checked: ${item.file}`);
}

console.log("Done. Now run: npm run build");