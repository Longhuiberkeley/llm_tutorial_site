---
title: "2.3 注意力權重 (Attention Weights) —— 模型如何集中注意力"
description: "了解注意力權重如何解析代名詞並追蹤跨句子的想法。"
chapter: "第 2 章"
pageId: "02-03"
---

## 🎯 核心目標
- 將數學概念具體化：以視覺化的權重條展示注意力。
- 展示注意力如何解決代名詞解析 (Pronoun Resolution) 問題（例如將 「it」 指向 「cat」）。
- 理解注意力如何跨越多個句子追蹤意思。

<div class="not-prose callout callout-tldr">

注意力不僅僅是連接詞語的線 —— 它是可以衡量的「權重 (Weights)」。通過為重要的連接分配較大的權重，LLM 即使在長篇大論中也能準確判斷 「it」 或 「she」 指的是誰。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<div id="aw-wrap" class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm" style="position: relative;">
<!-- SVG overlay — arrows drawn here dynamically -->
<svg id="aw-svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:15;">
<defs>
<marker id="aw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#8f482f"/>
</marker>
<marker id="aw-arrow-accent" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#CC785C"/>
</marker>
</defs>
</svg>
<div class="text-center mb-8" style="position:relative;z-index:10;">
<span class="text-3xl block mb-2">⚖️</span>
<h3 class="text-xl font-bold font-headline">使用注意力進行代名詞解析</h3>
<p class="text-sm text-on-surface-variant italic">點擊 「it (牠)」 以查看 LLM 正在關注什麼</p>
<p class="text-xs text-on-surface-variant mt-1 opacity-70">💡 在這個例子中，假設每個單詞都是一個詞元 (Token)。</p>
</div>
<div class="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant" style="position:relative;z-index:10;">
<div class="flex flex-wrap justify-center gap-2 text-xl font-bold mb-10">
<span class="px-2 py-1 rounded" id="aw-The">The</span>
<span class="px-2 py-1 rounded" id="aw-cat">cat</span>
<span class="px-2 py-1 rounded" id="aw-sat">sat</span>
<span class="px-2 py-1 rounded" id="aw-on">on</span>
<span class="px-2 py-1 rounded" id="aw-the2">the</span>
<span class="px-2 py-1 rounded" id="aw-warm">warm</span>
<span class="px-2 py-1 rounded" id="aw-mat">mat</span>
<span class="px-2 py-1 rounded" id="aw-because">because</span>
<span class="px-3 py-1 rounded-lg border-2 border-transparent cursor-pointer transition-all hover:border-primary bg-primary/10" onclick="showAw(this)" id="aw-it">it</span>
<span class="px-2 py-1 rounded" id="aw-was">was</span>
<span class="px-2 py-1 rounded" id="aw-tired">tired.</span>
</div>
<div id="aw-bars" style="opacity:0; transition: opacity 0.3s;">
<h4 class="font-bold text-on-surface-variant uppercase tracking-wider text-sm mb-4">針對 「it」 的注意力權重</h4>
<div class="space-y-3">
<!-- cat: 84% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right font-bold text-sm">cat</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-cat" style="width:0; background-color: var(--primary); transition: width 1s ease-out;"></div>
</div>
<div class="w-10 font-bold text-sm" style="color: var(--primary);">84%</div>
</div>
<!-- tired: 10% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right font-bold text-sm">tired</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-tired" style="width:0; background-color: var(--accent); transition: width 1s ease-out 0.15s;"></div>
</div>
<div class="w-10 font-bold text-sm" style="color: var(--accent);">10%</div>
</div>
<!-- mat: 4% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right text-sm text-on-surface-variant">mat</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-mat" style="width:0; background-color: var(--outline); transition: width 1s ease-out 0.3s;"></div>
</div>
<div class="w-10 text-sm text-on-surface-variant">4%</div>
</div>
<!-- was: 1% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right text-sm text-on-surface-variant">was</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-was" style="width:0; background-color: var(--outline-variant); transition: width 1s ease-out 0.4s;"></div>
</div>
<div class="w-10 text-sm text-on-surface-variant">1%</div>
</div>
<!-- warm: 1% -->
<div class="flex items-center gap-3">
<div class="w-16 text-right text-sm text-on-surface-variant">warm</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-warm" style="width:0; background-color: var(--outline-variant); transition: width 1s ease-out 0.5s;"></div>
</div>
<div class="w-10 text-sm text-on-surface-variant">1%</div>
</div>
<!-- others -->
<div class="flex items-center gap-3 opacity-50">
<div class="w-16 text-right text-xs text-on-surface-variant">其他...</div>
<div class="flex-grow rounded-full h-4 overflow-hidden" style="background-color: var(--surface-container-highest);">
<div class="h-full rounded-full" id="aw-bar-others" style="width:0; background-color: var(--outline-variant); transition: width 1s ease-out 0.6s;"></div>
</div>
<div class="w-10 text-xs text-on-surface-variant">~0%</div>
</div>
</div>
<div class="mt-6 p-4 rounded-lg text-center font-medium text-sm" style="background-color: color-mix(in srgb, var(--primary) 10%, transparent); color: var(--primary);">
✅ 「it」 → 「cat」 —— 代名詞解析成功！
</div>
</div>
</div>
</div>
<script>
(function() {
function getCenter(el) {
var container = document.getElementById('aw-wrap');
var cr = container.getBoundingClientRect();
var er = el.getBoundingClientRect();
return {
x: er.left + er.width / 2 - cr.left,
y: er.top + er.height / 2 - cr.top
};
}
window.showAw = function(btn) {
btn.style.borderColor = 'var(--primary)';
// Highlight key words in sentence
document.getElementById('aw-cat').style.color = 'var(--primary)';
document.getElementById('aw-cat').style.fontWeight = '900';
document.getElementById('aw-tired').style.color = 'var(--accent)';
// Show bars
document.getElementById('aw-bars').style.opacity = '1';
// Draw arrows
var svg = document.getElementById('aw-svg');
// Clear old arrows (preserve <defs>)
Array.from(svg.children).forEach(function(el) { if (el.tagName.toLowerCase() !== 'defs') el.remove(); });
var from = getCenter(btn);
var targets = [
{ id: 'aw-cat', weight: 0.84, color: 'var(--primary)' },
{ id: 'aw-tired', weight: 0.10, color: 'var(--accent)' },
{ id: 'aw-mat', weight: 0.04, color: 'var(--outline)' }
];
targets.forEach(function(t) {
var targetEl = document.getElementById(t.id);
if (!targetEl) return;
var to = getCenter(targetEl);
var mx = (from.x + to.x) / 2;
var lift = 20 + t.weight * 40;
var my = Math.min(from.y, to.y) - lift;
var strokeWidth = Math.max(1, t.weight * 10);
var opacity = Math.max(0.1, t.weight * 1.1);
var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'M ' + from.x + ' ' + from.y + ' Q ' + mx + ' ' + my + ' ' + to.x + ' ' + to.y);
path.setAttribute('fill', 'none');
path.setAttribute('stroke', t.color);
path.setAttribute('stroke-width', strokeWidth);
path.setAttribute('stroke-linecap', 'round');
path.setAttribute('opacity', opacity);
if (t.weight >= 0.1) {
var markerId = t.color.includes('accent') ? 'aw-arrow-accent' : 'aw-arrow';
path.setAttribute('marker-end', 'url(#' + markerId + ')');
}
svg.appendChild(path);
});
// Sync SVG viewBox to container dimensions
var containerRect = document.getElementById('aw-wrap').getBoundingClientRect();
svg.setAttribute('viewBox', '0 0 ' + containerRect.width + ' ' + containerRect.height);
// Animate bars — delay lets browser register width:0 before transition fires
setTimeout(function() {
document.getElementById('aw-bar-cat').style.width = '84%';
document.getElementById('aw-bar-tired').style.width = '10%';
document.getElementById('aw-bar-mat').style.width = '4%';
document.getElementById('aw-bar-was').style.width = '1%';
document.getElementById('aw-bar-warm').style.width = '1%';
document.getElementById('aw-bar-others').style.width = '0.5%';
}, 60);
};
})();
</script>
</div>



## 📝 關鍵概念

- **注意力權重 (Attention Weights)：** 這些是介於 0 到 1 之間的數字，顯示一個詞對另一個詞的「關注」程度。如果權重很高，表示模型正大量利用該詞來理解上下文。
- **代名詞解析 (Pronoun Resolution)：** 想想「它」這個詞。它指的是那隻貓、那塊墊子還是天氣？注意力機制解決了這個問題！「它」這個詞會有一個巨大的注意力權重指向它所代表的特定名詞。
- **跨句追蹤：** 注意力不會在句號處停止。隨著文本變長，LLM 會持續建立指向先前句子的注意力箭頭。這就是為什麼 LLM 可以寫出一篇包含 5 個段落的故事而不會忘記主角的名字 —— 第 5 段中的詞語仍然在「關注」第 1 段。
- **多頭注意力 (Multiple Heads)：** LLM 實際上擁有「多個」注意力頭。一個頭可能負責追蹤語法（如動詞關注名詞），另一個負責追蹤代名詞，還有一個負責追蹤整體主題。

<div class="not-prose callout callout-error">

LLM 並不像人類那樣「記住」故事的情節。它只是在文本序列中維持對先前詞元 (Tokens) 的數學注意力權重。

</div>

<div id="quiz-02-03" class="not-prose quiz-container my-12" data-quiz="02-03"></div>
