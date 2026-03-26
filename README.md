# LLM Tutorial Site

Interactive LLM tutorial for non-technical users and business professionals.

## Development

### Start local server

```bash
python3 -m http.server 8000
```

Then open: [http://localhost:8000](http://localhost:8000)

### Build pages from Markdown

Content lives in `docs/content/`. After editing `.md` files, run the build to regenerate the HTML pages:

```bash
npm run build
```

This runs `scripts/build.js` which compiles the Markdown content into `pages/*.html`.

## Project structure

```
index.html          Landing page
pages/              Generated HTML pages
docs/content/       Source Markdown for each chapter
css/main.css        Semantic theme variables and shared component styles
js/                 Tailwind config, quiz logic, main UI
assets/components/  Copy-paste HTML snippets (callouts, visuals, quizzes)
```
