#!/usr/bin/env node

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const URL = 'https://hawee-leadership-program.vercel.app/';
const OUTPUT_DIR = path.join(__dirname, '..', 'outputs');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'HAWEE-Leadership-Program-Landing.pdf');

(async () => {
  console.log('📄 Exporting landing page to PDF...');

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    const page = await browser.newPage();

    // Set viewport to A4 width for better PDF formatting
    await page.setViewport({ width: 1200, height: 1600 });

    // Navigate to the page
    console.log(`🌐 Loading ${URL}...`);
    await page.goto(URL, { waitUntil: 'networkidle2', timeout: 30000 });

    // Wait for animations to settle
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Generate PDF
    console.log(`💾 Generating PDF: ${OUTPUT_FILE}`);
    await page.pdf({
      path: OUTPUT_FILE,
      format: 'A4',
      margin: { top: '1cm', right: '1cm', bottom: '1cm', left: '1cm' },
      printBackground: true,
      displayHeaderFooter: false,
    });

    console.log('✅ PDF exported successfully!');
    console.log(`📁 Location: ${OUTPUT_FILE}`);

  } catch (error) {
    console.error('❌ Error exporting PDF:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
