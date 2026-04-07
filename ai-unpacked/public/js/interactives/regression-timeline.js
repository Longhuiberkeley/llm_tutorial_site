export function init(config) {
const { timepoints } = config;

window.selectTimepoint = function(index, btn) {
const tp = timepoints[index];
// Update circle highlights
document.querySelectorAll('.es-node').forEach((node, i) => {
const circle = node.querySelector('.es-circle');
circle.classList.remove('border-primary', 'border-orange-400', 'border-green-500', 'scale-110', 'shadow-md');
circle.classList.add('border-outline-variant');
});
const circle = btn.querySelector('.es-circle');
circle.classList.remove('border-outline-variant');
circle.classList.add(tp.color, 'scale-110', 'shadow-md');
// Build detail panel
const detail = document.getElementById('es-detail');
detail.className = 'border-2 rounded-xl p-6 min-h-[180px] transition-all duration-300 ' + tp.color + ' ' + tp.bgColor;
let html = '<div class="flex flex-col sm:flex-row gap-6">';
// Left: accuracy gauge
html += '<div class="flex flex-col items-center justify-center min-w-[100px]">';
html += '<div class="text-4xl font-black" style="color:' + tp.barColor + '">' + tp.accuracy + '%</div>';
html += '<div class="text-xs font-bold text-on-surface-variant mt-1">accuracy</div>';
html += '<div class="mt-3 w-20 h-3 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant">';
html += '<div class="h-full rounded-full transition-all duration-700" style="width:' + tp.accuracy + '%;background:' + tp.barColor + '"></div>';
html += '</div></div>';
// Right: metrics + note
html += '<div class="flex-1">';
html += '<div class="font-bold text-sm mb-3">' + tp.label + '</div>';
html += '<div class="space-y-2 mb-3">';
tp.metrics.forEach(m => {
html += '<div class="flex items-center gap-2">';
html += '<span class="text-xs text-on-surface-variant w-24 shrink-0">' + m.label + '</span>';
html += '<div class="flex-1 h-2 bg-surface-container-low rounded-full overflow-hidden border border-outline-variant">';
html += '<div class="h-full rounded-full" style="width:' + m.value + '%;background:' + tp.barColor + '"></div>';
html += '</div>';
html += '<span class="text-[10px] text-on-surface-variant w-20 text-right">' + m.note + '</span>';
html += '</div>';
});
html += '</div>';
html += '<div class="text-[11px] font-bold mb-1 text-on-surface">' + tp.status + '</div>';
html += '<p class="text-[11px] text-on-surface-variant leading-relaxed">' + tp.note + '</p>';
html += '</div></div>';
detail.innerHTML = html;
};
}
