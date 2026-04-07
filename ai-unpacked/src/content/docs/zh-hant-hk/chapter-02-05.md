---
title: "2.5 神經網絡 (Neural Networks) 是如何學習的"
description: "親自動手調整權重 (Weights)：看看調整神經網絡內部的數字如何改變其預測結果。"
chapter: "第 2 章"
pageId: "02-05"
---

## 🎯 核心目標
- 理解「訓練」意味著調整網絡內部的數字（權重 (Weights)）。
- 透過親手調整權重並觀察預測變化，獲得直觀的感受。
- 學習關鍵詞彙：權重 (Weights)、損失 (Loss)、反向傳播 (Backpropagation)、梯度下降 (Gradient Descent)、訓練輪次 (Epochs)。
- 釐清「混合專家模型」(Mixture of Experts) 的真正含義。

<div class="not-prose callout callout-tldr">

訓練神經網絡 (Neural Network) 就像在調整成千上萬個小旋鈕。每個旋鈕（稱為「權重」(Weight)）控制著一項資訊對另一項資訊的影響程度。在訓練過程中，網絡會不斷調整這些旋鈕，直到其預測結果與正確答案相符。找出每個旋鈕應該往「哪個方向」旋轉的過程稱為**反向傳播 (Backpropagation)**。

</div>

## 👁️ 視覺化與互動組件



<div class="not-prose">
<style>
.nn-token-chip {
display:inline-flex; align-items:center; padding:4px 12px; border-radius:8px;
font-size:13px; font-weight:700; opacity:0; transform:scale(0.8);
animation:nn-chip-in 0.3s ease forwards;
}
@keyframes nn-chip-in { to { opacity:1; transform:scale(1); } }
.nn-diagram-wrap {
background:linear-gradient(135deg,#faf8f5 0%,#f5f3f0 100%);
border:1px solid var(--outline-variant,#c8c2bc);
border-radius:1rem; padding:0.75rem;
}
.nn-slider {
-webkit-appearance:none; appearance:none; width:100%; height:6px;
border-radius:3px; background:#e8e5e1; outline:none;
}
.nn-slider::-webkit-slider-thumb {
-webkit-appearance:none; appearance:none; width:22px; height:22px;
border-radius:50%; background:var(--primary,#8f482f); cursor:pointer;
box-shadow:0 2px 6px rgba(0,0,0,.15);
}
.nn-slider::-webkit-slider-thumb:hover { transform:scale(1.15); }
.nn-slider::-moz-range-thumb {
width:22px; height:22px; border-radius:50%; border:none;
background:var(--primary,#8f482f); cursor:pointer;
box-shadow:0 2px 6px rgba(0,0,0,.15);
}
.nn-arrow-pulse { animation:nn-pulse 1.5s ease-in-out 2; }
@keyframes nn-pulse { 0%,100%{opacity:0.2} 50%{opacity:0.7} }
</style>
<div class="bg-surface-container-low rounded-xl p-6 md:p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<!-- Title -->
<div class="text-center mb-4">
<h3 class="text-xl font-bold font-headline mb-1">神經網絡 (Neural Network) 內部</h3>
<p class="text-sm text-on-surface-variant">調整權重 (Weight) 滑桿，觀察預測結果的變化。這就是訓練運作的方式 —— 調整數字直到答案正確為止。</p>
</div>
<!-- Sentence -->
<div class="text-center mb-4">
<span class="text-base font-bold text-on-surface/80">「貓咪坐在 <span class="text-primary border-b-2 border-primary/40 px-1">___</span> 上」("The cat sat on the <span class="text-primary border-b-2 border-primary/40 px-1">___</span>")</span>
</div>
<!-- Token chips -->
<div class="flex flex-wrap justify-center gap-2 mb-1" id="nn-tokens"></div>
<p class="text-center text-[10px] text-on-surface-variant mb-2 opacity-50">還記得詞元化 (Tokenization) 嗎？LLM 將這些視為詞元 (Tokens)，而非單字。</p>
<!-- Down arrow -->
<div class="text-center mb-2">
<span class="material-symbols-outlined text-on-surface-variant/30 nn-arrow-pulse" style="font-size:18px">south</span>
</div>
<!-- Diagram + Sliders (all inside one visual container) -->
<div class="nn-diagram-wrap mb-5">
<svg id="nn-diagram" viewBox="0 0 660 350" class="w-full" xmlns="http://www.w3.org/2000/svg" style="max-height:400px">
<defs>
<filter id="nn-glow" x="-50%" y="-50%" width="200%" height="200%">
<feGaussianBlur stdDeviation="3" result="b"/>
<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
</filter>
</defs>
</svg>
<!-- Weight sliders (inside the visual) -->
<div class="px-4 pt-4 pb-2">
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant opacity-50 mb-3 text-center">調整權重 (Adjust Weights)</div>
<div class="grid grid-cols-3 gap-4 md:gap-8">
<div class="flex flex-col items-center gap-1">
<input type="range" min="0" max="10" value="2" class="nn-slider" id="nn-slider-1" oninput="nnUpdate()">
<div class="flex items-center gap-1">
<span class="text-[10px] font-bold text-on-surface-variant opacity-60">w&#8321;</span>
<span class="text-xs font-bold text-primary" id="nn-sval-1">2</span>
</div>
</div>
<div class="flex flex-col items-center gap-1">
<input type="range" min="0" max="10" value="8" class="nn-slider" id="nn-slider-2" oninput="nnUpdate()">
<div class="flex items-center gap-1">
<span class="text-[10px] font-bold text-on-surface-variant opacity-60">w&#8322;</span>
<span class="text-xs font-bold text-primary" id="nn-sval-2">8</span>
</div>
</div>
<div class="flex flex-col items-center gap-1">
<input type="range" min="0" max="10" value="2" class="nn-slider" id="nn-slider-3" oninput="nnUpdate()">
<div class="flex items-center gap-1">
<span class="text-[10px] font-bold text-on-surface-variant opacity-60">w&#8323;</span>
<span class="text-xs font-bold text-primary" id="nn-sval-3">2</span>
</div>
</div>
</div>
</div>
</div>
<!-- Prediction cards -->
<div id="nn-cards" class="space-y-2 mb-4"></div>
<!-- Verdict -->
<div class="text-center mb-4">
<span id="nn-verdict" class="inline-block px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"></span>
</div>
<!-- Feedback (post-autotrain) -->
<div id="nn-feedback" class="hidden text-center mb-4 p-3 rounded-xl text-sm text-on-surface" style="background:rgba(95,168,96,0.1)"></div>
<!-- Auto-Train button -->
<div class="text-center">
<button id="nn-autotrain-btn" onclick="nnStartAutoTrain()"
class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all active:scale-95">
<span class="material-symbols-outlined text-lg">auto_fix_high</span>
自動訓練 (Auto-Train)
</button>
<p class="text-[10px] text-on-surface-variant mt-2">觀察網絡如何學習正確答案</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/neural-network.js';
init({
  chipColors: [
    {bg:'#FFE082',text:'#5D4037'},
    {bg:'#A5D6A7',text:'#1B5E20'},
    {bg:'#90CAF9',text:'#0D47A1'},
    {bg:'#F48FB1',text:'#880E4F'},
    {bg:'#CE93D8',text:'#4A148C'}
  ],
  tokenLabels: ['The','cat','sat','on','the'],
  candidates: [
    {word:'mat',  emoji:'🷾B',ideal:[9,1,8]},
    {word:'desk', emoji:'🪑',ideal:[2,9,2]},
    {word:'moon', emoji:'🌕',ideal:[1,3,1]},
    {word:'pizza',emoji:'🍕',ideal:[1,1,1]}
  ],
  verdicts: {
    correct: '🎉 網絡答對了！',
    onTrack: '方向正確 —— 繼續調整！',
    barely: '勉強選對了字 —— 繼續調整！',
    close: '很接近，但還不完全對 —— 嘗試調整看看',
    wayOff: '差太遠了 —— 繼續實驗吧！'
  },
  feedbackText: '<span class="font-bold">權重 (Weights) 收敛了！</span> 在隨機探索並逐步調整後，網絡學會了「地毯」(Mat) 是最佳的預測。這就是<strong>反向傳播 (Backpropagation)</strong> 在數十億個權重中自動完成的工作。',
  autoTrainLabel: '自動訓練 (Auto-Train)',
  trainingLabel: '訓練中…',
  layerLabels: [{x:55,t:'詞元 (TOKENS)'},{x:205,t:'隱藏層 (HIDDEN)'},{x:355,t:'隱藏層 (HIDDEN)'},{x:505,t:'預測 (PREDICTIONS)'}]
});
</script>
</div>
## 📝 關鍵概念
### 權重 (Weights)：網絡內部的旋鈕
- **類比：** 想像錄音室裡的調音台。每個滑桿控制著一種樂器的音量。在神經網絡中，每個「滑桿」（權重 (Weight)）控制著一個輸入項對下一層的影響程度。
- **訓練前：** 所有權重都是隨機開始的 —— 就像上面互動組件中的初始位置。網絡的預測結果是胡言亂語。它可能會把「貓咪坐在 ___ 上」完成為「香蕉」。
- **訓練後：** 旋鈕經過精確調整，使得網絡能夠可靠地預測出「地毯」(Mat)（或其他合理的字詞）。這並不是因為它「知道」什麼是地毯 —— 而是因為數字經過了數十億次的調整，以產生正確的輸出。
<div class="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
<div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
<div class="text-2xl mb-2">⚖️</div>
<div class="text-xs font-bold text-on-surface mb-1">損失 (Loss)</div>
<div class="text-[11px] text-on-surface-variant">預測錯誤的程度。高損失 = 非常錯誤，接近零 = 正確。</div>
</div>
<div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
<div class="text-2xl mb-2">🔙</div>
<div class="text-xs font-bold text-on-surface mb-1">反向傳播 (Backpropagation)</div>
<div class="text-[11px] text-on-surface-variant">從後往前檢查每個旋鈕，找出：「哪些旋鈕導致了錯誤，我應該往哪個方向轉動它們？」</div>
</div>
<div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
<div class="text-2xl mb-2">⛰️</div>
<div class="text-xs font-bold text-on-surface mb-1">梯度下降 (Gradient Descent)</div>
<div class="text-[11px] text-on-surface-variant">就像在濃霧中下山 —— 總是朝著能降低損失 (Loss) 的方向邁進。「學習率」(Learning rate) 則是每一步跨出的距離。</div>
</div>
<div class="rounded-xl p-4 border border-outline-variant bg-surface-container-lowest text-center">
<div class="text-2xl mb-2">🔁</div>
<div class="text-xs font-bold text-on-surface mb-1">訓練輪次 (Epochs)</div>
<div class="text-[11px] text-on-surface-variant">完整遍歷所有訓練範例一次。模型通常會訓練數百個輪次 —— 就像一遍又一遍地排練演講一樣。</div>
</div>
</div>
<div class="p-4 rounded-xl text-sm text-on-surface-variant italic border border-outline-variant text-center my-6" style="background: color-mix(in srgb, var(--accent) 6%, transparent);">
如果這聽起來不太好理解，完全沒關係。你不需要從工程角度理解神經網絡是如何訓練的，也能有效地使用 LLM。關鍵在於：訓練就是調整數字，直到模型變得更擅長預測。
</div>
:::callout-dyk
一個大型 LLM 可能擁有數千億個**權重 (Weights)**。訓練所有權重意味著要在幾乎無法想像的多個維度上進行梯度下降 (Gradient Descent)。這就是為什麼 LLM 訓練需要龐大的 GPU 集群，並且可能耗資數百萬美元。
:::
## 🧠 混合專家模型 (Mixture of Experts, MoE)：並非如你所想
還記得你剛才調整的 3 個權重嗎？現在想像一個擁有 **128 個權重組** 的網絡 —— 但巧妙之處在於：每次只有 1 或 2 個組是活躍的。一個微小的「路由器」(Router) 會決定為每個字詞啟用哪個組。
<div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
<div class="rounded-xl p-5 border-2" style="background: rgba(214, 92, 92, 0.08); border-color: rgba(214, 92, 92, 0.3);">
<div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: var(--error);">常見誤解</div>
<h4 class="font-bold text-on-surface mb-2">「多個 AI 智能體 (Agents) 互相對話」</h4>
<p class="text-sm text-on-surface/70">人們想像有一群微型 AI 圍坐在桌子旁，對答案進行辯論和投票 —— 就像委員會會議一樣。</p>
<div class="mt-3 text-2xl text-center">🤖💬🤖<br>💬🤖💬</div>
</div>
<div class="rounded-xl p-5 border-2" style="background: rgba(95, 168, 96, 0.08); border-color: rgba(95, 168, 96, 0.3);">
<div class="text-[10px] font-bold uppercase tracking-widest mb-3" style="color: #2e7d32;">現實</div>
<h4 class="font-bold text-on-surface mb-2">「路由器 (Router) 將詞元 (Tokens) 分派給專家」</h4>
<p class="text-sm text-on-surface/70">就像接線員一樣 —— 對於每個字詞，它會將其路由到最相關的專家旋鈕。沒有討論，沒有投票。只有高效的路由。</p>
<div class="mt-3 text-2xl text-center">🚦 → 🧠<br>🚦 → 🧮</div>
</div>
</div>


- **路由器 (Router)：** 一個微小的子網絡，它會查看每個輸入的字詞，並挑選由哪個專家處理 —— 就像接線員將電話轉接到正確的部門一樣。
- **專家 (Experts)：** 專業化的旋鈕組，每組擅長處理某些類型的字詞（例如：一組處理程式碼，另一組處理法文，還有一組處理數學）。每個字詞只有 1 或 2 個組是活躍的 —— 其餘的則保持閒置。
- **為什麼這很重要：** 這使得模型可以變得大得多，而計算成本卻不會按比例增加。總旋鈕數更多，但你每次只開啟其中幾個 —— 所以模型更聰明，卻不會顯著變慢。這就是為什麼當今一些最大的模型仍能在幾秒鐘內做出回應：即使擁有數千億個參數 (Parameters)，任何單個字詞也只有一小部分參數在運作。

<div class="not-prose callout callout-error">

「混合專家模型」(Mixture of Experts) 並非指多個 AI 智能體在協作。「專家」並不是擁有各自目標的獨立模型 —— 它們是單個模型中專業化的旋鈕組，由簡單的路由機制逐一選擇。請想像它是**電話接線員**，而非**委員會會議**。

</div>

<div id="quiz-02-05" class="not-prose quiz-container my-12" data-quiz="02-05"></div>
