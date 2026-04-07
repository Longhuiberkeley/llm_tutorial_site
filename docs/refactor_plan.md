# AI Unpacked: Mobile + Dark Mode + i18n Refactor Plan ## Context The AI Unpacked site (~80+ pages, md2html 
pipeline, GitHub Pages) needs three improvements: responsive mobile experience, proper dark mode, and 
multi-language support (EN, zh-Hant-HK, zh-Hans). The current architecture — no shared components, inline 
CSS/JS, full sidebar duplicated on every page — makes all three painful to add without a structural change. 
## Recommendation: Migrate to Astro **Why Astro over alternatives:** | Option | Verdict | 
|--------|---------| | Enhance current md2html | You'd end up reinventing a worse SSG. i18n routing, shared 
layouts, and language switcher all need hand-coding. | | Hugo | Excellent i18n + fastest builds, but Go 
templates are awkward and interactive JS components need shortcodes. Poor fit for interactive demos. | | 11ty 
| Closest to current philosophy, but i18n requires assembling multiple plugins and there's no built-in asset 
bundling. | | VitePress | Free mobile sidebar + dark mode, but **all interactive JS must become Vue 
components** — dealbreaker. | | **Astro** | Built-in i18n routing, islands architecture for interactive JS 
(no rewrite needed), zero JS by default, Content Collections for markdown, official GitHub Pages action. | 
Astro wins because: (1) vanilla JS works natively in `<script>` tags — no framework wrapper required for 
existing interactive components, (2) i18n is first-class since Astro 4.0, (3) Content Collections preserve 
the markdown authoring workflow. ## Architecture ``` ai-unpacked/ ├── astro.config.mjs # i18n: 
defaultLocale 'en', locales: ['en','zh-Hant-HK','zh-Hans'] ├── src/ │ ├── content/lessons/ │ │ 
├── en/ # 80+ markdown files (source of truth) │ │ ├── zh-Hant-HK/ # Translated copies, same 
filenames │ │ └── zh-Hans/ │ ├── components/ │ │ ├── layout/ # BaseLayout, Sidebar, 
MobileDrawer, Header, Footer, PageNav │ │ ├── interactive/ # TokenizerDemo, AttentionViz, WeightTuner, 
Quiz, Checklist, etc. │ │ └── ui/ # DarkModeToggle, LanguageSwitcher │ ├── i18n/ │ │ ├── ui.ts 
# UI strings per locale (nav labels, button text, quiz feedback) │ │ └── utils.ts # getLangFromUrl(), 
useTranslations() │ ├── styles/ │ │ ├── global.css # Reset, typography │ │ ├── themes.css # CSS 
custom properties for light/dark │ │ └── layout.css # Grid, sidebar, responsive breakpoints │ └── 
pages/ │ ├── [...slug].astro # EN routes (default, no prefix) │ ├── zh-Hant-HK/[...slug].astro │ 
└── zh-Hans/[...slug].astro └── .github/workflows/deploy.yml # withastro/action → deploy-pages ``` 
**Key architectural wins:** - One `BaseLayout.astro` replaces 80+ copies of sidebar/nav/footer - Interactive 
components become reusable Astro islands — shared across all languages - All colors via CSS custom properties 
→ dark mode works everywhere including inside interactive components ## Mobile Strategy - **Desktop 
(≥1024px):** Fixed left sidebar (280px), main content fills rest - **Tablet (768–1023px):** Sidebar hidden, 
toggled by hamburger - **Mobile (<768px):** Full overlay drawer, slides from left, backdrop, focus trap, body 
scroll lock - Sidebar items grouped by chapter as collapsible accordions (current chapter auto-expanded) - 
Previous/Next becomes sticky bottom bar with large touch targets (≥44px) ## Dark Mode Strategy CSS custom 
properties in `themes.css`: - `:root` = light defaults - `[data-theme="dark"]` = dark overrides - `@media 
(prefers-color-scheme: dark)` for system preference when no explicit choice - Init script in `<head>` (before 
paint) reads `localStorage` to avoid flash - Toggle saves to `localStorage` ## i18n Strategy - **Content:** 
Markdown files per locale in Content Collections. English is source of truth. - **UI chrome:** Single `ui.ts` 
file with all nav/button/feedback strings per locale. - **Interactive components:** Receive locale via 
build-time props or `data-*` attributes. Text labels from `ui.ts`, rendered at build time. - **Language 
switcher:** In header, links same slug across locales via `getRelativeLocaleUrl()`. - **Fallback:** 
Untranslated pages show English with banner "此頁面尚未翻譯". ## Interactive Component Migration | Tier | 
Components | Approach | Effort | |------|-----------|----------|--------| | Simple | Quiz, Checklist, 
Confetti | Copy JS into `<script>` tag in `.astro` component. Data via frontmatter → `data-*` attrs. | Low | 
| Self-contained | Tokenizer, PDF Column Demo | Extract HTML structure into component, JS into `<script>` 
tag. Locale labels via build-time rendering. | Moderate | | Complex | Attention Viz, Weight Tuner | Wrap in 
`.astro` component, use `is:inline` if needed. Keep logic intact. | Moderate-High | **Principle: wrap, don't 
rewrite.** Astro `<script>` tags run vanilla JS on the client as-is. ## Migration Phases | Phase | What | 
Duration | |-------|------|----------| | 0. Scaffold | Astro project, config, layouts, CSS architecture, 
deploy empty shell | 1–2 days | | 1. Proof of concept | Migrate 3–5 representative pages (one per interactive 
type), sidebar, drawer, dark mode | 2–3 days | | 2. Bulk migration | All 80+ EN pages to markdown. If source 
.md files exist from md2html pipeline, use directly. | 3–5 days | | 3. i18n infrastructure | UI strings, 
language switcher, locale routing, 3–5 pilot translations | 2–3 days | | 4. Translation | Remaining pages → 
zh-Hant-HK + zh-Hans. LLM-assisted first pass + human review. Can run in parallel. | Ongoing | | 5. Polish | 
Accessibility, `hreflang` tags, OpenGraph, Lighthouse audit, optional sidebar search | 2–3 days | **Total 
(excl. full translation): ~10–16 days.** Full translation is the long tail. ## CI/CD GitHub Actions with 
official `withastro/action@v3` + `deploy-pages@v4`. Repository Pages source set to "GitHub Actions". Build 
runs on push to `main`. ## Risks - **Interactive breakage:** Mitigate by testing each component in isolation 
during Phase 1. `is:inline` as escape hatch. - **zh-Hant-HK locale code:** Contains hyphens — test early that 
Astro handles it correctly in URLs and file paths. - **Build scale:** 80+ pages × 3 locales = 240+ pages. 
Astro handles this in <30s. - **Regression:** Write validation script comparing old HTML output vs new Astro 
output for missing sections/links.
