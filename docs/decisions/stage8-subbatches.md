# زیردسته‌بندی مرحلهٔ ۸ — ارتباطات

**وضعیت:** تصمیم داخل‌مرحله‌ای، طبق [priority-list.md](./priority-list.md).

۱۳ پوشه، ۳۹ فایل، ~۶۷۰۰ واژه — کوچک‌تر از مرحلهٔ ۷ در هر پوشه، پس سه زیردسته کافی است (نه
هفت).

| زیرمرحله | پوشه‌ها | چرا این گروه‌بندی |
|---|---|---|
| **۸الف** | about-modal، empty-state، toast-notifications، loading-state، inline-notifications | حل هم‌پوشانی about-modal + واژه‌سازی اصیل برای دو اصطلاح رزروشدهٔ گلوسری (toast، empty state) |
| **۸ب** | message-dialog، notification-drawer، session-timeout، classification-banner | الگوهای دیالوگ/کشو/بنر |
| **۸ج** | comments، experimental-features، tour، wizard | باقی‌مانده، شامل بزرگ‌ترین پوشه (wizard) و واژه‌سازی اصیل برای wizard |
