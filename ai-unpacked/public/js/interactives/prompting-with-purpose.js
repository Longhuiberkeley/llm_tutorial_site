export function init(config) {
const TOTAL = config.TOTAL || 14;
const checked = new Array(TOTAL).fill(false);
const phaseOpen = [true, true, true, true];

window.togglePhase = function(index, btn) {
phaseOpen[index] = !phaseOpen[index];
const body = document.getElementById('rg-phase-body-' + index);
const toggle = document.getElementById('rg-phase-toggle-' + index);
body.classList.toggle('hidden', !phaseOpen[index]);
toggle.textContent = phaseOpen[index] ? '\u25BC' : '\u25B6';
};

window.toggleCheck = function(index, btn) {
checked[index] = !checked[index];
const box = document.getElementById('rg-box-' + index);
const item = document.getElementById('rg-item-' + index);
const checkmark = box;
if (checked[index]) {
box.style.backgroundColor = '#4CAF50';
box.style.borderColor = '#4CAF50';
box.style.color = 'white';
item.classList.add('opacity-70');
} else {
box.style.backgroundColor = '';
box.style.borderColor = '';
box.style.color = '';
item.classList.remove('opacity-70');
}
const count = checked.filter(Boolean).length;
const pct = Math.round((count / TOTAL) * 100);
const bar = document.getElementById('rg-progress-bar');
bar.style.width = pct + '%';
document.getElementById('rg-progress-text').textContent = count + ' of ' + TOTAL + ' complete';
document.getElementById('rg-progress-pct').textContent = pct + '%';
if (count === TOTAL) bar.style.background = '#4CAF50';
else bar.style.background = 'var(--accent)';
const status = document.getElementById('rg-status');
if (count === 0) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-surface-container-lowest border border-outline-variant text-on-surface-variant';
status.textContent = 'Work through all four phases before starting. Check each item as you confirm it.';
} else if (count === TOTAL) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-green-50 text-green-700 border border-green-200';
status.textContent = 'All phases complete. Your foundation is solid \u2014 proceed with confidence.';
} else if (pct >= 75) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-primary/5 border border-primary/30 text-primary';
status.textContent = 'Good progress \u2014 ' + (TOTAL - count) + ' item' + (TOTAL - count > 1 ? 's' : '') + ' remaining before you proceed.';
} else {
const gaps = TOTAL - count;
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-amber-50 text-amber-700 border border-amber-200';
status.textContent = gaps + ' item' + (gaps > 1 ? 's' : '') + ' remaining \u2014 don\'t skip ahead. The phase gates exist for a reason.';
}
};
}
