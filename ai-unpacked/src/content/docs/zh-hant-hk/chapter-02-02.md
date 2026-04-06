---
title: "2.2 ELI5 注意力機制 —— 雞尾酒效應 (Cocktail Party Effect)"
description: "使用雞尾酒效應比喻來解釋注意力機制 (Attention Mechanism)。"
chapter: "第 2 章"
pageId: "02-02"
---

## 🎯 核心目標
- 教授「注意力」意味著每個詞語都會關注其他所有詞語。
- 展示某些連接比其他連接重要得多。

<div class="not-prose callout callout-tldr">

「注意力 (Attention)」是 LLM 用於理解上下文的機制。想像一個嘈雜的雞尾酒會：如果房間對面有人叫你的名字，你會突然集中注意力聽他們的聲音，並過濾掉噪音。LLM 對詞語也會做同樣的事情！

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<div id="attn-wrap-all" class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm" style="position: relative;">
<!-- SVG overlay — arrows drawn here dynamically -->
<svg id="attn-svg-all" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;overflow:visible;z-index:15;">
<defs>
<marker id="attn-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
<path d="M 0 0 L 10 5 L 0 10 z" fill="#CC785C"/>
</marker>
</defs>
</svg>
<div class="text-center mb-8" style="position:relative;z-index:10;">
<span class="text-3xl block mb-2">👀</span>
<h3 class="text-xl font-bold font-headline">點擊任何詞語以顯示其注意力</h3>
<p class="text-sm text-on-surface-variant italic">每個詞語都會關注其他所有詞語 —— 且強度各不相同</p>
</div>
<div class="p-8 bg-surface-container-lowest rounded-xl border border-outline-variant" style="position:relative;z-index:10;">
<div class="flex flex-wrap justify-center gap-4 text-xl sm:text-3xl font-bold mb-6" id="attn-words-row">
<span class="attn-word-all px-3 py-2 rounded-lg cursor-pointer transition-all border-2 border-transparent hover:border-outline-variant" id="w-I" onclick="showAllAttention('I', this)">I</span>
<span class="attn-word-all px-3 py-2 rounded-lg cursor-pointer transition-all border-2 border-transparent hover:border-outline-variant" id="w-am" onclick="showAllAttention('am', this)">am</span>
<span class="attn-word-all px-3 py-2 rounded-lg cursor-pointer transition-all border-2 border-transparent hover:border-outline-variant" id="w-an" onclick="showAllAttention('an', this)">an</span>
<span class="attn-word-all px-3 py-2 rounded-lg cursor-pointer transition-all border-2 border-transparent hover:border-outline-variant" id="w-interesting" onclick="showAllAttention('interesting', this)">interesting</span>
<span class="attn-word-all px-3 py-2 rounded-lg cursor-pointer transition-all border-2 border-transparent hover:border-outline-variant" id="w-person" onclick="showAllAttention('person', this)">person</span>
</div>
<div id="attn-hint-all" class="text-sm font-bold text-center" style="color:var(--accent); min-height: 1.5rem;">
← 點擊任何詞語以查看其連接
</div>
</div>
</div>
<script>
(function() {
var weights = {
'I':           { 'am': 0.6, 'an': 0.1, 'interesting': 0.4, 'person': 0.8 },
'am':          { 'I': 0.7,  'an': 0.2, 'interesting': 0.3, 'person': 0.4 },
'an':          { 'I': 0.1,  'am': 0.2, 'interesting': 0.8, 'person': 0.5 },
'interesting': { 'I': 0.3,  'am': 0.2, 'an': 0.6,          'person': 0.9 },
'person':      { 'I': 0.8,  'am': 0.3, 'an': 0.4,          'interesting': 0.9 }
};
var wordIds = ['I', 'am', 'an', 'interesting', 'person'];
function getCenter(el) {
var container = document.getElementById('attn-wrap-all');
var cr = container.getBoundingClientRect();
var er = el.getBoundingClientRect();
return {
x: er.left + er.width / 2 - cr.left,
y: er.top + er.height / 2 - cr.top
};
}
window.showAllAttention = function(focusWord, focusEl) {
// Reset all word styles
document.querySelectorAll('.attn-word-all').forEach(function(el) {
el.style.backgroundColor = '';
el.style.borderColor = 'transparent';
el.style.color = '';
});
// Highlight clicked word
focusEl.style.backgroundColor = 'color-mix(in srgb, var(--accent) 15%, transparent)';
focusEl.style.borderColor = 'var(--accent)';
var container = document.getElementById('attn-wrap-all');
var svg = document.getElementById('attn-svg-all');
// Remove old paths only (keep <defs>)
Array.from(svg.children).forEach(function(el) { if (el.tagName.toLowerCase() !== 'defs') el.remove(); });
var from = getCenter(focusEl);
var topTarget = '';
var maxWeight = -1;
var targetWeights = weights[focusWord] || {};
wordIds.forEach(function(targetWord) {
if (targetWord === focusWord) return;
var weight = targetWeights[targetWord] || 0;
if (weight > maxWeight) { maxWeight = weight; topTarget = targetWord; }
var targetEl = document.getElementById('w-' + targetWord);
if (!targetEl) return;
var to = getCenter(targetEl);
// Curved arc: lift proportional to weight
var mx = (from.x + to.x) / 2;
var lift = 25 + weight * 50;
var my = Math.min(from.y, to.y) - lift;
var strokeWidth = Math.max(0.8, weight * 8);
var opacity = Math.max(0.08, weight * 0.85);
var color = weight >= 0.6 ? 'var(--accent)' : 'var(--outline-variant)';
var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
path.setAttribute('d', 'M ' + from.x + ' ' + from.y + ' Q ' + mx + ' ' + my + ' ' + to.x + ' ' + to.y);
path.setAttribute('fill', 'none');
path.setAttribute('stroke', color);
path.setAttribute('stroke-width', strokeWidth);
path.setAttribute('stroke-linecap', 'round');
path.setAttribute('opacity', opacity);
if (weight >= 0.4) {
path.setAttribute('marker-end', 'url(#attn-arrow)');
}
svg.appendChild(path);
});
// Sync SVG viewBox to container dimensions
var cr2 = container.getBoundingClientRect();
svg.setAttribute('viewBox', '0 0 ' + cr2.width + ' ' + cr2.height);
var hint = document.getElementById('attn-hint-all');
if (topTarget) {
hint.textContent = '從 「' + focusWord + '」 到 「' + topTarget + '」 的線最粗 —— 表示注意力最強。細線則表示注意力較弱。';
}
};
})();
</script>
</div>



## 📝 關鍵概念

- **無處不在的關注：** 在處理句子時，LLM 會在數學上將第一個詞與第二個詞、第一個詞與第三個詞、第二個詞與第三個詞進行比較，依此類推。每個詞語都與「其他所有」詞語相連。
- **尋找線索：** 當詞語互相提供上下文時，就會形成粗大的連接（高注意力分數）。在一個嘈雜的句子中，「銀行 (bank)」會對「河流 (river)」給予高度關注，以便知道這裡指的是「河岸」。不相關的詞語之間的連接則非常細微。
- **代名詞解析 (Pronoun Resolution)：** 注意力是 LLM 弄清楚「它」、「他」或「她」指代什麼的方式。代名詞將會有一個巨大的注意力分數指向它所代表的名詞。

<div class="not-prose callout callout-dyk">

**改變一切的一篇論文**
Vaswani 等人於 2017 年發表的論文《Attention Is All You Need》引入了變換器 (Transformer) 架構 —— 這是所有現代 LLM 的基礎。在變換器出現之前，AI 一次只能處理一個詞語。變換器則同時處理「所有」詞語，並利用注意力機制來弄清楚哪些詞語對彼此重要。

</div>

<div class="not-prose callout callout-error">

注意力並非人類的理解。它只是一個數學分數，反映了在 LLM 的訓練過程中，詞語在相似上下文中共同出現的頻率。

</div>

<div id="quiz-02-02" class="not-prose quiz-container my-12" data-quiz="02-02"></div>
