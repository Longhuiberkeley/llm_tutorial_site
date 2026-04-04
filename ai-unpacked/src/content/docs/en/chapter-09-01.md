---
title: "9.1 Multimodal AI — More Than Words"
description: "LLMs are no longer limited to text. A tour of what today's AI can see, hear, and do with images, audio, and video."
chapter: "Chapter 9"
pageId: "09-01"
---

## 🎯 Core Goals
- Introduce multimodal AI capabilities and their current limitations.
- Clarify that understanding and generating media are very different skills — and not all models do both.

<div class="not-prose callout callout-tldr">

Modern AI can process images, audio, and video — not just text. But "understanding" an image and "creating" an image involve completely different systems. Don't assume every LLM can do everything.

</div>

## Beyond the Text Box

For most of AI's history, the conversation was literally one-dimensional: you type, it types back. Today that's changed dramatically.

Modern AI systems can:

- **See images:** Upload a photo and ask "What's in this picture?" or "Is there anything wrong with this diagram?"
- **Read documents:** Upload a PDF or spreadsheet and ask questions about it
- **Listen to audio:** Transcribe speech, translate spoken language, answer voice questions
- **Watch video:** Describe what's happening, identify objects, summarize content
- **Generate images:** Create illustrations from text descriptions (though this is usually a separate model)

This is called **multimodal** — working with multiple types of media.


<div class="not-prose">
<!-- Visual: Multimodal modality tour — 5 clickable cards -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">What Can AI Work With?</h3>
<p class="text-sm text-on-surface-variant">Modern AI isn't limited to text. Click each type to see what's possible.</p>
</div>
<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
<!-- Images -->
<button onclick="toggleModality(this)" class="mod-card p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent text-left transition-all cursor-pointer">
<div class="text-3xl mb-2">🖼️</div>
<div class="font-bold text-sm mb-1">Images</div>
<div class="text-[11px] text-on-surface/60">Photos, diagrams, screenshots</div>
<div class="mod-detail hidden mt-3 pt-3 border-t border-outline-variant">
<div class="text-[11px] leading-relaxed space-y-2">
<div><span class="font-bold text-green-700">✅ Business use:</span> Upload a photo of a defective part and ask "What's wrong with this?" — gets an accurate answer.</div>
<div><span class="font-bold" style="color: var(--accent);">⚠️ Limitation:</span> Tiny labels in dense technical diagrams can still be misread.</div>
</div>
</div>
</button>
<!-- Documents -->
<button onclick="toggleModality(this)" class="mod-card p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent text-left transition-all cursor-pointer">
<div class="text-3xl mb-2">📄</div>
<div class="font-bold text-sm mb-1">Documents</div>
<div class="text-[11px] text-on-surface/60">PDFs, scans, spreadsheets</div>
<div class="mod-detail hidden mt-3 pt-3 border-t border-outline-variant">
<div class="text-[11px] leading-relaxed space-y-2">
<div><span class="font-bold text-green-700">✅ Business use:</span> Upload a 50-page contract and ask "Are there any auto-renewal clauses?" — saves hours of reading.</div>
<div><span class="font-bold" style="color: var(--accent);">⚠️ Limitation:</span> Very long documents may exceed context limits — check the model's page cap.</div>
</div>
</div>
</button>
<!-- Audio -->
<button onclick="toggleModality(this)" class="mod-card p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent text-left transition-all cursor-pointer">
<div class="text-3xl mb-2">🎙️</div>
<div class="font-bold text-sm mb-1">Audio</div>
<div class="text-[11px] text-on-surface/60">Speech, calls, recordings</div>
<div class="mod-detail hidden mt-3 pt-3 border-t border-outline-variant">
<div class="text-[11px] leading-relaxed space-y-2">
<div><span class="font-bold text-green-700">✅ Business use:</span> Transcribe and summarize a one-hour customer call into 5 action items in seconds.</div>
<div><span class="font-bold" style="color: var(--accent);">⚠️ Limitation:</span> Strong accents or background noise can reduce transcription accuracy.</div>
</div>
</div>
</button>
<!-- Video -->
<button onclick="toggleModality(this)" class="mod-card p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent text-left transition-all cursor-pointer">
<div class="text-3xl mb-2">🎬</div>
<div class="font-bold text-sm mb-1">Video</div>
<div class="text-[11px] text-on-surface/60">Clips, screen recordings, demos</div>
<div class="mod-detail hidden mt-3 pt-3 border-t border-outline-variant">
<div class="text-[11px] leading-relaxed space-y-2">
<div><span class="font-bold text-green-700">✅ Business use:</span> Upload a screen recording of a software bug and ask "What caused this error?" — describes the sequence of events.</div>
<div><span class="font-bold" style="color: var(--accent);">⚠️ Limitation:</span> Long videos may be sampled (not every frame analyzed) — fast-moving detail can be missed.</div>
</div>
</div>
</button>
<!-- Cross-modal Search -->
<button onclick="toggleModality(this)" class="mod-card p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent text-left transition-all cursor-pointer col-span-2 sm:col-span-1">
<div class="text-3xl mb-2">🔍</div>
<div class="font-bold text-sm mb-1">Cross-modal Search</div>
<div class="text-[11px] text-on-surface/60">Search images with text (or vice versa)</div>
<div class="mod-detail hidden mt-3 pt-3 border-t border-outline-variant">
<div class="text-[11px] leading-relaxed space-y-2">
<div><span class="font-bold text-green-700">✅ Business use:</span> Type "a red machine part with a circular connector" and find the matching photo in your archive — without any file naming or tagging.</div>
<div><span class="font-bold" style="color: var(--accent);">⚠️ Limitation:</span> Requires your content to be indexed first — it's a setup-and-maintain system, not instant.</div>
</div>
</div>
</button>
</div>
<div class="mt-5 bg-error/5 border border-error/20 rounded-xl px-4 py-3 text-xs text-center text-on-surface/70">
⚠️ Not every LLM handles every modality — always verify the specific model's capabilities before building a workflow around them.
</div>
</div>
<script>
(function() {
window.toggleModality = function(card) {
var detail = card.querySelector('.mod-detail');
var isOpen = !detail.classList.contains('hidden');
// Close all cards
document.querySelectorAll('.mod-card').forEach(function(c) {
c.querySelector('.mod-detail').classList.add('hidden');
c.style.borderColor = '';
c.style.backgroundColor = '';
});
// If it wasn't open, open it
if (!isOpen) {
detail.classList.remove('hidden');
card.style.borderColor = 'var(--accent)';
card.style.backgroundColor = 'color-mix(in srgb, var(--accent) 6%, white)';
}
};
})();
</script>

</div>


## Not All Models Are Equal

Here's where many people get confused: just because a product *interface* can handle images doesn't mean the underlying LLM can.

- **Some LLMs are text-only:** They process text in, text out. Full stop.
- **Some are vision + text:** They can understand images but can't generate them
- **Some access separate image generation models:** When you ask for an image, they call a different model (like DALL-E or Stable Diffusion) behind the scenes — it's not the LLM itself drawing

When a chat interface generates an image for you, it's almost always handing off to a specialized image model. The LLM is the orchestrator, not the artist.

<div class="not-prose callout callout-error">

"The AI drew this for me" is a common misconception. Most language models cannot natively generate images — they send a request to a separate image generation model. Understanding this distinction matters when you're evaluating AI tools for a business use case.

</div>

## The Middleman Problem

You upload a PDF to your favorite LLM. It answers your questions about it. But what actually happened behind the scenes?

In many cases, the LLM didn't "read" your PDF directly. The platform ran an **intermediate tool** first — something that extracts text from the PDF, transcribes the audio, or pulls the transcript from a video. The LLM then works with whatever that tool produced.

This matters because **the intermediate step can lose or distort information:**

- **PDFs:** Tables lose their formatting, charts get converted to garbled text or skipped entirely, multi-column layouts get scrambled, images embedded in the document may be stripped out
- **YouTube / video links:** The LLM may only see the title, description, and auto-generated transcript — not the actual video frames. You might expect it to comment on what's *shown* on screen, but it only "knows" what was *said*
- **Audio files:** Transcription errors, missed words, speaker confusion — whatever the transcription tool gets wrong becomes the LLM's blind spot
- **Images inside documents:** Diagrams, flowcharts, and graphs may be poorly described or completely ignored during the extraction step

<div class="not-prose callout callout-tldr">

**What did the platform actually *see*?** Before you trust an LLM's response about an uploaded file, ask yourself: did the platform understand my file natively, or did it run a tool first? If there was an intermediate step, what might have been lost or distorted?

</div>

We'll dig deeper into OCR and document processing later.

## When the Middleman Gets It Very Wrong

Here's a striking real-world example of how badly this can go.

**"Vegetative electron microscopy"** is a nonsensical, non-existent scientific term — yet it appeared in dozens of published academic papers. How? It was born from a digitization error during training data processing.

Many academic papers use a two-column layout. Normally, you read down the left column first, then the right. But some text extraction tools read **horizontally, line by line across both columns** — mashing the last word of the left column together with the first words of the right column.

On one particular line, the left column ended with "...vegetative" and the right column started with "Electron microscopy..." — and just like that, a new fake term was born. It became a known "fingerprint" of AI-generated and paper-mill content, spreading through the scientific literature.

The lesson: even engineers at top AI companies can introduce basic layout-reading errors. If the intermediate step misreads your document, the LLM receives garbled input — and confidently works with it.


<div class="not-prose">
<!-- Visual: Two-column paper reading error — vegetative electron microscopy -->
<style>
.vcre-paper {
font-family: 'Georgia', 'Times New Roman', serif;
font-size: 0.7rem;
line-height: 1.8;
color: #3a3a3a;
}
.vcre-blur {
filter: blur(3px);
-webkit-filter: blur(3px);
user-select: none;
-webkit-user-select: none;
opacity: 0.5;
}
.vcre-keyword {
font-weight: 700;
color: var(--on-surface);
}
.vcre-bad-keyword {
font-weight: 700;
color: var(--error);
text-decoration: underline wavy var(--error);
text-underline-offset: 3px;
}
.vcre-result-box {
font-family: 'Georgia', 'Times New Roman', serif;
transition: all 0.3s ease;
}
.vcre-order-badge {
display: inline-flex;
align-items: center;
justify-content: center;
width: 20px;
height: 20px;
border-radius: 50%;
font-size: 0.6rem;
font-weight: 700;
font-family: 'Plus Jakarta Sans', sans-serif;
color: white;
background: var(--accent);
transition: opacity 0.3s ease;
}
.vcre-col-border-left {
border-left: 1.5px solid rgba(204,120,92,0.25);
border-radius: 4px 0 0 4px;
transition: background 0.3s ease;
}
.vcre-col-border-right {
border-right: 1.5px solid rgba(204,120,92,0.25);
border-radius: 0 4px 4px 0;
transition: background 0.3s ease;
}
.vcre-col-active {
background: rgba(204,120,92,0.06);
}
.vcre-row-critical {
position: relative;
}
.vcre-row-critical .vcre-bad-stripe {
display: none;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background: rgba(214,92,92,0.06);
border-top: 1px dashed rgba(214,92,92,0.3);
border-bottom: 1px dashed rgba(214,92,92,0.3);
pointer-events: none;
}
.vcre-row-critical.vcre-bad-mode .vcre-bad-stripe {
display: block;
}
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">How a Two-Column Paper Gets Misread</h3>
<p class="text-sm text-on-surface-variant">Toggle between correct and horizontal reading to see how "vegetative electron microscopy" was born.</p>
</div>
<!-- Toggle buttons -->
<div class="flex justify-center gap-3 mb-6">
<button id="vcre-btn-correct" onclick="vcreSetMode('correct')"
class="px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 bg-primary text-on-primary shadow-lg">
Column-by-column
</button>
<button id="vcre-btn-wrong" onclick="vcreSetMode('wrong')"
class="px-5 py-2 rounded-full font-bold text-sm transition-all hover:scale-105 active:scale-95 bg-surface-container-highest text-on-surface">
Line-by-line
</button>
</div>
<!-- The mock paper -->
<div class="relative bg-white border border-gray-200 rounded-lg p-5 shadow-sm overflow-hidden" id="vcre-paper-container">
<!-- Paper header (blurred) -->
<div class="vcre-blur text-center mb-3" style="font-size: 0.65rem;">
<div class="font-bold">Morphological Analysis of Plant Cell Structures</div>
<div class="text-gray-400 mt-1">J. Robertson, K. Tanaka — Dept. of Botany, Vol. 42, pp. 112-118</div>
</div>
<div class="border-t border-gray-200 mb-3"></div>
<!-- Reading order badges -->
<div class="flex justify-between mb-1 px-0" id="vcre-badges">
<span id="vcre-badge-1" class="vcre-order-badge" style="opacity:1;">1</span>
<span id="vcre-badge-2" class="vcre-order-badge" style="opacity:1;">2</span>
</div>
<!-- Two-column paper: row-based grid so lines align horizontally -->
<div class="vcre-paper" id="vcre-columns">
<!-- Row 1 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left" id="vcre-left-1">The structural characteristics of</div>
<div class="vcre-blur vcre-col-border-right">Studies of cell wall composition</div>
</div>
<!-- Row 2 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">plant tissues have been widely</div>
<div class="vcre-blur vcre-col-border-right">have previously relied on</div>
</div>
<!-- Row 3 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">studied using various microscopic</div>
<div class="vcre-blur vcre-col-border-right">conventional light microscopy and</div>
</div>
<!-- Row 4 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">techniques. In previous work on</div>
<div class="vcre-blur vcre-col-border-right">histological staining methods.</div>
</div>
<!-- Row 5 — THE CRITICAL LINE -->
<div class="grid grid-cols-2 gap-x-6 vcre-row-critical" id="vcre-critical-row">
<div class="vcre-col-border-left">the reproductive and <span class="vcre-keyword">vegetative</span></div>
<div class="vcre-col-border-right"><span class="vcre-keyword">Electron microscopy</span> was used to</div>
<div class="vcre-bad-stripe"></div>
</div>
<!-- Row 6 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">organs of flowering plants, we</div>
<div class="vcre-blur vcre-col-border-right">examine the ultrastructure of</div>
</div>
<!-- Row 7 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">observed distinct patterns of</div>
<div class="vcre-blur vcre-col-border-right">the cell wall matrix. Samples</div>
</div>
<!-- Row 8 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">cell differentiation during the</div>
<div class="vcre-blur vcre-col-border-right">were prepared using standard</div>
</div>
<!-- Row 9 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">early developmental stages. The</div>
<div class="vcre-blur vcre-col-border-right">fixation protocols and embedded</div>
</div>
<!-- Row 10 -->
<div class="grid grid-cols-2 gap-x-6">
<div class="vcre-blur vcre-col-border-left">results indicate significant</div>
<div class="vcre-blur vcre-col-border-right">in epoxy resin. Thin sections</div>
</div>
</div>
</div>
<!-- Result box -->
<div class="mt-4 rounded-xl overflow-hidden">
<div class="text-xs font-bold uppercase tracking-widest px-4 pt-3 pb-1 text-on-surface/50">What the LLM received on that line:</div>
<div id="vcre-result" class="vcre-result-box bg-surface-container-lowest border-2 border-outline-variant rounded-b-xl p-4 text-sm text-on-surface">
<span class="text-on-surface/30 italic">Select a reading mode above</span>
</div>
</div>
</div>
<script>
(function() {
var currentMode = null;
window.vcreSetMode = function(mode) {
if (currentMode === mode) return;
currentMode = mode;
var btnCorrect = document.getElementById('vcre-btn-correct');
var btnWrong = document.getElementById('vcre-btn-wrong');
var criticalRow = document.getElementById('vcre-critical-row');
var result = document.getElementById('vcre-result');
var badge1 = document.getElementById('vcre-badge-1');
var badge2 = document.getElementById('vcre-badge-2');
// All left/right column cells
var leftCells = document.querySelectorAll('.vcre-col-border-left');
var rightCells = document.querySelectorAll('.vcre-col-border-right');
if (mode === 'correct') {
btnCorrect.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
btnCorrect.classList.remove('bg-surface-container-highest', 'text-on-surface');
btnWrong.classList.add('bg-surface-container-highest', 'text-on-surface');
btnWrong.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
criticalRow.classList.remove('vcre-bad-mode');
// Show reading order badges
badge1.style.opacity = '1';
badge2.style.opacity = '1';
// Highlight left column first, right column second
leftCells.forEach(function(el) { el.classList.add('vcre-col-active'); });
rightCells.forEach(function(el) { el.classList.remove('vcre-col-active'); });
result.innerHTML =
'<div class="space-y-1">' +
'<div class="text-on-surface/60">...the reproductive and <span class="vcre-keyword">vegetative</span></div>' +
'<div class="text-on-surface/40 text-xs">↓ end of left column — now right column ↓</div>' +
'<div class="text-on-surface/60"><span class="vcre-keyword">Electron microscopy</span> was used to...</div>' +
'<div class="mt-3 text-xs text-on-surface/50 border-t border-outline-variant pt-2">Two separate, sensible terms — each in its proper context.</div>' +
'</div>';
result.style.borderColor = 'var(--outline-variant)';
} else {
btnWrong.classList.add('bg-primary', 'text-on-primary', 'shadow-lg');
btnWrong.classList.remove('bg-surface-container-highest', 'text-on-surface');
btnCorrect.classList.add('bg-surface-container-highest', 'text-on-surface');
btnCorrect.classList.remove('bg-primary', 'text-on-primary', 'shadow-lg');
criticalRow.classList.add('vcre-bad-mode');
// Hide reading order badges
badge1.style.opacity = '0';
badge2.style.opacity = '0';
// No column highlights in wrong mode
leftCells.forEach(function(el) { el.classList.remove('vcre-col-active'); });
rightCells.forEach(function(el) { el.classList.remove('vcre-col-active'); });
result.innerHTML =
'<div class="space-y-1">' +
'<div class="text-on-surface/60">...the reproductive and <span class="vcre-bad-keyword">vegetative electron microscopy</span> was used to...</div>' +
'<div class="mt-3 text-xs text-on-surface/50 border-t border-outline-variant pt-2">' +
'<span class="text-red-500 font-bold">Nonsense!</span> The last word of the left column and the first words of the right column got mashed together — creating a term that doesn\'t exist in science.' +
'</div>' +
'</div>';
result.style.borderColor = 'var(--error)';
}
};
// Auto-select correct mode on load
window.vcreSetMode('correct');
})();
</script>

</div>


## 📝 Key Concepts

- **Multimodal:** Works with multiple media types — text, images, audio, video
- **Understanding vs. generating:** Very different capabilities, often in different models
- **Not universal:** Not every LLM handles every modality — verify before assuming
- **Image generation is usually separate:** A different specialized model does the drawing
- **Intermediate processing:** Many platforms run tools (transcription, OCR, format conversion) before the LLM sees your content — errors in this step become the LLM's blind spots
- **Format loss:** PDFs can lose table formatting, charts can be stripped, video may only contribute a transcript — check what actually reaches the LLM
- **The middleman can garble:** Digitization errors (like reading two-column layouts wrong) can create entirely new, nonsensical terms — and the LLM will confidently use them

<div id="quiz-09-01" class="not-prose quiz-container my-12" data-quiz="09-01"></div>
