const fs = require("fs");
const https = require("https");
const http = require("http");

const registry = JSON.parse(fs.readFileSync("./registry/sites.json", "utf-8"));

function checkUrl(url) {
  return new Promise((resolve) => {
    try {
      const protocol = url.startsWith("https") ? https : http;
      const req = protocol.get(url, (res) => {
        // Follow redirects
        if (res.statusCode === 301 || res.statusCode === 302) {
          const redirectUrl = res.headers.location;
          if (redirectUrl) {
            return checkUrl(redirectUrl).then(resolve);
          }
        }
        resolve(res.statusCode === 200);
      });
      req.on("error", () => resolve(false));
      req.setTimeout(5000, () => {
        req.destroy();
        resolve(false);
      });
    } catch (err) {
      resolve(false);
    }
  });
}

async function main() {
  console.log("🔍 Checking all registered sites...\n");

  let changes = 0;
  const today = new Date().toISOString().split("T")[0];

  for (const site of registry.sites) {
    process.stdout.write(`  ${site.name} (${site.url})... `);

    const isUp = await checkUrl(`${site.url}/llms.txt`);

    if (site.hasLlmstxt !== isUp) {
      console.log(
        `\n    Status changed: ${site.hasLlmstxt ? "✅" : "❌"} → ${isUp ? "✅" : "❌"}`,
      );
      site.hasLlmstxt = isUp;
      site.verifiedAt = today;
      changes++;
    } else {
      console.log(isUp ? "✅" : "❌");
    }
  }

  registry.lastUpdated = new Date().toISOString();

  if (changes > 0) {
    fs.writeFileSync(
      "./registry/sites.json",
      JSON.stringify(registry, null, 2),
    );
    console.log(`\n✅ Saved ${changes} change(s)`);
  } else {
    console.log("\n✅ No changes detected");
  }
}

main().catch((err) => {
  console.error("❌ Error:", err.message);
  process.exit(1);
});
