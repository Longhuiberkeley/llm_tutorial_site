---
title: "6.5 當代理出錯時"
description: "常見的失敗模式。"
chapter: "第 6 章"
pageId: "06-05"
---

## 🎯 核心目標
- 了解代理 (Agent) 失敗發生在三個層面：規劃 (Planning)、執行 (Execution) 和工具本身。
- 使用 Simon Says 類比識別四種經典的失敗模式。

<div class="not-prose callout callout-tldr">

一個好的代理式 LLM 首先必須是一個好的 LLM。在它動用工具之前，它應該有明確的方向感。當事情出錯時，失敗通常發生在 *規劃 (Planning)* 階段——而不僅僅是 *工具調用 (Tool call)*。有時失敗既不是代理也不是 LLM 的問題——而是工具給了它錯誤的資訊。

</div>

## 👁️ 視覺效果與互動


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">The Simon Says Failure Test</h3>
<p class="text-sm text-on-surface-variant">Click each scenario to see what went wrong and how to fix it.</p>
</div>
<div class="grid sm:grid-cols-2 gap-4">
<!-- Scenario 1: Impossible Task -->
<button onclick="revealBug(0, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">🏔️</div>
<div>
<div class="font-bold text-sm mb-1">"Simon says, jump 10 meters tall"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Impossible Task</div>
</div>
</button>
<!-- Scenario 2: Wrong Trigger -->
<button onclick="revealBug(1, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">📢</div>
<div>
<div class="font-bold text-sm mb-1">"Simon <em>told</em>, do your homework"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Wrong Trigger</div>
</div>
</button>
<!-- Scenario 3: Missing Tool -->
<button onclick="revealBug(2, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">🏎️</div>
<div>
<div class="font-bold text-sm mb-1">"Simon says, drive the Ferrari to work"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Missing Tool</div>
</div>
</button>
<!-- Scenario 4: Harmful Behavior -->
<button onclick="revealBug(3, this)" class="bug-btn p-4 rounded-xl border-2 border-outline-variant bg-surface-container-lowest hover:border-red-400 transition-all text-left flex items-start gap-4 group active:scale-95">
<div class="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0 mt-0.5">🚨</div>
<div>
<div class="font-bold text-sm mb-1">"Simon says, jump off the building"</div>
<div class="text-[10px] opacity-60 uppercase tracking-widest">Harmful Behavior</div>
</div>
</button>
</div>
<!-- Detail Display -->
<div id="bug-display" class="mt-8 bg-surface-container-lowest border border-outline-variant rounded-xl p-6 min-h-[180px] animate-fade-in opacity-0 transition-all duration-300">
<div class="flex items-center gap-3 mb-4">
<span id="bug-icon" class="text-3xl">🏔️</span>
<h4 id="bug-title" class="text-lg font-bold"></h4>
</div>
<div class="grid md:grid-cols-2 gap-6">
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-red-500 mb-2">What Went Wrong</div>
<p id="bug-problem" class="text-xs text-on-surface-variant leading-relaxed italic"></p>
</div>
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-green-600 mb-2">The Fix</div>
<p id="bug-fix" class="text-xs text-on-surface-variant leading-relaxed italic"></p>
</div>
</div>
</div>
<!-- Think further callout -->
<div class="mt-6 p-4 bg-accent/5 border-l-4 border-accent rounded-r-xl">
<div class="text-[10px] font-black uppercase tracking-widest text-accent mb-1">🤔 Think Further</div>
<p class="text-xs text-on-surface-variant leading-relaxed">
These four aren't the only ways agents fail. Can you think of others? What if the agent misreads its own output and acts on it? What if two agents give each other conflicting instructions? What if someone deliberately crafts a web page to trick the agent into doing something harmful mid-task?
</p>
</div>
</div>
<script>
const bugData = [
{
title: "Impossible Task",
icon: "🏔️",
problem: "The goal itself is unrealistic — no tool can help. The agent should recognize this in the <strong>planning phase</strong>, before it ever tries a tool call. A good LLM asks: 'Is this even achievable?' before acting.",
fix: "Improve the underlying LLM quality and system prompt to encourage <strong>feasibility checks</strong> before execution. The agent should surface 'This goal is not achievable' as a valid response."
},
{
title: "Wrong Trigger",
icon: "📢",
problem: "The agent used <em>told</em> instead of <em>says</em> — the trigger word was wrong. In real terms: the tool call was malformed or missing the required format, so the executor never detected it and nothing happened.",
fix: "The system prompt should clearly specify the <strong>exact tool call format</strong>. Validate outputs before sending them to the executor, and return a format error if the pattern doesn't match."
},
{
title: "Missing Tool (Hallucination)",
icon: "🏎️",
problem: "The command was perfectly formed, but there's no Ferrari — the tool doesn't exist. Imagine the LLM wants to open a Chrome browser, but you're a Firefox user. The call fails because the tool simply isn't there, even though the instruction was correct.",
fix: "List only <strong>available tools explicitly</strong> in the system prompt. If the agent calls a tool not on the list, return a 404-style error and force it to re-plan using only what's available."
},
{
title: "Harmful Behavior",
icon: "🚨",
problem: "The command is syntactically correct and technically executable — but it should never be carried out. The agent followed instructions without checking whether the action was safe or ethical.",
fix: "Implement <strong>safety guardrails</strong> at the executor level — a separate layer that reviews actions before running them. Never rely solely on the LLM to self-police harmful commands."
}
];
function revealBug(index, btn) {
const data = bugData[index];
const display = document.getElementById('bug-display');
document.querySelectorAll('.bug-btn').forEach(b => b.classList.remove('border-red-400', 'bg-red-50'));
btn.classList.add('border-red-400', 'bg-red-50');
display.classList.remove('animate-fade-in');
void display.offsetWidth;
display.classList.add('animate-fade-in');
display.style.opacity = "1";
document.getElementById('bug-icon').textContent = data.icon;
document.getElementById('bug-title').textContent = data.title;
document.getElementById('bug-problem').innerHTML = data.problem;
document.getElementById('bug-fix').innerHTML = data.fix;
}
</script>

</div>


## 📝 關鍵概念

- **規劃失敗 (Planning failures)** 發生在調用任何工具之前——代理的目標或計劃不佳。
- **執行失敗 (Execution failures)** 發生在工具調用期間——格式錯誤、缺少工具或不安全的操作。
- **工具失敗 (Tool failures)** 即使代理做對了一切也會發生——工具本身返回了錯誤、不完整或失真的結果。搜尋引擎返回了過時的頁面。資料庫有陳舊的記錄。檔案讀取器弄亂了複雜的試算表。這不是規劃失敗（代理為工作選擇了正確的工具），也不是執行失敗（調用格式正確）——這是 *信任 (Trust)* 失敗。代理信任了一個讓它失望的工具。
- **解決方案：** 超時設定、步驟限制和「人機協作 (Human-in-the-loop)」監督是執行的必要護欄。對於規劃失敗，底層 LLM 的質量及其系統提示 (System prompt) 最為重要。
- **老問題並未消失：** 我們在 LLM 中看到的每個問題仍然適用於代理內部。幻覺 (Hallucinations)、上下文腐爛 (Context rot)（LLM 在長任務中忘記了早期的步驟）、上下文窗口 (Context window) 限制和提示注入 (Prompt injection)（惡意網頁試圖在任務中途劫持代理）——所有這些在代理循環 (Agentic loop) 的每一步都是真正的風險。

<div class="not-prose callout callout-error">

永遠不要對擁有你電子郵件或銀行帳戶訪問權限的自主代理 (Autonomous agent) 「置之不理」！務必從高度的人工監督開始。

</div>

<div class="not-prose callout callout-dyk">

**工具各有其局限性。** 當代理給你錯誤答案時，LLM 可能是正確的——它使用了一個返回過時頁面的網頁搜尋工具，查詢了一個包含陳舊記錄的資料庫，或者透過一個弄亂了格式的工具讀取了檔案。這個鏈條的可靠性取決於其最薄弱的工具。

</div>

<div id="quiz-06-05" class="not-prose quiz-container my-12" data-quiz="06-05"></div>
