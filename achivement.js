// Global variables
let particleContainer = null;
let isAnimating = false;
let resizeTimer = null;

// Error handling wrapper
function safeExecute(fn, errorMessage = 'An error occurred') {
    try {
        return fn();
    } catch (error) {
        console.warn(errorMessage + ':', error);
        return null;
    }
}

// Initialize particles background
function createParticles() {
    safeExecute(() => {
        particleContainer = document.getElementById('bgAnimation');
        if (!particleContainer) return;

        particleContainer.innerHTML = '';
        const particleCount = window.innerWidth < 768 ? 25 : 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.width = Math.random() * 4 + 2 + 'px';
            particle.style.height = particle.style.width;
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
            particleContainer.appendChild(particle);
        }
    }, 'Error creating particles');
}

function animateCounters() {
    safeExecute(() => {
        const counters = document.querySelectorAll('.stat-number');
        if (!counters.length) return;

        const speed = window.innerWidth < 768 ? 50 : 20;

        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target')) || 0;
            const increment = target / 100;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, speed);
        });
    }, 'Error animating counters');
}

function setupScrollAnimations() {
    safeExecute(() => {
        if (!window.IntersectionObserver) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.achievement').forEach(el => observer.observe(el));
    }, 'Error setting up scroll animations');
}

function setupSearch() {
    safeExecute(() => {
        const input = document.getElementById('searchInput');
        if (!input) return;

        input.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            document.querySelectorAll('.achievement').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.classList.toggle('hidden', !text.includes(term));
            });
        });
    }, 'Error setting up search');
}

function setupFilters() {
    safeExecute(() => {
        const buttons = document.querySelectorAll('.filter-btn');
        if (!buttons.length) return;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterAchievements(button.getAttribute('data-filter'));
            });
        });
    }, 'Error setting up filters');
}

function filterAchievements(filter) {
    safeExecute(() => {
        document.querySelectorAll('.achievement').forEach(item => {
            const category = item.getAttribute('data-category');
            item.classList.toggle('hidden', filter !== 'all' && category !== filter);
        });
    }, 'Error filtering achievements');
}

function setupMobileNav() {
    safeExecute(() => {
        const buttons = document.querySelectorAll('.mobile-nav-btn');
        if (!buttons.length) return;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const action = button.getAttribute('data-action');
                filterAchievements(action);

                const desktopButton = document.querySelector(`.filter-btn[data-filter="${action}"]`);
                if (desktopButton) {
                    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                    desktopButton.classList.add('active');
                }
            });
        });
    }, 'Error setting up mobile nav');
}

function setupViewToggle() {
    safeExecute(() => {
        const buttons = document.querySelectorAll('.view-btn');
        const container = document.getElementById('achievementsContainer');
        if (!buttons.length || !container) return;

        buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                const view = button.getAttribute('data-view');
                container.classList.toggle('grid-view', view === 'grid');
            });
        });
    }, 'Error setting up view toggle');
}

function setupModal() {
    safeExecute(() => {
        const modal = document.getElementById('achievementModal');
        const close = document.getElementById('modalClose');
        const body = document.getElementById('modalBody');

        if (!modal || !close || !body) return;

        document.querySelectorAll('.achievement').forEach(item => {
            item.addEventListener('click', () => {
                body.innerHTML = item.innerHTML;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        close.addEventListener('click', () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }, 'Error setting up modal');
}

function setupScrollToTop() {
    safeExecute(() => {
        const fab = document.getElementById('scrollToTop');
        if (!fab) return;

        fab.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        window.addEventListener('scroll', () => {
            fab.style.opacity = window.scrollY > 300 ? '1' : '0';
            fab.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
        });
    }, 'Error setting up scroll to top');
}

function setupProgressBar() {
    safeExecute(() => {
        const bar = document.getElementById('progressBar');
        if (!bar) return;

        window.addEventListener('scroll', () => {
            const top = window.scrollY;
            const height = document.documentElement.scrollHeight - window.innerHeight;
            const percent = height > 0 ? (top / height) * 100 : 0;
            bar.style.width = Math.min(percent, 100) + '%';
        });
    }, 'Error setting up progress bar');
}

function handleResize() {
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            createParticles();
        }, 250);
    });
}

function setupKeyboardShortcuts() {
    safeExecute(() => {
        document.addEventListener('keydown', (e) => {
            const modal = document.getElementById('achievementModal');
            const input = document.getElementById('searchInput');
            if (e.key === 'Escape' && modal?.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
            if (e.ctrlKey && e.key === 'f') {
                e.preventDefault();
                input?.focus();
            }
            if (e.key === 'Home') window.scrollTo({ top: 0, behavior: 'smooth' });
            if (e.key === 'End') window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
        });
    }, 'Error setting up keyboard shortcuts');
}

function initializeApp() {
    createParticles();
    setTimeout(animateCounters, 500);
    setupScrollAnimations();
    setupSearch();
    setupFilters();
    setupViewToggle();
    setupModal();
    setupScrollToTop();
    setupProgressBar();
    setupMobileNav();
    handleResize();
    setupKeyboardShortcuts();
    console.log('App initialized successfully');
}

document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', initializeApp)
    : initializeApp();