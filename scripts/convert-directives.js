const fs = require('fs');
const path = require('path');

const translationTargets = [
    { 
        lang: 'en', 
        srcDir: path.join(__dirname, '../docs/content'),
        outDir: path.join(__dirname, '../ai-unpacked/src/content/docs/en')
    },
    { 
        lang: 'zh-hant-hk', 
        srcDir: path.join(__dirname, '../docs/content-zh-hant-hk'),
        outDir: path.join(__dirname, '../ai-unpacked/src/content/docs/zh-hant-hk')
    }
];

const componentsDir = path.join(__dirname, '../assets/components');

// Read component templates for callouts
const templates = {
    'callout-tldr': fs.readFileSync(path.join(componentsDir, 'callout-tldr.html'), 'utf8'),
    'callout-error': fs.readFileSync(path.join(componentsDir, 'callout-error.html'), 'utf8'),
    'callout-dyk': fs.readFileSync(path.join(componentsDir, 'callout-dyk.html'), 'utf8'),
    'callout-tip': fs.readFileSync(path.join(componentsDir, 'callout-tip.html'), 'utf8'),
    'quiz-box': fs.readFileSync(path.join(componentsDir, 'quiz-box.html'), 'utf8'),
};

function processDirectives() {
    translationTargets.forEach(({ lang, srcDir, outDir }) => {
        if (!fs.existsSync(srcDir)) {
            console.warn(`Source directory not found: ${srcDir}`);
            return;
        }

        // Ensure output directory exists
        if (!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, { recursive: true });
        }

        const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.md') && f !== 'overview.md');
        
        files.forEach(file => {
            const srcPath = path.join(srcDir, file);
            const outPath = path.join(outDir, file);
            let markdown = fs.readFileSync(srcPath, 'utf8');

            // 1. Extract Callouts
            markdown = markdown.replace(/:::callout-(tldr|error|dyk|tip)\n([\s\S]*?)\n:::/g, (match, type, inner) => {
                return `<div class="not-prose callout callout-${type}">\n\n${inner.trim()}\n\n</div>`;
            });

            // 2. Extract Interactives
            markdown = markdown.replace(/:::interactive{id="(.+?)"}/g, (match, id) => {
                return `<div id="${id}-container" class="not-prose interactive-container my-12" data-interactive="${id}"></div>`;
            });

            // 3. Extract Quizzes (with content block)
            markdown = markdown.replace(/:::quiz{id="(.+?)"}\n([\s\S]*?)\n:::/g, (match, id, body) => {
                const lines = body.trim().split('\n');
                const question = lines[0].trim();
                const options = lines.slice(1)
                    .filter(l => l.trim().startsWith('- ['))
                    .map(l => {
                        const correct = l.trim().startsWith('- [x]');
                        const text = l.trim().replace(/^- \[[ x]\]\s*/, '');
                        return { text, correct };
                    });
                    
                let optionsHtml = options.map(opt =>
                    `        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="${opt.correct}">\n            ${opt.text}\n        </div>`
                ).join('\n');
                
                let quizHtml = templates['quiz-box']
                    .replace('{{QUIZ_ID}}', id)
                    .replace('{{QUIZ_QUESTION}}', question)
                    .replace('{{QUIZ_OPTIONS}}', optionsHtml);
                    
                return `<div class="not-prose my-12">\n${quizHtml}\n</div>`;
            });

            // Fallback: empty quiz blocks (no content)
            markdown = markdown.replace(/:::quiz{id="(.+?)"}/g, (match, id) => {
                return `<div id="quiz-${id}" class="not-prose quiz-container my-12" data-quiz="${id}"></div>`;
            });

            // 4. Extract Visuals
            markdown = markdown.replace(/:::visual{name="(.+?)"}/g, (match, name) => {
                // Try localized visual component first, then fallback to default
                let visualPath = path.join(componentsDir, `${name}-${lang}.html`);
                if (!fs.existsSync(visualPath)) {
                    visualPath = path.join(componentsDir, `${name}.html`);
                }
                
                if (fs.existsSync(visualPath)) {
                    let html = fs.readFileSync(visualPath, 'utf8');
                    // Patch hardcoded keyboard colors to be theme-aware or at least look better
                    html = html.replace(/bg-\[#D1D5DB\]/g, 'bg-outline-variant/30')
                               .replace(/bg-\[#B4B8C1\]/g, 'bg-outline-variant/50');
                               
                    // Fix: strip leading whitespaces and empty lines so Astro doesn't parse it as code blocks
                    html = html.replace(/^\s+/gm, '');
                    html = html.replace(/^\s*[\r\n]/gm, '');

                    return `\n<div class="not-prose">\n${html}\n</div>\n`;
                } else {
                    return `<div class="p-4 bg-error text-on-error">Visual component not found: ${name}</div>`;
                }
            });

            // Always write the output file
            fs.writeFileSync(outPath, markdown);
            console.log(`Converted directives [${lang}]: ${file} -> ${outPath}`);
        });
    });
}

processDirectives();