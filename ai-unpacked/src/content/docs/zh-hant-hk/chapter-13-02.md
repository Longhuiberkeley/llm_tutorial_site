---
title: "13.2 項目管理入門"
description: "為使用 LLM 的構建者準備的實用 PM 速成課程 —— 階段、閘門以及為什麼結構優於速度。"
chapter: "第 13 章"
pageId: "13-02"
---

## 🎯 核心目標
- 為非技術讀者提供由 LLM 輔助項目所需的「最小可行」項目管理 (PM) 知識。
- 以實用角度介紹需求 (Requirements)、V 模型以及敏捷開發 (Agile)。
- 確立「階段閘門 (Phase gates)」作為維持紀律的具體機制。

<div class="not-prose callout callout-tldr">

大多數使用 LLM 構建東西的人並不是項目經理 —— 這沒關係。但跳過項目管理 (PM) 基礎知識是項目失敗的主因。你不需要證書，你需要知道：我正在構建什麼、為誰構建、我如何知道它何時完成，以及在繼續之前如何檢查我的工作。

</div>

## 📋 什麼是需求 (Requirements)？

在構建任何東西之前，你需要知道「完成」是什麼樣子的。

一個**需求 (Requirement)** 是對系統必須做什麼、為誰做以及在什麼約束下運行的陳述。它是對「我們到底想達成什麼？」這個問題的回答。

沒有需求，你構建的是你感興趣的東西。有了需求，你構建的是被需要的東西。

好的需求回答四件事：
- **誰**在做這件事？（用戶或角色）
- 他們需要能夠**做什麼**？
- **成功的標準是什麼？**（一個可衡量的結果，而非一種感覺）
- **約束條件是什麼？**（絕對不能做什麼，適用什麼限制）

弱需求與強需求的區別在於具體性：

| 弱需求 | 強需求 |
|------|--------|
| 用戶可以登錄 | 用戶可以通過郵件或 Google OAuth 登錄，具備密碼重置功能，且適配手機端和電腦端 |
| 報告很好 | 報告回答了簡報中定義的三個研究問題，長度不超過 20 頁，且能被非技術背景的高管理解 |
| 聊天機械人很有幫助 | 聊天機械人在 80% 的情況下能解決 1 級支援問題，而無需人工介入 |

需求不描述技術，它們描述需求本身。技術可以改變 —— 而需求定義了成功。

## 🔁 V 模型 —— 無需官僚作風的結構化思維

V 模型是一種思考「構建」與「檢查」如何相互關聯的方式。你不需要正式地使用它 —— 但其背後的邏輯適用於每個項目。

核心想法是一個 V 字形：

- **左側（向下）：** 從廣泛到具體。需求 → 設計 → 實施。
- **V 字底部：** 實際的工作 —— 編寫代碼、生成內容、構建實體。
- **右側（向上）：** 根據向下時定義的標準，對每個層級進行檢查。單元檢查 → 集成檢查 → 驗收檢查。

核心洞察在於**對稱性**：向下的每個階段在向上時都有對應的檢查。

- 需求在驗收時檢查：「我們是否構建了被要求的東西？」
- 設計在集成時檢查：「各個部分是否按照設計契合在一起？」
- 實施則立即檢查：「這個組件是否完成了它應該完成的工作？」

你不需要正式的標記法。V 模型的實踐版更簡單：**對於進入時做的每個決定，在退出時都要有一個檢查方法。** 在構建前定義成功標準，並在完成後進行驗證。

<div class="not-prose callout callout-dyk">

任何領域的優秀專業人士都會不自覺地運用這種邏輯。律師起草一個條款，根據簡報進行審核，然後再進行下一個。廚師在出菜前先品嚐。編輯根據大綱檢查章節。分階段與檢查是完成細緻工作的方式 —— 這並非軟件行業的專利。

</div>


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">The V-Model at a Glance</h3>
<p class="text-sm text-on-surface-variant">Click any phase to see what it produces, the gate to pass, and a real-world example.</p>
</div>
<!-- V-Model Layout -->
<div class="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 max-w-2xl mx-auto" id="pm-nodes">
<!-- Row 1: Requirements + Acceptance -->
<button onclick="selectPhase(0, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group">
<div class="text-2xl mb-1">📋</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Requirements</div>
</button>
<div class="hidden sm:flex items-center justify-center">
<div class="text-xs text-on-surface-variant font-bold text-center">⟷<br><span class="text-[9px]">verified by</span></div>
</div>
<button onclick="selectPhase(5, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group">
<div class="text-2xl mb-1">🎯</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Acceptance</div>
</button>
<!-- Row 2: Design + Integration -->
<button onclick="selectPhase(1, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group ml-4">
<div class="text-2xl mb-1">🗺️</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Design</div>
</button>
<div class="hidden sm:flex items-center justify-center">
<div class="text-xs text-on-surface-variant font-bold text-center">⟷<br><span class="text-[9px]">verified by</span></div>
</div>
<button onclick="selectPhase(4, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group mr-4">
<div class="text-2xl mb-1">🔗</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Integration</div>
</button>
<!-- Row 3: Implementation + Unit -->
<button onclick="selectPhase(2, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group ml-8">
<div class="text-2xl mb-1">⚙️</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Implement</div>
</button>
<div class="hidden sm:flex items-center justify-center">
<div class="text-xs text-on-surface-variant font-bold text-center">⟷<br><span class="text-[9px]">verified by</span></div>
</div>
<button onclick="selectPhase(3, this)" class="pm-node rounded-xl p-3 border-2 border-outline-variant bg-surface-container-lowest text-center hover:border-primary transition-all group mr-8">
<div class="text-2xl mb-1">🧪</div>
<div class="text-[11px] font-black uppercase tracking-wide text-on-surface group-hover:text-primary transition-colors">Unit Check</div>
</button>
</div>
<div class="flex justify-center mb-6 gap-8 text-xs text-on-surface-variant font-bold">
<span>← Build phase (left side)</span>
<span>Verify phase (right side) →</span>
</div>
<!-- Detail Panel -->
<div id="pm-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[150px] flex items-center justify-center transition-all duration-300">
<p class="text-sm text-on-surface-variant italic text-center">Click a phase above to learn what it involves.</p>
</div>
</div>
<script>
(function() {
const phases = [
{
name: 'Requirements',
emoji: '📋',
side: 'Build',
what: 'Define what the system must do — for whom, under what constraints, with what success criteria. Write it down before building anything.',
gate: 'Can you describe what "done" looks like in measurable terms? If no, you are not ready to design.',
example: '💻 Software: "Users can log in via email or Google OAuth, with password reset, on mobile and desktop." 📄 Report: "Answers 3 defined research questions for a non-technical executive audience, max 20 pages."'
},
{
name: 'Design',
emoji: '🗺️',
side: 'Build',
what: 'Define the architecture, structure, and approach. For software: module breakdown, patterns, data model. For documents: outline, argument structure, section plan.',
gate: 'Could someone else build or write this from your design? If no, the design is not complete.',
example: '💻 Software: System architecture diagram, module list, API contracts. 📄 Report: Detailed outline with section purpose, argument flow, evidence sources per section.'
},
{
name: 'Implementation',
emoji: '⚙️',
side: 'Build',
what: 'Generate content or code in small, bounded chunks — one module, one section at a time. This is where you use the LLM.',
gate: 'Has this chunk been reviewed and approved before proceeding to the next? If no, stop and review.',
example: '💻 Software: Write one function or one component, review it, then the next. 📄 Report: Write one section, review it against the outline and requirements, then the next.'
},
{
name: 'Unit Check',
emoji: '🧪',
side: 'Verify',
what: 'Verify that each individual piece works as specified. Does this function do what it says? Does this section argue what the outline specified?',
gate: 'Does this piece meet the acceptance criteria for this specific deliverable?',
example: '💻 Software: Run tests on this function. Does it return the right values for edge cases? 📄 Report: Does this section answer its assigned research question clearly?'
},
{
name: 'Integration',
emoji: '🔗',
side: 'Verify',
what: 'Verify that the pieces work together. Does the system hold together? Does the argument flow coherently across sections?',
gate: 'Do the parts fit together as designed? Are there contradictions or gaps between pieces?',
example: '💻 Software: Do modules communicate correctly? Are there unexpected dependencies? 📄 Report: Does section 5 contradict section 2? Does the argument build coherently?'
},
{
name: 'Acceptance',
emoji: '🎯',
side: 'Verify',
what: 'Verify the final output against the original requirements. Did we build what was asked for? Does it meet the success criteria from phase 1?',
gate: 'Does the complete output pass the acceptance criteria defined in the Requirements phase?',
example: '💻 Software: Does the login work on mobile and desktop via both methods? Can users reset passwords? 📄 Report: Does it answer all 3 research questions? Is it within 20 pages? Is it readable by a non-technical executive?'
}
];
window.selectPhase = function(index, btn) {
const phase = phases[index];
document.querySelectorAll('.pm-node').forEach(n => {
n.classList.remove('border-primary', 'bg-primary/10');
n.classList.add('border-outline-variant', 'bg-surface-container-lowest');
});
btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
btn.classList.add('border-primary', 'bg-primary/10');
const detail = document.getElementById('pm-detail');
detail.className = 'border-2 border-primary bg-primary/5 rounded-xl p-6 min-h-[150px] transition-all duration-300';
let html = '<div class="w-full">';
html += '<div class="flex items-center gap-2 mb-3">';
html += '<span class="text-2xl">' + phase.emoji + '</span>';
html += '<div>';
html += '<div class="font-bold text-sm text-on-surface">' + phase.name + '</div>';
html += '<div class="text-[10px] font-bold uppercase tracking-wide text-on-surface-variant">' + phase.side + ' phase</div>';
html += '</div></div>';
html += '<div class="grid gap-2 sm:grid-cols-3 text-[11px]">';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant">';
html += '<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">WHAT YOU DO</div>';
html += '<div class="text-on-surface leading-relaxed">' + phase.what + '</div></div>';
html += '<div class="bg-amber-50 rounded-lg p-3 border border-amber-200">';
html += '<div class="font-black text-[9px] uppercase tracking-wider text-amber-600 mb-1">GATE — BEFORE PROCEEDING</div>';
html += '<div class="text-on-surface leading-relaxed">' + phase.gate + '</div></div>';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant">';
html += '<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">EXAMPLES</div>';
html += '<div class="text-on-surface leading-relaxed">' + phase.example + '</div></div>';
html += '</div></div>';
detail.innerHTML = html;
};
})();
</script>

</div>


## 🔄 敏捷開發 (Agile) 的白話解釋

敏捷開發是對「預先計劃一切」局限性的一種反思。它的核心是：以小的迭代進行構建，儘早獲取反饋，並隨時調整。

核心概念是**衝刺 (Sprint)** —— 一個短的工作週期，通常為一到兩週。每個衝刺產出一些可供審核的東西：一個運行的功能、一個完成的章節或一個可測試的原型。你審核已構建的內容，決定下一步做什麼，並進行調整。

這自然地對應到由 LLM 輔助的工作：
- 生成一個代碼塊或段落
- 根據需求進行審核
- 決定要添加或更改什麼
- 進入下一個代碼塊或段落

敏捷開發與 V 模型之間的張力是富有成效的：**敏捷給你迭代速度；V 模型給你驗證紀律。** 同時使用兩者。快速迭代，但在每次迭代時進行驗證，而不是累積未經審核的產出。


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-6">
<h3 class="text-xl font-bold font-headline mb-2">The Agile Sprint Cycle</h3>
<p class="text-sm text-on-surface-variant">Click each step to see what it means for LLM-assisted work — whether you're building software or writing a document.</p>
</div>
<!-- Sprint Steps -->
<div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 mb-6">
<button onclick="selectSprint(0, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none sm:first:rounded-l-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">📌</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Plan</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">What to build next</div>
</div>
</button>
<div class="hidden sm:flex items-center text-on-surface-variant font-bold text-lg px-1">→</div>
<div class="text-on-surface-variant font-bold text-lg sm:hidden">↓</div>
<button onclick="selectSprint(1, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">🔨</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Build</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">Generate in chunks</div>
</div>
</button>
<div class="hidden sm:flex items-center text-on-surface-variant font-bold text-lg px-1">→</div>
<div class="text-on-surface-variant font-bold text-lg sm:hidden">↓</div>
<button onclick="selectSprint(2, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">🔍</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Review</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">Check against requirements</div>
</div>
</button>
<div class="hidden sm:flex items-center text-on-surface-variant font-bold text-lg px-1">→</div>
<div class="text-on-surface-variant font-bold text-lg sm:hidden">↓</div>
<button onclick="selectSprint(3, this)" class="sprint-node w-full sm:w-auto flex sm:flex-col items-center gap-3 sm:gap-2 px-5 py-3 sm:px-6 sm:py-4 rounded-xl sm:rounded-none sm:last:rounded-r-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-primary transition-all group text-left sm:text-center">
<div class="text-2xl">🔁</div>
<div>
<div class="font-black text-xs uppercase tracking-wide group-hover:text-primary transition-colors">Adjust</div>
<div class="text-[10px] text-on-surface-variant hidden sm:block">Update plan, repeat</div>
</div>
</button>
</div>
<!-- Detail Panel -->
<div id="sprint-detail" class="bg-surface-container-lowest border-2 border-outline-variant rounded-xl p-6 min-h-[140px] flex items-center justify-center transition-all duration-300">
<p class="text-sm text-on-surface-variant italic text-center">Click a step above to see how it applies.</p>
</div>
<p class="text-[11px] text-on-surface-variant text-center mt-4 italic">Each iteration is one sprint. Agile says: don't plan everything upfront — build a slice, learn, adjust, and repeat.</p>
</div>
<script>
(function() {
const steps = [
{
emoji: '📌',
label: 'Plan',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Decide what to produce in this session. Write a clear brief: what role is the LLM playing, what is the deliverable, what are the success criteria for this chunk?',
software: '💻 Software: "This session: write the authentication module. It must handle email login and Google OAuth. Success: both login flows work end-to-end in the test environment."',
document: '📄 Report: "This session: write Section 3 — Market Analysis. It must answer research question R2 (market size and growth rate). Success: cites at least 3 sources and stays under 600 words."',
trap: '⚠️ Skip this step and you\'ll generate output in the wrong direction, for the wrong purpose, or at the wrong level of detail — and only find out at the end.'
},
{
emoji: '🔨',
label: 'Build',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Generate the deliverable. Keep the scope bounded — one module, one section, one component at a time. Give the LLM the context it needs for this specific task, not the entire project history.',
software: '💻 Software: Prompt the LLM with the auth module spec. Generate the implementation. Run it. If it fails, fix that specific thing before moving on.',
document: '📄 Report: Prompt the LLM with the section brief, your research notes, and the argument direction. Generate the section. Read it. If something\'s wrong, fix it now.',
trap: '⚠️ Building too large a chunk in one go makes review harder and correction more expensive. If you can\'t review it in 5 minutes, the chunk is too big.'
},
{
emoji: '🔍',
label: 'Review',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Check the output against the Plan brief you wrote. Does it meet the success criteria? Does it connect to a stated requirement? Look for the failure patterns — duplicates, inconsistencies, false-passing checks.',
software: '💻 Software: Does the auth module handle both login methods? Does it validate inputs? Are there hardcoded values that should be configurable? Do the tests actually fail when the code is broken?',
document: '📄 Report: Does the section answer R2? Are the sources cited correctly? Does the argument flow from the previous section? Does anything contradict section 1?',
trap: '⚠️ Skipping review at this step means problems compound into the next sprint. What would take 5 minutes to fix now may take 3 hours to fix in sprint 4.'
},
{
emoji: '🔁',
label: 'Adjust',
color: 'border-primary',
bg: 'bg-primary/5',
what: 'Based on the review, update your plan for the next sprint. Did you learn something that changes a requirement? Did the output reveal a gap in the design? Adjust the plan before starting the next build.',
software: '💻 Software: The auth module revealed that the session token approach needs updating in the design doc. Update the design, then plan the next module.',
document: '📄 Report: Writing section 3 revealed that the intro needs to mention market segmentation. Note that adjustment, then plan section 4.',
trap: '⚠️ Adjusting only at the very end turns Agile into a waterfall with extra steps. The value of Agile is that each iteration informs the next one — not that you produce all the output then review.'
}
];
window.selectSprint = function(index, btn) {
const step = steps[index];
document.querySelectorAll('.sprint-node').forEach(n => {
n.classList.remove('border-primary', 'bg-primary/10');
n.classList.add('border-outline-variant', 'bg-surface-container-lowest');
});
btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
btn.classList.add('border-primary', 'bg-primary/10');
const detail = document.getElementById('sprint-detail');
detail.className = 'border-2 rounded-xl p-6 min-h-[140px] transition-all duration-300 ' + step.color + ' ' + step.bg;
let html = '<div class="w-full">';
html += '<div class="flex items-center gap-2 mb-3">';
html += '<span class="text-2xl">' + step.emoji + '</span>';
html += '<div class="font-bold text-sm">' + step.label + '</div></div>';
html += '<p class="text-[12px] text-on-surface leading-relaxed mb-3">' + step.what + '</p>';
html += '<div class="grid gap-2 sm:grid-cols-2 text-[11px] mb-2">';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant leading-relaxed">' + step.software + '</div>';
html += '<div class="bg-surface-container-lowest rounded-lg p-3 border border-outline-variant leading-relaxed">' + step.document + '</div>';
html += '</div>';
html += '<p class="text-[10px] text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">' + step.trap + '</p>';
html += '</div>';
detail.innerHTML = html;
};
})();
</script>

</div>


## 🚦 階段閘門 (Phase Gates) —— 實用的工具

一個**階段閘門 (Phase gate)** 是你在進入下一個階段之前必須通過的檢查點。它是你問自己的一個問題：「我是否真的具備了繼續前行所需的條件？」

這裡有四個適用於任何 LLM 輔助項目的閘門 —— 無論你是在開發軟件、撰寫 40 頁的報告，還是製作研究文件：

**階段 1 — 定義 (Define)**
*任務：* 明確目的、用戶、輸入與輸出、約束條件以及成功標準。
*閘門問題：* 我能否用可衡量的術語描述「完成」是什麼樣子的？如果答案是否定的，說明你還沒準備好進入下一階段。

**階段 2 — 設計 (Design)**
*任務：* 定義結構、方法、組件以及任務如何分解。
*閘門問題：* 別人能否根據我的規範構建或撰寫出這個東西？如果答案是否定的，設計尚未完成。

**階段 3 — 構建 (Build)**
*任務：* 以小的、可審核的塊（一次一個章節或模組）生成內容或代碼。
*閘門問題：* 在我進入下一塊之前，這一塊是否已經過審核並批准？如果答案是否定的，請停止並先進行審核。

**階段 4 — 驗證 (Verify)**
*任務：* 根據「定義」階段的成功標準檢查輸出。
*閘門問題：* 這個輸出是否符合「定義」階段的設定？如果答案是否定的，請在交付前進行修正。

<div class="not-prose callout callout-error">

任何項目中最昂貴的錯誤是在「定義」階段尚未完成時就開始「構建」階段。當需求在完成大量工作後才變得清晰時，功能就必須推倒重來。延遲發現需求所付出的代價，與在此之前構建了多少內容成正比。

</div>

## 🔪 為 LLM 分解任務

只有當任務足夠小，可以逐個通過檢查時，階段閘門才有效。

發給 LLM 的每個 Prompt 都應該具備：
- **一個角色** —— 「作為一名用戶體驗 (UX) 設計師」或「作為一名技術撰稿人」
- **一個階段** —— 「我們正處於設計階段」或「我們正在撰寫第 3 章」
- **一個交付成果** —— 「以文本形式產出一個用戶流程」或「撰寫一段 300 字的分析」
- **僅包含相關上下文** —— 僅提供這項特定任務所需的內容，而非整個項目的歷史。

小的 Prompt 能產生可驗證的輸出。審核一個 300 字的章節只需兩分鐘。而一次性生成 3,000 字的章節則難以評估 —— 且出錯時更難修正。

當任務被分解時，每個輸出都成為一個檢查點。當任務被混在一起時，檢查點就消失了。

## 📝 核心概念

- **需求 (Requirements)** 描述需求本身，而非技術 —— 誰、做什麼、成功標準、約束條件。
- **V 模型**指出：每個構建階段都有一個對應的驗證階段。在構建前定義成功，在完成後據此檢查。
- **敏捷開發 (Agile)** 增加了迭代速度 —— 小步構建、審核、調整。與 V 模型的紀律相結合。
- **階段閘門 (Phase gates)** 是檢查點：定義 → 設計 → 構建 → 驗證。每個閘門都是你在繼續前必須回答的問題。
- **精簡、專注的 Prompt** —— 一個角色、一個階段、一個交付成果 —— 產出你可驗證的內容。混合式的大型 Prompt 則做不到。

<div id="quiz-13-02" class="not-prose quiz-container my-12" data-quiz="13-02"></div>
