/**
 * LLM Tutorial Site - Main JavaScript
 * Navigation and highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
    initCurrentPageHighlight();
});

/**
 * Smooth Scrolling for anchor links
 */
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/**
 * Highlight current page in sidebar
 */
function initCurrentPageHighlight() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
            link.classList.add('bg-[#efeeeb]', 'text-[#1b1c1a]', 'font-bold', 'rounded-lg', 'translate-x-1');
            link.classList.remove('text-[#1b1c1a]/60');
        }
    });
}

/**
 * Mobile Sidebar Toggle (for future implementation)
 */
function toggleMobileSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('open');
    }
}
