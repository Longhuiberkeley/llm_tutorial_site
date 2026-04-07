/**
 * Trust Spectrum Interactive
 * Chapter 05-01: AI Trust Spectrum with 4 zones
 */
export function init(config) {
  const { zones } = config;

  function showZone(index, btn) {
    const zone = zones[index];
    document.querySelectorAll('.zone-btn').forEach(b => b.classList.remove('border-primary', 'bg-surface-container'));
    btn.classList.add('border-primary', 'bg-surface-container');
    const display = document.getElementById('zone-display');
    display.classList.remove('animate-fade-in');
    void display.offsetWidth;
    display.classList.add('animate-fade-in');
    document.getElementById('zone-title').innerHTML = '<span class="material-symbols-outlined ' + zone.color + '">' + zone.icon + '</span> ' + zone.title;
    document.getElementById('zone-desc').textContent = zone.desc;
    const tagsHtml = zone.tags.map(t => '<span class="px-3 py-1 bg-surface-container rounded-full text-[11px] font-bold">' + t + '</span>').join('');
    display.querySelector('.flex-wrap').innerHTML = tagsHtml;
  }

  window.showZone = showZone;

  document.addEventListener('DOMContentLoaded', function () {
    showZone(0, document.querySelector('.zone-btn'));
  });
}
