# LLM Unpacked

**Purpose:** Lightweight, interactive LLM tutorial website for non-technical users and business people to learn practical AI concepts through playful, interactive content.

**Vision:** Duolingo-style learning (predefined interactions) NOT ChatGPT-style chat (free typing).

---

## ⚠️ IMPORTANT: CURRENT ARCHITECTURE (ASTRO)

The site has migrated to **Astro**. All active development MUST happen within the `ai-unpacked/` directory.

- **DO NOT** edit files in the root `pages/` or `index.html`.
- **DO NOT** use the legacy `scripts/build.js` or `docs/content/` markdown files.
- **Source of Truth:** Everything inside `ai-unpacked/src/`.

---

## Target Audience

- **Primary:** Non-technical users, business professionals, entrepreneurs
- **Secondary:** Anyone curious about how LLMs work
- **NOT for:** AI researchers or ML engineers (too basic)

**Teaching Philosophy:** Build intuition first, technical details later. Use analogies, emoji, and interactives to make abstract concepts concrete.

---

## Design Philosophy

| Principle | Description |
|-----------|-------------|
| **Predefined Interactions** | Button choices, hover reveals, tap cards, sliders - NO free-typing, NO LLM API calls |
| **Emoji-First** | 📚 🧠 ⚡ 🔍 instead of external assets/images |
| **Theme Support** | Warm terracotta/coral palette. Supports **Light and Dark modes**. |
| **i18n** | English (`en`) and Traditional Chinese (`zh-hant-hk`) support. |
| **Instant Feedback** | Quizzes show immediate results with clear explanations |
| **Concise** | Short paragraphs, bullet points (max 5-6), clear headings |

---

## Tech Stack

```
Astro (v6) + Tailwind CSS (v4) → GitHub Pages
```

**Key Frameworks:**
- **Astro:** Component-driven framework for static sites.
- **Tailwind CSS v4:** Modern CSS utility framework.
- **Material Symbols Outlined:** Icons for visual cues.

---

## Content & Directory Structure (Source: `ai-unpacked/`)

| Path | Description |
|------|-------------|
| `src/content/docs/en/` | English source Markdown files |
| `src/content/docs/zh-hant-hk/` | Traditional Chinese source Markdown files |
| `src/components/` | Astro/React/Vue UI components |
| `src/layouts/` | Page layout templates |
| `src/styles/` | Global styles (Tailwind 4) |
| `public/` | Public static assets |

---

## Build & Development Workflow

**Source of truth (edit these):**
- `ai-unpacked/src/content/docs/**/*.md` — Content updates
- `ai-unpacked/src/components/**/*.astro` — UI component logic/styles
- `ai-unpacked/src/layouts/**/*.astro` — Global page structure

**To make changes:**
1. **Navigate:** `cd ai-unpacked`
2. **Develop:** `npm run dev`
3. **Build:** `npm run build`
4. **Deploy:** GitHub Pages usually picks up the output from `dist/` via CI/CD.

---

## Technical Standards

1. **Always edit source files in `ai-unpacked/src/`.** Never edit generated output in `dist/` or the legacy `pages/` root directory.
2. **Semantic Classes:** Use Tailwind's theme-aware classes (e.g., `text-on-surface`, `bg-primary`) to support light/dark modes automatically.
3. **i18n Consistency:** Every content change in English should have a corresponding change in the Traditional Chinese docs.
4. **No Chapter Number References:** Use topic-based references ("When we discussed prompts...") instead of numbers ("In Chapter 3...").
5. **Prefer "LLM" over "AI":** Use "LLM" specifically for the model. "AI" is for the field or general comparisons.
6. **Component Reuse:** Check `src/components/` before creating new UI elements to ensure visual consistency.
7. **No Live Generation:** Remember that all quizzes and interactives must be hardcoded and function purely on the client side.
