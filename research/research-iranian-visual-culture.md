# Persian/Iranian visual and product-culture conventions for PatternFly RTL guidance

Research for `content/rast-be-chin/farhang.md` ("Visual culture and local context"), which is
currently an unsourced `status: draft` placeholder. Scope: conventions beyond pure
directional/RTL mirroring that should inform actual design/form guidance. Prior research in
this project already covers generic RTL layout mirroring and typography/calendar specifics
(see `taghvim`/`taypografi` pages referenced by the draft), so this file focuses on what's
*additional* to that, organized under the four areas requested.

## Summary: what's solid vs. what's thin

**Solidly sourced, with primary or near-primary evidence:**
- The national ID (کد ملی) checksum algorithm and 10-digit format — corroborated across
  multiple independent implementations, with a verified worked example.
- Mobile number format (11 digits, `09XX XXX XXXX`) and postal code format (10 digits, 5+5
  split) — corroborated across Wikipedia plus multiple independent Persian secondary sources.
- Sonnat's actual semantic status colors, fetched directly from Sonnat's own developer docs
  (`sonnat.dev/docs/colors`) — a real, documented Iranian product design system, and it maps
  green→success, red→error, orange→warning, blue→info: **no divergence from Western
  convention**, stated plainly rather than manufactured otherwise.
- Real field structure from an actual Iranian government form — a consular civil-registry form
  (Form 420, Islamic Republic of Iran Interests Section, Washington DC) — fetched and read
  directly as a PDF, showing genuine field labels rather than a paraphrase.
- Sonnat's RTL theming API (`direction`, separate `rtlFontFamily`/`ltrFontFamily` tokens),
  documented directly in Sonnat's own source.
- The Toman-vs-Rial display convention as a real product decision (Digikala's seller panel
  reportedly takes rial input but displays toman to customers) and the existence of dedicated
  Jalali-calendar and Sheba/IBAN tooling for the Iranian market — carried forward from an
  earlier pass of this research with its original sourcing notes preserved below.

**Thin, uncertain, or contradictory — flagged explicitly, not smoothed over:**
- The exact field-by-field structure of Divar's, Snapp's, or Digikala's own consumer
  registration/checkout forms could not be confirmed via screenshots or primary documentation.
  What's reported below is triangulated from adjacent evidence (a real-estate *listing* form,
  a company blog post about a map-pin flow, a seller-registration flow) — treat as
  suggestive, not confirmed, and flagged per-claim below.
- Color-symbolism findings are almost entirely general cultural/historical/academic writing
  (flag symbolism, religious association, festival tradition, national iconography), not
  documented product-design decisions. Only the Sonnat data point is a real product-UI source,
  and it shows no divergence.
- Postal code's fine-grained digit-by-digit semantics (which digit means what) vary slightly
  between secondary sources; the 5+5 split is well corroborated, the finer breakdown is not.
  The UPU's official Iran addressing PDF would not extract as readable text, so postal code
  structure rests on secondary-source triangulation, not that primary document.
- Name-field structure (single combined field vs. split first/last) has genuinely mixed
  evidence depending on which real Iranian form is examined — reported as mixed, not resolved.

---

## 1. Name and address forms

### Names

Iranian personal names are structurally `[given name] [optional second given name]
[surname]` — no middle-name convention, and (unlike Arabic naming conventions) no patronymic
chain as part of the *legal* name itself. Surnames are patrilineal; many carry a
`-zadeh`/`-zaden` ("son of") suffix, but that's fixed as part of the family surname, not a
live field. Source: Cultural Atlas — [Iranian Culture: Naming](https://culturalatlas.sbs.com.au/iranian-culture/iranian-culture-naming).

However, **a father's-name field is a real, recurring convention in official/serious Iranian
forms**, even though it's not part of a person's own legal name — it identifies civil-registry
lineage. I confirmed this directly by reading a real Iranian government form: **Form 420**
("Issuance of a birth certificate/identity booklet for a child under 18," Islamic Republic of
Iran Interests Section, Washington DC), fetched and read directly as a PDF
(`https://static.daftar.org/docs/lib/file/Forms/Form420.pdf`, page 4 of 4). The form's actual
field layout for each parent is:

- **"نام و نامخانوادگی:"** (Name and Surname) — one **single combined field**, not split into
  separate given-name/family-name inputs.
- **"کد ملی:"** (National ID)
- **"تاریخ تولد: روز/ماه/سال"** (Date of birth: day/month/year)
- **"شماره شناسنامه:"** (Identity-booklet number)
- **"صادره ازحوزه شماره: ___ در شهر: ___"** (Issued from registry district number ___, in
  city ___)
- **"نام پدر:" / "نام مادر:"** (Father's name / Mother's name) — separate fields, distinct
  from the parent's own name-and-surname field above; these record the *grandparents'* names
  for lineage identification.
- **"مذهب:"** (Religion) and **"شغل:"** (Occupation) — also present as standard fields on this
  form. (Out of scope for the four areas of this ticket, but noted as a real field that exists
  on official Iranian identity paperwork, for completeness.)
- For the child being registered: a single **"نام فرزند:"** (Child's name) field — no separate
  surname entry, since Iranian law requires a child's surname to exactly match the father's
  surname (the form explicitly states this rule elsewhere on the same page: "نام‌خانوادگی
  فرزند در شناسنامه ایرانی، دقیقاً بر اساس نام‌خانوادگی پدر ... درج می‌گردد").
- Gender is a **checkbox**, not a dropdown: "جنسیت: □ دختر □ پسر" (Gender: ☐ Girl ☐ Boy).

**This partially contradicts the "split first/last works fine for Iranian names" assumption in
the current draft page.** On this real government form, each parent's own identity is one
combined "Name and Surname" field, not two separate inputs. I have no confirmed evidence either
way for how consumer apps (Divar/Snapp/Digikala) structure their own account-name fields (see
gap below) — a prior pass of this research found a **search-synthesized, not independently
fetched**, description of Digikala's seller-registration flow using a similarly combined "نام و
نام خانوادگی" field, which would be consistent with this government-form pattern, but that
specific claim should be weighted as lower-confidence than the directly-read PDF. The honest
state of the evidence: **at least one real Iranian form type uses a single combined name field;
nothing found confirms or denies a general rule for consumer product forms.**

Also worth noting from the same document: portions of the form addressed to US-based
recipients explicitly ask for a "First Name (in Latin)" transliteration field alongside the
Persian name — a bilingual-transliteration need for forms that cross between Persian-reading
and non-Persian-reading audiences, which a generic RTL design system wouldn't otherwise
anticipate.

### Addresses

The Iranian address vocabulary (کوچه/alley, پلاک/plaque, واحد/unit, طبقه/floor) is real and
does appear in live products, but the *field structure* built around that vocabulary is not
uniform — the evidence here is genuinely mixed across sources, reported without forcing a
single answer:

- **Government form (primary source, Form 420, page 4).** For a household address inside Iran,
  the form's actual field set is: **استان (Province) / شهر (City) / خیابان (Street) / پلاک
  (Plaque/house number) / کد پستی (Postal code)**. This specific form does **not** have separate
  fields for کوچه (alley), واحد (unit), or طبقه (floor) — despite those being common Persian
  address vocabulary elsewhere. Free text in the "street" field presumably absorbs alley names
  in practice, though the form doesn't state that.
- **Snapp's own blog** (semi-primary — the company's own published documentation, not a third
  party's description) describes its location-pin flow: after a user drops a map pin, the app
  asks for **"مشخصات آدرس تکمیلی"** (supplementary address details), described as containing
  **"جزئیات آدرس جهت مسیریابی راننده (مثل: خیابان، کوچه، پلاک و ...)"** — "address details for
  driver routing (like street, alley, plaque, etc.)." So کوچه and پلاک do show up as real
  vocabulary in a live Iranian consumer product, but inside a largely free-text descriptive
  field, not as separate structured inputs. Source:
  [Snapp blog — saving a selected address](https://snapp.ir/blog/how-to-use-favourite-location/).
- **Divar's real-estate ad-posting form** (a property *listing* form, not a delivery/shipping
  address form — a different form for a different purpose) reportedly has a structured
  **طبقه (floor)** field and a **تعداد کل واحدها (total number of units in the building)**
  field. Source excerpt from search results describing [Divar News's real-estate posting
  guide](https://divar.news/divar-tips-publish-real-estate-ad-app/); a direct re-fetch of that
  page to confirm exact field labels returned a server error, so this specific claim carries
  lower confidence than the directly-fetched sources above.
- Iran's national addressing/postal-lookup system is sometimes described (in secondary,
  non-independently-confirmed sourcing from an earlier pass of this research) as structuring
  an address hierarchically as province → county/city → section → city → a free-text
  "final passage and plaque" field, with separate sub-entries for individual units in
  multi-unit buildings — plausible and consistent with the vocabulary found elsewhere, but not
  independently confirmed against a primary government source in this pass.
- I could not confirm Digikala's or Divar's actual *delivery address* form field-by-field. The
  Digikala help article on "adding a new address" describes the *flow* (search address on map →
  confirm position → "complete address details and recipient info") but not literal field
  labels. Source: [Digikala Mag — adding a new address](https://www.digikala.com/mag/video/%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86-%D8%A2%D8%AF%D8%B1%D8%B3-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%D9%86-%D8%AF%DB%8C%D8%AC%DB%8C%E2%80%8C%DA%A9%D8%A7%D9%84%D8%A7-%D8%A7%D9%86%D8%AF%D8%B1%D9%88/).

**Practical implication reasonably well supported across sources:** Iranian consumer address
UX in map-based products leans on **map-pin selection first, with a free-text supplementary-
details field second**, rather than fully decomposed street/unit/floor/alley fields typed from
scratch — confirmed directly for Snapp, and plausible by strong inference (not confirmed) for
Digikala and Divar's consumer-facing forms. A design system building for the Iranian market
should probably treat "alley, plaque, unit, floor" primarily as **vocabulary that needs to fit
into a free-text/descriptive field or its helper text**, not necessarily as a prescribed set of
discrete structured inputs — the evidence found here does not support one fixed field-by-field
schema, and the government-form and consumer-product patterns actually differ from each other
on this point.

**Open gap, stated directly:** direct, screenshot-verified field-by-field confirmation of
Divar's, Snapp's, or Digikala's actual consumer name/address forms was not achieved in this
research pass. A future pass should walk through live signup/checkout flows in each app and
capture the real field labels, rather than relying on secondary descriptions.

---

## 2. Color connotations relevant to product UI

**Headline finding: no sourced evidence of a meaningful divergence for green (success), red
(error/danger), or yellow/orange (warning) in an actual Iranian product-UI context.** The one
real product design system directly examined here — **Sonnat**, Divar's own published design
system — documents its semantic colors as (fetched directly from
`https://www.sonnat.dev/docs/colors`):

| Semantic role | Color family | Hex (origin shade) |
|---|---|---|
| Success | Green | `#119229` |
| Error | Red | `#EC1313` |
| Warning | Orange | `#EC6A13` |
| Info | Blue | `#116FC0` |
| Primary (brand accent) | Pink | `#EC135F` |

This is the same mapping most Western design systems use. If a large, Persian-first product
(Divar's own self-reported figures put it at 44M+ device installs, 80% Persian-language device
setting — source: [Divar Design — "The Story of a UX Guild"](https://medium.com/design-at-divar/the-story-of-a-ux-guild-amazingly-aligned-and-determined-to-grow-67992ed5946f))
had found green="success" or red="danger" to be confusing or culturally wrong for its
Persian-speaking user base, this is the place it would most likely show up — and it doesn't.
Worth reporting to the project plainly: **for status/semantic colors specifically, the
strongest available product-UI evidence points to "no change needed," not to "here's the
Persian-specific alternative."**

### What the general cultural-symbolism literature says (not product-UI-sourced — flagged as such)

Included because the ticket asked for it, but none of this comes from a documented
product-design decision, and none of it should be read as license to override the Sonnat
finding above without direct user testing:

- **Green** — Iran's most religiously and politically loaded color: associated with the
  Prophet's family/Shia Islam, and reused as the symbol of the 2009 post-election opposition
  movement (the "Green Movement," after presidential candidate Mir-Hossein Mousavi's campaign
  color). Simultaneously it's a normal color of nature/paradise/growth in Persian art and
  architecture — and, per Sonnat above, it's the actual "success" semantic color in a real
  Iranian product. Sources: [Wikipedia — Iranian Green Movement](https://en.wikipedia.org/wiki/Iranian_Green_Movement);
  [Tehran Times — "Shades of doubt and shapes of hope: Colors in Iranian culture"](https://www.tehrantimes.com/news/396974/Shades-of-doubt-and-shapes-of-hope-Colors-in-Iranian-culture);
  Encyclopaedia Iranica, "COLOR" — https://www.iranicaonline.org/articles/color-pers-rang/.
  Read: this is a real political/religious sensitivity for green used as a *branding* or
  explicitly *political-adjacent* color/imagery choice, but there's no evidence it causes
  confusion or offense as a small-scale *status* color in a form — and Sonnat's own choice of
  green-for-success suggests Divar's designers didn't treat that narrower case as a problem.
- **Red** — associated with the blood of martyrs and sacrifice in Iranian political/religious
  symbolism (explicit in the Iranian flag's own official symbolism, and in Ashura/mourning
  commemorative contexts), alongside more universal associations with vitality, passion, and
  life in general Persian poetic/festival tradition. Sources: [Tehran Times](https://www.tehrantimes.com/news/396974/Shades-of-doubt-and-shapes-of-hope-Colors-in-Iranian-culture);
  academia.edu paper "Symbolism of the Red Color in Iranian-Islamic Culture and Art" (secondary,
  not independently verified as peer-reviewed in this pass). No evidence this creates confusion
  with red-as-error/danger in software — if anything the "seriousness/danger" undertone is
  compatible with, not contradictory to, Western usage.
- **Yellow** — the one general-cultural association that most clearly diverges from a Western
  "caution/warning" reading: yellow = **sickness, paleness, jaundice, weakness** — most vividly
  expressed in the Chaharshanbe Suri (fire-jumping) festival chant "زردی من از تو، سرخی تو از
  من" ("my yellowness to you, your redness to me"), where jumping over fire trades away illness
  (yellow) for vitality (red). Sources: multiple independent Persian descriptions of the
  festival chant, e.g. [talab.org](https://www.talab.org/art/%D8%B3%D9%86%D8%AA-%DA%86%D9%87%D8%A7%D8%B1%D8%B4%D9%86%D8%A8%D9%87-%D8%B3%D9%88%D8%B1%DB%8C.html);
  Tehran Times summary noting yellow also separately connotes wisdom/royal power via the
  historical "lion and sun" emblem. This is a real cultural undercurrent, but **no documented
  product-UI case was found** where it caused a problem with yellow-as-warning — and notably,
  Sonnat itself uses **orange**, not yellow, as its warning color, which sidesteps the question
  rather than answering it either way.
- **White** — genuinely dual: purity/peace in general use, but also the color of the burial
  shroud (kafan), traditionally tied to mourning in Persian poetry. Source: [Tehran Times](https://www.tehrantimes.com/news/396974/Shades-of-doubt-and-shapes-of-hope-Colors-in-Iranian-culture).
  Not obviously relevant to typical product-UI use of white (backgrounds/surfaces) — flagged
  for completeness, not as an actionable design concern.
- **Black** — mourning color, tied specifically to Shia mourning traditions (Imam Hussein).
  Source: same Tehran Times piece. Again general cultural symbolism; no product-UI evidence of
  a practical conflict (e.g. with dark mode or standard text color).

**Bottom line for area 2, stated plainly per the ticket's request:** no evidence of a
meaningful, product-UI-relevant divergence for red=danger, green=success, or yellow/orange=
warning was found. Green (and to a lesser extent red) carries real extra cultural/political
weight in Iran that a design system should be aware of for *branding and political-adjacent
imagery contexts* — but not, as far as sourced evidence shows, for *status-color semantics
inside a product interface*. Do not manufacture a stronger claim than this.

---

## 3. National ID, phone number, and postal code formats

### National ID (کد ملی / Codeh Melli)

- **10 digits total.** Structure: first 3 digits = registration-office/province prefix code,
  next 6 digits = individual sequential identifier, 10th digit = check digit. Source:
  cross-referenced across multiple independent open-source validator implementations
  describing the same structure — [Persian Tools docs](https://persian-tools.js.org/functions/verifyIranianNationalId.html),
  [OkhtayMp/iran-national-id on GitHub](https://github.com/OkhtayMp/iran-national-id).
- **Checksum algorithm (modulo-11), verified consistently across independent sources:**
  1. Take the first 9 digits. Multiply digit *i* (1-indexed from the left) by weight
     `(11 − i)` — i.e. digit 1 × 10, digit 2 × 9, … digit 9 × 2.
  2. Sum the 9 products, take the result mod 11 → call this `r`.
  3. If `r < 2`, the expected check digit equals `r`. Otherwise the expected check digit is
     `11 − r`.
  4. Valid iff the expected check digit equals the actual 10th digit.
  - Worked example, directly verified: for `0499370899`, weighted sum =
    `0×10 + 4×9 + 9×8 + 9×7 + 3×6 + 7×5 + 0×4 + 8×3 + 9×2 = 266`; `266 mod 11 = 2`; since
    `r = 2` is not `< 2`, expected check digit = `11 − 2 = 9`, matching the actual 10th digit
    `9` → valid. A second independent worked example (from a prior pass of this research, not
    re-verified here): for a first-9-digit weighted sum of 291, `291 mod 11 = 5`, so expected
    check digit = `11 − 5 = 6`.
  - Additional practical validation rules noted across implementations: reject if all 10 digits
    are identical (e.g. `0000000000`); reject if fewer than 8 digits before zero-padding;
    reject if the 6 middle digits are all zero.
  - Source: [Persian Tools — verifyIranianNationalId](https://persian-tools.js.org/functions/verifyIranianNationalId.html).
- **Display/grouping format:** commonly printed/grouped as `XXX-XXXXXX-X` (3 digits – 6 digits
  – 1 digit), per Wikipedia's description of the Iranian national identity card. Source:
  [Wikipedia — Iranian identity card](https://en.wikipedia.org/wiki/Iranian_identity_card).
  Directly relevant to input-field masking/grouping design: a national-ID input should likely
  support (or at least visually group as) 3+6+1, matching the card's own printed convention,
  rather than an undifferentiated 10-digit run.
- **Design implication:** validation should not just check "10 digits" — a design system field
  for Iranian national ID should implement (or clearly delegate to backend validation
  implementing) the actual mod-11 checksum, since a naive length-only check will accept large
  numbers of invalid IDs.

### Mobile phone numbers

- **11 digits total**, format `09XX XXX XXXX`: leading trunk digit `0`, then `9` (mobile
  indicator), then 9 more digits. Base regex `^09[0-9]{9}$`. Source:
  [sent.dm — Iran phone number format guide](https://www.sent.dm/resources/ir);
  [Wikipedia — Telephone numbers in Iran](https://en.wikipedia.org/wiki/Telephone_numbers_in_Iran).
- **Operator-specific prefix ranges exist** (e.g. MCI/Hamrah-e Avval: `0910–0919`,
  `0990–0994`; MTN Irancell: `0900–0905`, `0930`, `0933–0939`; RighTel: `0920–0923`), and some
  MVNOs use an extended format with one extra digit after the `09` prefix. Source:
  [Wikipedia — Telephone numbers in Iran](https://en.wikipedia.org/wiki/Telephone_numbers_in_Iran).
  **Caveat:** exact operator-prefix ranges shift over time as new blocks are allocated, so a
  design system's input-mask guidance should treat "`09` + 9 digits, 11 digits total" as the
  stable contract, and leave specific operator-prefix validation to backend/carrier-lookup
  logic rather than hard-coding it into a UI component.
- **Landline numbers** are also 11 digits with a trunk prefix: `(0AC) XXXX-XXXX`, where `AC` is
  a 1–2 digit area code (e.g. Tehran = 21). This matters if a "phone number" field is meant to
  accept both mobile and landline — the digit count is the same (11) but the internal grouping
  differs, so a single fixed input mask can't cleanly serve both without some format-detection
  logic. Source: [Wikipedia — Telephone numbers in Iran](https://en.wikipedia.org/wiki/Telephone_numbers_in_Iran).

### Postal code (کد پستی)

- **10 digits, no letters, no separators in the canonical form** (`9999999999`). Source:
  [GeoPostcodes — Iran ZIP code](https://www.geopostcodes.com/country/iran/zip-code/).
- **Structure: first 5 digits + last 5 digits.** Corroborated across Wikipedia's summary of
  Iran's postal-code system and multiple independent Persian secondary sources
  ([melipayamak.com](https://www.melipayamak.com/blog/posts/what-is-my-postal-code-number/)):
  the first 5 digits are commonly described as a "departure/routing code" (destination
  city/region), the second 5 as a "distribution code" (specific location within that area).
  **Caveat:** a finer digit-by-digit breakdown appears in some secondary sources (e.g. digit 1
  = zone, digit 2 = postal region, digits 3–5 = specific area, digit 6 = building-row index,
  digits 7–10 = specific location ID) and, separately, GeoPostcodes describes a
  forwarding/zone/district/part/segment breakdown — these are not necessarily contradictory
  (they could be finer subdivisions of the same 5+5 halves) but could not be reconciled against
  a single authoritative government source in this research: the UPU's official Iran addressing
  PDF (`upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/irnEn.pdf`) did not extract as
  readable text (image-only PDF) in this pass. Treat the 5+5 split as the more broadly
  corroborated top-level fact, and any digit-by-digit semantic breakdown as indicative, not
  confirmed.
- A digit-exclusion rule reported in a prior pass of this research (not re-verified here): `0`
  and `2` are reportedly never used in the first 5 digits, to avoid handwriting confusion with
  `5` and `3`, while both are permitted in the second 5 digits. This should be treated as
  lower-confidence than the core 5+5 structural claim, since it rests on secondary sources not
  independently re-confirmed in this pass.
- **History:** the 10-digit postal code system was planned starting 1991, had a
  data-collection period 1991–1996, and was formally rolled out nationally in 1997; a 1997 law
  also required administrative/commercial/official documents to carry both the national ID
  number and postal code together. This historical detail is lower-confidence than the
  digit-count/structure facts above (sourced via search synthesis rather than a directly
  confirmed article).
- **Design implication:** a 10-digit, ungrouped-by-default numeric field is the safest
  baseline; if grouping/masking is added, 5+5 is the best-supported grouping, not a
  Western-style multi-segment split.

---

## 4. Other Iranian-market UI conventions

### Phone-number-centric identity and OTP-only auth

Iranian mobile SIM registration is legally tied to a person's national ID at the point of
purchase — a SIM card cannot be obtained in Iran without presenting national identity
documents. Source: general secondary corroboration, e.g. summarized via SIM-registration
explainers for travelers/expats (treat as secondary, non-authoritative, but broadly
consistent across sources).

Because a phone number is already tied to a verified real identity at the carrier level, major
Iranian consumer products commonly use **phone-number-only, password-less, OTP-based login**:
the user enters only a mobile number, the app determines whether that number already has an
account, and a one-time SMS code (one Persian source describing an Iranian government e-KYC
flow notes a validity window of roughly 2 minutes) completes authentication — no separate email
field, no user-chosen password, in the typical case. This is a genuinely different pattern from
the "email + password" assumption baked into a lot of Western form guidance. It's
well-corroborated across multiple independent Persian-language descriptions of Digikala,
Divar, and Snapp's sign-in flows, though I could not pin it to one single canonical primary
source published by any of those three companies directly. **Design implication:** an
Iran-targeted design system's "sign-in form" pattern should treat phone-number-as-primary-
identifier + OTP as the default expectation, with email/password as the exception rather than
the norm.

### Persian (Eastern Arabic) numerals vs. Latin digits in numeric input

A real, recurring, well-documented technical/UX issue, not a guess: Persian keyboards natively
produce Eastern Arabic-Persian digit glyphs (۰۱۲۳۴۵۶۷۸۹ — note Persian ۴/۵/۶ differ in shape
from the Arabic-language variants of the same Unicode block), but underlying validation,
storage, and most numeric parsing expect ASCII/Latin digits. In practice this means numeric
fields — phone number, national ID, postal code, price, quantity — routinely need either (a)
explicit digit-transliteration logic converting Persian-typed digits to Latin digits before
validation/storage, or (b) input handling that transparently accepts both. This is common
enough that dedicated open-source utility packages exist specifically for it (e.g. an npm
package offering "Persian, Indic, or English localized number input"). Sources: general
synthesis of Persian developer-community discussion, e.g.
[fontiran.com on converting numbers on websites](https://fontiran.com/blog/%D8%B1%D9%88%D8%B4%D9%87%D8%A7%DB%8C-%D9%81%D8%A7%D8%B1%D8%B3%DB%8C-%DA%A9%D8%B1%D8%AF%D9%86-%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C-%D8%AF%D8%B1-%D9%88/);
Wikipedia's general description of Eastern Arabic numerals confirms the Persian-specific glyph
variants for 4/5/6. **This is squarely a form/input-field design concern**, distinct from pure
RTL layout mirroring and from typography (already covered elsewhere in this project) — any
numeric input component in an Iran-targeted design system needs an explicit, documented answer
for whether it displays/accepts Persian digits, Latin digits, or both with auto-conversion,
rather than leaving it as an unstated assumption.

### Currency: Toman vs. Rial as a real display-unit decision

Iran's official currency is the rial, but the toman (1 toman = 10 rial) is the colloquially
preferred unit — and this shows up as a documented product decision, not just a spoken-language
habit: in at least one description of Digikala's seller panel, sellers reportedly *enter*
prices in rial while the storefront *displays* prices to customers in toman. Sources: general
toman/rial background — [Wikipedia — Iranian toman](https://en.wikipedia.org/wiki/Iranian_toman);
Digikala seller-panel behavior — carried forward from a prior pass of this research citing a
Zoomit guide to Digikala's seller panel (not independently re-fetched in this pass; treat as
moderate confidence). **Design implication, if confirmed:** a currency/price field or display
component for the Iranian market may need to support a display unit that differs from the
stored/canonical unit by a fixed factor of 10 — a distinct concern from simple
currency-symbol localization, and worth flagging even at moderate confidence given how commonly
toman-vs-rial confusion is discussed in Iranian fintech/e-commerce contexts generally.

### Solar Hijri (Jalali) calendar as the default for dates

Extremely well established as a baseline fact (Iran's official calendar), reinforced by the
existence of numerous dedicated Jalali datepicker libraries and Persian-localized form-builder
plugins specifically adding Jalali month/year fields (carried forward from a prior pass of this
research; not re-verified in this pass, but consistent with well-known general knowledge about
Iran's calendar system). This finding sits at the level of "this convention clearly exists and
is widely built for," not at the level of a specific documented Sonnat/Divar guideline — no
Sonnat-specific datepicker documentation was located to confirm how Sonnat itself handles this.
Per the ticket's own note, full calendar/date-format detail is intentionally out of scope here
and belongs in this project's dedicated `taghvim` (calendar) research page.

### Bank-card/Sheba (IBAN) numbers as a distinct financial input pattern

Iranian bank transfers commonly use a 24-character IBAN-style number called "شبا" (Sheba, from
شناسه حساب بانکی ایرانیان — "Iranian Bank Account Identifier"), built on the ISO 13616 IBAN
standard, and it's commonly derived from/entered alongside a 16-digit bank card number (often
grouped as 4×4 digits). Carried forward from a prior pass of this research (not re-verified
here); this is a financial-specific input pattern rather than a general-purpose one, but it's
the kind of concrete, narrow convention the ticket asked to surface — a design system targeting
Iranian commerce/fintech contexts would need a 16-digit grouped card-number pattern and a
24-character Sheba/IBAN pattern in its masked-input guidance, on top of the (unremarkable)
16-digit card number itself.

### Sonnat's own scope: mostly component-level, with RTL treated as a first-class theme primitive

Sonnat's public documentation surface (`sonnat.design`, `sonnat.dev/docs`, and its GitHub org)
covers typography, layout/spacing, grid/breakpoints, and icons as foundations, and the standard
component set (buttons, text fields, sliders, selectors, tags, chips, tooltips, etc.) mostly in
implementation/usage terms. **No dedicated section explicitly framed as "Persian cultural
conventions" or "Iranian market considerations" was found**, beyond RTL/bidi theme support
itself: Sonnat's theming API includes an explicit `direction: "ltr" | "rtl"` theme property and
separate `rtlFontFamily`/`ltrFontFamily`/`monospaceFontFamily` typography tokens — meaning
Sonnat treats "which typeface renders in which direction" as a themeable, first-class
design-system concern rather than an incidental CSS detail. Sources:
[sonnat.design](https://sonnat.design), [sonnat.dev/docs/colors](https://www.sonnat.dev/docs/colors),
[github.com/sonnat](https://github.com/sonnat), and Sonnat's styling documentation (`styling.mdx`
in the `sonnat.github.io` GitHub repo). Note also that Sonnat's GitHub repositories show as
archived as of the page metadata fetched during this research — worth independently confirming
if the project wants to treat Sonnat as an actively maintained reference versus a historical
snapshot.

### Divar's UX/design-team writing: RTL-focused, not clearly beyond it

Divar's own design blog (Medium, "Design at Divar") discusses Persian/RTL as one of its
distinguishing design challenges — describing itself as one of relatively few teams doing
serious RTL design work in Persian at scale (44M+ device installs cited, 80% Persian-language
device setting). Source: [Divar Design — "The Story of a UX Guild"](https://medium.com/design-at-divar/the-story-of-a-ux-guild-amazingly-aligned-and-determined-to-grow-67992ed5946f).
The other Divar Design article checked in this pass (on their AI-assisted ad-creation tool
"Dastyar") mentions RTL explicitly but doesn't go further into non-RTL conventions of the kind
this ticket is after. A full article index of the Divar Design Medium publication could not be
retrieved (the publication page returned only metadata, not an article list) — this should be
treated as "nothing further found in what could be accessed," not "confirmed absent." A future
pass browsing the publication's archive directly, rather than via search, could still turn up
more.

### Virgool.io and other Iranian design-writing platforms

Searches across Virgool.io (a major Persian blogging platform popular with Iranian designers)
surfaced articles on Persian typography/font design and general "authentic Iranian colors in
design" (decorative/historical palettes — turquoise domes, carpet colors, etc.), but nothing
documenting a specific, real product/form convention of the kind this ticket is after. This is
a genuine gap, not a confirmed absence — Virgool's generic-keyword search surfaces mostly
SEO-style content-marketing posts rather than deep design-practice writing; a more targeted
search by specific Iranian product-designer names, or browsing Virgool's design-tagged content
directly, might turn up more than what surfaced here.

### What was explicitly not found

No documentation of Sonnat's RTL-specific component *behavior* beyond direction/typography
(nothing found on carousel/slider directionality, icon-mirroring rules, or chart/graph RTL
conventions specific to Sonnat). No Iranian-designer essay (Medium, Virgool, or otherwise)
was found that documents a concrete, non-RTL-mirroring convention beyond what's captured in
this file. These are real gaps in the research, not claims that nothing else exists.

---

## Consolidated source list

**Directly fetched/read in this research pass**
- Sonnat colors documentation (fetched directly): https://www.sonnat.dev/docs/colors
- Sonnat GitHub organization (fetched directly): https://github.com/sonnat
- Iranian consular Form 420, read directly as PDF: https://static.daftar.org/docs/lib/file/Forms/Form420.pdf
- Persian Tools national ID validator docs: https://persian-tools.js.org/functions/verifyIranianNationalId.html, https://persian-tools.js.org/functions/createIranianNationalId.html
- OkhtayMp/iran-national-id (GitHub): https://github.com/OkhtayMp/iran-national-id
- Wikipedia — Iranian identity card: https://en.wikipedia.org/wiki/Iranian_identity_card
- Wikipedia — Telephone numbers in Iran: https://en.wikipedia.org/wiki/Telephone_numbers_in_Iran
- sent.dm — Iran phone number format guide: https://www.sent.dm/resources/ir
- GeoPostcodes — Iran ZIP code / address format: https://www.geopostcodes.com/country/iran/zip-code/, https://www.geopostcodes.com/country/iran/address-format/
- melipayamak.com — postal code lookup guide: https://www.melipayamak.com/blog/posts/what-is-my-postal-code-number/
- Snapp blog — favourite/selected address flow: https://snapp.ir/blog/how-to-use-favourite-location/
- Digikala Mag — adding a new address (flow only): https://www.digikala.com/mag/video/%D8%A7%D9%81%D8%B2%D9%88%D8%AF%D9%86-%D8%A2%D8%AF%D8%B1%D8%B3-%D8%A7%D9%BE%D9%84%DB%8C%DA%A9%DB%8C%D8%B4%D9%86-%D8%AF%DB%8C%D8%AC%DB%8C%E2%80%8C%DA%A9%D8%A7%D9%84%D8%A7-%D8%A7%D9%86%D8%AF%D8%B1%D9%88/
- Divar News — real-estate ad posting guide (search excerpt; direct re-fetch failed): https://divar.news/divar-tips-publish-real-estate-ad-app/
- Sonnat site: https://sonnat.design
- Divar Design (Medium) — "The Story of a UX Guild": https://medium.com/design-at-divar/the-story-of-a-ux-guild-amazingly-aligned-and-determined-to-grow-67992ed5946f
- Divar Design (Medium) — "Dastyar" AI ad-creation: https://medium.com/design-bootcamp/streamlining-ad-creation-how-dastyar-simplifies-divars-ad-submission-process-with-ai-e078074e0340
- Cultural Atlas — Iranian Culture: Naming: https://culturalatlas.sbs.com.au/iranian-culture/iranian-culture-naming
- Tehran Times — "Shades of doubt and shapes of hope: Colors in Iranian culture": https://www.tehrantimes.com/news/396974/Shades-of-doubt-and-shapes-of-hope-Colors-in-Iranian-culture
- Wikipedia — Iranian Green Movement: https://en.wikipedia.org/wiki/Iranian_Green_Movement
- Chaharshanbe Suri chant sourcing: https://www.talab.org/art/%D8%B3%D9%86%D8%AA-%DA%86%D9%87%D8%A7%D8%B1%D8%B4%D9%86%D8%A8%D9%87-%D8%B3%D9%88%D8%B1%DB%8C.html
- Encyclopaedia Iranica — "COLOR": https://www.iranicaonline.org/articles/color-pers-rang/
- fontiran.com — converting numbers on Persian websites: https://fontiran.com/blog/%D8%B1%D9%88%D8%B4%D9%87%D8%A7%DB%8C-%D9%81%D8%A7%D8%B1%D8%B3%DB%8C-%DA%A9%D8%B1%D8%AF%D9%86-%D8%A7%D8%B9%D8%AF%D8%A7%D8%AF-%D8%A7%D9%86%DA%AF%D9%84%DB%8C%D8%B3%DB%8C-%D8%AF%D8%B1-%D9%88/

**Carried forward from a prior pass of this research (not independently re-verified in this pass — confidence noted inline above wherever used)**
- Sonnat styling/theming docs (RTL, fonts): https://github.com/sonnat/sonnat.github.io/blob/main/pages/docs/styling.mdx
- Iran postal code regex/structure (digit-exclusion rule): https://regexpattern.com/iranian-postal-code/
- UPU Iran addressing reference (PDF, not machine-readable in either pass): https://www.upu.int/UPU/media/upu/PostalEntitiesFiles/addressingUnit/irnEn.pdf
- Digikala Magazine, postal code / national address-lookup system: https://www.digikala.com/mag/find-postal-code-from-map/
- Digikala seller panel guide (Zoomit), toman/rial display behavior: https://www.zoomit.ir/tech-iran/408142-guide-to-working-with-the-seller-panel-digikala/
- Digikala Seller Academy registration flow (combined name field): https://selleracademy.digikala.com/مراحل-ثبت-نام-فروشندگان-در-دیجی‌کالا/
- Wikipedia — Iranian toman: https://en.wikipedia.org/wiki/Iranian_toman
- Academia.edu — "Symbolism of the Red Color in Iranian-Islamic Culture and Art": https://www.academia.edu/129028656/Symbolism_of_the_Red_Color_in_Iranian_Islamic_Culture_and_Art
- Academia.edu — "The symbolism of green color in Iranian-Islamic culture and art": https://www.academia.edu/71975205/The_symbolism_of_green_color_in_Iranian_Islamic_culture_and_art
- Sheba/IBAN explainer: https://payping.ir/blog/راهنمای-کامل-دریافت-شماره-شبا/
- Card-to-Sheba conversion explainer: https://vandar.io/blog/تبدیل-شماره-کارت-شماره-حساب-و-شماره-شبا-در-بانک‌های-مختلف
- Azar Jalali datepicker (existence evidence): https://azaran-code.ir/projects/azar-jalali-and-georgian-datepicker
- Persian Gravity Forms addon (Jalali calendar fields, existence evidence): https://gravityforms.ir/

## Open gaps for a future research pass

1. Direct, field-by-field, screenshot-verified confirmation of Digikala's, Divar's, and
   Snapp's actual consumer-facing name/address/checkout form fields — this pass could only
   triangulate from adjacent evidence (a real-estate listing form, a blog post about a map-pin
   flow, a seller-registration description) and flags that gap honestly rather than presenting
   inferred fields as confirmed.
2. A working fetch/OCR of the UPU's official Iran addressing specification PDF, to confirm
   postal-code digit semantics beyond secondary-source triangulation.
3. Any documented case — positive or negative — of an Iranian product team explicitly deciding
   to deviate from red/green/yellow status-color convention. None was found in either pass of
   this research; a future pass could try Iranian UX conference talks, Aparat (Iranian
   YouTube-equivalent) design talks, or direct outreach to Iranian design practitioners.
4. A more thorough pass through Virgool.io's design-tagged content and named Iranian product
   designers' portfolios/writing (searching by individual designer name rather than topic)
   might surface convention documentation that generic keyword search did not.
5. Independent re-verification of several claims carried forward from a prior research pass
   without being re-fetched in this one (Toman/Rial display split, Sheba/IBAN format, Jalali
   datepicker tooling, the postal-code digit-exclusion rule) — flagged inline above at their
   original confidence level, not silently upgraded.
