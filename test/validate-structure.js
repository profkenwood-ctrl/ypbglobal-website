const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'),'utf8');
const dom = new JSDOM(html);
const doc = dom.window.document;

const checks = [
  ['#mobile-menu-toggle', !!doc.querySelector('#mobile-menu-toggle')],
  ['#nav-menu', !!doc.querySelector('#nav-menu')],
  ['a[data-smooth]', !!doc.querySelector('a[data-smooth]')],
  ['#carousel-track', !!doc.querySelector('#carousel-track')],
  ['#carousel-prev', !!doc.querySelector('#carousel-prev')],
  ['#carousel-next', !!doc.querySelector('#carousel-next')],
  ['#carousel-indicators', !!doc.querySelector('#carousel-indicators')],
  ['#news-grid', !!doc.querySelector('#news-grid')],
  ['#news-load-more', !!doc.querySelector('#news-load-more')],
  ['#contact-form', !!doc.querySelector('#contact-form')],
  ['form fields: name,email,phone,subject,message,privacy',
    !!doc.querySelector('#contact-form [name="name"]') && !!doc.querySelector('#contact-form [name="email"]') && !!doc.querySelector('#contact-form [name="phone"]') && !!doc.querySelector('#contact-form [name="subject"]') && !!doc.querySelector('#contact-form [name="message"]') && !!doc.querySelector('#contact-form [name="privacy"]')
  ],
  ['#whatsapp-btn', !!doc.querySelector('#whatsapp-btn')]
];

console.log('Structural checks:');
let allPass = true;
checks.forEach(([name, ok]) => {
  console.log(`${ok ? '✔' : '✖'} ${name}`);
  if (!ok) allPass = false;
});

// check referenced assets exist on disk
const assetAttrs = [];
Array.from(doc.querySelectorAll('[src], [data-src], [href]')).forEach(el=>{
  if (el.hasAttribute('src')) assetAttrs.push(el.getAttribute('src'));
  if (el.hasAttribute('data-src')) assetAttrs.push(el.getAttribute('data-src'));
  if (el.hasAttribute('href')) assetAttrs.push(el.getAttribute('href'));
});
const assetPaths = assetAttrs.filter(p=>p.startsWith('assets/'));
const missing = [];
assetPaths.forEach(p => {
  const full = path.resolve(__dirname, '..', p);
  if (!fs.existsSync(full)) missing.push(p);
});
console.log('\nAsset check:');
if (missing.length===0) console.log('✔ All referenced assets exist'); else { console.log('✖ Missing assets:'); missing.forEach(m=>console.log(' -',m)); allPass = false; }

process.exit(allPass?0:2);
