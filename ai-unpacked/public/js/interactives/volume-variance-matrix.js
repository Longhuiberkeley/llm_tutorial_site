export function init(config) {
const { vvQuadrants } = config;

function selectQuadrant(index, btn) {
const q = vvQuadrants[index];
// Reset all quadrants
document.querySelectorAll('.vv-quad').forEach(b => {
b.classList.remove('border-primary', 'scale-[1.05]', 'shadow-md');
b.classList.add('border-transparent');
});
// Highlight selected
btn.classList.remove('border-transparent');
btn.classList.add('border-primary', 'scale-[1.05]', 'shadow-md');
// Animate detail panel
const detail = document.getElementById('vv-detail');
detail.classList.remove('animate-fade-in');
void detail.offsetWidth;
detail.classList.add('animate-fade-in');
// Populate detail
document.getElementById('vv-detail-title').innerHTML = q.emoji + ' ' + q.title + ' <span class="text-sm font-normal text-on-surface-variant ml-2">' + q.subtitle + '</span>';
document.getElementById('vv-detail-desc').textContent = q.desc;
document.getElementById('vv-detail-approach').textContent = q.approach;
document.getElementById('vv-detail-examples').innerHTML = q.examples.map(e =>
'<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">' + e + '</span>'
).join('');
document.getElementById('vv-detail-insight').textContent = q.insight;
}

window.selectQuadrant = function(index, btn) {
selectQuadrant(index, btn);
};

// Default: select first quadrant (RPA)
// Use a small delay to ensure DOM is ready
setTimeout(function() {
const firstBtn = document.getElementById('quad-0');
if (firstBtn) selectQuadrant(0, firstBtn);
}, 0);
}
