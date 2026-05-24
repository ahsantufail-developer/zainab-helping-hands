import puppeteer from 'puppeteer';
import fs from 'fs';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport for a desktop layout
  await page.setViewport({ width: 1280, height: 1024 });

  const errors = [];
  const logs = [];
  
  // Capture console messages
  page.on('console', msg => logs.push(`${msg.type().toUpperCase()}: ${msg.text()}`));
  page.on('pageerror', err => errors.push(`PAGE ERROR: ${err.message}`));

  try {
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait an extra 2 seconds for any animations or slow effects to finish
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Take a screenshot
    await page.screenshot({ path: 'screenshot.png', fullPage: true });
    
    console.log(JSON.stringify({
      success: true,
      errors,
      logs
    }, null, 2));

  } catch (error) {
    console.error(JSON.stringify({
      success: false,
      error: error.message,
      errors,
      logs
    }, null, 2));
  } finally {
    await browser.close();
  }
})();