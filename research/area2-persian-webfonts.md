# Area 2 — Persian webfonts for a published design-system site: licensing + script-specific behaviour

Research date: 2026-07-31. Every claim below is tagged either **[LICENSE FILE SAYS]** (I fetched and read
the actual licence text at the URL given), **[VENDOR SAYS]** (read on the rights-holder's own site),
**[SOURCE SAYS]** (spec/repo/doc I read directly), or **[I INFER]** (my reasoning, not a quotation).

> **Scope caveat, stated up front:** I am not a lawyer and this is not legal advice. For the OFL fonts the
> licence text is unambiguous and machine-checkable. For the FontIran-family fonts (IRANSans, Yekan Bakh,
> IRANYekan, Dana, Anjoman) the terms are proprietary, Persian-language, and I could not obtain a
> full downloadable EULA PDF — only the vendor's public licence-type descriptions. Treat those as
> **do not ship** rather than "probably fine".

---

## Part A — Comparison table

| Font | Canonical home | Licence (as read) | Commercial use | Webfont embed (self-host woff2) | Redistribute in a package | Reserved Font Name | Google Fonts | Last release / commit | **Verdict** |
|---|---|---|---|---|---|---|---|---|---|
| **Vazirmatn** | [github.com/rastikerdar/vazirmatn](https://github.com/rastikerdar/vazirmatn) | **OFL 1.1** — [OFL.txt](https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/OFL.txt) | Yes | Yes | Yes | **No RFN declared** | **Yes** ([specimen](https://fonts.google.com/specimen/Vazirmatn), added 2022-03-16) | Release v33.003 **2022-06-22**; last commit **2023-05-01**; author died **2023-11-13** | **SAFE TO SHIP — but effectively unmaintained** |
| **Estedad** | [github.com/aminabedi68/Estedad](https://github.com/aminabedi68/Estedad) | **OFL 1.1** — [OFL.txt](https://raw.githubusercontent.com/aminabedi68/Estedad/master/OFL.txt) | Yes | Yes | Yes | **No RFN declared** | **Yes** ([specimen](https://fonts.google.com/specimen/Estedad), METADATA `date_added` 2026-04-01) | Release **v8.5, 2026-03-20**; last push **2026-07-19** | **SAFE TO SHIP — best-maintained option** |
| **Sahel** | [github.com/rastikerdar/sahel-font](https://github.com/rastikerdar/sahel-font) | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/sahel-font/master/LICENSE) (+ Open Sans glyphs under Apache 2.0) | Yes | Yes | Yes | **No RFN declared** | No | Last push **2021-02-25** | **Safe to ship, but dormant** |
| **Shabnam** | [github.com/rastikerdar/shabnam-font](https://github.com/rastikerdar/shabnam-font) | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/shabnam-font/master/LICENSE) (+ Roboto glyphs Apache 2.0) | Yes | Yes | Yes | **No RFN declared** | No | Last push **2021-04-25**; repo **ARCHIVED 2022-08-12**, explicitly discontinued | **Legally safe, do not adopt** (dead) |
| **Samim** | [github.com/rastikerdar/samim-font](https://github.com/rastikerdar/samim-font) | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/samim-font/master/LICENSE) | Yes | Yes | Yes | No RFN declared | No | Discontinued (repo title says so) | Legally safe, dead |
| **Gandom** | [github.com/rastikerdar/gandom-font](https://github.com/rastikerdar/gandom-font) | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/gandom-font/master/LICENSE) (+ Noto Serif glyphs Apache 2.0) | Yes | Yes | Yes | No RFN declared | No | Discontinued | Legally safe, dead |
| **Parastoo** | [github.com/rastikerdar/parastoo-font](https://github.com/rastikerdar/parastoo-font) | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/parastoo-font/master/LICENSE) | Yes | Yes | Yes | No RFN declared | No | Discontinued | Legally safe, dead |
| **Noto Naskh Arabic / Noto Sans Arabic** | [github.com/notofonts/arabic](https://github.com/notofonts/arabic) | **OFL 1.1** — [OFL.txt](https://raw.githubusercontent.com/notofonts/arabic/main/OFL.txt) | Yes | Yes | Yes | **No RFN declared** | **Yes** | Last push **2026-02-26** — actively maintained by Google/Noto | **SAFE TO SHIP — best fallback** |
| **IRANSans** | [fontiran.com/fonts/iransans](https://fontiran.com/fonts/iransans) | **Proprietary EULA**, all rights reserved. Rights holder: **Moslem Ebrahimi**, exclusive seller fontiran.com | Only with a purchased licence | Only with a purchased Web/Software licence | **NO — explicitly forbidden** | n/a (trademark, not OFL) | No | n/a | **DO NOT SHIP** |
| **Yekan Bakh** | [fontiran.com/fonts/yekan-bakh](https://fontiran.com/fonts/yekan-bakh) | **Proprietary EULA**. Rights holders: **Reza Bakhtiarifard & Mahan Jafarzadeh**; exclusive seller fontiran.com | Only with a purchased licence | Only with a purchased Web/Software licence | **NO — "You will not have the right to reproduce, distribute, or modify files"** | n/a | No | n/a | **DO NOT SHIP** |
| **IRANYekan** | fontiran.com | **Proprietary**, "Copyright (c) 2019 by fontiran.com … all rights reserved" | No (without purchase) | No (without purchase) | **No** | n/a | No | n/a | **DO NOT SHIP** |
| **Dana** | [fontiran.com/fonts/dana](https://fontiran.com/fonts/dana) | **Proprietary**. Rights holders **Moslem Ebrahimi & Shahrzad Akbari** | No (without purchase) | No (without purchase) | **No** | n/a | No | n/a | **DO NOT SHIP** |
| **Anjoman** | fontiran.com | **Proprietary**, trademark of fontiran.com, sold in 3 packages | No (without purchase) | No (without purchase) | **No** | n/a | No | n/a | **DO NOT SHIP** |
| **IranNastaliq** | original: scict.ir / Hamoonsoft; a repackage at [font-store/font-IranNastaliq](https://github.com/font-store/font-IranNastaliq) | **LICENSE UNCLEAR — CONTESTED.** Original: "all rights reserved". Repackage ships a bare OFL 1.1 with **no copyright line and no RFN**, and its README shows **no evidence of permission to relicense** | Unclear → assume no | Unclear → assume no | **No** | n/a | No | Repo push 2022-04-30 | **DO NOT SHIP — VERIFY WITH A LAWYER** |
| **Ravi** | — | **LICENSE UNCLEAR — could not verify.** No canonical repo or foundry page found | Unknown | Unknown | Unknown | Unknown | No | Unknown | **DO NOT SHIP until sourced** |

---

## Part A — Per-font detail

### Vazirmatn — SAFE TO SHIP, but the maintenance story is bad

**[LICENSE FILE SAYS]** `OFL.txt` at the repo root opens:

> "Copyright 2015 The Vazirmatn Project Authors (https://github.com/rastikerdar/vazirmatn)
> This Font Software is licensed under the SIL Open Font License, Version 1.1."

Source: <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/OFL.txt>. The Google Fonts copy at
<https://raw.githubusercontent.com/google/fonts/main/ofl/vazirmatn/OFL.txt> carries the identical copyright line.

**Reserved Font Name: none.** OFL §3 restricts *Reserved Font Names*, defined as "any names specified as such
**after the copyright statement(s)**". The Vazirmatn copyright statement declares no reserved names. **[I INFER]**
this means you may fork, modify, subset, and **rename** the font freely (e.g. ship `PatternFly Sans Arabic`
built from Vazirmatn sources) without needing permission — the usual OFL trap does not apply here. That is
unusually permissive for an OFL font and is worth confirming with counsel before you actually rename, because
absence of an RFN is a negative fact and negative facts are worth a second reader.

**Derivation chain (matters for attribution, not for permission):**
**[SOURCE SAYS]** README: *"For Latin glyphs, Vazirmatn is combined with Roboto font by a build script"*, and
*"Thanks to DejaVu Sans font (v2.35) published in public domain there was a free software base to start the Vazir project"*
(<https://github.com/rastikerdar/vazirmatn>).
**[I INFER + CORRECTION]** The README's "public domain" characterisation of DejaVu is imprecise. The DejaVu
licence page states *"DejaVu changes are in public domain"* but the underlying Bitstream Vera Fonts Copyright is a
permissive-but-conditional licence that forbids reusing the names "Bitstream" or "Vera" and forbids selling the
fonts standalone (<https://dejavu-fonts.github.io/License.html>). Roboto is Apache 2.0. Neither imposes copyleft.
**Net effect:** shipping Vazirmatn is fine; your NOTICE/attribution file should mention Roboto (Apache 2.0) and
DejaVu/Bitstream Vera alongside the OFL notice.

**Maintenance — this is the real risk.**
- Last tagged release: **v33.003, published 2022-06-22** (`https://api.github.com/repos/rastikerdar/vazirmatn/releases/latest`).
- Most recent commits (via GitHub API): 2023-05-01, 2023-04-22, 2023-04-12 — all by Saber Rastikerdar, all
  "Add new donations". No substantive font work since 2022.
- **[SOURCE SAYS]** Saber Rastikerdar died **13 November 2023** (<https://en.wikipedia.org/wiki/Saber_Rastikerdar>).
  Wikipedia names no successor maintainer, and I found no official fork or handover.
- **[I INFER]** Vazirmatn is de-facto unmaintained. It is still the single best-known Persian webfont, is on
  Google Fonts, and ships in Telegram Desktop — so it is not going to disappear — but you should not expect
  bug fixes. If PatternFly adopts it, plan to vendor the sources and be prepared to fix things yourself
  (which the OFL, with no RFN, permits).

**Repo variants shipped** (`misc/` directory listing via GitHub API): `UI`, `Non-Latin`, `Farsi-Digits`,
`UI-Farsi-Digits`, `UI-Non-Latin`, `Farsi-Digits-Non-Latin`, `UI-Farsi-Digits-Non-Latin`, plus a top-level
`Round-Dots/` family. The **UI** variant matters for a design system — see Part B.1.

### Estedad — SAFE TO SHIP, and the only actively-maintained option

**[LICENSE FILE SAYS]** <https://raw.githubusercontent.com/aminabedi68/Estedad/master/OFL.txt>:
> "Copyright 2022 The Estedad Project Authors (https://github.com/aminabedi68/Estedad)" … SIL OFL 1.1.

No Reserved Font Name declared. GitHub API reports `license.spdx_id: OFL-1.1`, `archived: false`.
Note the licence file is `OFL.txt`, **not** `LICENSE` — a `LICENSE`-path fetch 404s, which is why some
tooling mislabels it.

**Maintenance:** latest release **v8.5, 2026-03-20**; last push **2026-07-19**. Actively developed.
Designer Amin Abedi / fontamin.com. On Google Fonts (`METADATA.pb` `date_added: 2026-04-01`).

**Design-system-relevant technical facts:**
- Variable font with **two axes**: `wght` 100–900 and **`kshd` (Kashida) 100–200** — a real Arabic
  justification axis, which no other font on this list has
  (<https://github.com/googlefonts/axisregistry/issues/77>, <https://v-fonts.com/fonts/estedad>).
- Stylistic sets documented on the official test page <https://aminabedi68.github.io/Estedad/>:
  `ss01` Arabic Round Dots, `ss02` Arabic Square Dots, `ss03` Arabic Rect Dots, `ss10` contextual lā ligature,
  `ss11` Latin `a` variant, `ss12` Latin `g` variant, **`ss20` "Latin to Farsi Digits"**.
- **CRITICAL INCOMPATIBILITY:** Estedad's Farsi-digit feature is **`ss20`**; Vazirmatn's is **`ss01`**.
  Estedad uses `ss01` for something completely different (round dots). A design-system token that hardcodes
  `font-feature-settings: "ss01"` will silently do the wrong thing when the font is swapped. See Part B.2.
- Release v8.5 notes explicitly record *"vertical metric mismatches between hhea and OS/2 tables"* being
  **fixed** — direct evidence that this class of bug is live in Persian fonts (see Part B.1).

### Sahel — safe, dormant

**[LICENSE FILE SAYS]** <https://raw.githubusercontent.com/rastikerdar/sahel-font/master/LICENSE>:
> "Copyright (c) 2016, Saber Rastikerdar (saber.rastikerdar@gmail.com)" … SIL OFL 1.1.

The same file notes non-Arabic glyphs come from **Open Sans, Apache License 2.0**. No RFN.
GitHub's SPDX detector reports `NOASSERTION` (because the file has a custom header), **but the file
itself is verbatim OFL 1.1** — I read it. Do not rely on the GitHub licence badge here.
Last push **2021-02-25**. Not archived, but the author is deceased. Ships Farsi-numeral and Latin-free
build variants in the release zip. **Not on Google Fonts.**

### Shabnam — safe, but explicitly discontinued

**[LICENSE FILE SAYS]** <https://raw.githubusercontent.com/rastikerdar/shabnam-font/master/LICENSE>:
> "Copyright (c) 2015, Saber Rastikerdar … Glyphs and data from Roboto font are licensed under the Apache License, Version 2.0."
> … SIL OFL 1.1. No RFN.

**[SOURCE SAYS]** The README states development is stopped and archived
("توسعه این پروژه متوقف و بایگانی شده است"); GitHub API reports `archived: true`, archived **2022-08-12**,
last push **2021-04-25**. **Do not build a design system on this.**

### Samim / Gandom / Parastoo — safe, all discontinued

All three: **[LICENSE FILE SAYS]** OFL 1.1, `Copyright (c) 2015, Saber Rastikerdar`, no RFN.
- Samim: <https://raw.githubusercontent.com/rastikerdar/samim-font/master/LICENSE> — repo title says "(Discontinued)"
- Gandom: <https://raw.githubusercontent.com/rastikerdar/gandom-font/master/LICENSE> — also notes
  "Glyphs and data from **Noto Serif** font are licensed under the Apache License, Version 2.0"
- Parastoo: <https://raw.githubusercontent.com/rastikerdar/parastoo-font/master/LICENSE> — repo title says "(Discontinued)"

Legally shippable; strategically dead ends.

### Noto Naskh Arabic / Noto Sans Arabic — safe, maintained, the obvious fallback

**[LICENSE FILE SAYS]** <https://raw.githubusercontent.com/notofonts/arabic/main/OFL.txt>:
> "Copyright 2022 The Noto Project Authors (https://github.com/notofonts/arabic)" … SIL OFL 1.1. **No RFN.**

GitHub API: `license.spdx_id: OFL-1.1`, `archived: false`, last push **2026-02-26**. On Google Fonts with a
stable CDN. **[I INFER]** This is the lowest-risk font-stack fallback: maintained by Google, OFL, no RFN,
and the widest Arabic-script coverage of anything here. Naskh is a more traditional/bookish texture than
Vazirmatn or Estedad, so it reads as a fallback rather than a brand face — but for a `font-family` stack's
tail position it is the right answer.

### IRANSans — **DO NOT SHIP. This is the headline legal hazard.**

**[VENDOR SAYS]** fontiran.com's own IRANSans page (<https://fontiran.com/fonts/iransans>) states the exclusive
seller is fontiran.com ("فروشنده انحصاری آن fontiran.com است") and lists a tiered price sheet:

| Tier | Price (Toman) |
|---|---|
| Personal desktop | **Free** |
| Personal website/app (1 user) | 350,000 |
| Business website/app (2 users) | 1,000,000 |
| Organisational (5 users) | 2,000,000 |
| Unlimited | 8,500,000 |

**[VENDOR SAYS]** Purchasers receive *usage* rights only — not reproduction, distribution, or modification
rights. Updates go only to registered purchasers.

**Why this is specifically dangerous:** IRANSans is one of the most-pirated fonts on the web. Free-font
aggregators (onlinewebfonts, webfontfree, fontke, cufonfonts, fontmirror, dafont mirrors, fontlibrary) carry
copies labelled variously **"free for personal use"**, **"redistribute, change or rename according to GPL"**,
and **"copyright moslemebrahimi.com 2014"**. These labels **contradict each other and contradict the rights
holder's own site.** There is also a separate, confusingly-named font called **"Iranian Sans"** on fontlibrary
which is a *different* font with a different licence — the name similarity has caused people to believe
IRANSans is free/open. **[I INFER]** Any "free IRANSans" you find is almost certainly an unlicensed copy;
the GPL claim in particular is not supported by anything on fontiran.com. Shipping it in a distributed
design-system package would be redistribution, which even a purchased FontIran licence does not grant.

**Rights holder for the record:** trademark of www.fontiran.com; designer **Moslem Ebrahimi**.

### Yekan Bakh — **DO NOT SHIP.** Terms are clear and they forbid what we want to do.

**[VENDOR SAYS]** <https://fontiran.com/fonts/yekan-bakh> — copyright **Reza Bakhtiarifard and Mahan Jafarzadeh**,
exclusive seller fontiran.com. Licence tiers: Desktop (free), Web Font, Personal Web/Software (1 user),
Corporate Web/Software (2 users), Enterprise (5 users), Unlimited. Paid tiers ≈ 398,000 – 9,500,000 Toman.

**[VENDOR SAYS]** — the operative sentence, quoted from the vendor page:
> "You are restricted from copying, distributing, and modifying files. Only the purchaser can download updates
> through their personal account panel."

and

> "The font files must be purchased by the user from fontiran.com domain."

**[I INFER]** A purchased WebFont licence would let *us* serve woff2 from *our* site. It would **not** let us
publish those woff2 files in a public npm package / GitHub repo that third parties then copy — that is
redistribution, explicitly forbidden. For a **published, open-source design system** this is fatal.

The many "Yekan Bakh FaNum free download" pages (onlinewebfonts, fonnts, globalfonts, cufonfonts) are
unlicensed mirrors; one aggregator even notes the font was *removed at the request of the copyright holders*.

### IRANYekan, Dana, Anjoman — DO NOT SHIP (same posture)

- **IRANYekan** — trademark of fontiran.com (Moslem Ebrahimi), "Copyright (c) 2019 by fontiran.com" all rights reserved.
- **Dana** — **[VENDOR SAYS]** <https://fontiran.com/fonts/dana>; designers **Shahrzad Akbari & Moslem Ebrahimi** (1398/2019);
  proprietary; sold in three packages; first Persian variable font, 13 weights, ships TTF/WOFF/WOFF2/EOT.
  Technically attractive; legally unavailable for redistribution.
- **Anjoman** — trademark of fontiran.com, 12–13 weights, sold in 3 packages, not free.

### FontIran's licence model, as stated on their own licence page

**[VENDOR SAYS]** <https://fontiran.com/about-licenses>:
- Desktop rights come **with purchase**: *"با خرید فونت می‌توانید روی کامپیوتر و موبایل‌های شخصی‌تان فایل فونت را نصب کنید"* —
  install on your own personal computers/phones. **No redistribution to others.**
- The governing principle: *"برای هر نوع استفاده که ناچارید فایل فونت را فراتر از سیستم شخصی خود کپی کنید لایسنس نیاز است"* —
  **any** use that requires copying the font file beyond your own personal system requires a licence.
- Web/Software licences are split Personal (self-employment, one site/app) vs Corporate (one organisation) vs
  Organisational (5 users) vs Unlimited.
- Dynamic-media use requires shipping a `FontLicense.txt` containing a 6-digit licence code alongside the fonts,
  plus a licence-number comment in your CSS.
- **What I could NOT find:** a downloadable, complete EULA PDF with explicit clauses on (a) number of pageviews
  or domains a Web licence covers, (b) whether subsetting/woff2 conversion counts as prohibited "modification",
  (c) sublicensing to downstream consumers of an open-source package. **LICENSE DETAIL UNCLEAR — I read the
  vendor's summary pages, not a signed EULA.** For PatternFly's use case this doesn't change the verdict
  (redistribution is forbidden either way), but if anyone wants to license a FontIran face for a *closed*
  product they must get the actual EULA from info@fontiran.com.

### IranNastaliq — **LICENSE UNCLEAR — CONTESTED. Do not ship.**

Two conflicting stories:
1. **Original:** designed by **Hossein Zahedi**; distributed copies carry *"the typeface is the property of
   scict.ir Corporation … your use of this software is limited to your workstation for your own publishing use.
   You may not copy or distribute this software"*, with *"Copyright Hamoonsoft (2007-2008), all rights reserved."*
2. **Repackage:** <https://github.com/font-store/font-IranNastaliq> is labelled **OFL-1.1** by GitHub, described
   as a *"Modified and optimized version of IranNastaliq.ttf font — WebFont/Desktop/Mobile supported"*, modified
   by Mohammad Saleh Souzanchi.

**[LICENSE FILE SAYS]** I fetched
<https://raw.githubusercontent.com/font-store/font-IranNastaliq/master/LICENSE>. It is the **generic OFL 1.1
boilerplate with no copyright holder line and no Reserved Font Name declaration** — it begins directly at
"This Font Software is licensed under the SIL Open Font License, Version 1.1." **[SOURCE SAYS]** The README
credits Hossein Zahedi and scict.ir but contains **no statement of permission to relicense**, no copyright
assignment, and no clearance note.

**[I INFER — flagging loudly]** A third party applying OFL to a font whose original terms say "all rights
reserved, you may not copy or distribute", with no recorded permission and no copyright line in the OFL file,
is **not** a valid open-source licence. **DO NOT SHIP. VERIFY WITH A LAWYER** if there is any appetite for a
Nastaliq display face — and note that Nastaliq is in any case a calligraphic display style, wrong for design-system UI.

### Ravi — **LICENSE UNCLEAR — could not verify**

I searched for a canonical repo or foundry page for a Persian font named "Ravi" and found **nothing
authoritative** — no GitHub repo, no foundry listing, no licence text. Search results conflated it with the
Farsi Font Store organisation's other faces. **I could not confirm that this font exists under this name from
a primary source, let alone its licence. Do not ship it.** If someone has a specific Ravi source, re-run this
check against that URL.

### Bonus: Farsi Font Store (partially verified — flagging as not-fully-checked)

<https://github.com/font-store> describes itself as "a type foundry and design studio specifically focused on
developing high quality Perso-Arabic typefaces". Its repos are **labelled** OFL-1.1 by GitHub:
BehdadFont, NikaFont, font-Iranian, GanjnamehFont, FarbodFont (plus RitaFontTester GPL-2.0, VirastYaar MIT).

**[I INFER — DO NOT TREAT AS VERIFIED]** I read the org listing, not each LICENSE file. Given that the
**same organisation** ships the IranNastaliq repackage described above with an authorless OFL file, **its
licence labels should be independently verified per-font before use.** That org's OFL badges have already
proven unreliable once.

---

## Part B — What Persian fonts must handle that Latin fonts do not

### B.1 Ascenders, descenders, and why the same `line-height` breaks

**The spec-level statement.** W3C *Arabic & Persian Layout Requirements* (alreq), **§7.4 "Baselines, line
height, etc."** (<https://www.w3.org/TR/alreq/>):

> "Arabic ascenders and descenders extend much further than those of the Latin script, and care must be taken
> to correctly align text in the different scripts when they appear together."

alreq **§4.2.1 "Multi-level baselines"** additionally notes Arabic letters may sit on inclined or stepped
baselines rather than one flat baseline — so "the baseline" is not a single line the way it is in Latin.

**[I INFER]** alreq deliberately does not give a numeric line-height multiplier; it is a requirements
document, not a style guide. The W3C *Arabic Script Gap Analysis* (<https://www.w3.org/TR/alreq-gap/>) has
§7.4 open as a question ("Are there issues related to line height or inter-line spacing, etc.?") with **no
recorded gap and no severity rating**. So: **there is no normative W3C line-height number to cite.** Anyone
who tells you "the W3C says 1.8 for Arabic" is wrong.

**The mechanism — this is the part that actually explains the clipping.** The real cause is font vertical
metrics, and the authoritative write-up is Google Fonts' own vertical-metrics guide
(<https://googlefonts.github.io/gf-guide/metrics.html>, and <https://github.com/googlefonts/gf-docs/blob/main/VerticalMetrics/README.md>):

- There are **three competing sets** of vertical metrics in an OpenType font:
  - `hhea` ascender/descender/lineGap — **used by macOS**
  - `OS/2` **typo**Ascender/typoDescender/typoLineGap — used by Microsoft apps *only when the flag below is on*
  - `OS/2` **win**Ascent/winDescent — Microsoft's fallback, and it functions as a **clipping box**
- **[SOURCE SAYS]** *"If the font includes tall/deep writing systems such as Arabic or Devanagari, the winAscent
  and winDescent can be greater than the yMax and abs(yMin) to accommodate vowel marks."* If win values are
  **less** than yMax/|yMin|, **glyphs get clipped on Windows.**
- **[SOURCE SAYS]** *"Changing these values will increase the line height in MS applications. This can lead to
  very loose line heights if the bounding box is exceedingly tall. This mainly occurs in families featuring
  Vietnamese, Devanagari, **Arabic**, or other tall scripts."*
- The fix: **`OS/2.fsSelection` bit 7 = `USE_TYPO_METRICS`.** *"This will force Microsoft Applications to use the
  `Typo` values instead of the `Win` values for line spacing"*, which lets a designer *"freely set the `Win`
  values to avoid clipping and control the line height with the `Typo` values."*

**So the answer to "why does the same `line-height` clip or crowd Persian?"** is a two-part answer:
1. Persian/Arabic glyphs genuinely occupy more vertical space — deep bowls on ج ح خ ع غ ی ,
   dots *below* the baseline (ب پ ج چ ی), dots and marks *above*, and tall ascenders on ا ل ک گ. A CSS
   `line-height` tuned to Latin's ascender-to-descender band simply does not contain them.
2. Compounding that, when a font sets `win` metrics tall enough to avoid clipping **without** setting
   `USE_TYPO_METRICS`, Windows browsers inherit an enormous default line box — so the *same* font looks
   tight on macOS (`hhea`) and loose on Windows (`win`). This is the classic "my Persian font looks different
   per-OS" bug, and it is a font-metrics bug, not a CSS bug.

**Concrete evidence this bites the actual fonts on our list:**
- **Vazirmatn explicitly fixes it.** Its build script contains the steps
  `"Fixing OS/2.fsSelection bit 7 (USE_TYPO_METRICS) in ${BUILD_DIR}/instance_ttf/*"` and
  `"Fixing OS/2.fsSelection bit 7 (USE_TYPO_METRICS) for variable"`
  (<https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/make-fonts.sh>).
  **[SOURCE SAYS] — Vazirmatn ships with USE_TYPO_METRICS set.** Good.
- **Vazirmatn ships a whole "UI" family purely for line-height.** The `misc/UI*` folders exist because,
  per the upstream description packaged by Fedora, *"This version of the font provides generally smaller
  height to be more suitable for UI"*
  (<https://packages.fedoraproject.org/pkgs/vazirmatn-fonts/vazirmatn-ui-nl-fonts/>). The changelog also
  records *"Fixed height issue in the UI version"*. **[I INFER]** For a component library — buttons, chips,
  table cells, form labels, anything with a fixed control height — **`Vazirmatn UI` is the correct variant,
  not plain `Vazirmatn`.** Plain Vazirmatn is for prose.
- **Estedad had this exact bug in 2026.** Release **v8.5 (2026-03-20)** notes it *"resolved vertical metric
  mismatches between hhea and OS/2 tables"* (`https://api.github.com/repos/aminabedi68/Estedad/releases/latest`).
  **[I INFER]** If you pin Estedad, **pin ≥ v8.5**; anything earlier has known cross-platform line-height drift.

**Practical numbers.** There is no primary-source normative figure. What I found:
- **WCAG 2.2 SC 1.4.12 Text Spacing** requires content to remain usable at `line-height: 1.5×` font-size —
  a floor, for all languages, not an Arabic recommendation. The UAE government design system cites exactly
  this and applies *"a minimum value of 1.5 for line-height for the main paragraph content"*
  (<https://designsystem.gov.ae/guidelines/typography>).
- **Notably, the two Gulf government design systems I checked do NOT differentiate Arabic from Latin metrics
  at all.** Dubai Design System (<https://designsystem.dubai.ae/foundations/typography>) publishes one type
  scale — e.g. desktop body 16px / 24 line-height — applied identically to Arabic and English, and recommends
  a single dual-script family (Dubai Font). UAE Design System 2.0 likewise uses one 1.333-ratio scale for both,
  differing only in `font-family` (Noto Kufi Arabic vs Roboto). **[I INFER]** These are existence proofs that
  a shared scale is shippable **if** you pick a face whose Arabic and Latin were drawn to the same vertical
  budget. Both use dual-script families designed as a unit (Dubai Font; Noto Kufi Arabic) — they avoided the
  problem by font choice rather than by CSS overrides. That is the strategy I'd recommend PatternFly copy.
- Practitioner rules of thumb do exist (≈1.7–1.85 for Arabic body vs 1.5–1.6 Latin, or "+10–15% over the
  Latin value") but these come from **blog posts, not primary sources**, and I am flagging them as such rather
  than citing them as authority.

**Does Persian need a *larger* font-size than Latin? — CONTESTED, no primary source either way.**
alreq §4.1 mentions font-selection considerations for small screens (loop/tooth height, small descenders)
but frames them as design choices, not requirements, and **states no size relationship to Latin**. The
practitioner literature I found **actively disagrees with itself**: some sources claim Arabic has a larger
x-height and should be set *smaller* than Latin (1–2px down), others claim it needs to be set *larger*
for legibility of tooth-and-dot detail. **[I INFER]** The honest answer for the PatternFly adaptation is:
**this must be resolved empirically per chosen face, not by rule.** The one reproducible test I can point at
is the tashkeel-legibility heuristic — set at several sizes and pick the size where diacritics are legible
without dominating the line. Treat any single px delta as a design decision to be validated, not a fact.

### B.2 Numeral form variants — three different Unicode ranges, and one nasty bidi gotcha

**Confirmed code points.** Unicode Standard core spec, ch. 9
(<https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-9/>) and W3C alreq §6.1.2:

| Family | Range | Glyphs | Used by |
|---|---|---|---|
| European / ASCII | **U+0030–U+0039** | 0 1 2 3 4 5 6 7 8 9 | Western Arabic-speaking countries (Algeria, Morocco); also widely in Iran online |
| **Arabic-Indic** | **U+0660–U+0669** | ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ | *"used in most of the Arabic world"* — Egypt, Saudi Arabia, Iraq |
| **Extended / Eastern Arabic-Indic** (**this is Persian**) | **U+06F0–U+06F9** | ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ | *"used in Afghanistan, India, Iran, and Pakistan"* |

**[SOURCE SAYS] — Unicode ch.9:** *"There are distinct glyph forms for Eastern Arabic-Indic digits for the
digits four, five, six, and seven"*, and *"for four, six, and seven, there is substantial variation between
locales using the Eastern Arabic-Indic digits."* So ۴ ۶ ۷ are drawn differently in Persian vs Urdu **at the
same code point** — this is exactly what `locl` exists for.

**[SOURCE SAYS] — THE BIDI GOTCHA, and it is a real one.** alreq §6.1.2 records that Arabic-Indic digits
(U+0660–0669) have **Bidi_Class = AN (Arabic Number)** whereas the Persian Extended Arabic-Indic digits
(U+06F0–06F9) have **Bidi_Class = EN (European Number)**. *"Arabic-Indic digits are of category AN (Arabic
Number), differently from their counterpart just above."* **[I INFER]** These two classes are resolved
differently by UAX #9 — so **switching a component's digits between U+0660 and U+06F0 can change the
directional layout of the surrounding run**, not just the glyph shapes. Any PatternFly number-formatting
utility must therefore treat "which digit range" as a **layout** decision, not a cosmetic one, and must be
tested inside mixed LTR/RTL strings (dates, versions, IDs, table cells).

Also: alreq notes numbers are always written **most-significant-digit-leftmost** even inside RTL text — so a
number is an LTR island. This is why `dir="auto"` and `<bdi>` matter for user-supplied numeric content.

**What the fonts actually ship.**

- **Vazirmatn.** Its `ss01` feature file
  (<https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/farsi-digits.fea>) defines
  **`ss01` = "Farsi Digits"** and does **two** substitutions:
  1. ASCII `\zero`…`\nine` (U+0030–0039) → `\uni06F0`…`\uni06F9`
  2. Arabic-Indic `\uni0660`…`\uni0669` → `\uni06F0`…`\uni06F9`
  registered for scripts DFLT/Arab/Latn and languages **FAR, KUR, URD**.
  Its `tnum` feature (`scripts/tnum-non-latin.fea`) covers U+0660–0669 **and** U+06F0–06F9, and notably
  includes **`uni06F4.locl` and `uni06F7.locl`** — i.e. Vazirmatn does carry the locale-specific ۴/۷ shapes
  Unicode describes.
  Official docs (<https://rastikerdar.github.io/vazirmatn/fa/docs/HELP-fa>) give the CSS verbatim:
  ```css
  .sample_farsi_digits   { font-feature-settings: "ss01"; }
  .sample_tabular_numbers{ font-feature-settings: "tnum"; }
  .sample_ss01_tnum      { font-feature-settings: "ss01", "tnum"; }
  ```
  **Default behaviour is correct and unopinionated** — the docs state the font respects the input encoding:
  Persian ۱۲۳, Arabic ١٢٣ and Latin 123 each display as typed, because *"a standard font should not display
  anything other than the original text."* `ss01` is an **opt-in override**, not the default.
  There is also a non-OpenType escape hatch: the `misc/Farsi-Digits*` builds have Latin and Arabic-Indic
  numerals **physically replaced** with Farsi forms, for environments with no OpenType feature support.
  `ss01` was added in v30.0.0; v32.0.0 fixed digit kerning/width and *"the number spacing problem in the
  ss01 style set"*.

- **Estedad.** Same capability, **different tag**: **`ss20` = "Latin to Farsi Digits"**
  (<https://aminabedi68.github.io/Estedad/>). It also implements the Arabic number-sign contextual features
  (U+0600 Arabic Number Sign, U+0601 Sanah, U+0602 Footnote Marker, U+0603 Safha, U+0604 Samvat,
  U+06DD End of Ayah) which trigger on following digits.

- **Sahel / Shabnam** ship Farsi-numeral build variants in the release zip (physical substitution, not a feature).

**⚠️ Design-system consequence.** `ss01` means "Farsi digits" in Vazirmatn and "**round dots**" in Estedad.
A shared token like `--pf-t--font--feature--farsi-digits: "ss01"` is a landmine. **[I INFER]** PatternFly
should expose this as a per-font mapping (a font-specific token or a `@font-face`-scoped
`font-feature-settings` descriptor), never as one global string.

**What CSS gives you — and what it doesn't.**
- **`font-variant-numeric` cannot do this.** Per MDN
  (<https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric>), it only controls figure *style*
  within one numeral system: `lining-nums`/`oldstyle-nums` (`lnum`/`onum`), `proportional-nums`/`tabular-nums`
  (`pnum`/`tnum`), `diagonal-fractions`/`stacked-fractions`, `ordinal`, `slashed-zero`. **There is no
  standard CSS property for switching numeral scripts.**
- **`font-feature-settings` is the only lever**, and MDN explicitly calls it *"a low-level feature designed to
  handle special cases where no other way exists to enable or access an OpenType font feature"* and says to
  prefer `font-variant-*` **whenever possible** — which, for numeral-system switching, is never.
  (<https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings>)
  Practical note: `font-feature-settings` is **not** additive — declaring it in a child element replaces the
  parent's whole list, so a component that sets `"tnum"` will silently drop an inherited `"ss01"`.
- **`locl` will NOT convert Latin digits to Persian digits.** The OpenType spec
  (<https://learn.microsoft.com/en-us/typography/opentype/spec/features_ko#locl>) defines Localized Forms as
  substituting *"localized variant forms of specific letters"* **for a given Unicode value** — one-to-one GSUB
  between alternate glyphs of *the same character*. Its example is Bulgarian vs Russian Cyrillic. It is
  driven by *"Language tagging or similar metadata indicating the language of the text"* and
  *"should always be applied"*, with UI control *"not generally exposed to the user."*
  **[I INFER]** So `lang="fa"` correctly gets you the *Persian shape of ۴/۶/۷* via `locl` — but it will
  **not** turn `123` into `۱۲۳`. Nothing in the font or CSS layer does that except an explicit stylistic set,
  or emitting the right code points in the first place.
- **What `lang`/`dir` actually do:** `lang` selects the OpenType language system (driving `locl`, and driving
  which `ss01`/`ss20` language records apply — Vazirmatn's `ss01` is registered for FAR/KUR/URD specifically),
  and it drives font fallback and hyphenation. `dir` drives the UAX #9 bidi paragraph level. **Neither
  transliterates digits.**
- **[I INFER] The correct architecture:** decide numeral form in the **data/formatting layer**, not the font
  layer — `Intl.NumberFormat('fa-IR')` and `Intl.DateTimeFormat('fa-IR')` emit U+06F0–06F9 directly, giving
  you correct code points that copy/paste, screen-read, and search correctly. Use `ss01`/`ss20` only as a
  visual override for content you cannot re-format (third-party strings, user input), and be aware that
  `ss01`-substituted digits still **copy as Latin `123`**, which is a real accessibility and
  copy-paste-fidelity problem.

**Known browser bug worth tracking:** W3C Arabic Script Gap Analysis
(<https://www.w3.org/TR/alreq-gap/>) issue **#279 "Wrong glyph digit shapes for extended arabic-indic digits"**,
severity **Advanced**: *"Persian, Urdu and Sindhi use extended-arabic-indic codepoints for digits in list
counter styles. However, languages that use these code points tend to prefer specific glyph shapes for certain
numbers."* Blink shows Persian shapes universally; WebKit and Gecko vary inconsistently. **[I INFER]** Affects
`list-style-type: persian` / CSS counter styles specifically — test ordered lists in all three engines.

### B.3 ZWNJ (U+200C) rendering quality

**What it is and why it is non-negotiable.** Unicode Standard ch. 9:
> *"The use of a non-joiner between two letters prevents those letters from forming a cursive connection with
> each other when rendered."*
> *"Examples requiring the use of a non-joiner include the Persian plural suffix, some Persian proper names, and
> Ottoman Turkish vowels. This use of non-joiners is important for representation of text in such languages, and
> **ignoring or removing them will result in text with a different meaning, or in meaningless text.**"*

alreq **§4.3.4.1 "Disjoining Enforcement"**: *"a special character should be used to enforce disjoining of
these letters. This character is called U+200C ZERO WIDTH NON-JOINER, or ZWNJ for short."* alreq §4.3.3
Joining Rule 2 notes Persian and Urdu compound words require these explicit breaks. In Persian it is the
**most commonly typed invisible character** and has a dedicated key on the standard Persian keyboard
(نیم‌فاصله, "half-space").

**[I INFER]** This means ZWNJ is not a nicety — stripping it in a sanitiser, a slugifier, a diff, or a
`trim()`-style normaliser **changes the meaning of Persian text**. Any PatternFly text-processing utility
(search highlighting, truncation, `text-overflow`, copy-to-clipboard, CSV export) must be ZWNJ-safe.

**Unicode properties** (<https://www.compart.com/en/unicode/U+200C>,
<https://www.fileformat.info/info/unicode/char/200c/index.htm>):
- General_Category = **Cf (Format)** — it is a format control, **not** a space character
- Bidi_Class = **BN (Boundary Neutral)** — invisible to the bidi algorithm
- Script = **Zinh (Inherited)**; Canonical_Combining_Class = 0; not mirrored
- Present since Unicode 1.1 (1993)

**Rendering correctness — how it should behave:** the font must (a) contain a ZWNJ glyph so the shaper does not
fall back to another font, (b) give it **zero advance width**, and (c) still produce the **final/isolated form**
of the preceding letter and the **initial/isolated form** of the following one. The shaping side is handled by
the `fina`/`init`/`medi`/`isol` OpenType features driven by Unicode `Joining_Type` from `ArabicShaping.txt`;
the MS OpenType spec notes for `medi` that *"Additional factors, such as the presence of control characters,
should also be considered"* — i.e. the shaper is required to account for ZWNJ.

**Known bugs in the fonts on our list — both in Vazirmatn, both real:**
1. **Issue #7 (opened 2015-10-22)** — the ZWNJ glyph was **missing from the font entirely**, so Word (and
   anything doing per-glyph font fallback) substituted a different typeface for it. **Fixed in v1.8**, which
   added the half-space (نیم‌فاصله) and virtual-space glyphs.
   <https://github.com/rastikerdar/vazirmatn/issues/7>
2. **Issue #249 (opened 2022-03-20)** — **the same class of bug regressed.** In Microsoft Word, typing ZWNJ
   (Shift+Space or Ctrl+Shift+2) caused the font to switch to a different typeface. Reporter noted it did
   **not** happen with other fonts and did **not** happen in the older Vazir. **Fixed in v32.101**, whose
   changelog entry reads *"رفع نبود نیم‌فاصله در فونت‌های تولید شده"* — "fixed the absence of the half-space in
   the generated fonts" (credited to @kokabi1365).
   <https://github.com/rastikerdar/vazirmatn/issues/249>,
   <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/CHANGELOG.md>

**[I INFER] This is a genuine regression class, not a one-off** — a build-pipeline bug that dropped the ZWNJ
glyph from generated instances, twice, seven years apart. **Add a ZWNJ presence assertion to the design
system's font QA**: render `می‌رود` / `کتاب‌ها` and assert (a) no font-fallback occurs on the ZWNJ, (b) advance
width is zero, (c) the preceding letter is in final form. Since Vazirmatn is now unmaintained, nobody upstream
will catch a third regression.

I found **no** ZWNJ bug reports for Estedad, Sahel, Shabnam, Noto Arabic. **[I INFER]** Absence of reports is
weak evidence — Estedad has ~1/8 the stars of Vazirmatn — so test rather than assume.

**Line-break behaviour.** ZWNJ is Bidi_Class BN and General_Category Cf. Neither
<https://www.compart.com/en/unicode/U+200C> nor fileformat.info exposes its `Line_Break` value, and I could
not find ZWNJ explicitly classified in the UAX #14 prose I read (<https://www.unicode.org/reports/tr14/>) —
that document discusses **ZWJ** (U+200D, its own `ZWJ` class, which *"prevents breaks between most pairs of
characters that would otherwise break"*) but not ZWNJ. **LINE_BREAK CLASS FOR ZWNJ: NOT VERIFIED FROM A
PRIMARY SOURCE.** Secondary sources state that ZWNJ *"has no effect on word or line break boundaries"* and
"prevents character joining without creating a line break", while others claim it can act as a break
opportunity. **These conflict; I am flagging it rather than resolving it.** If line-breaking around ZWNJ
matters to a PatternFly component (truncated table cells, tags, breadcrumbs), **test it empirically in
Chrome/Firefox/Safari** rather than trusting either claim.

**Text selection and search — this one IS verified and is good news.** W3C Arabic Script Gap Analysis,
§5.2 "Grapheme/word segmentation & selection" (<https://www.w3.org/TR/alreq-gap/>):
> *"All major desktop browsers select a whole word when you double-click on it, including when the word
> contains ZWNJ."*

Status: **functioning as expected, no gap identified.** **[I INFER]** Double-click selection is safe. In-page
find (Ctrl+F) is a different code path and is **not** covered by that statement — a user typing a plain space
where the text has a ZWNJ will not match. Any PatternFly search/filter component should normalise ZWNJ
(and the Arabic ي/ی and ك/ک variants) on **both** sides of the comparison while preserving it in the rendered
DOM.

---

## Recommendations (my inference, clearly labelled as such)

1. **Ship Estedad as the primary Persian face.** It is OFL 1.1 with no RFN, on Google Fonts, and — uniquely
   on this list — **actively maintained in 2026**, with a `kshd` Kashida axis for real Arabic justification.
   **Pin ≥ v8.5**, which fixed the hhea/OS-2 vertical-metric mismatch.
2. **Ship Vazirmatn as the secondary / familiarity option**, using the **`Vazirmatn UI`** variant for
   components and plain `Vazirmatn` for prose. Accept that it is unmaintained and vendor the sources. Its
   lack of an RFN means we may legally fork and rename if we need to fix it ourselves.
3. **Noto Sans Arabic / Noto Naskh Arabic as the stack fallback** — OFL, Google-maintained, widest coverage.
4. **Do not ship, do not vendor, do not link to any FontIran face** (IRANSans, Yekan Bakh, IRANYekan, Dana,
   Anjoman) or IranNastaliq. Their terms forbid redistribution outright, and IRANSans in particular carries a
   long tail of contradictory "free/GPL" labels on pirate mirrors that will not survive contact with a lawyer.
5. **Make Farsi-digit control a per-font token, not a global one** (`ss01` in Vazirmatn ≠ `ss01` in Estedad),
   and prefer emitting U+06F0–06F9 from `Intl.NumberFormat('fa-IR')` over feature-based substitution.
6. **Add font QA assertions** for: ZWNJ glyph present + zero-width + correct final form; `USE_TYPO_METRICS`
   set; no descender clipping on ج ح خ ع غ ی at the smallest component line-height; digits render at the
   expected code points; and ordered-list counters in all three engines (gap-analysis #279).
7. **Resolve the Persian-vs-Latin font-size question empirically.** There is no primary source. Test the
   chosen face at several sizes and pick where tashkeel are legible without dominating the line.

## Sources fetched (primary, in order of weight)

1. <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/OFL.txt> — Vazirmatn licence text
2. <https://raw.githubusercontent.com/google/fonts/main/ofl/vazirmatn/OFL.txt> — Google Fonts copy
3. <https://raw.githubusercontent.com/aminabedi68/Estedad/master/OFL.txt> — Estedad licence text
4. <https://raw.githubusercontent.com/google/fonts/main/ofl/estedad/OFL.txt> — Google Fonts copy
5. <https://raw.githubusercontent.com/rastikerdar/sahel-font/master/LICENSE>
6. <https://raw.githubusercontent.com/rastikerdar/shabnam-font/master/LICENSE>
7. <https://raw.githubusercontent.com/rastikerdar/samim-font/master/LICENSE>
8. <https://raw.githubusercontent.com/rastikerdar/gandom-font/master/LICENSE>
9. <https://raw.githubusercontent.com/rastikerdar/parastoo-font/master/LICENSE>
10. <https://raw.githubusercontent.com/notofonts/arabic/main/OFL.txt>
11. <https://raw.githubusercontent.com/font-store/font-IranNastaliq/master/LICENSE> — authorless OFL
12. <https://fontiran.com/fonts/iransans> — IRANSans vendor page + price tiers
13. <https://fontiran.com/fonts/yekan-bakh> — Yekan Bakh vendor page + EULA statements
14. <https://fontiran.com/fonts/dana> — Dana vendor page
15. <https://fontiran.com/about-licenses> — FontIran licence-type page
16. <https://www.w3.org/TR/alreq/> — W3C Arabic & Persian Layout Requirements §4.3, §6.1.2, §7.4
17. <https://www.w3.org/TR/alreq-gap/> — W3C Arabic Script Gap Analysis §5.2, issue #279
18. <https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-9/> — digits + ZWNJ
19. <https://googlefonts.github.io/gf-guide/metrics.html> + <https://github.com/googlefonts/gf-docs/blob/main/VerticalMetrics/README.md>
20. <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/make-fonts.sh> — USE_TYPO_METRICS
21. <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/farsi-digits.fea> — ss01 definition
22. <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/tnum-non-latin.fea>
23. <https://rastikerdar.github.io/vazirmatn/fa/docs/HELP-fa> — official CSS usage
24. <https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/CHANGELOG.md>
25. <https://github.com/rastikerdar/vazirmatn/issues/7> and <https://github.com/rastikerdar/vazirmatn/issues/249> — ZWNJ bugs
26. <https://aminabedi68.github.io/Estedad/> — Estedad OpenType feature list (ss20)
27. `https://api.github.com/repos/{rastikerdar/vazirmatn, aminabedi68/Estedad, rastikerdar/sahel-font, rastikerdar/shabnam-font, notofonts/arabic, font-store/font-IranNastaliq}` — dates, archive status, SPDX
28. `https://api.github.com/repos/aminabedi68/Estedad/releases/latest` — v8.5 metric fix
29. <https://packages.fedoraproject.org/pkgs/vazirmatn-fonts/vazirmatn-ui-nl-fonts/> — UI variant rationale
30. <https://learn.microsoft.com/en-us/typography/opentype/spec/features_ko#locl> — locl + medi
31. <https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric> and <https://developer.mozilla.org/en-US/docs/Web/CSS/font-feature-settings>
32. <https://en.wikipedia.org/wiki/Saber_Rastikerdar> — maintainer death
33. <https://dejavu-fonts.github.io/License.html> — DejaVu/Bitstream Vera terms
34. <https://designsystem.dubai.ae/foundations/typography>, <https://designsystem.gov.ae/guidelines/typography>
35. <https://www.compart.com/en/unicode/U+200C>, <https://www.fileformat.info/info/unicode/char/200c/index.htm>
