/**
 * Context Poisoning Interactive (chapter-04-04)
 * Shows how "forget" only adds a message, never removes one.
 */
export function init(config) {
  var turns = config.turns;
  var totalTurns = config.totalTurns;
  var strings = config.strings;

  var current = 0;
  var secretItemRef = null;

  window.fiNext = function() {
    if (current >= turns.length) return;
    var turn = turns[current];
    current++;

    // Update LEFT chat
    var chat = document.getElementById('fi-chat');
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

    // Update RIGHT bundle
    var bundle = document.getElementById('fi-bundle');
    var ph = document.getElementById('fi-bundle-placeholder');
    if (ph) ph.remove();
    var userMsg = document.createElement('div');
    userMsg.className = 'rounded-lg px-3 py-2 text-xs border fi-flash';
    userMsg.style.backgroundColor = 'var(--surface-container-lowest)';
    var labelEl = document.createElement('div');
    labelEl.className = 'flex items-center flex-wrap gap-1 fi-msg-label';
    labelEl.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">' + strings.turnLabel(current) + ' \u2014 ' + strings.userLabel + '</span>';
    var textEl = document.createElement('div');
    textEl.className = 'mt-0.5';
    textEl.textContent = turn.user;
    userMsg.appendChild(labelEl);
    userMsg.appendChild(textEl);
    bundle.appendChild(userMsg);

    // Save reference to the first message (the secret)
    if (current === 1) {
      secretItemRef = userMsg;
    }

    // On the forget turn, badge the secret message
    if (turn.isForget && secretItemRef) {
      var badge = document.createElement('span');
      badge.className = 'ml-2 text-[10px] font-bold px-1.5 py-0.5 rounded-full';
      badge.style.backgroundColor = 'var(--error)';
      badge.style.color = 'white';
      badge.textContent = strings.stillInBundle;
      secretItemRef.querySelector('.fi-msg-label').appendChild(badge);
    }

    var llmMsg = document.createElement('div');
    llmMsg.className = 'rounded-lg px-3 py-2 text-xs border fi-flash';
    llmMsg.style.backgroundColor = 'var(--surface-container-lowest)';
    llmMsg.innerHTML = '<span class="font-bold text-[10px] uppercase tracking-widest opacity-50">' + strings.turnLabel(current) + ' \u2014 LLM</span><div class="mt-0.5 opacity-70">' + turn.llm + '</div>';
    bundle.appendChild(llmMsg);

    // Show LLM section
    document.getElementById('fi-llm-section').classList.remove('hidden');
    document.getElementById('fi-output').textContent = strings.outputLabel;

    // Show explainer note on last turn
    if (current === totalTurns) {
      document.getElementById('fi-note').classList.remove('hidden');
    }

    // Update controls
    document.getElementById('fi-counter').textContent = strings.counterLabel(current, totalTurns);
    var btn = document.getElementById('fi-btn');
    if (current >= turns.length) {
      btn.textContent = strings.allDoneLabel(totalTurns);
      btn.disabled = true;
      btn.style.opacity = '0.5';
    } else {
      btn.textContent = strings.sendLabel(current + 1);
    }
  };
}
