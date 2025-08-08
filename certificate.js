// DOM Elements
        const loadingOverlay = document.getElementById('loadingOverlay');
        const certificatesGrid = document.getElementById('certificates-grid');
        const searchInput = document.getElementById('searchInput');
        const filterButtons = document.querySelectorAll('.filter-btn');
        const noResults = document.getElementById('noResults');
        const modal = document.getElementById('certificateModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalBody = document.getElementById('modalBody');
        const closeModal = document.getElementById('closeModal');
        const scrollTop = document.getElementById('scrollTop');

        // Statistics elements
        const totalCertificatesEl = document.getElementById('totalCertificates');
        const thisYearCertificatesEl = document.getElementById('thisYearCertificates');
        const verifiedCertificatesEl = document.getElementById('verifiedCertificates');
        const skillDomainsEl = document.getElementById('skillDomains');

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(() => {
                loadingOverlay.style.opacity = '0';
                setTimeout(() => {
                    loadingOverlay.style.display = 'none';
                }, 500);
            }, 1000);

            updateStatistics();
            setupEventListeners();
        });

        // Setup event listeners
        function setupEventListeners() {
            // Search functionality
            searchInput.addEventListener('input', handleSearch);

            // Filter buttons
            filterButtons.forEach(button => {
                button.addEventListener('click', handleFilter);
            });

            // Modal functionality
            closeModal.addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });

            // Scroll to top functionality
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 300) {
                    scrollTop.classList.add('visible');
                } else {
                    scrollTop.classList.remove('visible');
                }
            });

            scrollTop.addEventListener('click', () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });

            // Keyboard navigation
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && modal.style.display === 'block') {
                    modal.style.display = 'none';
                }
            });
        }

        // Handle search
        function handleSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            const certificateCards = document.querySelectorAll('.certificate-card');
            let visibleCount = 0;

            certificateCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const searchData = card.getAttribute('data-search') || '';
                const title = card.querySelector('h3').textContent.toLowerCase();
                const issuer = card.querySelector('.certificate-issuer').textContent.toLowerCase();
                const description = card.querySelector('.certificate-description').textContent.toLowerCase();

                const matchesSearch = searchTerm === '' || 
                                    title.includes(searchTerm) ||
                                    issuer.includes(searchTerm) ||
                                    description.includes(searchTerm) ||
                                    searchData.toLowerCase().includes(searchTerm);

                const matchesFilter = activeFilter === 'all' || category === activeFilter;

                if (matchesSearch && matchesFilter) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Handle filter
        function handleFilter(e) {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            const filterValue = e.target.getAttribute('data-filter');
            const searchTerm = searchInput.value.toLowerCase();
            const certificateCards = document.querySelectorAll('.certificate-card');
            let visibleCount = 0;

            certificateCards.forEach(card => {
                const category = card.getAttribute('data-category');
                const searchData = card.getAttribute('data-search') || '';
                const title = card.querySelector('h3').textContent.toLowerCase();
                const issuer = card.querySelector('.certificate-issuer').textContent.toLowerCase();
                const description = card.querySelector('.certificate-description').textContent.toLowerCase();

                const matchesFilter = filterValue === 'all' || category === filterValue;
                const matchesSearch = searchTerm === '' || 
                                    title.includes(searchTerm) ||
                                    issuer.includes(searchTerm) ||
                                    description.includes(searchTerm) ||
                                    searchData.toLowerCase().includes(searchTerm);

                if (matchesFilter && matchesSearch) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            noResults.style.display = visibleCount === 0 ? 'block' : 'none';
        }

        // Open modal
        function openModal(button) {
            const card = button.closest('.certificate-card');
            const title = card.querySelector('h3').textContent;
            const issuer = card.querySelector('.certificate-issuer').textContent;
            const date = card.querySelector('.certificate-date').textContent;
            const description = card.querySelector('.certificate-description').textContent;
            const image = card.querySelector('.certificate-full-image').src;
            const skills = Array.from(card.querySelectorAll('.skill-tag')).map(tag => tag.textContent);

            modalTitle.textContent = title;
            
            const skillsHtml = skills.map(skill => 
                `<span class="skill-tag">${skill}</span>`
            ).join('');

            modalBody.innerHTML = `
                <img src="${image}" alt="${title}" class="modal-certificate-image">
                <div style="margin-bottom: 1rem;">
                    <strong>Issuer:</strong> ${issuer}<br>
                    <strong>Date:</strong> ${date.replace('Issued: ', '')}<br>
                    <strong>Category:</strong> ${card.getAttribute('data-category').charAt(0).toUpperCase() + card.getAttribute('data-category').slice(1)}
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <strong>Description:</strong><br>
                    ${description}
                </div>
                <div style="margin-bottom: 1.5rem;">
                    <strong>Skills & Technologies:</strong><br>
                    <div class="certificate-skills">${skillsHtml}</div>
                </div>
                <div class="certificate-actions">
                    <a href="#" class="btn btn-outline" target="_blank">View Certificate</a>
                    <a href="#" class="btn btn-secondary" target="_blank">Verify</a>
                </div>
            `;

            modal.style.display = 'block';
        }

        // Update statistics
        function updateStatistics() {
            const certificateCards = document.querySelectorAll('.certificate-card');
            const currentYear = new Date().getFullYear();
            let thisYearCount = 0;
            const categories = new Set();

            certificateCards.forEach(card => {
                const dateStr = card.getAttribute('data-date');
                if (dateStr) {
                    const year = new Date(dateStr).getFullYear();
                    if (year === currentYear) {
                        thisYearCount++;
                    }
                }
                categories.add(card.getAttribute('data-category'));
            });

            animateCounter(totalCertificatesEl, certificateCards.length);
            animateCounter(thisYearCertificatesEl, thisYearCount);
            animateCounter(verifiedCertificatesEl, certificateCards.length);
            animateCounter(skillDomainsEl, categories.size);
        }

        // Animate counter
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    element.textContent = target;
                    clearInterval(timer);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, 30);
        }

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe certificate cards
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                const cards = document.querySelectorAll('.certificate-card');
                cards.forEach(card => observer.observe(card));
            }, 1500);
        });