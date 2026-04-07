export function init(config) {
const { data } = config;

	let currentMode = null;
	let currentWeek = null;

	window.setMode = function(mode, btn) {
	 currentMode = mode;
        document.querySelectorAll('.apd-mode-btn').forEach(b => {
            b.classList.remove('border-outline-variant', 'bg-surface-container-lowest');
            b.classList.add('border-outline-variant', 'bg-surface-container-lowest');
        });
        if (mode === 'loose') {
            btn.classList.add('border-orange-400', 'bg-orange-400', 'text-white');
        } else {
            btn.classList.add('border-primary', 'text-white');
            btn.style.backgroundColor = 'var(--primary)';
        }
        if (currentWeek) updateDetail();
    };

    window.selectWeek = function(week, btn) {
        currentWeek = week;
        document.querySelectorAll('.apd-week').forEach(w => {
            w.querySelector('.apd-circle').classList.remove('border-primary', 'border-orange-400', 'scale-110', 'shadow-md');
            w.querySelector('.apd-circle').classList.add('border-primary', 'scale-110', 'shadow-md');
        } else {
            circle.classList.remove('border-outline-variant');
            circle.classList.add('border-primary', 'scale-110', 'shadow-md');
        }
        if (currentMode) updateDetail();
    };
    </script>