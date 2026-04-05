---
title: "6.6 配置一個好的代理"
description: "如何讓代理可控且有用。"
chapter: "第 6 章"
pageId: "06-06"
---

## 🎯 核心目標
- 了解一個好的代理 (Agent) 是一個經過 *配置 (Configured)* 的代理，而不僅僅是一個帶有工具的 LLM。
- 學習讓代理行為可預測且有用的四個槓桿。

<div class="not-prose callout callout-tldr">

沒有配置的代理是失控的代理。在實踐中，最好的代理都有精心定義的範圍：你準確地告訴它們可以使用什麼工具、在哪個領域工作、允許訪問什麼以及扮演什麼角色。

</div>

## 👁️ 視覺效果與互動


<div class="not-prose">
<div class="bg-surface-container-low rounded-xl p-8 mb-8 max-w-4xl mx-auto shadow-sm">
<div class="text-center mb-8">
<h3 class="text-xl font-bold font-headline mb-2">Agent Configuration Panel</h3>
<p class="text-sm text-on-surface-variant">Define the four levers that make an agent controllable and useful.</p>
</div>
<div class="grid md:grid-cols-2 gap-8 items-start">
<!-- Configuration -->
<div class="space-y-6">
<!-- 1. Domain -->
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">1. Domain (What it knows)</div>
<div class="flex gap-2">
<button onclick="setAgentDomain('Research', this)" class="domain-btn flex-1 p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-primary transition-all text-xs font-bold active:scale-95">🔍 Research</button>
<button onclick="setAgentDomain('Customer Support', this)" class="domain-btn flex-1 p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-primary transition-all text-xs font-bold active:scale-95">💬 Support</button>
<button onclick="setAgentDomain('Finance', this)" class="domain-btn flex-1 p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-primary transition-all text-xs font-bold active:scale-95">📊 Finance</button>
</div>
</div>
<!-- 2. Tools -->
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">2. Tools (What it can do)</div>
<div class="grid grid-cols-2 gap-2">
<button onclick="toggleAgentTool('Web Search', this)" class="tool-btn p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-accent transition-all text-xs font-bold active:scale-95">🌐 Search</button>
<button onclick="toggleAgentTool('Calculator', this)" class="tool-btn p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-accent transition-all text-xs font-bold active:scale-95">🧮 Math</button>
<button onclick="toggleAgentTool('File Reader', this)" class="tool-btn p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-accent transition-all text-xs font-bold active:scale-95">📁 Files</button>
<button onclick="toggleAgentTool('Email', this)" class="tool-btn p-3 rounded-lg border border-outline-variant bg-surface-container-lowest hover:border-accent transition-all text-xs font-bold active:scale-95">✉️ Email</button>
</div>
</div>
<!-- 3. Access Level -->
<div>
<div class="text-[10px] font-black uppercase tracking-widest text-on-surface-variant mb-3 opacity-60">3. Access Rights (What it can touch)</div>
<select id="agent-access" onchange="updateAgentPreview()" class="w-full p-3 rounded-lg border border-outline-variant bg-surface-container-lowest text-xs font-bold">
<option value="readonly">Read-Only — can look, not change</option>
<option value="readwrite">Read-Write — can make changes</option>
<option value="admin">Admin — full control (use carefully!)</option>
</select>
</div>
</div>
<!-- Preview -->
<div class="bg-surface-container-lowest border-2 border-primary rounded-xl p-6 shadow-md min-h-[380px] flex flex-col relative overflow-hidden">
<div class="absolute top-0 right-0 p-4 opacity-10 text-6xl">🤖</div>
<div class="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Agent Manifest</div>
<div class="space-y-4 flex-grow">
<div>
<div class="text-[9px] font-bold text-on-surface-variant uppercase mb-1">Role & Skills</div>
<div id="preview-role" class="text-xs italic bg-surface-container p-3 rounded leading-relaxed border-l-4 border-primary">
Select a domain to define the agent's role.
</div>
</div>
<div>
<div class="text-[9px] font-bold text-on-surface-variant uppercase mb-1">Enabled Tools</div>
<div id="preview-tools" class="flex flex-wrap gap-1">
<span class="text-[9px] px-2 py-0.5 bg-surface-container rounded-full opacity-40 italic">No tools selected</span>
</div>
</div>
<div>
<div class="text-[9px] font-bold text-on-surface-variant uppercase mb-1">Access Level</div>
<div id="preview-access" class="text-[10px] font-bold text-on-surface-variant italic opacity-60">Read-Only</div>
</div>
</div>
<button onclick="testAgent()" id="test-agent-btn" class="mt-6 w-full py-3 bg-primary text-on-primary rounded-xl font-bold hover:shadow-xl transition-all active:scale-95">Deploy & Test →</button>
</div>
</div>
<!-- Live Test Area -->
<div id="test-area" class="hidden mt-8 animate-fade-in">
<div class="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
<div class="flex items-center gap-3 mb-4">
<div class="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-white text-xs font-bold">U</div>
<div id="test-prompt" class="bg-surface-container rounded-xl px-4 py-2 text-xs">Find recent data on Apple's revenue and summarize it.</div>
</div>
<div id="agent-response" class="space-y-3 pl-11">
<!-- Agent steps show up here -->
</div>
</div>
</div>
</div>
<script>
let selectedDomain = '';
let selectedTools = [];
let selectedAccess = 'readonly';
const domainRoles = {
'Research': 'You are a senior research analyst. Your job is to find accurate, well-sourced information and present concise summaries. You do not speculate beyond available data.',
'Customer Support': 'You are a friendly customer support specialist. You help users resolve issues clearly and escalate when needed. You always stay on-topic for this product.',
'Finance': 'You are a financial analysis assistant. You work with numbers, reports, and market data. You do not give investment advice — you present data for human review.'
};
const accessLabels = {
'readonly': '🔍 Read-Only — can observe and report, cannot make changes',
'readwrite': '✏️ Read-Write — can make changes within its domain',
'admin': '⚠️ Admin — full control, use with caution'
};
function setAgentDomain(domain, btn) {
selectedDomain = domain;
document.querySelectorAll('.domain-btn').forEach(b => b.classList.remove('border-primary', 'bg-primary/5'));
btn.classList.add('border-primary', 'bg-primary/5');
updateAgentPreview();
}
function toggleAgentTool(tool, btn) {
const index = selectedTools.indexOf(tool);
if (index > -1) {
selectedTools.splice(index, 1);
btn.classList.remove('border-accent', 'bg-accent/5');
} else {
selectedTools.push(tool);
btn.classList.add('border-accent', 'bg-accent/5');
}
updateAgentPreview();
}
function updateAgentPreview() {
selectedAccess = document.getElementById('agent-access').value;
const roleDiv = document.getElementById('preview-role');
roleDiv.textContent = selectedDomain ? domainRoles[selectedDomain] : 'Select a domain to define the agent\'s role.';
const toolsDiv = document.getElementById('preview-tools');
if (selectedTools.length === 0) {
toolsDiv.innerHTML = '<span class="text-[9px] px-2 py-0.5 bg-surface-container rounded-full opacity-40 italic">No tools selected</span>';
} else {
toolsDiv.innerHTML = selectedTools.map(t => `<span class="text-[9px] px-2 py-0.5 bg-accent/10 text-accent font-bold rounded-full border border-accent/20">${t}</span>`).join('');
}
document.getElementById('preview-access').textContent = accessLabels[selectedAccess];
}
function testAgent() {
const area = document.getElementById('test-area');
const response = document.getElementById('agent-response');
const btn = document.getElementById('test-agent-btn');
const prompts = {
'Research': 'Find recent data on Apple\'s revenue and summarize it.',
'Customer Support': 'A customer says their order hasn\'t arrived. What do you do?',
'Finance': 'Analyze Apple\'s 2023 revenue vs the previous year.'
};
document.getElementById('test-prompt').textContent = prompts[selectedDomain] || 'Find recent data on Apple\'s revenue and summarize it.';
area.classList.remove('hidden');
response.innerHTML = '<div class="text-[10px] font-bold text-primary animate-pulse italic">Agent thinking...</div>';
btn.disabled = true;
btn.style.opacity = '0.5';
setTimeout(() => {
let html = '';
if (!selectedDomain) {
html = '<div class="text-[10px] text-red-500 font-mono italic">⚠️ No domain configured — agent has no role or expertise. Configure a domain first.</div>';
} else {
if (selectedTools.includes('Web Search')) {
html += '<div class="flex items-center gap-2 text-[10px] text-accent font-mono"><span class="material-symbols-outlined text-xs">search</span> CALL: web_search("' + selectedDomain + ' task query")</div>';
html += '<div class="flex items-center gap-2 text-[10px] text-green-600 font-mono mb-2"><span class="material-symbols-outlined text-xs">check</span> RESULT: Relevant data retrieved ✓</div>';
} else {
html += '<div class="text-[10px] text-red-500 font-mono mb-2 italic">⚠️ No search tool — agent must rely on training data only.</div>';
}
if (selectedAccess === 'readonly') {
html += '<div class="text-[10px] text-on-surface-variant font-mono mb-2 italic">ℹ️ Read-Only mode: generating report only, no changes made.</div>';
} else if (selectedAccess === 'admin') {
html += '<div class="text-[10px] text-orange-500 font-mono mb-2 italic">⚠️ Admin access active — all system actions are permitted.</div>';
}
html += `<div class="bg-primary/5 border border-primary/10 rounded-xl p-3 text-xs italic font-bold">
✅ Task completed within <strong>${selectedDomain}</strong> domain. Response reflects configured role and access level.
</div>`;
}
response.innerHTML = html;
btn.disabled = false;
btn.style.opacity = '1';
}, 1500);
}
</script>

</div>


## 📝 四個配置槓桿

一個配置良好的代理是 **可控、有用且可預測的**，因為有人明確定義了：

- **工具 (Tools)** — 它能採取什麼行動？（網頁搜尋、計算機、傳送電子郵件、讀取檔案）。列表越窄，出錯的可能性就越小。
- **領域 (Domain)** — 它是什麼方面的專家？客戶服務代理應該深入了解你的產品，而不是一個會離題的通才。
- **訪問權限 (Access Rights)** — 它 *被允許* 接觸什麼？「唯讀 (Read-only)」意味著它只能查看但不能更改。「讀寫 (Read-write)」意味著它可以進行更改。「管理員訪問權限 (Admin access)」意味著它可以執行幾乎任何操作——請謹慎使用。
- **角色與技能 (Role & Skills)** — 它的「職位名稱」是什麼？像「資深旅遊規劃師」或「財務分析師」這樣的角色會塑造它的推理方式、採用的語氣以及它利用的領域知識。

你對這四個槓桿的定義越精確，代理的執行就越可靠——當出錯時也就越容易發現。

<div class="not-prose callout callout-tip">

**反思：** 想想 Perplexity Deep Research 或 Google NotebookLM 等工具。你認為它們可以訪問哪些工具？它們的系統提示 (System prompt) 可能會說什麼？你認為它們被限制在什麼領域或訪問級別？沒有錯誤答案——這正是讓你成為更好的 AI 使用者的那種思考方式。

</div>

<div id="quiz-06-06" class="not-prose quiz-container my-12" data-quiz="06-06"></div>
