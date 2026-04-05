---
title: "12.6 評估與測試集"
description: "如何證明你的 AI 真正有效 —— 不僅僅是在演示中，而是在現實世界中。"
chapter: "第 12 章"
pageId: "12-06"
---

## 🎯 核心目標
- 解釋什麼是評估測試集，以及為什麼它對 AI 項目至關重要。
- 確立在構建之前而非之後創建測試集的重要性。
- 涵蓋回歸測試 (Regression testing)：捕捉 AI 行為隨時間推移而退化的情況。

<div class="not-prose callout callout-tldr">

「在演示中看起來不錯」並非證明。評估測試集 (Evaluation test set) 是指你已經知道正確答案的輸入集合 —— 它讓你能夠客觀地為 LLM 評分、衡量改進，並在錯誤影響用戶之前捕捉到性能退化 (Regressions)。

</div>

## 🎓 什麼是評估測試集？

想像你要聘請一位新員工來處理客戶支援。在讓他們回覆真實客戶之前，你可能會給他們一組練習郵件並檢查他們如何回覆。你已經知道好的答案是什麼樣的。你是在根據一個標準為他們評分。

這正是評估測試集對 AI 系統的作用。

在發布任何由 LLM 驅動的功能之前，你會創建一組樣本輸入，在這些輸入中你已經知道正確（或可接受）的輸出是什麼。然後你在這些輸入上運行你的 AI 並衡量其表現。

對於一個客戶支援機械人，這可能看起來像：
- 100 封樣本客戶郵件，涵蓋各種主題和語氣
- 對於每一封，都有一個「金標準 (Gold standard)」回覆（或至少是判斷好回覆的標準）
- 一套評分準則 (Rubric)：AI 是否正確引用了政策？語氣是否合適？在需要時是否上報了？

在所有 100 封郵件上運行該機械人。如果有 90 封符合你的標準 = 90% 的準確度。你現在有了一個**基準線 (Baseline)** —— 一個可衡量的起點。

<div class="not-prose callout callout-dyk">

在機器學習研究中，這些測試集合被稱為「評估集 (Evaluation sets)」或「基準 (Benchmarks)」。主要的 LLM 供應商會發布基準測試來比較他們的模型。同樣的原則也適用於應用層：你為「你的」用例定義成功的標準，然後據此進行衡量。

</div>

## 📅 在構建功能之前先建立測試集

這是一個違反直覺的部分：**在編寫功能之前先編寫測試集。**

為什麼？因為編寫測試案例會迫使你定義成功的標準。如果你無法回答「針對這個輸入，正確的輸出是什麼？」，你就還沒準備好開始構建。

「測試先行」的紀律還能防止一個常見的陷阱：先構建功能，然後編寫與該功能產出相匹配的測試案例（無論產出是否真正正確）。那不是測試 —— 那只是「橡皮圖章」式的認可。

好的測試集包括：
- **簡單案例** —— 系統應該始終正確處理的直截了當、預期內的輸入。
- **邊緣案例 (Edge cases)** —— 不尋常、模糊或棘手的輸入，能揭示系統在哪裡表現吃力。
- **對抗性案例 (Adversarial cases)** —— 旨在絆倒系統的輸入（如果用戶嘗試濫用系統會發生什麼？）。
- **真實示例** —— 盡可能從實際使用數據中採樣（這是最有價值的一種）。

<div class="not-prose callout callout-error">

一個常見錯誤：僅在預期系統能處理好的「理想路徑 (Happy path)」示例上進行測試。真實用戶會不斷給你帶來邊緣案例。如果你的測試集不包含它們，直到生產環境出錯前，你都不會知道系統是如何表現的。

</div>

## 🔄 捕捉隨時間推移的性能退化 (Regressions)

這是 AI 系統的一個特性，常讓團隊措手不及：**即使你什麼都沒改，行為也會發生變化。**

LLM 供應商會定期更新他們的模型。十月份的一個模型更新可能會微妙地改變它處理某類輸入的方式。你的功能代碼沒動 —— 但它的行為變了。

這被稱為回歸 (Regression)：在之前能正常運行的案例上性能變差了。

沒有測試集，你永遠不會知道。有了定期運行的測試集，你可以立即發現問題：

> 「自上週二模型更新後，我們在帳單相關郵件上的準確度從 91% 下降到了 78%。我們需要更新 Prompt 來補償。」

這就是為什麼持續評估 (Continuous evaluation) 很重要。在發布前運行一次測試集是不錯的。每月運行一次（或在任何系統更改後）是必須的。將其視為實時監控工具則是最佳實踐。


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">Regression Testing Timeline</h3>
<p class="text-sm text-on-surface-variant">Click a time point to see test results. Watch what happens after a model update.</p>
</div>
<!-- Timeline -->
<div class="relative mb-8">
<div class="absolute top-8 left-[12.5%] right-[12.5%] h-1 bg-outline-variant/40 rounded-full"></div>
<div class="flex justify-around">
<button onclick="selectTimepoint(0, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-3 border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">🚀</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Pre-launch</span>
</button>
<button onclick="selectTimepoint(1, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">📅</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Month 1</span>
</button>
<button onclick="selectTimepoint(2, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">⚠️</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Month 3<br><span class="text-[9px] text-orange-500 font-bold">model update</span></span>
</button>
<button onclick="selectTimepoint(3, this)" class="es-node flex flex-col items-center gap-2 group relative z-10">
<div class="es-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center text-xl transition-all duration-300 shadow-sm group-hover:border-primary">✅</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors text-center">Month 4<br><span class="text-[9px] text-green-600 font-bold">prompts fixed</span></span>
</button>
</div>
</div>
<!-- Detail Panel -->
<div id="es-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[180px] transition-all duration-300">
<p class="text-sm text-on-surface-variant text-center italic">Click a time point above to see results.</p>
</div>
</div>
<script>
(function() {
const timepoints = [
{
label: 'Pre-launch Baseline',
emoji: '🚀',
color: 'border-primary',
bgColor: 'bg-primary/5',
accuracy: 91,
barColor: '#4CAF50',
metrics: [
{ label: 'Easy cases', value: 100, note: '38/38 passing' },
{ label: 'Edge cases', value: 82, note: '28/34 passing' },
{ label: 'Adversarial cases', value: 75, note: '21/28 passing' }
],
status: '🟢 Baseline established',
note: 'Test set created before launch: 100 cases covering routine requests, edge cases, and adversarial inputs. This number is your anchor — everything is measured against it.'
},
{
label: 'Month 1 Check',
emoji: '📅',
color: 'border-primary',
bgColor: 'bg-primary/5',
accuracy: 93,
barColor: '#4CAF50',
metrics: [
{ label: 'Easy cases', value: 100, note: '38/38 passing' },
{ label: 'Edge cases', value: 88, note: '30/34 passing' },
{ label: 'Adversarial cases', value: 82, note: '23/28 passing' }
],
status: '🟢 Performance stable — slight improvement',
note: 'Prompt refinements based on early production patterns improved edge case handling. Running the test set monthly takes 10 minutes and catches drift before users notice.'
},
{
label: 'Month 3 — Model Update',
emoji: '⚠️',
color: 'border-orange-400',
bgColor: 'bg-orange-50',
accuracy: 78,
barColor: '#f59e0b',
metrics: [
{ label: 'Easy cases', value: 97, note: '37/38 passing' },
{ label: 'Edge cases', value: 71, note: '24/34 passing' },
{ label: 'Adversarial cases', value: 57, note: '16/28 passing' }
],
status: '🟡 Regression detected — accuracy dropped from 91% to 78%',
note: 'The LLM provider updated their model. Nothing in your code changed — but behavior shifted. Without a test set, you would only discover this when customers start complaining. With a test set, you catch it immediately and know exactly where to fix.'
},
{
label: 'Month 4 — Prompts Fixed',
emoji: '✅',
color: 'border-green-500',
bgColor: 'bg-green-50',
accuracy: 95,
barColor: '#4CAF50',
metrics: [
{ label: 'Easy cases', value: 100, note: '38/38 passing' },
{ label: 'Edge cases', value: 91, note: '31/34 passing' },
{ label: 'Adversarial cases', value: 89, note: '25/28 passing' }
],
status: '🟢 Fully recovered — better than pre-launch',
note: 'Prompt adjustments compensated for the model update. The test set showed exactly which case categories regressed, making fixes targeted rather than guesswork. This is why continuous evaluation matters.'
}
];
window.selectTimepoint = function(index, btn) {
const tp = timepoints[index];
// Update circle highlights
document.querySelectorAll('.es-node').forEach((node, i) => {
const circle = node.querySelector('.es-circle');
circle.classList.remove('border-primary', 'border-orange-400', 'border-green-500', 'scale-110', 'shadow-md');
circle.classList.add('border-outline-variant');
});
const circle = btn.querySelector('.es-circle');
circle.classList.remove('border-outline-variant');
circle.classList.add(tp.color, 'scale-110', 'shadow-md');
// Build detail panel
const detail = document.getElementById('es-detail');
detail.className = 'border-2 rounded-xl p-6 min-h-[180px] transition-all duration-300 ' + tp.color + ' ' + tp.bgColor;
let html = '<div class="flex flex-col sm:flex-row gap-6">';
// Left: accuracy gauge
html += '<div class="flex flex-col items-center justify-center min-w-[100px]">';
html += '<div class="text-4xl font-black" style="color:' + tp.barColor + '">' + tp.accuracy + '%</div>';
html += '<div class="text-xs font-bold text-on-surface-variant mt-1">accuracy</div>';
html += '<div class="mt-3 w-20 h-3 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant">';
html += '<div class="h-full rounded-full transition-all duration-700" style="width:' + tp.accuracy + '%;background:' + tp.barColor + '"></div>';
html += '</div></div>';
// Right: metrics + note
html += '<div class="flex-1">';
html += '<div class="font-bold text-sm mb-3">' + tp.label + '</div>';
html += '<div class="space-y-2 mb-3">';
tp.metrics.forEach(m => {
html += '<div class="flex items-center gap-2">';
html += '<span class="text-xs text-on-surface-variant w-24 shrink-0">' + m.label + '</span>';
html += '<div class="flex-1 h-2 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant">';
html += '<div class="h-full rounded-full" style="width:' + m.value + '%;background:' + tp.barColor + '"></div>';
html += '</div>';
html += '<span class="text-[10px] text-on-surface-variant w-20 text-right">' + m.note + '</span>';
html += '</div>';
});
html += '</div>';
html += '<div class="text-[11px] font-bold mb-1 text-on-surface">' + tp.status + '</div>';
html += '<p class="text-[11px] text-on-surface-variant leading-relaxed">' + tp.note + '</p>';
html += '</div></div>';
detail.innerHTML = html;
};
})();
</script>

</div>


## 📝 核心概念

- **測試集** = 具有已知正確輸出的精選輸入集合，用於客觀地為 LLM 評分。
- **在構建功能前建立測試集** —— 它們定義了成功的標準。
- **包含邊緣案例和對抗性輸入**，而不僅僅是簡單的理想路徑示例。
- **建立基準線 (Baseline)** —— 在發布前衡量準確度，以便追蹤改進並檢測性能退化 (Regressions)。
- **持續運行測試集** —— 即使你什麼都不改變，LLM 的行為也會隨時間漂移。

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-12-06" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">你應該什麼時候建立你的評估測試集？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            在功能構建完成後，以驗證其工作是否正確
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            僅當生產環境出現問題時
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            在構建功能之前，以定義成功的標準
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
