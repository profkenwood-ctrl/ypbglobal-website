const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'),'utf8');
const checks = [
  ['#mobile-menu-toggle', html.includes('id="mobile-menu-toggle"')],
  ['#nav-menu', html.includes('id="nav-menu"')],
  ['a[data-smooth]', html.includes('data-smooth')],
  ['#carousel-track', html.includes('id="carousel-track"')],
  ['#carousel-prev', html.includes('id="carousel-prev"')],
  ['#carousel-next', html.includes('id="carousel-next"')],
  ['#carousel-indicators', html.includes('id="carousel-indicators"')],
  ['#news-grid', html.includes('id="news-grid"')],
  ['#news-load-more', html.includes('id="news-load-more"')],
  ['#contact-form', html.includes('id="contact-form"')],
  ['form fields: name,email,phone,subject,message,privacy',
    html.includes('name="name"') && html.includes('name="email"') && html.includes('name="phone"') && html.includes('name="subject"') && html.includes('name="message"') && html.includes('name="privacy"')
  ],
  ['#whatsapp-btn', html.includes('id="whatsapp-btn"')]
];

console.log('Structural checks:');
let allPass = true;
checks.forEach(([name, ok]) => {
  console.log(`${ok ? '✔' : '✖'} ${name}`);
  if (!ok) allPass = false;
});

// asset checks
const assetRegex = /(?:src|data-src|href)\s*=\s*"(assets\/[^"]+)"/g;
let m; const assetPaths=new Set();
while((m=assetRegex.exec(html))!==null){ assetPaths.add(m[1]); }

console.log('\nAsset checks:');
const missing = [];
assetPaths.forEach(p=>{ const full = path.resolve(__dirname,'..',p); if(!fs.existsSync(full)) missing.push(p); });
if(missing.length===0) console.log('✔ All referenced assets exist'); else { console.log('✖ Missing assets:'); missing.forEach(x=>console.log(' -',x)); allPass=false; }

process.exit(allPass?0:2);
