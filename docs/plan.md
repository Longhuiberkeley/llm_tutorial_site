# LLM Tutorial Site - Plan

## Context

Building a lightweight, interactive LLM tutorial website from scratch. The goal is to teach **general people and business users** practical LLM concepts through playful, interactive content with instant-feedback quizzes.

**Target Audience:** Non-technical users who want to understand AI and use it effectively to improve their businesses.

---

## Design Decisions

| Aspect | Decision |
|--------|----------|
| **Hosting** | GitHub Pages (static HTML/CSS/JS, no build step) |
| **Color Scheme** | Claude-inspired - warm terracotta/coral (#CC785C) accents, clean off-white/cream backgrounds |
| **Illustrations** | Emoji-first (📚, 🧠, ⚡, 🔍) - no external assets |
| **Contact** | Simple email display on About page (mailto: link) |
| **Progress** | NO persistence - no LocalStorage, no analytics, no login. Optional: visual scroll progress bar within each page |
| **Content Format** | Bullet points, max 5-6 in a row - no walls of text |
| **Callout Boxes** | 3 types of floating card boxes: (1) TL;DR/Summary for key takeaways, (2) Did You Know?/Question to encourage further thinking (no correct answer), (3) Common Error/Misconception to clarify what something is NOT. Floating card style with slight elevation. |
| **⭐ Interactions** | PREDEFINED EXPERIENCES ONLY - button choices, hover reveals, tap cards, sliders. NO free-typing, NO open-ended input. Think Duolingo, not ChatGPT. This affects entire technical architecture. |
| **Navigation** | Free navigation - all pages accessible, no unlock logic. TOC sidebar (desktop) or slide-out drawer (mobile) |
| **Dark Mode** | Manual toggle switch (☀️/🌙) - CSS variables for theming |
| **Header** | Minimal: Logo + Theme Toggle + About link. No hamburger on desktop (TOC is always visible) |

---

## Curriculum Structure

**See [docs/content/overview.md](docs/content/overview.md) for the complete curriculum.**

**Summary:** 3 Groups, 13 Chapters, ~63 Pages

- **Group 1: BASICS** (Chapters 1-5) - What are LLMs and what can't they do?
- **Group 2: ADVANCED** (Chapters 6-9) - How do we extend LLMs to solve their limitations?
- **Group 3: BUSINESS** (Chapters 10-13) - How do I use this in my business?

**Key additions from original plan:**
- Vector Databases (Chapter 7.2)
- RPA Definition (Chapter 11.1)
- Business Understanding First (New Chapter 12)
- Software Change Flowchart (Chapter 12.3)
- Context Poisoning (Chapter 7.5)
- Prompt Engineering consolidated (Chapter 5)

---

## Content File Structure

Each page should have its own `.md` file with this structure:

```markdown
---
title: Page Title
chapter: 1
page: 2
goals:
  - Goal 1
  - Goal 2
visuals:
  - "Type of interactive/animation"
quiz:
  question: "Quiz question?"
  options: ["A", "B", "C", "D"]
  correct: "B"
  explanation: "Why B is correct..."
---

# Page Title

## Goal 1
- Bullet point 1
- Bullet point 2
- Bullet point 3

## Goal 2
- Bullet point 1
- Bullet point 2
- Bullet point 3

---

```

---

## Technical Architecture

```
llm_tutorial_site/
├── index.html              # Landing page / chapter overview (root for GitHub Pages)
├── pages/                  # Content pages (subfolder)
│   ├── about.html
│   ├── chapter-01.html
│   └── ...
├── css/
│   ├── main.css           # Core styles
│   └── animations.css     # CSS animations
├── js/
│   ├── main.js            # Navigation, theme toggle, progress tracking
│   ├── quizzes.js         # Quiz logic, instant feedback
│   └── interactives/      # Interactive component scripts
│       ├── word-distance.js
│       ├── attention-arrows.js
│       ├── token-cards.js
│       └── context-toggle.js
├── scripts/
│   └── build.js           # Markdown → HTML build script
├── templates/
│   └── page-template.html # HTML template for content pages
├── docs/
│   └── content/           # Source markdown files
│       ├── overview.md
│       ├── chapter-01.md
│       └── ...
└── assets/
    └── components/        # Reusable HTML snippets
        ├── callout-tldr.html
        ├── callout-dyk.html
        ├── callout-error.html
        ├── quiz-box.html
        └── (visual components)
```

---

## Content Authoring Workflow

### Overview

Content is authored in **Markdown** with frontmatter, then converted to **HTML** via a simple build script.

### Why Markdown + Template?

| Benefit | Description |
|---------|-------------|
| **Easy to edit** | Content stays in plain markdown, not HTML |
| **Simple build** | One Node.js script converts MD → HTML |
| **Full control** | HTML template gives complete layout control |
| **Component reuse** | Visual components are predefined HTML snippets |
| **Version control** | Markdown diffs are clean and readable |

### Markdown Format

Each page has a `.md` file with frontmatter:

```markdown
---
title: "1.1 Keyboard vs LLM"
chapter: 1
page: 1
goals:
  - "Show that LLMs are fundamentally the same as phone autocomplete"
  - "Understand that LLMs predict the next word, they don't think"
visuals:
  - "comparison-grid"
quiz:
  question: "Which pair is closest in meaning-space?"
  options:
    - text: "A) 🚗 car and 🍌 banana"
      correct: false
    - text: "B) 🦁 lion and 🐯 tiger"
      correct: true
  explanation: "Both are big cats."
---

# Page Title

Content here in markdown...

## Goal 1
- Bullet point 1
- Bullet point 2
```

### Build Process

```bash
# Run build script
node scripts/build.js

# Output: HTML files generated in pages/
```

### Visual Components

Frontmatter `visuals` field maps to predefined HTML components:

| Visual Type | Component | Description |
|-------------|-----------|-------------|
| `comparison-grid` | `assets/components/comparison-grid.html` | Side-by-side comparison cards |
| `word-distance` | `assets/components/word-distance.html` | Interactive 2D word map |
| `attention-viz` | `assets/components/attention-viz.html` | Attention arrows visualization |
| `token-cards` | `assets/components/token-cards.html` | Tap-to-reveal tokenization |
| `context-toggle` | `assets/components/context-toggle.html` | Scene comparison toggle |

### Dark Mode Style Guide

**Implementation**: Tailwind CSS with `dark:` prefix

**Toggle Method**: Add/remove `dark` class on `<html>` element

**Color Palette**:

| Usage | Light Mode | Dark Mode |
|-------|------------|-----------|
| Background | `#fbf9f6` | `#1a1a1a` |
| Card/Surface | `#ffffff` | `#252525` |
| Sidebar | `#f5f3f0` | `#1f1f1f` |
| Text Primary | `#1b1c1a` | `#e8e8e8` |
| Text Secondary | `#54433e` | `#a8a8a8` |
| Accent | `#CC785C` | `#E8A88F` |

**Tailwind Config** (in each HTML file):
```javascript
tailwind.config = {
    darkMode: "class",  // Use 'dark' class
    theme: {
        extend: {
            colors: {
                // Light mode colors
                "background": "#fbf9f6",
                "surface-container-lowest": "#ffffff",
                // ... (see full palette above)
            }
        }
    }
}
```

**Usage in HTML**:
```html
<body class="dark:bg-background-dark dark:text-on-surface-dark">
<nav class="dark:bg-surface-container-lowest-dark">
<div class="dark:bg-surface-container-low dark:text-on-surface-dark">
```

---

## Interactive Components

**All components use predefined interactions - NO free-typing or generative features.**

| Component | Tech | Description |
|-----------|------|-------------|
| Button Choices | HTML/CSS | Select from 2-4 predefined options (quiz-style) |
| Hover Reveals | CSS | Hover over word/card to reveal hidden content (arrows, tokens, etc.) |
| Tap Cards | HTML/CSS | Tap/click card to flip/reveal (tokenization, sentence breakdown) |
| Sliders | HTML input | Drag slider to adjust values (context window, temperature) |
| Toggles | CSS checkbox | On/off switches (system prompt, comparisons) |
| Attention Viz | CSS/SVG | Animated arrows between words (hover to trigger) |
| Drag-Drop | HTML5 Drag-drop | Drag items to clusters (word grouping, categorization) |
| Quiz Feedback | CSS | Green pulse animation for correct, red shake for wrong |

**NOT included (requires R&D/complexity):**
- Free text input fields
- LLM API calls for real-time generation
- Voice input
- File upload (except predefined examples)

---

## Page Layout

```
┌─────────────────────────────────────────────────────────────────────────┐
│ HEADER (fixed, 50px)                                                    │
│ LLM Tutorial                    [☀️/🌙]    [About]                       │
├──────┬──────────────────────────────────────────────────────────────────┤
│ TOC  │  Chapter 1: Intuition ───── Page 3 of 5                          │
│      │  ───────────────────────────────────────────────────────────────  │
│ side │                                                                  │
│ bar  │  ┌──────────────────────────────────────────────────────────┐   │
│      │  │  1.2 Word Distance - Which Words Are "Close"?            │   │
│ Ch1  │  │                                                          │   │
│ 1.1  │  │  Words have "distance" in meaning-space:                 │   │
│ 1.2  │  │  • Similar words are "close" (lion ↔ tiger)              │   │
│ 1.3  │  │  • Unrelated words are "far" (lion ↔ banana)            │   │
│ 1.4  │  │  • LLMs use this distance to understand meaning          │   │
│ 1.5  │  │                                                          │   │
│      │  │  📮 INTERACTIVE: Word Neighborhood                        │   │
│ Ch2  │  │  [Hover words to see connections]                         │   │
│ 2.1  │  │  [🦁 lion]───[🐯 tiger]     [🍌 banana]    [🚗 car]       │   │
│ 2.2  │  │                                                          │   │
│ 2.3  │  │  🧠 QUIZ                                                 │   │
│ ...  │  │  ────────────────────────────────────────────────────    │   │
│      │  │  Which pair is closest in meaning?                      │   │
│ Ch3  │  │  [ ] Lion & Banana    [●] Lion & Tiger  ← tap           │   │
│ ...  │  │                                                          │   │
│      │  │  ✅ Correct! Both are big cats.                          │   │
│      │  │                                                          │   │
│      │  └──────────────────────────────────────────────────────────┘   │
│      │                                                                  │
│      │              [< 1.1 Keyboard]     [1.3 Context >]              │
├──────┴──────────────────────────────────────────────────────────────────┤
│ FOOTER (40px)                                                           │
│ © 2026 | email@example.com | GitHub                                     │
└─────────────────────────────────────────────────────────────────────────┘
```

**Layout elements:**
- **Header** (50px, fixed): Logo + Theme Toggle + About link. No hamburger on desktop.
- **Left sidebar** (240px, fixed): TOC with all chapters and pages always visible
  - Chapter headings (x): Accent color, bold, larger font
  - Page items (x.y): Indented, current page highlighted with accent background
  - Visited pages: Subtle visual indicator (darker text)
- **Main area**: Chapter + page indicator + Content cards + Interactives + Quizzes
- **Footer** (40px): Copyright + Email + GitHub link
- **Optional**: Within-page scroll progress bar (visual only, no storage)

**Mobile layout:**
- Header includes hamburger [≡] that slides TOC in from left
- TOC covers content when open, has [×] close button
- Single column content, full-width cards

---

## TOC Sidebar Design Specification

**Structure:**
```
Chapter 1: Intuition        ← Chapter heading (accent color, bold)
  1.1 Keyboard vs LLM       ← Page item (indent 12px)
  1.2 Word Distance         ← Current page (accent bg)
  1.3 Context Matters
  1.4 Sentence Distance
  1.5 Distance = Generation

Chapter 2: Under the Hood   ← Chapter heading
  2.1 Tokenization
  2.2 Attention Arrows
  ...
```

**CSS styles:**
- Chapter headings: `--accent` color, `font-weight: 600`, `font-size: 14px`, `padding: 8px 20px`, `margin-top: 16px`
- Page items: `color: var(--text-secondary)`, `font-size: 13px`, `padding: 6px 20px 6px 32px`
- Current page: `background: var(--accent)`, `color: white`, `border-left: 3px solid var(--accent-dark)`
- Visited pages: `color: var(--text-primary)` (subtle indicator)
- Hover state: Light gray background for all non-current pages

**Behavior:**
- Always fully expanded (no collapse/expand logic)
- Clicking chapter heading scrolls to first page of that chapter
- Clicking page item navigates to that page
- No localStorage or persistence - current page detected via URL

---

## Dark Mode Implementation

**Framework**: Tailwind CSS with `dark:` prefix

**Activation**: Toggle `dark` class on `<html>` element

**Style Guide**: See "Content Authoring Workflow" section above for full color palette

**Toggle Button**:
```html
<button id="theme-toggle" aria-label="Toggle dark mode">
  <span class="material-symbols-outlined">light_mode</span>
</button>
```

**JavaScript** (js/main.js):
```javascript
themeToggle.addEventListener('click', () => {
    const html = document.documentElement;
    const icon = themeToggle.querySelector('.material-symbols-outlined');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        icon.textContent = 'light_mode';
    } else {
        html.classList.add('dark');
        icon.textContent = 'dark_mode';
    }
});
```

**Behavior:**
- Toggle switches between light and dark modes
- Theme preference NOT persisted (no localStorage) - resets on reload
- All components must include `dark:` variants for proper theming

---

## Implementation Steps

### Step 1: Foundation (Setup & Layout)
- [ ] Create directory structure
- [ ] Initialize Git repo
- [ ] Create `index.html` with chapter grid layout
- [ ] Create `css/main.css` with playful theme (colors, typography, dark mode CSS variables)
- [ ] Create responsive grid (TOC sidebar + content area)

### Step 2: Navigation & Theme
- [ ] Implement TOC with chapter/page hierarchy (chapter headings + indented page items)
- [ ] Add current page highlighting (accent background for active page)
- [ ] Implement dark mode toggle switch (☀️/🌙) with CSS variable switching
- [ ] Mobile TOC slide-out drawer with hamburger menu

### Step 3: Content & Quizzes
- [ ] Create Markdown template with frontmatter
- [ ] Write Chapter 1 content (5 pages)
- [ ] Build MD→HTML converter (or write HTML directly)
- [ ] Implement quiz system (instant feedback: green pulse for correct, red shake for wrong)
- [ ] Add explanation reveal on quiz answer selection

### Step 4: Interactive Elements
- [ ] Attention visualization (animated SVG arrows)
- [ ] Embedding explorer (hover to show word connections)
- [ ] Context window demo (emoji books that fill up)
- [ ] Tokenization tap-to-reveal cards
- [ ] Sliders for temperature/context window demos

### Step 5: Remaining Content
- [ ] Write Chapters 2-13 content
- [ ] Create About page (bio + email display)
- [ ] Add illustrations (emoji-first, SVG if needed)

### Step 6: Polish & Deploy
- [ ] Mobile responsiveness (TOC drawer, tap-friendly targets)
- [ ] Accessibility (ARIA labels, keyboard navigation)
- [ ] Set up GitHub Pages
- [ ] Final testing

---

## Content Authoring Workflow

1. **Create/edit `.md` files** in `/content/`
2. **Run build script**: Converts MD → HTML
3. **Preview locally**: Open `index.html` in browser
4. **Commit changes**: Git for version control
5. **Deploy**: Push to GitHub (auto-deploy via GitHub Pages)

---

## Verification

How to test the site:

1. Run local server: `python3 -m http.server 8000`
2. Open `http://localhost:8000`
3. Verify:
   - [ ] TOC sidebar displays all chapters and pages
   - [ ] Current page is highlighted in TOC
   - [ ] Clicking TOC items navigates to correct page
   - [ ] Dark mode toggle works (switches themes correctly)
   - [ ] Quizzes show instant feedback (green pulse for correct, red shake for wrong)
   - [ ] Quiz explanations appear after selecting an answer
   - [ ] Animations play (attention arrows, context window fill, hover reveals)
   - [ ] About page loads with email display
   - [ ] Mobile view: TOC drawer slides in/out
   - [ ] Mobile view: All interactive elements are tap-friendly
4. Deploy to GitHub Pages and verify hosting

---

## Questions for Discussion

1. **Prompt Engineering**: Should we add a dedicated section on HOW to write effective prompts? (Be specific, give examples, chain-of-thought)

2. **Safety/Privacy**: Is it critical to teach users what NOT to share with LLMs? (PII, trade secrets, passwords)

3. **Major Players**: Should we have a "Who's Who" section? (OpenAI, Anthropic, Google, Meta, xAI, etc.)

4. **Model Sizes/Costs**: Do business users need to understand GPT-4o vs GPT-4.1 vs Mini? When to use what?

5. **VLLM/Multimodal**: Is understanding vision-language models important for your target audience?

6. **API vs Web UI**: Should we teach the difference between using chat interfaces vs building with APIs?

7. **Any topics I missed?** What else would help general people use AI effectively?
