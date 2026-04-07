/**
 * Simon Says Failure Test Interactive
 * Chapter 06-05: Agent failure modes explorer
 */
export function init(config) {
  const { bugData } = config;

  function revealBug(index, btn) {
    const data = bugData[index];
    const display = document.getElementById('bug-display');
    document.querySelectorAll('.bug-btn').forEach(b => b.classList.remove('border-red-400', 'bg-red-50'));
    btn.classList.add('border-red-400', 'bg-red-50');
    display.classList.remove('animate-fade-in');
    void display.offsetWidth;
    display.classList.add('animate-fade-in');
    display.style.opacity = "1";
    document.getElementById('bug-icon').textContent = data.icon;
    document.getElementById('bug-title').textContent = data.title;
    document.getElementById('bug-problem').innerHTML = data.problem;
    document.getElementById('bug-fix').innerHTML = data.fix;
  }

  window.revealBug = revealBug;
}
