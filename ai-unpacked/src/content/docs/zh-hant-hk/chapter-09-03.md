---
title: "9.3 你能用一疊掃描文檔做什麼？"
description: "從傳統的 OCR 到多模態 LLM —— 處理現實世界商業文檔的實用方案及選擇策略。"
chapter: "第 9 章"
pageId: "09-03"
---

## 🎯 核心目標
- 解釋什麼是 OCR，以及現代 LLM 如何改變現狀。
- 展示 LLM 除了從圖像中讀取文本之外，還能實現哪些功能。
- 為讀者提供一個實用的框架，以根據文檔處理需求選擇正確的方法。

<div class="not-prose callout callout-tldr">

OCR（光學字符識別 (Optical Character Recognition)）將文本圖像轉換為可讀文本 —— 這項技術已存在數十年。現代 LLM 在提取文本後能極大地增強你的處理能力。但正確的方法取決於你的目標、處理量和預算。

</div>

## 什麼是 OCR？

想像一下，你拍了一張手寫便利貼的照片發給同事，他們能看懂上面的字。但電腦在沒有特殊幫助的情況下，只會看到像素 —— 它不知道這些字母代表什麼。

**OCR = 光學字符識別 (Optical Character Recognition)**。它是一種軟件，能分析圖像並識別其中的文本，將像素轉換為電腦可以處理的可讀字符。

**傳統 OCR**（內置於 PDF 閱讀器或文檔掃描儀中的功能）：
- 在整潔、打印或印刷的文本上表現良好
- 難以處理手寫體、非常規字體、低質量掃描件或傾斜頁面
- 僅生成原始文本 —— 無法理解詞語的實際含義

**現代 OCR 引擎**（專門構建的模型，而非完整的 LLM）：
- 對手寫體、低質量掃描和複雜佈局的處理能力強得多
- 能識別表格、表單字段和複選框 —— 而不僅僅是原始文本
- 返回結構化輸出（鍵值對，而不僅僅是一堆文字）
- 許多是開源的，可以在你自己的硬件上運行 —— 無需雲服務或按頁付費
- 仍僅限於提取 —— 它能讀取但無法理解

**基於 LLM 的處理**（現代多模態 LLM）：
- 上傳圖像或 PDF 時自動處理 OCR —— 無需額外步驟
- 一次性讀取文本並理解其含義
- 你可以上傳照片並詢問「總結此處提到的關鍵問題」，直接獲得有用的回答


<div class="not-prose">
<!-- Visual: OCR demo — handwritten paper + scan button + extracted text -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap');
.ocr-paper-text { font-family: 'Caveat', cursive; }
@keyframes ocr-scan {
0%   { top: 0; opacity: 1; }
90%  { top: 100%; opacity: 1; }
100% { top: 100%; opacity: 0; }
}
.ocr-scan-line {
position: absolute;
left: 0; right: 0; height: 3px;
background: linear-gradient(90deg, transparent, #3b82f6 30%, #60a5fa, #3b82f6 70%, transparent);
box-shadow: 0 0 8px 2px rgba(59,130,246,0.5);
animation: ocr-scan 1.4s ease-in-out forwards;
}
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-5">
<h3 class="text-lg font-bold font-headline mb-1">See OCR in Action</h3>
<p class="text-sm text-on-surface-variant">A computer sees pixels. OCR turns those pixels into text.</p>
</div>
<div class="flex flex-col sm:flex-row gap-4 items-stretch">
<!-- Left: The "paper" -->
<div class="flex-1">
<div class="text-xs font-bold text-on-surface/50 uppercase tracking-widest mb-2 text-center">📷 Photo of a handwritten report</div>
<div id="ocr-paper" class="relative bg-amber-50 border-2 border-amber-200 rounded-lg p-4 shadow-sm overflow-hidden"
style="transform: rotate(-1deg); min-height: 200px;">
<!-- Scan line (hidden until triggered) -->
<div id="ocr-scan-line" class="ocr-scan-line hidden"></div>
<!-- Handwritten content -->
<div class="ocr-paper-text text-stone-700 leading-relaxed space-y-1" style="font-size: 1.05rem;">
<div style="font-size: 1.1rem; font-weight: 600;">Site Visit — March 15</div>
<div>Facility: Riverside Plant B</div>
<div>Inspector: J. Chen</div>
<div style="margin-top: 0.5rem;">Boiler #3 showing minor</div>
<div>corrosion near inlet valve.</div>
<div>Recommend service in</div>
<div>next 30 days.</div>
<div>Pressure readings normal.</div>
<div style="margin-top: 0.75rem; font-size: 0.95rem; opacity: 0.7;">— J.C. ✓</div>
</div>
<!-- "Scanned" overlay (visible during scan) -->
<div id="ocr-scanning-overlay" class="hidden absolute inset-0 rounded-lg"
style="background: linear-gradient(180deg, rgba(59,130,246,0.05) 0%, transparent 100%);"></div>
</div>
</div>
<!-- Middle: Arrow / Button -->
<div class="flex flex-col items-center justify-center gap-3 py-2">
<button id="ocr-btn" onclick="runOCR()"
class="font-bold text-sm px-5 py-3 rounded-xl hover:opacity-90 active:scale-95 transition-all shadow-sm whitespace-nowrap"
style="background-color: var(--accent); color: white;">
🔍 Run OCR
</button>
<div id="ocr-arrow" class="text-2xl text-on-surface/20 hidden sm:block">→</div>
</div>
<!-- Right: Extracted text -->
<div class="flex-1">
<div class="text-xs font-bold text-on-surface/50 uppercase tracking-widest mb-2 text-center">💻 Extracted digital text</div>
<div id="ocr-result" class="bg-surface-container-lowest border-2 border-outline-variant rounded-lg p-4 min-h-[200px] flex items-center justify-center transition-all duration-500">
<span class="text-sm text-on-surface/30 italic">Click "Run OCR" to extract text</span>
</div>
</div>
</div>
<!-- Callout below -->
<div id="ocr-note" class="hidden mt-4 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-xs text-on-surface">
<span class="font-bold text-blue-700">What just happened:</span> OCR mapped the pixels of each letter to machine-readable characters. The computer now has text it can search, copy, and process — but it still doesn't <em>understand</em> what the report means. That's where LLMs come in.
</div>
</div>
<script>
(function() {
var ran = false;
window.runOCR = function() {
if (ran) return;
ran = true;
var btn = document.getElementById('ocr-btn');
var paper = document.getElementById('ocr-paper');
var scanLine = document.getElementById('ocr-scan-line');
var overlay = document.getElementById('ocr-scanning-overlay');
var result = document.getElementById('ocr-result');
var note = document.getElementById('ocr-note');
btn.textContent = '⏳ Scanning...';
btn.disabled = true;
btn.style.opacity = '0.6';
// Show scan line animation
scanLine.classList.remove('hidden');
overlay.classList.remove('hidden');
// After scan completes, show result
setTimeout(function() {
scanLine.classList.add('hidden');
overlay.classList.add('hidden');
result.innerHTML = [
'<div class="font-mono text-xs leading-relaxed text-on-surface w-full space-y-1">',
'<div class="text-on-surface/50 text-[10px] mb-2 uppercase tracking-widest">Extracted text:</div>',
'<div><strong>Site Visit — March 15</strong></div>',
'<div>Facility: Riverside Plant B</div>',
'<div>Inspector: J. Chen</div>',
'<div>&nbsp;</div>',
'<div>Boiler #3 showing minor</div>',
'<div>corrosion near inlet valve.</div>',
'<div>Recommend service in</div>',
'<div>next 30 days.</div>',
'<div>Pressure readings normal.</div>',
'<div>&nbsp;</div>',
'<div class="text-on-surface/50">— J.C. ✓</div>',
'</div>'
].join('');
result.style.borderColor = '#86efac';
result.style.backgroundColor = '#f0fdf4';
btn.textContent = '✅ Done';
btn.style.backgroundColor = '#16a34a';
note.classList.remove('hidden');
}, 1600);
};
})();
</script>

</div>


## 超越 OCR —— LLM 真正實現的功能

一旦你公能從文檔中提取文本 —— 或使用多模態 LLM 完全繞過 OCR —— 真正的問題就變成了：你想用它做什麼？

LLM 開啟了一系列以前成本高昂或無法實現的任務：

- **情緒分析 (Sentiment analysis)** —— 「這封客戶投訴信是憤怒、中立還是略感沮喪？」
- **非結構化 → 結構化數據** —— 從凌亂的掃描表單中提取供應商名稱、發票總額和到期日期，並輸出為整潔的電子表格行。這在以前需要為每種文檔類型編寫專門的軟件。
- **摘要生成** —— 將 40 頁的實地報告縮減為 5 個要點。在處理大量文檔時尤為強大。
- **標記與分類** —— 自動為 500 張支持單標記主題、緊急程度和負責部門。
- **跨文檔推理** —— 「這些合同中有沒有付款條款衝突的地方？」 —— 這是單靠關鍵字搜索無法實現的。

<div class="not-prose callout callout-dyk">

嚴格來說，情緒分類、數據提取、標記等許多任務，在十年前就可以透過傳統的機器學習技術實現。LLM 帶來的改變在於其「易用性」和「通用性」：你不需要為每個特定任務訓練自定義模型，只需用通俗的語言描述你的需求，它就能運作。這種權衡值得了解：舊有的專用模型在大規模應用時通常更快、更便宜且更具預測性。對於一次性任務或需要靈活性時，LLM 勝出。對於高處理量、簡單且重複的分類，值得考慮更精簡的方法是否更有意義。

</div>

## 多模態 RAG —— 當一切皆可搜索

對於大型且持續更新的文檔庫，**多模態 RAG (Multimodal RAG)** 超越了文本範疇：它將所有類型的內容 —— 文本、圖像、圖表、錄音、視頻剪輯和完整文檔 —— 嵌入 (Embed) 到同一個共享語義空間中。這意味著一次搜索就能檢索到正確的片段，無論它是段落、圖表、會議記錄還是掃描的手寫筆記。

實際效果是：你可以詢問「去年實地團隊對 Riverside 設施的回報是什麼？」，系統會同時搜索打字報告、錄音、現場照片和圖表。

一個重要的警告：**RAG 捕捉的是含義，而不是精確的措辭**。這使其在提問和探索方面非常強大，但當你需要逐字逐句的文本時 —— 例如法律審核、合規性檢查或特定措辭至關重要的精確數據提取 —— 它並不是合適的工具。

## 哪種方法適合你？

你的公司有 500 份用手機拍攝的手寫季度實地報告。你想要提取見解。你會怎麼做？


<div class="not-prose">
<!-- Visual: Document processing decision — 4 clickable options with trade-off reveal -->
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-2">
<h3 class="text-lg font-bold font-headline mb-1">Your company has 500 handwritten field reports</h3>
<p class="text-sm text-on-surface-variant">Photographed on phones. You want insights. What's your move?</p>
</div>
<p class="text-center text-xs text-on-surface/40 mb-5 italic">Click each option to explore the trade-offs</p>
<div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
<!-- Option A: Traditional OCR -->
<button onclick="docDecide(0, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">🖨️</div>
<div>
<div class="font-bold text-sm mb-1">A — Traditional OCR</div>
<div class="text-xs text-on-surface/60">Run a standard OCR tool. Get text files out.</div>
</div>
</button>
<!-- Option B: Modern OCR Engines -->
<button onclick="docDecide(1, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">📄</div>
<div>
<div class="font-bold text-sm mb-1">B — Modern OCR Engines</div>
<div class="text-xs text-on-surface/60">Purpose-built models, not full LLMs. Can run locally.</div>
</div>
</button>
<!-- Option C: Multimodal LLM -->
<button onclick="docDecide(2, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">🧠</div>
<div>
<div class="font-bold text-sm mb-1">C — Feed images to a multimodal LLM</div>
<div class="text-xs text-on-surface/60">Upload each photo to GPT-4o, Claude, or Gemini and ask directly.</div>
</div>
</button>
<!-- Option D: RAG pipeline -->
<button onclick="docDecide(3, this)" class="doc-opt-btn text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-accent transition-all active:scale-[0.98] flex items-start gap-3">
<div class="text-2xl mt-0.5 flex-shrink-0">🔍</div>
<div>
<div class="font-bold text-sm mb-1">D — Build a multimodal RAG pipeline</div>
<div class="text-xs text-on-surface/60">Index everything so anyone can query across all 500 reports by asking questions.</div>
</div>
</button>
</div>
<!-- Detail panel (hidden until a button is clicked) -->
<div id="doc-detail-panel" class="hidden bg-surface-container-lowest border border-outline-variant rounded-xl p-5">
<div class="flex items-center gap-3 mb-4">
<span id="dd-icon" class="text-3xl flex-shrink-0"></span>
<div>
<div class="font-bold text-base" id="dd-title"></div>
<div class="text-xs text-on-surface/50" id="dd-subtitle"></div>
</div>
</div>
<p class="text-sm text-on-surface-variant leading-relaxed mb-4" id="dd-how"></p>
<div class="grid sm:grid-cols-2 gap-3 mb-4">
<div class="bg-green-50 border border-green-200 rounded-lg p-3">
<div class="text-[10px] font-black text-green-700 uppercase tracking-wide mb-2">✅ Works well when...</div>
<div id="dd-pros" class="text-xs space-y-1.5 text-on-surface"></div>
</div>
<div class="bg-red-50 border border-red-200 rounded-lg p-3">
<div class="text-[10px] font-black text-red-600 uppercase tracking-wide mb-2">⚠️ Watch out for...</div>
<div id="dd-cons" class="text-xs space-y-1.5 text-on-surface"></div>
</div>
</div>
<div class="rounded-lg px-4 py-3 text-xs" style="background-color: color-mix(in srgb, var(--accent) 8%, white); border: 1px solid color-mix(in srgb, var(--accent) 25%, transparent);">
<span class="font-bold" style="color: var(--accent);">Best fit: </span><span id="dd-bestfit" class="text-on-surface"></span>
</div>
</div>
<p class="text-center text-xs text-on-surface/40 mt-4 italic" id="dd-hint">👆 No single right answer — each approach makes sense in a different situation</p>
</div>
<script>
(function() {
var options = [
{
icon: '🖨️',
title: 'Traditional OCR',
subtitle: 'The low-cost, no-frills starting point',
how: 'Standard OCR software converts your images to raw text files by matching pixel patterns to character shapes. Often built into PDF readers and document scanners. No AI involved.',
pros: [
'💰 Very cheap or free',
'⚡ Fast — batch process hundreds at once',
'🔒 Can run locally — no data sent to the cloud',
'📁 Outputs clean text files usable anywhere'
],
cons: [
'✍️ Struggles badly with handwriting',
'📸 Low-quality or tilted photos often fail',
'🧩 No understanding — just raw characters',
'🗑️ Output often needs manual cleanup before use'
],
bestfit: 'A first step to digitize clean, typed documents — or to quickly see what you\'re working with before committing to more investment.'
},
{
icon: '📄',
title: 'Modern OCR Engines',
subtitle: 'Purpose-built models for messy real-world documents',
how: 'Purpose-built OCR models trained specifically for reading text from images. They recognize handwriting, tables, form fields, and checkboxes — returning structured output, not just raw text. Many are open-source and can run on your own hardware — no cloud service needed.',
pros: [
'✍️ Handles handwriting far better than traditional tools',
'📊 Understands tables and form fields',
'🔒 Can run locally — no data leaves your network',
'🏗️ Returns structured data (key-value pairs), not just a wall of text',
'💰 Often free or low-cost — many open-source options available'
],
cons: [
'🧩 Still just extraction — no reasoning, no summarization',
'🔧 Needs some integration code to process at scale',
'⚙️ Quality varies by tool — some handle certain languages or formats better than others'
],
bestfit: 'Digitizing a large batch of handwritten or mixed-format documents where you need clean structured output, want to keep data in-house, and don\'t yet need LLM reasoning on top.'
},
{
icon: '🧠',
title: 'Feed images to a multimodal LLM',
subtitle: 'OCR and understanding in one step',
how: 'Upload each photo to a frontier model (GPT-4o, Claude, Gemini) and ask it to extract, summarize, or analyze the content. The LLM reads the image and reasons about it simultaneously — no separate OCR step needed.',
pros: [
'🎯 Reads handwriting AND understands meaning in one pass',
'💬 Can summarize, flag issues, or extract specific fields on the spot',
'🚀 No setup required — works today in any chat UI',
'🧩 Handles wildly varied formats without extra configuration'
],
cons: [
'💸 Most expensive per document at scale (500 images × API cost adds up fast)',
'🐌 Rate limits slow down large batch processing',
'☁️ All images go to the model provider\'s servers',
'🔁 One-time analysis only — not set up for future querying'
],
bestfit: 'Exploratory analysis, prototyping, or a one-time extraction project. The best place to start before deciding whether to invest in infrastructure.'
},
{
icon: '🔍',
title: 'Build a multimodal RAG pipeline',
subtitle: 'Index everything — make it searchable forever',
how: 'Process all 500 reports, embed both text and visual content into a vector database, and build a query interface. Anyone on your team can ask plain-English questions across all documents and get cited answers.',
pros: [
'📚 Scales to thousands of documents',
'🔎 Anyone can query — no technical expertise required',
'🔄 Keeps working as you add new reports',
'🧠 Retrieves visual context (diagrams, charts) alongside text'
],
cons: [
'🏗️ Significant upfront setup — not a weekend project',
'💸 Ongoing infrastructure costs (vector DB, embeddings, API)',
'🔧 Requires technical expertise or a vendor solution',
'⏳ Serious overkill if you only need this analysis once',
'🔤 Captures meaning, not exact text — not suitable when verbatim accuracy is required'
],
bestfit: 'Large, growing archives where multiple people need to query documents over time. The most powerful option — and the most investment to build and maintain.'
}
];
window.docDecide = function(idx, btn) {
var d = options[idx];
// Reset all buttons
document.querySelectorAll('.doc-opt-btn').forEach(function(b) {
b.style.borderColor = '';
b.style.backgroundColor = '';
});
// Highlight selected
btn.style.borderColor = 'var(--accent)';
btn.style.backgroundColor = 'color-mix(in srgb, var(--accent) 6%, white)';
// Populate panel
document.getElementById('dd-icon').textContent = d.icon;
document.getElementById('dd-title').textContent = d.title;
document.getElementById('dd-subtitle').textContent = d.subtitle;
document.getElementById('dd-how').textContent = d.how;
var prosEl = document.getElementById('dd-pros');
prosEl.innerHTML = '';
d.pros.forEach(function(p) {
var div = document.createElement('div');
div.textContent = p;
prosEl.appendChild(div);
});
var consEl = document.getElementById('dd-cons');
consEl.innerHTML = '';
d.cons.forEach(function(c) {
var div = document.createElement('div');
div.textContent = c;
consEl.appendChild(div);
});
document.getElementById('dd-bestfit').textContent = d.bestfit;
var panel = document.getElementById('doc-detail-panel');
panel.classList.remove('hidden');
// Scroll panel into view on mobile
setTimeout(function() {
panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}, 50);
document.getElementById('dd-hint').textContent = '💡 Try all four — they each shine in a different situation';
};
})();
</script>

</div>


沒有唯一的「正確」答案 —— 這取決於你的需求、頻率以及投入。目標是讓方法與任務相匹配。

<div class="bg-surface-container-low border-l-4 rounded-r-xl p-5 my-6" style="border-color: var(--accent);">
  <div class="text-xs font-black uppercase tracking-widest mb-3" style="color: var(--accent);">💭 思考你自己的工作</div>
  <p class="text-sm text-on-surface leading-relaxed mb-3">你以前用過 OCR 嗎 —— 在掃描應用、PDF 閱讀器或報銷追踪器中？在你的工作流程中，文檔提取在哪裡可以派上用場？</p>
  <p class="text-sm text-on-surface leading-relaxed">舉個具體的例子：想像你在國外旅遊，拍下了一份你不認識的語言的菜單。老式的 OCR 會提取字符 —— 但多模態 LLM 可以拍照、提取文本，並結合語境進行翻譯，解釋每道菜究竟是什麼。這種「讀取像素」與「理解含義」之間的差距，正是這項技術與眾不同之處。</p>
</div>

## 📝 關鍵概念

- **OCR：** 將文本圖像轉換為機器可讀文本 —— 傳統工具適用於整潔的文檔，現代 OCR 引擎可處理凌亂的文檔
- **多模態 LLM：** 可以直接閱讀圖像 —— 通常無需額外的 OCR 步驟
- **超越提取：** LLM 可以對文檔進行分類、總結、標記和推理 —— 而不僅僅是閱讀
- **情緒分析警告：** 對於大量簡單的分類，傳統機器學習 (ML) 可能更快更便宜 —— 在需要細微差別時使用 LLM
- **統一嵌入空間：** 文本、圖像、視頻、音頻和文檔都可以嵌入到同一個語義空間中 —— 實現跨模態搜索和檢索
- **RAG 捕捉含義而非精確文本：** 在探索和提問方面強大；不適用於需要逐字準確性的場合
- **按目標選擇：** 一次性提取、持續查詢和自動化流程各自需要不同的方法

<div id="quiz-09-03" class="not-prose quiz-container my-12" data-quiz="09-03"></div>
:::
