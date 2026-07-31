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
| `content/olguha/table-view.md` | نمای جدولی | `pattern-library/content-views/table-view/` | نگه‌داشته‌شده — نقطهٔ مرجع رفتار مشترک (هاور/انتخاب/باز، حالت خالی/بارگذاری) که سایر نماها به آن ارجاع می‌دهند؛ فلش گسترش قرینه شد |
| `content/olguha/list-view.md` | نمای فهرستی | `pattern-library/content-views/list-view/` | ادغام‌وپالایش‌شده — رفتار مشترک به `table-view.md` ارجاع دارد |
| `content/olguha/tree-list-view.md` | نمای فهرست درختی | `pattern-library/content-views/tree-list-view/` | ادغام‌وپالایش‌شده — همان الگو |
| `content/olguha/card-view.md` | نمای کارتی | `pattern-library/content-views/card-view/` | ادغام‌وپالایش‌شده — همان الگو |
| `content/olguha/canvas-view.md` | نمای بوم | `pattern-library/content-views/canvas-view/` | نگه‌داشته‌شده — جعبه‌ابزار و پنل ویژگی‌ها قرینه شدند |
| `content/olguha/toolbar.md` | نوار ابزار | `pattern-library/forms-and-controls/toolbar/` | نگه‌داشته‌شده — چیدمان راست‌چین/چپ‌چین قرینه شد؛ مرحلهٔ ۷الف |
| `content/olguha/filter.md` | فیلتر | `pattern-library/forms-and-controls/filter/` | نگه‌داشته‌شده — محرک فیلتر و ترتیب برچسب‌ها قرینه شدند؛ مرحلهٔ ۷الف |
| `content/olguha/checkbox-filter.md` | فیلتر چک‌باکسی | `pattern-library/forms-and-controls/checkbox-filter/` | نگه‌داشته‌شده — مرحلهٔ ۷الف |
| `content/olguha/textbox-filter.md` | فیلتر متنی | `pattern-library/forms-and-controls/textbox-filter/` | نگه‌داشته‌شده — مرحلهٔ ۷الف |
| `content/olguha/sort.md` | مرتب‌سازی | `pattern-library/forms-and-controls/sort/` | نگه‌داشته‌شده — مرحلهٔ ۷الف |
| `content/olguha/find.md` | یافتن | `pattern-library/forms-and-controls/find/` | نگه‌داشته‌شده — واژهٔ «یافتن» برای تفکیک از جستجو/فیلتر ابداع شد؛ مرحلهٔ ۷الف |
| `content/olguha/view-selector.md` | انتخاب‌گر نما | `pattern-library/forms-and-controls/view-selector/` | نگه‌داشته‌شده — جای‌گیری بالا-راست به بالا-چپ قرینه شد، هماهنگ با نمای فهرستی/کارتی؛ مرحلهٔ ۷الف |
| `content/olguha/bulk-selector.md` | انتخاب‌گر گروهی | `pattern-library/forms-and-controls/bulk-selector/` | نگه‌داشته‌شده — مرحلهٔ ۷ب |
| `content/olguha/dual-list-selector.md` | انتخاب‌گر دوفهرستی | `pattern-library/forms-and-controls/dual-list-selector/` | نگه‌داشته‌شده — مرحلهٔ ۷ب |
| `content/olguha/actions.md` | کنش‌ها | `pattern-library/forms-and-controls/actions/` | نگه‌داشته‌شده — چیدمان دکمه‌ها، آیکون، و کنش‌های محدود به صفحه قرینه شدند؛ مرحلهٔ ۷ب |
| `content/olguha/buttons-on-forms.md` | دکمه‌ها روی فرم‌ها | `pattern-library/forms-and-controls/buttons-on-forms/` | ادغام‌وپالایش‌شده — چیدمان دکمه از قبل در `moallefeha/button.md` قرینه شده بود، اینجا فقط ارجاع و دلتا (اندازه، سبک‌دهی دکمه‌های نام‌دار) اضافه شد؛ مرحلهٔ ۷ب |
| `content/olguha/data-input.md` | ورودی داده | `pattern-library/forms-and-controls/data-input/` | نگه‌داشته‌شده — ترازبندی متن قرینه شد؛ ترازبندی ستون عددی عمداً **قرینه نشد** (رفتار رقم‌ها، نه جهت متن)؛ ترتیب Tab قرینه شد؛ مرحلهٔ ۷ج |
| `content/olguha/field-labeling.md` | برچسب‌گذاری فیلد | `pattern-library/forms-and-controls/field-labeling/` | نگه‌داشته‌شده — ⚠️ پیچیده‌ترین قرینه‌سازی پروژه تا این لحظه: نام گونه‌های افقی («راست‌چین»/«چپ‌چین») کارکردشان با جهت خواندن گره خورده، پس به نام کارکردی ترجمه شد نه لفظی؛ مرحلهٔ ۷ج |
| `content/olguha/labels.md` | برچسب | `pattern-library/forms-and-controls/labels/` | نگه‌داشته‌شده — مرحلهٔ ۷ج |
| `content/olguha/syntax-hints.md` | نکتهٔ نحوی | `pattern-library/forms-and-controls/syntax-hints/` | نگه‌داشته‌شده — بخش «پوشش‌داده‌نشده» به پژوهش فرهنگ بصری (#۲۱) پیوند خورد؛ مرحلهٔ ۷ج |
| `content/olguha/help-on-forms.md` | کمک روی فرم‌ها | `pattern-library/forms-and-controls/help-on-forms/` | نگه‌داشته‌شده — جای‌گیری آیکون راهنما قرینه شد؛ مرحلهٔ ۷ج |
| `content/olguha/errors-and-validation.md` | خطاها و اعتبارسنجی | `pattern-library/forms-and-controls/errors-and-validation/` | ادغام‌وپالایش‌شده — مکمل مقدمهٔ کوتاه‌تر در `moallefeha/forms.md`؛ مرحلهٔ ۷د |
| `content/olguha/progressive-disclosure.md` | افشای تدریجی | `pattern-library/forms-and-controls/progressive-disclosure/` | نگه‌داشته‌شده — تورفتگی فیلد فرزند قرینه شد؛ مرحلهٔ ۷د |
| `content/olguha/expand-collapse-section.md` | بخش باز/بسته‌شدنی | `pattern-library/forms-and-controls/expand-collapse-section/` | نگه‌داشته‌شده — همان قاعدهٔ فلش گسترش نمای جدولی/درختی اعمال شد؛ مرحلهٔ ۷د |
| `content/olguha/inline-edit.md` | ویرایش درون‌خطی | `pattern-library/forms-and-controls/inline-edit/` | نگه‌داشته‌شده — موقعیت دکمه‌های ذخیره/لغو در همهٔ نماها قرینه شد؛ آیکون‌های تیک/X خودشان قرینه نشدند فقط موقعیتشان؛ مرحلهٔ ۷د |
| `content/olguha/date-and-time.md` | تاریخ و ساعت | `pattern-library/forms-and-controls/date-and-time/` | ادغام‌وپالایش‌شده — تقویم میلادی‌محور اصلی به شمسی اصلاح شد (ارجاع به taghvim.md)؛ آیکون تقویم/ساعت قرینه شد؛ دکمهٔ قبل‌ازظهر/بعدازظهر با پیشنهاد اصیل قالب ۲۴ساعته جایگزین شد؛ مرحلهٔ ۷ه |
| `content/olguha/slider.md` | اسلایدر | `pattern-library/forms-and-controls/slider/` | نگه‌داشته‌شده — برچسب، ناحیهٔ پرشده، و فیلد ورودی قرینه شدند؛ مرحلهٔ ۷ه |
| `content/olguha/language-selector.md` | انتخاب‌گر زبان | `pattern-library/forms-and-controls/language-selector/` | نگه‌داشته‌شده — ⚠️ اولین کاربرد واقعی `lint_exempt_encoding` (نقل‌قول واقعی «العربية»)؛ جای‌گیری در صفحهٔ ورود قرینه شد؛ مرحلهٔ ۷ه |
| `content/olguha/copy-to-clipboard.md` | کپی در کلیپ‌بورد | `pattern-library/forms-and-controls/copy-to-clipboard/` | نگه‌داشته‌شده — محو متن و فلش گسترش قرینه شدند، آیکون تیک قرینه نشد؛ مرحلهٔ ۷ه |

## `content/rast-be-chin/`

| مسیر فارسی | عنوان | مسیر(های) بالادستی | وضعیت |
|---|---|---|---|
| `content/rast-be-chin/index.md` | راست‌به‌چین | — | تازه‌بدون‌منبع |
| `content/rast-be-chin/qarinesazi.md` | اصول قرینه‌سازی | — | تازه‌بدون‌منبع (خلاصهٔ آموزشی [mirror-table.md](./docs/decisions/mirror-table.md)) |
| `content/rast-be-chin/taypografi.md` | تایپوگرافی و اعداد فارسی | — | تازه‌بدون‌منبع |
| `content/rast-be-chin/taghvim.md` | تقویم و تاریخ | — | تازه‌بدون‌منبع |
| `content/rast-be-chin/farhang.md` | فرهنگ بصری و زمینهٔ محلی | — | تازه‌بدون‌منبع — بازنویسی‌شده بر اساس [پژوهش #21](https://github.com/vali-mohammadi/patternfly-design-fa/issues/21)، سپس با دور دوم پژوهش (منابع اولیه: فرم دولتی، صفحهٔ رنگ زندهٔ سونت) اصلاح شد؛ ادعای اولیهٔ ساختار آدرس تصحیح شد. فیلدبه‌فیلد فرم‌های واقعی دیوار/اسنپ/دیجی‌کالا همچنان شکاف باز است |
| `content/rast-be-chin/damha.md` | دام‌های رایج | — | تازه‌بدون‌منبع، تجمیعی |

## کنارگذاشته‌شده تا این لحظه

| مسیر بالادستی | دلیل |
|---|---|
| `site.md` front matter در سراسر `pattern-library/` | کلیدهای `code_html`, `code_angular`, `impl_jquery`, `impl_angular`, `impl_ng` به سایت PatternFly 3 اشاره می‌کنند که این پروژه استفاده نمی‌کند |
| `pattern-library/navigation/guidelines/` | تکرار محض تصمیم‌های «کِی افقی/کِی عمودی استفاده شود» که در سه صفحهٔ دیگر همین مرحله از قبل پوشش داده شده |
