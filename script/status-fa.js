#!/usr/bin/env node
'use strict';
// Walks content/ for pages carrying front matter (title/slug/upstream/status),
// tallies them by status, and rewrites the generated block in STATUS.md
// between the AUTO markers. Replaces script/pattern-walk.js + status.js,
// which hardcoded pattern-library/ and design/design.md -- both gone under
// the content/ tree from ticket #7. No RxJS dependency; plain fs.

const fs = require('fs');
const path = require('path');

const CONTENT_ROOT = 'content';
const STATUS_FILE = 'STATUS.md';
const STATUS_ORDER = ['draft', 'translated', 'reviewed', 'published'];
const STATUS_LABEL = {
  draft: 'پیش‌نویس',
  translated: 'ترجمه‌شده',
  reviewed: 'بازبینی‌شده',
  published: 'منتشرشده',
};

function parseFrontMatter(text) {
  if (!text.startsWith('---\n')) return null;
  const end = text.indexOf('\n---', 4);
  if (end === -1) return null;
  const block = text.slice(4, end);
  const data = {};
  for (const line of block.split('\n')) {
    const m = line.match(/^([a-zA-Z_]+):\s*(.*)$/);
    if (m) data[m[1]] = m[2].trim();
  }
  return data;
}

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'README.md') out.push(full);
  }
}

const files = [];
if (fs.existsSync(CONTENT_ROOT)) walk(CONTENT_ROOT, files);

const pages = [];
for (const file of files) {
  const fm = parseFrontMatter(fs.readFileSync(file, 'utf8'));
  if (fm && fm.status) pages.push({ file, ...fm });
}

const tally = Object.fromEntries(STATUS_ORDER.map((s) => [s, 0]));
for (const p of pages) {
  if (tally[p.status] === undefined) tally[p.status] = 0;
  tally[p.status]++;
}

const lines = [];
lines.push(`_تولیدشده خودکار توسط \`script/status-fa.js\` — دستی ویرایش نکنید._`);
lines.push('');
lines.push(`**مجموع صفحات دارای front matter در \`content/\`: ${pages.length}**`);
lines.push('');
lines.push('| وضعیت | تعداد |');
lines.push('|---|---|');
for (const s of STATUS_ORDER) {
  lines.push(`| ${STATUS_LABEL[s] || s} | ${tally[s]} |`);
}
if (pages.length) {
  lines.push('');
  lines.push('| صفحه | عنوان | وضعیت |');
  lines.push('|---|---|---|');
  for (const p of pages) {
    lines.push(`| \`${p.file}\` | ${p.title || '—'} | ${STATUS_LABEL[p.status] || p.status} |`);
  }
}

const generated = lines.join('\n');

if (fs.existsSync(STATUS_FILE)) {
  const current = fs.readFileSync(STATUS_FILE, 'utf8');
  const startMarker = '<!-- STATUS:AUTO:START -->';
  const endMarker = '<!-- STATUS:AUTO:END -->';
  const startIdx = current.indexOf(startMarker);
  const endIdx = current.indexOf(endMarker);
  if (startIdx !== -1 && endIdx !== -1) {
    const updated =
      current.slice(0, startIdx + startMarker.length) +
      '\n\n' + generated + '\n\n' +
      current.slice(endIdx);
    fs.writeFileSync(STATUS_FILE, updated);
    console.log(`STATUS.md به‌روزرسانی شد — ${pages.length} صفحه یافت شد.`);
  } else {
    console.log('نشانگرهای STATUS:AUTO در STATUS.md یافت نشد — چیزی نوشته نشد.');
    console.log(generated);
  }
} else {
  console.log(generated);
}
