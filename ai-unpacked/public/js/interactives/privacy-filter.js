/**
 * Privacy Filter Interactive
 * Chapter 05-05: Check which items are safe to paste into an LLM
 */
export function init(config) {
  const { safeMessage, dangerMessage } = config;

  window.checkPrivacy = function(isSafe, btn) {
    var feedback = document.getElementById('privacy-feedback');
    btn.parentElement.querySelectorAll('button').forEach(function(b) {
      b.classList.remove('border-red-500', 'border-green-500', 'bg-red-50', 'bg-green-50');
    });
    if (isSafe) {
      btn.classList.add('border-green-500', 'bg-green-50');
      feedback.textContent = safeMessage;
      feedback.className = "mt-8 p-4 rounded-xl text-center font-bold text-sm bg-green-100 text-green-800 opacity-100";
    } else {
      btn.classList.add('border-red-500', 'bg-red-50');
      feedback.textContent = dangerMessage;
      feedback.className = "mt-8 p-4 rounded-xl text-center font-bold text-sm bg-red-100 text-red-800 opacity-100";
    }
  };
}
