# نظام طراحی فارسی PatternFly — patternfly-design-fa

> ⚠️ **این یک اقتباس غیررسمی است.** هیچ وابستگی، تأیید یا پشتیبانی رسمی از سوی Red Hat یا
> پروژهٔ PatternFly ندارد. جزئیات در [NOTICE](./NOTICE).

اقتباسی فارسی و **راست‌به‌چین (RTL)** از نظام طراحی [PatternFly](https://www.patternfly.org) —
نه ترجمه‌ای واژه‌به‌واژه، بلکه بازنویسی و بازآرایی راهنماهای طراحی برای طراحان فارسی‌زبان:
چیدمان‌ها برای راست‌به‌چین قرینه شده‌اند، واژگان طبق یک قاعدهٔ مستند بازبینی شده، و بخش‌هایی
تازه — به‌ویژه راهنمای تفاوت طراحی راست‌به‌چین و چپ‌به‌راست — اضافه شده که در نسخهٔ اصلی
وجود ندارد.

## وضعیت این پروژه

این پروژه **مرحله‌به‌مرحله** پیش می‌رود، نه یک‌باره. وضعیت فعلی و گام بعدی همیشه در
**[STATUS.md](./STATUS.md)** ثبت است.

نقشهٔ راه کامل تصمیم‌ها و دسته‌های ترجمه در Issue شمارهٔ ۱ نگه‌داری می‌شود:
[نقشهٔ راه: نظام طراحی فارسی PatternFly](https://github.com/vali-mohammadi/patternfly-design-fa/issues/1)

## ساختار مخزن

| مسیر | محتوا |
|---|---|
| [`docs/decisions/`](./docs/decisions) | سیاست‌های تصمیم‌گیری‌شده: گلوسری، شیوه‌نامهٔ نگارش، جدول قرینه‌سازی، قلم، یکسان‌سازی کدگذاری، معماری اطلاعات |
| [`research/`](./research) | یافته‌های پژوهشی پشتوانهٔ این تصمیم‌ها، با منبع |
| [`content/`](./content) | درخت محتوای منتشرشده — مبانی، مؤلفه‌ها، الگوها، راست‌به‌چین. مراحل ۰ تا ۱۰ [فهرست اولویت](https://github.com/vali-mohammadi/patternfly-design-fa/issues/8) کامل شده‌اند — ۹۰ صفحه |
| [`UPSTREAM-MAP.md`](./UPSTREAM-MAP.md) | ردیابی اینکه هر صفحهٔ فارسی از کدام فایل بالادستی می‌آید |
| `.eleventy.js`, `_includes/` | اسکلت سایت Eleventy — `npm install && npm run serve` برای پیش‌نمایش محلی |
| `pattern-library/`, `patternfly-4/`, `styles/` | محتوای اصلی انگلیسی PatternFly، هنوز دست‌نخورده — منبع بازبینی و ترجمه |

## اجرای محلی سایت

```
npm install
npm run serve
```

سایت روی `http://localhost:8080` بالا می‌آید. `npm run build` هم خروجی استاتیک را در
`_site/` می‌سازد. میزبانی و انتشار عمومی هنوز تصمیم‌گیری نشده — جزئیات در
[نقشهٔ راه](https://github.com/vali-mohammadi/patternfly-design-fa/issues/1).

## مجوز

Apache License 2.0 — به [LICENSE](./LICENSE) و [NOTICE](./NOTICE) نگاه کنید.

---

## English

**patternfly-design-fa** is a Persian, right-to-left (RTL) adaptation of the
[PatternFly](https://www.patternfly.org) design system — not a literal translation, but a
curated rewrite for Persian designers. Directional guidance is mirrored for RTL, terminology
follows a documented rule, and original sections not present upstream — notably an RTL-vs-LTR
design teaching layer — are being added.

**This is an unofficial adaptation**, not affiliated with, endorsed by, or supported by
Red Hat, Inc. or the PatternFly project. See [NOTICE](./NOTICE).

Delivered in staged batches — current status and next steps: **[STATUS.md](./STATUS.md)**.
Full decision map: [issue #1](https://github.com/vali-mohammadi/patternfly-design-fa/issues/1).

Licensed under Apache License 2.0 — see [LICENSE](./LICENSE) and [NOTICE](./NOTICE).
