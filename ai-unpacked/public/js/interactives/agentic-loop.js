/**
 * Agentic Loop Interactive
 * Chapter 06-04: Animated agent decision-making cycle (Perceive, Plan, Act, Observe)
 */
export function init(config) {
  const { loopSteps, startLabel, restartLabel } = config;
  let currentStep = 0;
  let isPlaying = false;

  function startLoop() {
    if (isPlaying) return;
    isPlaying = true;
    document.getElementById('start-loop-btn').disabled = true;
    document.getElementById('start-loop-btn').classList.add('opacity-0');
    currentStep = 0;
    runStep();
  }

  function runStep() {
    if (currentStep >= loopSteps.length) {
      isPlaying = false;
      document.getElementById('start-loop-btn').disabled = false;
      document.getElementById('start-loop-btn').classList.remove('opacity-0');
      document.getElementById('start-loop-btn').textContent = restartLabel || 'Restart Loop \u2192';
      return;
    }
    const step = loopSteps[currentStep];
    const prevStep = loopSteps[currentStep - 1];
    if (prevStep) {
      const prevEl = document.getElementById('step-' + prevStep.id.split(' ')[0]);
      prevEl.querySelector('div').classList.remove('border-primary', 'bg-primary/10', 'scale-110');
      prevEl.querySelector('div').classList.add('border-outline-variant');
    }
    const currEl = document.getElementById('step-' + step.id.split(' ')[0]);
    currEl.querySelector('div').classList.add('border-primary', 'bg-primary/10', 'scale-110');
    currEl.querySelector('div').classList.remove('border-outline-variant');
    const title = document.getElementById('loop-status-title');
    const desc = document.getElementById('loop-status-desc');
    title.classList.remove('animate-fade-in');
    desc.classList.remove('animate-fade-in');
    void title.offsetWidth;
    title.classList.add('animate-fade-in');
    desc.classList.add('animate-fade-in');
    title.textContent = step.title;
    desc.innerHTML = step.desc;
    currentStep++;
    setTimeout(runStep, 2000);
  }

  window.startLoop = startLoop;
}
