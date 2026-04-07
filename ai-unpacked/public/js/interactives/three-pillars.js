export function init(config) {
const { pillarData, warningMessages, roofLabels, statusMessages } = config;

const pillarState = [true, true, true];

window.togglePillar = function(index) {
pillarState[index] = !pillarState[index];
updatePillars();
};

window.togglePillarDetail = function(index) {
const detail = document.getElementById('dt-detail');
const data = pillarData[index];
if (!detail.classList.contains('hidden') && document.getElementById('dt-detail-title').textContent.includes(data.name)) {
detail.classList.add('hidden');
return;
}
document.getElementById('dt-detail-title').textContent = data.emoji + ' ' + data.name;
document.getElementById('dt-detail-desc').textContent = data.desc;
document.getElementById('dt-detail-examples').textContent = data.examples;
detail.classList.remove('hidden');
detail.classList.remove('animate-fade-in');
void detail.offsetWidth;
detail.classList.add('animate-fade-in');
};

function updatePillars() {
const activeCount = pillarState.filter(Boolean).length;
const missingIndices = pillarState.map((v, i) => v ? null : i).filter(v => v !== null);
// Update pillar visuals
pillarState.forEach((active, i) => {
const pillar = document.getElementById('dt-pillar-' + i);
const toggle = document.getElementById('dt-toggle-' + i);
const data = pillarData[i];
if (active) {
pillar.style.opacity = '1';
pillar.style.transform = 'scale(1)';
toggle.textContent = data.emoji + ' ' + data.name + ': ON';
toggle.classList.remove('bg-surface-container-low', 'text-on-surface-variant', 'border-outline-variant');
toggle.classList.add('border-primary', 'text-primary', 'bg-primary/5');
} else {
pillar.style.opacity = '0.25';
pillar.style.transform = 'scale(0.95)';
toggle.textContent = data.emoji + ' ' + data.name + ': OFF';
toggle.classList.add('bg-surface-container-low', 'text-on-surface-variant', 'border-outline-variant');
toggle.classList.remove('border-primary', 'text-primary', 'bg-primary/5');
}
});
// Update roof
const roof = document.getElementById('dt-roof');
const roofLabel = document.getElementById('dt-roof-label');
if (activeCount === 3) {
roof.classList.remove('opacity-60');
roof.classList.add('bg-primary');
roof.style.transform = 'rotate(0deg)';
roofLabel.textContent = roofLabels.all;
} else if (activeCount === 2) {
roof.classList.add('opacity-60');
roof.style.transform = 'rotate(-1deg)';
roofLabel.textContent = roofLabels.two;
} else if (activeCount === 1) {
roof.classList.add('opacity-60');
roof.style.transform = 'rotate(-2.5deg)';
roofLabel.textContent = roofLabels.one;
} else {
roof.classList.add('opacity-60');
roof.style.transform = 'rotate(-4deg)';
roofLabel.textContent = roofLabels.zero;
}
// Update status message
const status = document.getElementById('dt-status');
if (activeCount === 3) {
status.className = 'rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-green-50 text-green-700 border border-green-200';
status.textContent = statusMessages.all;
} else {
status.className = 'rounded-xl p-4 text-center text-sm font-bold transition-all duration-500 bg-red-50 text-red-700 border border-red-200';
const key = missingIndices.join(',');
status.textContent = warningMessages[key] || statusMessages.default;
}
}
}
