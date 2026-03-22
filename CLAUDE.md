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
| **Session Persistence** | Theme preference saved in `sessionStorage` (survives navigation, resets on tab close) |
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
- `js/theme-init.js` - Theme restoration and toggle logic
- `js/main.js` - UI interactions and navigation
- `js/quizzes.js` - Quiz logic (CSS-driven states)

---

## Color Palette (Semantic Theme)

Use semantic Tailwind classes (e.g., `bg-background`, `text-on-surface`) instead of hardcoded hex values to ensure automatic dark mode support.

| Semantic Name | Light Mode | Dark Mode | CSS Variable |
|---------------|------------|-----------|--------------|
| **Background** | `#fbf9f6` | `#1a1a1a` | `--background` |
| **On Surface** | `#1b1c1a` | `#e8e8e8` | `--on-surface` |
| **Surface (Low)** | `#f5f3f0` | `#1f1f1f` | `--surface-container-low` |
| **Surface (High)** | `#ffffff` | `#252525` | `--surface-container-lowest` |
| **Accent** | **`#CC785C`** | **`#E8A88F`** | `--accent` |
| **Primary** | `#8f482f` | `#e8a88f` | `--primary` |

---

## Dark Mode Implementation

**Mechanism:** Toggle the `dark` class on the `<html>` element.

**Tailwind:** Configured with `darkMode: "class"`.

**Best Practices:**
1. **Prefer semantic classes:** Use `bg-background`, `text-on-surface`, `bg-surface-container-low`.
2. **Avoid redundant `dark:` prefixes:** If a class uses a theme-aware CSS variable (like `bg-background`), you don't need `dark:bg-...`.
3. **Opacity:** Use Tailwind's opacity modifiers (e.g., `text-on-surface/60`) for secondary text instead of hardcoding specific gray colors.

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

## Development Workflow

1. **Local Server:** `python3 -m http.server 8000`
2. **Styling:** Add new variables to `css/main.css` and map them in `js/tailwind-config.js`.
3. **New Pages:** Link `js/tailwind-config.js`, `js/theme-init.js`, and `js/main.js`.
4. **Consistency:** Ensure all text uses `text-on-surface` or `text-on-surface-variant` (for secondary text) to guarantee readability in both modes.
