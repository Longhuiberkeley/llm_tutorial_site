const fs = require('fs');
const path = require('path');

const enDir = path.join(__dirname, '../docs/content');
const zhDir = path.join(__dirname, '../ai-unpacked/src/content/docs/zh-hant-hk');
const componentsDir = path.join(__dirname, '../assets/components');

const files = fs.readdirSync(zhDir).filter(f => f.endsWith('.md'));

files.forEach(file => {
    const zhPath = path.join(zhDir, file);
    const enPath = path.join(enDir, file);
    
    if (!fs.existsSync(enPath)) {
        console.warn(`Skipping ${file}: Source English file not found.`);
        return;
    }
    
    let zhContent = fs.readFileSync(zhPath, 'utf8');
    const enContent = fs.readFileSync(enPath, 'utf8');
    let original = zhContent;

    // 1. Revert Callouts
    zhContent = zhContent.replace(/<div class="not-prose callout callout-(tldr|error|dyk|tip)">\s*([\s\S]*?)\s*<\/div>/g, ':::callout-$1\n$2\n:::');

    // 2. Revert empty Interactives
    zhContent = zhContent.replace(/<div id="([^"]+)-container" class="not-prose interactive-container[^>]+><\/div>/g, ':::interactive{id="$1"}');

    // 3. Revert empty Quizzes (no content)
    // Sometimes it's wrapped in not-prose my-12, sometimes it's just the container.
    zhContent = zhContent.replace(/<div id="quiz-([^"]+)" class="not-prose quiz-container my-12" data-quiz="[^"]+"><\/div>/g, ':::quiz{id="$1"}');

    // 4. Revert Quizzes with Content
    // They are wrapped like: <div class="not-prose my-12">\n<!--\nQuiz Box Component...\n-->\n<div id="quiz-..." ...> ... </div>\n\n</div>
    // Let's use a while loop to find all occurrences of `<div id="quiz-` that have content.
    let quizRegex = /<div class="not-prose my-12">\s*<!--[\s\S]*?-->\s*<div id="quiz-([^"]+)"[\s\S]*?<p class="mb-4">([\s\S]*?)<\/p>\s*<div class="space-y-2">([\s\S]*?)<\/div>\s*<div class="quiz-feedback[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g;
    
    zhContent = zhContent.replace(quizRegex, (match, id, question, optionsHtml) => {
        let options = [];
        let optRegex = /<div class="quiz-option[^>]+data-correct="(true|false)"[^>]*>\s*([\s\S]*?)\s*<\/div>/g;
        let optMatch;
        while ((optMatch = optRegex.exec(optionsHtml)) !== null) {
            const isCorrect = optMatch[1] === 'true';
            const text = optMatch[2].trim();
            options.push(`- [${isCorrect ? 'x' : ' '}] ${text}`);
        }
        return `:::quiz{id="${id}"}\n${question.trim()}\n${options.join('\n')}\n:::`;
    });
    
    // Also try matching quizzes that might not have the outer `<div class="not-prose my-12">` wrapper in some cases
    let quizRegex2 = /<div id="quiz-([^"]+)" class="quiz-container[\s\S]*?<p class="mb-4">([\s\S]*?)<\/p>\s*<div class="space-y-2">([\s\S]*?)<\/div>\s*<div class="quiz-feedback[\s\S]*?<\/div>\s*<\/div>/g;
    zhContent = zhContent.replace(quizRegex2, (match, id, question, optionsHtml) => {
        // If it was already replaced, skip
        if (match.includes(':::quiz')) return match;
        let options = [];
        let optRegex = /<div class="quiz-option[^>]+data-correct="(true|false)"[^>]*>\s*([\s\S]*?)\s*<\/div>/g;
        let optMatch;
        while ((optMatch = optRegex.exec(optionsHtml)) !== null) {
            const isCorrect = optMatch[1] === 'true';
            const text = optMatch[2].trim();
            options.push(`- [${isCorrect ? 'x' : ' '}] ${text}`);
        }
        return `:::quiz{id="${id}"}\n${question.trim()}\n${options.join('\n')}\n:::`;
    });

    // Clean up any remaining quiz wrappers if the inner was replaced by quizRegex2
    zhContent = zhContent.replace(/<div class="not-prose my-12">\s*<!--[\s\S]*?-->\s*(:::quiz[\s\S]*?:::)\s*<\/div>/g, '$1');


    // 5. Revert Visuals
    // To match visuals correctly, we extract the sequence of visuals from the EN file.
    let enVisuals = [];
    let enVisRegex = /:::visual\{name="([^"]+)"\}/g;
    let enVisMatch;
    while ((enVisMatch = enVisRegex.exec(enContent)) !== null) {
        enVisuals.push(enVisMatch[1]);
    }

    // Now find pure <div class="not-prose"> ... </div> blocks in zhContent that are NOT callouts or quizzes.
    // Callouts have `class="not-prose callout...`, Quizzes have `<div class="not-prose my-12"`, Interactives have `class="not-prose interactive-container`.
    // Pure visuals were injected as: `<div class="not-prose">\n${html}\n</div>`
    // We match `<div class="not-prose">` exactly.
    let visualIndex = 0;
    // We need to be careful with greedy matching. We find `<div class="not-prose">` and the matching `</div>`.
    // Let's use a simpler regex that relies on the exact class string.
    // Assuming the visual block doesn't contain nested `<div class="not-prose">`.
    let zhVisRegex = /<div class="not-prose">\s*([\s\S]*?)\s*<\/div>\n*(?=##|$|:::|<div)/g;
    
    // A safer way to replace visuals is splitting by `<div class="not-prose">` and matching the end.
    // Or, since we only want to extract the translated HTML and replace it with a directive:
    
    // We will do a custom replacement logic.
    let parts = zhContent.split('<div class="not-prose">');
    if (parts.length > 1) {
        let newZhContent = parts[0];
        for (let i = 1; i < parts.length; i++) {
            let part = parts[i];
            // Find the closing </div> of this block. 
            // In the generated HTML, it's usually at the end of the part before the next markdown heading or paragraph.
            // Let's find the last </div> before the next section.
            // Actually, `convert-directives.js` added `\n</div>\n`. Let's look for `</div>\n\n` or similar.
            let endIdx = part.lastIndexOf('</div>');
            if (endIdx === -1) endIdx = part.length; // Fallback
            
            let htmlContent = part.substring(0, endIdx).trim();
            let restOfPart = part.substring(endIdx + 6); // length of '</div>'
            
            if (visualIndex < enVisuals.length) {
                let visName = enVisuals[visualIndex];
                visualIndex++;
                
                // Save the translated visual component!
                let zhVisPath = path.join(componentsDir, `${visName}-zh-hant-hk.html`);
                fs.writeFileSync(zhVisPath, htmlContent, 'utf8');
                console.log(`Saved localized visual: ${visName}-zh-hant-hk.html`);
                
                newZhContent += `:::visual{name="${visName}"}` + restOfPart;
            } else {
                // If we ran out of expected visuals, just put the HTML back (shouldn't happen)
                newZhContent += `<div class="not-prose">` + part;
            }
        }
        zhContent = newZhContent;
    }

    if (zhContent !== original) {
        fs.writeFileSync(zhPath, zhContent, 'utf8');
        console.log(`Reverted directives for: ${file}`);
    }
});

