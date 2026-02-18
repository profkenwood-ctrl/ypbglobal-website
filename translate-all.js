// ===== TRANSLATION SYSTEM =====
// This file handles all translations for the website

function translateAllPage(lang) {
    console.log('[Translate] Translating to:', lang);
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Handle RTL for Arabic
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
    }
    
    // Translate all elements with data-i18n attribute
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
    
    // Translate all elements with data-i18n-placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const translation = getTranslation(key, lang);
        if (translation && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
            element.placeholder = translation;
        }
    });
    
    // Save language preference
    localStorage.setItem('selectedLanguage', lang);
    
    console.log('[Translate] Translation complete for:', lang);
}

// Get translation from translations object
function getTranslation(key, lang) {
    if (typeof translations === 'undefined') {
        return key;
    }
    
    if (translations[lang] && translations[lang][key]) {
        return translations[lang][key];
    }
    
    // Fallback to Indonesian
    if (translations['id'] && translations['id'][key]) {
        return translations['id'][key];
    }
    
    return key;
}

// Get current language
function getCurrentLanguage() {
    return localStorage.getItem('selectedLanguage') || 'id';
}

// Load saved language on page load
function loadSavedLanguage() {
    const savedLang = getCurrentLanguage();
    return savedLang;
}

// Initialize translations on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLang = loadSavedLanguage();
    console.log('[Translate] Saved language:', savedLang);
    
    // Wait a bit for all scripts to load
    setTimeout(function() {
        if (typeof translations !== 'undefined') {
            translateAllPage(savedLang);
            console.log('[Translate] Initial translation applied');
        }
    }, 500);
});

// Export functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translateAllPage, getTranslation, getCurrentLanguage };
}
