---
title: "6.4 代理循環 (Agentic Loop) —— 感知、規劃、行動、觀察"
description: "智能代理內部的核心引擎。"
chapter: "第 6 章"
pageId: "06-04"
---

## 🎯 核心目標
- 深入了解智能代理 (Agent) 決策過程的生命週期。
- 理解為什麼智能代理是以循環 (Cycles) 方式運作，而非線性的順序。

<div class="not-prose callout callout-tldr">

智能代理 (Agents) 不僅僅是「執行」任務。它們會先思考、採取行動，然後觀察發生了什麼。這個循環 —— 即**代理循環 (Agentic Loop)** —— 讓它們能夠處理複雜且混亂的現實世界任務。

</div>

## 👁️ 視覺輔助與互動內容


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-10">
<h3 class="text-xl font-bold font-headline mb-2">The Agentic Loop</h3>
<p class="text-sm text-on-surface-variant">Watch an agent cycle through its workflow to solve a task.</p>
</div>
<div class="flex flex-col md:flex-row gap-8 items-center justify-between px-10 relative">
<!-- Connecting Arrows Background -->
<div class="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-surface-container opacity-40 -translate-y-1/2 -z-10"></div>
<!-- Step 1: Perceive -->
<div id="step-perceive" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">👁️</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Perceive</div>
</div>
<!-- Step 2: Plan -->
<div id="step-plan" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">🧠</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Plan</div>
</div>
<!-- Step 3: Act -->
<div id="step-act" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">⚡</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Act</div>
</div>
<!-- Step 4: Observe -->
<div id="step-observe" class="z-10 flex flex-col items-center gap-4 group">
<div class="w-16 h-16 rounded-full bg-surface-container-lowest border-4 border-outline-variant flex items-center justify-center text-2xl transition-all duration-500 shadow-sm">🔍</div>
<div class="text-[10px] font-black uppercase tracking-widest opacity-60">Observe</div>
</div>
</div>
<!-- Status Message Display -->
<div class="mt-12 bg-surface-container-lowest border-2 border-primary/20 rounded-xl p-6 min-h-[140px] flex flex-col justify-center animate-fade-in relative overflow-hidden">
<div class="absolute top-0 left-0 w-1 h-full bg-primary opacity-20"></div>
<div id="loop-status-title" class="text-[10px] font-black uppercase tracking-widest text-primary mb-2 opacity-60">Ready to Start</div>
<div id="loop-status-desc" class="text-sm font-bold leading-relaxed italic text-on-surface">
Task: "Research latest AI safety news and summarize findings."
</div>
<button onclick="startLoop()" id="start-loop-btn" class="mt-4 px-6 py-2 bg-primary text-on-primary rounded-full text-xs font-bold hover:shadow-lg transition-all self-start">Start Loop →</button>
</div>
</div>
<script>
const loopSteps = [
{ id: 'perceive', title: 'Perceive', desc: 'Agent reads the request: "Research AI safety news". Recognizes need for web search.' },
{ id: 'plan', title: 'Plan', desc: 'Strategy: (1) Use Google Search for news, (2) Filter results from last 24h, (3) Extract key points.' },
{ id: 'act', title: 'Act', desc: 'Calling tool: <strong>web_search("latest AI safety papers March 2026")</strong>' },
{ id: 'observe', title: 'Observe', desc: 'Found 5 relevant articles. One is behind a paywall—need to adjust plan to find alternative source.' },
{ id: 'perceive', title: 'Perceive (Cycle 2)', desc: 'Processes search results. Identifies the need for a summary tool.' },
{ id: 'plan', title: 'Plan (Cycle 2)', desc: 'Analyze the 4 accessible papers and synthesize into 3 bullet points.' },
{ id: 'act', title: 'Act (Cycle 2)', desc: 'Generating final summary based on retrieved context.' },
{ id: 'observe', title: 'Observe (Cycle 2)', desc: 'Summary complete. Quality check passed. Delivering to user.' }
];
let currentStep = 0;
let isPlaying = false;
function startLoop() {
if (isPlaying) return;
isPlaying = true;
document.getElementById('start-loop-btn').disabled = true;
document.getElementById('start-loop-btn').classList.add('opacity-0');
currentStep = 0;
runStep();
}
function runStep() {
if (currentStep >= loopSteps.length) {
isPlaying = false;
document.getElementById('start-loop-btn').disabled = false;
document.getElementById('start-loop-btn').classList.remove('opacity-0');
document.getElementById('start-loop-btn').textContent = 'Restart Loop →';
return;
}
const step = loopSteps[currentStep];
const prevStep = loopSteps[currentStep - 1];
// Reset visual highlight on previous step
if (prevStep) {
const prevEl = document.getElementById('step-' + prevStep.id.split(' ')[0]);
prevEl.querySelector('div').classList.remove('border-primary', 'bg-primary/10', 'scale-110');
prevEl.querySelector('div').classList.add('border-outline-variant');
}
// Highlight current step
const currEl = document.getElementById('step-' + step.id.split(' ')[0]);
currEl.querySelector('div').classList.add('border-primary', 'bg-primary/10', 'scale-110');
currEl.querySelector('div').classList.remove('border-outline-variant');
// Update status display
const title = document.getElementById('loop-status-title');
const desc = document.getElementById('loop-status-desc');
title.classList.remove('animate-fade-in');
desc.classList.remove('animate-fade-in');
void title.offsetWidth; // trigger reflow
title.classList.add('animate-fade-in');
desc.classList.add('animate-fade-in');
title.textContent = step.title;
desc.innerHTML = step.desc;
currentStep++;
setTimeout(runStep, 2000);
}
</script>

</div>


## 📝 關鍵概念

- **感知 (Perceive)：** 讀取任務內容及目前的環境狀態。
- **規劃 (Plan)：** 決定要使用哪些工具以及採取哪些步驟。
- **行動 (Act)：** 執行工具（例如進行網頁搜尋或編輯文件）。
- **觀察 (Observe)：** 查看行動後的結果。是否成功？是否獲得了我們需要的資訊？

<div class="not-prose callout callout-dyk">

這個循環會一直持續，直到智能代理認為任務已完成，或者觸發了安全限制（例如超時或達到最大步驟數）。

</div>

<div class="not-prose my-12">
<!--
Quiz Box Component
Generated by build.js from :::quiz blocks in markdown.
-->
<div id="quiz-06-04" class="quiz-container bg-surface-container border border-outline-variant rounded-xl p-6 mt-10">
    <div class="font-bold mb-4 flex items-center gap-2">
        <span>🧠</span>
        <span>QUIZ</span>
    </div>
    <p class="mb-4">為什麼智能代理 (Agents) 適合處理複雜任務？</p>
    <div class="space-y-2">
                <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            因為它們比普通模型快得多
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="false">
            因為它們能提前預測所有可能的錯誤
        </div>
        <div class="quiz-option bg-surface-container-lowest border border-outline-variant p-3 rounded-lg cursor-pointer hover:border-primary transition-all" data-correct="true">
            因為它們會在每一步之後觀察結果並動態調整計劃
        </div>
    </div>
    <div class="quiz-feedback hidden mt-4 p-4 rounded-lg"></div>
</div>

</div>
