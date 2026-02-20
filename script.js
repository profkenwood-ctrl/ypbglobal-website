// ===== KONFIGURASI =====
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

// ===== INISIALISASI =====
document.addEventListener('DOMContentLoaded', () => {
    // Muat bahasa yang disimpan dan terapkan translasi
    const savedLang = loadSavedLanguage();
    if (typeof translateAllPage === 'function') {
        translateAllPage(savedLang);
    }

    // Inisialisasi tema
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

// ===== TOGGLE TEMA =====
function initThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    // Muat preferensi tema yang disimpan
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Toggle tema saat diklik
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');

        console.log('[Tema] Beralih ke mode', isDark ? 'gelap' : 'terang');
    });
}

// Dapatkan bahasa saat ini
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'id';
}

// ===== FUNGSI-FUNGSI =====

function initMobileMenu() {
    const toggle = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('nav-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('active');
        toggle.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Tutup menu saat mengklik tautan navigasi
    menu.querySelectorAll('a.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Tutup menu saat mengklik opsi bahasa
    menu.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', () => {
            menu.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
            document.body.style.overflow = '';
        });
    });

    // Handle toggle dropdown untuk menu "Pustaka" di mobile
    const dropdownToggles = menu.querySelectorAll('.nav-dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = toggle.closest('.nav-dropdown');
            if (parent) {
                parent.classList.toggle('active');
            }
        });
    });
}

function initLanguageSelector() {
    const selector = document.querySelector('.language-selector');
    const toggle = document.querySelector('.lang-toggle');
    const options = document.querySelectorAll('.lang-option');
    const footerSelect = document.getElementById('language-select');

    if (!selector || !toggle) return;

    // Muat bahasa yang disimpan saat halaman dimuat
    const savedLang = loadSavedLanguage();
    updateLanguageUI(savedLang, options, toggle);
    if (footerSelect) footerSelect.value = savedLang;

    // Toggle dropdown
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        selector.classList.toggle('active');
    });

    // Tutup dropdown saat mengklik di luar
    document.addEventListener('click', (e) => {
        if (!selector.contains(e.target)) {
            selector.classList.remove('active');
        }
    });

    // Handle pemilihan bahasa dari menu
    options.forEach(option => {
        option.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = option.dataset.lang;

            // Ubah bahasa halaman
            if (typeof translateAllPage === 'function') {
                translateAllPage(lang);
            }

            // Perbarui status aktif
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');

            // Perbarui tampilan toggle
            updateLanguageUI(lang, options, toggle);

            // Sinkronisasi selector footer
            if (footerSelect) footerSelect.value = lang;

            // Tutup dropdown
            selector.classList.remove('active');

            console.log('[Bahasa] Diubah ke:', lang);
        });
    });

    // Handle pemilihan bahasa dari selector footer
    if (footerSelect) {
        footerSelect.addEventListener('change', (e) => {
            const lang = e.target.value;

            // Ubah bahasa halaman
            if (typeof translateAllPage === 'function') {
                translateAllPage(lang);
            }

            // Perbarui selector menu
            options.forEach(opt => {
                opt.classList.remove('active');
                if (opt.dataset.lang === lang) {
                    opt.classList.add('active');
                }
            });

            // Perbarui tampilan toggle
            updateLanguageUI(lang, options, toggle);

            // Tutup dropdown menu jika terbuka
            selector.classList.remove('active');

            console.log('[Bahasa] Diubah ke:', lang);
        });
    }
}

function updateLanguageUI(lang, options, toggle) {
    const currentLang = document.querySelector('.lang-current');
    if (currentLang) {
        // Temukan teks opsi yang dipilih
        const selectedOption = document.querySelector(`.lang-option[data-lang="${lang}"]`);
        if (selectedOption) {
            // Tampilkan nama negara lengkap (mis. "Bahasa Indonesia", "English (United States)")
            currentLang.textContent = selectedOption.textContent.trim();
        } else {
            // Fallback ke kode bahasa jika opsi tidak ditemukan
            currentLang.textContent = lang.toUpperCase();
        }
    }

    // Perbarui status aktif
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
    // Galeri Gaya Apple Baru
    const appleTrack = document.getElementById('gallery-apple-track');
    const appleIndicators = document.getElementById('gallery-apple-indicators');
    const applePrevBtn = document.getElementById('gallery-apple-prev');
    const appleNextBtn = document.getElementById('gallery-apple-next');

    if (appleTrack) {
        let index = 0;

        // Buat slide dengan keterangan
        appleTrack.innerHTML = config.galleryImages.map(img => `
            <div class="gallery-apple-slide">
                <img src="${img.src}" alt="${img.title}" loading="lazy">
                <div class="gallery-apple-caption">
                    <h4 data-text="${img.title}">${img.title}</h4>
                    <p>Kegiatan YPBG untuk masyarakat</p>
                </div>
            </div>
        `).join('');

        // Buat indikator
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

            // Reset animasi pada keterangan
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

    // Carousel Lama - Simpan untuk fallback
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
    console.log('[initContactForm] Fungsi dipanggil');

    const form = document.getElementById('contact-form');
    console.log('[initContactForm] Elemen form:', form);

    if (!form) {
        console.error('[initContactForm] Form tidak ditemukan!');
        return;
    }

    // Tambahkan listener debug terlebih dahulu
    form.addEventListener('submit', (e) => {
        console.log('=== EVENT SUBMIT FORM TERDETEKSI ===');
        console.log('Tombol submit diklik!');
    });

    // Periksa apakah integrasi Google Drive tersedia
    const googleScriptUrl = typeof GOOGLE_SCRIPT_URL !== 'undefined' ? GOOGLE_SCRIPT_URL : null;
    const hasHandleSubmit = typeof handleContactFormSubmit === 'function';

    console.log('[initContactForm] URL Google Script:', googleScriptUrl);
    console.log('[initContactForm] handleContactFormSubmit tersedia:', hasHandleSubmit);

    if (googleScriptUrl && hasHandleSubmit) {
        // Gunakan integrasi Google Drive
        console.log('[initContactForm] Menggunakan integrasi Google Drive');
        form.addEventListener('submit', handleContactFormSubmit);

        // Tambahkan listener perubahan input file untuk validasi real-time
        const fileInput = document.getElementById('form-file');
        console.log('[initContactForm] Input file:', fileInput);

        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                const errorFile = document.getElementById('error-file');
                const fileUploadText = document.getElementById('file-upload-text');

                if (file) {
                    // Perbarui nama file yang ditampilkan
                    fileUploadText.textContent = file.name;
                    fileUploadText.classList.add('file-selected');

                    const validation = validateFile(file);
                    if (!validation.valid) {
                        errorFile.textContent = validation.message;
                        fileInput.value = ''; // Hapus file yang tidak valid
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
            console.log('[initContactForm] Listener input file ditambahkan');
        }
    } else {
        // Fallback ke metode WhatsApp lama
        console.log('[initContactForm] Menggunakan metode fallback WhatsApp');
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

    console.log('[initContactForm] Inisialisasi selesai');
}

function initNews() {
    const newsGrid = document.getElementById('news-grid');
    if (!newsGrid) return;

    // Dapatkan bahasa saat ini
    const currentLang = localStorage.getItem('selectedLanguage') || 'id';

    newsGrid.innerHTML = config.newsData.map(item => {
        // Dapatkan konten yang diterjemahkan
        const titleKey = `news.${item.id}.title`;
        const excerptKey = `news.${item.id}.excerpt`;
        const categoryKey = `news.${item.id}.category`;

        const title = (translations[currentLang] && translations[currentLang][titleKey]) ||
                      (translations['id'] && translations['id'][titleKey]) || item.title;
        const excerpt = (translations[currentLang] && translations[currentLang][excerptKey]) ||
                        (translations['id'] && translations['id'][excerptKey]) || item.excerpt;
        const category = (translations[currentLang] && translations[currentLang][categoryKey]) ||
                         (translations['id'] && translations['id'][categoryKey]) || item.category;

        // Dapatkan teks "Baca Selengkapnya" yang diterjemahkan
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

// ===== TOMBOL WHATSAPP YANG BISA DIGESER =====
function initWhatsappDraggable() {
    const draggable = document.getElementById('whatsapp-draggable');
    const bubble = document.getElementById('whatsapp-bubble');
    if (!draggable || !bubble) return;

    const WHATSAPP_URL = 'https://wa.me/6282144240440';

    let isDragging = false;
    let hasMoved = false;
    let startX = 0, startY = 0, initialX = 0, initialY = 0;
    let currentX = 0, currentY = 0;

    // Muat posisi yang disimpan
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

    // Drag mouse
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

    // Drag touch
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

    // Handler klik - buka WhatsApp jika tidak digeser
    draggable.onclick = function() {
        if (!hasMoved) {
            window.open(WHATSAPP_URL, '_blank');
        }
        hasMoved = false;
    };

    // Dukungan keyboard
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

    // Handler resize
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