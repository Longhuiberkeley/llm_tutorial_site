export function init(config) {
const { steps } = config;

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
}
