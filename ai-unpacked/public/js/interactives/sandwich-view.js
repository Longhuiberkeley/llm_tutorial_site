/**
 * Sandwich View Interactive (chapter-03-02)
 * Shows chat UI vs. the growing bundle sent to the LLM.
 */
export function init(config) {
  var turns = config.turns;
  var totalTurns = config.totalTurns;
  var strings = config.strings;

  var current = 0;

  window.sdvNext = function() {
    if (current >= turns.length) return;
    var turn = turns[current];
    current++;

    // Update LEFT chat panel
    var chat = document.getElementById('sdv-chat');
    var placeholder = chat.querySelector('p');
    if (placeholder) placeholder.remove();
    var userEl = document.createElement('div');
    userEl.className = 'flex justify-end';
    userEl.innerHTML = '<div class="rounded-2xl rounded-tr-sm px-4 py-2 text-sm font-medium shadow-sm max-w-[85%]" style="background-color: var(--primary); color: var(--on-primary);">' + turn.user + '</div>';
    chat.appendChild(userEl);
    var llmEl = document.createElement('div');
    llmEl.className = 'flex justify-start';
    llmEl.innerHTML = '<div class="rounded-2xl rounded-tl-sm px-4 py-2 text-sm shadow-sm max-w-[85%]" style="background-color: var(--surface-container); border: 1px solid var(--outline-variant);">' + turn.llm + '</div>';
    chat.appendChild(llmEl);

    // Update RIGHT bundle panel
    var bundle = document.getElementById('sdv-bundle');
    var ph = document.getElementById('sdv-bundle-placeholder');
    if (ph) ph.remove();
    var userMsg = document.createElement('div');
    userMsg.className = 'rounded-lg px-3 py-2 text-xs border sdv-flash';
    userMsg.style.backgroundColor = 'var(--surface-container-lowest)';
    userMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">' + strings.turnLabel(current) + ' \u2014 ' + strings.userLabel + '</span><div class="mt-0.5">' + turn.user + '</div>';
    bundle.appendChild(userMsg);
    var llmMsg = document.createElement('div');
    llmMsg.className = 'rounded-lg px-3 py-2 text-xs border sdv-flash';
    llmMsg.style.backgroundColor = 'var(--surface-container-lowest)';
    llmMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">' + strings.turnLabel(current) + ' \u2014 LLM</span><div class="mt-0.5 opacity-70">' + turn.llm + '</div>';
    bundle.appendChild(llmMsg);

    // Show LLM section + update output
    document.getElementById('sdv-llm-section').classList.remove('hidden');
    document.getElementById('sdv-output').textContent = strings.outputLabel;

    // Update controls
    var counter = document.getElementById('sdv-counter');
    var btn = document.getElementById('sdv-btn');
    counter.textContent = strings.counterLabel(current, totalTurns);
    if (current >= turns.length) {
      btn.textContent = strings.allDoneLabel(totalTurns);
      btn.disabled = true;
      btn.style.opacity = '0.5';
    } else {
      btn.textContent = strings.sendLabel(current + 1);
    }
  };
}
