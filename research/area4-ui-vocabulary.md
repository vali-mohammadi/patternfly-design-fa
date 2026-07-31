# Area 4 — Existing Persian (fa-IR) UI vocabulary

**Scope:** what Persian terms are *already in use* for common component and UX concepts, sourced from
shipped localizations and published glossaries. **Nothing in this document is invented.** Every Persian
term below was copied out of a primary source, and the source is named. Where no established term
exists, the row says **"no established term found"**.

**Date of research:** 2026-07-31

---

## 0. Sources consulted (all fetched directly)

| # | Source | What it is | URL |
|---|---|---|---|
| S1 | **WordPress Persian locale glossary** (واژه‌نامه) | 2,571-entry published community glossary, fa_IR | https://translate.wordpress.org/locale/fa/default/glossary/ |
| S2 | **Mozilla firefox-l10n `fa/`** | Shipped Firefox Persian FTL files (`wizard.ftl`, `notification.ftl`, `browser.ftl`, `preferences.ftl`) | https://github.com/mozilla-l10n/firefox-l10n/tree/main/fa |
| S3 | **Mozilla Pontoon fa** | Persian team + terminology project (102 terms) | https://pontoon.mozilla.org/fa/ |
| S4 | **GNOME / GTK `po/fa.po`** | 1,783 entries incl. the **complete ARIA/ATK accessible-role name set in Persian** | https://gitlab.gnome.org/GNOME/gtk/-/raw/main/po/fa.po |
| S5 | **KDE `kconfigwidgets` fa.po** | KDE standard-action Persian | https://invent.kde.org/frameworks/kconfigwidgets/-/raw/master/po/fa/kconfigwidgets6.po |
| S6 | **AOSP `core/res/values-fa/strings.xml`** | 2,402 shipped Android Persian strings | https://raw.githubusercontent.com/aosp-mirror/platform_frameworks_base/main/core/res/res/values-fa/strings.xml |
| S7 | **Material Components Android `values-fa`** | Persian for bottomsheet / sidesheet / chip / slider / datepicker / badge | https://github.com/material-components/material-components-android |
| S8 | **Google TalkBack `values-fa`** | **Persian screen-reader role names** (`display_name_*`) — what Persian a11y users actually hear | https://raw.githubusercontent.com/google/talkback/master/talkback/src/main/res/values-fa/strings.xml |
| S9 | **Chromium `generated_resources_fa.xtb`** | 10,615 Google-authored Persian browser strings | https://raw.githubusercontent.com/chromium/chromium/main/chrome/app/resources/generated_resources_fa.xtb |
| S10 | **Microsoft Persian (fa-IR) Style Guide** | Official 50-page MS localization style guide | https://download.microsoft.com/download/3/e/c/3ec58a9a-70ff-4a31-8cfd-d185983111be/fas-irn-StyleGuide.pdf |
| S11 | **Ant Design `fa_IR.ts`** | Shipped component-library locale | https://raw.githubusercontent.com/ant-design/ant-design/master/components/locale/fa_IR.ts |
| S12 | **Element Plus `fa.ts`** | Shipped component-library locale | https://raw.githubusercontent.com/element-plus/element-plus/dev/packages/locale/lang/fa.ts |
| S13 | **Vuetify `fa.ts`** | Shipped component-library locale | https://raw.githubusercontent.com/vuetifyjs/vuetify/master/packages/vuetify/src/locale/fa.ts |
| S14 | **MUI X Data Grid `faIR.ts`** | Shipped data-grid locale | https://raw.githubusercontent.com/mui/mui-x/master/packages/x-data-grid/src/locales/faIR.ts |
| S15 | **PrimeLocale `fa.json`** | PrimeVue/PrimeReact/PrimeNG Persian locale | https://raw.githubusercontent.com/primefaces/primelocale/main/fa.json |
| S16 | **Persian Wikipedia** | Article titles (via `langlinks` API) + `insource:` frequency | https://fa.wikipedia.org |
| S17 | **فرهنگستان — واژه‌های مصوب wiki** | The Academy's *official* approved-terms database, MediaWiki with API | https://wiki.apll.ir/word/ |
| S18 | **Persian-HIG** (Shervin Afshar / FarsiWeb lineage) | "Persian Graphical User Interface Specifications and Guidelines", FA + EN | https://github.com/shervinafshar/Persian-HIG |
| S19 | **Sonnat Design System (سنّت)** — **Divar's** published Persian design system | ⭐ The single most relevant source: a real Iranian product design system with **Persian component documentation** | https://www.sonnat.design/ · https://github.com/sonnat/sonnat-ui |
| S20 | **Hossein Aslani UX/UI glossary (واژه‌نامه UI-UX)** | Published Persian practitioner glossary | https://hossein-aslani.com/ux-ui-glossary/ |
| S21 | **EN-FA CS Dictionary** | English–Persian CS dictionary incl. فرهنگستان approved column | https://github.com/hkhojasteh/EN-FA-CS-Dictionary |

---

## 1. THE HEADLINE FINDING

**Persian UI vocabulary is split into three mutually incompatible registers, and they disagree on
almost every term.** Any fa-IR PatternFly adaptation has to *pick a register* before it picks words.

| Register | Who writes it | Example: "icon" | Example: "menu" | Example: "checkbox" |
|---|---|---|---|---|
| **A. Purist / free-desktop** (GNOME, KDE, FarsiWeb, فرهنگستان) | volunteer/academic translators | شمایل / نقشک | گزینگان | جعبهٔ تیکی |
| **B. Big-vendor localization** (Google, Microsoft, Mozilla) | paid professional localizers | نماد | منو / فهرست | چارگوش انتخاب / کادر انتخاب |
| **C. Iranian product/design industry** (Divar/Sonnat, WordPress fa, dev community) | working designers & devs | آیکون | منو | **چک‌باکس** |

**Register C — the one actual Iranian product teams speak — is heavily loanword-based.** For a
modern design system aimed at Iranian practitioners, register C is the right target, and this means
accepting loanwords like مودال، تب، اسلایدر، چیپس، فیلتر، دیالوگ، کامپوننت، لیبل، گرید، اسکرول، هاور، فوکوس.
**This is the finding, not a failure to find "proper" Persian.**

### فرهنگستان (Academy) coverage — a hard negative result

Queried the official approved-words wiki (S17) directly. **فرهنگستان has approved terms for the
1990s desktop vocabulary and for ZERO modern UI component names.**

**Approved and in the رایانه و فنّاوری اطلاعات domain:**

| English | فرهنگستان approved | Does software actually use it? |
|---|---|---|
| window | **پنجره** | ✅ yes, universal |
| toolbar | **نوارابزار** | ✅ yes, universal |
| browser | **مرورگر** | ✅ yes, universal |
| cursor | **مکان‌نما** | ✅ yes |
| font | **قلم** | ✅ yes (but "فونت" also common) |
| link / hyperlink | **پیوند / اَبَرپیوند** | ✅ پیوند yes; ابرپیوند rarely |
| status bar | **نوار وضعیت** | ✅ yes |
| task bar | **نوار وظیفه** | ✅ yes (Microsoft uses it) |
| web page | **صفحۀ وب** | ✅ yes |
| template | **الگو** | ✅ yes |
| reset button | **دکمۀ بازنشانی** | ✅ yes (بازنشانی is used by MUI-X, Element Plus, WordPress) |
| **menu** | **گزینگان** | ❌ **NO.** Only KDE fa and the Persian-HIG use گزینگان. Everyone else uses منو or فهرست. Persian Wikipedia `insource:` — گزینگان: **2** hits vs منو: **1,088** |
| **menu bar** | **نوار گزینه** | ❌ **NO.** GTK uses نوار فهرست; Microsoft uses نوار منو |
| **icon** | **نقشک** | ❌ **NO.** Google/MS use نماد; WordPress + Iranian industry use آیکون; GNOME uses شمایل. نقشک is essentially unused |
| **scroll bar** | **نوار نَوَرد** | ❌ **NO.** GTK uses نوار لغزش; Persian Wikipedia uses نوار پیمایش |
| **interface** | **واسط** | ❌ **NO.** The industry-universal term is **رابط** (رابط کاربری = UI) |
| **password** | **اسم رمز** | ❌ **NO.** Everyone uses گذرواژه or رمز عبور |
| **search engine** | **جویشگر** | ❌ **NO.** Everyone uses موتور جستجو |

**Confirmed to have NO فرهنگستان approved term at all** (queried each; zero hits in the
رایانه و فنّاوری اطلاعات domain): *dialog box, check box, radio button, slider, widget, wizard,
tooltip, breadcrumb, accordion, badge, dropdown, tab (UI sense), pagination, notification, toast,
modal, card, form (computing sense), avatar, banner, sidebar, header, footer.*

→ **For the entire modern component vocabulary, فرهنگستان offers nothing. There is no authority to
defer to.** The gaps above (menu, icon, interface, scroll bar) are the ones worth recording: the
Academy approved a term and the software industry ignored it.

---

## 2. MAIN TABLE — the required terms

Legend for **Most widespread**: this is a judgement from convergence across independent shipped
localizations, weighted toward Iranian industry usage (S19, S20, S1). Where sources genuinely
disagree, the row says **CONTESTED**.

| Concept | Persian term(s) found | Transliteration | Source(s) | Most widespread | Notes |
|---|---|---|---|---|---|
| **Modal** | مودال · مدال · پنجرهٔ مودال · دیالوگ مُدال | modāl · panjere-ye modāl · diyālog-e modāl | S16 (fa.wikipedia article title **پنجره مودال**); S19 Sonnat Backdrop/Button pages use "مُدال‌ها" and "دیالوگ‌های مُدال"; S20 "Modals / مدال‌ها" | **مودال** (loanword) | ⚠️ **LOANWORD DOMINATES.** Two spellings compete: مودال (more common online) and مدال (Sonnat, Aslani) — note مدال is homographic with "medal". Recommend مودال. No native coinage found in any shipped software. Adjacent: dialog = **دیالوگ** (Element Plus, Sonnat) or **کادر گفتگو** (Microsoft, Chromium) or **گفت‌وگو** (GTK). |
| **Card** | کارت | kārt | S9 Chromium "کارت پیش‌نمایش" (tab preview card); S19 Sonnat prose ("کارت‌ها", `Card` component); S20 | **کارت** | Settled. Same word as physical/payment card — context disambiguates. No competing term found. |
| **Toolbar** | نوار ابزار | navār-e abzār | S1; S4 GTK `tool bar`; S10 Microsoft; S17 **فرهنگستان approved** (نوارابزار); S19 | **نوار ابزار** | ✅ **Highest confidence term in this whole document.** Native, approved, and universally used. |
| **Breadcrumb** | بردکرام · بردکرامب · نوار موقعیت · مسیر راهنما · خرده‌نان | bredkerām · bredkerāmb · navār-e mow'ghiyat · masir-e rāhnamā · khorde-nān | S19 Sonnat component page titled **بردکرام**; S16 fa.wikipedia article titled **بردکرامب**; S20 "Breadcrumb / بردکرامب - نوار موقعیت"; S12 Element Plus `breadcrumb.label` = **مسیر راهنما** | **بردکرامب / بردکرام** (loanword) | ⚠️ **LOANWORD DOMINATES.** Both Persian Wikipedia and Divar's design system chose the loanword. مسیر راهنما (Element Plus) and نوار موقعیت (Aslani) are real but minority. خرده‌نان is a literal calque, rare. |
| **Dropdown** | کشویی · منوی کشویی · فهرست کشویی · جعبهٔ بازشونده | keshuyi · meno-ye keshuyi · fehrest-e keshuyi · ja'be-ye bāzshavande | S1 WordPress `dropdown = کشویی`; S12 Element Plus `toggleDropdown` = "باز و بسته کردن منوی کشویی"; S8 TalkBack `display_name_combobox` = **فهرست کشویی**; S4 GTK `combo box` = جعبهٔ بازشونده; S16 fa.wikipedia **فهرست کشویی (در نرم‌افزار)** | **منوی کشویی / فهرست کشویی** | Native term won here. کشویی ("sliding") is the stable modifier across every source. Loanword دراپ‌داون exists in speech but scored **0** on Persian Wikipedia and appears in no shipped localization. |
| **Wizard** | جادوگر · ویزارد · دستیار | jādugar · vizārd · dastyār | S5 KDE fa (obsolete string) "Bug Report Wizard" → **جادوگر گزارش اشکال**; S2 Mozilla `wizard.ftl` translates only the *buttons* (عقب / بعدی / پایان / انصراف), never the word "wizard"; S6/S9 use **دستیار** for "assistant" | **CONTESTED — weak** | ⚠️ Neither Mozilla nor Microsoft nor Google names the pattern in Persian. جادوگر is a literal calque ("magician") that reads oddly; ویزارد is the spoken loanword. **Closest thing to "no established term found."** Sonnat's equivalent is **فیلد پله‌ای / استپر** framing (see Stepper). |
| **Empty state** | حالت خالی — *as a component name:* **no established term found** | hālat-e khāli | Every source translates the *message*, never the pattern name: S11 Ant `Empty.description` = "داده‌ای موجود نیست"; S14 MUI `noRowsLabel` = "بدون سطر"; S15 Prime `emptyMessage` = "هیچ گزینه ای در دسترس نیست"; S13 Vuetify `noDataText` = "داده‌ای موجود نیست" | **no established term found** (for the *component*) | The standard Persian *copy* is highly converged: **داده‌ای موجود نیست** (Ant + Vuetify + Element Plus, independently). Use that string. The *pattern name* is unnamed in Persian. |
| **Toast** | **no established term found** · اسنک‌بار · پیام‌گیر · پیام | esnak-bār · payām-gir · payām | S20 "Snackbars / پیام‌گیر" (glossary's own coinage, and it also writes "اسنک‌بارها" in the body); S19 Sonnat ships a `Snackbar` component but has **no Persian doc page** for it; S11 Ant `Modal`/message strings never name it | **no established term found** | ⚠️ Genuine gap. Persian devs say **اسنک‌بار** or **توست**; neither appears in any shipped localization. پیام‌گیر is one glossary author's invention, not established. **This is a term the project will have to decide.** |
| **Tooltip** | راهنمای ابزار · نکته‌ابزار · تولتیپ | rāhnamā-ye abzār · nokte-abzār · tultip | S19 Sonnat component page titled **راهنمای ابزار**; S4 GTK `tool tip` = **راهنمای ابزار**; S6 AOSP `tooltip_popup_title` = **نکته‌ابزار** | **راهنمای ابزار** | ✅ Good confidence. Divar's design system and GNOME independently converged on راهنمای ابزار. Android's نکته‌ابزار is a Google-only outlier. تولتیپ is spoken but scored **0** on Persian Wikipedia and appears in no shipped source. |
| **Primary / Secondary / Tertiary** | اصلی · اولیه / دوم · فرعی · ثانویه / — | asli · avvaliye / dovvom · far'i · sānaviye | S1 WordPress `primary = اصلی، اولیه`, `secondary = دوم، فرعی`; S19 Sonnat **does not use this axis at all** — it names button priority as **درجهٔ اهمیت بالا / متوسط / پایین** (high/medium/low emphasis, Material-style) and calls the shapes **توپُر (Filled) / توخالی (Outlined) / متنی (Inlined)** | **اصلی / ثانویه** for the concept; **no established term for "tertiary"** | ⚠️ Important structural finding: **the Iranian design industry's own design system doesn't use primary/secondary/tertiary.** It uses an emphasis scale. If PatternFly's three-tier button naming is kept, ثانویه (not دوم/فرعی, which read as "second"/"sub") is the better fit for secondary. "Tertiary" — **no established term found**. |
| **Data list** | **no established term found** | — | S19 Sonnat's nearest is **ردیف داده** (`InfoRow`); generic list = **فهرست** (S4 GTK, S8 TalkBack `display_name_list`) or **لیست** (colloquial) | **no established term found** | The generic "list" is settled as **فهرست**. PatternFly's *DataList* as a distinct component has no Persian name. |
| **Chip** | چیپس · چیپ | chips · chip | S19 Sonnat component page titled **چیپس** (`Chip`, `ActionChip`, `ChoiceChip`, `RemovableChip`); S7 Material Android chip strings exist but only translate the close action ("برداشتن %1$s") | **چیپس** (loanword) | ⚠️ **LOANWORD DOMINATES.** Note Divar chose **چیپس** (which in everyday Persian means potato crisps) over چیپ (which means silicon chip / گambling chip). This is a real, shipped, documented choice by the largest Iranian classifieds site — but it is one source. Flag as low-consensus. Distinct from **Tag = برچسب** (Sonnat has both, and separates them deliberately). |
| **Skeleton** | اسکلتون · لودینگ اسکلتی · اسکلت | eskeleton · luding-e eskeleti · eskelet | Persian dev writing only (roocket.ir, danieldev.ir "لودینگ اسکلتی چیست؟"); S19 Sonnat ships a `Skeleton` component with **no Persian doc page**; S21 CS dictionary `skeleton = اسکلت` (generic, not UI) | **اسکلتون / لودینگ اسکلتی** (loanword) | ⚠️ **LOANWORD DOMINATES**, but no localization-glossary source at all — evidence is community blog posts. Weak establishment. |
| **Button** | دکمه | dokme | S1; S4 GTK; S6 AOSP; S8 TalkBack `display_name_button`; S9 Chromium (82×); S10 Microsoft; S17 فرهنگستان (دکمۀ بازنشانی); S19 Sonnat | **دکمه** | ✅ **Universal. Zero disagreement across all 21 sources.** |
| **Form** | فرم | form | S1 WordPress `form = فرم`; S19 Sonnat prose ("فرم‌ها"); S9 Chromium (24×); S20 | **فرم** | ✅ Settled loanword, fully naturalized. ⚠️ Note GTK fa.po has a **bug**: the ARIA role `form` is mistranslated as **از** ("from"). Do not copy GTK here. |
| **Navigation** | راهبری · ناوبری · پیمایش · هدایت | rāhbari · nāvbari · peymāyesh · hedāyat | S19 Sonnat section titled **راهبری**; S4 GTK `navigation` = **ناوبری**; S16 fa.wikipedia "Navigation bar" → **نوار ناوبری**; S1 WordPress `navigation = راهبری`; S8 TalkBack uses **پیمایش** for the *act* of navigating; S20 "Navigation / هدایت" | **CONTESTED: راهبری vs ناوبری** | Split. **راهبری** = WordPress fa + Divar/Sonnat (the industry register). **ناوبری** = GNOME + Persian Wikipedia (the encyclopedic/FOSS register). **پیمایش** is the verb ("to navigate/scroll"), not the noun. Pick one and be consistent — this is a real decision, not a lookup. |
| **Pagination** | صفحه‌بندی | safhe-bandi | S16 fa.wikipedia article **صفحه‌بندی**; S20 "Pagination / صفحه‌بندی"; S12 Element Plus + S13 Vuetify + S11 Ant all ship pagination strings ("صفحه بعد/قبل", "ردیف در صفحه") | **صفحه‌بندی** | ✅ Settled, native. |
| **Tab** | زبانه · تب · نوار تب | zabāne · tab · navār-e tab | S9 Chromium **زبانه ×572** (Google's overwhelming choice); S4 GTK `tab` = **زبانه**, `tab list` = فهرست زبانه, `tab panel` = تابلوی زبانه; S2 Firefox uses زبانه; S1 WordPress `tab = زبانه`; S10 Microsoft **زبانه**; S19 Sonnat component titled **نوار تب**, body text uses **تب‌ها** throughout | **CONTESTED: زبانه (platform) vs تب (product design)** | ⚠️ **Sharpest split in the dataset.** *Browser* tabs are **زبانه** everywhere (Google, Mozilla, Microsoft, GNOME, WordPress — total convergence). But the *component* in the Iranian design industry is **تب** (Divar/Sonnat). Recommendation: use **تب / نوار تب** for the UI component, matching Sonnat, but be aware زبانه is what every OS vendor ships. |
| **Accordion** | آکاردئون · گسترنده | ākārdeon · gostarande | S19 Sonnat `AccordionRow` = **ردیف آکاردئون**; S4 GTK `expander` = **گسترنده**; Persian Bootstrap tutorials use آکاردئون | **آکاردئون** (loanword) | ⚠️ **LOANWORD DOMINATES.** گسترنده (GTK) refers to GTK's `expander` widget, a narrower thing. Persian Wikipedia has an آکاردئون article (the instrument) — the UI sense borrows it directly. |
| **Checkbox** | چک‌باکس · چارگوش انتخاب · کادر انتخاب · جعبهٔ تیکی · جعبه بررسی | chek-bāks · chārgush-e entekhāb · kādr-e entekhāb · ja'be-ye tiki · ja'be-ye barresi | S19 Sonnat **چک‌باکس** (explicitly, with parent/child checkbox docs); S14 MUI-X `checkboxSelectionHeaderName` = **چک‌باکس انتخاب**; S8 TalkBack `display_name_checkbox` = **چارگوش انتخاب**; S4 GTK `checkbox` = **جعبهٔ تیکی**; S16 fa.wikipedia article = **جعبه بررسی**; S6 AOSP `checked` = علامت‌زده‌شده | **چک‌باکس** (loanword) in industry; **چارگوش انتخاب** at Google | ⚠️ **LOANWORD DOMINATES in the design/dev register.** Five different native coinages exist and *none* of them agree with each other — which is itself the evidence that no native term won. Persian Wikipedia's جعبه بررسی is a bad translation ("inspection box"). |
| **Radio (radio button)** | دکمهٔ رادیویی | dokme-ye rādioyi | S19 Sonnat **دکمهٔ رادیویی**; S8 TalkBack `display_name_radio` = **دکمه رادیویی**; S16 fa.wikipedia article **دکمه رادیویی**; S4 GTK `radio` = رادیویی, `radio group` = گروه رادیویی; S20 | **دکمهٔ رادیویی** | ✅ **Total convergence** — Google, GNOME, Wikipedia and Divar all identical. High confidence. (Semi-loanword: رادیویی is a naturalized adjective.) |
| **Switch (toggle)** | کلید · دکمهٔ تغییر وضعیت · تغییر وضعیت | kelid · dokme-ye taghyir-e vaz'iyat | S19 Sonnat **کلید (Switch)** with a dedicated section; S4 GTK `switch` = **کلید**, `toggle button` = **دکمهٔ تغییر وضعیت**; S1 WordPress `toggle = تغییر، تغییر وضعیت`; S16 fa.wikipedia "Switch" → کلید (مدار) | **کلید** for the switch component; **تغییر وضعیت** for the toggle *action* | ✅ Good confidence. Divar and GNOME independently chose **کلید**. Distinguish noun (کلید) from verb (تغییر وضعیت دادن). Loanword سوییچ exists in speech but in no shipped source. |
| **Slider** | اسلایدر · لغزنده · سرنده | eslāydar · laghzande · sarande | S19 Sonnat **اسلایدر محدوده** (`InputSlider`); S1 WordPress `slider = لغزنده \| اسلایدر` (both listed); S12 Element Plus `slider.defaultLabel` = "**لغزنده** بین {min} و {max}"; S8 TalkBack "تنظیم کردن **لغزنده**"; S4 GTK `slider` = **سرنده** | **CONTESTED: لغزنده (localization) vs اسلایدر (design industry)** | ⚠️ Real split. **لغزنده** wins in shipped software (Google, Element Plus, WordPress list it first). **اسلایدر** wins in Iranian product-design docs (Sonnat, Aslani). GTK's سرنده is an isolated GNOME coinage — 7 Wikipedia hits, ignore it. Also watch out: "اسلایدر" in Iranian web-agency speech usually means a *carousel*, not a range input. |
| **Badge** | نشان · نشانگر · بج | neshān · neshāngar · bej | S19 Sonnat component titled **نشان و نشانگر** — نشان = badge with text, نشانگر = dot indicator; S13 Vuetify `badge` = **نشان**; S20 "Badges / بج - نشان‌ها"; S16 fa.wikipedia "Badge" → آرم سینه (physical badge, not UI) | **نشان** | ✅ Good confidence. Vuetify and Divar converge on نشان. Sonnat's نشان / نشانگر split (text badge vs dot) is a useful precedent PatternFly can reuse. بج is the spoken loanword. |
| **Alert** | هشدار | hoshdār | S4 GTK `alert` = **هشدار**, `alert dialog` = گفت‌وگوی هشدار; S9 Chromium **هشدار ×38**; S1 WordPress `warning = هشدار`; S6 AOSP `notification_channel_network_alert` = هشدارها | **هشدار** | ✅ **Universal.** Note هشدار also carries "warning" — Persian does not distinguish alert/warning lexically, which will matter for PatternFly's alert *variants* (info / success / warning / danger). See §3. |

---

## 3. SECONDARY TABLE — the "if you have capacity" terms

| Concept | Persian term(s) found | Transliteration | Source(s) | Most widespread | Notes |
|---|---|---|---|---|---|
| Menu | منو · فهرست · گزینگان | meno · fehrest · gozingān | S9 Chromium منو ×36 / فهرست ×103; S4 GTK `menu` = **فهرست**; S1 WordPress `menu = فهرست`; S10 Microsoft **منو** ("کلید منو", "نوار منو"); S5 KDE + S18 Persian-HIG + S17 فرهنگستان = **گزینگان** | **منو** (industry/MS) / **فهرست** (FOSS) | ⚠️ Three-way. گزینگان is the *approved* term and is used essentially nowhere outside KDE. فهرست is ambiguous (it also means "list" and "index"). **منو** is the safest for a product design system. |
| Sidebar | نوار کناری · منوی کناری | navār-e kenāri · meno-ye kenāri | S1 WordPress `sidebar = نوار کناری`; S4 GTK `Sidebar` = **نوار کناری**; S19 Sonnat prose "منوهای کناری" | **نوار کناری** | ✅ Settled. |
| Header | سربرگ · هدر · سرصفحه · سرایند | sarbarg · heder · sarsafhe · sarāyand | S1 WordPress `header = سربرگ`; S19 Sonnat prose **هدر**; S8 TalkBack `heading` = **عنوان**, granularity "سرصفحه‌ها"; S4 GTK `column header` = **سرایند ستون** | **CONTESTED** | Depends on sense: page header = سربرگ/هدر; table column header = **سرایند ستون** (GTK) or **سرصفحه ستون** (TalkBack); heading = **عنوان**. Do not conflate. |
| Footer | پابرگ · فوتر · پاورقی | pābarg · futer · pāvaraghi | S1 WordPress `footer = پابرگ` | **پابرگ** (WordPress) / **فوتر** (spoken) | Only one glossary source. Weak. |
| Search | جستجو · جست‌وجو | jostoju | S9 Chromium **جستجو ×259**; S6 AOSP; S4 GTK **جست‌وجو**; S1; S11 Ant; S19 | **جستجو** | ✅ Universal. Note orthography split: جستجو (Google, industry) vs جست‌وجو (GNOME, careful editorial). Pick one for the style guide. |
| Filter | فیلتر · پالایش · صافی | filter · pālāyesh · sāfi | S14 MUI-X **فیلتر** throughout; S11 Ant **فیلتر**; S15 Prime **فیلتر**; S1 WordPress `filter = صافی`; S4 GTK `Filter` = **پالایش** | **فیلتر** (loanword) | ⚠️ **LOANWORD DOMINATES.** Every shipped component library uses فیلتر. WordPress's صافی and GNOME's پالایش are outliers. |
| Sort | مرتب‌سازی | morattab-sāzi | S13 Vuetify; S14 MUI-X `columnMenuSortAsc` = مرتب‌سازی صعودی; S11 Ant `sortTitle` = مرتب سازی; S1 | **مرتب‌سازی** | ✅ Universal. Ascending = صعودی, descending = نزولی (converged across Ant/MUI/Vuetify). |
| Table | جدول | jadval | S4 GTK; S8 TalkBack `display_name_table`; S1; S16 fa.wikipedia | **جدول** | ✅ Universal. Row = **ردیف/سطر**, column = **ستون**, cell = **سلول**. |
| Icon | آیکون · آیکن · نماد · شمایل · نقشک | āykon · āykan · namād · shamāyel · naghshak | S1 WordPress `icon = آیکون`; S19 Sonnat **آیکون**; S20 **آیکون‌ها**; S9 Chromium **نماد ×39** (never آیکون); S10 Microsoft **نماد**; S4 GTK **شمایل**/**نقشک**; S16 fa.wikipedia **آیکن (رایانش)**; S17 فرهنگستان **نقشک** | **CONTESTED: آیکون (industry) vs نماد (Google/MS)** | ⚠️ Five-way split, the messiest term in the set. Google and Microsoft both ship **نماد**. WordPress, Divar and the whole Iranian design community say **آیکون**. فرهنگستان says نقشک — used by nobody. For a design system aimed at Iranian designers: **آیکون**. |
| Avatar | آواتار · نیم‌رخ · تصویر کاربر | āvātār · nimrokh · tasvir-e kārbar | S1 WordPress `avatar = نیم‌رخ`; S16 fa.wikipedia **آواتار (رایانش)**; S19 Sonnat prose "تصویر کاربر (Avatar)" | **آواتار** | WordPress's نیم‌رخ ("profile/silhouette") is idiosyncratic. Sonnat descriptively writes تصویر کاربر. |
| Progress bar | نوار پیشرفت · نشانگر پیشرفت | navār-e pishraft · neshāngar-e pishraft | S4 GTK `progress bar` = **نوار پیشرفت**; S16 fa.wikipedia **نوار پیشرفت**; S20; S19 Sonnat component titled **نشانگرِ پیشرفت** (covers linear/circular/dotted) | **نوار پیشرفت** for the bar; **نشانگر پیشرفت** as the umbrella | ✅ Both are real and non-conflicting: Sonnat uses نشانگر as the family name and خطی/دایره‌ای/نقطه‌ای for variants. Good precedent. |
| Spinner / Loading | در حال بارگذاری · لودینگ | dar hāl-e bārgozāri · luding | S13 Vuetify `loading` = **در حال بارگذاری...**; S12 Element Plus **در حال بارگذاری**; S20 "Loaders / بارگذار" | **در حال بارگذاری** for the message; **no established term for the "spinner" component** | The *state copy* is fully converged. The *component* has no Persian name — Sonnat ships `Spinner`/`PageLoader` with no Persian doc page. |
| Notification | اعلان · آگاه‌سازی · اطلاعیه · نوتیفیکیشن | e'lān · āgāh-sāzi · ettelā'iye · notifikeyshen | S9 Chromium **اعلان ×205**; S6 AOSP **اعلان**; S2 Firefox **اعلان**; S1 WordPress `notification = آگاه‌سازی`; S7 Material Android badge desc = "اعلان جدید" | **اعلان** | ✅ Strong: Google + Mozilla + Android all use اعلان. WordPress's آگاه‌سازی is an outlier. |
| Banner | بنر · بیرق | baner · beyragh | S20 "Banners / بنرها"; S4 GTK `banner` = **بیرق** | **بنر** (loanword) | GTK's بیرق ("flag/standard") is a GNOME purism nobody else uses. |
| Popover | **no established term found** · پنجرهٔ بازشو | panjere-ye bāzsho | S2 Firefox / S10 Microsoft use **بازشو** for *pop-up* ("منوی بازشو", "پنجره بازشو"); S17 فرهنگستان `pop-up menu` = **گزینگان بالاپَر** | **no established term found** | Only the "pop-up" family has Persian; "popover" as a distinct component does not. |
| Drawer | کشو · برگ زیرین · برگ کناری | keshu · barg-e zirin · barg-e kenāri | S7 Material Android: bottom sheet = **برگ زیرین**, side sheet = **برگ کناری**; S12 Element Plus `drawer.close` reuses the *dialog* string | **CONTESTED — weak** | ⚠️ Element Plus fa literally translates the drawer's close label as "بستن این **دیالوگ**", i.e. the translator didn't have a word for drawer. Google's برگ زیرین/برگ کناری are the only real, shipped Persian names for the pattern. |
| Stepper | فیلد پله‌ای · گام‌به‌گام | fild-e pelle-i · gām-be-gām | S19 Sonnat `InputStepper` = **فیلد پله‌ای**; S13 Vuetify `stepper` object only has next/prev (**بعدی/قبلی**) | **no established term found** for the wizard-style stepper | ⚠️ Sonnat's فیلد پله‌ای is a *numeric* stepper input, a different component from PatternFly's progress stepper. Do not reuse it. |
| Label | برچسب · لیبل | barchasb · leybel | S1 WordPress `label = برچسب`; S4 GTK `label` = **برچسب**; S21 فرهنگستان-sourced CS dict `label = برچسب`; S19 Sonnat prose uses **لیبل** repeatedly ("لیبل متنی", "متن لیبل") | **برچسب** (formal) / **لیبل** (industry speech) | ⚠️ Note collision: **برچسب** is also the standard word for **Tag** (S1 `tag = برچسب`, S19 `Tag` component = برچسب). PatternFly has both Label and Tag-like concepts — this collision needs resolving. |
| Placeholder | نگهدارنده مکان · متن راهنما · جایگزین | negahdārande-ye makān · matn-e rāhnamā · jāygozin | S1 WordPress `placeholder = نگهدارنده مکان`; S11 Ant `global.placeholder` = **لطفاً انتخاب کنید** (i.e. copy, not a name); S19 Sonnat option label = **با متن راهنما**; S20 "Placeholder / جایگزین" | **متن راهنما** (for input hint text) | ⚠️ Sources are talking about different things: WordPress's نگهدارنده مکان = layout placeholder; Sonnat's متن راهنما = input hint text. Disambiguate before choosing. |
| Input / Text field | ورودی · فیلد متنی · کادر متنی · جعبهٔ متنی | vorudi · fild-e matni · kādr-e matni · ja'be-ye matni | S19 Sonnat **فیلد متنی** (single-line) vs **کادر متنی** (multi-line/textarea) — explicitly distinguished; S4 GTK `text box` = **جعبهٔ متنی**; S8 TalkBack `display_name_edit_field` = **فیلد ویرایش**; S1 WordPress `field = زمینه، ورودی، فیلد` | **فیلد متنی** | ✅ Sonnat's فیلد متنی / کادر متنی pair is the cleanest published precedent and directly answers "Textarea". |
| Textarea | کادر متنی | kādr-e matni | S19 Sonnat TextField page: "برای وارد کردن داده‌هایی که طول بلندتری دارند، باید از «**کادر متنی**» استفاده شود" | **کادر متنی** | Single but authoritative source (Divar). |
| Link | پیوند · لینک | peyvand · link | S1 WordPress `link = پیوند`; S4 GTK; S8 TalkBack `display_name_link` = **پیوند**; S17 **فرهنگستان approved** (پیوند); S19 Sonnat prose uses **لینک** | **پیوند** (formal, approved) / **لینک** (industry speech) | ✅ پیوند is one of the rare cases where the approved term genuinely won in software. |
| Divider | جداکننده · جداساز | jodā-konande · jodā-sāz | S19 Sonnat component titled **جداکننده**; S4 GTK `separator` = **جداساز**; S20 "Dividers / تقسیم‌کننده" | **جداکننده** | Divar's term. |
| Panel | پنل · تابلو | panel · tāblo | S1 WordPress `panel = پنل`; S14 MUI-X `detailPanelToggle` = **پنل جزئیات**; S2 Firefox uses **تابلو** consistently ("باز کردن تابلو پیام‌ها") | **پنل** (loanword) | ⚠️ Firefox's تابلو is a Mozilla-fa house style, unique to them. |
| Grid | شبکه · گرید | shabake · gerid | S4 GTK `grid` = **شبکه**, `grid cell` = سلول شبکه; S1 WordPress `grid = شبکه‌ای`; S19 Sonnat foundation page titled **گرید و نقاط‌شکست**; S20 "Grid System / سیستم شبکه" | **CONTESTED: شبکه (a11y/FOSS) vs گرید (layout design)** | Useful split by sense: the *ARIA role* grid = شبکه; the *layout system* = گرید. Sonnat also gives **نقاط‌شکست** for breakpoints. |
| Layout | چیدمان · طرح · صفحه‌بندی | chideman · tarh · safhe-bandi | S19 Sonnat foundation page **چیدمان** ("درک چیدمان و فاصله‌گذاری"); S1 WordPress `layout = طرح، چیدمان`; S4 GTK `Layout` = **صفحه‌بندی**; S21 CS dict `layout = چیدمان، جانمایی` | **چیدمان** | ✅ Good confidence — Divar, WordPress and the CS dictionary all list چیدمان. |
| Dashboard | داشبورد · پیشخوان | dāshbord · pishkhān | S20 **داشبورد**; S1 WordPress `dashboard = پیشخوان`; S9 Chromium **داشبورد ×3** | **داشبورد** (loanword) | ⚠️ **پیشخوان is a WordPress-specific brand choice** (it's what wp-admin is called in Persian) and shouldn't be generalized. |
| Settings | تنظیمات | tanzimāt | S1; S4 GTK; S6 AOSP; S10 Microsoft ("«تنظیمات» را در Windows 11 باز کنید"); S9 | **تنظیمات** | ✅ Universal. |
| Save | ذخیره | zakhire | S1; S4 GTK `_Save` = **ذخیره**; S5 KDE; S15 Prime `saveEdit` = ذخیره ویرایش | **ذخیره** | ✅ Universal. |
| Cancel | لغو · انصراف | laghv · enserāf | S11 Ant `Modal.cancelText` = **لغو**; S12 Element Plus **لغو**; S13 Vuetify **لغو**; S15 Prime **لغو**; S6 AOSP `cancel` = **لغو**; S4 GTK `_Cancel` = **انصراف**; S2 Firefox wizard cancel = **انصراف**; S1 WordPress lists both | **لغو** | ⚠️ Clean split: **component libraries** → لغو; **desktop apps (GTK/Firefox)** → انصراف. For a web design system, **لغو** (5 of 5 component libraries agree). |
| Delete | حذف | hazf | S1; S4 GTK; S5 KDE; S6 AOSP; S11 Ant `Transfer.remove` = حذف; S14 MUI-X | **حذف** | ✅ Universal. Note *remove* (as opposed to delete) tends to be **پاک کردن** or **برداشتن** (S7 Material chip close = برداشتن). |
| Submit | ارسال · ثبت | ersāl · sabt | S6 AOSP `searchview_description_submit` = "**ارسال** عبارت جستجو" | **ارسال** | Weak — only one strong source. ثبت ("register/record") is common in Iranian forms but I found no glossary source for it. |
| Next / Back | بعدی · قبلی · عقب · بازگشت · برگشتن | ba'di · ghabli · 'aghab · bāzgasht · bargashtan | S11 Ant `Tour` = **بعدی/قبلی/پایان**; S12 Element Plus `tour` = بعدی/قبلی/پایان; S13 Vuetify `stepper` = بعدی/قبلی; S2 Firefox wizard = **عقب / بعدی / پایان**; S4 GTK `Back` = **عقب**; S7 Material searchview nav = **برگشتن** | **بعدی / قبلی** | ✅ Strong: three independent component libraries converge exactly on بعدی/قبلی/پایان. |
| Close | بستن | bastan | S11 Ant `global.close`; S13 Vuetify; S15 Prime `aria.close`; S2 Firefox `notification-close-button`; S4 GTK; S1 | **بستن** | ✅ Universal, zero disagreement. |
| Widget | ابزارک · ویجت | abzārak · vijet | S1 WordPress `widget = ابزارک`; S4 GTK `widget` = **ابزارک** | **ابزارک** | ✅ Rare win for a native coinage — GNOME and WordPress independently agree. |
| Dialog (box) | کادر گفتگو · گفت‌وگو · دیالوگ | kādr-e goftogu · goftogu · diyālog | S10 Microsoft **کادر گفتگو**; S9 Chromium **کادر گفتگو ×13**; S4 GTK `dialog` = **گفت‌وگو**, `alert dialog` = گفت‌وگوی هشدار; S12 Element Plus `dialog.close` = "بستن این **دیالوگ**"; S19 Sonnat prose **دیالوگ** | **CONTESTED: کادر گفتگو (vendors) vs دیالوگ (web design industry)** | ⚠️ Same platform-vs-industry split as Tab. Microsoft and Google both ship کادر گفتگو; Iranian web teams say دیالوگ. |
| Card sorting, Hamburger menu, Snackbar (adjacent) | دسته‌بندی کارت‌ها · منوی همبرگری · اسنک‌بار | daste-bandi-ye kārt-hā · meno-ye hamborgeri · esnak-bār | S20; S16 fa.wikipedia article **دکمه همبرگری** | منوی همبرگری / دکمه همبرگری | Both attested. |

---

## 4. Where the loanword clearly dominates — the explicit list

These are cases where the borrowed word is what people actually use, and **a native coinage would be
the wrong call**:

| Concept | Dominant loanword | Evidence |
|---|---|---|
| Modal | **مودال / مدال** | Persian Wikipedia article title; Divar/Sonnat docs; Aslani glossary |
| Breadcrumb | **بردکرامب / بردکرام** | Persian Wikipedia article title **and** Divar/Sonnat component title |
| Chip | **چیپس** | Divar/Sonnat component title |
| Skeleton | **اسکلتون / لودینگ اسکلتی** | Persian dev community writing; no native alternative anywhere |
| Accordion | **آکاردئون** | Divar/Sonnat (`ردیف آکاردئون`); Persian Bootstrap tutorials |
| Filter | **فیلتر** | Ant Design, MUI-X, PrimeVue all ship فیلتر |
| Dialog (web) | **دیالوگ** | Element Plus fa; Divar/Sonnat prose |
| Tab (component) | **تب / نوار تب** | Divar/Sonnat (vs زبانه on every OS) |
| Slider (design docs) | **اسلایدر** | Divar/Sonnat; Aslani |
| Checkbox | **چک‌باکس** | Divar/Sonnat; MUI-X fa |
| Dashboard | **داشبورد** | Aslani; Chromium |
| Banner | **بنر** | Aslani |
| Snackbar | **اسنک‌بار** | Aslani (body text) |
| Component | **کامپوننت** | Divar/Sonnat; every Persian design article |
| Label (spoken) | **لیبل** | Divar/Sonnat prose |
| Grid (layout) | **گرید** | Divar/Sonnat foundation page |
| Also fully naturalized in Divar/Sonnat prose | **فرم، آیکون، اسکرول، هاور، فوکوس، تایپوگرافی، کارت** | S19 throughout |

---

## 5. What I searched and came up EMPTY on

This section is the roadmap for where original terminology work is actually required.

### 5.1 Concepts with genuinely no established Persian term

| Concept | What I checked | Result |
|---|---|---|
| **Toast** | WordPress glossary (absent), Ant/Element/Vuetify/MUI/Prime fa locales (none name it), Sonnat ships `Snackbar` with no Persian page, Persian Wikipedia (no article) | **Empty.** Only اسنک‌بار / توست in speech. Needs a decision. |
| **Empty state** (as a pattern) | All 5 component-library locales, Sonnat, WordPress glossary, Persian Wikipedia | **Empty as a name.** The *copy* is converged (داده‌ای موجود نیست) but the pattern is unnamed. |
| **Skeleton** | Every shipped localization; Sonnat's `Skeleton` has no Persian doc page | **Empty in localizations.** Only community blog usage (اسکلتون). |
| **Data list** | WordPress glossary, Sonnat, all component libraries | **Empty.** Only generic فهرست. |
| **Tertiary** (button priority) | WordPress glossary (has primary + secondary, no tertiary), Sonnat (uses an emphasis scale instead) | **Empty.** |
| **Popover** | All 21 sources | **Empty.** Only the pop-up family (بازشو). |
| **Stepper** (progress/wizard sense) | Vuetify (only next/prev), Sonnat (`InputStepper` is a different thing) | **Empty.** |
| **Wizard** | Mozilla (translates only the buttons), Microsoft style guide, Google, GNOME, فرهنگستان | **Effectively empty.** Only KDE's obsolete جادوگر. |
| **Spinner** (as a component) | All sources | **Empty.** Only the state copy در حال بارگذاری. |
| **Submit** | Only one source (AOSP `ارسال`) | Very weak. |

### 5.2 Sources I looked for and could NOT find

| What I looked for | Outcome |
|---|---|
| **A published design system from Digikala, Snapp, Cafe Bazaar, Tapsell, or Zarinpal** | ❌ None public. Multiple Persian sources state these companies' design systems are internal and unpublished. **Sonnat (Divar) is the only publicly documented Persian design system I found.** |
| **Divar's GitHub org design-system repo** | ❌ `github.com/divar-ir` has 24 repos, none is a design system — Sonnat lives at `github.com/sonnat/sonnat-ui` under its own org. |
| **Mozilla's Persian style guide / published fa glossary** | ❌ Pontoon's fa Terminology project exists (102 strings, 98 translated) but the entries are not exposed via a fetchable listing. No published Mozilla fa style guide found. |
| **Microsoft fa-IR terminology collection (TBX)** | ❌ The Microsoft Language Portal closed 2023-06-30. The Persian **style guide** PDF is still downloadable and I used it, but it is a *style* guide — it contains almost no term list. The searchable fa-IR terminology database is gone. |
| **A فرهنگستان term for any modern component** | ❌ Confirmed empty for 25 component names (see §1). |
| **`dic.farsilinux.org`** — the "واژه‌نامهٔ مرجع برای ترجمه محیط لینوکس", cited by the Persian-HIG as the reference Persian FOSS glossary | ❌ Dead. Referenced in Persian-HIG's bibliography but the project is defunct. |
| **VS Code Persian language pack** | ❌ `microsoft/vscode-loc` has no `fa` pack (404). |
| **KDE `kwidgetsaddons` fa** (widget-level Persian) | ❌ 404; only `kconfigwidgets` fa exists, and it's a small standard-actions file. |
| **Persian Wikipedia articles for Tooltip, Tab (UI), Sidebar, Accordion (UI), Toast, Empty state, Wizard (software), Dialog box, Text box, Status bar, Title bar, Graphical widget, Context menu, Dashboard** | ❌ All missing — no `fa` langlink. Persian Wikipedia's UI-component coverage is thin. |

### 5.3 Methodological caveats (please read before reusing my numbers)

- **Persian Wikipedia `insource:` counts are noisy** and I have deliberately not leaned on them except
  where the term is unambiguous. e.g. `توست` returns 609 hits — almost all *toast* the bread.
  `چیپ` 468 — mostly potato chips and silicon chips. `نماد` 15,868 — mostly "symbol" in general prose.
  `فیلتر` 2,074 — mostly water/air filters. Where I quoted a count (گزینگان 2 vs منو 1,088;
  بردکرامب 3; تولتیپ 0; دراپ‌داون 0) the term is unambiguous enough for the count to mean something.
- **Some shipped Persian locales contain outright errors** — do not copy them blindly:
  - GTK `fa.po`: ARIA role `form` → **از** ("from" — wrong); `article` → **حرف تعریف** (the
    grammatical article — wrong); `marquee` → **چادر** ("tent" — wrong); `meter` → **متر**.
  - PrimeLocale `fa.json`: `collapseLabel` → **سقوط - فروپاشی** ("collapse" as in societal collapse —
    wrong); `apply` → **درخواست دادن** ("to request" — wrong); `chooseYear` → **انتخاب تاریخ** (duplicate
    of chooseDate); `navigation` → **جهت یابی**. PrimeLocale fa reads partly machine-translated.
  - Element Plus `fa.ts`: `drawer.close` reuses the *dialog* string verbatim.
  - These are the weakest sources in the set. Weight S19 (Sonnat), S9 (Chromium), S4 (GTK, for role
    names specifically), S1 (WordPress) and S8 (TalkBack) above them.
- **Register mixing is the main hazard.** GNOME/KDE/فرهنگستان terms (گزینگان، شمایل، سرنده، بیرق،
  نقشک، پس‌سو) will read as archaic or comical to an Iranian product designer. Firefox fa has its own
  house purisms (پایگاه‌وب for website, صدابَر for microphone, تابلو for panel) that are also not
  general usage.

---

## 6. Recommended starting point (evidence-ranked, not a decision)

**Tier 1 — use as-is, universal, zero disagreement:**
دکمه (button) · نوار ابزار (toolbar) · بستن (close) · حذف (delete) · ذخیره (save) · تنظیمات (settings) ·
جدول (table) · جستجو (search) · پنجره (window) · پیوند (link) · دکمهٔ رادیویی (radio) · هشدار (alert) ·
صفحه‌بندی (pagination) · مرتب‌سازی (sort) · بعدی/قبلی (next/back) · اعلان (notification) · فرم (form) ·
نوار پیشرفت (progress bar) · نوار کناری (sidebar) · ابزارک (widget)

**Tier 2 — well attested, one clear leader:**
مودال (modal) · کارت (card) · بردکرامب (breadcrumb) · راهنمای ابزار (tooltip) · منوی کشویی (dropdown) ·
چک‌باکس (checkbox) · کلید (switch) · نشان (badge) · آکاردئون (accordion) · چیدمان (layout) ·
جداکننده (divider) · فیلد متنی / کادر متنی (text field / textarea) · فیلتر (filter) · لغو (cancel)

**Tier 3 — CONTESTED, needs an explicit project decision:**
tab (**تب** vs زبانه) · navigation (**راهبری** vs ناوبری) · icon (**آیکون** vs نماد) ·
slider (**اسلایدر** vs لغزنده) · menu (**منو** vs فهرست) · dialog (**دیالوگ** vs کادر گفتگو) ·
grid (**گرید** vs شبکه) · label vs tag (both want **برچسب**)

**Tier 4 — no established term; original work required:**
toast · empty state (as a name) · skeleton · data list · tertiary · popover · stepper · wizard · spinner
