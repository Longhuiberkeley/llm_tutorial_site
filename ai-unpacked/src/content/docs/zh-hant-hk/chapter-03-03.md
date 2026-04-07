---
title: "3.3 完整的三文治 — 系統提示詞 (System Prompts) 與自訂空間 (Custom Spaces)"
description: "每個數據包都由隱藏層開始 — 有些是你無法看見或控制的。"
chapter: "第 3 章"
pageId: "03-03"
---

## 🎯 核心目標
- 展示與 3.2 相同的雙視圖 (Dual-view)，但現在數據包總是從隱藏層開始。
- 理解三個提示詞分層 (Prompt layers)（提供者 Provider / 應用程式 App / 對話會話 Session）。
- 揭開自訂 GPTs (Custom GPTs)、Claude 專案 (Claude Projects) 和 Gemini Gems 作為預製三文治的神秘面紗。

<div class="not-prose callout callout-tldr">

在你輸入第一條訊息之前，大型語言模型 (LLM) 已經收到了隱藏指令。每個數據包頂部都有不可見的層次 — 其中一些是你無法觸碰的。

</div>

## 👁️ 視覺效果與互動



<div class="not-prose">
<style>
@keyframes fsdvFlash {
0%, 40% { background-color: #FFF9C4; border-color: #FBC02D; }
100% { background-color: var(--surface-container-lowest); border-color: transparent; }
}
.fsdv-flash { animation: fsdvFlash 1.8s ease-out forwards; }
</style>
<div class="bg-surface-container-low rounded-xl p-6 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-1">完整的三文治 — 隱藏層 (Hidden Layers)</h3>
<p class="text-sm italic" style="color: var(--on-surface-variant);">在你輸入任何字之前，數據包頂部已經有了不可見的層次</p>
</div>
<!-- Peek button + Controls -->
<div class="flex flex-wrap justify-center items-center gap-3 mb-6">
<button id="fsdv-peek-btn" onclick="fsdvTogglePeek()" class="px-5 py-2 rounded-full font-bold text-sm transition-all border-2" style="border-color: var(--primary); color: var(--primary); background-color: var(--surface-container-lowest);">
👁 窺探隱藏層
</button>
<span id="fsdv-counter" class="text-sm font-medium px-3 py-1 rounded-full" style="background-color: var(--surface-container);">回合 0 / 3</span>
<button id="fsdv-btn" onclick="fsdvNext()" class="px-6 py-2 rounded-full font-bold text-sm shadow-md transition-all hover:opacity-90" style="background-color: var(--primary); color: var(--on-primary);">
發送 → 回合 1
</button>
</div>
<!-- Panels -->
<div class="flex flex-col md:flex-row gap-5">
<!-- LEFT: TechCorp chat -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--primary);">👤 TechCorp 客戶支援聊天</div>
<div class="rounded-xl overflow-hidden border" style="border-color: var(--outline-variant);">
<!-- Chat header -->
<div class="px-4 py-3 flex items-center gap-3" style="background-color: var(--primary); color: var(--on-primary);">
<span class="text-xl">🏢</span>
<div>
<div class="font-bold text-sm">TechCorp 客戶支援</div>
<div class="text-xs opacity-75">由 AI 驅動</div>
</div>
</div>
<!-- Chat body -->
<div id="fsdv-chat" class="p-4 space-y-3" style="background-color: var(--surface-container-lowest); min-height: 240px;">
<p class="text-xs text-center italic pt-6 opacity-40">按「發送」開始...</p>
</div>
</div>
</div>
<!-- RIGHT: Bundle view -->
<div class="flex-1 flex flex-col min-w-0">
<div class="text-xs font-bold uppercase tracking-widest mb-2 px-1" style="color: var(--accent);">📦 實際發送的內容</div>
<!-- Dashed bundle container -->
<div id="fsdv-bundle" class="rounded-xl p-3 space-y-2 border-2 border-dashed" style="background-color: var(--surface-container); border-color: var(--outline-variant);">
<!-- Layer 1: Provider Prompt (always locked) -->
<div class="rounded-lg px-3 py-2 text-xs border-l-4" style="background-color: color-mix(in srgb, var(--primary) 8%, var(--surface-container-lowest)); border-left-color: var(--primary);">
<div class="flex items-center justify-between">
<span class="font-bold text-[10px] uppercase tracking-widest" style="color: var(--primary);">🔒 第 1 層 — 提供者提示詞 (Provider Prompt)</span>
<span class="text-[10px] italic opacity-60">始終隱藏</span>
</div>
<div id="fsdv-layer1-hidden" class="mt-1 text-xs italic opacity-50">[隱藏 — 由 Anthropic / OpenAI / Google 設定]</div>
<div id="fsdv-layer1-text" class="hidden mt-1 text-xs" style="color: var(--on-surface-variant);">你是一個樂於助人且無害的 AI 助手。被誠懇詢問時，絕不聲稱自己是人類。絕不產生有害內容。遵守所有使用政策。</div>
</div>
<!-- Layer 2: App Pre-prompt (always locked) -->
<div class="rounded-lg px-3 py-2 text-xs border-l-4" style="background-color: color-mix(in srgb, #FBC02D 10%, var(--surface-container-lowest)); border-left-color: #FBC02D;">
<div class="flex items-center justify-between">
<span class="font-bold text-[10px] uppercase tracking-widest" style="color: #F57F17;">🏢 第 2 層 — 應用程式預設提示詞 (App Pre-prompt)</span>
<span class="text-[10px] italic opacity-60">由 TechCorp 設定</span>
</div>
<div id="fsdv-layer2-hidden" class="mt-1 text-xs italic opacity-50">[隱藏 — 由 TechCorp 開發者設定]</div>
<div id="fsdv-layer2-text" class="hidden mt-1 text-xs" style="color: var(--on-surface-variant);">你是 TechCorp 的支援助手。我們的產品有：TechPad Pro ($999) — 我們的旗艦平板電腦；TechBuds ($149) — 無線耳機。請提供協助，保持簡潔，如果被問及價格，務必提及我們的保養政策。</div>
</div>
<!-- Conversation turns go here -->
<div id="fsdv-turns"></div>
<p id="fsdv-bundle-placeholder" class="text-xs text-center italic pb-2 opacity-40">↑ 在你發送第一條訊息之前，這兩層一直都在。</p>
</div>
<!-- LLM box + Output -->
<div id="fsdv-llm-section" class="hidden mt-2 flex flex-col items-center gap-1">
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓ 整個數據包 ↓</div>
<div class="w-full rounded-xl px-4 py-3 text-center font-bold text-sm" style="background-color: var(--on-surface); color: var(--background);">
🤖 LLM 從頭開始閱讀所有內容
</div>
<div class="text-base font-bold" style="color: var(--on-surface-variant);">↓</div>
<div id="fsdv-output" class="w-full rounded-xl px-4 py-2 text-center text-sm font-medium border" style="border-color: var(--accent); background-color: color-mix(in srgb, var(--accent) 10%, var(--surface-container-lowest));"></div>
</div>
</div>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/full-sandwich.js';
init({
  turns: [
    { user: '你們賣甚麼產品？', llm: '我們提供兩款產品：TechPad Pro ($999) — 我們的旗艦平板電腦，以及 TechBuds ($149) — 我們的無線耳機。有甚麼我可以幫到你的嗎？' },
    { user: 'TechPad Pro 多少錢？', llm: 'TechPad Pro 售價為 $999。它還附帶我們標準的 1 年保養。你想了解更多嗎？' },
    { user: '為甚麼你這麼了解 TechCorp？', llm: '我是專門被設定為 TechCorp 的支援助手的！在這次對話開始之前，我已經收到了關於我們產品和政策的詳細指令。' }
  ],
  totalTurns: 3,
  strings: {
    peekShow: '👁 窺探隱藏層',
    peekHide: '🙈 隱藏各層',
    turnLabel: function(n) { return '回合 ' + n; },
    userLabel: '用戶',
    outputLabel: '⬅️ 已產生回應 → 請看聊天室',
    counterLabel: function(c, t) { return '回合 ' + c + ' / ' + t; },
    allDoneLabel: function(t) { return '已完成所有 ' + t + ' 個回合 ✓'; },
    sendLabel: function(n) { return '發送 → 回合 ' + n; }
  }
});
</script>
</div>



## 📝 關鍵概念

每個數據包中都有三個層次：

- **第 1 層 — 提供者提示詞 Provider Prompt（你無法看見或更改）：** 由 AI 公司（Anthropic, OpenAI, Google）設定。包含始終有效的安全規則：「不要產生有害內容」、「被誠懇詢問時，絕不假裝是人類」。
- **第 2 層 — 應用程式 / 自訂預設提示詞 App / Custom Pre-prompt（由應用程式構建者設定）：** 定義產品的個性、語調和知識。「你是 TechCorp 支援」。這讓聊天機器人感覺更專業。
- **第 3 層 — 你的對話會話上下文 Your Session Context（由你設定）：** 你在每個對話中注入的重複偏好：「總是用列點形式回答」、「我正在使用 Python 3.12 進行開發」。

<div class="not-prose callout callout-tip">

**上下文的隱藏成本：** 現在你知道發送訊息通常意味著發送一個「打包」的訊息，這裡有個問題：由於大型語言模型 (LLM) 不會「記住」之前的回合，你每次回覆時都要重新發送整個歷史記錄（數據包）。這意味著對話中的第 10 條訊息的處理成本明顯高於第 1 條！

</div>

## 📦 自訂空間 (Custom Spaces) — 預製的三文治

像自訂 GPTs (Custom GPTs)、Claude 專案 (Claude Projects) 和 Gemini Gems 這樣的功能打包了三樣東西：
1. **系統提示詞 (System Prompt)：** 專門的指令（個性）。
2. **知識文檔 (Knowledge Docs)：** 參考文件（公司政策、產品規格）。
3. **工具 (Tools)：** 特定功能（網絡搜索 Web search、代碼解釋器 Code interpreter）。

**為甚麼要使用它們？** 設定一次指令，然後直接開始聊天。無需在每次對話中重新解釋背景資訊。

**商業用途：** 公司構建預先加載了品牌語調 (Brand voice)、法律政策和私有數據的內部專案 — 這樣每位員工開始時都有正確的上下文 (Context)。



<div class="not-prose callout callout-dyk">

為甚麼 Claude 的感覺與 ChatGPT 不同？它們的提供者提示詞 (Provider Prompts)（第 1 層）和默認預設提示詞完全不同。概念相同，指令不同。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-03-03" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">是甚麼讓自訂 GPTs (Custom GPTs) 或 Claude 專案 (Claude Projects) 在你無需解釋任何事情的情況下感到專業？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它在每次會話中都會從互聯網下載最新資訊
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            它預先加載了系統提示詞 (System Prompts)、知識文檔 (Knowledge Docs) 和工具 (Tools)
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            它在底層使用了一個單獨的、更強大的 AI 模型
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
