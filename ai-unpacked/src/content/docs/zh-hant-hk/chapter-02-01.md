---
title: "2.1 什麼是詞元化 (Tokenization)？"
description: "了解 LLM 如何將文本視為區塊（詞元 Token），而非單個單詞。"
chapter: "第 2 章"
pageId: "02-01"
---

## 🎯 核心目標
- 展示 LLM 看到的不是單詞 —— 它們看到的是被稱為「詞元 (Tokens)」的區塊。
- 理解為什麼 LLM 有時會拼錯單詞或搞亂單詞邊界。

<div class="not-prose callout callout-tldr">

LLM 閱讀的不是英文單詞。它們閱讀的是「詞元 (Tokens)」—— 字母區塊（在英文中通常為 3-4 個字符長）。對於 LLM 來說，「hamburger」可能會被拆分為「ham」、「burg」和「er」，然後被轉換為數字。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<div class="text-center mb-8">
<span class="text-3xl block mb-2">🧩</span>
<h3 class="text-xl font-bold font-headline mb-1">LLM 如何閱讀文本</h3>
<p class="text-sm text-on-surface-variant italic">不是單詞，也不是字母 —— 而是被稱為<strong>詞元 (Tokens)</strong> 的區塊。點擊句子即可查看它是如何被切割的。</p>
</div>
<!-- Sentence selector -->
<div class="flex flex-wrap justify-center gap-2 mb-8">
<button onclick="tkShow(0)" id="tk-btn-0" class="px-4 py-2 rounded-full text-xs font-bold transition-all bg-primary text-on-primary">句子 1</button>
<button onclick="tkShow(1)" id="tk-btn-1" class="px-4 py-2 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">句子 2</button>
<button onclick="tkShow(2)" id="tk-btn-2" class="px-4 py-2 rounded-full text-xs font-bold transition-all bg-surface-container-highest text-on-surface">句子 3</button>
</div>
<!-- Original text display -->
<div class="mb-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl text-center">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-2 opacity-60">原文</div>
<div id="tk-original" class="text-base font-medium italic text-on-surface"></div>
</div>
<!-- Token chips -->
<div class="p-6 bg-surface-container-lowest border-2 border-outline-variant rounded-xl">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-4 opacity-60">詞元 Tokens（LLM 真正看到的內容）</div>
<div id="tk-chips" class="flex flex-wrap gap-2 min-h-[48px]"></div>
<div id="tk-count" class="mt-4 text-xs text-on-surface-variant opacity-60 text-right"></div>
</div>
<!-- Explanation callout -->
<div id="tk-note" class="mt-4 p-4 rounded-xl border-l-4 text-sm" style="border-color: var(--accent); background-color: color-mix(in srgb, var(--accent) 8%, transparent);"></div>
</div>
<script type="module">
import { init } from '/js/interactives/tokenizer.js';
init({
  palette: [
    { bg: '#FFE082', text: '#5D4037' },
    { bg: '#A5D6A7', text: '#1B5E20' },
    { bg: '#90CAF9', text: '#0D47A1' },
    { bg: '#F48FB1', text: '#880E4F' },
    { bg: '#CE93D8', text: '#4A148C' },
    { bg: '#FFCC80', text: '#E65100' },
    { bg: '#80DEEA', text: '#006064' },
    { bg: '#BCAAA4', text: '#3E2723' }
  ],
  sentences: [
    {
      original: '"wow, i am learning so much in this tutorial!"',
      tokens: ['wow', ',', ' i', ' am', ' learning', ' so', ' much', ' in', ' this', ' tutorial', '!', '"'],
      note: '\u9019\u9ebc\u77ed\u7684\u53e5\u5b50\u5c31\u6709 12 \u500b\u8a5e\u5143\uff01\u8acb\u6ce8\u610f\uff0c\u7a7a\u683c\u901a\u5e38\u6703\u9644\u8457\u5728\u4e0b\u4e00\u500b\u55ae\u8a5e\u4e0a\uff0c\u800c\u6a19\u9ede\u7b26\u865f\u672c\u8eab\u5c31\u662f\u7368\u7acb\u7684\u8a5e\u5143\u3002\u9019\u5c31\u662f LLM \u770b\u5f85\u6bcf\u4e00\u53e5\u53e5\u5b50\u7684\u65b9\u5f0f \u2014\u2014 \u4f5c\u70ba\u4e00\u500b\u7de8\u4e86\u865f\u7684\u5340\u584a\u5217\u8868\u3002'
    },
    {
      original: '"strawberry"',
      tokens: ['straw', 'berry'],
      note: '<strong>\u7b49\u7b49 \u2014\u2014 \u53ea\u6709 2 \u500b\u8a5e\u5143\uff1f</strong> \u300cstrawberry\u300d\u88ab\u62c6\u5206\u70ba\u300cstraw\u300d\u548c\u300cberry\u300d\u2014\u2014 \u662f\u5b8c\u6574\u7684\u5340\u584a\uff0c\u800c\u4e0d\u662f\u5b57\u6bcd\u3002LLM \u6c38\u9060\u4e0d\u6703\u55ae\u7368\u770b\u5230 s-t-r-a-w\u3002 \u300cstraw\u300d\u5c31\u50cf\u4e00\u500b\u55ae\u7368\u7684\u6a02\u9ad8\u7a4d\u6728\uff0c\u5b83\u7121\u6cd5\u770b\u5230\u5167\u90e8\u3002\u9019\u6b63\u662f\u5b83\u6578\u932f\u300cr\u300d\u7684\u539f\u56e0 \u2014\u2014 \u5c0d\u5b83\u4f86\u8aaa\uff0c\u55ae\u500b\u5b57\u6bcd\u662f\u4e0d\u53ef\u898b\u7684\uff01'
    },
    {
      original: '"I need help writing an email to my CEO about Q3 revenue."',
      tokens: ['I', ' need', ' help', ' writing', ' an', ' email', ' to', ' my', ' CEO', ' about', ' Q', '3', ' revenue', '.'],
      note: '14 \u500b\u8a5e\u5143\u3002\u8acb\u6ce8\u610f\uff0c\u300cQ3\u300d\u88ab\u62c6\u5206\u70ba\u300cQ\u300d\u548c\u300c3\u300d\u2014\u2014 LLM \u6703\u5206\u958b\u8655\u7406\u6578\u5b57\u3002\u6b64\u5916\uff0c\u50cf\u300cwriting\u300d\u548c\u300crevenue\u300d\u9019\u6a23\u8f03\u9577\u7684\u5e38\u7528\u55ae\u8a5e\u6703\u8b8a\u6210\u55ae\u500b\u8a5e\u5143\uff0c\u56e0\u70ba\u5b83\u5011\u5728\u8a13\u7df4\u6578\u64da\u4e2d\u7d93\u5e38\u51fa\u73fe\u3002'
    }
  ],
  tokenLabel: function(n) { return (n !== 1 ? ' \u500b\u8a5e\u5143 (tokens)' : ' \u500b\u8a5e\u5143 (token)'); }
});
</script>
</div>
以上是一個簡化的入門例子 —— 在現實中，LLM 的詞彙表包含 30,000 到 100,000+ 個詞元。根據 OpenAI 提供的一個實用經驗法則：**一個詞元通常對應約 4 個字符**的常見英文文本，或大約 ¾ 個單詞。這意味著 **100 個詞元 ≈ 75 個單詞**。
常見的英文單詞如 「guitar」、「William」和「amazing」 都可以很好地適配為單個詞元。但那些不常見的詞或複合詞呢？
<div class="callout callout-dyk">
**🔬 玩轉詞元化 (Tokenization)！**
想確切地了解 LLM 是如何切割你的文本嗎？試試 [Xenova 的詞元生成器遊樂場 (Tokenizer Playground)](https://huggingface.co/spaces/Xenova/the-tokenizer-playground)。輸入任何單詞或句子，觀察它是如何被切割成彩色的詞元區塊的 —— 這正是 LLM 的「眼睛」在開始處理之前看到的內容！
這裡有一些有趣的單詞可以嘗試 —— 它們看起來像是單個詞元，但真的是嗎？複製並粘貼到遊樂場中看看吧：
<div class="flex items-center gap-2 mt-3 mb-2">
<code id="tk-try-words" class="block flex-1 bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-sm text-on-surface break-all">tokenization antiestablishment 20250328 Schadenfreude McNugget someRandomFunction() haHahaha</code>
<button id="tk-copy-btn" class="flex-shrink-0 p-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant transition-colors cursor-pointer border border-outline-variant" title="複製到剪貼簿"><span class="material-symbols-outlined text-base">content_copy</span></button>
<span id="tk-copy-msg" class="text-xs font-semibold text-green-700 opacity-0 transition-opacity duration-300">已複製！</span>
</div>
<script>
document.getElementById('tk-copy-btn').addEventListener('click', function() {
var btn = this;
var msg = document.getElementById('tk-copy-msg');
navigator.clipboard.writeText(document.getElementById('tk-try-words').textContent).then(function() {
btn.innerHTML = '<span class="material-symbols-outlined text-base">check</span>';
msg.style.opacity = '1';
setTimeout(function() {
btn.innerHTML = '<span class="material-symbols-outlined text-base">content_copy</span>';
msg.style.opacity = '0';
}, 1500);
});
});
</script>
</div>


## 📝 關鍵概念

- **區塊而非單詞：** 詞元可以是一個完整的單詞（如「apple」），單詞的一部分（如「un」或「believable」），甚至是單個空格或標點符號。
- **幕後的數字：** LLM 詞彙表中的每個區塊都會被分配一個特定的 ID 數字。「Apple」可能是第 4591 號詞元。
- **拼寫問題：** 由於 LLM 看到的是區塊而不是單個字母，它們在處理諸如「數數 strawberry 中有多少個 'r'」之類的任務時表現極差。它們將「straw」和「berry」視為整體的區塊，而不是字母字符串。
- **詞元池：** 在進行預測時，LLM 會從固定的詞元池或集合中進行選擇 —— 就像從預定義的詞彙列表中挑選一樣，而不是完全隨機地猜測文本。
- **為什麼使用詞元而不是字母？** 將文本作為區塊而不是單個字符進行處理效率要高得多。一個典型的英文單詞是 2-3 個詞元，而不是 5-6 個字母 —— 這意味著模型需要預測的東西更少，從而使訓練和生成的速度大大加快。

<div class="not-prose callout callout-dyk">

**「預測 (Predict)」是什麼意思？**
在 AI 的語境中，「預測」並不意味著「預見未來」。它的意思是「根據模式計算下一步最有可能出現的內容」。把它想像成「猜測」更為貼切 —— LLM 根據它學到的一切來猜測下一個詞元。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-02-01" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">為什麼 LLM 在處理「strawberry 中有多少個 r？」這個問題時會感到困難？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它沒有接受過足夠的拼寫數據訓練
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            它將「strawberry」處理為詞元區塊（如「straw」+「berry」），而不是單個字母
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它不知道字母「r」長什麼樣子
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
