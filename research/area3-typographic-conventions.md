# Persian (fa-IR) Typographic & Orthographic Conventions — Primary Source Research

**Scope:** Area 3 of the PatternFly fa-IR RTL adaptation research. ZWNJ, punctuation, numerals, ezāfe/normalization, dates & calendars.

**Method / claim labelling.** Every claim below is tagged:
- **[SOURCE]** — the cited authority literally says this (Persian quoted verbatim where load-bearing).
- **[DATA]** — machine-verifiable fact read out of Unicode UCD / CLDR XML by me, with the file and field named.
- **[PRACTICE]** — documented common usage that diverges from an authority.
- **[INFERENCE]** — my reasoning, explicitly flagged.

---

## 0. The authority landscape (read this first)

There is **no single authority** for Persian typography. Four distinct bodies legislate four non-overlapping things, and they only partially agree:

| Body | Legislates | Does **not** legislate |
|---|---|---|
| **فرهنگستان زبان و ادب فارسی** (Academy of Persian Language and Literature) | Orthography: spelling, word-joining, spacing (فاصله‌گذاری), hamza, ezāfe | Punctuation, numerals, character encoding, dates |
| **ISIRI** (Iranian national standards body) — ISIRI 6219:2002, ISIRI 9147/2901 (keyboard) | Which Unicode code points are permitted/forbidden in Persian; keyboard layout | Orthography |
| **Unicode / CLDR** | Code points, normalization, bidi, locale defaults (numbers, calendar, delimiters) | Orthography |
| **Publishers' شیوه‌نامه‌ها / Wikipedia MoS** | Punctuation, numeral policy in running text, date style | (nothing binding) |

**[SOURCE]** The Academy explicitly disclaims punctuation. From the introduction to the current edition:

> «همهٔ مسائل و مشکلات خطّ فارسی در این دفتر مطرح نشده و آیین‌مند کردن اموری از قبیل **نشانه‌گذاری یا سجاوندی** و شیوهٔ ضبط کلمات خارجی با خطّ فارسی و یا آوانویسی کلمات فارسی به خطّ خارجی در این مجموعهٔ قواعد مورد نظر نبوده است.»
> — *دستور خطّ فارسی (ویراست جدید)*, ۱۴۰۱, مقدمه, بند ۳, p. 12. https://apll.ir/wp-content/uploads/2023/07/Dastour-e-Khat-17.04.1402.pdf

So: **anything a design system needs about punctuation, numerals or dates is not answerable from the Academy.** It comes from CLDR/ISIRI and from editorial style guides that disagree with each other.

**[SOURCE]** Peer-reviewed confirmation that the punctuation layer is genuinely fragmented: Ahmadi Darani & Karamatian Fard reviewed **eighteen** current Persian style manuals on punctuation and found systematic internal and mutual contradictions:
> «در پژوهش حاضر هجده شیوه‌نامۀ رایج که در آن به کاربرد علائم نگارشی پرداخته‌اند، به‌روش تحلیلی و انتقادی بررسی شده است؛ در ضمن آن، **تناقض‌های درونی، اختلاف‌ دیدگاه‌های نویسندگان** و افراط و تفریط‌های آنان … نقد و ارزیابی می‌شود»
> — «نقد و تحلیل شیوه‌نامه‌های نگارش و ویرایش فارسی (مطالعۀ موردی: نشانه‌گذاری)», *پژوهش‌های ادبی*, دانشگاه اصفهان. https://liar.ui.ac.ir/article_27287.html (DOI 10.22108/liar.2023.135551.2198)

### Which edition of the Academy standard is current — this matters a great deal

There are **two materially different editions**, and most secondary material on the web still describes the old one.

| | **ویراست نخست** (1st ed., approved 30 تیر ۱۳۸۰; 13th printing ۱۳۹۴, 58 pp.) | **ویراست جدید** (2nd ed., ۱۴۰۱, 88 pp., ISBN 978-622-5305-22-9) |
|---|---|---|
| Half-space (نیم‌فاصله) | **optional** (اختیاری) | **mandatory** in enumerated cases |
| Spacing model | 2 kinds: برون‌کلمه / درون‌کلمه | 3 kinds: **فاصلهٔ کامل / نیم‌فاصله / بی‌فاصله** |
| Rules for compounds | «الزاماً پیوسته» / «الزاماً جدا» | «الزاماً پیوسته» / «الزاماً با نیم‌فاصله/بی‌فاصله» / «الزاماً با فاصلهٔ کامل» |
| PDF | https://apll.ir/wp-content/uploads/2018/10/D-1394.pdf (mirror: https://archive.org/details/https__apll.ir_wp-content_uploads_2018_10_d-1394.pdf) | https://apll.ir/wp-content/uploads/2023/07/Dastour-e-Khat-17.04.1402.pdf |
| Announcement | — | https://apll.ir/1402/02/12/ویراست-جدید-دستورخطّ-فارسی-منتشر-شد/ |

*(apll.ir currently serves an incomplete TLS chain; fetching requires relaxed cert verification or the archive.org mirror.)*

**[SOURCE]** The new edition's own preface states the revision was driven precisely by the typesetting/spacing problem:
> «ازجملهٔ مهم‌ترین این الزامات **سامان دادن به امر فاصله‌گذاری در حروف‌نگاری ترکیب‌ها** … و قاعده‌مند ساختن جدانویسی یا پیوسته‌نویسی آن‌ها بود» — *ویراست جدید*, مقدمهٔ ویراست جدید, p. 18.

**Recommendation for the design system: cite and follow the ۱۴۰۱ edition.** Persian Wikipedia's manual of style already migrated to it.

---

## 1. ZWNJ / نیم‌فاصله (U+200C)

### 1.1 The Academy's three-way spacing model (۱۴۰۱ edition, §7, pp. 22–23)

**[SOURCE]** Verbatim:

> **الف) فاصلهٔ کامل:** «فاصلهٔ طبیعی میان واژه‌ها و ترکیب‌های مستقل در جمله است»
> e.g. پژوهشکدهٔ واژه‌گزینی، زبان و ادبیات فارسی، مردم ایران
>
> **ب) نیم‌فاصله:** «فاصلهٔ میان اجزای ترکیب‌هایی است که حرف آخر اجزای پیشین آن‌ها **قابلیت اتصال به حرف بعد را دارد**، امّا مطابق قواعد نباید پیوسته نوشته شوند»
> e.g. بی‌جاومکان، بی‌دلیل، جا‌به‌جا، دوست‌یابی، شست‌وشو، شکست‌ناپذیری، کم‌نقص، **می‌آیم**، **وسیع‌تر**، هم‌محل، هیئت‌رئیسه
>
> **ج) بی‌فاصله:** «نگذاشتن هر نوع فاصله میان اجزای ترکیب‌هایی است که جزء پیشین آن‌ها مختوم به **حروف منفصلی** است که قابلیت اتصال به جزء پس‌از خود را ندارند»
> e.g. بدکنش، پرفروش، دراختیارگیری، روسیاه، مادربزرگ، هوادار
>
> Explanatory note: «مراد این است که در این نوع فاصله‌گذاری، ویژگی خطّ فارسی … خودبه‌خود فاصله‌ای حداقلی را میان حروف منفصل ایجاب می‌کند و **دیگر به درج نیم‌فاصله نیازی نیست**.»

**This is the single most important operational rule for a design system.** «نیم‌فاصله» and «بی‌فاصله» are the *same orthographic decision* (the parts are joined into one word) realised two different ways depending on the last letter of the first part:

- last letter **connects** (ب پ ت ث ج چ ح خ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ه ی — 25 letters) → **you must insert U+200C**
- last letter **does not connect** (ا د ذ ر ز ژ و — 7 letters) → **insert nothing**; the shaping engine already leaves a gap

**[SOURCE]** The 25/7 split is stated at *دستور خط* p. 14 and restated in Persian Wikipedia's policy: «از بین ۳۲ حرف الفبای فارسی، ۲۵ حرف می‌توانند به حرف بعدی بچسبند … به ۷ حرف دیگر (ا، د، ذ، ر، ز، ژ، و) حروف «منفصل» یا «پیوندناپذیر» گفته می‌شود. **استفاده از نویسهٔ فاصلهٔ مجازی پس از حروف منفصل دیگر مجاز نیست.**» — https://fa.wikipedia.org/wiki/ویکی‌پدیا:نیم‌فاصله

That last sentence is a hard constraint: **a stray U+200C after ا د ذ ر ز ژ و is an error**, and fa-wiki's ابرابزار bot auto-strips them.

### 1.2 The old edition said the opposite — flag this

**[SOURCE]** *دستور خطّ فارسی*, ۱۳۹۴ printing, §7, p. 10, verbatim:
> «(این فاصله در تداول نیم‌فاصله خوانده می‌شود). **رعایت این نیم‌فاصله به‌ویژه در دست‌نوشته‌ها دشوار است و ازاین‌رو اختیاری است** و می‌توان ابهام تلفّظی را در ترکیب‌هایی مانند خردورزی با حرکت‌گذاری برطرف کرد.»

i.e. **the Academy's own pre-۱۴۰۱ position was that the half-space is optional**, justified by handwriting difficulty. The ۱۴۰۱ edition drops that sentence entirely and replaces it with the mandatory three-way model. Any Persian style guide, blog post, or LLM answer that says "the Academy says ZWNJ is optional" is quoting the superseded edition.

### 1.3 Case-by-case rulings (all from ویراست جدید ۱۴۰۱ unless noted)

| Construction | Academy ۱۴۰۱ ruling | Page | Verbatim |
|---|---|---|---|
| **می‌ / همی‌** (imperfective prefix) | **ZWNJ mandatory** | 39 | «می‌ و همی‌ (پیشوندهای فعل استمراری) نسبت به جزء اصلی فعل **همواره با نیم‌فاصله** نوشته می‌شوند: می‌افکند، می‌رود، همی‌گوید» |
| نمی‌ (negated imperfective) | نـ attaches to می, ZWNJ before the stem → **نمی‌شود** | 38–39 | Follows from «نون نفی و نهی» + the می rule |
| همی as emphatic particle | **full space** | 39 | «اگر همی نشانهٔ تأکید باشد با فاصلهٔ کامل نوشته می‌شود» |
| **-تر / -ترین** | **ZWNJ/بی‌فاصله mandatory**, 6 exceptions | 40 | «-تر و -ترین همواره با نیم‌فاصله/بی‌فاصله از کلمهٔ پیش‌از خود نوشته می‌شوند، مگر در: **بهتر، کهتر، مهتر، بیشتر، کمتر، کلانتر**» → بزرگ‌تر، وسیع‌تر |
| **-ها** (plural) | **BOTH forms valid**; separate *recommended* | 40 | «ها (نشانهٔ جمع) در الحاق به کلمات به هر دو صورتِ پیوسته و جدا (با نیم‌فاصله/بی‌فاصله) به کار می‌رود، **ولی جدانویسی آن، ازلحاظ آموزشی و همچنین مسائل فنّی مربوط به پردازش متن، توصیه می‌شود**» → both کتابها and کتاب‌ها are correct |
| -ها: 6 mandatory-separate cases | ZWNJ **required** | 40–41 | (1) after foreign words: آنزیم‌ها، ویتامین‌ها؛ (2) when highlighting the stem: کتاب‌ها؛ (3) when the word becomes پردندانه (>3 teeth): حسّاسیت‌ها، پیش‌بینی‌ها؛ (4) plurals of proper names: سعدی‌ها؛ (5) word ends in ه غیرملفوظ: خانه‌ها، میوه‌ها — or in ملفوظ ه after a connecting letter: فقیه‌ها، به‌ها؛ (6) word ends in یای ساکن: خط‌مشی‌ها، نی‌ها |
| **بی‌-** (privative prefix) | **ZWNJ mandatory** + closed exception list | 39 | «بی‌ در نقش پیشوند نفی همیشه با نیم‌فاصله … بی‌تردید، بی‌توجه، بی‌حاصل، بی‌جهت، بی‌چون‌وچرا / **استثنا:** بیجا، بیچاره، بیخود، بیداد، بیدل، بیراه، بیزار، بیعار، بیکار، بینوا، بیهوش». As a *preposition*, full space: «بی هیچ چشمداشتی» |
| **هم‌-** | **ZWNJ mandatory** + long exception list | 40 | «هم‌ در ترکیب همواره با نیم‌فاصله … هم‌اتاق، هم‌بازی، هم‌پایه، هم‌وطن / استثنا: هماره، همان، هماورد، هماهنگ، همایش، همتا، همچنان، همچنین، همدل، همدیگر، همراه، همسایه، همسر، همشهری، همکار، همو، هموار، همواره، همین …» — as a free word: full space («با هم آمدند») |
| **به-** | three-way | 38 | (a) **پیوسته** before verbs/بای زینت (بروم، بگفتم) and in بدین/بدان/بدو/بدیشان and lexicalised adjectives (بجا، بخرد، بسامان، بشکوه، بنام، بهنجار); (b) **نیم‌فاصله** in adjectives/adverbs/compound prepositions: به‌خصوص، به‌سختی، به‌جهتِ؛ (c) **فاصلهٔ کامل** as a preposition: «به برادرت گفتم» |
| **Attached pronouns** (ـم ـت ـش ـمان ـتان ـشان) | always attached; ZWNJ when host ends in ه غیرملفوظ or ی | 44 | خانه‌ام، خانه‌ات، خانه‌اش، خانه‌مان، خانه‌تان، خانه‌شان؛ کشتی‌ام، کشتی‌ات؛ پی‌ام. After connecting consonants no ZWNJ: کتابم، کتابت |
| **ی نکره / مصدری / نسبت** | attached; ZWNJ after ه غیرملفوظ, ی, ای | 46 | خانه‌ای، تیزپی‌ای، کشتی‌ای. (ی مصدری after ه غیرملفوظ turns ه→گ, no ZWNJ: بندگی، خانگی، هفتگی) |
| **Copula ام/ای/ایم/اید/اند** | attached, ZWNJ after connecting letter | 42 | خسته‌ام، خسته‌ای، خسته‌ایم، خسته‌اید، خسته‌اند. **است** takes a full space: «خشنود است»، «خسته است»، «بوده است» — but contracts after آ/و: داناست، دانشجوست |
| **Prefixes with non-connecting finals** | **بی‌فاصله** (no character inserted) | 36 | اَبَر-، ارتا-، با-، باز-، بَر-، بینا-، پاد-، پرا-، پسا-، پیرا-، پیشا-، ترا-، چند-، در-، دگر-، رایا-، زیر-، فر-، فرا-، فرو-، نا-، وا-، ور- → اَبَررسانا، بازآفرینی، پادزهر، درخواست، زیرمجموعه، فرایند، ناخودآگاه، واکنش |
| **Prefixes with connecting finals** | **نیم‌فاصله** | 36 | برون-، بوم-، تک-، درون-، زیست-، میان-، نیم- → برون‌مرزی، بوم‌شناسی، تک‌درس، زیست‌فناوری، نیم‌بند |
| **این/آن، همین/همان، هیچ، هر، که** | full space by default, **نیم‌فاصله when lexicalised** | 34–35 | آن‌طور، این‌گونه؛ همان‌جا، همین‌که، همان‌گونه؛ هیچ‌کدام، هیچ‌کس، هیچ‌گاه، هیچ‌یک؛ چنان‌که، چون‌که. Note **هر** is listed as **بی‌فاصله** (ر is non-connecting): هرچند، هرکدام، هرکس، هرگاه، هرگونه، هریک. Fully joined exceptions: آنجا، آنچه، آنکه، اینجا، اینکه، وانگهی، بلکه |
| Compounds whose 2nd part is a present stem | **نیم‌فاصله/بی‌فاصله** | 61–62 | زبان‌شناس، گیاه‌شناس، ریاضی‌دان، موسیقی‌دان — *unless* lexicalised/occupational: آشپز، استاندار، بخشدار، حسابدار، فرماندار |
| Reduplicative & اتباعی compounds | **نیم‌فاصله/بی‌فاصله** | 62 | تک‌تک، کم‌کم، خط‌خطی، پول‌مول، شلوغ‌پلوغ، دنگ‌وفنگ |
| Coordinative compounds (و) | **نیم‌فاصله/بی‌فاصله** | 63 | آب‌وهوا، رفت‌وآمد، پروبال، دوروبر، کم‌وکاست |
| Compounds with a European loanword | **نیم‌فاصله/بی‌فاصله** | 63 | خوش‌پُز، شیک‌پوش، پاگون‌دار |
| **Compounds that must take a FULL space** | فاصلهٔ کامل | 67+ | Section «ج» — includes اضافی constructions and compound verbs. See §1.6 disagreement below. |

### 1.4 How Persian users actually type it

**[SOURCE]** Persian Wikipedia, *ویکی‌پدیا:صفحه‌کلید فارسی*:
> «نویسهٔ فاصلهٔ مجازی در **صفحه‌کلید استاندارد فارسی** با فشردن **Shift + Space** به‌طور هم‌زمان درج می‌شود.»
> «در صفحه‌کلید غیراستانداردِ ویندوز برای وارد کردن فاصلهٔ مجازی، می‌توان از فشردن هم‌زمان کلیدهای **Ctrl+Shift+2** یا از **Alt+0157** استفاده کرد»
> https://fa.wikipedia.org/wiki/ویکی‌پدیا:صفحه‌کلید_فارسی

- The Iranian national keyboard standard is **ISIRI 9147** (successor to ISIRI 2901:1994); macOS ships it as `Persian ISIRI 2901`; GNU/Linux `ir` layout implements it by default. https://persian-computing.org/wiki/Keyboard
- **[SOURCE]** Windows' *legacy* "Persian" layout is **not** ISIRI-conformant. Windows 8 introduced "Persian (Standard)" based on ISIRI 9147 but **shipped without Shift+Space→ZWNJ**, later added by update. — Behnam Esfahbod, http://zwnj.behnam.es/2014/02/microsoft-and-persian-keyboard-layouts.html
- **[SOURCE]** fa-wiki lists the ISIRI-vs-Microsoft deltas explicitly: (1) Persian digits type correctly; (2) Shift+Space = نیم‌فاصله; (4) **«ی» و «ک» فارسی هستند (بدون دونقطه در زیر «ی» و بدون همزه روی «ک»)** — i.e. the legacy Microsoft layout produces the *Arabic* ي and ك. This is the root cause of the normalization hazard in §4.3.
- **[PRACTICE]** Mobile: Google/Samsung Persian keyboards on Android and the iOS Persian keyboard expose ZWNJ (typically long-press on space or a dedicated key). fa-wiki documents Android/iOS keyboard availability but not a uniform gesture. **[INFERENCE]** For a design system this means: **you cannot assume users can type ZWNJ**, so any text-matching (search, filter, autocomplete, form validation) must be ZWNJ-insensitive.

### 1.5 What breaks when ZWNJ is missing or replaced by a space

**Missing entirely** (letters cursively join):
- می‌رود → میرود; نمی‌شود → نمیشود; بزرگ‌تر → بزرگتر; کتاب‌ها → کتابها
- **[SOURCE]** Mozilla's Persian l10n rules: *"It's wrong to use SPACE in the middle of a word to break the joining."* https://wiki.mozilla.org/L10n:Teams:fa/Rules
- **[SOURCE]** Meaning collisions are real, per fa-wiki: «علی هر **روزنامه‌ای** می‌خواند» (newspaper) vs «علی هر **روز نامه‌ای** می‌خواند» (a letter each day); «خردورزی» (reason) vs «خُرد ورزی».

**Replaced by a plain space** — three concrete failures:
1. **[DATA]** U+0020 creates a line-break opportunity; **U+200C does not**. `LineBreak.txt`: `200C ; CM # Cf ZERO WIDTH NON-JOINER`. Line_Break=CM means the compound cannot be split across lines. A space-separated compound **can** wrap mid-word.
2. **[DATA]** `WordBreakProperty.txt`: `200C ; Extend` — ZWNJ keeps the compound as **one** word for segmentation/double-click-select/word-count. A space makes it two.
3. It is orthographically wrong per the Academy (it is «فاصلهٔ کامل», reserved for independent words).

**Silently stripped by tooling** — the biggest practical hazard. **[DATA]** U+200C is `General_Category=Cf` (format) and `Bidi_Class=BN` (boundary neutral). Naive "strip invisible characters" sanitizers, `trim`/slug generators, some CSV/DB pipelines, and PDF text extractors drop it. **Demonstrated in this very research:** `pdftotext` extraction of the Academy's own official PDF returned **zero** U+200C characters, even though the printed pages show half-spaces throughout.

**Design-system implication [INFERENCE]:** normalize on *comparison*, never on *storage*. Store the ZWNJ; strip it (plus optional ZWNJ↔space folding) only when building a search/sort key.

### 1.6 Where practice diverges from the Academy on ZWNJ

**Disagreement A — اضافی (genitive/attributive) compounds.**
- **Academy (both editions):** these take a **full space**. 1st ed. p. 41 lists under «الزاماً جدا»: دست کم، شورای عالی، حاصل ضرب، صرف نظر، سیب زمینی، آب میوه، آب لیمو.
- **Persian Wikipedia MoS:** «این ترکیب‌ها **با نیم‌فاصله** نوشته می‌شوند، مثل: **دست‌کم، شورای‌عالی، آب‌میوه، آب‌لیمو، سیب‌زمینی، حاصل‌ضرب، صرف‌نظر**» — https://fa.wikipedia.org/wiki/ویکی‌پدیا:نیم‌فاصله
- **[INFERENCE]** fa-wiki appears to read the Academy's «جدا» as "not cursively joined" (→ ZWNJ), whereas the Academy's own three-way model in ۱۴۰۱ distinguishes «جدا با نیم‌فاصله» from «جدا با فاصلهٔ کامل» and puts these in the latter bucket. **Live, unresolved.**

**Disagreement B — plural ها.** Academy: both forms correct, separate merely *recommended*. fa-wiki: «نشانهٔ جمع «ها» را **همیشه باید پیوسته نوشت** (بدون فاصله یا با نیم‌فاصله اما با فاصلهٔ برون‌کلمه نوشته نمی‌شود)» — i.e. fa-wiki forbids the full-space form outright, which the Academy never sanctioned either; but fa-wiki also says ZWNJ is «اختیاری» in most cases. **[PRACTICE]** Modern Persian web/UI text overwhelmingly writes کتاب‌ها with ZWNJ; کتابها reads as dated/careless despite being Academy-legal.

**Disagreement C — consensus rules with no Academy basis.** fa-wiki has explicitly voted (نظرخواهی) additional ZWNJ rules the Academy does not state, e.g. prefixed verbs always take ZWNJ in both verbal and nominal forms («بازمی‌گردد، برنمی‌گرداند، درگذشت، فرامی‌رسد»), and coordinative compounds are joined («بی‌دست‌وپا، بی‌چشم‌ورویی»). These are documented as **local consensus**, not orthographic authority.

---

## 2. Punctuation set and spacing

### 2.1 The character inventory — authoritative source is CLDR, not the Academy

**[DATA]** `common/main/fa.xml` (CLDR main, https://github.com/unicode-org/cldr/blob/main/common/main/fa.xml):

```xml
<exemplarCharacters type="punctuation">
  [\- ‐‑ ، ٫ ٬ ؛ \: ! ؟ . … ‹ › « » ( ) \[ \] * / \\]
</exemplarCharacters>
<delimiters>
  <quotationStart>«</quotationStart>
  <quotationEnd>»</quotationEnd>
  <alternateQuotationStart>‹</alternateQuotationStart>
  <alternateQuotationEnd>›</alternateQuotationEnd>
</delimiters>
```

| Mark | Persian char | Code point | Latin equivalent used? | Unicode props **[DATA]** (UnicodeData.txt / LineBreak.txt) |
|---|---|---|---|---|
| Comma / ویرگول | `،` | **U+060C** ARABIC COMMA | **No** — Persian-specific | gc=Po, **bidi=CS**, LB=IS, WordBreak=**MidNum** |
| Semicolon / نقطه‌ویرگول | `؛` | **U+061B** ARABIC SEMICOLON | **No** | gc=Po, bidi=AL, LB=EX |
| Question mark / علامت سؤال | `؟` | **U+061F** ARABIC QUESTION MARK | **No** | gc=Po, bidi=AL, LB=EX |
| **Full stop / نقطه** | `.` | **U+002E** FULL STOP | **YES — Latin period** | — |
| Colon / دونقطه | `:` | U+003A | **YES — Latin** | — |
| Exclamation / علامت تعجب | `!` | U+0021 | **YES — Latin** | — |
| Ellipsis / سه‌نقطه | `…` | U+2026 | shared | — |
| Quotes / گیومه | `«` `»` | U+00AB / U+00BB | **No** — guillemets required | gc=Pi/Pf, bidi=ON, **Bidi_Mirrored=Y**, LB=QU |
| Nested quotes | `‹` `›` | U+2039 / U+203A | — | Bidi_Mirrored=Y |
| Parentheses / brackets | `(` `)` `[` `]` | U+0028/29, U+005B/5D | **YES — Latin** | Bidi_Mirrored=Y |
| Percent / درصد | `٪` | **U+066A** ARABIC PERCENT SIGN | contested (see 3.4) | gc=Po, bidi=ET, LB=PO |
| Decimal / ممیز | `٫` | **U+066B** ARABIC DECIMAL SEPARATOR | **No** | gc=Po, **bidi=AN**, LB=NU, WordBreak=Numeric |
| Thousands / جداکنندهٔ هزارگان | `٬` | **U+066C** ARABIC THOUSANDS SEPARATOR | **No** | gc=Po, **bidi=AN**, LB=NU, WordBreak=MidNum |
| Per-mille | `؉` | U+0609 | — | gc=Po, bidi=ET |

**Answer to "is the Persian full stop `.` or something else?": it is the plain Latin `.` (U+002E).** There is no separate Persian full stop. Same for `:` `!` `(` `)` `[` `]`. Only ، ؛ ؟ ٪ ٫ ٬ « » are Persian-specific. **[SOURCE]** Behdad Esfahbod, *Persian Computing with Unicode*, 25th Internationalization & Unicode Conference (2004): *"Arabic punctuation marks are used instead of their Latin counterparts, because of the difference in shape. Latin quotation marks are not allowed in Persian text and Double Angle Quotation Marks should be used instead. … Other Latin punctuation marks are allowed."* https://behdad.org/doc/persiancomputing-paper.pdf

### 2.2 Two bidi/segmentation traps hiding in the punctuation set

**[DATA] Trap 1 — U+060C ARABIC COMMA is `Bidi_Class=CS` (Common Separator) and `Word_Break=MidNum`, `Line_Break=IS`.** These are the properties of a *numeric* separator. Placing `،` between two digit runs (`۱۲،۳۴`) makes the bidi algorithm and word segmenter treat the whole thing as one number. This is why `٬` U+066C exists and why CLDR sets the fa thousands separator to `٬`, not `،`.

**[DATA] Trap 2 — U+06F0..U+06F9 have `Bidi_Class=EN` (European Number), while U+0660..U+0669 have `Bidi_Class=AN`.** So Persian digits behave in bidi like Latin digits, and Arabic-Indic digits do not. **[SOURCE]** W3C alreq §6.1.2 notes the same: *"Arabic-Indic digits are of category AN (Arabic Number), differently from their counterpart just above."* https://www.w3.org/TR/alreq/ — **[INFERENCE]** mixing the two families in one string produces different, hard-to-debug reordering.

### 2.3 Quotation-mark ordering — settled empirically

**[DATA]** Both U+00AB and U+00BB are `Bidi_Mirrored=Y`, and `BidiMirroring.txt` pairs `00AB ↔ 00BB`. So visual appearance is renderer-determined. **[DATA]** However, the *logical* order in real Persian corpora is unambiguous: I scanned 281 quote pairs across three Persian Wikipedia policy pages — **every single one** opens with U+00AB and closes with U+00BB, matching CLDR's `quotationStart`/`quotationEnd`.

**Rule for the design system [INFERENCE]:** store `«` = U+00AB as the opening quote, `»` = U+00BB as the closing quote, in logical order, exactly as CLDR specifies. **Never swap them programmatically for RTL** — that produces a double-flip. Same for parentheses/brackets: store the logical open bracket first; the bidi algorithm's mirroring handles the visual.

### 2.4 Spacing rules around marks

The Academy is silent (see §0). The consistent rule across editorial style guides:

**[SOURCE]** *شیوه‌نامهٔ ویرایش و نگارش*, نشر کتاب جمکران:
> «نشانه‌های نگارشی تکی مانند نقطه «.» یا ویرگول «،» **بدون فاصله با آخرین کلمهٔ پیش از خود و با یک فاصله از کلمهٔ بعد از خود** نوشته می‌شوند»
> «مطالب داخل پرانتز و گیومه **از دو طرف بی‌فاصله** و **از بیرون پرانتز و گیومه یک فاصله** رعایت می‌شود»
> https://ketabejamkaran.ir/editorialmanual/

**[SOURCE]** یوتایپ (utype.ir) states the same general rule and the exception:
> «تمامی علائم نگارشی به کلمه پیش از خود می‌چسبند و با کلمه بعدی یک فاصله پیدا می‌کنند» — exception: opening marks (گیومهٔ باز، پرانتز باز) take a space *before* and attach to what follows.
> https://utype.ir/docs/نگارش-فارسی/نشانه-گذاری/

**Summary (identical in shape to Latin/Western practice):**
- `. ، ؛ ؟ : !` → no space before, one space after
- `« (` `[` → one space before, no space after
- `» )` `]` → no space before, one space after
- `٫ ٬ ٪` → no spaces at all (see §3.4 for the ٪ side question)

**[SOURCE]** fa-wiki forbids the `/` slash as decimal or thousands separator: «برای این منظور **نباید** از نویسهٔ / (به اصطلاح رایانه‌ای: اسلش) استفاده کرد، بلکه باید از نویسهٔ ممیز فارسی (٫) استفاده کرد» — https://fa.wikipedia.org/wiki/ویکی‌پدیا:نشانه‌های_نگارشی. **[PRACTICE]** But the slash-as-decimal-point (`۲/۵` for 2.5) is extremely common in everyday Iranian writing — which is exactly why CLDR's Persian guidance has to say it out loud: *"For decimal separator, use U+066B ٫ (and not /)"*. **This is a genuine authority-vs-practice split.**

### 2.5 Mark-by-mark usage (fa-wiki MoS, the most fully specified public Persian style guide)

Source: https://fa.wikipedia.org/wiki/ویکی‌پدیا:نشانه‌های_نگارشی — itself based on حسن ذوالفقاری, *آموزش ویراستاری و درست‌نویسی*.
- **نقطه `.`** — end of declarative/imperative sentences; after abbreviations («ق.م.»); after *indirect* questions («پرسید که … می‌انجامد.») — using `؟` there is a listed common error; in numbered/alphabetic lists («الف. …»).
- **ویرگول `،`** — after منادا; between clauses of a compound sentence; list separation; around parentheticals. Explicitly a mark of *short pause*, and its overuse is called out as widespread.
- **نقطه‌ویرگول `؛`** — list-item separation; before an explanatory clause when the preceding clause is already complete; instead of a comma when the clause already contains commas.
- **علامت سؤال `؟`** — after direct/rhetorical questions; in parentheses `(؟)` for uncertainty or irony. Multiple consecutive `؟؟؟` explicitly unsuitable for formal text.
- **گیومه `«»`** — direct quotation; first occurrence of an unfamiliar technical term; emphasis on the words themselves; article titles in citations. Note: fa-wiki says if the term is *linked*, the guillemets are unnecessary.
- **پرانتز `()`** — parenthetical additions; glosses/equivalents; birth–death dates. Nested parens discouraged; use `[]` for the inner pair.

---

## 3. Numeral policy — the loudest live disagreement

### 3.1 What CLDR sets as the fa-IR default

**[DATA]** `common/main/fa.xml`:
```xml
<numbers>
  <defaultNumberingSystem>arabext</defaultNumberingSystem>
  <otherNumberingSystems><native>arabext</native></otherNumberingSystems>
```
`arabext` = **Extended Arabic-Indic, U+06F0–U+06F9 (۰۱۲۳۴۵۶۷۸۹)**. So `Intl.NumberFormat('fa')`, ICU, Android, iOS, and anything CLDR-backed will render **Persian digits by default** for `fa`.

**[DATA]** Symbols for `arabext` (root.xml, inherited by fa; fa overrides marked ✎):
| Symbol | Value | Code point |
|---|---|---|
| decimal | `٫` | U+066B |
| group | `٬` | U+066C |
| list | `؛` | U+061B |
| percentSign | `٪` | U+066A |
| plusSign ✎ | `‎+` | U+200E U+002B |
| minusSign ✎ | `‎−` | U+200E **U+2212** (minus sign, not hyphen) |
| perMille | `؉` | U+0609 |
| exponential | `×۱۰^` | — |
| timeSeparator ✎ | `:` | U+003A |
| nan ✎ | `ناعدد` | — |

Note the **U+200E LRM prefix** on the sign characters and the use of **U+2212 MINUS SIGN** rather than hyphen-minus. **[INFERENCE]** A design system that hand-rolls `"-" + number` for negative values in fa will produce a bidi-unstable string; use `Intl.NumberFormat`.

**[DATA]** fa's number exemplar set deliberately contains **both** families: `[‎ , ٫ ٬ . % ٪ ‰ ؉ + − 0۰ 1۱ 2۲ 3۳ 4۴ 5۵ 6۶ 7۷ 8۸ 9۹]` — CLDR expects Latin digits to occur in Persian text.

### 3.2 What the standards bodies prescribe

**[SOURCE]** CLDR's Persian style guide, "Characters to use" (this is CLDR's own normative guidance to its translators, and it cites ISIRI 6219):
> *"It may appear that there is a choice among which characters to use for certain Persian letters, but the Unicode Standard and the Iranian National Standard **ISIRI 6219**, are strict about what to use…*
> *For digits, use **U+06F0..U+06F9 ۰۱۲۳۴۵۶۷۸۹** (and not U+0660..U+0669)*
> *For decimal separator, use **U+066B ٫** (and not /)*
> *For thousands separator, use **U+066C ٬** (and not any of `,`، `` ` `` `’` etc.)"*
> https://cldr.unicode.org/translation/language-specific/persian

**[SOURCE]** W3C alreq §6.1.2 assigns U+06F0–U+06F9 to *"Iran and Afghanistan"*, U+0660–U+0669 to *"Eastern Arabic-speaking countries"*, and U+0030–U+0039 to *"Western Arabic-speaking countries"*. §6.1.3: *"Arabic-Indic numerals use two specific separators: '٫' (U+066B) … '٬' (U+066C). Example: ١٬٢٣٤٫٥"* https://www.w3.org/TR/alreq/

**[SOURCE]** Unicode Standard ch. 9 (Middle Eastern Scripts) distinguishes *"those used in Afghanistan, India, Iran, and Pakistan (here called Eastern Arabic-Indic)"* from the western Arabic set. https://www.unicode.org/versions/latest/core-spec/chapter-9/

### 3.3 Where each is conventional, by context

This is the part where **no authority speaks with one voice**. Positions:

**Position 1 — "Persian digits everywhere except inside Latin context."**
**[SOURCE]** Behdad Esfahbod, IUC-25 (2004), the most explicit primary statement I found:
> *"In Iran people always read and write Persian digits. This means that **page numbers, section numbers, monetary values, font sizes, spreadsheet cells, are all supposed to be in Persian digits.** … In Iran people read and write **western digits in a Latin context.** This is unlike most of Arabic countries where they write numbers with Arabic-Indic digits even in the middle of an English text. So **turning all western digits into Persian digits automatically is not an option.** … **Arabic-Indic digits should not be used in Persian text.**"*

This gives a clean, implementable rule: **script of the digit follows the script of the surrounding run.**

**Position 2 — "Persian digits in prose; words for small numbers; digits mandatory in formulas."**
**[SOURCE]** Persian Wikipedia MoS, *شیوه‌نامه/تاریخ‌ها و اعداد*:
> «ارقام به شکل فارسی نوشته می‌شوند: ۱۲۳۴۵۶۷۸۹۰ — نه به شکل عربی: ١٢٣٤٥٦٧٨٩٠ یا لاتین: 1234567890.»
> «ارقام میان صفر تا نه به شکل **حروف** نوشته می‌شوند.» / «ارقامی بزرگ‌تر از نه را می‌توان با حرف یا رقم نوشت.»
> «ارقام در فرمول‌های ریاضی **هیچ‌گاه** حروفی نوشته نمی‌شوند.»
> «هنگامی که قصد مقایسه بین دو مقدار را داریم هر دو باید یا به شکل حروفی یا رقمی نوشته شوند.» (دو گربه و سه سگ / ۸۶ مرد و ۱۰۳ زن)
> «اسم‌های خاص هیچ‌گاه عوض نمی‌شوند: خیابان ۱۷ شهریور، هفت سامورایی، حس ششم»
> «برای نوشتن اعداد ترتیبی از **حروف** استفاده می‌شود؛ استفاده از ترکیب عدد و «مین» یا «ام» اشتباه است: ✗ ۵ام؛ ✓ پنجم»
> https://fa.wikipedia.org/wiki/ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها_و_اعداد

**Position 3 — publisher style guides: split by density.**
**[SOURCE]** کتاب جمکران editorial manual: Persian digits for math/scientific text, decimals, coordinates, page/volume references, dates (۱۳۸۷); Persian **words** for prose with few numbers, ordinals (نوزدهمین), sentence-initial numbers, and street/building numbers (خ سوم). https://ketabejamkaran.ir/editorialmanual/

**Position 4 — de facto software practice: Latin digits.**
**[PRACTICE / SOURCE]** Behdad again, documenting *why*:
> *"Microsoft software does not interpret Persian digits characters as numerical data yet. As a consequence they have put western digits on their Persian keyboard (called 'Farsi' in their context). And finally **you see Persian sites with western digits typed in everywhere.**"*

This is now 20+ years old and the tooling has improved, but the habit persists. **[INFERENCE]** The practical consequence for a design system is that Persian-language user input will arrive in *both* digit families and must be normalized before numeric parsing.

### 3.4 Specific contexts the brief asked about

| Context | Recommendation | Basis |
|---|---|---|
| **Code, identifiers, CLI, config** | **Latin 0–9, always** | **[INFERENCE]**, but strongly grounded: these are Latin-script runs; Position 1's rule applies directly, and Persian digits are not valid in most grammars. |
| **Version numbers** (`v5.2.1`) | **Latin** | **[INFERENCE]** — same reasoning; version strings are identifiers, not quantities. Also they contain `.` which in a Persian-digit run would be ambiguous against `٫`. |
| **Technical prose** | **Persian digits**, per CLDR/ISIRI | **[SOURCE]** CLDR Persian guide; Position 1 |
| **UI numerics — counts, badges, table cells, pagination** | **Persian digits by default** (this is what CLDR/ICU/`Intl` will produce for `fa`) | **[DATA]** `defaultNumberingSystem=arabext` |
| **Form *inputs*** | **Accept both; normalize on parse** | **[INFERENCE]** — `<input type=number>` and most validators only accept ASCII digits. A fa-IR design system must map U+06F0–U+06F9 → U+0030–U+0039 before validation, and must not reject Latin input. |
| **Dates** | **Persian digits** | **[SOURCE]** fa-wiki MoS + CLDR |
| **Phone numbers** | **Contested.** **[PRACTICE]** Iranian phone numbers appear in both families; Latin dominates in copy-paste/dial contexts because dialers parse ASCII. **[INFERENCE]** Treat like form input: display per locale, store ASCII. No authority I found rules on this. |
| **Percent sign side** | **[DATA]** CLDR fa inherits root's `percentFormats` pattern `#,##0%` — the percent sign is a **suffix in logical order**, which in an RTL run renders with `٪` to the **left** of the digits. **[SOURCE]** W3C alreq §6.1.4: *"The percent sign is placed on the left after the number … and without a space."* **[SOURCE]** fa-wiki MoS agrees: «باید از نشانهٔ درصد فارسی «٪» و نه «%» **در سمت چپ عدد** استفاده شود». **[SOURCE]** But fa-wiki's *punctuation* page says the opposite about consensus: «در منابع مختلف علامت درصد هم در سمت چپ عدد مانند ۲۴٪ و هم در سمت راست عدد مانند ٪۲۴ به کار رفته است؛ لذا … **اجماعی در خصوص برتری یکی از این دو روش نسبت به دیگری وجود ندارد**.» — fa-wiki contradicts itself. | |
| **Percent in prose** | **[SOURCE]** Both fa-wiki and کتاب جمکران: use the **word** «درصد» in non-technical prose («حدود ۸۰ درصد»); reserve `٪` for scientific/technical text, tables, and infoboxes. | |

### 3.5 Summary of the numeral disagreement

| Question | CLDR/ISIRI/Unicode | fa-wiki MoS | Publisher guides | Software reality |
|---|---|---|---|---|
| Digit family in Persian text | U+06F0–U+06F9 | U+06F0–U+06F9 (explicitly rejects both ١٢٣ and 123) | Persian digits | mixed; Latin very common |
| Small numbers (0–9) | *(silent)* | spell out in words | spell out in prose | digits |
| Decimal separator | `٫` U+066B, **not `/`** | `٫`, **not `/` `.` `,`** | `٫` | `/` widespread **[PRACTICE]** |
| Thousands separator | `٬` U+066C | `٬`, not `.` or `,` | `٬` | `,` common **[PRACTICE]** |
| Percent | `٪`, suffix | `٪` not `%`, on the left; word «درصد» in prose | «۲٪ یا ۲ درصد» | `%` common |
| Arabic-Indic ٠١٢٣ | **forbidden** in Persian | **forbidden** | — | occasional error |

---

## 4. Ezāfe marking, and the normalization hazards

### 4.1 What the Academy prescribes

**[SOURCE]** *دستور خطّ فارسی (ویراست جدید)*, «کسرۀ اضافه», p. 47, verbatim:

> «نشانهٔ کسرهٔ اضافه **در خط آورده نمی‌شود**، مگر برای رفع ابهام و پرهیز از بدخوانی:
>  حکومتِ نظامی / حکومت‌نظامی
>
> — برای کلمه‌های مختوم به «ها»ی غیرملفوظ، در حالت اضافه، **از علامت «ۀ / ـۀ» استفاده می‌شود**:
>  برنامۀ روزانه، بندۀ خدا، به‌مثابۀ، خانۀ او، رانندۀ ماهر
>
> — کلمه‌های مختوم به «ها»ی ملفوظ، در حالت اضافه، **کسره می‌گیرند، امّا گذاشتن این کسره در نگارش الزامی نیست**:
>  بازدهِ تولید، بزهِ بزرگ، فرماندهِ سپاه، گرهِ کور، متوجهِ موضوع
>
> — کلمه‌های مختوم به همزه، در حالت اضافه، کسره می‌گیرند، امّا گذاشتن این کسره **الزامی نیست**: تلألؤِ افکار، لؤلؤِ درخشان، منشأِ حیات
>
> — «ی» در کلمه‌های عربی مختوم به الف مقصوره «ٰی» … به «الف» تبدیل می‌شود: عیسای مسیح، کبرای قیاس، موسای کلیم، هوای نفس»

**Crucial footnote 1 on p. 47 — this is the encoding question, answered by the Academy itself:**

> «این علامت **کوتاه‌شدهٔ «ی» (یای کوتاه)** است و **نباید آن را با نشانهٔ همزه اشتباه گرفت**.»
> *("This sign is a shortened form of «ی» (short yeh) and must not be confused with the hamza sign.")*

The 1st edition (p. 28 fn. 1) said the same more tersely: «این علامت کوتاه‌شدهٔ «ی» است.» And in Table 2 of secondary signs, the mark is named **«یای کوتاه روی های غیرملفوظ»** with the example «نامۀ من» — *not* "hamza".

**So the Academy's three-way ruling is:**
1. **Default: write nothing.** The ezāfe kasre is *not* written. کتاب من, not کتابِ من.
2. **Exception 1 (obligatory): word ends in silent ه** → write **ۀ**: خانۀ من، نامۀ او، برنامۀ روزانه.
3. **Exception 2 (optional): to disambiguate** → write the kasre: حکومتِ نظامی vs حکومت‌نظامی; اسبِ سواری vs اسبْ‌سواری.

**[SOURCE]** CLDR agrees and extends it to locale data: *"Always write the ezafe over he, if it's pronounced. For example, use **مقدونیهٔ شمالی** for North Macedonia."* — https://cldr.unicode.org/translation/language-specific/persian

### 4.2 The U+06C0 encoding trap — **the single highest-severity finding in this area**

There are two ways to encode ۀ. They are **not** Unicode-equivalent, and **no normalization form will reconcile them.**

**[DATA]** From `UnicodeData.txt` (UCD latest):
```
06C0;ARABIC LETTER HEH WITH YEH ABOVE;Lo;0;AL;06D5 0654;…
06D5;ARABIC LETTER AE;Lo;0;AL;;…
0647;ARABIC LETTER HEH;Lo;0;AL;;…
0654;ARABIC HAMZA ABOVE;Mn;230;NSM;;…
```
U+06C0's canonical decomposition is **`06D5 0654`** — that is **ARABIC LETTER AE**, a Kurdish/Uyghur letter, **not** Persian heh.

**[DATA]** I verified all four normalization forms in Python:
```
NFC   U+06C0 → [U+06C0]           | <0647,0654> → [U+0647, U+0654]
NFD   U+06C0 → [U+06D5, U+0654]   | <0647,0654> → [U+0647, U+0654]
NFKC  U+06C0 → [U+06C0]           | <0647,0654> → [U+0647, U+0654]
NFKD  U+06C0 → [U+06D5, U+0654]   | <0647,0654> → [U+0647, U+0654]
```
**Equal under any normalization form: NO.**

Three independent authorities say to use the sequence and not the precomposed character:

- **[SOURCE] Unicode Standard, ch. 9:** *"When the hamza occurs over a heh, **do not represent this with U+06C0 ۀ ARABIC LETTER HEH WITH YEH ABOVE**, because U+06C0 decomposes to a heh form not used in Persian or Urdu."* … *"use `<U+0647 ه ARABIC LETTER HEH, U+0654 ◌ٔ ARABIC HAMZA ABOVE>` for Persian."* https://www.unicode.org/versions/latest/core-spec/chapter-9/
- **[SOURCE] CLDR Persian guide:** *"For **ezafe over he**, use `<U+0647, U+0654>` هٔ (**and not U+06C0**)."*
- **[SOURCE] Behdad Esfahbod, IUC-25:** *"Unfortunately, this was first encoded as U+06C0 Heh with Yeh Above. Unfortunately, the Heh in this sequence was defined as a certain Arabic variant of the Heh which is not used in Persian. In appearance, this was not a problem, however, **when search engines break down the sequence, they will not be able to process this sequence correctly for Persian.** Therefore, the U+06C0 was deprecated in the Persian subset … It should be mentioned that even in WinXP, the U+06C0 has been mapped on the Persian keyboard (called 'Farsi' there) and so **the user unknowingly propagates this error.**"* — also listed under "Never used characters" in the same paper.

**[DATA] CLDR practices what it preaches:** in `common/main/fa.xml` there are **0** occurrences of U+06C0 and **114** occurrences of the `<U+0647, U+0654>` sequence (e.g. the Gregorian month names in ezāfe form: `ژانویهٔ` = U+0698 U+0627 U+0646 U+0648 U+06CC **U+0647 U+0654**).

**Design-system consequence [INFERENCE]:** `خانهٔ` typed on a legacy Windows Persian keyboard (U+06C0) and `خانهٔ` typed on an ISIRI keyboard (U+0647 U+0654) look identical on screen, are byte-different, and are **not** made equal by `String.prototype.normalize()` in any form. Search, sort, dedupe, i18n key lookup, and CSS `:lang` selectors will all silently mismatch. **This requires an explicit custom fold: U+06C0 → U+0647 U+0654.**

### 4.3 The ی/ي and ک/ك hazard — same class of problem, larger blast radius

**[SOURCE]** CLDR Persian guide, normative:
> *"For **kaaf**, use **U+06A9 ک** (and not U+0643 ك)."*
> *"For **ye**, use **U+06CC ی** (and not U+0649 ي or U+064A ى)."*
> *"…the Unicode Standard and the Iranian National Standard **ISIRI 6219** are strict about what to use for different letters or marks"*

*(Note: CLDR's page swaps the glyph labels for U+0649/U+064A — U+0649 is ALEF MAKSURA `ى` and U+064A is ARABIC YEH `ي`. The intent is unambiguous: neither is correct for Persian.)*

**[SOURCE]** Unicode Standard ch. 9: *"U+06CC ی ARABIC LETTER FARSI YEH is used in Persian, Urdu, Pashto, Azerbaijani, Kurdish… Compared to the two Arabic language yeh forms, FARSI YEH is **exactly like U+0649 ARABIC LETTER ALEF MAKSURA in final and isolated forms, but exactly like U+064A ARABIC LETTER YEH in initial and medial forms.**"* — i.e. Farsi Yeh is *contextually* identical to two different Arabic letters, which is exactly why substitution goes unnoticed.

**[SOURCE]** Behdad, IUC-25, on how the corruption spread:
> *"It was impossible to show the Persian letter Yeh … with fonts shipped by early Microsoft Windows products. … Moreover, the Persian Yeh is also **mapped incorrectly on the keyboard layout in Microsoft Windows products.** To get around this problem, Persian webmasters … resorted to use of the Arabic Yeh … **you see more than a half of Persian web pages use Arabic Yeh** … Others mixed both Arabic and Persian Yeh to achieve a perfect visual presentation, while **making it impossible to search the content using any search engine.**"*
> On kaf: *"Many font designers have ignored the difference in the past. … The Courier New font even mixes the appearance of the two, which adds to the confusion. **Many Persian web sites have text encoded using Arabic Kaf.**"*

**[SOURCE]** fa-wiki confirms the keyboard root cause: the ISIRI-standard layout differs from the Microsoft legacy layout in that «**«ی» و «ک» فارسی هستند** (بدون دونقطه در زیر «ی» و بدون همزه روی «ک»)».

**[DATA]** These are *separate letters*, not variants — no canonical decomposition, no equivalence under NFC/NFD/NFKC/NFKD. **[DATA]** CLDR's fa exemplar sets encode this correctly: `ک` and `ی` are in the **main** exemplar set; `ك` and `ىي` sit in the **auxiliary** set (recognised, not native). fa.xml contains 4093 × U+06CC vs 1 × U+064A.

**Required normalization fold for any fa-IR design system [INFERENCE]:**
```
U+064A ي  → U+06CC ی   (Arabic yeh → Farsi yeh)
U+0649 ى  → U+06CC ی   (alef maksura → Farsi yeh)   [except in quoted Arabic]
U+0643 ك  → U+06A9 ک   (Arabic kaf → keheh)
U+06C0 ۀ  → U+0647 U+0654 هٔ  (precomposed → sequence)
U+0660–U+0669 ٠–٩ → U+06F0–U+06F9 ۰–۹   (Arabic-Indic → Persian, display)
U+06F0–U+06F9 ۰–۹ → U+0030–U+0039 0–9   (Persian → ASCII, for parsing)
U+200C → ∅  (search keys only, never storage)
```

**[SOURCE]** Behdad flags the exception: *"these two letters, and the Arabic Kaf and Arabic Yeh letters **are allowed to appear in Persian documents when quoting Arabic text**."* So the fold is a **search/index-key transform, not a content transform.**

### 4.4 The ezāfe's effect on date formatting (directly relevant to date components)

**[SOURCE]** CLDR Persian guide — this is a real, implemented distinction in the fa locale data:
> *"For date formats when a year follows a month … the **ezafe** form of month names should be used. For example, while January 12 would be ‏۱۲ ژانویه, January 2019 would be **ژانویهٔ ۲۰۱۹**. To make this distinction, **stand-alone patterns (LLLL etc) are localized without ezafe, while formatting patterns (MMMM etc) are localized with ezafe.** … 'MMMM d, y' should be translated as 'd MMMM y' …, while 'MMMM d' should be translated as 'd LLLL'."*

**[DATA] Verified in `fa.xml`, gregorian calendar:**
```
format     wide months: ژانویهٔ فوریهٔ مارس آوریل مهٔ ژوئن ژوئیهٔ اوت سپتامبر اکتبر نوامبر دسامبر
stand-alone wide months: ژانویه  فوریه  …  مه  …  ژوئیه  …
```
**[INFERENCE]** A design system that hard-codes one month-name array, or that uses `LLLL` where `MMMM` is required, will produce grammatically wrong Persian dates. Use ICU/`Intl.DateTimeFormat` and respect the L-vs-M distinction.

---

## 5. Dates and calendars

### 5.1 Official status

**[SOURCE]** fa-wiki MoS: «تقویم هجری شمسی، بنا بر **قانون مصوب سه‌شنبه ۱۱ فروردین ۱۳۰۴** هجری شمسی **مجلس پنجم شورای ملی** تقویم رسمی ایران شد. آغاز سال خورشیدی برابر است با نخستین روز بهار.» — https://fa.wikipedia.org/wiki/ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها_و_اعداد
**[SOURCE]** English Wikipedia: *"The present Iranian calendar was legally adopted on 31 March 1925"*; Afghanistan *"legally adopted the official Jalali calendar in 1922"*. https://en.wikipedia.org/wiki/Solar_Hijri_calendar

**So: Solar Hijri (هجری شمسی / خورشیدی) is the sole official calendar of Iran.** Gregorian (میلادی) and Lunar Hijri (هجری قمری) are secondary and used for international/religious dates respectively.

### 5.2 What CLDR sets as the fa-IR default

**[DATA]** `common/supplemental/supplementalData.xml`, `<calendarPreferenceData>`:
```xml
<calendarPreference territories="AF IR" ordering="persian gregorian islamic islamic-civil islamic-tbla"/>
```
**Default calendar for both IR and AF is `persian`** (Solar Hijri), Gregorian second.

**[DATA]** Also for IR: `<firstDay day="sat" territories="… IR …"/>` — **the week starts on Saturday (شنبه)**; `<weekendStart day="fri" territories="… IR …"/>` and `<weekendEnd day="fri" territories="AF IR"/>` — **the weekend is Friday only** (a single-day weekend, unlike almost every other locale).
**[INFERENCE]** Any calendar/date-picker component that hard-codes a Sunday or Monday week start, or a two-day weekend, will be wrong for fa-IR.

**[DATA]** `common/main/fa.xml`, `calendar type="persian"`:

| | pattern | rendered example |
|---|---|---|
| full | `y MMMM d, EEEE` | ⚠ see anomaly below |
| long | `d MMMM y` | ۹ مرداد ۱۴۰۴ |
| medium | `d MMM y` | ۹ مرداد ۱۴۰۴ |
| short | `y/M/d` | ۱۴۰۴/۵/۹ |

**⚠ [DATA] CLDR data anomaly worth reporting upstream:** the *gregorian* full pattern in fa is `EEEE d MMMM y` (جمعه ۹ مرداد ۱۴۰۴ — correct), but the *persian* full pattern is `y MMMM d, EEEE`, which is a differently-ordered pattern. Verified by reading the raw bytes — no bidi controls involved, the two calendars genuinely carry different full patterns. **[INFERENCE]** A design system rendering full Solar Hijri dates via CLDR will get an unexpected ordering; test it.

**[DATA]** Era names in fa:
| calendar | eraNames | eraAbbr |
|---|---|---|
| persian | هجری شمسی | ه‍.ش. |
| islamic | هجری قمری | ه‍.ق. |
| gregorian | میلادی / قبل از میلاد | م. / ق.م. |

### 5.3 Month names — Iran vs. Afghanistan (they are completely different)

**[DATA]** `common/main/fa.xml` (Iran) vs `common/main/fa_AF.xml` (Afghanistan), `calendar type="persian"`, `monthWidth type="wide"`:

| # | Iran (fa) | Afghanistan (fa_AF) | days | season |
|---|---|---|---|---|
| 1 | فروردین | حَمَل | 31 | بهار |
| 2 | اردیبهشت | ثور | 31 | |
| 3 | خرداد | جَوزا | 31 | |
| 4 | تیر | سرطان | 31 | تابستان |
| 5 | مرداد | اسد | 31 | |
| 6 | شهریور | سُنبُله | 31 | |
| 7 | مهر | میزان | 30 | پاییز |
| 8 | آبان | عقرب | 30 | |
| 9 | آذر | قوس | 30 | |
| 10 | دی | جَدْی | 30 | زمستان |
| 11 | بهمن | دلو | 30 | |
| 12 | اسفند | حوت | 29–30 | |

Iran uses Zoroastrian/Old-Persian names; Afghanistan uses the Arabic zodiac (بروج فلکی) names. **[SOURCE]** fa-wiki MoS states the rule for editors: «**نکته**: در مقاله‌های مرتبط با افغانستان از اسامی بروج فلکی استفاده می‌شود.»

*(Minor **[DATA]** note: CLDR `fa_AF.xml` stores month 6 as `سنبلهٔ` — with a trailing ezāfe — which looks like a data error given the other eleven have no ezāfe. Worth verifying against the CLDR survey tool before relying on it.)*

**[SOURCE]** Gregorian month names also differ between Iran and Afghanistan (fa-wiki MoS):
- Iran (French-derived): ژانویه، فوریه، مارس، آوریل، مه، ژوئن، ژوئیه، اوت، سپتامبر، اکتبر، نوامبر، دسامبر
- Afghanistan (English-derived): جنوری، فبروری، مارچ، اپریل، مِی، جون، جولای، اگست، سِپتامبِر، اکتوبِر، نوامبِر، دسامبِر

**[SOURCE]** Lunar Hijri months, standardised by fa-wiki: محرم، صفر، ربیع‌الاول، ربیع‌الثانی، جمادی‌الاول، جمادی‌الثانی، رجب، شعبان، رمضان، شوال، ذیقعده، ذیحجه

**[SOURCE]** fa-wiki also standardises two spellings against common variants: «اردیبهشت (~~اردی‌بهشت~~)»، «مرداد (~~امرداد~~)».

### 5.4 Written format and ordering — **another live disagreement**

**Position A — CLDR/machine short format: `y/M/d` (big-endian, slash-separated).**
**[DATA]** `<pattern>y/M/d</pattern>`. **[PRACTICE]** This matches overwhelming real-world Iranian usage: `۱۴۰۴/۰۵/۰۹`, used on forms, IDs, receipts, and virtually every Iranian website's date field.

**Position B — fa-wiki MoS: day-in-digits, month-in-words, 4-digit year, no separators.**
**[SOURCE]** *ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها و اعداد*:
> «برای نوشتن تاریخ به ترتیب **روز را با عدد، ماه را با حروف و سال را با عدد و به شکل چهاررقمی** وارد کنید.»
>
> | ✗ نادرست | ✓ درست | توضیح |
> |---|---|---|
> | هفدهم شهریور | ۱۷ شهریور | اعداد تاریخ را ترتیبی ننویسید |
> | بیست‌ودوم خرداد ۱۳۸۸ | ۲۲ خرداد ۱۳۸۸ | روز را به حروف ننویسید |
> | ۲۹ اسفند ۹۶ | ۲۹ اسفند ۱۳۹۶ | از نوشتن سال به شکل مخفف پرهیز کنید |
> | **۱۳۹۵/۹/۲۹** | **۲۹ آذر ۱۳۹۵** | **از اسلش برای جدا کردن اجزای تاریخ استفاده نکنید** |
> | ۲۳-۰۱-۲۰۱۱ | ۲۳ ژانویه ۲۰۱۱ | از خط فاصله برای جداسازی استفاده نکنید |
> | ۱۳ فروردین، ۱۳۹۷ | ۱۳ فروردین ۱۳۹۷ | بین اجزای تاریخ از ویرگول استفاده نکنید |

**fa-wiki explicitly forbids exactly the format CLDR ships as `short` and that Iranians actually use.** This is a real conflict a design system has to decide on. **[INFERENCE]** The reconciliation is that they address different registers: fa-wiki legislates encyclopedic *prose*; CLDR's `short` is the *compact/tabular* form. A design system needs both and should map them to `dateStyle: 'long'` and `dateStyle: 'short'` respectively.

**[SOURCE]** کتاب جمکران agrees with fa-wiki for prose: «۷ تیر ۱۳۸۷» یا «هفتم تیر ۱۳۸۷».

**Other date rules [SOURCE]** (fa-wiki MoS):
- Ranges: separate with «تا» in prose («۵ تا ۷ شهریور ۱۳۴۷»); numeric ranges written **left-to-right** with an EN dash and the *larger* number on the right: `۴۴–۱۳۴۳`.
- Times: colon-separated, `۱۳:۳۸:۰۹` or `۱:۳۸:۰۹ بعد از ظهر`; 24-hour times zero-padded, 12-hour times not; `۰۰:۱۰` not `۲۴:۱۰`.
- Decades in digits («دههٔ ۱۹۸۰»); centuries in words («سدهٔ هفتم هجری قمری»).
- One calendar per article wherever possible; dual dates separated by `/` («۱۳۵۷ ه‍. ش/۱۹۸۸ م.»).

### 5.5 What major software products do

| Platform | Behaviour | Source |
|---|---|---|
| **Anything CLDR/ICU-backed** (Android, iOS, macOS, Java, .NET Core, JS `Intl`) | `fa` → Persian calendar + `arabext` digits by default, Saturday week start, Friday-only weekend | **[DATA]** CLDR `supplementalData.xml`, `fa.xml` |
| **Windows** | Persian (Solar Hijri) calendar available as an *alternate* calendar for the fa-IR locale; not the shell default in all versions; separate Store apps exist to add it. Legacy "Persian" keyboard is non-ISIRI. | **[SOURCE]** MS Q&A "How can I add persian calendar (Hijri Shamsi) in Windows 8.1?"; **[SOURCE]** zwnj.behnam.es on the keyboard |
| **Iranian web/apps** | Solar Hijri with Persian digits and `y/M/d` slashes is near-universal; a large ecosystem of JS/PHP Jalali libraries exists because platform support was historically weak | **[PRACTICE]** |
| **ISO 8601** | **[SOURCE]** Used in Iran for machine-readable/international exchange, applied to **Gregorian** dates (`YYYY-MM-DD`). ISO 8601 has no Solar Hijri profile. | **[INFERENCE]** APIs should exchange ISO-8601 Gregorian and convert at the presentation layer. |

---

## 6. Consolidated disagreement register

| # | Question | Position 1 | Position 2 | Position 3 | Status |
|---|---|---|---|---|---|
| D1 | Is ZWNJ mandatory? | **Academy ۱۴۰۱:** mandatory in enumerated cases | **Academy ۱۳۸۱/۱۳۹۴:** «اختیاری» | fa-wiki: mandatory in most contexts | **Resolved by recency** — ۱۴۰۱ supersedes. But most secondary literature still cites the old ruling. |
| D2 | Plural `ها` | **Academy:** both `کتابها` and `کتاب‌ها` correct; separate *recommended* for text processing | **fa-wiki:** must never take a full space; ZWNJ optional | **[PRACTICE]:** `کتاب‌ها` dominant | **Open**, low stakes |
| D3 | اضافی compounds (`سیب زمینی` / `سیب‌زمینی`) | **Academy:** full space | **fa-wiki:** ZWNJ | — | **Open, unresolved** — affects a large word class |
| D4 | Percent-sign side | **CLDR pattern `#,##0%`** + **alreq §6.1.4** + **fa-wiki MoS**: suffix (left of digits in RTL) | **fa-wiki punctuation page:** explicitly «اجماعی … وجود ندارد» | — | **Open** — fa-wiki contradicts itself |
| D5 | Decimal separator | **CLDR/ISIRI/fa-wiki:** `٫` U+066B, `/` explicitly forbidden | **[PRACTICE]:** `/` (`۲/۵`) widespread in Iran | — | **Authority vs practice** |
| D6 | Digit family in UI | **CLDR/ISIRI/fa-wiki:** Persian ۰–۹ mandatory | **[PRACTICE]:** Latin 0–9 very common, driven by keyboard/tooling defaults | Publishers: Persian digits, but *words* for 0–9 in prose | **Live and loud** |
| D7 | Numbers 0–9 in prose | **fa-wiki + publishers:** spell out («دو گربه و سه سگ») | CLDR/Unicode: silent | — | **Only style guides speak** |
| D8 | Date format | **CLDR short `y/M/d`** + **[PRACTICE]** `۱۴۰۴/۰۵/۰۹` | **fa-wiki:** slashes **forbidden**; use `۲۹ آذر ۱۳۹۵` | Publishers: agree with fa-wiki for prose | **Open** — register-dependent; support both |
| D9 | Ezāfe encoding | **Unicode ch.9 + CLDR + Behdad + ISIRI 6219:** `<U+0647, U+0654>` | Legacy Windows Persian keyboard emits **U+06C0** | — | **Technically settled; corpus is contaminated** |
| D10 | ی / ک encoding | **Unicode + CLDR + ISIRI 6219:** U+06CC, U+06A9 | Legacy MS keyboard + >50% of older Persian web: U+064A, U+0643 | — | **Technically settled; corpus is contaminated** |
| D11 | Punctuation authority | **Academy:** explicitly out of scope | 18 competing شیوه‌نامه‌ها with documented mutual contradictions | CLDR fixes only the *character set*, not usage | **Structurally unresolvable** — pick one style guide and document the choice |

---

## 7. Direct implications for a PatternFly fa-IR adaptation

**[INFERENCE]** — everything in this section is my synthesis, not a quoted ruling.

1. **Never strip U+200C.** Add it to any allow-list of "safe invisible characters". Audit every sanitizer, slug generator, trim/normalize call, CSV export, and PDF pipeline. (The Academy's own PDF fails this test.)
2. **Normalize for comparison, not for storage.** Build a `persianFoldKey()` implementing the fold in §4.3 and use it for search, filter, autocomplete, sort keys, and i18n message-id lookup only.
3. **`String.normalize()` is not enough.** U+06C0 vs `<U+0647,U+0654>`, ی vs ي, ک vs ك are *all* invisible to NFC/NFD/NFKC/NFKD. This must be a hand-written table.
4. **Never hand-build number or date strings.** Use `Intl.NumberFormat('fa')` / `Intl.DateTimeFormat('fa-IR-u-ca-persian')`. Hand-concatenation loses the LRM-prefixed sign characters, the U+2212 minus, and the L-vs-M ezāfe month distinction.
5. **Form inputs must accept both digit families** and normalize U+06F0–U+06F9 → ASCII before validation/parsing. `<input type="number">` will reject Persian digits outright.
6. **Date components must default to Solar Hijri, Saturday week start, single-day (Friday) weekend** for fa-IR — and must not assume fa-AF shares Iran's month names.
7. **Keep code, identifiers, and version numbers in Latin digits** even inside Persian UI copy; wrap them in bidi isolates (`<bdi>` / CSS `unicode-bidi: isolate` / U+2066…U+2069) per W3C guidance on `RLI`/`LRI`/`PDI`. https://www.w3.org/International/questions/qa-bidi-unicode-controls
8. **Do not manually mirror `« »` `( )` `[ ]` for RTL.** Store logical order; the bidi algorithm mirrors. Manual swapping double-flips.
9. **ZWNJ prevents line breaks** (`Line_Break=CM`) — this is a *feature*: it keeps compounds like `می‌رود` and `بزرگ‌تر` intact. Do not "improve" wrapping by substituting spaces.
10. **Pick a punctuation style guide explicitly** (fa-wiki's is the most complete and freely licensed) and document the choice, since no authority exists.
11. **Take a position on D3, D4, D6, D8 and write it down.** These four cannot be resolved by appeal to authority; the design system must choose and be internally consistent.

---

## Appendix: sources fetched

**Primary — Academy of Persian Language and Literature**
1. *دستور خطّ فارسی (ویراست جدید)*, ۱۴۰۱, 88 pp. — https://apll.ir/wp-content/uploads/2023/07/Dastour-e-Khat-17.04.1402.pdf
2. *دستور خطّ فارسی*, چاپ سیزدهم ۱۳۹۴, 58 pp. — https://apll.ir/wp-content/uploads/2018/10/D-1394.pdf · mirror https://archive.org/details/https__apll.ir_wp-content_uploads_2018_10_d-1394.pdf
3. Announcement of the new edition — https://apll.ir/1402/02/12/ویراست-جدید-دستورخطّ-فارسی-منتشر-شد/
4. *فرهنگ املایی خطّ فارسی* (companion volume) — https://apll.ir/wp-content/uploads/2018/10/F-E-1394.pdf *(legacy non-Unicode PDF encoding; not machine-extractable)*
5. Archive.org record — https://archive.org/details/dastur-e.khat

**Primary — Unicode / CLDR**
6. Unicode Standard ch. 9, Middle Eastern Scripts — https://www.unicode.org/versions/latest/core-spec/chapter-9/
7. UCD `UnicodeData.txt` — https://www.unicode.org/Public/UCD/latest/ucd/UnicodeData.txt
8. UCD `BidiMirroring.txt` — https://www.unicode.org/Public/UCD/latest/ucd/BidiMirroring.txt
9. UCD `LineBreak.txt` — https://www.unicode.org/Public/UCD/latest/ucd/LineBreak.txt
10. UCD `auxiliary/WordBreakProperty.txt` — https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/WordBreakProperty.txt
11. CLDR `common/main/fa.xml` — https://github.com/unicode-org/cldr/blob/main/common/main/fa.xml
12. CLDR `common/main/fa_AF.xml` — https://github.com/unicode-org/cldr/blob/main/common/main/fa_AF.xml
13. CLDR `common/main/root.xml` — https://github.com/unicode-org/cldr/blob/main/common/main/root.xml
14. CLDR `common/supplemental/supplementalData.xml` — https://github.com/unicode-org/cldr/blob/main/common/supplemental/supplementalData.xml
15. CLDR Persian translation guidelines — https://cldr.unicode.org/translation/language-specific/persian

**Primary — W3C**
16. *Arabic & Persian Layout Requirements* (alreq) — https://www.w3.org/TR/alreq/
17. alreq landing page — https://www.w3.org/International/alreq/
18. *Arabic Script Gap Analysis* — https://www.w3.org/TR/alreq-gap/
19. *Unicode bidirectional text controls* — https://www.w3.org/International/questions/qa-bidi-unicode-controls

**Primary — Iranian standards / Persian computing**
20. Behdad Esfahbod, *Persian Computing with Unicode*, 25th Internationalization & Unicode Conference, 2004 — https://behdad.org/doc/persiancomputing-paper.pdf
21. ISIRI 6219:2002 overview (FarsiWeb/Persian Computing archive) — https://persian-computing.org/archives/Sharif-FarsiWeb-Inc/ISIRI_6219.html
22. ISIRI 9147 keyboard — https://persian-computing.org/wiki/Keyboard
23. Behnam Esfahbod, *ZWNJ: Microsoft and the Persian Keyboard Layouts* — http://zwnj.behnam.es/2014/02/microsoft-and-persian-keyboard-layouts.html

**Style guides**
24. ویکی‌پدیا:نیم‌فاصله — https://fa.wikipedia.org/wiki/ویکی‌پدیا:نیم‌فاصله
25. ویکی‌پدیا:نشانه‌های نگارشی — https://fa.wikipedia.org/wiki/ویکی‌پدیا:نشانه‌های_نگارشی
26. ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها و اعداد — https://fa.wikipedia.org/wiki/ویکی‌پدیا:شیوه‌نامه/تاریخ‌ها_و_اعداد
27. ویکی‌پدیا:صفحه‌کلید فارسی — https://fa.wikipedia.org/wiki/ویکی‌پدیا:صفحه‌کلید_فارسی
28. Mozilla `L10n:Teams:fa/Rules` — https://wiki.mozilla.org/L10n:Teams:fa/Rules
29. شیوه‌نامهٔ ویرایش و نگارش، نشر کتاب جمکران — https://ketabejamkaran.ir/editorialmanual/
30. یوتایپ — نشانه‌گذاری — https://utype.ir/docs/نگارش-فارسی/نشانه-گذاری/

**Academic**
31. احمدی دارانی و کرامتیان‌فرد، «نقد و تحلیل شیوه‌نامه‌های نگارش و ویرایش فارسی (مطالعۀ موردی: نشانه‌گذاری)»، دانشگاه اصفهان — https://liar.ui.ac.ir/article_27287.html
32. Solar Hijri calendar — https://en.wikipedia.org/wiki/Solar_Hijri_calendar

*Note on apll.ir: the site serves an incomplete TLS certificate chain. Fetching requires `curl -k` or the archive.org mirror.*
