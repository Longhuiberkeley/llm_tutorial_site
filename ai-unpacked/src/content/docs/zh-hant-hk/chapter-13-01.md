---
title: "13.1 為什麼 LLM 項目與眾不同"
description: "LLM 並不消除對項目管理的需求 —— 它們放大了跳過它的後果。"
chapter: "第 13 章"
pageId: "13-01"
---

## 🎯 核心目標
- 解釋由 LLM 輔助的項目如何產生一種「速度陷阱」，掩蓋了缺失的項目基礎。
- 表明「自滿」—— 也就是不經審核就接受 AI 產出的內容 —— 是債務累積最快的地方。
- 介紹為什麼任務分解對人類和 LLM 都至關重要。

<div class="not-prose callout callout-tldr">

LLM 並不消除對項目管理的需求 —— 它們放大了跳過它的代價。每個項目中都存在同樣的現實問題：用戶是誰、需求是什麼、如何處理邊緣案例。LLM 只是運行得足夠快，以至於你可能沒有注意到這些問題從未得到回答。

</div>

## ⚡ 速度陷阱 (Velocity Trap)：完工的假象

想像你對 LLM 說：「幫我建一個學習解象棋殘局的網站。」

幾小時內，一個網站就出現了。它有用戶界面 (UI)，顯示殘局，甚至可能有提示系統。看起來大功告成。

但退一步想。用戶到底是誰？是初學者還是高級玩家？是否有登錄系統，還是所有操作都是匿名的？你如何追踪用戶解開了哪些殘局？在手機端表現如何？如果有人想分享一個殘局怎麼辦？如果這是一個付費產品，計費如何運作？數據模型是什麼？殘局儲存在哪裡？

這些問題並沒有因為 LLM 生成了一些 HTML 代碼就消失。它們只是從未被提及。LLM 運行得太快，以至於缺口尚未顯現。

這就是**速度陷阱 (Velocity trap)**：由 LLM 輔助工作的速度創造了一種「完工」的假象。一個看起來完成的原型可能完全缺失其基礎 —— 直到你嘗試在其上構建更多功能時，你才會發現這一點。

**沒有方向的速度是漂流，而非進步。**

<div class="not-prose callout callout-dyk">

這是每個快速推進的項目中都會遇到的問題 —— 無論是否由 LLM 輔助。區別在於規模。在傳統開發中，在沒有明確需求的情況下編寫一週的代碼是一個可以彌補的錯誤。而使用 LLM，你可以在一天內完成一個月的工作量。跳過基礎所帶來的後果會按比例更快地累積。

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">The Velocity Trap in Action</h3>
<p class="text-sm text-on-surface-variant">Toggle between two approaches and click a week to see what happens.</p>
</div>
<!-- Toggle -->
<div class="flex gap-2 justify-center mb-8">
<button onclick="setMode('loose', this)" id="apd-btn-loose"
class="apd-mode-btn px-5 py-2 rounded-full text-sm font-bold border-2 transition-all border-outline-variant bg-surface-container-lowest">
⚡ Fast &amp; Loose
</button>
<button onclick="setMode('structured', this)" id="apd-btn-structured"
class="apd-mode-btn px-5 py-2 rounded-full text-sm font-bold border-2 transition-all border-outline-variant bg-surface-container-lowest">
🏗️ Structured
</button>
</div>
<!-- Timeline Nodes -->
<div class="relative mb-8">
<div class="absolute top-8 left-[16%] right-[16%] h-1 bg-outline-variant/40 rounded-full"></div>
<div class="flex justify-around">
<button onclick="selectWeek(1, this)" class="apd-week flex flex-col items-center gap-2 group z-10">
<div class="apd-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm group-hover:border-primary">W2</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors">Week 2</span>
</button>
<button onclick="selectWeek(2, this)" class="apd-week flex flex-col items-center gap-2 group z-10">
<div class="apd-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm group-hover:border-primary">W6</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors">Week 6</span>
</button>
<button onclick="selectWeek(3, this)" class="apd-week flex flex-col items-center gap-2 group z-10">
<div class="apd-circle w-16 h-16 rounded-full border-2 border-outline-variant bg-surface-container-lowest flex items-center justify-center font-black text-lg transition-all duration-300 shadow-sm group-hover:border-primary">W12</div>
<span class="text-[10px] font-black uppercase tracking-wide text-on-surface-variant group-hover:text-primary transition-colors">Week 12</span>
</button>
</div>
</div>
<!-- Detail Panel -->
<div id="apd-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[160px] flex items-center justify-center transition-all duration-300">
<p class="text-sm text-on-surface-variant italic text-center">Select an approach above, then click a week to see what's happening.</p>
</div>
</div>
<script type="module">
import { init } from '/js/interactives/velocity-trap.js';
init({
data: {
loose: {
label: '⚡ Fast & Loose',
color: 'border-orange-400',
bg: 'bg-orange-50',
weeks: {
1: { emoji: '😄', heading: 'Week 2 — Everything looks great!', details: ['Features appearing in hours. The demo is impressive.','Stakeholders are excited. The team is energized.','Nobody has asked: "What are the requirements?"','⚠️ Foundation: code is being generated without a clear architecture or defined success criteria.'], note: 'This is the intoxicating phase. Speed creates a feeling of progress. The problems are invisible.' },
2: { emoji: '😬', heading: 'Week 6 — Something feels off', details: ['Adding a new feature takes longer than expected.','Fixing a bug in one place breaks something in another.','The codebase feels "sticky" — hard to move through.','⚠️ Root cause: 4 weeks of accepted-without-review code has created hidden dependencies.'], note: 'The debt accumulated invisibly. It\'s now starting to slow things down. Most teams push through rather than stopping to address it.' },
3: { emoji: '😰', heading: 'Week 12 — The reckoning', details: ['A one-day change is taking three days of archaeology.','Nobody fully understands what was built in weeks 1–4.','The same logic exists in 4 different places with slight differences.','🚨 The foundation cannot support new floors. Significant rework required.'], note: 'The cost of fixing the foundation grows with each floor built on top of it. What would have taken 2 hours in week 1 now takes 2 days.' }
}
},
structured: {
label: '🏗️ Structured',
color: 'border-primary',
bg: 'bg-primary-fixed',
weeks: {
1: { emoji: '🤔', heading: 'Week 2 — Slightly slower, clearly better', details: ['Features taking a bit longer — requirements were defined first.','Each chunk reviewed before the next one starts.','Architecture decisions documented. Success criteria written.','✅ Foundation: solid. Every piece of code traces to a requirement.'], note: 'The investment in structure feels slower in week 1. It pays dividends every week after.' },
2: { emoji: '😊', heading: 'Week 6 — Steady, predictable progress', details: ['New features slot in cleanly because the architecture was designed.','Bugs are fixed without creating new ones — code is understood.','The team knows where to find things.','✅ Progress is sustainable. Velocity is not declining.'], note: 'No debt has accumulated because each phase gate was passed before proceeding.' },
3: { emoji: '🎉', heading: 'Week 12 — Still productive', details: ['New features are added cleanly. One day = one day.','The codebase is understandable to someone who wasn\'t there in week 1.','Requirements traceability means every feature has a reason.','✅ The project is in a healthy state. Iteration continues without increasing cost.'], note: 'Structured development doesn\'t mean slower. It means the velocity is maintained over time rather than declining as debt accumulates.' }
}
}
}
});
</script>

</div>


## 🖱️ 自滿問題 (Complacency Problem)

在每個 AI 輔助工具中，都有一個靜悄悄地造成最大傷害的按鈕：**接受 (Accept)**。

當你手動編寫 20 行代碼時，你會在編寫過程中思考每一行。而當 LLM 在幾秒鐘內生成 200 行代碼時，本能反應是快速掃視一下，覺得看起來合理，就點擊「接受」。

掃視並不等同於理解。代碼可能在你測試的「理想路徑 (Happy path)」下運行良好，但可能無法處理實際生產中會出現的邊緣案例。它可能引入了一種架構模式，與你三週後要構建的東西產生衝突。這些問題通過快速掃視是看不出來的。

複利效應：每個在未完全理解的情況下就被接受的代碼塊，在稍後出現問題時都會變得更難修改。要修復建立在第 1-4 層（且未經審核）之上的第 5 層問題，意味著你必須先理解所有五層。

還有一種更微妙的自滿形式：**來自過去成功的虛假信心**。LLM 昨天運作良好，所以你今天更信任它。但今天的 Prompt 可能比昨天的更難 —— 編寫了更多代碼、做出了更多決策、產生了更多依賴。LLM 必須導航的複雜性隨著每個會話而增長，獲取正確輸出的難度也隨之增加。更重要的是，警覺性往往隨著複雜性的增加而降低。在項目初期，人們會審核每一行；後期當系統感覺穩定時，他們就停止審核了。這恰恰本末倒置 —— 項目越到後期，上下文越複雜，不一致的可能性越大，審核也就越關鍵。

**由 LLM 輔助的項目中，技術債務 (Technical debt) 的累積速度更快 —— 而非更慢。** 對於構建不正確的東西進行更正或修復，其時間和返工成本可能比傳統項目更高，正是因為速度掩蓋了有多少東西是建立在搖晃的基礎之上的。

<div class="not-prose callout callout-error">

一個常見錯誤：僅僅因為 LLM 的產出「看起來行得通」，就將其視為完成的工作。通過快速測試並不等同於正確、完整或可維護。審核步驟並非可選 —— 它是你用自己的判斷力取代 LLM 模式匹配的地方。

</div>

## ⚠️ 真正的風險（簡述）

這些風險是真實存在的，值得了解，但它們只是跳過項目規範的症狀 —— 而非根本原因：

- **幻覺風險 (Hallucination risk)** —— LLM 信心十足地陳述錯誤內容。沒有明確的需求，你可能不知道「正確」的標準是什麼，從而無法捕捉到它。
- **成本超支風險** —— Token 使用量隨使用規模增長。設計拙劣的工作流在大規模運行時會產生巨額帳單。
- **非確定性風險 (Non-determinism risk)** —— 相同的輸入可能產生不同的輸出。你今天驗證過的行為明天可能就會有所不同。
- **沉默失敗風險 (Silent failure risk)** —— 錯誤看起來像是聽起來很合理的錯誤答案，而不是程序崩潰。它們會溜過自動化檢查。
- **安全風險** —— 提示注入 (Prompt injection)、缺失輸入驗證以及在無人仔細查看的情況下引入硬編碼的密鑰 (Secrets)。

管理這些風險需要項目級別的紀律 —— 而不僅僅是技術意識。

## 🔪 為什麼分解任務至關重要

要求一個 LLM 同時擔任產品經理、設計師、開發人員和 QA 測試員，產出的結果往往平庸 —— 原因與讓一個人同時做五份工作是一樣的。上下文切換代價高昂，不同角色有衝突的優先級，而且沒有人能同時在腦中記住所有需求。LLM 也有同樣的限制。

解決方法：讓每個 Prompt 擁有**一個角色、一個階段和一個交付成果**。邊界明確的任務能產生可驗證的輸出。而一個要求完成所有事情的 Prompt，其產出的內容過於纏繞，無法清晰審核。

<div class="not-prose callout callout-dyk">

任務分解非常重要，以至於下一頁將深入探討它 —— 以及使其發揮作用的項目管理基礎知識。

</div>

## 📝 核心概念

- **速度陷阱 (Velocity trap)** —— LLM 運行極快，容易讓項目在未完成前顯得完整；缺失的基礎在後期會以更高昂的代價顯現。
- **自滿問題 (Complacency problem)** —— 不理解就點擊「接受」會累積債務；過去的成功不保證現在的正確；複雜性隨每個會話增長。
- **技術債務累積更快** —— 在 LLM 輔助項目中，糾錯成本比傳統開發更高，而非更低。
- **分解任務** —— 每個 Prompt 保持一個角色、一個階段、一個交付成果，產出可審核、可驗證的內容。
- **真正的風險**（幻覺、成本、非確定性、沉默失敗）是跳過紀律的症狀，而非獨立的意外。

<div id="quiz-13-01" class="not-prose quiz-container my-12" data-quiz="13-01"></div>
