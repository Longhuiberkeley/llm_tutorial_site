# LLM Tutorial Site

**Purpose:** Lightweight, interactive LLM tutorial website for non-technical users and business people to learn practical AI concepts through playful, interactive content.

**Vision:** Duolingo-style learning (predefined interactions) NOT ChatGPT-style chat (free typing).

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
| **Light Theme Only** | Warm terracotta/coral palette. No dark mode. |
| **Instant Feedback** | Quizzes show green for correct, red for wrong with immediate explanation |
| **Concise** | Short paragraphs, bullet points (max 5-6), clear headings |

---

## Tech Stack

```
Static HTML/CSS/JS → GitHub Pages
```

**Frameworks:**
- Tailwind CSS (via CDN)
- Centralized config: `js/tailwind-config.js`
- Material Symbols Outlined (Google font icons)
- Vanilla JavaScript (no frameworks)

**Key Files:**
- `index.html` - Landing page with chapter grid
- `pages/*.html` - Content pages
- `css/main.css` - Semantic theme variables and shared component styles
- `js/tailwind-config.js` - Shared Tailwind theme extensions
- `js/main.js` - UI interactions and navigation
- `js/quizzes.js` - Quiz logic (CSS-driven states)

---

## Color Palette

Use semantic Tailwind classes (e.g., `bg-background`, `text-on-surface`) instead of hardcoded hex values.

| Semantic Name | Value | CSS Variable |
|---------------|-------|--------------|
| **Background** | `#fbf9f6` | `--background` |
| **On Surface** | `#1b1c1a` | `--on-surface` |
| **Surface (Low)** | `#f5f3f0` | `--surface-container-low` |
| **Surface (High)** | `#ffffff` | `--surface-container-lowest` |
| **Accent** | **`#CC785C`** | `--accent` |
| **Primary** | `#8f482f` | `--primary` |

**Best Practices:**
1. **Prefer semantic classes:** Use `bg-background`, `text-on-surface`, `bg-surface-container-low`.
2. **Opacity:** Use Tailwind's opacity modifiers (e.g., `text-on-surface/60`) for secondary text instead of hardcoding specific gray colors.

---

## Component Standards

### Callout Boxes
Use centralized classes in `main.css`:
- `.callout-tldr`: Summary/Key takeaway (Accent border)
- `.callout-dyk`: Did You Know? (Blue border)
- `.callout-error`: Common Misconception (Red border)

### Quizzes
- Use `quiz-option` class for interactive choices.
- Logic is handled in `js/quizzes.js`.
- Status is tracked via `.correct` and `.wrong` classes on options.
- Feedback uses `.quiz-feedback-correct` and `.quiz-feedback-wrong` classes.

---

## Build System

This site uses a Node.js static site generator. **Never directly edit generated output files.**

**Sources of truth (edit these):**
- `docs/content/*.md` → generates `pages/*.html`
- `docs/course-structure.yaml` → generates `index.html` chapter cards
- `assets/page-template.html` — page HTML shell
- `assets/index-template.html` — landing page HTML shell
- `assets/components/*.html` — named visual/callout components

**Generated output (do not edit directly):**
- `pages/*.html`
- `index.html`

**To make changes:**
1. Edit `.md` files for page content changes
2. Edit `docs/course-structure.yaml` for chapter card titles/descriptions/metadata
3. Run `npm run build` to regenerate all HTML

**Inline visuals in Markdown:** Write raw HTML directly in `.md` files using Tailwind classes — `marked` passes it through unchanged. Use `:::visual{name="X"}` only when a dedicated file exists at `assets/components/X.html`; otherwise it renders as an error div.

---

## Development Workflow

1. **Local Server:** `python3 -m http.server 8000`
2. **Build:** `npm run build` — regenerates all HTML from markdown and YAML sources
3. **Styling:** Add new variables to `css/main.css` and map them in `js/tailwind-config.js`.
4. **New Pages:** Add a `.md` file to `docs/content/`, add the page to the chapter's `totalPages` in `docs/course-structure.yaml`, then run `npm run build`.
5. **Consistency:** Ensure all text uses `text-on-surface` or `text-on-surface-variant` (for secondary text) to guarantee readability.
6. **No Chapter Number References:** Content pages must never reference other chapters by number (e.g., "In Chapter 2..."). Use topic references instead (e.g., "When we explored tokenization...").
7. **Prefer "LLM" over "AI":** In tutorial content, prefer "LLM" or "the LLM" when referring to the model specifically. "AI" is acceptable when referring to the broader field or comparing AI vs humans, but avoid using it as a synonym for "the model" in explanations.
