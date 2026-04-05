---
title: "12.2 業務邏輯中的對與錯"
description: "有些任務有嚴格的正確答案；有些則沒有。了解你正在自動化哪種類型至關重要。"
chapter: "第 12 章"
pageId: "12-02"
---

## 🎯 核心目標
- 區分沒有錯誤答案的任務（創意型、開放式）與有嚴格正確答案的任務（規則約束型）。
- 強調「隱藏規則」的危險 —— 那些資深員工知道但無法清晰表達的業務邏輯。
- 幫助學習者在開始構建之前識別他們正在自動化的任務類型。

<div class="not-prose callout callout-tldr">

並非所有業務任務都有一個「正確」答案 —— 但許多任務確實有。在自動化任何事情之前，你必須知道你的任務是創意型（靈活的）還是規則約束型（精確的）。最難的部分是找出那些員工在不知不覺中遵循的規則。

</div>

## 🎨 從創意到嚴謹的頻譜

業務任務處於一個頻譜上。你可以將其想像為一個撥盤，一端是「隨意發揮」，另一端是「唯一的精確正確答案」。

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
<div class="bg-green-50 rounded-xl p-5 border border-green-200">
<div class="font-bold text-base mb-3">🎨 沒有錯誤答案 (創意型)</div>
<ul class="text-sm text-on-surface/80 space-y-2">
<li>💡 集思廣益營銷標語想法</li>
<li>📝 用通俗易懂的語言總結會議內容</li>
<li>✉️ 撰寫一封友好的跟進郵件</li>
<li>🏷️ 為產品名稱生成三個選項</li>
</ul>
<p class="text-sm text-on-surface/70 mt-3 italic">每次運行略有變化是可以接受的 —— 甚至是理想的。</p>
</div>
<div class="bg-red-50 rounded-xl p-5 border border-red-200">
<div class="font-bold text-base mb-3">📏 嚴格規則 (精確型)</div>
<ul class="text-sm text-on-surface/80 space-y-2">
<li>🧾 將發票號碼格式化為 <code>INV-2024-XXXX</code></li>
<li>🧮 按照特定的稅率表計算稅費</li>
<li>📄 在特定報告中客戶姓名需全部大寫</li>
<li>🗺️ 根據 Form TX-7 路由德州訂單</li>
</ul>
<p class="text-sm text-on-surface/70 mt-3 italic">95% 的正確率意味著 5% 是錯誤的。這會迅速累積成大問題。</p>
</div>
</div>

<div class="not-prose callout callout-dyk">

大多數自動化失敗發生在這個頻譜的中間：那些「看起來」很靈活，但實際上隱藏了規則的任務。自動化系統在測試（簡單案例）中表現良好，但在實際生產（沒人提及過具有嚴格規則的邊緣案例）中則悄悄出錯。

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Business Logic Spectrum</h3>
<p class="text-sm text-on-surface-variant">Where does your task fall? Click each zone to see the automation guidance.</p>
</div>
<!-- Spectrum Labels -->
<div class="flex justify-between mb-2 px-1">
<span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">🎨 Creative / No Wrong Answer</span>
<span class="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">📐 Strict / One Right Answer</span>
</div>
<!-- Spectrum Bar -->
<div class="relative mb-6">
<div class="h-4 w-full rounded-full overflow-hidden flex">
<div class="h-full flex-1" style="background: #4CAF50;"></div>
<div class="h-full flex-1" style="background: #8BC34A;"></div>
<div class="h-full flex-1" style="background: #FFC107;"></div>
<div class="h-full flex-1" style="background: #FF9800;"></div>
<div class="h-full flex-1" style="background: #F44336;"></div>
</div>
<!-- Zone Buttons -->
<div class="grid grid-cols-5 gap-2 mt-4">
<button onclick="showBLZone(0, this)" id="bl-btn-0" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-primary bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #4CAF50;">1</div>
<span class="text-[10px] font-bold text-center leading-tight">Fully Creative</span>
</button>
<button onclick="showBLZone(1, this)" id="bl-btn-1" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #8BC34A;">2</div>
<span class="text-[10px] font-bold text-center leading-tight">Mostly Creative</span>
</button>
<button onclick="showBLZone(2, this)" id="bl-btn-2" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #FFC107;">3</div>
<span class="text-[10px] font-bold text-center leading-tight">Mixed</span>
</button>
<button onclick="showBLZone(3, this)" id="bl-btn-3" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #FF9800;">4</div>
<span class="text-[10px] font-bold text-center leading-tight">Mostly Strict</span>
</button>
<button onclick="showBLZone(4, this)" id="bl-btn-4" class="bl-zone-btn flex flex-col items-center gap-2 p-3 rounded-xl border-2 border-transparent bg-surface-container-lowest hover:bg-surface-container transition-all">
<div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md" style="background: #F44336;">5</div>
<span class="text-[10px] font-bold text-center leading-tight">Fully Strict</span>
</button>
</div>
</div>
<!-- Detail Card -->
<div id="bl-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 animate-fade-in">
<div class="flex items-center gap-3 mb-3">
<div id="bl-detail-badge" class="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shadow-md" style="background: #4CAF50;">1</div>
<div>
<h4 id="bl-detail-title" class="font-bold text-base">Fully Creative</h4>
<p id="bl-detail-subtitle" class="text-[11px] text-on-surface-variant">Brainstorming, name ideas, creative writing</p>
</div>
</div>
<div id="bl-detail-guidance" class="rounded-lg p-4 mb-4 text-sm leading-relaxed" style="background: #4CAF5015; border-left: 4px solid #4CAF50;">
<span class="font-bold">🤖 Automation Guidance:</span> LLM can run freely. Variation is a feature, not a bug. Every response being different is the whole point.
</div>
<div class="flex flex-wrap gap-2" id="bl-detail-tags">
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Brainstorming sessions</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Product name ideas</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Creative writing</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">Marketing slogans</span>
</div>
</div>
</div>
<script>
(function() {
const blZones = [
{
title: "Fully Creative",
subtitle: "Brainstorming, name ideas, creative writing",
color: "#4CAF50",
guidance: "LLM can run freely. Variation is a feature, not a bug. Every response being different is the whole point.",
tags: ["Brainstorming sessions", "Product name ideas", "Creative writing", "Marketing slogans"]
},
{
title: "Mostly Creative",
subtitle: "Email drafts, meeting summaries, social posts",
color: "#8BC34A",
guidance: "LLM with light guidelines. Review occasionally to keep tone consistent, but give the model room to work. A quick scan is usually enough.",
tags: ["Email drafts", "Meeting summaries", "Blog outlines", "Social media posts"]
},
{
title: "Mixed",
subtitle: "Customer responses, support tickets, reports",
color: "#FFC107",
guidance: "LLM with clear constraints. Set brand guidelines, approved language, and required data points. Review regularly — this is where quality drifts silently.",
tags: ["Customer responses", "Brand-guided content", "Support ticket replies", "Templated reports"]
},
{
title: "Mostly Strict",
subtitle: "Invoice formatting, data entry, standard forms",
color: "#FF9800",
guidance: "Hardcode the rules. Use traditional logic for the structured parts. LLM only for edge cases or interpreting ambiguous inputs — never for the core calculations.",
tags: ["Invoice processing", "Data entry validation", "Standard form filling", "Inventory updates"]
},
{
title: "Fully Strict",
subtitle: "Tax calculations, regulatory filings, compliance",
color: "#F44336",
guidance: "No LLM for the core logic. Use traditional code, validated formulas, and rule engines. A creative answer here means a wrong answer — and possibly a legal problem.",
tags: ["Tax calculations", "Regulatory filings", "Financial reconciliation", "Legal compliance checks"]
}
];
window.showBLZone = function(index, btn) {
const zone = blZones[index];
// Update button states
document.querySelectorAll('.bl-zone-btn').forEach(b => {
b.classList.remove('border-primary');
b.classList.add('border-transparent');
});
btn.classList.remove('border-transparent');
btn.classList.add('border-primary');
// Animate detail card
const detail = document.getElementById('bl-detail');
detail.classList.remove('animate-fade-in');
void detail.offsetWidth;
detail.classList.add('animate-fade-in');
// Update content
document.getElementById('bl-detail-badge').style.background = zone.color;
document.getElementById('bl-detail-badge').textContent = index + 1;
document.getElementById('bl-detail-title').textContent = zone.title;
document.getElementById('bl-detail-subtitle').textContent = zone.subtitle;
const guidance = document.getElementById('bl-detail-guidance');
guidance.style.background = zone.color + '15';
guidance.style.borderLeftColor = zone.color;
guidance.innerHTML = '<span class="font-bold">🤖 Automation Guidance:</span> ' + zone.guidance;
const tagsHtml = zone.tags.map(t => '<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">' + t + '</span>').join('');
document.getElementById('bl-detail-tags').innerHTML = tagsHtml;
};
// Initialize with first zone selected
document.addEventListener('DOMContentLoaded', function() {
showBLZone(0, document.getElementById('bl-btn-0'));
});
})();
</script>

</div>


## 🕵️ 隱藏規則 (Hidden Rules) 問題

這是一個令人不安的事實：許多業務規則僅存在於人們的腦袋裡。資深員工「就是知道」那些從未被記錄下來的事情。

例如：

<div class="space-y-3 my-6">
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">🔢</span>
<div>
<div class="font-bold text-sm mb-1">超過 5,000 的發票號碼轉交 B 部門</div>
<p class="text-sm text-on-surface/80">沒有人記錄過這一點。這始於幾年前 A 部門出現產能問題時，後來就變成了「事情本該如此」。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">🤝</span>
<div>
<div class="font-bold text-sm mb-1">某些客戶總是需要額外審核</div>
<p class="text-sm text-on-surface/80">因為過去的一次糾紛。這不在政策中 —— 只是在人們的腦子裡。LLM 會像對待其他人一樣對待他們。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">🔡</span>
<div>
<div class="font-bold text-sm mb-1">這份報告中的客戶姓名需全部大寫</div>
<p class="text-sm text-on-surface/80">「一直以來都是這樣的。」沒人知道為什麼。但如果你弄錯了，馬上就會有人注意到。</p>
</div>
</div>
</div>
<div class="bg-surface-container-low rounded-xl p-4 border border-outline-variant">
<div class="flex items-start gap-3">
<span class="text-xl">👔</span>
<div>
<div class="font-bold text-sm mb-1">某些請求需要高級經理過目</div>
<p class="text-sm text-on-surface/80">政策不要求，但每個人都知道。跳過這一步，你就會聽到投訴。</p>
</div>
</div>
</div>
</div>

這些無意識的規則是最難自動化的，也是遺漏後最危險的。它們通常因為歷史、關係或從未被正式化的臨時協議而存在。

<div class="not-prose callout callout-error">

一個常見錯誤：因為現有員工讓流程看起來很簡單，就假設流程沒有隱藏規則。他們之所以顯得輕鬆，是因為他們已經將規則內化了。請深度訪談他們。詢問：「邊緣案例 (Edge cases) 怎麼處理？」以及「當 X 出錯時會發生什麼？」持續詢問直到你找到隱藏規則 —— 因為它們總是存在的。清單、流程圖和簡單的速查表是捕捉和分享這些規則的好工具 —— 它們不應該只存在於某人的腦袋裡。

</div>

## 🔍 如何挖掘隱藏規則

在構建任何自動化之前，對目前從事該工作的人進行一次結構化訪談：

1. **請向我展示正常案例的流程** —— 首先獲取理想路徑 (Happy path)。
2. **有哪些例外情況？** —— 總會有例外的。請挖掘具體細節。
3. **跟我說說以前出錯的情況** —— 故事能揭示防止失敗的隱藏規則。
4. **新員工通常會弄錯什麼？** —— 這能直接反映出那些不成文的規定。
5. **有沒有什麼是「不言而喻」的事情？** —— 那些正是你需要記錄下來的規則。

一旦你記錄了隱藏規則，你就可以決定：這些是創意指南（LLM 可以處理細微差別），還是嚴格規則（需要硬編碼或顯式強制執行）？

<div class="not-prose callout callout-dyk">

現代 LLM 已經具備動態創建和使用自身工具的能力 —— 即時編寫代碼、調用 API，並在現實世界中採取行動。這使得預先定義嚴格規則變得更加至關重要。僅能生成文本的 LLM 弄錯規則可能只是產生一份糟糕的文件；但擁有工具訪問權限的 LLM 弄錯規則，可能會發送未經授權的郵件、處理付款或更新數據庫。風險隨著能力的提升而增加。

</div>

<div class="not-prose callout callout-tip">

這是一個暫停並反思你自己工作流程的好時機。在自動化之前，你能自己改進流程嗎？聽聽以不同方式做同樣工作的同事的反饋？或者嘗試向 LLM 描述你的流程，並要求它找出你可能忽略的缺口、邊緣案例或低效之處。有時，最大的收益來自於優化流程，而非自動化流程。

</div>

## 📝 核心概念

- **創意型任務**允許變化，非常適合靈活的 LLM 輸出。
- **規則約束型任務**要求精確的輸出 —— 變化即是錯誤 (Bug)，而非特性。
- **隱藏規則 (Hidden rules)** 是員工知道但無法表達的業務邏輯 —— 它們是自動化的最大風險。
- **深度訪談專家** —— 詢問失敗案例、邊緣案例以及那些「不言而喻」的事。
- **在構建前了解任務類型** —— 針對任務類型採用錯誤的自動化方法，會產生「看起來很有信心」的錯誤答案。

<div id="quiz-12-02" class="not-prose quiz-container my-12" data-quiz="12-02"></div>
