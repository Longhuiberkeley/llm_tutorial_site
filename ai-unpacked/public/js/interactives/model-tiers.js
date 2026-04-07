/**
 * Model Tiers Interactive
 * Chapter 10-02: Flagship / Mid-Tier / Fast model tier explorer
 */
export function init(config) {
  const { tiers } = config;

  function render(idx) {
    var t = tiers[idx];
    var panel = document.getElementById('tier-panel');
    panel.innerHTML =
      '<div class="flex items-start justify-between mb-3">' +
      '<div>' +
      '<div class="text-xl font-bold mb-0.5">' + t.label + '</div>' +
      '<div class="text-sm text-on-surface/70">' + t.tagline + '</div>' +
      '</div>' +
      '<div class="text-right shrink-0 ml-4">' +
      '<div class="text-xl">' + t.cost + '</div>' +
      '<div class="text-xs text-on-surface/50 mt-0.5">' + t.costLabel + '</div>' +
      '</div>' +
      '</div>' +
      '<div class="border-t border-outline-variant pt-3 mt-3">' +
      '<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-2">' + t.useCasesLabel + '</div>' +
      '<ul class="text-sm space-y-1">' +
      t.examples.map(function(e) {
        return '<li class="flex items-start gap-2"><span class="mt-0.5 shrink-0" style="color:' + t.color + '">\u25B8</span>' + e + '</li>';
      }).join('') +
      '</ul>' +
      '</div>' +
      '<div class="border-t border-outline-variant pt-3 mt-3">' +
      '<div class="text-xs font-bold uppercase tracking-widest text-on-surface/50 mb-1">' + t.pickWhenLabel + '</div>' +
      '<p class="text-sm">' + t.when + '</p>' +
      '</div>' +
      '<div class="mt-3 text-xs text-on-surface/40 italic">' + t.models + '</div>';

    for (var i = 0; i < 3; i++) {
      var btn = document.getElementById('tier-btn-' + i);
      if (i === idx) {
        btn.style.borderColor = tiers[i].color;
        btn.style.color = tiers[i].color;
        btn.style.backgroundColor = 'color-mix(in srgb, ' + tiers[i].color + ' 10%, var(--surface-container-lowest))';
      } else {
        btn.style.borderColor = 'var(--outline-variant)';
        btn.style.color = 'var(--on-surface)';
        btn.style.backgroundColor = 'var(--surface-container-lowest)';
      }
    }
  }

  window.selectTier = function(idx) { render(idx); };
  render(1);
}
