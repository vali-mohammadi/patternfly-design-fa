# زیردسته‌بندی مرحلهٔ ۷ — فرم‌ها و کنترل‌ها

**وضعیت:** تصمیم داخل‌مرحله‌ای، طبق [priority-list.md](./priority-list.md) («زیردسته‌بندی
هنگام شروع این مرحله دقیق می‌شود»).

۲۸ پوشه، ۸۱ فایل. تقسیم به هفت زیردسته بر اساس موضوع، هرکدام ۲ تا ۷ پوشه — اولویت با
موضوعاتی که صفحات از قبل ترجمه‌شده به آن‌ها ارجاع «هنوز ترجمه نشده» داده‌اند.

| زیرمرحله | پوشه‌ها | چرا این ترتیب |
|---|---|---|
| **۷الف** | toolbar، filter، checkbox-filter، textbox-filter، sort، find، view-selector | بیشترین ارجاع رو به جلو از صفحات ترجمه‌شده (نمای جدولی/فهرستی/کارتی/بوم) |
| **۷ب** | bulk-selector، dual-list-selector، actions، buttons-on-forms | انتخاب و کنش‌های گروهی — مکمل ۷الف |
| **۷ج** | data-input، field-labeling، labels، syntax-hints، help-on-forms | ورودی متن و برچسب‌گذاری |
| **۷د** | errors-and-validation، progressive-disclosure، expand-collapse-section، inline-edit | اعتبارسنجی و افشای تدریجی — مرتبط با [فرم‌ها](../../content/moallefeha/forms.md) |
| **۷ه** | date-and-time، slider، language-selector، copy-to-clipboard | ورودی‌های تخصصی |
| **۷و** | modal-overlay، modeless-overlay | همپوشانی احتمالی با [مودال](../../content/moallefeha/modal.md) |
| **۷ز** | file-upload، drag-and-drop | کوچک، مستقل |

هر زیرمرحله یک تیکت است، فقط زیرمرحلهٔ جاری و بعدی به‌صورت تیکت واقعی ساخته می‌شوند — طبق
همان اصل مه نقشهٔ راه که priority-list.md برای کل مرحلهٔ ۷ به‌کار برد.
