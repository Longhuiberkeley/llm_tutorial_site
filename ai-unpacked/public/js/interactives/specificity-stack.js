/**
 * Specificity Stack Interactive
 * Chapter 05-02: Prompt specificity builder with quality bar
 */
export function init(config) {
  const { promptSteps } = config;

  function toggleStep(step, btn) {
    document.querySelectorAll('.step-btn').forEach((b, i) => {
      if (i < step) {
        b.classList.remove('opacity-50');
        if (i === step - 1) {
          b.classList.add('border-primary', 'bg-surface-container-lowest');
        } else {
          b.classList.remove('border-primary');
        }
      } else {
        b.classList.add('opacity-50');
        b.classList.remove('border-primary');
      }
    });
    const data = promptSteps[step - 1];
    const preview = document.getElementById('prompt-preview');
    const bar = document.getElementById('quality-bar');
    const label = document.getElementById('quality-label');
    preview.classList.remove('animate-pulse');
    void preview.offsetWidth;
    preview.classList.add('animate-pulse');
    preview.textContent = data.prompt;
    bar.style.width = data.quality + '%';
    label.textContent = data.label;
  }

  window.toggleStep = toggleStep;

  document.addEventListener('DOMContentLoaded', function () {
    toggleStep(1, document.querySelector('.step-btn'));
  });
}
