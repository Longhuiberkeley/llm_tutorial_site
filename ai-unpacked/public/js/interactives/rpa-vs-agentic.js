export function init(config) {
const { tabs, hybridHtml } = config;

function renderTab(idx) {
var panel = document.getElementById('rpa-panel');
// Update button styles
for (var i = 0; i < 3; i++) {
var btn = document.getElementById('rpa-btn-' + i);
if (i === idx) {
btn.className = 'flex-1 py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer bg-primary text-on-primary border-primary';
} else {
btn.className = 'flex-1 py-3 px-4 rounded-lg text-sm font-bold border-2 transition-all cursor-pointer bg-surface-container-lowest border-outline-variant text-on-surface';
}
}
// Render Hybrid tab
if (idx === 2) {
panel.innerHTML = hybridHtml;
return;
}
// Render RPA or Agentic tab
var t = tabs[idx];
panel.innerHTML =
'<div class="flex items-start gap-4 mb-5">' +
'<div class="text-4xl shrink-0">' + t.emoji + '</div>' +
'<div>' +
'<div class="text-lg font-bold mb-1">' + t.metaphor + '</div>' +
'<p class="text-sm text-on-surface-variant leading-relaxed">' + t.desc + '</p>' +
'</div>' +
'</div>' +
'<div class="grid sm:grid-cols-2 gap-4 mb-5">' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest mb-2" style="color: #4CAF50;">\u2705 Strengths</div>' +
'<ul class="text-sm space-y-1.5">' +
t.strengths.map(function(s) {
return '<li class="flex items-start gap-2"><span class="shrink-0 mt-0.5" style="color: #4CAF50;">\u25B8</span>' + s + '</li>';
}).join('') +
'</ul>' +
'</div>' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest mb-2" style="color: #E53935;">\u26A0\uFE0F Weaknesses</div>' +
'<ul class="text-sm space-y-1.5">' +
t.weaknesses.map(function(w) {
return '<li class="flex items-start gap-2"><span class="shrink-0 mt-0.5" style="color: #E53935;">\u25B8</span>' + w + '</li>';
}).join('') +
'</ul>' +
'</div>' +
'</div>' +
'<div class="border-t border-outline-variant pt-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">Best for</div>' +
'<div class="flex flex-wrap gap-2">' +
t.bestFor.map(function(b) {
return '<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">' + b + '</span>';
}).join('') +
'</div>' +
'</div>';
}
window.selectRpaTab = function(idx) { renderTab(idx); };
renderTab(0); // Default to RPA
}
