#!/usr/bin/env node
'use strict';
// Checks markdown files under content/ (and optionally other paths given as
// argv) against the encoding fold table in docs/decisions/persian-encoding-fold.md.
// A content transform is never applied here -- this only reports violations.

const fs = require('fs');
const path = require('path');

const FORBIDDEN = [
  { name: 'یای عربی (Arabic yeh)', re: /ي/g, note: 'باید یای فارسی U+06CC باشد، مگر داخل نقل‌قول مستقیم عربی' },
  { name: 'الف مقصوره (Alef maksura)', re: /ى/g, note: 'باید یای فارسی U+06CC باشد، مگر داخل نقل‌قول مستقیم عربی' },
  { name: 'کاف عربی (Arabic kaf)', re: /ك/g, note: 'باید کاف فارسی U+06A9 باشد' },
  { name: 'ۀ پیش‌ترکیب‌شده (precomposed U+06C0)', re: /ۀ/g, note: 'باید دنبالهٔ U+0647 U+0654 باشد' },
  { name: 'ارقام عربی-هندی (Arabic-Indic digits)', re: /[٠-٩]/g, note: 'باید ارقام فارسی U+06F0-U+06F9 باشند' },
];

function walk(dir, out) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.isFile() && entry.name.endsWith('.md')) out.push(full);
  }
}

// docs/decisions/*.md is deliberately excluded from the default scope: those
// files document the forbidden characters by example (e.g. "do not use ي"),
// which legitimately contains the very characters this script flags. Pass an
// explicit path to lint anything outside content/ when needed.
const targets = process.argv.slice(2);
const roots = targets.length ? targets : ['content', 'STATUS.md', 'README.md', 'UPSTREAM-MAP.md'];

const files = [];
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  const stat = fs.statSync(root);
  if (stat.isDirectory()) walk(root, files);
  else if (root.endsWith('.md')) files.push(root);
}

let violationCount = 0;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const lines = text.split('\n');
  for (const rule of FORBIDDEN) {
    lines.forEach((line, i) => {
      const matches = line.match(rule.re);
      if (matches) {
        violationCount += matches.length;
        console.log(`${file}:${i + 1}  ${rule.name} × ${matches.length}  — ${rule.note}`);
      }
    });
  }
}

if (violationCount === 0) {
  console.log(`تمیز — ${files.length} فایل بررسی شد، هیچ خطای کدگذاری یافت نشد.`);
  process.exit(0);
} else {
  console.log(`\n${violationCount} خطای کدگذاری یافت شد در ${files.length} فایل بررسی‌شده.`);
  process.exit(1);
}
