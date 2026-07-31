#!/usr/bin/env node
// Walks _site/**/*.html, checks every internal href/src resolves to a real file
// (accounting for Eleventy's directory-per-page + index.html convention) and every
// #fragment matches a real id in the target page. Run after `npm run build`.

const fs = require('fs');
const path = require('path');

const SITE_DIR = path.join(__dirname, '..', '_site');
// Matches PATH_PREFIX in .eleventy.js -- the site is a GitHub Pages project page, served
// under this subpath, but the physical _site/ layout on disk doesn't include it.
const PATH_PREFIX = '/patternfly-design-fa/';

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function resolveUrlToFile(urlPath) {
  let clean = urlPath.split('#')[0].split('?')[0];
  if (clean.startsWith(PATH_PREFIX)) clean = '/' + clean.slice(PATH_PREFIX.length);
  if (clean === '' || clean === '/') return path.join(SITE_DIR, 'index.html');
  const withoutTrailingSlash = clean.replace(/\/$/, '');
  const asIs = path.join(SITE_DIR, clean);
  const asDir = path.join(SITE_DIR, withoutTrailingSlash, 'index.html');
  const asFile = path.join(SITE_DIR, withoutTrailingSlash + '.html');
  if (fs.existsSync(asIs) && fs.statSync(asIs).isFile()) return asIs;
  if (fs.existsSync(asDir)) return asDir;
  if (fs.existsSync(asFile)) return asFile;
  return null;
}

const files = walk(SITE_DIR);
let errors = 0;

for (const file of files) {
  const html = fs.readFileSync(file, 'utf-8');
  const rel = path.relative(SITE_DIR, file);
  const hrefRe = /(?:href|src)="([^"]+)"/g;
  let match;
  while ((match = hrefRe.exec(html))) {
    const url = match[1];
    if (!url.startsWith('/') || url.startsWith('//')) continue; // skip external/protocol-relative
    const targetFile = resolveUrlToFile(url);
    if (!targetFile) {
      console.error(`[404]     ${rel} -> ${url}`);
      errors++;
      continue;
    }
    const fragment = url.split('#')[1];
    if (fragment) {
      const targetHtml = fs.readFileSync(targetFile, 'utf-8');
      const idRe = new RegExp(`id="${fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"`);
      if (!idRe.test(targetHtml)) {
        console.error(`[#anchor] ${rel} -> ${url} (no id="${fragment}" in target)`);
        errors++;
      }
    }
  }
}

if (errors === 0) {
  console.log(`سالم — ${files.length} فایل بررسی شد، هیچ پیوند یا نشانگر شکسته‌ای یافت نشد.`);
  process.exit(0);
} else {
  console.error(`${errors} پیوند یا نشانگر شکسته یافت شد.`);
  process.exit(1);
}
