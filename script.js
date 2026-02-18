// ===== CONFIGURATION =====
const config = {
    galleryImages: [
        { title: 'Pendidikan', src: 'assets/images/gallery/Foto_1.webp' },
        { title: 'Bantuan Sapi', src: 'assets/images/gallery/Foto_2.webp' },
        { title: 'Air Bersih', src: 'assets/images/gallery/Foto_3.webp' }
    ],
    newsData: [
        { id: 1, title: 'Program Beasiswa 2024 Dibuka', excerpt: 'YPBG membuka pendaftaran program beasiswa pendidikan...', date: '2024-02-15', category: 'Pendidikan', image: 'assets/images/Program_Kegiatan_Beasiswa.webp' },
        { id: 2, title: 'Kegiatan Pembersihan Pantai', excerpt: 'Ratusan relawan YPBG berhasil membersihkan 5 km pantai...', date: '2024-02-10', category: 'Lingkungan', image: 'assets/images/Kegiatan_Pembersihan_Pantai.svg' },
        { id: 3, title: 'Kampanye Vaksinasi Gratis', excerpt: 'YPBG menggelar kampanye vaksinasi gratis di 20 desa...', date: '2024-02-05', category: 'Kesehatan', image: 'assets/images/Program_Kegiatan_Pengobatan.webp' }
    ]
};

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Load saved language and apply translations
    const savedLang = loadSavedLanguage();
    if (typeof translateAllPage === 'function') {
        translateAllPage(savedLang);
    }

    // Initialize theme
    initThemeToggle();

    initMobileMenu();
    initLanguageSelector();
    initSmoothScroll();
    initCarousel();
    initProgramFilter();
    initContactForm();
    initNews();
    initFadeIn();
    updateYear();
    initHeaderShadow();
    initWhatsappDraggable();
});

// ===== THEME TOGGLE =====
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle theme on click
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        console.log('[Theme] Switched to', isDark ? 'dark' : 'light', 'mode');
    });
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'id';
}

// ===== FUNCTIONS =====

function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking on nav links
    menu.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking on language options
    menu.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });
}

function initLanguageSelector() {
    const selector = document.querySelector('.language-selector');
    const toggle = document.querySelector('.lang-toggle');
    const options = document.querySelectorAll('.lang-option');
    const footerSelect = document.getElementById('language-select');

    if (!selector || !toggle) return;

    // Load saved language on page load
    const savedLang = loadSavedLanguage();
    updateLanguageUI(savedLang, options, toggle);
    if (footerSelect) footerSelect.value = savedLang;

    // Toggle dropdown
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        selector.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            selector.classList.remove('active');
        }
    });

    // Handle language selection from menu
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;

            // Change the page language
            if (typeof translateAllPage === 'function') {
                translateAllPage(lang);
            }

            // Update active state
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Update toggle display
            updateLanguageUI(lang, options, toggle);

            // Sync footer selector
            if (footerSelect) footerSelect.value = lang;

            // Close dropdown
            selector.classList.remove('active');
            
            console.log('[Language] Changed to:', lang);
        });
    });

    // Handle language selection from footer select
    if (footerSelect) {
        footerSelect.addEventListener('change', (e) => {
            const lang = e.target.value;

            // Change the page language
            if (typeof translateAllPage === 'function') {
                translateAllPage(lang);
            }

            // Update menu selector
            options.forEach(opt => {
                opt.classList.remove('active');
                if (opt.dataset.lang === lang) {
                    opt.classList.add('active');
                }
            });

            // Update toggle display
            updateLanguageUI(lang, options, toggle);

            // Close the menu dropdown if it's open
            selector.classList.remove('active');
            
            console.log('[Language] Changed to:', lang);
        });
    }
}

function updateLanguageUI(lang, options, toggle) {
    const langCode = lang.split('-')[0].toUpperCase();
    const currentLang = document.querySelector('.lang-current');
    if (currentLang) {
        currentLang.textContent = '🌐 ' + langCode;
    }

    // Update active state
    options.forEach(opt => {
        opt.classList.remove('active');
        if (opt.dataset.lang === lang) {
            opt.classList.add('active');
        }
    });
}


function initSmoothScroll() {
    document.querySelectorAll('a[data-smooth]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerOffset = 60;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        });
    });
}

function initCarousel() {
    // New Apple-Style Gallery
    const appleTrack = document.getElementById('gallery-apple-track');
    const appleIndicators = document.getElementById('gallery-apple-indicators');
    const applePrevBtn = document.getElementById('gallery-apple-prev');
    const appleNextBtn = document.getElementById('gallery-apple-next');
    
    if (appleTrack) {
        let index = 0;
        
        // Create slides with captions
        appleTrack.innerHTML = config.galleryImages.map(img => `
            <div class="gallery-apple-slide">
                <img src="${img.src}" alt="${img.title}" loading="lazy">
                <div class="gallery-apple-caption">
                    <h4 data-text="${img.title}">${img.title}</h4>
                    <p>Kegiatan YPBG untuk masyarakat</p>
                </div>
            </div>
        `).join('');

        // Create indicators
        if (appleIndicators) {
            appleIndicators.innerHTML = config.galleryImages.map((_, i) =>
                `<button class="gallery-apple-indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
            ).join('');
        }

        function updateAppleGallery() {
            if (appleTrack) {
                appleTrack.style.transform = `translateX(-${index * 100}%)`;
            }
            document.querySelectorAll('.gallery-apple-indicator').forEach((ind, i) => {
                ind.classList.toggle('active', i === index);
            });
            
            // Reset animation on captions
            const activeSlide = appleTrack.querySelectorAll('.gallery-apple-slide')[index];
            if (activeSlide) {
                const caption = activeSlide.querySelector('.gallery-apple-caption h4');
                const description = activeSlide.querySelector('.gallery-apple-caption p');
                if (caption) {
                    caption.style.animation = 'none';
                    caption.offsetHeight; // Trigger reflow
                    caption.style.animation = 'titleFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                }
                if (description) {
                    description.style.animation = 'none';
                    description.offsetHeight; // Trigger reflow
                    description.style.animation = 'textFadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards';
                    description.style.animationDelay = '0.3s';
                }
            }
        }

        if (applePrevBtn) {
            applePrevBtn.addEventListener('click', () => { 
                index = (index - 1 + config.galleryImages.length) % config.galleryImages.length; 
                updateAppleGallery(); 
            });
        }
        
        if (appleNextBtn) {
            appleNextBtn.addEventListener('click', () => { 
                index = (index + 1) % config.galleryImages.length; 
                updateAppleGallery(); 
            });
        }
        
        document.querySelectorAll('.gallery-apple-indicator').forEach(ind => {
            ind.addEventListener('click', (e) => { 
                index = parseInt(e.target.dataset.index); 
                updateAppleGallery(); 
            });
        });
    }

    // Old Carousel - Keep for fallback
    const track = document.getElementById('carousel-track');
    const indicators = document.getElementById('carousel-indicators');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    if (!track) return;

    let oldIndex = 0;
    track.innerHTML = config.galleryImages.map(img => `
        <div class="carousel-slide">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="slide-caption">${img.title}</div>
        </div>
    `).join('');

    indicators.innerHTML = config.galleryImages.map((_, i) =>
        `<button class="indicator ${i === 0 ? 'active' : ''}" data-index="${i}"></button>`
    ).join('');

    function update() {
        track.style.transform = `translateX(-${oldIndex * 100}%)`;
        document.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === oldIndex);
        });
    }

    prevBtn?.addEventListener('click', () => { oldIndex = (oldIndex - 1 + config.galleryImages.length) % config.galleryImages.length; update(); });
    nextBtn?.addEventListener('click', () => { oldIndex = (oldIndex + 1) % config.galleryImages.length; update(); });
    document.querySelectorAll('.indicator').forEach(ind => {
        ind.addEventListener('click', (e) => { oldIndex = parseInt(e.target.dataset.index); update(); });
    });
}

function initProgramFilter() {
    const btns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.program-card');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const match = filter === 'all' || card.dataset.category === filter;
                card.style.display = match ? 'block' : 'none';
                if(match) card.classList.add('fade-in');
            });
        });
    });
}

function initContactForm() {
    console.log('[initContactForm] Function called');
    
    const form = document.getElementById('contact-form');
    console.log('[initContactForm] Form element:', form);
    
    if (!form) {
        console.error('[initContactForm] Form not found!');
        return;
    }

    // Add debug listener first
    form.addEventListener('submit', (e) => {
        console.log('=== FORM SUBMIT EVENT DETECTED ===');
        console.log('Submit button clicked!');
    });

    // Check if Google Drive integration is available
    const googleScriptUrl = typeof GOOGLE_SCRIPT_URL !== 'undefined' ? GOOGLE_SCRIPT_URL : null;
    const hasHandleSubmit = typeof handleContactFormSubmit === 'function';
    
    console.log('[initContactForm] Google Script URL:', googleScriptUrl);
    console.log('[initContactForm] handleContactFormSubmit available:', hasHandleSubmit);
    
    if (googleScriptUrl && hasHandleSubmit) {
        // Use Google Drive integration
        console.log('[initContactForm] Using Google Drive integration');
        form.addEventListener('submit', handleContactFormSubmit);
        
        // Add file input change listener for real-time validation
        const fileInput = document.getElementById('form-file');
        console.log('[initContactForm] File input:', fileInput);
        
        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                const errorFile = document.getElementById('error-file');
                const fileUploadText = document.getElementById('file-upload-text');
                
                if (file) {
                    // Update displayed file name
                    fileUploadText.textContent = file.name;
                    fileUploadText.classList.add('file-selected');
                    
                    const validation = validateFile(file);
                    if (!validation.valid) {
                        errorFile.textContent = validation.message;
                        fileInput.value = ''; // Clear invalid file
                        fileUploadText.textContent = t('contact.form.file.noFile', getCurrentLanguage());
                        fileUploadText.classList.remove('file-selected');
                    } else {
                        errorFile.textContent = '';
                    }
                } else {
                    fileUploadText.textContent = t('contact.form.file.noFile', getCurrentLanguage());
                    fileUploadText.classList.remove('file-selected');
                }
            });
            console.log('[initContactForm] File input listener added');
        }
    } else {
        // Fallback to old WhatsApp method
        console.log('[initContactForm] Using WhatsApp fallback method');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.name.value.trim();
            const email = form.email.value.trim();
            const message = form.message.value.trim();

            if (!name || !email || !message) {
                alert('Mohon lengkapi nama, email, dan pesan.');
                return;
            }

            const text = `Halo YPBG, saya ${name} (${email}).%0A%0A${message}`;
            const url = `https://wa.me/628123456789?text=${text}`;

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Mengarahkan...';
            btn.disabled = true;

            setTimeout(() => {
                window.open(url, '_blank');
                btn.innerHTML = originalText;
                btn.disabled = false;
                form.reset();
            }, 1000);
        });
    }
    
    console.log('[initContactForm] Initialization complete');
}

function initNews() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    // Get current language
    const currentLang = localStorage.getItem('selectedLanguage') || 'id';

    newsGrid.innerHTML = config.newsData.map(item => {
        // Get translated content
        const titleKey = `news.${item.id}.title`;
        const excerptKey = `news.${item.id}.excerpt`;
        const categoryKey = `news.${item.id}.category`;

        const title = (translations[currentLang] && translations[currentLang][titleKey]) ||
                      (translations['id'] && translations['id'][titleKey]) || item.title;
        const excerpt = (translations[currentLang] && translations[currentLang][excerptKey]) ||
                        (translations['id'] && translations['id'][excerptKey]) || item.excerpt;
        const category = (translations[currentLang] && translations[currentLang][categoryKey]) ||
                         (translations['id'] && translations['id'][categoryKey]) || item.category;

        // Get translated "Read More" text
        const readMoreText = t('news.readmore', currentLang) || 'Baca Selengkapnya →';

        return `
        <article class="news-item fade-in-ready">
            <div class="news-image">
                <img src="${item.image}" alt="${title}" loading="lazy">
                <span class="news-category">${category}</span>
            </div>
            <div class="news-content">
                <div class="news-date">${item.date}</div>
                <h3 class="news-title">${title}</h3>
                <p class="news-excerpt">${excerpt}</p>
                <a href="#contact" class="news-read-more">${readMoreText}</a>
            </div>
        </article>
    `;
    }).join('');
}

function initFadeIn() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-ready').forEach(el => observer.observe(el));
}

function updateYear() {
    const el = document.getElementById('year');
    if (el) el.textContent = new Date().getFullYear();
}

function initHeaderShadow() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== WHATSAPP DRAGGABLE BUTTON =====
function initWhatsappDraggable() {
    const draggable = document.getElementById('whatsapp-draggable');
    const bubble = document.getElementById('whatsapp-bubble');
    if (!draggable || !bubble) return;

    const WHATSAPP_URL = 'https://wa.me/6282144240440';
    
    let isDragging = false;
    let hasMoved = false;
    let startX = 0, startY = 0, initialX = 0, initialY = 0;
    let currentX = 0, currentY = 0;

    // Load saved position
    const savedPosition = localStorage.getItem('whatsappPosition');
    if (savedPosition) {
        const pos = JSON.parse(savedPosition);
        currentX = pos.x || 0;
        currentY = pos.y || 0;
        draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
    }

    function savePosition() {
        localStorage.setItem('whatsappPosition', JSON.stringify({ x: currentX, y: currentY }));
    }

    // Mouse drag
    draggable.onmousedown = dragStart;
    function dragStart(e) {
        if (e.button !== 0) return;
        
        isDragging = false;
        hasMoved = false;
        startX = e.clientX;
        startY = e.clientY;
        initialX = currentX;
        initialY = currentY;
        
        document.onmousemove = drag;
        document.onmouseup = dragEnd;
    }
    
    function drag(e) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        
        if (!isDragging && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            isDragging = true;
            hasMoved = true;
            draggable.classList.add('dragging');
        }
        
        if (isDragging) {
            currentX = initialX + dx;
            currentY = initialY + dy;
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }
    
    function dragEnd() {
        document.onmousemove = null;
        document.onmouseup = null;
        
        if (isDragging) {
            draggable.classList.remove('dragging');
            savePosition();
        }
        isDragging = false;
    }

    // Touch drag
    draggable.ontouchstart = dragStartTouch;
    function dragStartTouch(e) {
        isDragging = false;
        hasMoved = false;
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        initialX = currentX;
        initialY = currentY;
        
        document.ontouchmove = dragTouch;
        document.ontouchend = dragEndTouch;
    }
    
    function dragTouch(e) {
        const dx = e.touches[0].clientX - startX;
        const dy = e.touches[0].clientY - startY;
        
        if (!isDragging && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
            isDragging = true;
            hasMoved = true;
            draggable.classList.add('dragging');
        }
        
        if (isDragging) {
            currentX = initialX + dx;
            currentY = initialY + dy;
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
        e.preventDefault();
    }
    
    function dragEndTouch() {
        document.ontouchmove = null;
        document.ontouchend = null;
        
        if (isDragging) {
            draggable.classList.remove('dragging');
            savePosition();
        }
        isDragging = false;
    }

    // Click handler - open WhatsApp if not dragged
    draggable.onclick = function() {
        if (!hasMoved) {
            window.open(WHATSAPP_URL, '_blank');
        }
        hasMoved = false;
    };

    // Keyboard support
    draggable.addEventListener('keydown', (e) => {
        const step = 20;
        let moved = false;
        
        switch (e.key) {
            case 'ArrowUp': currentY -= step; moved = true; break;
            case 'ArrowDown': currentY += step; moved = true; break;
            case 'ArrowLeft': currentX -= step; moved = true; break;
            case 'ArrowRight': currentX += step; moved = true; break;
            case 'Home': currentX = 0; currentY = 0; moved = true; break;
            case 'Enter':
            case ' ':
                e.preventDefault();
                window.open(WHATSAPP_URL, '_blank');
                return;
        }
        
        if (moved) {
            e.preventDefault();
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
            savePosition();
        }
    });

    // Resize handler
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const maxX = window.innerWidth - draggable.offsetWidth - 20;
            const maxY = window.innerHeight - draggable.offsetHeight - 20;
            currentX = Math.min(currentX, maxX);
            currentY = Math.min(currentY, maxY);
            draggable.style.transform = `translate(${currentX}px, ${currentY}px)`;
            savePosition();
        }, 250);
    });
}