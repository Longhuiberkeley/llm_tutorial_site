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
├── index.html              # Landing page / chapter overview
├── about.html              # About/consulting page
├── css/
│   ├── main.css           # Core styles
│   └── animations.css     # CSS animations
├── js/
│   ├── main.js            # Navigation, progress tracking
│   ├── quizzes.js         # Quiz logic, instant feedback
│   └── interactives.js    # Embedding explorer, attention viz
├── content/
│   ├── chapter-01/
│   │   ├── page-01.md
│   │   ├── page-02.md
│   │   └── ...
│   └── chapter-02/
│       └── ...
└── assets/
    └── illustrations/     # Or use emoji/SVG for simplicity
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

**CSS Variables:**
```css
/* Light mode (default) */
:root {
  --bg-body: #FAF8F5;
  --bg-card: #FFFFFF;
  --bg-sidebar: #F5F3F0;
  --text-primary: #2D2D2D;
  --text-secondary: #6B6B6B;
  --border-color: #E0E0E0;
  --accent: #CC785C;
  --accent-light: #E8A88F;
  --accent-dark: #A55A40;
  --success: #5FA860;
  --error: #D65C5C;
}

/* Dark mode (activated via data-theme attribute) */
[data-theme="dark"] {
  --bg-body: #1A1A1A;
  --bg-card: #252525;
  --bg-sidebar: #1F1F1F;
  --text-primary: #E8E8E8;
  --text-secondary: #A8A8A8;
  --border-color: #3A3A3A;
  --accent: #E8A88F;
  --accent-light: #F5C4B5;
  --accent-dark: #CC785C;
}
```

**Toggle Button:**
```html
<button id="theme-toggle" aria-label="Toggle dark mode">
  <span class="icon-sun">☀️</span>
  <span class="icon-moon">🌙</span>
</button>
```

**Behavior:**
- Toggle switches between light and dark modes
- Theme preference NOT persisted (no localStorage) - resets on reload
- Alternatively: Use `prefers-color-scheme` media query for auto-detect with manual override

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
