# AI Unpacked Refactoring Progress (Mobile, Dark Mode, i18n)

This document tracks the migration to Astro, focusing on English/Traditional Chinese support, flicker-free dark mode, and seamless mobile layout.

## High-Level Strategy & Agreement

**Astro Migration:** We will migrate to Astro. We are dropping `zh-Hans` (focusing on `zh-Hant-HK`) and using an LLM at the end of the pipeline for translation, preserving professional English terms via a glossary.

**Handling Inline HTML in `.md` (Black Text on Black Background issue):**
To prevent "black text on a black background" when users switch to dark mode, we must rely on CSS variables or Tailwind utility classes that adapt based on the active theme. 
- *Strategy:* During the migration, we will audit the inline HTML inside `.md` files and custom components. Any hardcoded colors (e.g., `text-black`, `bg-white`, or `style="color: #000"`) will be replaced with our semantic theme variables (e.g., `text-on-surface`, `bg-surface-container`). Because the `.dark` class flips these variables globally, the inline HTML will automatically respect dark mode without needing complex rewrites.

---

## Phase 1: Foundation & "No Flicker" Dark Mode
*Goal: Setup the Astro shell with mobile responsiveness, flawless typography, and perfect dark mode.*

- [x] **1.1 Scaffold Astro Project:** Initialize a new Astro project (e.g., `npm create astro@latest`) with Tailwind CSS.
- [x] **1.2 Semantic Theme Variables Setup:** Define CSS custom properties for light/dark themes in a global stylesheet (e.g., `--color-on-surface`, `--color-surface-container`).
- [x] **1.3 "No Flicker" Dark Mode Script:**
  - Create a `<script is:inline>` in the `<head>` of the base layout.
  - Read `localStorage.getItem('theme')` (fallback to `window.matchMedia`) and apply the `.dark` class to `<html>` **before** the body paints.
- [x] **1.4 Mobile-First Layout & Typography:**
  - Build the responsive `BaseLayout.astro` with a desktop sidebar and a mobile slide-out drawer (hamburger menu).
  - Add the sticky bottom navigation bar for mobile.
  - **Typography Fix:** Ensure the site title "AI Unpacked" does not wrap awkwardly on narrow mobile screens (e.g., use `whitespace-nowrap` or adjust font sizes dynamically to keep "AI Unpacked" on a single line).

## Phase 2: Content & Component Migration (English First)
*Goal: Move the existing 80+ pages to Astro and sanitize inline HTML for Dark Mode.*

- [x] **2.1 Markdown Content Collections:** Move the 80+ existing `.md` files into `src/content/docs/en/`.
- [x] **2.2 Sanitize Inline HTML (Dark Mode Prep):** Find and replace any hardcoded color classes or styles inside the `.md` files and replace them with semantic theme classes (e.g., change `bg-white` to `bg-surface-container-low`).
- [x] **2.3 Rebuild Custom Directives (The `:::` syntax):** Use an Astro Markdown plugin (remark/rehype) to process the custom `:::` directives, or convert to `.mdx`.
- [x] **2.4 Migrate Interactive JS Components:**
  - Move vanilla JS from `js/interactives/` into `.astro` components.
  - Wrap existing vanilla JS in `<script>` tags inside these components.

## Phase 3: i18n Infrastructure
*Goal: Set up routing and UI translation for English and Traditional Chinese.*

- [ ] **3.1 Astro i18n Configuration:** Configure Astro for two locales: `en` (default) and `zh-hant-hk`. Setup localized routing.
- [ ] **3.2 UI Strings & Language Switcher:**
  - Create a translation dictionary (`ui.ts`) for static UI elements.
  - Build a Language Switcher component in the header.

## Phase 4: Bulk Translation & Term Preservation
*Goal: Translate the content at the end using a cost-effective LLM while preserving technical terms.*

- [ ] **4.1 Glossary Definition:** Create a master Glossary document defining terms that MUST remain in English (e.g., "Context Poisoning", "Context Rot", "Prompt Injection").
- [ ] **4.2 Scripted Translation Pipeline:**
  - Write a Node script to parse `en/*.md` and send them to an LLM (e.g., Gemini 1.5 Flash).
  - **Prompt constraint:** "Translate to Traditional Chinese (zh-Hant-HK). Preserve Markdown formatting and HTML tags exactly. Keep these terms in English: [glossary]."
- [ ] **4.3 QA & Verification:** Run the script and visually verify that preserved inline HTML hasn't broken the layout in Dark Mode or Mobile.