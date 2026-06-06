#!/usr/bin/env node

/**
 * llms.txt Validator CLI
 *
 * Validates llms.txt files against the Answer.AI specification.
 *
 * Usage:
 *   node cli.js <file-or-url>
 *
 * Examples:
 *   node cli.js ../examples/valid-llms.txt
 *   node cli.js https://zod.dev/llms.txt
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

// Colors for CLI output
const colors = {
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  reset: "\x1b[0m",
  bold: "\x1b[1m",
};

function log(message, type = "info") {
  const symbols = { info: "📘", success: "✅", error: "❌", warning: "⚠️" };
  let color = colors.reset;
  if (type === "error") color = colors.red;
  if (type === "success") color = colors.green;
  if (type === "warning") color = colors.yellow;
  console.log(`${symbols[type] || "📘"} ${color}${message}${colors.reset}`);
}

function validateContent(content) {
  const errors = [];
  const warnings = [];
  const metadata = {
    lines: content.split("\n").length,
    chars: content.length,
    hasH1: false,
    hasBlockquote: false,
    hasQuickLinks: false,
    linksFound: 0,
  };

  const lines = content.split("\n");
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Track code blocks
    if (trimmed.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;

    // Check for H1
    if (trimmed.match(/^#{1}\s+\S/)) {
      metadata.hasH1 = true;
    }

    // Check for blockquote
    if (trimmed.match(/^>\s+\S/)) {
      metadata.hasBlockquote = true;
    }

    // Check for Quick Links section
    if (trimmed.match(/^##\s*Quick Links/i)) {
      metadata.hasQuickLinks = true;
    }

    // Count links
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    while ((match = linkRegex.exec(line)) !== null) {
      metadata.linksFound++;
      const linkUrl = match[2];
      if (!linkUrl.startsWith("http://") && !linkUrl.startsWith("https://")) {
        warnings.push(`Link "${match[1]}" uses relative URL: ${linkUrl}`);
      }
    }
  }

  // Required elements validation
  if (!metadata.hasH1) {
    errors.push('Missing H1 title. Add a line starting with "# "');
  }
  if (!metadata.hasBlockquote) {
    errors.push('Missing description. Add a line starting with "> "');
  }
  if (!metadata.hasQuickLinks) {
    errors.push('Missing "## Quick Links" section');
  }
  if (metadata.linksFound === 0) {
    errors.push("No links found. Add at least one markdown link");
  }

  return { isValid: errors.length === 0, errors, warnings, metadata };
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith("https") ? https : http;
    const req = protocol.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => resolve(data));
    });
    req.on("error", reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error("Request timeout"));
    });
  });
}

async function main() {
  const target = process.argv[2];

  console.log(`\n${colors.bold}🔍 llms.txt Validator v1.0.0${colors.reset}\n`);

  if (!target) {
    log("Please provide a URL or file path", "error");
    console.log("\nUsage:");
    console.log("  node cli.js <file-or-url>");
    console.log("\nExamples:");
    console.log("  node cli.js ../examples/valid-llms.txt");
    console.log("  node cli.js https://zod.dev/llms.txt");
    process.exit(1);
  }

  let content;
  let source;

  if (target.startsWith("http://") || target.startsWith("https://")) {
    log(`Fetching ${target}...`, "info");
    try {
      content = await fetchUrl(target);
      source = target;
      log(`Fetched ${content.length} characters`, "success");
    } catch (err) {
      log(`Failed to fetch: ${err.message}`, "error");
      process.exit(1);
    }
  } else {
    const filePath = path.resolve(target);
    if (!fs.existsSync(filePath)) {
      log(`File not found: ${filePath}`, "error");
      process.exit(1);
    }
    content = fs.readFileSync(filePath, "utf-8");
    source = filePath;
    log(`Loaded file: ${filePath}`, "success");
  }

  const { isValid, errors, warnings, metadata } = validateContent(content);

  console.log("\n" + "=".repeat(50));

  if (isValid) {
    log("VALIDATION PASSED", "success");
  } else {
    log("VALIDATION FAILED", "error");
  }

  console.log(`\n${colors.blue}Statistics:${colors.reset}`);
  console.log(`  • Lines: ${metadata.lines}`);
  console.log(`  • Characters: ${metadata.chars}`);
  console.log(`  • Links found: ${metadata.linksFound}`);
  console.log(`  • Has H1: ${metadata.hasH1 ? "✅" : "❌"}`);
  console.log(`  • Has description: ${metadata.hasBlockquote ? "✅" : "❌"}`);
  console.log(`  • Has Quick Links: ${metadata.hasQuickLinks ? "✅" : "❌"}`);

  if (errors.length > 0) {
    console.log(`\n${colors.red}Errors (${errors.length}):${colors.reset}`);
    errors.forEach((e) => console.log(`  • ${e}`));
  }

  if (warnings.length > 0) {
    console.log(
      `\n${colors.yellow}Warnings (${warnings.length}):${colors.reset}`,
    );
    warnings.forEach((w) => console.log(`  • ${w}`));
  }

  console.log();
  process.exit(isValid ? 0 : 1);
}

main().catch((err) => {
  log(`Error: ${err.message}`, "error");
  process.exit(1);
});
