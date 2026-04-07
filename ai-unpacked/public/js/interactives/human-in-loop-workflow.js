export function init(config) {
const { hitlSteps, trustLevels } = config;

let hitlCurrentStep = 0;
let hitlIsPlaying = false;

window.startHitl = function() {
if (hitlIsPlaying) return;
hitlIsPlaying = true;
const btn = document.getElementById('hitl-start-btn');
btn.disabled = true;
btn.classList.add('opacity-0');
// Hide trust section on restart
document.getElementById('hitl-trust-section').classList.add('hidden');
// Reset all steps
for (let i = 0; i < 5; i++) {
const circle = document.querySelector('#hitl-step-' + i + ' .hitl-circle');
circle.classList.remove('border-primary', 'scale-110');
circle.style.background = '';
circle.classList.add('border-outline-variant');
}
hitlCurrentStep = 0;
runHitlStep();
};

function runHitlStep() {
if (hitlCurrentStep >= hitlSteps.length) {
hitlIsPlaying = false;
const btn = document.getElementById('hitl-start-btn');
btn.disabled = false;
btn.classList.remove('opacity-0');
btn.textContent = '\u25B6 Replay';
// Show gradual trust section
const trustSection = document.getElementById('hitl-trust-section');
trustSection.classList.remove('hidden');
trustSection.classList.remove('animate-fade-in');
void trustSection.offsetWidth;
trustSection.classList.add('animate-fade-in');
// Default select "Review Everything"
selectTrust(0, document.getElementById('trust-btn-0'));
return;
}
const step = hitlSteps[hitlCurrentStep];
// Reset previous step highlight (keep it completed but not active)
if (hitlCurrentStep > 0) {
const prevCircle = document.querySelector('#hitl-step-' + (hitlCurrentStep - 1) + ' .hitl-circle');
prevCircle.classList.remove('scale-110');
prevCircle.style.background = 'var(--accent)';
prevCircle.style.opacity = '0.15';
prevCircle.classList.remove('border-primary');
prevCircle.classList.add('border-outline-variant');
}
// Highlight current step
const circle = document.querySelector('#hitl-step-' + hitlCurrentStep + ' .hitl-circle');
circle.classList.remove('border-outline-variant');
circle.classList.add('border-primary', 'scale-110');
circle.style.background = '';
circle.style.opacity = '';
// Update status display
const title = document.getElementById('hitl-status-title');
const desc = document.getElementById('hitl-status-desc');
title.classList.remove('animate-fade-in');
desc.classList.remove('animate-fade-in');
void title.offsetWidth;
title.classList.add('animate-fade-in');
desc.classList.add('animate-fade-in');
title.textContent = step.title;
desc.textContent = step.desc;
hitlCurrentStep++;
setTimeout(runHitlStep, 2200);
}

function selectTrust(index, btn) {
const trust = trustLevels[index];
// Reset all trust buttons
document.querySelectorAll('.trust-btn').forEach(b => {
b.classList.remove('border-primary', 'bg-primary/10');
b.classList.add('border-outline-variant');
});
// Highlight selected
btn.classList.remove('border-outline-variant');
btn.classList.add('border-primary', 'bg-primary/10');
// Update detail
const detail = document.getElementById('trust-detail');
detail.classList.remove('animate-fade-in');
void detail.offsetWidth;
detail.classList.add('animate-fade-in');
detail.innerHTML = trust.desc;
}
window.selectTrust = selectTrust;
}
