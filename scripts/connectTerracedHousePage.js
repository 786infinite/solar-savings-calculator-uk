const fs = require("fs");
const path = require("path");

const root = process.cwd();

function updateFile(file, updater) {
  const filePath = path.join(root, file);

  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${file}`);
  }

  const before = fs.readFileSync(filePath, "utf8");
  const after = updater(before);

  if (before === after) {
    console.log(`No change needed: ${file}`);
    return;
  }

  fs.writeFileSync(filePath, after, "utf8");
  console.log(`Updated: ${file}`);
}

// 1. Add to sitemap
updateFile("app/sitemap.ts", (content) => {
  if (content.includes("/solar-panels-for-terraced-house")) {
    return content;
  }

  return content.replace(
    '    "/solar-panels-for-3-bedroom-house",',
    '    "/solar-panels-for-3-bedroom-house",\n    "/solar-panels-for-terraced-house",'
  );
});

// 2. Add to footer guide links
updateFile("components/SiteShell.tsx", (content) => {
  if (content.includes('href="/solar-panels-for-terraced-house"')) {
    return content;
  }

  const insertAfter = `              <li>
                <a
                  href="/solar-panels-for-3-bedroom-house"
                  className="hover:text-emerald-300"
                >
                  3-bedroom house solar
                </a>
              </li>`;

  const terracedLink = `${insertAfter}
              <li>
                <a
                  href="/solar-panels-for-terraced-house"
                  className="hover:text-emerald-300"
                >
                  Terraced house solar
                </a>
              </li>`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find footer insert point in SiteShell.");
  }

  return content.replace(insertAfter, terracedLink);
});

// 3. Add to homepage popular guide cards
updateFile("app/page.tsx", (content) => {
  if (content.includes("/solar-panels-for-terraced-house")) {
    return content;
  }

  const insertAfter = `  {
    title: "Solar panels for a 3-bedroom house",
    href: "/solar-panels-for-3-bedroom-house",
    description: "Estimate system size and savings for a typical 3-bed home.",
  },`;

  const terracedCard = `${insertAfter}
  {
    title: "Solar panels for a terraced house",
    href: "/solar-panels-for-terraced-house",
    description: "Check roof space, shading, access, savings, and quote points.",
  },`;

  if (!content.includes(insertAfter)) {
    throw new Error("Could not find homepage insert point.");
  }

  return content.replace(insertAfter, terracedCard);
});

console.log("Done. Now run: npm run build");