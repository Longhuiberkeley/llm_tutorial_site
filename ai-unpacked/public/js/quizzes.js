/**
 * LLM Tutorial Site - Quiz Functionality
 * Instant feedback for quiz interactions using CSS-driven styling
 */

document.addEventListener('DOMContentLoaded', () => {
    initAllQuizzes();
});

/**
 * Initialize all quiz boxes on the page
 */
function initAllQuizzes() {
    const quizContainers = document.querySelectorAll('[id^="quiz-"]');
    quizContainers.forEach(container => {
        initQuiz(container);
    });
}

/**
 * Initialize a single quiz
 */
function initQuiz(container) {
    const options = container.querySelectorAll('.quiz-option');
    const feedback = container.querySelector('.quiz-feedback');

    if (!options.length || !feedback) return;

    options.forEach(option => {
        option.addEventListener('click', () => {
            // Only allow one attempt for now (to keep it simple and decisive)
            if (container.classList.contains('quiz-completed')) return;
            container.classList.add('quiz-completed');

            // Disable all options
            options.forEach(opt => {
                opt.style.pointerEvents = 'none';
                opt.classList.remove('hover:border-primary', 'dark:hover:border-primary-dark');
            });

            const isCorrect = option.getAttribute('data-correct') === 'true';

            if (isCorrect) {
                // Correct answer
                option.classList.add('correct');
                showFeedback(feedback, true, 'Correct! Great job understanding this concept.');
            } else {
                // Wrong answer
                option.classList.add('wrong');
                
                // Find and highlight correct answer
                options.forEach(opt => {
                    if (opt.getAttribute('data-correct') === 'true') {
                        opt.classList.add('correct');
                    }
                });

                showFeedback(feedback, false, 'Not quite. The correct answer is highlighted above.');
            }
        });
    });
}

/**
 * Show feedback message
 */
function showFeedback(feedbackEl, isCorrect, message) {
    feedbackEl.classList.remove('hidden');
    feedbackEl.classList.add('fade-in');

    if (isCorrect) {
        feedbackEl.className = 'quiz-feedback mt-4 p-4 rounded-lg fade-in quiz-feedback-correct';
        feedbackEl.innerHTML = `<span class="font-bold">✅ ${message}</span>`;
    } else {
        feedbackEl.className = 'quiz-feedback mt-4 p-4 rounded-lg fade-in quiz-feedback-wrong';
        feedbackEl.innerHTML = `<span class="font-bold">❌ ${message}</span>`;
    }
}

/**
 * Reset all quizzes
 */
function resetQuizzes() {
    const containers = document.querySelectorAll('[id^="quiz-"]');
    containers.forEach(container => {
        container.classList.remove('quiz-completed');
        
        const options = container.querySelectorAll('.quiz-option');
        options.forEach(option => {
            option.style.pointerEvents = 'auto';
            option.classList.remove('correct', 'wrong');
            option.classList.add('hover:border-primary');
        });

        const feedback = container.querySelector('.quiz-feedback');
        if (feedback) {
            feedback.classList.add('hidden');
            feedback.innerHTML = '';
            feedback.className = 'quiz-feedback hidden mt-4 p-4 rounded-lg';
        }
    });
}
