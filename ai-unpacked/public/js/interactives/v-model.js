export function init(config) {
const { phases } = config;

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
html += '<div class="font-black text-[9px] uppercase tracking-wider text-on-surface-variant mb-1">WHAT you do</div>';
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
}
