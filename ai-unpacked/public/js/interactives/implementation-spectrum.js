export function init(config) {
const { stages } = config;

function render(idx) {
var s = stages[idx];
var panel = document.getElementById('spectrum-panel');
// Update dots
for (var i = 0; i < 5; i++) {
var dot = document.getElementById('stage-dot-' + i);
if (i === idx) {
dot.style.transform = 'scale(1.4)';
dot.style.borderColor = stages[i].color;
dot.style.boxShadow = '0 0 0 4px ' + stages[i].color + '33';
} else {
dot.style.transform = 'scale(1)';
dot.style.borderColor = 'white';
dot.style.boxShadow = '0 1px 3px rgba(0,0,0,0.2)';
}
}
panel.innerHTML =
'<div class="flex items-start justify-between mb-4">' +
'<div>' +
'<div class="text-xl font-bold mb-1">' + s.emoji + ' ' + s.name + '</div>' +
'<p class="text-sm text-on-surface-variant">' + s.desc + '</p>' +
'</div>' +
'<div class="text-right shrink-0 ml-4">' +
'<div class="text-xl">' + s.cost + '</div>' +
'<div class="text-xs text-on-surface/50 mt-0.5">' + s.costLabel + '</div>' +
'</div>' +
'</div>' +
'<div class="flex items-center gap-3 mb-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50">Complexity</div>' +
'<div class="flex-1 bg-surface-container rounded-full h-2.5 overflow-hidden">' +
'<div class="h-full rounded-full transition-all" style="width: ' + ((idx + 1) * 20) + '%; background: ' + s.color + ';"></div>' +
'</div>' +
'<div class="text-xs font-bold" style="color: ' + s.color + ';">' + s.complexity + '</div>' +
'</div>' +
'<div class="grid sm:grid-cols-2 gap-4">' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">\uD83D\uDCCC Typical use case</div>' +
'<p class="text-sm leading-relaxed">' + s.useCase + '</p>' +
'</div>' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest mb-2" style="color: ' + s.color + ';">\u26A0\uFE0F Key risk</div>' +
'<p class="text-sm leading-relaxed">' + s.risk + '</p>' +
'</div>' +
'</div>';
}
window.selectStage = function(idx) { render(idx); };
render(0); // Default to first position
}
