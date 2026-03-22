# Content Authoring Guide: Markdown to HTML

This project uses a custom build system to convert Markdown files in `docs/content/` into interactive HTML pages. This guide explains how to use special components in your Markdown.

## Frontmatter
Every `.md` file MUST start with a YAML frontmatter block:

```yaml
---
title: "1.1 Keyboard Autocomplete vs LLM Completion"
description: "Learning the core intuition of LLMs."
chapter: "Chapter 1"
pageId: "01-01"
---
```

## Custom Components
We use the `:::` syntax for special UI blocks.

### 1. TL;DR (Summary)
Use this for high-level takeaways at the start or end of a section.

```markdown
:::callout-tldr
LLMs are just super-powered autocomplete. They predict what word comes next, nothing more.
:::
```

### 2. Common Error (Warning)
Use this to highlight misconceptions or common mistakes.

```markdown
:::callout-error
LLMs don't "understand" what they're saying - they're just guessing based on patterns.
:::
```

### 3. Did You Know? (Fact/Trivia)
Use this for interesting side-notes or provocative questions.

```markdown
:::callout-dyk
Did you know that GPT-3 was trained on hundreds of billions of words from the internet?
:::
```

### 4. Interactives
Inject a custom interactive visualization. This will create a container div and automatically load the corresponding JS files from `js/interactives/`.

```markdown
:::interactive{id="attention-arrows"}
```
*(Note: Replace `attention-arrows` with the filename in `js/interactives/` without the `.js` extension)*

### 5. Quizzes
Inject a quiz placeholder.

```markdown
:::quiz{id="01-01"}
```

## standard Markdown
You can use standard Markdown for everything else:
- `##` for section headings
- `**bold**` and `*italic*`
- `[links](https://...)`
- `-` or `1.` for lists
- `> quotes`
- `code blocks`
