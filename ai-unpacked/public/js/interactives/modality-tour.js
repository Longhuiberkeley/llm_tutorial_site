/**
 * Modality Tour Interactive
 * Chapter 09-01: Multimodal modality cards toggle
 */
export function init() {
  window.toggleModality = function(card) {
    var detail = card.querySelector('.mod-detail');
    var isOpen = !detail.classList.contains('hidden');
    document.querySelectorAll('.mod-card').forEach(function(c) {
      c.querySelector('.mod-detail').classList.add('hidden');
      c.style.borderColor = '';
      c.style.backgroundColor = '';
    });
    if (!isOpen) {
      detail.classList.remove('hidden');
      card.style.borderColor = 'var(--accent)';
      card.style.backgroundColor = 'color-mix(in srgb, var(--accent) 6%, white)';
    }
  };
}
