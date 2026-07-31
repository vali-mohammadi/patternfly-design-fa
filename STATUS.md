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

**مجموع صفحات دارای front matter در `content/`: 78**

| وضعیت | تعداد |
|---|---|
| پیش‌نویس | 0 |
| ترجمه‌شده | 78 |
| بازبینی‌شده | 0 |
| منتشرشده | 0 |

| صفحه | عنوان | وضعیت |
|---|---|---|
| `content/mabani/icons.md` | آیکون‌ها | ترجمه‌شده |
| `content/mabani/index.md` | مبانی | ترجمه‌شده |
| `content/mabani/typography.md` | تایپوگرافی | ترجمه‌شده |
| `content/moallefeha/about-modal.md` | پنجرهٔ دربارهٔ برنامه | ترجمه‌شده |
| `content/moallefeha/button.md` | دکمه | ترجمه‌شده |
| `content/moallefeha/forms.md` | فرم‌ها | ترجمه‌شده |
| `content/moallefeha/index.md` | مؤلفه‌ها | ترجمه‌شده |
| `content/moallefeha/keshuyi.md` | منوی کشویی | ترجمه‌شده |
| `content/moallefeha/modal.md` | مودال | ترجمه‌شده |
| `content/moallefeha/navigation-system.md` | نظام راهبری | ترجمه‌شده |
| `content/moallefeha/progress-bar.md` | نوار پیشرفت | ترجمه‌شده |
| `content/olguha/actions.md` | کنش‌ها | ترجمه‌شده |
| `content/olguha/aggregate-status-card.md` | کارت وضعیت تجمیعی | ترجمه‌شده |
| `content/olguha/base-card.md` | کارت پایه | ترجمه‌شده |
| `content/olguha/breadcrumb.md` | مسیر راهنما | ترجمه‌شده |
| `content/olguha/bulk-selector.md` | انتخاب‌گر گروهی | ترجمه‌شده |
| `content/olguha/buttons-on-forms.md` | دکمه‌ها روی فرم‌ها | ترجمه‌شده |
| `content/olguha/canvas-view.md` | نمای بوم | ترجمه‌شده |
| `content/olguha/card-view.md` | نمای کارتی | ترجمه‌شده |
| `content/olguha/checkbox-filter.md` | فیلتر چک‌باکسی | ترجمه‌شده |
| `content/olguha/classification-banner.md` | بنر طبقه‌بندی | ترجمه‌شده |
| `content/olguha/comments.md` | نظرات | ترجمه‌شده |
| `content/olguha/context-selector.md` | انتخاب‌گر زمینه | ترجمه‌شده |
| `content/olguha/copy-to-clipboard.md` | کپی در کلیپ‌بورد | ترجمه‌شده |
| `content/olguha/data-input.md` | ورودی داده | ترجمه‌شده |
| `content/olguha/date-and-time.md` | تاریخ و ساعت | ترجمه‌شده |
| `content/olguha/drag-and-drop.md` | کشیدن‌وانداختن | ترجمه‌شده |
| `content/olguha/dual-list-selector.md` | انتخاب‌گر دوفهرستی | ترجمه‌شده |
| `content/olguha/empty-state.md` | حالت خالی | ترجمه‌شده |
| `content/olguha/errors-and-validation.md` | خطاها و اعتبارسنجی | ترجمه‌شده |
| `content/olguha/expand-collapse-section.md` | بخش باز/بسته‌شدنی | ترجمه‌شده |
| `content/olguha/experimental-features.md` | ویژگی‌های آزمایشی | ترجمه‌شده |
| `content/olguha/field-labeling.md` | برچسب‌گذاری فیلد | ترجمه‌شده |
| `content/olguha/file-upload.md` | بارگذاری فایل | ترجمه‌شده |
| `content/olguha/filter.md` | فیلتر | ترجمه‌شده |
| `content/olguha/find.md` | یافتن | ترجمه‌شده |
| `content/olguha/help-on-forms.md` | کمک روی فرم‌ها | ترجمه‌شده |
| `content/olguha/horizontal-navigation.md` | راهبری افقی | ترجمه‌شده |
| `content/olguha/index.md` | الگوها | ترجمه‌شده |
| `content/olguha/inline-edit.md` | ویرایش درون‌خطی | ترجمه‌شده |
| `content/olguha/inline-notifications.md` | اعلان درون‌خطی | ترجمه‌شده |
| `content/olguha/labels.md` | برچسب | ترجمه‌شده |
| `content/olguha/language-selector.md` | انتخاب‌گر زبان | ترجمه‌شده |
| `content/olguha/launcher.md` | راه‌انداز | ترجمه‌شده |
| `content/olguha/list-view.md` | نمای فهرستی | ترجمه‌شده |
| `content/olguha/loading-state.md` | حالت بارگذاری | ترجمه‌شده |
| `content/olguha/login.md` | صفحهٔ ورود | ترجمه‌شده |
| `content/olguha/masthead.md` | هدر برنامه | ترجمه‌شده |
| `content/olguha/message-dialog.md` | کادر پیام | ترجمه‌شده |
| `content/olguha/modal-overlay.md` | روی‌هم‌افکن مودال | ترجمه‌شده |
| `content/olguha/modeless-overlay.md` | روی‌هم‌افکن بدون‌مودال | ترجمه‌شده |
| `content/olguha/multi-factor-login.md` | ورود چندمرحله‌ای | ترجمه‌شده |
| `content/olguha/notification-drawer.md` | کشوی اعلان‌ها | ترجمه‌شده |
| `content/olguha/pagination.md` | صفحه‌بندی | ترجمه‌شده |
| `content/olguha/progressive-disclosure.md` | افشای تدریجی | ترجمه‌شده |
| `content/olguha/session-timeout.md` | پایان نشست | ترجمه‌شده |
| `content/olguha/single-sign-on.md` | ورود یکپارچه | ترجمه‌شده |
| `content/olguha/slider.md` | اسلایدر | ترجمه‌شده |
| `content/olguha/sort.md` | مرتب‌سازی | ترجمه‌شده |
| `content/olguha/syntax-hints.md` | نکتهٔ نحوی | ترجمه‌شده |
| `content/olguha/table-view.md` | نمای جدولی | ترجمه‌شده |
| `content/olguha/textbox-filter.md` | فیلتر متنی | ترجمه‌شده |
| `content/olguha/toast-notifications.md` | اعلان توست | ترجمه‌شده |
| `content/olguha/toolbar.md` | نوار ابزار | ترجمه‌شده |
| `content/olguha/tour.md` | تور | ترجمه‌شده |
| `content/olguha/tree-list-view.md` | نمای فهرست درختی | ترجمه‌شده |
| `content/olguha/trend-card.md` | کارت روند | ترجمه‌شده |
| `content/olguha/utilization-bar-card.md` | کارت نوار بهره‌وری | ترجمه‌شده |
| `content/olguha/utilization-trend-card.md` | کارت روند بهره‌وری | ترجمه‌شده |
| `content/olguha/vertical-navigation.md` | راهبری عمودی تفصیلی | ترجمه‌شده |
| `content/olguha/view-selector.md` | انتخاب‌گر نما | ترجمه‌شده |
| `content/olguha/wizard.md` | ویزارد | ترجمه‌شده |
| `content/rast-be-chin/damha.md` | دام‌های رایج | ترجمه‌شده |
| `content/rast-be-chin/farhang.md` | فرهنگ بصری و زمینهٔ محلی | ترجمه‌شده |
| `content/rast-be-chin/index.md` | راست‌به‌چین | ترجمه‌شده |
| `content/rast-be-chin/qarinesazi.md` | اصول قرینه‌سازی | ترجمه‌شده |
| `content/rast-be-chin/taghvim.md` | تقویم و تاریخ | ترجمه‌شده |
| `content/rast-be-chin/taypografi.md` | تایپوگرافی و اعداد فارسی | ترجمه‌شده |

<!-- STATUS:AUTO:END -->

برای به‌روزرسانی این بخش: `node script/status-fa.js`

## گام بعدی

جبههٔ فعلی («قابل‌برداشتن» — بدون مسدودکننده): [مرحلهٔ ۰ — لایهٔ آموزشی راست‌به‌چین](https://github.com/vali-mohammadi/patternfly-design-fa/issues/16)
(دستهٔ آزمایشی/pilot). فهرست کامل مراحل بعدی در [priority-list.md](./docs/decisions/priority-list.md).
