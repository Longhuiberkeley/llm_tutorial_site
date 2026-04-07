/**
 * Agent Configuration Panel Interactive
 * Chapter 06-06: Configure domain, tools, access and test an agent
 */
export function init(config) {
  const { domainRoles, accessLabels, testPrompts, noDomainWarning } = config;

  let selectedDomain = '';
  let selectedTools = [];
  let selectedAccess = 'readonly';

  function setAgentDomain(domain, btn) {
    selectedDomain = domain;
    document.querySelectorAll('.domain-btn').forEach(b => b.classList.remove('border-primary', 'bg-primary/5'));
    btn.classList.add('border-primary', 'bg-primary/5');
    updateAgentPreview();
  }

  function toggleAgentTool(tool, btn) {
    const index = selectedTools.indexOf(tool);
    if (index > -1) {
      selectedTools.splice(index, 1);
      btn.classList.remove('border-accent', 'bg-accent/5');
    } else {
      selectedTools.push(tool);
      btn.classList.add('border-accent', 'bg-accent/5');
    }
    updateAgentPreview();
  }

  function updateAgentPreview() {
    selectedAccess = document.getElementById('agent-access').value;
    const roleDiv = document.getElementById('preview-role');
    roleDiv.textContent = selectedDomain ? domainRoles[selectedDomain] : "Select a domain to define the agent's role.";
    const toolsDiv = document.getElementById('preview-tools');
    if (selectedTools.length === 0) {
      toolsDiv.innerHTML = '<span class="text-[9px] px-2 py-0.5 bg-surface-container rounded-full opacity-40 italic">No tools selected</span>';
    } else {
      toolsDiv.innerHTML = selectedTools.map(t => '<span class="text-[9px] px-2 py-0.5 bg-accent/10 text-accent font-bold rounded-full border border-accent/20">' + t + '</span>').join('');
    }
    document.getElementById('preview-access').textContent = accessLabels[selectedAccess];
  }

  function testAgent() {
    const area = document.getElementById('test-area');
    const response = document.getElementById('agent-response');
    const btn = document.getElementById('test-agent-btn');
    document.getElementById('test-prompt').textContent = testPrompts[selectedDomain] || testPrompts['default'];
    area.classList.remove('hidden');
    response.innerHTML = '<div class="text-[10px] font-bold text-primary animate-pulse italic">Agent thinking...</div>';
    btn.disabled = true;
    btn.style.opacity = '0.5';
    setTimeout(function () {
      let html = '';
      if (!selectedDomain) {
        html = '<div class="text-[10px] text-red-500 font-mono italic">' + noDomainWarning + '</div>';
      } else {
        if (selectedTools.includes('Web Search')) {
          html += '<div class="flex items-center gap-2 text-[10px] text-accent font-mono"><span class="material-symbols-outlined text-xs">search</span> CALL: web_search("' + selectedDomain + ' task query")</div>';
          html += '<div class="flex items-center gap-2 text-[10px] text-green-600 font-mono mb-2"><span class="material-symbols-outlined text-xs">check</span> RESULT: Relevant data retrieved \u2713</div>';
        } else {
          html += '<div class="text-[10px] text-red-500 font-mono mb-2 italic">\u26A0\uFE0F No search tool \u2014 agent must rely on training data only.</div>';
        }
        if (selectedAccess === 'readonly') {
          html += '<div class="text-[10px] text-on-surface-variant font-mono mb-2 italic">\u2139\uFE0F Read-Only mode: generating report only, no changes made.</div>';
        } else if (selectedAccess === 'admin') {
          html += '<div class="text-[10px] text-orange-500 font-mono mb-2 italic">\u26A0\uFE0F Admin access active \u2014 all system actions are permitted.</div>';
        }
        html += '<div class="bg-primary/5 border border-primary/10 rounded-xl p-3 text-xs italic font-bold">' +
          '\u2705 Task completed within <strong>' + selectedDomain + '</strong> domain. Response reflects configured role and access level.' +
          '</div>';
      }
      response.innerHTML = html;
      btn.disabled = false;
      btn.style.opacity = '1';
    }, 1500);
  }

  window.setAgentDomain = setAgentDomain;
  window.toggleAgentTool = toggleAgentTool;
  window.updateAgentPreview = updateAgentPreview;
  window.testAgent = testAgent;
}
