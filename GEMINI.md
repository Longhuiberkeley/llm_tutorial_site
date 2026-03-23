# LLM Tutorial Site - Developer Guide & Project Context

## The Mission
We are building a lightweight, highly interactive, and playful LLM tutorial website. The goal is to teach **general audiences and business users** the core intuitions behind Large Language Models without overwhelming them with math or technical jargon. 

Think of it as the "Duolingo for LLM concepts"—bite-sized, highly visual, and instantly engaging.

## Design Philosophy & Constraints

- **Visuals > Text:** Avoid walls of text. Content should be delivered in short bullet points or distinct UI cards.
- **Predefined Interactions Only:** No free-typing, open-ended inputs, or live API calls. All interactives (sliders, word toggles, tap-to-reveal) are predefined in code.
- **Emoji-First Illustrations:** We rely heavily on emojis (📚, 🧠, ⚡, 🔍) and CSS/SVG styling rather than importing heavy external image assets.
- **Zero Persistence:** No logins, no LocalStorage, no analytics. Progress is tracked purely by where the user navigates.
- **Light Theme Only:** The site uses a Claude-inspired warm terracotta/coral (`#CC785C`) and off-white/cream palette. *Note: Dark mode was explicitly removed from the scope.*
- **Static Hosting:** The site is hosted on GitHub Pages. It consists purely of static HTML, CSS, and JS. 

## Technical Architecture & Build Process

We author content in **Markdown** and use a custom Node.js script to build it into **HTML**. This allows for easy editing while maintaining full control over the visual layout.

### Content Authoring (`docs/content/*.md`)
Each page is a Markdown file starting with YAML frontmatter. We use a custom `:::` directive syntax to inject rich HTML components directly into the page.

**Frontmatter Example:**
```yaml
---
title: "1.1 Keyboard Autocomplete vs LLM Completion"
description: "Learning the core intuition of LLMs..."
chapter: "Chapter 1"
pageId: "01-01"
---
```

**Custom Components:**
- **Callouts:**
  - `:::callout-tldr` (Summary / Key takeaways)
  - `:::callout-error` (Common misconceptions)
  - `:::callout-dyk` (Did You Know? / Trivia)
- **Visuals:** 
  - `:::visual{name="visual-keyboard-llm"}` (Injects rich HTML snippets from `assets/components/`)
- **Interactives & Quizzes:**
  - `:::interactive{id="word-distance"}` (Injects a container and auto-loads `js/interactives/word-distance.js`)
  - `:::quiz{id="01-01"}`

### Build Script (`scripts/build.js`)
To compile the site, run:
```bash
npm run build
```
This script reads the Markdown files, extracts the `:::` directives, parses the Markdown to HTML, re-injects the custom components (from `assets/components/`), generates the sidebar Table of Contents, and outputs the final HTML files into the `pages/` directory.

### Directory Structure
```
llm_tutorial_site/
├── docs/
│   ├── content/           # 📝 Source Markdown files (EDIT THESE)
│   └── md2html_guide.md   # Detailed guide on Markdown syntax
├── assets/
│   └── components/        # 🧩 Reusable HTML snippets (Callouts, Visuals)
├── js/
│   ├── interactives/      # ⚙️ Logic for specific interactive widgets
│   ├── main.js            # Global logic (sidebar, scrolling)
│   └── tailwind-config.js # Global color and font definitions
├── css/
│   └── main.css           # Custom styles complementing Tailwind
├── templates/
│   └── page-template.html # The master HTML skeleton
├── scripts/
│   └── build.js           # 🚀 The build engine
├── pages/                 # 📂 GENERATED HTML (Do not edit directly)
└── index.html             # The landing page
```

## AI Agent / Developer Directives

When modifying this repository, strictly adhere to the following rules:

1. **Never edit `pages/*.html` directly.** Always edit the source `.md` files in `docs/content/` or the `templates/page-template.html` file, then run `npm run build`.
2. **Preserve the Outline Style.** When generating or editing content, use bullet points, short phrases, and the established headings (`## 🎯 Core Goals`, `## 👁️ Visuals & Interactives`, `## 📝 Key Concepts`). Do not convert the curriculum into long paragraphs of prose.
3. **Respect the Palette.** Ensure new UI components rely on the CSS variables defined in `css/main.css` and `js/tailwind-config.js` (e.g., `--accent`, `--surface-container`).
4. **Leverage the `stitch/` Folder.** If complex layouts or new interactive ideas are needed, review the prototypes in the `stitch/` directory. Extract successful UI elements into `assets/components/` and inject them via the `:::visual` tag.
5. **No Live Generation.** Remember that all quizzes and interactives must be hardcoded and function purely on the client side.
6. **Content Improvement over Rewrite.** If GEMINI helps with content, unless it is factually incorrect, focus on improvements and minor adjustments rather than complete rewrites.