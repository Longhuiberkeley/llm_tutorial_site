export function init(config) {
const { primitives, animSteps } = config;

var isPlaying = false;
var currentAnimStep = 0;

function renderDetail(idx) {
var p = primitives[idx];
var panel = document.getElementById('prim-detail');
panel.innerHTML =
'<div class="flex items-start gap-4 mb-4">' +
'<div class="text-3xl shrink-0">' + p.emoji + '</div>' +
'<div>' +
'<div class="text-lg font-bold mb-1">' + p.name + '</div>' +
'<p class="text-sm text-on-surface-variant leading-relaxed">' + p.desc + '</p>' +
'</div>' +
'</div>' +
'<div class="grid sm:grid-cols-2 gap-4">' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">What it does</div>' +
'<ul class="text-sm space-y-1.5">' +
p.details.map(function(d) {
return '<li class="flex items-start gap-2"><span class="shrink-0 mt-0.5 text-primary">\u25B8</span>' + d + '</li>';
}).join('') +
'</ul>' +
'</div>' +
'<div class="bg-surface-container rounded-xl p-4">' +
'<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">Analogy</div>' +
'<p class="text-sm leading-relaxed italic">' + p.analogy + '</p>' +
'</div>' +
'</div>';
}

function highlightCard(idx) {
var cards = document.querySelectorAll('.prim-card');
cards.forEach(function(card, i) {
if (i === idx) {
card.classList.remove('border-outline-variant');
card.classList.add('border-primary', 'scale-105');
card.style.boxShadow = '0 4px 12px rgba(143, 72, 47, 0.15)';
} else {
card.classList.remove('border-primary', 'scale-105');
card.classList.add('border-outline-variant');
card.style.boxShadow = 'none';
}
});
}

function clearCardHighlights() {
var cards = document.querySelectorAll('.prim-card');
cards.forEach(function(card) {
card.classList.remove('border-primary', 'scale-105');
card.classList.add('border-outline-variant');
card.style.boxShadow = 'none';
});
}

function runAnimStep() {
if (currentAnimStep >= animSteps.length) {
isPlaying = false;
var btn = document.getElementById('prim-play-btn');
btn.disabled = false;
btn.textContent = '\u25B6 Replay Demo';
btn.classList.remove('opacity-50');
return;
}
var step = animSteps[currentAnimStep];
if (step.highlight >= 0) {
highlightCard(step.highlight);
} else {
clearCardHighlights();
}
var label = document.getElementById('prim-status-label');
var text = document.getElementById('prim-status-text');
label.style.opacity = '0';
text.style.opacity = '0';
setTimeout(function() {
label.textContent = step.label;
text.textContent = step.text;
label.style.opacity = '0.6';
text.style.opacity = '1';
}, 150);
currentAnimStep++;
var delay = currentAnimStep >= animSteps.length ? 3000 : 2000;
setTimeout(runAnimStep, delay);
}

window.selectPrimitive = function(idx) {
if (isPlaying) return;
highlightCard(idx);
renderDetail(idx);
};

window.startPrimDemo = function() {
if (isPlaying) return;
isPlaying = true;
currentAnimStep = 0;
var btn = document.getElementById('prim-play-btn');
btn.disabled = true;
btn.classList.add('opacity-50');
btn.textContent = '\u23F3 Running...';
var status = document.getElementById('prim-status');
status.classList.remove('hidden');
status.classList.add('flex');
document.getElementById('prim-detail').innerHTML =
'<p class="text-sm text-on-surface-variant text-center italic">Watch the building blocks work together below...</p>';
runAnimStep();
};
}
