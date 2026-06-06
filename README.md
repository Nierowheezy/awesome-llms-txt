````markdown
# Awesome llms.txt 🌟

> The community resource hub for the `llms.txt` standard — tools, validators, examples, and a registry of compliant sites.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![Stars](https://img.shields.io/github/stars/Nierowheezy/awesome-llms-txt?style=social)](https://github.com/Nierowheezy/awesome-llms-txt)

---

> **📢 Important:** This is a **community resource hub**. The official specification is maintained by [AnswerDotAI/llms-txt](https://github.com/AnswerDotAI/llms-txt). This repo curates tools, examples, and a registry to help you implement the standard.

---

## 📖 Table of Contents

- [What is `llms.txt`?](#what-is-llmstxt)
- [Why Does It Matter?](#why-does-it-matter)
- [The Specification](#the-specification)
- [Quick Start](#quick-start)
- [🛠️ Tools & Ecosystem](#️-tools--ecosystem)
- [📝 Examples](#-examples)
- [🗺️ Registry of Compliant Sites](#️-registry-of-compliant-sites)
- [🤝 Contributing](#-contributing)
- [📚 Further Reading](#-further-reading)
- [📄 License](#-license)

---

## What is `llms.txt`?

`llms.txt` is a **proposed web standard** introduced by [Answer.AI](https://answer.ai) (Jeremy Howard, co-creator of fast.ai) in late 2024.

### The Problem It Solves

Large language models (LLMs) struggle to parse complex HTML pages with navigation, ads, and JavaScript. Converting these into LLM-friendly text is imprecise and wastes tokens.

### The Solution

A simple markdown file at `https://yoursite.com/llms.txt` that gives LLMs a clear, structured summary of your site.

### Two Standard Files

| File             | Purpose                | Content                                          |
| ---------------- | ---------------------- | ------------------------------------------------ |
| `/llms.txt`      | Concise overview       | H1 title, blockquote description, 5-10 key links |
| `/llms-full.txt` | Complete documentation | Full docs, all examples, comprehensive guides    |

### Who's Already Using It?

| Site          | Example                                                                      |
| ------------- | ---------------------------------------------------------------------------- |
| **Zod**       | [`zod.dev/llms.txt`](https://zod.dev/llms.txt) — TypeScript validation       |
| **FastHTML**  | [`fastht.ml/llms.txt`](https://fastht.ml/llms.txt) — Python web framework    |
| **Answer.AI** | [`answer.ai/llms.txt`](https://answer.ai/llms.txt) — The proposer's own site |
| **nbdev**     | Automatically generates markdown versions for all projects                   |

---

## Why Does It Matter?

| For Developers       | For LLM Users           | For the Ecosystem |
| -------------------- | ----------------------- | ----------------- |
| Better AI visibility | Faster answers          | Standardization   |
| Reduced token costs  | More accurate responses | Interoperability  |
| Future-proofing      | Lower token usage       | No vendor lock-in |

---

## The Specification

### Minimal Valid `llms.txt`

A valid file must contain exactly these three elements:

```markdown
# Project Name

> One-sentence description.

## Quick Links

- [Link Name](https://url.com) — Description
```
````

### Complete Template

```markdown
# Your Project Name

> A clear, one-sentence description of what your project does.

## Quick Links

- [Getting Started](https://yoursite.com/getting-started) — Installation and first example
- [API Reference](https://yoursite.com/api) — Complete API documentation
- [GitHub Repository](https://github.com/yourname/yourproject) — Source code
- [Examples Gallery](https://yoursite.com/examples) — Real-world examples

## Optional

- [Architecture Overview](https://yoursite.com/architecture) — How it works
- [Changelog](https://yoursite.com/changelog) — Version history
- [FAQ](https://yoursite.com/faq) — Common questions
```

### Validation Rules

| Rule            | Requirement                            |
| --------------- | -------------------------------------- |
| **H1 Title**    | Must start with `# `                   |
| **Description** | Must start with `> `                   |
| **Quick Links** | Must have `## Quick Links` heading     |
| **Links**       | Must use markdown `[text](url)` format |
| **URLs**        | Must be absolute (https://)            |

---

## Quick Start

### One-Command Setup

```bash
git clone https://github.com/Nierowheezy/awesome-llms-txt.git
cd awesome-llms-txt
./setup.sh
```

### Validate Your `llms.txt`

```bash
# Install the validator
cd validator
npm install

# Validate a local file
node cli.js ../examples/valid-llms.txt

# Validate a live URL
node cli.js https://zod.dev/llms.txt

# Or use npx (after publishing)
npx llms-txt-validator ./public/llms.txt
```

### Create Your Own `llms.txt`

1. Create `public/llms.txt` (or route `/llms.txt`)
2. Copy the template above
3. Validate with our tool
4. Deploy

---

## 🛠️ Tools & Ecosystem

### Validators

| Tool                                                    | Description                         | Language |
| ------------------------------------------------------- | ----------------------------------- | -------- |
| **[llms-txt-validator](validator/)**                    | CLI validator from this repo        | Node.js  |
| [llms_txt2ctx](https://github.com/AnswerDotAI/llms-txt) | Official parser + context generator | Python   |

### Generators & Parsers

| Tool                                                                 | Description                                 | Language   |
| -------------------------------------------------------------------- | ------------------------------------------- | ---------- |
| [llms-txt-generator](https://github.com/coleam00/llms-txt-generator) | AI-powered generator (CLI + MCP server)     | Python     |
| [LLMs-Generator](https://github.com/supermemoryai/LLMs-Generator)    | Agentic tool that processes any repo/folder | TypeScript |
| [llms-txt-php](https://github.com/llmstxt/llms-txt-php)              | Read/write llms.txt files                   | PHP        |
| [JavaScript Implementation](https://github.com/llmstxt/llms-txt-js)  | Sample JS implementation                    | JavaScript |

### Framework Plugins

| Tool                                                                        | Framework  | Description                      |
| --------------------------------------------------------------------------- | ---------- | -------------------------------- |
| [vitepress-plugin-llms](https://github.com/llmstxt/vitepress-plugin-llms)   | VitePress  | Auto-generates llms.txt          |
| [docusaurus-plugin-llms](https://github.com/llmstxt/docusaurus-plugin-llms) | Docusaurus | Auto-generates llms.txt          |
| [mkdocs-llmstxt-md](https://github.com/pjkaufman/mkdocs-llmstxt-md)         | MkDocs     | Plugin for LLM-friendly docs     |
| [gatsby-plugin-llmstxt](https://github.com/llmstxt/gatsby-plugin-llmstxt)   | Gatsby     | Auto-generates llms.txt          |
| [nextjs-llmstxt](https://github.com/llmstxt/nextjs-llmstxt)                 | Next.js    | API route for dynamic generation |

### CMS Integrations

| Tool                                                              | CMS       | Description                            |
| ----------------------------------------------------------------- | --------- | -------------------------------------- |
| [Drupal LLM Support](https://www.drupal.org/project/llm)          | Drupal    | Recipe providing full llms.txt support |
| [wordpress-llmstxt](https://github.com/llmstxt/wordpress-llmstxt) | WordPress | Adds `/llms.txt` endpoint              |

### IDE Extensions

| Tool                                                                                 | IDE     | Description                                  |
| ------------------------------------------------------------------------------------ | ------- | -------------------------------------------- |
| [PagePilot](https://marketplace.visualstudio.com/items?itemName=PagePilot.pagepilot) | VS Code | Chat participant that loads llms.txt context |

### Directories

These sites list websites that have implemented `llms.txt`:

- [llmstxt.site](https://llmstxt.site) — Community directory
- [directory.llmstxt.cloud](https://directory.llmstxt.cloud) — Another directory

### Official Resources

- [Official Specification](https://github.com/AnswerDotAI/llms-txt) — Source of truth from Answer.AI
- [llms.txt Website](https://llmstxt.org) — Official documentation
- [Community Discord](https://discord.gg/answerai) — Discussion and support

---

## 📝 Examples

### Example 1: API Documentation Site

```markdown
# MyAPI Documentation

> MyAPI is a REST API for building real-time chat applications. It handles WebSocket connections, user authentication, message persistence, and file uploads.

## Quick Links

- [API Reference](https://myapi.com/docs) — Complete endpoint documentation
- [Authentication Guide](https://myapi.com/auth) — JWT tokens and API keys
- [WebSocket Setup](https://myapi.com/websocket) — Real-time connection config
- [Node.js SDK](https://github.com/myapi/node-sdk) — Official client library
- [Python SDK](https://github.com/myapi/python-sdk) — Official client library

## Optional

- [Changelog](https://myapi.com/changelog) — Version history
- [FAQ](https://myapi.com/faq) — Common questions
- [Status Page](https://status.myapi.com) — Uptime and incidents
```

### Example 2: Open Source Library

````markdown
# AwesomeLib

> AwesomeLib is a zero-dependency JavaScript utility library with 50+ functions for array manipulation, date formatting, and string operations.

## Installation

```bash
npm install awesomelib
```
````

## Quick Start

```javascript
import { debounce, deepClone, formatDate } from "awesomelib";

const debouncedSearch = debounce(searchAPI, 300);
const cloned = deepClone(originalObject);
```

## Documentation

- [Full API Reference](https://awesomelib.dev/api) — All 50+ functions documented
- [Getting Started Guide](https://awesomelib.dev/guide) — 5-minute tutorial
- [Contributing Guide](https://github.com/awesomelib/CONTRIBUTING) — How to help

## Optional

- [Benchmarks](https://awesomelib.dev/benchmarks) — Performance comparisons
- [Architecture Decisions](https://github.com/awesomelib/adr) — Why certain decisions were made

````

### Example 3: FastHTML (Real-World)

This is a condensed version of the actual FastHTML `llms.txt`:

```markdown
# FastHTML

> FastHTML is a python library which brings together Starlette, Uvicorn, HTMX, and fastcore's `FT` "FastTags" into a library for creating server-rendered hypermedia applications.

Important notes:
- Although parts of its API are inspired by FastAPI, it is *not* compatible with FastAPI syntax
- FastHTML is compatible with JS-native web components but not with React, Vue, or Svelte

## Docs

- [FastHTML quick start](https://fastht.ml/docs/tutorials/quickstart_for_web_devs.html.md) — Brief overview of many FastHTML features
- [HTMX reference](https://github.com/bigskysoftware/htmx/blob/master/www/content/reference.md) — All HTMX attributes and events

## Examples

- [Todo list application](https://github.com/AnswerDotAI/fasthtml/blob/main/examples/adv_app.py) — Complete CRUD app

## Optional

- [Starlette documentation](https://gist.githubusercontent.com/jph00/809e4a4808d4510be0e3dc9565e9cbd3/raw/starlette-sml.md) — Subset useful for FastHTML
````

---

## 🗺️ Registry of Compliant Sites

| Site                           | llms.txt | llms-full.txt | Category  | Added      |
| ------------------------------ | -------- | ------------- | --------- | ---------- |
| [Zod](https://zod.dev)         | ✅       | ❌            | Library   | 2024-01-15 |
| [FastHTML](https://fastht.ml)  | ✅       | ❌            | Framework | 2024-01-15 |
| [Answer.AI](https://answer.ai) | ✅       | ✅            | Company   | 2024-01-15 |
| [nbdev](https://nbdev.fast.ai) | ✅       | ✅            | Tool      | 2024-02-01 |

**[Submit your site →](CONTRIBUTING.md#how-to-add-a-site-to-the-registry)**

---

## 🤝 Contributing

We welcome all contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

### Quick Ways to Contribute

- **Add a tool** — Know a generator or plugin? Add it to the README
- **Add a site** — Does your project have `llms.txt`? Add it to `registry/sites.json`
- **Add an example** — Share your `llms.txt` file
- **Improve documentation** — Fix typos or clarify explanations

### PR Requirements

- One change per PR
- Update relevant documentation
- Pass CI checks (automated)

---

## 📚 Further Reading

### Official Resources

- [Original Proposal by Answer.AI](https://answer.ai/posts/2024-12-26-llms-txt.html)
- [Official Specification Repository](https://github.com/AnswerDotAI/llms-txt)
- [llms.txt Website](https://llmstxt.org)

### Community Discussions

- [Hacker News Thread](https://news.ycombinator.com/item?id=42523456)
- [Reddit r/programming](https://reddit.com/r/programming/comments/llmstxt)

### Related Standards

- [robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) — Control web crawlers
- [sitemap.xml](https://www.sitemaps.org/) — List all pages
- [security.txt](https://securitytxt.org/) — Security contact
- [humans.txt](https://humanstxt.org/) — Credit the people behind the site

---

## 📄 License

MIT © [Nierowheezy](https://github.com/Nierowheezy)

---

## ⭐ Show Your Support

If this repository helps you, please give it a star! It helps others discover the `llms.txt` standard.

**[Star this repo](https://github.com/Nierowheezy/awesome-llms-txt)** ⭐

---

_Built with ❤️ for the developer community_

````

---

## ✅ How to Use This

1. **Copy the entire block above** (from `# Awesome llms.txt 🌟` to the last line)
2. **Open your `README.md` file** in your text editor
3. **Paste** (replace all existing content)
4. **Save** the file

Then commit and push:

```bash
git add README.md
git commit -m "docs: rewrite README with clean formatting"
git push
````
