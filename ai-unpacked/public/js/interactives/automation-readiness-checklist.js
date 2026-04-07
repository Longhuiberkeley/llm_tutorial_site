export function init(config) {
const checked = [false, false, false, false, false, false, false, false];

window.toggleCheck = function(index) {
checked[index] = !checked[index];
updateChecklist();
};

function updateChecklist() {
const count = checked.filter(Boolean).length;
// Update each checkbox visual
checked.forEach((isChecked, i) => {
const box = document.getElementById('ac-box-' + i);
const item = document.getElementById('ac-item-' + i);
const checkmark = box.querySelector('span');
if (isChecked) {
box.style.backgroundColor = '#4CAF50';
box.style.borderColor = '#4CAF50';
checkmark.style.opacity = '1';
item.classList.add('border-green-300');
item.classList.remove('border-outline-variant');
} else {
box.style.backgroundColor = '';
box.style.borderColor = '';
checkmark.style.opacity = '0';
item.classList.remove('border-green-300');
item.classList.add('border-outline-variant');
}
});
// Update progress bar
const pct = Math.round((count / 8) * 100);
const bar = document.getElementById('ac-progress-bar');
bar.style.width = pct + '%';
document.getElementById('ac-progress-text').textContent = count + ' of 8 complete';
document.getElementById('ac-progress-pct').textContent = pct + '%';
if (count === 8) {
bar.style.background = '#4CAF50';
} else {
bar.style.background = 'var(--accent)';
}
// Update status badge
const status = document.getElementById('ac-status');
if (count === 0) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-surface-container-lowest border border-outline-variant text-on-surface-variant';
status.textContent = config.statusTexts.zero;
} else if (count === 8) {
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-green-50 text-green-700 border border-green-200';
status.textContent = config.statusTexts.complete;
} else {
const gaps = 8 - count;
status.className = 'mt-6 rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-amber-50 text-amber-700 border border-amber-200';
status.textContent = config.statusTexts.partial(gaps);
}
}
}
