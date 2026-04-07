export function init(config) {
const { blZones } = config;

window.showBLZone = function(index, btn) {
const zone = blZones[index];
// Update button states
document.querySelectorAll('.bl-zone-btn').forEach(b => {
b.classList.remove('border-primary');
b.classList.add('border-transparent');
});
btn.classList.remove('border-transparent');
btn.classList.add('border-primary');
// Animate detail card
const detail = document.getElementById('bl-detail');
detail.classList.remove('animate-fade-in');
void detail.offsetWidth;
detail.classList.add('animate-fade-in');
// Update content
document.getElementById('bl-detail-badge').style.background = zone.color;
document.getElementById('bl-detail-badge').textContent = index + 1;
document.getElementById('bl-detail-title').textContent = zone.title;
document.getElementById('bl-detail-subtitle').textContent = zone.subtitle;
const guidance = document.getElementById('bl-detail-guidance');
guidance.style.background = zone.color + '15';
guidance.style.borderLeftColor = zone.color;
guidance.innerHTML = '<span class="font-bold">\uD83E\uDD16 Automation Guidance:</span> ' + zone.guidance;
const tagsHtml = zone.tags.map(t => '<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">' + t + '</span>').join('');
document.getElementById('bl-detail-tags').innerHTML = tagsHtml;
};
}
