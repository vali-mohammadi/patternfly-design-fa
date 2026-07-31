# راهنمای مشارکت — Contributing to patternfly-design-fa

خوشحالیم که به فکر مشارکت افتاده‌اید! این سند جایگزین کامل نسخهٔ بالادستی است — نسخهٔ قبلی
برای مخزن اصلی PatternFly نوشته شده بود (لیست پستی، تیم نگهدارندگان، سایت انتشار خودکار) که
هیچ‌کدام در این فورک وجود ندارد.

## این پروژه چیست

**patternfly-design-fa** اقتباس فارسی و راست‌به‌چین نظام طراحی PatternFly است — نه ترجمهٔ
واژه‌به‌واژه. جزئیات کامل در [README](./README.md) و
[نقشهٔ راه](https://github.com/vali-mohammadi/patternfly-design-fa/issues/1).

## قبل از هر چیز: این چهار سند را بخوانید

هر مشارکتی — چه ترجمهٔ صفحهٔ تازه، چه اصلاح یک صفحهٔ موجود — باید این چهار تصمیم را رعایت
کند:

1. **[شیوه‌نامهٔ نگارش](./docs/decisions/writing-conventions.md)** — نیم‌فاصله، نشانه‌گذاری،
   قالب اعداد، کسرهٔ اضافه.
2. **[گلوسری](./docs/glossary.md)** — واژهٔ هر مفهوم را اینجا پیدا یا اضافه کنید؛ رجیستر
   (بومی در برابر وام‌واژه) طبق [قاعدهٔ رجیستر](./docs/decisions/terminology-register.md).
3. **[جدول قرینه‌سازی](./docs/decisions/mirror-table.md)** — کدام عناصر در راست‌به‌چین
   برمی‌گردند و کدام نه، با استدلال هرکدام.
4. **[معماری اطلاعات](./docs/decisions/information-architecture.md)** — نام‌گذاری پوشه/فایل
   (نشانی‌ها لاتین، عنوان‌ها فارسی) و ساختار درخت `content/`.

## ساختار مخزن

| مسیر | محتوا |
|---|---|
| `content/` | درخت محتوای منتشرشده — مقصد نهایی هر ترجمه |
| `docs/decisions/` | سیاست‌های تصمیم‌گیری‌شده (بالا) |
| `docs/glossary.md` | گلوسری زنده |
| `UPSTREAM-MAP.md` | هر صفحهٔ فارسی به کدام فایل بالادستی مربوط است |
| `pattern-library/`, `patternfly-4/`, `styles/` | محتوای اصلی انگلیسی PatternFly — منبع، دست‌نخورده |
| `.eleventy.js`, `_includes/` | اسکلت سایت — `npm run serve` برای پیش‌نمایش محلی |

## گردش کار افزودن یا ویرایش یک صفحه

1. صفحهٔ بالادستی مربوطه را در `pattern-library/` یا `patternfly-4/components/` بخوانید.
2. طبق چهار سند بالا ترجمه کنید — نه واژه‌به‌واژه، بلکه با راهنمایی و زمینهٔ اضافه در جای
   لازم (طبق [teaching-layer.md](./docs/decisions/teaching-layer.md)).
3. جهت‌های راهنمای اصلی را قرینه کنید و هرجا قرینه کردید، با یک callout `> **قرینه‌سازی:**`
   مستند کنید — تا خواننده بداند این تصمیم آگاهانه بوده، نه اشتباه ترجمه.
4. واژه‌های تازه را به `docs/glossary.md` اضافه کنید.
5. ردیف مربوط را در `UPSTREAM-MAP.md` ثبت کنید.
6. این دو اسکریپت را اجرا کنید:

   ```
   node script/lint-fa.js       # نویسه‌های عربی/کدگذاری اشتباه را پیدا می‌کند
   node script/status-fa.js     # STATUS.md را به‌روزرسانی می‌کند
   ```

7. اگر پیوند داخلی تازه‌ای اضافه کردید، سایت را بسازید و بررسی کنید:

   ```
   npm install
   npm run build
   node script/check-links.js   # پیوندها و نشانگرهای شکسته را پیدا می‌کند
   ```

## دام‌های رایج

- **اعداد فارسی در ابتدای فهرست‌های شماره‌دار مارک‌داون کار نمی‌کنند** — `۱.` به‌عنوان
  نشانگر فهرست پارس نمی‌شود. برای فهرست از اعداد لاتین (`1.`) استفاده کنید؛ اعداد فارسی فقط
  در متن روان.
- **لینک‌های داخلی محتوا نسبی و بدون پسوند `.md` نوشته می‌شوند** (`./wizard`، نه
  `./wizard.md`) — طوری که هم روی گیت‌هاب و هم روی سایت ساخته‌شده درست کار کنند.
- **`docs/decisions/` از بررسی `lint-fa.js` مستثناست** — چون این پوشه گاهی عمداً نویسه‌های
  «ممنوع» را به‌عنوان نمونه نقل‌قول می‌کند. اگر واقعاً باید در یک صفحهٔ `content/` نویسه‌ای
  از این دست نقل کنید، `lint_exempt_encoding: true` را در front matter آن فایل اضافه کنید —
  بدون کامنت روی همان خط (چون رجکس دقیقاً همان یک خط را می‌خواهد).

## بررسی و ادغام (Review)

این پروژه فعلاً **یک نگهدارنده دارد** — بررسی مستقیم روی `master` انجام می‌شود، نه با تأیید
چند نفره. این وضعیت **موقتی** است؛ با رشد مشارکت‌کنندگان، این بخش بازنویسی خواهد شد.

## گزارش اشکال یا پیشنهاد

از [Issues همین مخزن](https://github.com/vali-mohammadi/patternfly-design-fa/issues) استفاده
کنید — نه مخزن بالادستی PatternFly، که کاملاً پروژهٔ متفاوتی است.

---

## English

This is a full replacement for the upstream `CONTRIBUTING.md`, which assumed the original
`patternfly/patternfly-design` repo's infrastructure (mailing list, maintainer team, an
automatic publish pipeline to patternfly.org) — none of which exists in this fork.

**Before contributing**, read the four governing decisions: [writing conventions](./docs/decisions/writing-conventions.md),
the [glossary](./docs/glossary.md), the [mirror table](./docs/decisions/mirror-table.md), and
[information architecture](./docs/decisions/information-architecture.md). Then follow the
workflow above: translate against those four documents (not word-for-word), document every
mirrored direction with a `> **قرینه‌سازی:**` callout, add new terms to the glossary, log the
page in `UPSTREAM-MAP.md`, and run `script/lint-fa.js` + `script/status-fa.js` before opening
a PR. If you touched internal links, build the site (`npm run build`) and run
`script/check-links.js`.

Review is currently single-maintainer, direct-to-`master` — flagged provisional, to be
rewritten as the contributor base grows. File issues on
[this repo](https://github.com/vali-mohammadi/patternfly-design-fa/issues), not upstream.
