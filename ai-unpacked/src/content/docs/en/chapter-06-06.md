---
title: "6.6 Configuring a Good Agent"
description: "How to make agents controllable and useful."
chapter: "Chapter 6"
pageId: "06-06"
---

## 🎯 Core Goals
- Understand that a good agent is a *configured* agent, not just an LLM with tools.
- Learn the four levers that make agent behavior predictable and useful.

<div class="not-prose callout callout-tldr">

An agent without configuration is an agent out of control. In practice, the best agents are carefully scoped: you tell them exactly what tools they can use, what domain they work in, what they're allowed to access, and what role they play.

</div>

## 👁️ Visuals & Interactives


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


## 📝 The Four Configuration Levers

A well-configured agent is **controllable, useful, and predictable** because someone has explicitly defined:

- **Tools** — What actions can it take? (web search, calculator, send email, read files) The narrower the list, the less it can go wrong.
- **Domain** — What is it an expert in? A customer support agent should know your product deeply, not be a generalist that goes off-topic.
- **Access Rights** — What is it *allowed* to touch? Read-only means it can look but not change. Read-write means it can make changes. Admin access means it can do almost anything — use sparingly.
- **Role & Skills** — What is its "job title"? A role like "senior travel planner" or "finance analyst" shapes how it reasons, what tone it takes, and what domain knowledge it draws on.

The more precisely you define these four levers, the more reliably the agent performs — and the easier it is to catch when something goes wrong.

<div class="not-prose callout callout-tip">

**Reflect:** Think about tools like Perplexity Deep Research or Google NotebookLM. What tools do you think they have access to? What might their system prompt say? What domain or access level do you think they're restricted to? There are no wrong answers — this is exactly the kind of thinking that makes you a better AI user.

</div>

<div id="quiz-06-06" class="not-prose quiz-container my-12" data-quiz="06-06"></div>
