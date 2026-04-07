---
title: "5.2 表達明確 —— 它不會讀心術"
description: "清晰地說明你的需求。"
chapter: "第 5 章"
pageId: "05-02"
---

## 🎯 核心目標
- 了解為什麼在編寫提示詞 (Prompt) 指令時，「越多越好」。
- 看看明確具體的需求如何帶來顯著更好的結果。

<div class="not-prose callout callout-tldr">

如果你不說明清楚，大型語言模型 (LLM) 就會亂猜——它會根據見過的最常見模式來猜，而不是根據*你*真正的需求。你表達得越明確，出錯的空間就越小。

</div>

## 👁️ 視覺效果與互動內容



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">具體化堆棧 (The Specificity Stack)</h3>
<p class="text-sm text-on-surface-variant">點擊各個層級，將模糊的提示詞轉化為優秀的提示詞。</p>
</div>
<div class="grid md:grid-cols-2 gap-8 items-start">
<!-- Controls -->
<div class="space-y-3">
<button onclick="toggleStep(1, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">1</div>
<div>
<div class="font-bold text-sm">基礎目標</div>
<div class="text-xs opacity-60">「寫一封郵件……」</div>
</div>
</button>
<button onclick="toggleStep(2, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4 opacity-50">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">2</div>
<div>
<div class="font-bold text-sm">加入上下文</div>
<div class="text-xs opacity-60">「給我的老闆，關於報告期限……」</div>
</div>
</button>
<button onclick="toggleStep(3, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4 opacity-50">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">3</div>
<div>
<div class="font-bold text-sm">設定限制條件</div>
<div class="text-xs opacity-60">「100 字以內，不要過度道歉……」</div>
</div>
</button>
<button onclick="toggleStep(4, this)" class="step-btn w-full text-left p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all flex items-center gap-4 opacity-50">
<div class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-bold text-sm">4</div>
<div>
<div class="font-bold text-sm">定義格式</div>
<div class="text-xs opacity-60">「3 個標題選項……」</div>
</div>
</button>
</div>
<!-- Output Preview -->
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm min-h-[300px] flex flex-col">
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-40">提示詞預覽</div>
<div id="prompt-preview" class="text-sm font-mono bg-surface-container p-4 rounded-lg mb-6 flex-grow">
「寫一封郵件。」
</div>
<div class="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-40">AI 結果質量</div>
<div class="w-full h-2 bg-surface-container rounded-full overflow-hidden mb-2">
<div id="quality-bar" class="h-full bg-primary transition-all duration-500" style="width: 10%;"></div>
</div>
<div id="quality-label" class="text-[10px] font-bold text-primary uppercase">較差（過於籠統）</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/specificity-stack.js';
init({
  promptSteps: [
    {
      prompt: '「寫一封郵件。」',
      quality: 10,
      label: "較差（過於籠統）"
    },
    {
      prompt: '「寫一封郵件給我的老闆，申請延長第三季度報告的截止日期。」',
      quality: 40,
      label: "較好（重點明確）"
    },
    {
      prompt: '「寫一封郵件給我的老闆，申請延長第三季度報告的截止日期。字數控制在 100 字以內，不要過度道歉。」',
      quality: 75,
      label: "優秀（控制精確）"
    },
    {
      prompt: '「寫一封郵件給我的老闆，申請延長第三季度報告的截止日期。字數控制在 100 字以內，不要過度道歉。以列表形式提供 3 個不同的郵件主題選項。」',
      quality: 100,
      label: "卓越（精準到位）"
    }
  ]
});
</script>
</div>



## 📝 核心概念

- 你能具體說明你想要什麼嗎？
- 你能詳細描述你的職業是什麼嗎？
- 你對大型語言模型 (LLM) 的期望回答是否有明確的正誤之分？
- 你能改進上面的提示詞嗎？


<div class="not-prose callout callout-dyk">

**用於優化提示詞的 6W 框架 (6W Framework)：** 當你苦惱於結果不理想時，問問自己是否涵蓋了以下內容：**誰 (Who)** 是受眾？你具體想要**什麼 (What)**？上下文的**時間/地點 (When/Where)** 是什麼？**為什麼 (Why)** 這很重要？應該**如何 (How)** 格式化？回答的 W 越多，輸出效果就越好。

對於 LLM 輔助編程或項目管理，擁有清晰定義的規範非常重要。我們將在涵蓋項目管理時探討這一點。

</div>

<div class="not-prose callout callout-dyk">

**如何改進糟糕的提示詞？** 加入更多上下文。LLM 給出通用的或偏離目標的回答，最常見的原因是提示詞太過模糊。試著站在一個對該任務一無所知的陌生人的角度來閱讀你自己的提示詞——指令是否足夠清晰？如果不是，請添加更多細節。

</div>

<div id="quiz-05-02" class="not-prose quiz-container my-12" data-quiz="05-02"></div>
