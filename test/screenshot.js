const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer-core');

const chromePaths = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium'
];
let executablePath = chromePaths.find(p => require('fs').existsSync(p));
if (!executablePath) {
  console.error('No system Chrome/Chromium found at common paths. Please install Chrome or adjust executablePath.');
  process.exit(2);
}

(async () => {
  const browser = await puppeteer.launch({ executablePath, args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  const url = 'http://localhost:8000';

  const shots = [
    { name: 'desktop', width: 1400, height: 900 },
    { name: 'tablet', width: 900, height: 1200 },
    { name: 'mobile', width: 375, height: 812 }
  ];

  if (!fs.existsSync(path.resolve(__dirname, '..', 'screenshots'))) fs.mkdirSync(path.resolve(__dirname, '..', 'screenshots'));

  for (const s of shots) {
    await page.setViewport({ width: s.width, height: s.height, deviceScaleFactor: 2 });
    await page.goto(url, { waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 600));
    const file = path.resolve(__dirname, '..', 'screenshots', `screenshot-${s.name}.png`);
    await page.screenshot({ path: file, fullPage: true });
    console.log('Saved', file);
  }

  await browser.close();
})();
