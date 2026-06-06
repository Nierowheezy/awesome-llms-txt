📦 Complete Repository: awesome-llms-txt
Repository Purpose
Your Repo Official Spec Repo
Community resource hub, tools, registry, examples The source of truth for the standard
"Awesome list" + validator + directory Specification + Python library
Complementary, not competing
📁 Complete File Tree
text
awesome-llms-txt/
│
├── README.md # Main landing page (awesome list format)
├── CONTRIBUTING.md # How to contribute
├── LICENSE # MIT license
├── CHANGELOG.md # Version history
├── .gitignore # Git ignore rules
├── logo.svg # Simple logo/badge
├── setup.sh # One-command setup script
├── update.sh # Update helper script
│
├── validator/ # Node.js CLI validator tool
│ ├── cli.js # Main validator executable
│ └── package.json # npm package manifest
│
├── examples/ # Sample llms.txt files
│ ├── valid-llms.txt # Spec-compliant example
│ ├── invalid-llms.txt # Broken example (for testing)
│ └── fasthtml-llms.txt # Real-world example from FastHTML
│
├── registry/ # Site registry system
│ ├── sites.json # Database of compliant sites
│ └── check-sites.js # Automated status checker
│
└── .github/ # GitHub configuration
└── workflows/
└── update-registry.yml # Weekly automated registry update
📄 FILE 1: README.md
markdown

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
  - [Validators](#validators)
  - [Generators & Parsers](#generators--parsers)
  - [Framework Plugins](#framework-plugins)
  - [CMS Integrations](#cms-integrations)
  - [IDE Extensions](#ide-extensions)
  - [Directories](#directories)
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

- **Zod** (`zod.dev/llms.txt`) — TypeScript validation
- **FastHTML** (`fastht.ml/llms.txt`) — Python web framework
- **Answer.AI** — The proposer's own site
- **All nbdev projects** — Automatically generate markdown versions

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

````markdown
# Project Name

> One-sentence description.

## Quick Links

- [Link Name](https://url.com) — Description
  Complete Template
  markdown

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
  Validation Rules
  Rule Requirement
  H1 Title Must start with #
  Description Must start with >
  Quick Links Must have ## Quick Links heading
  Links Must use markdown [text](url) format
  URLs Must be absolute (https://)
  Quick Start
  One-Command Setup
  bash
  git clone https://github.com/Nierowheezy/awesome-llms-txt.git
  cd awesome-llms-txt
  ./setup.sh
  Validate Your llms.txt
  bash

# Install the validator

cd validator
npm install

# Validate a local file

node cli.js ../examples/valid-llms.txt

# Validate a live URL

node cli.js https://zod.dev/llms.txt

# Or use npx (after publishing)

npx llms-txt-validator ./public/llms.txt
Create Your Own llms.txt
Create public/llms.txt (or route /llms.txt)

Copy the template above

Validate with our tool

Deploy

🛠️ Tools & Ecosystem
Validators
Tool Description Language
llms-txt-validator CLI validator from this repo Node.js
llms_txt2ctx Official parser + context generator Python
Generators & Parsers
Tool Description Language
llms-txt-generator AI-powered generator (CLI + MCP server) Python
LLMs-Generator Agentic tool that processes any repo/folder TypeScript
llms-txt-php Read/write llms.txt files PHP
JavaScript Implementation Sample JS implementation JavaScript
Framework Plugins
Tool Framework Description
vitepress-plugin-llms VitePress Auto-generates llms.txt
docusaurus-plugin-llms Docusaurus Auto-generates llms.txt
mkdocs-llmstxt-md MkDocs Plugin for LLM-friendly docs
gatsby-plugin-llmstxt Gatsby Auto-generates llms.txt
nextjs-llmstxt Next.js API route for dynamic generation
CMS Integrations
Tool CMS Description
Drupal LLM Support Drupal Recipe providing full llms.txt support
wordpress-llmstxt WordPress Adds /llms.txt endpoint
IDE Extensions
Tool IDE Description
PagePilot VS Code Chat participant that loads llms.txt context
Directories
These sites list websites that have implemented llms.txt:

llmstxt.site — Community directory

directory.llmstxt.cloud — Another directory

Official Resources
Official Specification — Source of truth from Answer.AI

llms.txt Website — Official documentation

Community Discord — Discussion and support

📝 Examples
Example 1: API Documentation Site
markdown

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
  Example 2: Open Source Library
  markdown

# AwesomeLib

> AwesomeLib is a zero-dependency JavaScript utility library with 50+ functions for array manipulation, date formatting, and string operations.

## Installation

````bash
npm install awesomelib
Quick Start
javascript
import { debounce, deepClone, formatDate } from 'awesomelib';

const debouncedSearch = debounce(searchAPI, 300);
const cloned = deepClone(originalObject);
Documentation
Full API Reference — All 50+ functions documented

Getting Started Guide — 5-minute tutorial

Contributing Guide — How to help

Optional
Benchmarks — Performance comparisons

Architecture Decisions — Why certain decisions were made

text

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
🗺️ Registry of Compliant Sites
Site	llms.txt	llms-full.txt	Category	Added
Zod	✅	❌	Library	2024-01-15
FastHTML	✅	❌	Framework	2024-01-15
Answer.AI	✅	✅	Company	2024-01-15
nbdev	✅	✅	Tool	2024-02-01
Submit your site →

🤝 Contributing
We welcome all contributions! See CONTRIBUTING.md for detailed guidelines.

Quick Ways to Contribute
Add a tool — Know a generator or plugin? Add it to the README

Add a site — Does your project have llms.txt? Add it to registry/sites.json

Add an example — Share your llms.txt file

Improve documentation — Fix typos or clarify explanations

PR Requirements
One change per PR

Update relevant documentation

Pass CI checks (automated)

📚 Further Reading
Official Resources
Original Proposal by Answer.AI

Official Specification Repository

llms.txt Website

Community Discussions
Hacker News Thread

Reddit r/programming

Related Standards
robots.txt — Control web crawlers

sitemap.xml — List all pages

security.txt — Security contact

humans.txt — Credit the people behind the site

📄 License
MIT © Nierowheezy

⭐ Show Your Support
If this repository helps you, please give it a star! It helps others discover the llms.txt standard.

Star this repo ⭐

Built with ❤️ for the developer community

text

---

# 📄 FILE 2: `CONTRIBUTING.md`

```markdown
# Contributing to Awesome llms.txt

Thanks for your interest in contributing! 🎉

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Adding a Tool to the README](#adding-a-tool-to-the-readme)
- [Adding a Site to the Registry](#adding-a-site-to-the-registry)
- [Adding an Example](#adding-an-example)
- [Improving Documentation](#improving-documentation)
- [Development Setup](#development-setup)
- [Pull Request Guidelines](#pull-request-guidelines)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

1. **Add a tool** — Know a generator, validator, plugin, or integration? Add it to the README.
2. **Add a site** — Does your project have `llms.txt`? Add it to the registry.
3. **Add an example** — Share your `llms.txt` file as an example for others.
4. **Improve documentation** — Fix typos, clarify explanations, add diagrams.
5. **Report issues** — Found a broken link or incorrect info? Open an issue.

---

## Adding a Tool to the README

1. Fork this repository
2. Edit `README.md`
3. Find the appropriate table (Validators, Generators, Framework Plugins, etc.)
4. Add your tool alphabetically:

```markdown
| [Tool Name](https://tool-url.com) | Description of what it does | Language/Framework |
Submit a Pull Request

Example:

markdown
| [my-awesome-validator](https://github.com/user/my-validator) | Validates llms.txt files with extra features | Rust |
Adding a Site to the Registry
Fork this repository

Edit registry/sites.json

Add your site to the sites array:

json
{
  "name": "Your Project Name",
  "url": "https://yoursite.com",
  "hasLlmstxt": true,
  "hasLlmstxtFull": false,
  "llmsTxtUrl": "https://yoursite.com/llms.txt",
  "category": "Library",
  "description": "Brief description of your project",
  "addedAt": "2025-01-15",
  "verifiedAt": "2025-01-15"
}
If your category doesn't exist, add it to the categories array

Submit a Pull Request

Validation: Our GitHub Action will automatically verify that your llms.txt is accessible.

Adding an Example
Fork this repository

Add your llms.txt content to examples/your-project-name.txt

Or add it directly to the README under the "Examples" section

Submit a Pull Request

Guidelines for examples:

Must follow the spec (H1, blockquote, Quick Links)

Must be real (from an actual project, not placeholder text)

Include a brief context comment at the top

Improving Documentation
Documentation improvements are always welcome!

Fix typos or grammatical errors

Clarify confusing sections

Add missing information

Improve formatting

Just submit a PR with your changes.

Development Setup
Prerequisites
Node.js v18 or higher

Git

Local Setup
bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/awesome-llms-txt.git
cd awesome-llms-txt

# Run setup script
./setup.sh

# Or manually:
cd validator
npm install
Running Tests
bash
# Test the validator
cd validator
node cli.js ../examples/valid-llms.txt
node cli.js ../examples/invalid-llms.txt

# Test the registry checker
cd ..
node registry/check-sites.js
Pull Request Guidelines
One change per PR — Easier to review and merge

Update related documentation — If adding a tool, update the README

Use clear commit messages — "Add Zod to registry" not "Update"

Wait for CI to pass — Our GitHub Action validates your changes

Link to relevant issues — If fixing a bug, reference the issue number

Commit Message Format
text
<type>: <subject>

<body>

<footer>
Types: add, fix, docs, chore, update

Example:

text
add: Add MyTool to generators table

MyTool is a Rust-based validator with extra features.

Closes #42
Code of Conduct
Please be respectful and constructive. We're all here to help each other build a better ecosystem.

Be welcoming to newcomers

Assume good intentions

Focus on the content, not the person

Keep discussions professional

Questions?
Open an issue! We're happy to help.

Label your issue appropriately:

bug — Something isn't working

enhancement — New feature or improvement

documentation — Docs need updating

question — Help wanted

text

---

# 📄 FILE 3: `LICENSE`

```text
MIT License

Copyright (c) 2025 Nierowheezy (Olaniyi Olamide)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
````
````
