const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const yaml = require('js-yaml');

const CONTENT_DIR = path.join(__dirname, '../docs/content');
const PAGES_DIR = path.join(__dirname, '../pages');
const TEMPLATE_PATH = path.join(__dirname, '../templates/page-template.html');
const COMPONENTS_DIR = path.join(__dirname, '../assets/components');

// Create pages directory if it doesn't exist
if (!fs.existsSync(PAGES_DIR)) {
    fs.mkdirSync(PAGES_DIR, { recursive: true });
}

const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Component Templates
const components = {
    'callout-tldr': fs.readFileSync(path.join(COMPONENTS_DIR, 'callout-tldr.html'), 'utf8'),
    'callout-error': fs.readFileSync(path.join(COMPONENTS_DIR, 'callout-error.html'), 'utf8'),
    'callout-dyk': fs.readFileSync(path.join(COMPONENTS_DIR, 'callout-dyk.html'), 'utf8'),
};

/**
 * Main Build Function
 */
async function build() {
    console.log('🚀 Starting robust build with component support...');

    const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
    const pages = [];

    files.forEach(file => {
        const rawContent = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8');
        const match = rawContent.match(/^---([\s\S]*?)---([\s\S]*)$/);
        
        if (match) {
            const frontmatter = yaml.load(match[1]);
            const content = match[2].trim();
            pages.push({
                ...frontmatter,
                rawMarkdown: content,
                outFile: file.replace('.md', '.html'),
                interactives: []
            });
        }
    });

    pages.sort((a, b) => {
        if (a.chapter !== b.chapter) return a.chapter.localeCompare(b.chapter);
        return a.pageId.localeCompare(b.pageId);
    });

    const toc = [];
    pages.forEach(page => {
        let chapter = toc.find(c => c.title === page.chapter.toUpperCase());
        if (!chapter) {
            chapter = { title: page.chapter.toUpperCase(), pages: [] };
            toc.push(chapter);
        }
        chapter.pages.push({ id: page.pageId, title: page.title, file: page.outFile });
    });

    pages.forEach((page, index) => {
        let html = template;
        let markdown = page.rawMarkdown;
        const calloutMap = {};
        let calloutIndex = 0;

        // 1. Extract Callouts and replace with placeholders to avoid marked.js interference
        markdown = markdown.replace(/:::callout-(tldr|error|dyk)\n([\s\S]*?)\n:::/g, (match, type, inner) => {
            const placeholder = `<!-- CALLOUT_${calloutIndex} -->`;
            calloutMap[placeholder] = { type, content: marked.parse(inner.trim()) };
            calloutIndex++;
            return placeholder;
        });

        // 2. Extract Interactives
        markdown = markdown.replace(/:::interactive{id="(.+?)"}/g, (match, id) => {
            page.interactives.push(id);
            const placeholder = `<!-- INTERACTIVE_${id} -->`;
            calloutMap[placeholder] = { type: 'interactive', id };
            return placeholder;
        });

        // 3. Extract Quizzes
        markdown = markdown.replace(/:::quiz{id="(.+?)"}/g, (match, id) => {
            const placeholder = `<!-- QUIZ_${id} -->`;
            calloutMap[placeholder] = { type: 'quiz', id };
            return placeholder;
        });

        // 3.5 Extract Visuals
        markdown = markdown.replace(/:::visual{name="(.+?)"}/g, (match, name) => {
            const placeholder = `<!-- VISUAL_${name} -->`;
            calloutMap[placeholder] = { type: 'visual', name };
            return placeholder;
        });

        // 4. Parse Markdown
        let bodyHtml = marked.parse(markdown);

        // 5. Inject Components back into HTML
        Object.keys(calloutMap).forEach(placeholder => {
            const data = calloutMap[placeholder];
            let componentHtml = '';

            if (data.type === 'interactive') {
                componentHtml = `<div id="${data.id}-container" class="interactive-container my-12"></div>`;
            } else if (data.type === 'quiz') {
                componentHtml = `<div id="quiz-${data.id}" class="quiz-container my-12"></div>`;
            } else if (data.type === 'visual') {
                const visualPath = path.join(COMPONENTS_DIR, `${data.name}.html`);
                if (fs.existsSync(visualPath)) {
                    componentHtml = fs.readFileSync(visualPath, 'utf8');
                } else {
                    componentHtml = `<div class="p-4 bg-error text-on-error">Visual component not found: ${data.name}</div>`;
                }
            } else {
                const compTemplate = components[`callout-${data.type}`];
                const placeholderMap = {
                    tldr: '<!-- Your summary content here -->',
                    error: '<!-- Your warning content here -->',
                    dyk: '<!-- Your question or fact here -->'
                };
                // Remove the wrapping <p> from the template if we're injecting a <p> from marked
                // Actually, let's just replace the comment. 
                // To avoid <p><p> nested tags, we can strip the outer <p> from data.content if it exists
                const cleanContent = data.content.trim().replace(/^<p>|<\/p>$/g, '');
                componentHtml = compTemplate.replace(placeholderMap[data.type], cleanContent);
            }
            bodyHtml = bodyHtml.replace(placeholder, componentHtml);
        });

        // 6. Replace Global Placeholders
        html = html.replace(/{{TITLE}}/g, page.title)
                   .replace(/{{CHAPTER_TITLE}}/g, page.chapter)
                   .replace(/{{DESCRIPTION}}/g, page.description || '')
                   .replace(/{{CONTENT}}/g, bodyHtml)
                   .replace(/{{TOC_SIDEBAR}}/g, generateTocHtml(toc, page.pageId));
        
        // Navigation
        const prevPage = pages[index - 1];
        const nextPage = pages[index + 1];
        html = html.replace(/{{PREV_LINK}}/g, prevPage ? `<a href="${prevPage.outFile}" class="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"><span class="material-symbols-outlined">arrow_back</span> ${prevPage.title}</a>` : '')
                   .replace(/{{NEXT_LINK}}/g, nextPage ? `<a href="${nextPage.outFile}" class="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">${nextPage.title} <span class="material-symbols-outlined">arrow_forward</span></a>` : `<a href="../index.html" class="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">Back to Overview <span class="material-symbols-outlined">home</span></a>`);

        const scriptTags = page.interactives.map(id => `<script src="../js/interactives/core.js"></script>\n<script src="../js/interactives/${id}.js"></script>`).join('\n');
        html = html.replace(/{{INTERACTIVE_SCRIPTS}}/g, scriptTags)
                   .replace(/{{QUIZ_SECTION}}/g, '');

        fs.writeFileSync(path.join(PAGES_DIR, page.outFile), html);
        console.log(`✅ Generated: ${page.outFile}`);
    });

    console.log('✨ Build complete!');
}

function generateTocHtml(toc, activeId) {
    let html = '';
    toc.forEach(chapter => {
        html += `<div class="chapter-heading text-accent font-bold text-xs px-3 py-2 mt-4 uppercase tracking-widest border-l-2 border-accent/20 ml-2">${chapter.title}</div>`;
        chapter.pages.forEach(page => {
            const isActive = page.id === activeId;
            const activeClass = isActive ? 'bg-accent/10 text-accent font-bold translate-x-1 border-l-4 border-accent' : 'text-on-surface opacity-60 hover:opacity-100 hover:bg-surface-container transition-all';
            const icon = isActive ? 'school' : 'arrow_right';
            html += `<a href="${page.file}" class="page-item flex items-center gap-3 px-4 py-2.5 rounded-r-lg group ${activeClass}">
                    <span class="material-symbols-outlined text-sm ${isActive ? 'text-accent' : 'opacity-40 group-hover:opacity-100'}">${icon}</span>
                    <span class="text-sm font-medium">${page.title}</span>
                </a>`;
        });
    });
    return html;
}

build().catch(err => { console.error('❌ Build failed:', err); });
