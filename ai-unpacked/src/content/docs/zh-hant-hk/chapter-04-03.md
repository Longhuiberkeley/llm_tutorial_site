---
title: "4.3 隨機性 (Randomness) 與溫度 (Temperature)"
description: "「創造力」與「可靠性」之間的滑桿。"
chapter: "第 4 章"
pageId: "04-03"
---

## 🎯 核心目標
- 理解控制大型語言模型 (LLM) 「創造力」程度的設定。
- 了解何時使用高溫與低溫設定。

<div class="not-prose callout callout-tldr">

「溫度」(Temperature) 是你可以在大多數大型語言模型 (LLM) 上調整的設定。低溫使 LLM 的輸出可預測且符合事實；高溫則使其更具創造力，但也容易變得完全失控。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-3xl mx-auto shadow-sm">
<!-- SECTION 1: WARMUP -->
<div class="mb-12">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">1. 猜詞遊戲</h3>
<p class="text-sm text-on-surface-variant">沒有單一的「正確」答案。哪個詞最合適？</p>
</div>
<div class="text-center mb-6">
<div class="text-2xl font-bold p-6 bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm inline-block">
「我最喜歡的科技產品是」 <span id="temp-target" class="animate-pulse text-primary border-b-2 border-primary">___</span>
</div>
</div>
<div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
<button onclick="tempSelect('📱 手機', '35%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">📱</span>
<span class="font-bold text-xs">手機</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[35%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">35%</span>
</button>
<button onclick="tempSelect('💻 電腦', '30%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">💻</span>
<span class="font-bold text-xs">電腦</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[30%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">30%</span>
</button>
<button onclick="tempSelect('📟 平板', '20%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">📟</span>
<span class="font-bold text-xs">平板</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[20%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">20%</span>
</button>
<button onclick="tempSelect('🎮 遊戲機', '15%', this)" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-4 hover:border-primary transition-all active:scale-95 flex flex-col items-center">
<span class="text-3xl mb-1">🎮</span>
<span class="font-bold text-xs">遊戲機</span>
<div class="w-full h-1 bg-surface-container-highest mt-2 rounded-full overflow-hidden">
<div class="h-full bg-primary w-[15%]"></div>
</div>
<span class="text-[10px] text-on-surface-variant mt-1 font-bold">15%</span>
</button>
</div>
<div id="temp-warmup-feedback" class="hidden mt-6 text-center text-sm font-bold text-green-600">
✅ 這些都行得通！沒有單一的「正確」答案。AI 只是從中挑選一個。
</div>
</div>
<hr class="border-outline-variant/30 mb-12">
<!-- SECTION 2: TEMPERATURE SLIDER -->
<div>
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">2. 調整「創造力」滑桿</h3>
<p class="text-sm text-on-surface-variant">提示詞：<em>「寫一個關於貓的短篇故事。」</em></p>
</div>
<div class="mb-8 px-4">
<div class="flex justify-between text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3">
<span>❄️ 可預測 (Predictable)</span>
<span>🔥 混亂 (Chaos)</span>
</div>
<input type="range" id="temp-slider" min="0" max="2" value="0" step="1"
class="w-full h-3 rounded-full appearance-none cursor-pointer accent-primary"
style="background: linear-gradient(to right, #5B8DB8, var(--accent), var(--error));"
oninput="updateTemp(this.value)">
<div class="flex justify-between px-1 mt-2 text-[10px] font-bold text-on-surface-variant opacity-60">
<span>溫度 0.0</span>
<span>溫度 0.7</span>
<span>溫度 1.5</span>
</div>
</div>
<div id="temp-output" class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 min-h-[120px] transition-all duration-300">
<div class="text-xs font-bold uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">AI 輸出：</div>
<div id="temp-text" class="text-sm leading-relaxed italic">
貓坐在地毯上。它是一隻非常乖的貓。每天，貓都在睡覺。
</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/temperature-slider.js';
init({
  tempLevels: [
    "貓坐在地毯上。它是一隻非常乖的貓。每天，貓都在睡覺。貓很開心。",
    "小貓 Whiskers 在天鵝絨沙發上巡視，夢想著傍晚廚房裡打開的金槍魚罐頭。",
    "霓虹鬍鬚在紫色霧氣中閃爍，這隻貓實體計算著前往芝士月球的距離。喵？嗶嗶。"
  ],
  warmupFeedback: "✅ 這些都行得通！沒有單一的「正確」答案。AI 只是從中挑選一個。"
});
</script>
</div>



## 📝 關鍵概念

- **擲骰子：** 當大型語言模型 (LLM) 預測下一個字詞時，它會生成一個可能性列表（例如，「蘋果」有 90% 的機會，「香蕉」有 9% 的機會，「鞋子」有 1% 的機會）。
- **溫度 0.0（可預測 Predictable）：** LLM 總是挑選可能性第 1 名的字詞。它變得高度可預測、重複，非常適合編寫代碼或總結數據。
- **溫度 1.0（創造力 Creative）：** LLM 被允許挑選可能性第 2、3 或 4 名的字詞。這引入了多樣性，使其非常適合腦力激盪、寫詩和講故事！
- **概率性質 (Probabilistic Nature)：** 大型語言模型 (LLM) 從根本上說是基於概率的 — 這是它們無法做到 100% 可靠的另一個原因。完成一個句子幾乎總是有多於一種「正確」的方法。

<div class="not-prose callout callout-error">

如果你將溫度設定得太高（例如 2.0），LLM 將開始從更廣泛、更難預測的字詞中挑選，導致出現真正的胡言亂語 (Gibberish) 和語法錯誤。

</div>

<div class="not-prose callout callout-dyk">

**對於大多數用戶來說：不要動溫度的設定。** 默認的溫度設定是由模型的創建者精心挑選的。在不了解任務的情況下調整它，可能會明顯降低回應質量。

</div>

<div class="not-prose callout callout-dyk">

**你有試過問大型語言模型 (LLM) 它有沒有最喜歡的數字嗎？** 你有沒有注意到它有時會給你相同的答案？這是為甚麼？
調整溫度是在這種情況下引入更多隨機性的好方法。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-04-03" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">將大型語言模型 (LLM) 的溫度設定為 0 會起甚麼作用？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            使 LLM 拒絕回答問題
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            使其總是挑選可能性最高的下一個字詞，產生一致且可預測的輸出
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            使 LLM 產生較短的回應
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
