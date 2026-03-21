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
| **Contact** | Simple mailto: email link on About page |
| **Progress** | Session-based (resets to 0 on reload) - no analytics, no persistence |
| **Content Format** | Bullet points, max 5-6 in a row - no walls of text |

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

| Component | Tech | Description |
|-----------|------|-------------|
| Attention Viz | CSS/SVG | Animated arrows between words |
| Embedding Explorer | Vanilla JS | Click word → highlight cluster |
| Context Window | CSS Grid | Books fill based on token count |
| Sorting | HTML5 Drag-drop | RPA vs Agentic categorization |
| Quiz Feedback | CSS | Green pulse animation for correct |

---

## Questions for Discussion

1. **Prompt Engineering**: Should we add a dedicated section on HOW to write effective prompts? (Be specific, give examples, chain-of-thought)

2. **Safety/Privacy**: Is it critical to teach users what NOT to share with LLMs? (PII, trade secrets, passwords)

3. **Major Players**: Should we have a "Who's Who" section? (OpenAI, Anthropic, Google, Meta, xAI, etc.)

4. **Model Sizes/Costs**: Do business users need to understand GPT-4o vs GPT-4.1 vs Mini? When to use what?

5. **VLLM/Multimodal**: Is understanding vision-language models important for your target audience?

6. **API vs Web UI**: Should we teach the difference between using chat interfaces vs building with APIs?

7. **Any topics I missed?** What else would help general people use AI effectively?
