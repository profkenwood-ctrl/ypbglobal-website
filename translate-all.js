// ===== SISTEM TRANSLASI =====
// File ini menangani semua translasi untuk website

function translateAllPage(lang) {
    console.log('[Translate] Menerjemahkan ke:', lang);

    // Perbarui atribut lang HTML
    document.documentElement.lang = lang;

    // Handle RTL untuk Arab - Terapkan ke body, bukan html, untuk mencegah masalah layout
    if (lang === 'ar') {
        document.body.setAttribute('dir', 'rtl');
        document.body.style.direction = 'rtl';
        document.body.style.textAlign = 'right';
    } else {
        document.body.setAttribute('dir', 'ltr');
        document.body.style.direction = 'ltr';
        document.body.style.textAlign = 'left';
    }

    // Terjemahkan semua elemen dengan atribut data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getTranslation(key, lang);
        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });

    // Terjemahkan semua elemen dengan atribut data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, lang);
        if (translation && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
            element.placeholder = translation;
        }
    });

    // Simpan preferensi bahasa
    localStorage.setItem('selectedLanguage', lang);

    console.log('[Translate] Translasi selesai untuk:', lang);
}

// Dapatkan translasi dari objek translations
function getTranslation(key, lang) {
    if (typeof translations === 'undefined') {
        return key;
    }

    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }

    // Fallback ke Bahasa Indonesia
    if (translations['id'] && translations['id'][key]) {
        return translations['id'][key];
    }

    return key;
}

// Dapatkan bahasa saat ini
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'id';
}

// Muat bahasa yang disimpan saat halaman dimuat
function loadSavedLanguage() {
    const savedLang = getCurrentLanguage();
    return savedLang;
}

// Inisialisasi translasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = loadSavedLanguage();
    console.log('[Translate] Bahasa tersimpan:', savedLang);

    // Tunggu sebentar untuk semua script dimuat
    setTimeout(function() {
        if (typeof translations !== 'undefined') {
            translateAllPage(savedLang);
            console.log('[Translate] Translasi awal diterapkan');
        }
    }, 500);
});

// Ekspor fungsi
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translateAllPage, getTranslation, getCurrentLanguage };
}
