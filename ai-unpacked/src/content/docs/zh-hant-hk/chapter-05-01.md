---
title: "5.1 了解何時可以信任它"
description: "可靠性光譜 (The Spectrum of Reliability)。"
chapter: "第 5 章"
pageId: "05-01"
---

## 🎯 核心目標
- 了解何時可以信任大型語言模型 (LLM)，以及何時需要對其進行核實。
- 了解只要有適當的工程化 (Engineering)，LLM 確實可以用於生產環境 (Production)。

<div class="not-prose callout callout-tldr">

LLM 並非「非黑即白」。它們的可靠性完全取決於任務性質。在使用 LLM 之前，判斷你的任務處於**信任光譜 (Trust Spectrum)** 的哪個位置，是你最重要的一項判斷。

</div>

## 👁️ 視覺效果與互動內容



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-10">
<h3 class="text-xl font-bold font-headline mb-2">AI 信任光譜 (The AI Trust Spectrum)</h3>
<p class="text-sm text-on-surface-variant">點擊各個區域，查看哪些任務屬於該類別。</p>
</div>
<div class="relative pt-10 pb-16">
<!-- Spectrum Line -->
<div class="h-4 w-full rounded-full bg-gradient-to-right flex justify-between items-center px-1" 
style="background: linear-gradient(to right, #4CAF50, #FFC107, #FF9800, #F44336);">
</div>
<!-- Markers and Cards -->
<div class="grid grid-cols-4 gap-4 mt-8">
<!-- Zone 1: Ready to Use -->
<button onclick="showZone(0, this)" class="zone-btn active group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">check_circle</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">可直接使用</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">高信任度</div>
</div>
</button>
<!-- Zone 2: Review Needed -->
<button onclick="showZone(1, this)" class="zone-btn group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">visibility</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">使用前需審核</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">中信任度</div>
</div>
</button>
<!-- Zone 3: Heavy Verify -->
<button onclick="showZone(2, this)" class="zone-btn group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">rule</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">需要嚴格核實</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">低信任度</div>
</div>
</button>
<!-- Zone 4: Don't Trust -->
<button onclick="showZone(3, this)" class="zone-btn group flex flex-col items-center gap-3 p-4 rounded-xl border-2 border-transparent hover:bg-surface-container transition-all">
<div class="w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform">
<span class="material-symbols-outlined">error</span>
</div>
<div class="text-center">
<div class="font-bold text-sm">暫時避免</div>
<div class="text-[10px] uppercase tracking-tighter opacity-60">零信任度</div>
</div>
</button>
</div>
</div>
<!-- Info Display -->
<div id="zone-display" class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 min-h-[160px] animate-fade-in">
<h4 id="zone-title" class="text-lg font-bold mb-3 flex items-center gap-2">
<span id="zone-icon" class="material-symbols-outlined text-green-500">check_circle</span>
可直接使用
</h4>
<p id="zone-desc" class="text-sm text-on-surface-variant leading-relaxed mb-4">
創意任務，多樣性是其特色而非缺陷。AI 在這方面表現出色。
</p>
<div class="flex flex-wrap gap-2">
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">創意寫作</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">腦力激盪</span>
<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">郵件草稿</span>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/trust-spectrum.js';
init({
  zones: [
    {
      title: "可直接使用",
      icon: "check_circle",
      color: "text-green-500",
      desc: "創意任務，多樣性是其特色而非缺陷。AI 在這方面表現出色，因為沒有唯一的「正確」答案。",
      tags: ["創意寫作", "腦力激盪", "郵件草稿", "內容總結"]
    },
    {
      title: "使用前需審核",
      icon: "visibility",
      color: "text-yellow-500",
      desc: "AI 負責大部分繁重工作，但人類必須檢查其邏輯和語氣。對提升生產力非常有幫助。",
      tags: ["編程", "商業報告", "產品描述", "社交媒體"]
    },
    {
      title: "需要嚴格核實",
      icon: "rule",
      color: "text-orange-500",
      desc: "AI 可以輔助研究，但每一項主張和引用都必須與權威來源進行交叉核對。",
      tags: ["法律研究", "醫療信息", "金融計算", "歷史事實"]
    },
    {
      title: "（暫時）不要信任",
      icon: "error",
      color: "text-red-500",
      desc: "關鍵操作，單次幻覺 (Hallucination) 就可能導致立即的傷害或安全漏洞。",
      tags: ["即時安全系統", "自動化銀行業務", "關鍵數學計算", "法律文件申報"]
    }
  ]
});
</script>
</div>



## 📝 核心概念

- 你能否判斷你的任務屬於**可直接使用**、**使用前需審核**、**需要嚴格核實**，還是**在工程化之前不要信任**？
- 一個更好的問題：你的項目中有哪些部分可以從使用 LLM 中受益？

<div class="not-prose callout callout-error">

**LLM 已經具備生產就緒 (Production-ready) 的能力——但並非適用於所有場景。** 通過適當的工程化（檢索、測試、人工審核），LLM 每天支撐著處理數百萬個真實決策的系統。風險並不在於它們太不可靠而無法在嚴肅場景中使用，而是在*沒有*適當工程化的情況下就在嚴肅場景中使用它們。了解你所處的區域，並進行相應的設計。

</div>

<div class="not-prose callout callout-dyk">

在進行任何 LLM 任務之前，一個非常有用的問題是：*「如果這個回答是錯誤的，最壞的情況會是什麼？」* 如果答案是「沒什麼大不了」或「我能發現錯誤」，那就去做吧。如果答案是「有人會受傷」或「我們會面臨法律責任」，那麼在發布之前請務必加入工程化設計。

</div>

<div id="quiz-05-01" class="not-prose quiz-container my-12" data-quiz="05-01"></div>
