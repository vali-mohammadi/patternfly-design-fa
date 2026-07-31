# نگاشت به منبع بالادستی — Upstream provenance map

**وضعیت:** بذر اولیه، در حال رشد — سیاست در [`docs/decisions/information-architecture.md`](./docs/decisions/information-architecture.md)

هر صفحهٔ فارسی زیر `content/` از کدام فایل(های) بالادستی می‌آید، یا اگر منبعی ندارد (لایهٔ
آموزشی راست‌به‌چین). **سند زنده است** — هر دستهٔ ترجمه ردیف‌های خودش را اضافه می‌کند.

ستون وضعیت یکی از این چهار مقدار است:

- **نگه‌داشته‌شده** — ترجمهٔ نسبتاً وفادار به محتوای بالادستی، با قرینه‌سازی و گلاس طبق قاعده
- **ادغام‌وپالایش‌شده** — از چند صفحهٔ بالادستی ترکیب شده، یا محتوای منسوخ آن حذف شده
- **کنارگذاشته‌شده** — عمداً از این پروژه بیرون گذاشته شده (به همراه دلیل)
- **تازه‌بدون‌منبع** — محتوای اصیل این پروژه، معادل بالادستی ندارد

## `content/mabani/`

| مسیر فارسی | عنوان | مسیر(های) بالادستی | وضعیت |
|---|---|---|---|
| `content/mabani/index.md` | مبانی | — | تازه‌بدون‌منبع (صفحهٔ فهرست) |
| `content/mabani/typography.md` | تایپوگرافی | `styles/typography/typography.md` | ادغام‌وپالایش‌شده — قلم Open Sans با Estedad جایگزین شد؛ جدول سلسله‌مراتب متن میراث PF3 است، بازبینی‌نشده در برابر مقیاس نسخه‌های جدیدتر |
| `content/mabani/icons.md` | آیکون‌ها | `styles/icons/icons.md` | ادغام‌وپالایش‌شده — جدول تولیدی بدون دادهٔ پشتیبان بود؛ به‌جایش راهنمای قرینه‌سازی نوشته شد. بازبینی بصری کامل SVGها هنوز انجام نشده |

## `content/moallefeha/`

| مسیر فارسی | عنوان | مسیر(های) بالادستی | وضعیت |
|---|---|---|---|
| `content/moallefeha/index.md` | مؤلفه‌ها | — | تازه‌بدون‌منبع (صفحهٔ فهرست) |
| `content/moallefeha/about-modal.md` | پنجرهٔ دربارهٔ برنامه | `patternfly-4/components/about-modal/design.md` | نگه‌داشته‌شده — هم‌پوشانی با `pattern-library/communication/about-modal` در مرحلهٔ ۸ ادغام می‌شود |
| `content/moallefeha/button.md` | دکمه | `patternfly-4/components/button/design.md` | نگه‌داشته‌شده — چیدمان دکمه‌ها قرینه شد؛ معادل Tertiary («سوم») آزمایشی است |
| `content/moallefeha/keshuyi.md` | منوی کشویی | `patternfly-4/components/dropdown/design.md` | نگه‌داشته‌شده |
| `content/moallefeha/forms.md` | فرم‌ها | `patternfly-4/components/forms/design.md` | نگه‌داشته‌شده — چیدمان برچسب و دکمه قرینه شد؛ معادل Popover («بازشو») آزمایشی است |
| `content/moallefeha/modal.md` | مودال | `patternfly-4/components/modal/design.md` | نگه‌داشته‌شده — چیدمان دکمه قرینه شد |
| `content/moallefeha/navigation-system.md` | نظام راهبری | `patternfly-4/components/navigation-system/design.md` | نگه‌داشته‌شده — جای‌گیری راهبری عمودی قرینه شد |
| `content/moallefeha/progress-bar.md` | نوار پیشرفت | `patternfly-4/components/progress-bar/design.md` | نگه‌داشته‌شده — جهت پرشدن قرینه شد |

## `content/olguha/`

| مسیر فارسی | عنوان | مسیر(های) بالادستی | وضعیت |
|---|---|---|---|
| `content/olguha/index.md` | الگوها | — | تازه‌بدون‌منبع (صفحهٔ فهرست) |
| `content/olguha/base-card.md` | کارت پایه | `pattern-library/cards/base-card/` | ادغام‌وپالایش‌شده — site.md و overview.md/design.md به یک فایل ادغام شدند؛ فیلتر بازهٔ زمانی و دکمهٔ کنش قرینه شدند |
| `content/olguha/aggregate-status-card.md` | کارت وضعیت تجمیعی | `pattern-library/cards/aggregate-status-card/` | ادغام‌وپالایش‌شده |
| `content/olguha/trend-card.md` | کارت روند | `pattern-library/cards/trend-card/` | ادغام‌وپالایش‌شده — چند جای‌گیری نسبت به اسپارک‌لاین قرینه شدند |
| `content/olguha/utilization-bar-card.md` | کارت نوار بهره‌وری | `pattern-library/cards/utilization-bar-card/` | ادغام‌وپالایش‌شده — دو چیدمان توضیح/برچسب قرینه شدند |
| `content/olguha/utilization-trend-card.md` | کارت روند بهره‌وری | `pattern-library/cards/utilization-trend-card/` | ادغام‌وپالایش‌شده — ترازبندی برچسب/مقدار/بازهٔ زمانی قرینه شد |
| `content/olguha/breadcrumb.md` | مسیر راهنما | `pattern-library/navigation/breadcrumbs/` | نگه‌داشته‌شده — آیکون جداکننده و تعویض‌گر قرینه شدند |
| `content/olguha/pagination.md` | صفحه‌بندی | `pattern-library/navigation/pagination/` | نگه‌داشته‌شده |
| `content/olguha/context-selector.md` | انتخاب‌گر زمینه | `pattern-library/navigation/context-selector/` | نگه‌داشته‌شده |
| `content/olguha/horizontal-navigation.md` | راهبری افقی | `pattern-library/navigation/horizontal-navigation/` | نگه‌داشته‌شده — پیش‌فرض «چپ‌ترین مورد» به «راست‌ترین» قرینه شد |
| `content/olguha/vertical-navigation.md` | راهبری عمودی تفصیلی | `pattern-library/navigation/vertical-navigation/` | نگه‌داشته‌شده — با `content/moallefeha/navigation-system.md` هم‌پوشانی خلاصه دارد، عمداً؛ کشوی راهبری و کشوی اعلان‌ها هر دو قرینه شدند و در سمت مخالف هم باقی ماندند |
| `pattern-library/navigation/guidelines/` | — | — | **کنارگذاشته‌شده** — تکرار تصمیم‌های «کِی افقی/کِی عمودی» که در `horizontal-navigation.md`، `vertical-navigation.md`، و `moallefeha/navigation-system.md` از قبل آمده |
| `content/olguha/masthead.md` | هدر برنامه | `pattern-library/application-framework/masthead/` | نگه‌داشته‌شده — چگالی بالای قرینه‌سازی: کل ترتیب اجزا (همبرگری تا کاربر) به‌عنوان یک زنجیرهٔ یکپارچه قرینه شد، نه جمله‌به‌جمله |
| `content/olguha/launcher.md` | راه‌انداز | `pattern-library/application-framework/launcher/` | نگه‌داشته‌شده |
| `content/olguha/login.md` | صفحهٔ ورود | `pattern-library/application-framework/login-page/` | ادغام‌وپالایش‌شده — ساختار کارت مشترک با ورود چندمرحله‌ای و ورود یکپارچه، برای جلوگیری از تکرار سه‌باره، اینجا مرکزی نگه‌داشته شد |
| `content/olguha/multi-factor-login.md` | ورود چندمرحله‌ای | `pattern-library/application-framework/multi-factor-login/` | ادغام‌وپالایش‌شده — فقط تفاوت با کارت پایه، با ارجاع به `login.md` |
| `content/olguha/single-sign-on.md` | ورود یکپارچه | `pattern-library/application-framework/single-sign-on/` | ادغام‌وپالایش‌شده — فقط تفاوت با کارت پایه، با ارجاع به `login.md` |

## `content/rast-be-chin/`

| مسیر فارسی | عنوان | مسیر(های) بالادستی | وضعیت |
|---|---|---|---|
| `content/rast-be-chin/index.md` | راست‌به‌چین | — | تازه‌بدون‌منبع |
| `content/rast-be-chin/qarinesazi.md` | اصول قرینه‌سازی | — | تازه‌بدون‌منبع (خلاصهٔ آموزشی [mirror-table.md](./docs/decisions/mirror-table.md)) |
| `content/rast-be-chin/taypografi.md` | تایپوگرافی و اعداد فارسی | — | تازه‌بدون‌منبع |
| `content/rast-be-chin/taghvim.md` | تقویم و تاریخ | — | تازه‌بدون‌منبع |
| `content/rast-be-chin/farhang.md` | فرهنگ بصری و زمینهٔ محلی | — | تازه‌بدون‌منبع — **پیش‌نویس ناقص**، منتظر پژوهش جداگانه |
| `content/rast-be-chin/damha.md` | دام‌های رایج | — | تازه‌بدون‌منبع، تجمیعی |

## کنارگذاشته‌شده تا این لحظه

| مسیر بالادستی | دلیل |
|---|---|
| `site.md` front matter در سراسر `pattern-library/` | کلیدهای `code_html`, `code_angular`, `impl_jquery`, `impl_angular`, `impl_ng` به سایت PatternFly 3 اشاره می‌کنند که این پروژه استفاده نمی‌کند |
| `pattern-library/navigation/guidelines/` | تکرار محض تصمیم‌های «کِی افقی/کِی عمودی استفاده شود» که در سه صفحهٔ دیگر همین مرحله از قبل پوشش داده شده |
