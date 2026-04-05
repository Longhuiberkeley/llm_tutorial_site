---
title: "9.1 多模態 (Multimodal) AI —— 不僅僅是文字"
description: "LLM 不再局限於文本。帶你了解當今 AI 如何看圖、聽聲，以及處理圖像、音頻和視頻。"
chapter: "第 9 章"
pageId: "09-01"
---

## 🎯 核心目標
- 介紹多模態 (Multimodal) AI 的能力及其當前的局限性。
- 澄清理解媒介與生成媒介是截然不同的技能 —— 並非所有模型都能兼顧兩者。

<div class="not-prose callout callout-tldr">

現代 AI 可以處理圖像、音頻和視頻，而不僅僅是文本。但「理解」圖像與「創建」圖像是完全不同的系統。不要假設每個 LLM 都能無所不能。

</div>

## 超越文本框

在 AI 的大部分歷史中，對話確實是「一維」的：你打字，它回覆文字。如今，情況發生了翻天覆地的變化。

現代 AI 系統可以：

- **看懂圖像：** 上傳照片並詢問「這張照片裡有什麼？」或「這個圖表有什麼問題嗎？」
- **閱讀文檔：** 上傳 PDF 或電子表格並針對其內容提問
- **聆聽音頻：** 轉錄語音、翻譯口語、回答語音問題
- **觀看視頻：** 描述發生的事情、識別物體、總結內容
- **生成圖像：** 根據文字描述創建插圖（儘管這通常由另一個獨立模型完成）

這被稱為**多模態 (Multimodal)** —— 即能處理多種類型的媒介。


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


## 並非所有模型都一視同仁

這正是許多人感到困惑的地方：僅僅因為產品界面可以處理圖像，並不意味著底層的 LLM 具備此能力。

- **有些 LLM 是純文本的：** 它們僅處理文本輸入和輸出。僅此而已。
- **有些具備視覺 + 文本能力：** 它們可以理解圖像，但無法生成圖像
- **有些則調用獨立的圖像生成模型：** 當你要求生成圖像時，它們會在幕後調用另一個模型（如 DALL-E 或 Stable Diffusion）—— 而不是 LLM 本身在作畫

當聊天界面為你生成圖像時，幾乎總是移交給專業的圖像模型。LLM 是協調者，而不是藝術家。

<div class="not-prose callout callout-error">

「AI 幫我畫了這幅畫」是一個常見的誤區。大多數語言模型無法原生生成圖像 —— 它們是將請求發送給獨立的圖像生成模型。在評估商業用途的 AI 工具時，理解這一區別至關重要。

</div>

## 中間人問題

你向心儀的 LLM 上傳了一個 PDF。它回答了你的相關問題。但幕後究竟發生了什麼？

在許多情況下，LLM 並沒有直接「閱讀」你的 PDF。平台先運行了一個中間工具 —— 負責從 PDF 中提取文本、轉錄音頻或從視頻中獲取字幕。然後，LLM 再處理該工具產生的內容。

這一點很重要，因為**中間步驟可能會丟失或扭曲信息：**

- **PDF：** 表格丟失格式、圖表變成亂碼或被完全跳過、多欄佈局被打亂、文檔中嵌入的圖像可能被移除
- **YouTube / 視頻鏈接：** LLM 可能只能看到標題、描述和自動生成的字幕 —— 而不是實際的視頻畫面。你可能期望它評論屏幕上顯示的內容，但它只「知道」說了什麼
- **音頻文件：** 轉錄錯誤、遺漏詞彙、說話者混淆 —— 轉錄工具出錯的地方都會成為 LLM 的盲點
- **文檔中的圖像：** 圖表、流程圖和圖形在提取過程中可能描述欠佳或被完全忽略

<div class="not-prose callout callout-tldr">

**平台實際上「看到」了什麼？** 在你相信 LLM 對上傳文件的回應之前，請捫心自問：平台是原生理解了我的文件，還是先運行了一個工具？如果存在中間步驟，哪些信息可能丟失或被扭曲了？

</div>

我們稍後將深入探討 OCR（光學字符識別）和文檔處理。

## 當中間人大錯特錯時

這裡有一個真實的例子，展示了情況會變得多麼糟糕。

**「植被電子顯微鏡 (Vegetative electron microscopy)」** 是一個荒謬且不存在的科學術語 —— 然而它卻出現在數十篇已發表的學術論文中。為什麼？這源於訓練數據處理過程中的一個數字化錯誤。

許多學術論文採用雙欄佈局。通常情況下，你先讀左欄，再讀右欄。但一些文本提取工具是**橫向逐行讀取兩欄內容的** —— 將左欄的最後一個詞與右欄的第一個詞混在一起。

在某個特定的行，左欄以「...vegetative」結束，右欄以「Electron microscopy...」開始 —— 就這樣，一個偽造的新術語誕生了。它成了 AI 生成內容和學術工廠論文的已知「指紋」，並在科學文獻中蔓延。

教訓是：即使是頂尖 AI 公司的工程師也可能引入基本的佈局讀取錯誤。如果中間步驟誤讀了你的文檔，LLM 就會收到混亂的輸入 —— 並且會自信地基於此進行工作。


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


## 📝 關鍵概念

- **多模態 (Multimodal)：** 處理多種媒介類型 —— 文本、圖像、音頻、視頻
- **理解與生成：** 截然不同的能力，通常由不同模型完成
- **並非通用：** 並非每個 LLM 都能處理所有模態 —— 假設之前請先核實
- **圖像生成通常是獨立的：** 由另一個專業模型負責繪圖
- **中間處理：** 許多平台在 LLM 看到你的內容之前會先運行工具（轉錄、OCR、格式轉換）—— 這些步驟中的錯誤會成為 LLM 的盲點
- **格式丟失：** PDF 可能丟失表格格式，圖表可能被移除，視頻可能只提供字幕 —— 請檢查實際傳遞給 LLM 的內容
- **中間人可能導致混亂：** 數字化錯誤（如誤讀雙欄佈局）會產生全新的、荒謬的術語 —— 而 LLM 會自信地使用它們

<div id="quiz-09-01" class="not-prose quiz-container my-12" data-quiz="09-01"></div>
:::
