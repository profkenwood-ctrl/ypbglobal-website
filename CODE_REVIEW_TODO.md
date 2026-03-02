# YPBGlobal Website - Code Review TODO List

## Completed Review: Files Analyzed
- ✅ index.html (Main HTML file)
- ✅ style.css (Styles - 8000+ lines)
- ✅ script.js (JavaScript - 8956 lines)

---

## HIGH PRIORITY ISSUES

### 1. Code Organization & Duplication
- [ ] **index.html**: Remove inline CSS from `<style>` tag (lines 29-162) - duplicates style.css
- [ ] **index.html**: Move inline JavaScript (bottom of file) to script.js
- [ ] **style.css**: Split into modular files (base.css, components.css, layouts.css)
- [ ] **script.js**: Split into modules (translations.js, components.js, utils.js)

### 2. CSS Best Practices
- [ ] Remove overuse of `!important` declarations
- [ ] Consolidate duplicate dark mode rules
- [ ] Standardize naming convention (use BEM consistently)

### 3. Performance
- [ ] Add minification for production (CSS & JS)
- [ ] Implement lazy loading for images
- [ ] Optimize large external image URLs

---

## MEDIUM PRIORITY ISSUES

### 4. Accessibility
- [ ] Add descriptive alt text for all images using external URLs
- [ ] Verify keyboard navigation works for all interactive elements
- [ ] Add more ARIA labels where needed

### 5. SEO Improvements
- [ ] Add Open Graph meta tags
- [ ] Add JSON-LD structured data
- [ ] Add canonical URLs

### 6. JavaScript
- [ ] Add error handling to DOM manipulation functions
- [ ] Optimize frequent DOM queries (cache selectors)
- [ ] Add JSDoc comments for functions

---

## LOW PRIORITY / SUGGESTIONS

### 7. Code Quality
- [ ] Add consistent code formatting
- [ ] Set up ESLint for JavaScript
- [ ] Add CSS linting

### 8. Maintainability
- [ ] Create component documentation
- [ ] Add code comments for complex logic
- [ ] Set up build process (if not already)

---

## TRANSLATIONS STATUS
- ✅ Indonesian (id) - Complete
- ✅ English US (en-us) - Complete  
- ✅ Spanish Latin America (es-latam) - Complete
- ✅ Spanish Spain (es) - Complete
- ⚠️ Other languages - Need to verify

---

## Files Structure Recommendation
```
/
├── index.html
├── script.js          (Main entry - imports modules)
├── style.css          (Main entry - imports partials)
├── js/
│   ├── translations.js
│   ├── components.js
│   └── utils.js
├── css/
│   ├── _variables.css
│   ├── _base.css
│   ├── _components.css
│   └── _layouts.css
└── assets/
```

---

## Notes
- Website has good foundation with i18n support
- Apple-inspired design is well implemented
- Dark mode support is comprehensive
- Need to address file size for better performance

