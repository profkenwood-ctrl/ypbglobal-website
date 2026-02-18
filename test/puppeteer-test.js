const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox','--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));

  const url = 'http://localhost:8000';
  console.log('Visiting', url);
  await page.goto(url, { waitUntil: 'networkidle2' });

  // Check mobile menu toggle
  const menuToggle = await page.$('#mobile-menu-toggle');
  if (menuToggle) {
    await menuToggle.click();
    await page.waitForTimeout(300);
    const navActive = await page.$eval('#nav-menu', el => el.classList.contains('active'));
    console.log('Mobile menu active?', navActive);
  } else console.log('No mobile menu toggle found');

  // Check smooth-scroll attribute on first nav link and click
  const firstNav = await page.$('a[data-smooth]');
  if (firstNav) {
    await firstNav.click();
    await page.waitForTimeout(500);
    const hash = await page.evaluate(() => location.hash);
    console.log('After click, location.hash =', hash);
  }

  // Check carousel next button moves track
  const trackBefore = await page.$eval('#carousel-track', el => el.style.transform || '');
  await page.click('#carousel-next');
  await page.waitForTimeout(600);
  const trackAfter = await page.$eval('#carousel-track', el => el.style.transform || '');
  console.log('Carousel transform before/after:', trackBefore, '=>', trackAfter);

  // Test news modal open
  const readMore = await page.$('.news-read-more');
  if (readMore) {
    await readMore.click();
    await page.waitForSelector('.modal.active', { timeout: 2000 }).catch(()=>{});
    const modalOpen = await page.$eval('.modal', el => el.classList.contains('active')) .catch(()=>false);
    console.log('News modal opened?', !!modalOpen);
    // close modal
    await page.click('.modal-close').catch(()=>{});
  } else console.log('No news-read-more links found');

  // Test contact form validation: submit empty -> expect error messages
  await page.click('a[data-smooth][href*="#contact"]').catch(()=>{});
  await page.waitForSelector('#contact-form');
  await page.click('#contact-form button[type="submit"]');
  await page.waitForTimeout(400);
  const errName = await page.$eval('#error-name', el => el.textContent.trim() || null).catch(()=>null);
  console.log('Validation error for name present?', !!errName);

  // Fill form and submit
  await page.type('#form-name', 'Test User');
  await page.type('#form-email', 'test@example.com');
  await page.type('#form-phone', '+628123456789');
  await page.select('#form-subject', 'donasi');
  await page.type('#form-message', 'Ini pesan uji coba dari automation.');
  await page.click('#contact-form input[name="privacy"]');
  await page.click('#contact-form button[type="submit"]');
  await page.waitForTimeout(800);
  const formMsg = await page.$eval('#form-message-box', el => el.textContent.trim()).catch(()=>'');
  console.log('Form submit message:', formMsg);

  // WhatsApp link
  const waHref = await page.$eval('#whatsapp-btn', el => el.getAttribute('href')).catch(()=>null);
  console.log('WhatsApp href:', waHref);

  await browser.close();
})();