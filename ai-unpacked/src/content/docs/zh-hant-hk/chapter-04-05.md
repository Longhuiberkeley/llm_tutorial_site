---
title: "4.5 當大腦塞滿時"
description: "AI 如何管理其有限的短期記憶。"
chapter: "第 4 章"
pageId: "04-05"
---

## 🎯 核心目標
- 了解無止境對話與有限上下文窗口 (Context Window) 之間的權衡。
- 學習用於管理爆滿記憶的策略（截斷 Truncation vs. 摘要 Summarization）。
- 這是你的大型語言模型 (LLM) 看起來非常健忘的眾多原因之一。

<div class="not-prose callout callout-tldr">

當 AI 的「收銀條」（上下文窗口 Context Window）空間用盡時，就必須刪除某些內容。你要麼切掉對話的頂部，要麼寫一個簡短的摘要來取代它。

</div>

## 👁️ 視覺效果與互動內容



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<!-- SECTION 1: HUMAN EXERCISE -->
<div id="hf-human" class="mb-12">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-1">1. 你能勝過 LLM 嗎？</h3>
<p class="text-sm text-on-surface-variant">記住這些細節，然後解決謎題。</p>
</div>
<!-- Step 1: Memorize -->
<div id="hf-step-1" class="space-y-4">
<div class="grid grid-cols-2 gap-4">
<div class="p-6 bg-surface-container-lowest rounded-xl border-2 border-primary text-center">
<div class="text-xs font-bold uppercase tracking-widest text-primary mb-2">Peter 的電話</div>
<div class="text-2xl font-bold">555-0142</div>
</div>
<div class="p-6 bg-surface-container-lowest rounded-xl border-2 border-accent text-center">
<div class="text-xs font-bold uppercase tracking-widest text-accent mb-2">Mary 的地址</div>
<div class="text-xl font-bold">47 Oak Street</div>
</div>
</div>
<button onclick="hfNext(2)" class="w-full py-4 rounded-xl bg-primary text-on-primary font-bold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all">
我記住了！ →
</button>
</div>
<!-- Step 2: Math distraction — multiple choice -->
<div id="hf-step-2" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant">
<div class="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">等等！先解決這個問題：</div>
<div class="text-4xl font-bold text-primary mb-6">17 × 23 = ?</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfMath(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">381</button>
<button onclick="hfMath(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">391</button>
<button onclick="hfMath(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">401</button>
<button onclick="hfMath(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">371</button>
</div>
<div id="hf-math-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
</div>
<!-- Step 3: Math distraction 2 -->
<div id="hf-step-3" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant">
<div class="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">再來一個！</div>
<div class="text-4xl font-bold text-primary mb-6">156 ÷ 12 = ?</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfMath2(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">11</button>
<button onclick="hfMath2(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">13</button>
<button onclick="hfMath2(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">15</button>
<button onclick="hfMath2(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">17</button>
</div>
<div id="hf-math2-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
</div>
<!-- Step 4: Math distraction 3 -->
<div id="hf-step-4" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-outline-variant">
<div class="text-xs font-bold uppercase tracking-widest mb-4 opacity-60">最後一個，我保證！</div>
<div class="text-4xl font-bold text-primary mb-6">8 × 17 = ?</div>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfMath3(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">126</button>
<button onclick="hfMath3(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">136</button>
<button onclick="hfMath3(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">146</button>
<button onclick="hfMath3(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold text-lg hover:border-primary transition-all">128</button>
</div>
<div id="hf-math3-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
</div>
<!-- Step 5: Phone recall — multiple choice -->
<div id="hf-step-5" class="hidden text-center space-y-6">
<div class="p-8 bg-surface-container-lowest rounded-xl border-2 border-primary">
<div class="text-lg font-bold mb-2">快答：Peter 的電話號碼是多少？</div>
<p class="text-xs text-on-surface-variant mb-6 italic">選擇你記住的那個……</p>
<div class="grid grid-cols-2 gap-3 max-w-xs mx-auto">
<button onclick="hfPhone(this, true)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-0142</button>
<button onclick="hfPhone(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-0124</button>
<button onclick="hfPhone(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-0412</button>
<button onclick="hfPhone(this, false)" class="quiz-option py-3 rounded-xl border-2 border-outline-variant font-bold hover:border-primary transition-all">555-1042</button>
</div>
<div id="hf-phone-feedback" class="hidden mt-4 text-sm font-bold"></div>
</div>
<p id="hf-human-caption" class="hidden text-sm text-on-surface-variant italic px-4">大多數人都會混淆數字！分心會把較早的記憶擠出去——就像大型語言模型 (LLM) 的上下文窗口 (Context Window) 一樣。</p>
</div>
</div>
<hr class="border-outline-variant/30 mb-12">
<!-- SECTION 2: LLM TAPE -->
<div>
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-1">2. LLM 如何處理「爆腦」</h3>
<p class="text-sm text-on-surface-variant italic">想像一下你過去幾天一直在聊天，而對話內容已經達到了模型的上下文窗口 (Context Window) 限制。接下來會發生什麼事？</p>
</div>
<!-- Strategy Buttons -->
<div class="flex justify-center gap-2 mb-8">
<button onclick="hfSwitch('trunc')" id="hf-btn-trunc" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-primary text-on-primary">✂️ 截斷 Truncation</button>
<button onclick="hfSwitch('sum')" id="hf-btn-sum" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-surface-container-highest text-on-surface">📝 摘要 Summarization</button>
<button onclick="hfSwitch('slide')" id="hf-btn-slide" class="px-4 py-2 rounded-lg text-xs font-bold transition-all bg-surface-container-highest text-on-surface">🪟 滑動窗口 Sliding Window</button>
</div>
<div id="hf-tape-container" class="relative bg-surface-container-lowest border-2 border-outline-variant rounded-xl overflow-hidden max-w-sm mx-auto" style="height: 260px;">
<div id="hf-tape" class="w-full p-3 space-y-1 text-xs font-mono transition-all duration-500">
<!-- Content added by JS -->
</div>
<div class="absolute top-0 left-0 w-full h-8 pointer-events-none" style="background: linear-gradient(to bottom, var(--surface-container-lowest), transparent);"></div>
<div class="absolute bottom-0 left-0 w-full h-8 pointer-events-none" style="background: linear-gradient(to top, var(--surface-container-lowest), transparent);"></div>
</div>
<p id="hf-tape-desc" class="text-center text-xs text-on-surface-variant mt-6 italic px-8">
截斷 (Truncation)：最舊的訊息會直接從頂部掉出並被永久遺忘。
</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/head-full-memory.js';
init({
  math1Correct: '✅ 正確！17 × 23 = 391。',
  math1Wrong: '❌ 不太對——是 391。',
  math2Correct: '✅ 正確！156 ÷ 12 = 13。',
  math2Wrong: '❌ 不太對——是 13。',
  math3Correct: '✅ 正確！8 × 17 = 136。現在……讓我們測試一下記憶力。',
  math3Wrong: '❌ 不太對——是 136。現在……讓我們測試一下記憶力。',
  phoneCorrect: '✅ 記憶力不錯！你記住了 555-0142。',
  phoneWrong: '❌ 是 555-0142。分心後很容易混淆！',
  humanCaption: '大多數人都會混淆數字！分心會把較早的記憶擠出去——就像大型語言模型 (LLM) 的上下文窗口 (Context Window) 一樣。',
  baseConvo: [
    { role: 'user', text: '嗨！我叫 Peter，叫我 Pete 吧。' },
    { role: 'llm',  text: '嗨 Pete！很高興見到你。' },
    { role: 'user', text: '我正在編寫第三季度的營銷簡報。' },
    { role: 'llm',  text: '我很樂意幫忙！目標受眾是誰？' },
    { role: 'user', text: '居住在城市的千禧世代，年齡介於 28-40 歲。' },
    { role: 'llm',  text: '明白。我會記住的。' },
    { role: 'user', text: '此外，我們該季度的預算為 5 萬美元。' },
    { role: 'llm',  text: '明白——5 萬美元，城市千禧世代，第三季度。' },
    { role: 'user', text: '為社交媒體活動起草一個標題。' },
    { role: 'llm',  text: '（目前訊息——正在生成中……）' }
  ],
  truncRows: [
    '👤 嗨！我叫 Peter，叫我 Pete 吧。',
    '🤖 嗨 Pete！很高興見到你。',
    '👤 我正在編寫第三季度的營銷簡報。'
  ],
  sumRow: '📝 摘要 (SUMMARY)：用戶叫 Pete。正在編寫第三季度營銷簡報。受眾：28-40 歲城市千禧世代。預算：5 萬美元。',
  slideRow: '[系統提示詞 (System prompt) 始終固定在頂部]',
  currentGenerating: '🤖 （目前——正在生成……）',
  strategyDescs: {
    trunc: '✂️ 截斷 (Truncation)：最舊的訊息被切掉。「Pete」不見了——LLM 不再知道用戶的名字。',
    sum: '📝 摘要 (Summarization)：舊訊息被壓縮成簡短的筆記。保留了核心上下文，但丟失了確切的措辭。',
    slide: '🪟 滑動窗口 (Sliding Window)：系統提示詞 (System prompt) 保持固定；僅保留最近的訊息。早期的上下文如「Pete 的名字」會掉失。'
  }
});
</script>
</div>



## 📝 核心概念


以下是一些處理這類情況的常見方法：
- **策略 1：截斷 Truncation（切掉）：** 系統會直接刪除你最舊的訊息。如果你在第 1 條訊息中告訴了 AI 你的名字，而你現在已經到了第 50 條訊息，AI 實際上已經不再擁有你說明名字的文本了。它已被永久遺忘。
- **策略 2：摘要 Summarization：** 在頂部訊息被刪除之前，系統會要求 AI 寫一個快速摘要（例如：*「用戶名為 Peter，住在紐約」*）。然後它會刪除舊訊息並將摘要固定在頂部。這樣可以節省空間，但會丟失原始訊息的精確細微差別。
- **滑動窗口 (Sliding Window)：** 大多數系統使用「滑動窗口」，保留最近的訊息，可能還有最開始的「系統提示詞 (System prompt)」指令，而讓中間的所有內容掉失。

<div class="not-prose callout callout-error">

切勿將單個聊天對話視為數個月的永久「工作區」。上下文會變得混亂，頂部會被截斷，AI 會變得反應遲鈍且困惑。對於新任務，請務必開啟新的對話！

</div>

<div id="quiz-04-05" class="not-prose quiz-container my-12" data-quiz="04-05"></div>
