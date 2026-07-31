# وضعیت پروژه — Project status

**مرحلهٔ فعلی: پایان تصمیم‌گیری‌های بنیادین، آغاز اجرای محتوا (Phase 0 → Phase 1)**

همهٔ تصمیم‌های بنیادین (گلوسری، شیوه‌نامهٔ نگارش، قرینه‌سازی، قلم، کدگذاری، معماری اطلاعات،
فهرست اولویت، زنجیرهٔ سایت، خط تولید) بسته شده‌اند. از این پس، کار روی **دسته‌های ترجمهٔ
واقعی محتوا** است — طبق [فهرست اولویت](./docs/decisions/priority-list.md)، مرحله‌به‌مرحله.

## نقشهٔ راه

نقشهٔ راه کامل، با هر تصمیم و استدلالش: [Issue #1](https://github.com/vali-mohammadi/patternfly-design-fa/issues/1)

## تصمیم‌های بسته‌شده

| # | عنوان | سند |
|---|---|---|
| [#3](https://github.com/vali-mohammadi/patternfly-design-fa/issues/3) | پیشینه‌پژوهی راست‌به‌چین و تایپوگرافی فارسی | [research/](./research) |
| [#12](https://github.com/vali-mohammadi/patternfly-design-fa/issues/12) | رجیستر واژگانی | [terminology-register.md](./docs/decisions/terminology-register.md) |
| [#2](https://github.com/vali-mohammadi/patternfly-design-fa/issues/2) | مجوز، انتساب و اعلان غیررسمی | [LICENSE](./LICENSE), [NOTICE](./NOTICE) |
| [#13](https://github.com/vali-mohammadi/patternfly-design-fa/issues/13) | انتخاب قلم فارسی | [typography-font.md](./docs/decisions/typography-font.md) |
| [#14](https://github.com/vali-mohammadi/patternfly-design-fa/issues/14) | جدول قرینه‌سازی | [mirror-table.md](./docs/decisions/mirror-table.md) |
| [#15](https://github.com/vali-mohammadi/patternfly-design-fa/issues/15) | یکسان‌سازی کدگذاری فارسی | [persian-encoding-fold.md](./docs/decisions/persian-encoding-fold.md) |
| [#4](https://github.com/vali-mohammadi/patternfly-design-fa/issues/4) | گلوسری و قاعدهٔ دسته‌بندی واژگان | [terminology-rule.md](./docs/decisions/terminology-rule.md), [glossary.md](./docs/glossary.md) |
| [#5](https://github.com/vali-mohammadi/patternfly-design-fa/issues/5) | شکل لایهٔ آموزشی راست‌به‌چین | [teaching-layer.md](./docs/decisions/teaching-layer.md) |
| [#6](https://github.com/vali-mohammadi/patternfly-design-fa/issues/6) | شیوه‌نامهٔ نگارش فارسی | [writing-conventions.md](./docs/decisions/writing-conventions.md) |
| [#7](https://github.com/vali-mohammadi/patternfly-design-fa/issues/7) | معماری اطلاعات و سیاست نشانی‌ها | [information-architecture.md](./docs/decisions/information-architecture.md) |
| [#8](https://github.com/vali-mohammadi/patternfly-design-fa/issues/8) | فهرست اولویت و مرحله‌بندی | [priority-list.md](./docs/decisions/priority-list.md) |
| [#9](https://github.com/vali-mohammadi/patternfly-design-fa/issues/9) | زنجیرهٔ ساخت سایت راست‌به‌چین | [site-toolchain.md](./docs/decisions/site-toolchain.md) |

اسناد نهایی همه در [`docs/decisions/`](./docs/decisions).

## وضعیت دسته‌های محتوا

<!-- STATUS:AUTO:START -->

_تولیدشده خودکار توسط `script/status-fa.js` — دستی ویرایش نکنید._

**مجموع صفحات دارای front matter در `content/`: 6**

| وضعیت | تعداد |
|---|---|
| پیش‌نویس | 1 |
| ترجمه‌شده | 5 |
| بازبینی‌شده | 0 |
| منتشرشده | 0 |

| صفحه | عنوان | وضعیت |
|---|---|---|
| `content/rast-be-chin/damha.md` | دام‌های رایج | ترجمه‌شده |
| `content/rast-be-chin/farhang.md` | فرهنگ بصری و زمینهٔ محلی | پیش‌نویس |
| `content/rast-be-chin/index.md` | راست‌به‌چین | ترجمه‌شده |
| `content/rast-be-chin/qarinesazi.md` | اصول قرینه‌سازی | ترجمه‌شده |
| `content/rast-be-chin/taghvim.md` | تقویم و تاریخ | ترجمه‌شده |
| `content/rast-be-chin/taypografi.md` | تایپوگرافی و اعداد فارسی | ترجمه‌شده |

<!-- STATUS:AUTO:END -->

برای به‌روزرسانی این بخش: `node script/status-fa.js`

## گام بعدی

جبههٔ فعلی («قابل‌برداشتن» — بدون مسدودکننده): [مرحلهٔ ۰ — لایهٔ آموزشی راست‌به‌چین](https://github.com/vali-mohammadi/patternfly-design-fa/issues/16)
(دستهٔ آزمایشی/pilot). فهرست کامل مراحل بعدی در [priority-list.md](./docs/decisions/priority-list.md).
