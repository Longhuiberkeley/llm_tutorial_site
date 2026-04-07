export function init(config) {
const { chains, driftData } = config;

    let driftChecked = 0;

    window.setRtMode = function(mode, btn) {
        document.querySelectorAll('.rt-mode-btn').forEach(b => {
            b.classList.remove('border-primary', 'bg-primary/10');
            b.classList.add('border-outline-variant', 'bg-surface-container-lowest');
        });
        btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
        btn.classList.add('border-primary', 'bg-primary/10');
        document.getElementById('rt-trace-view').classList.toggle('hidden', mode !== 'trace');
        document.getElementById('rt-drift-view').classList.toggle('hidden', mode !== 'drift');
    };

    window.traceReq = function(req, btn) {
        const chain = chains[req];
        document.querySelectorAll('.rt-req').forEach(b => {
            b.classList.remove('border-primary', 'bg-primary/10');
            b.classList.add('border-outline-variant', 'bg-surface-container-lowest');
        });
        btn.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
        btn.classList.add('border-primary', 'bg-primary/10');
        ['req', 'design', 'impl', 'test'].forEach(key => {
            document.getElementById('rt-c-' + key + '-text').textContent = chain[key].text;
            document.getElementById('rt-c-' + key + '-desc').textContent = chain[key].desc;
            var el = document.getElementById('rt-c-' + key);
            el.classList.remove('border-outline-variant');
            el.classList.add('border-primary', 'bg-primary/5');
        });
        document.getElementById('rt-chain').classList.remove('hidden');
        document.getElementById('rt-chain-prompt').classList.add('hidden');
    };

    window.checkDrift = function(index, btn) {
        var d = driftData[index];
        driftChecked++;
        btn.disabled = true;
        btn.classList.remove('border-outline-variant', 'hover:border-primary');
        if (d.traced) {
            btn.classList.add('border-green-500', 'bg-green-50');
            btn.querySelector('.font-bold').textContent = '\u2705 ' + btn.querySelector('.font-bold').textContent.replace(/^[^ ]+ /, '');
        } else {
            btn.classList.add('border-red-400', 'bg-red-50');
        }
        var result = document.getElementById('rt-drift-result');
        result.classList.remove('hidden');
        result.textContent = d.note;
        if (d.traced) {
            result.className = 'mt-4 rounded-xl p-4 text-xs font-bold bg-green-50 border border-green-300 text-green-700';
        } else {
            result.className = 'mt-4 rounded-xl p-4 text-xs font-bold bg-red-50 border border-red-300 text-red-700';
        }
    };
}
