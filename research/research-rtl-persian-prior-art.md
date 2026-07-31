# Persian / RTL design and typography prior art

Research for a Persian (fa-IR), right-to-left adaptation of the PatternFly design system.
Research date: 2026-07-31.

**How to read this document.** Claims are labelled by evidence class:

- **[SOURCE SAYS]** — I fetched the page and am quoting or paraphrasing it directly.
- **[VENDOR SAYS]** — read on the rights holder's own site.
- **[LICENSE FILE SAYS]** — I read the actual licence text at the URL given.
- **[via index]** — the page is client-side rendered and would not fetch; content comes from search-index text and **needs a human eyeball before it enters a normative PatternFly doc**.
- **[INFERENCE]** — my reasoning, not any source's ruling.

Where authorities disagree, both positions are reported side by side. Nothing has been smoothed over.

---

## What this changes for the project

The short version: **there is far more prior art than expected on typography and orthography, and far less than expected on the things design systems usually assume are settled.** Four findings should change the plan before any design work starts.

### 1. There is no authority for icon mirroring. PatternFly-fa must publish its own list.

The instinct is to look this up in a spec. **You cannot.** UAX #9 mirrors *characters* (brackets, relational operators) and says nothing about icons. CLDR carries **no** per-locale symbol-mirroring data. W3C's own issue asking for exactly this guideline is **open with zero positions recorded**. Google, Apple, Microsoft, Mozilla and Wikimedia each publish a list, and **they contradict each other** — and Google contradicts *itself* in three places. Two questions are genuinely unresolved (media scrubbers vs progress bars; time-axis charts, where the best empirical study splits 58/31). §1 gives a per-element table with the source for each ruling, and flags every disagreement rather than smoothing it.

**Concretely, in this repo:** `styles/icons/patternfly-svg-icons/` has 76 icons, of which the directional ones (`pficon-arrow`, `pficon-export`, `pficon-import`, and notably `pficon-trend-up`/`pficon-trend-down`) each need an explicit ruling — trend arrows are precisely the "semantics, not direction" case that must **not** mirror. **66 markdown files across `pattern-library/`, `styles/` and `patternfly-4/` use physical left/right language** ("the legend should be left-aligned", "position right-aligned text labels to the left of horizontally-oriented graphs"). Each is a place where "left" must be re-decided as either *start* (mirrors) or literally left (doesn't).

### 2. The font question is a licensing landmine, and the current typeface has no Persian at all.

`styles/typography/typography.md` specifies **Open Sans**, which has no Arabic-script coverage — so a Persian face must be chosen, not merely configured. The obvious candidates are exactly the dangerous ones: **IRANSans and Yekan Bakh are proprietary and forbid redistribution outright**, which is fatal for a published design system regardless of what the many "free download" mirrors claim. IRANSans in particular carries pirate copies labelled *both* "free for personal use" *and* "GPL" — claims that contradict each other and the rights holder's own site.

**Safe, verified by reading the actual LICENSE files: Estedad, Vazirmatn, Noto Sans/Naskh Arabic — all OFL 1.1, none declaring a Reserved Font Name** (so the fork may legally rename). But **Vazirmatn is effectively unmaintained** — its author died in November 2023 with no successor — and **Estedad is the only actively maintained option.** Two traps beyond licensing: `ss01` means *Farsi digits* in Vazirmatn and *round dots* in Estedad, so a global font-feature token silently breaks on font swap; and Persian line-height problems are a **font-metrics** bug (`USE_TYPO_METRICS`), not a CSS bug — which is why the same font looks tight on macOS and loose on Windows.

### 3. Most of `terminology-and-wording.md` does not survive translation — and one Persian rule is newer than almost everything written about it.

The existing style guide is more English-specific than it looks. Its largest section, **"Capitalization for Common Components"** (a 20-row table mapping components to Headline vs Sentence style), is **meaningless in Persian — the script has no letter case at all.** The punctuation section needs replacing wholesale: Persian uses `،` `؛` `؟` `«»` — but, usefully, keeps the plain Latin `.` `:` `!` `(` `)`. The truncation guidance ("leave no fewer than 4 characters") is written for a non-cursive script and needs re-examination for joined Arabic-script text.

**The finding that most changes the work:** the Academy's دستور خط فارسی has **two materially different editions**, and the ۱۴۰۱ revision **reversed the ZWNJ ruling from optional to mandatory**. Nearly all secondary material — style guides, blog posts, and LLM answers — still quotes the superseded edition. §3 works from the ۱۴۰۱ PDF directly. Related, and high-severity for any search or i18n-key code: **`خانهٔ` has two encodings that no Unicode normalization form reconciles**, and the same is true of ی/ي and ک/ك. `String.normalize()` fixes none of them; a hand-written fold table is required.

Also: `pattern-library/forms-and-controls/date-and-time/` specifies a Gregorian picker with AM/PM and states *"the calendar icon is shown on the right."* For fa-IR the default calendar is **Solar Hijri**, the week starts **Saturday**, and **the weekend is Friday only** — a single-day weekend almost no date component handles.

### 4. Don't invent Persian component names — but do expect to invent nine of them.

**فرهنگستان has approved terms for zero modern UI components.** There is no authority to defer to. What exists instead are three mutually incompatible registers (purist FOSS / big-vendor localization / Iranian product industry), and **the register must be chosen before any word is.** The industry register is heavily loanword-based — مودال، تب، چیپس، فیلتر، اسکلتون — **and that is the finding, not a failure to find "proper" Persian.**

The single most valuable discovery: **Sonnat (سنّت), Divar's published design system, is the only publicly documented Persian design system in existence** and already names many of these components. Digikala, Snapp, Cafe Bazaar, Tapsell and Zarinpal all keep theirs internal.

§4 reports every competing term with its source. Twenty terms are universal and can be adopted as-is; eight are genuinely contested and need a project decision (including a real collision — **Label and Tag both want برچسب**); and **nine have no established Persian term at all** (toast, empty state, skeleton, data list, tertiary, popover, stepper, wizard, spinner) — these are where original terminology work is actually required. Note that Sonnat **doesn't use primary/secondary/tertiary at all**; it uses an emphasis scale, which is worth considering before porting PatternFly's three-tier button naming.

### Cross-cutting: things that will bite the implementation

- **Never strip U+200C.** It is `General_Category=Cf` and gets silently eaten by sanitizers, slugifiers and PDF extractors — `pdftotext` on the Academy's *own* PDF returned zero of them. Removing it changes the meaning of Persian text.
- **Normalize for comparison, never for storage.**
- **Never hand-build number or date strings** — CLDR's fa data uses an LRM-prefixed sign and U+2212 (not hyphen), and month names differ between formatting and stand-alone forms because of ezāfe.
- **PatternFly's known RTL gaps carry forward:** Popper.js-based components (tooltips, popovers) have no built-in RTL support, and the design tokens still carry top/bottom/left/right *names* while components use logical properties.


---

## 1. Bidi mirroring rules

### 1.0 Two structural findings that reframe the question

**No standards body rules on icon mirroring.** This is the single most important framing fact, and it is easy to get wrong.

- **UAX #9 rule L4** mirrors a character *if and only if* its resolved directionality is R **and** its `Bidi_Mirrored` property is Yes ([unicode.org/reports/tr9](https://www.unicode.org/reports/tr9/)). That governs brackets, parentheses and relational operators **in text**. It says nothing about icons, images or layout. **Do not cite UAX #9 for an icon ruling.**
- **CLDR/LDML** supplies only `<layout>` → `lineOrder` / `characterOrder`, i.e. paragraph direction per locale, and explicitly notes this *"does not override the ordering behavior of bidirectional text"* ([TR35 Part 1](https://www.unicode.org/reports/tr35/tr35-general.html)). **CLDR carries no per-locale icon or symbol mirroring data.** Any claim that "CLDR tells you which symbols mirror" is false.
- **W3C has no normative ruling either.** Its published RTL material covers `dir`, markup and logical CSS values, not which icons flip. W3C i18n issue #757, "Guideline for RTL UI", is **open with zero positions recorded, no assignee, no milestone** ([w3c/i18n-drafts#757](https://github.com/w3c/i18n-drafts/issues/757)).

**Consequence:** every ruling in the table below is a *design-system* decision, not a standards decision. PatternFly-fa must publish its own normative list; it cannot defer to a spec.

**Arrow *characters* never auto-mirror.** Unicode L2/22-026 (an *individual contribution, not a standard*) states arrows *"were never given the Bidi_Mirrored=Yes property … and cannot now get that"*, and that its proposed mappings *"must not be used when mirroring due to bidi RTL text"* ([L2/22-026](https://www.unicode.org/L2/L2022/22026-non-bidi-mirroring.pdf)). So an arrow typed as a character (U+2190 etc.) will **not** flip. Only an arrow shipped as an icon asset that you deliberately mirror will.

### 1.1 The mirror / do-not-mirror table

Source keys: **M1** = [Material Design 1 Bidirectionality](https://m1.material.io/usability/bidirectionality.html) · **M3** = [Material Design 3](https://m3.material.io/foundations/layout/bidirectionality-rtl) *(index only)* · **GI** = [Google Material Icons guide](https://developers.google.com/fonts/docs/material_icons) · **AP** = [Apple, Supporting Right-to-Left Languages](https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/SupportingRight-To-LeftLanguages/SupportingRight-To-LeftLanguages.html) · **AW** = [Apple WWDC22 s10107](https://developer.apple.com/videos/play/wwdc2022/10107/) · **MS** = [Microsoft Globalization › Mirroring](https://learn.microsoft.com/en-us/globalization/fonts-layout/mirroring) · **MS2** = [MS Design for bidi text](https://learn.microsoft.com/en-us/windows/apps/design/globalizing/design-for-bidi-text) · **MZ** = [Mozilla RTL Guidelines](https://firefox-source-docs.mozilla.org/code-quality/coding-style/rtl_guidelines.html) · **CX** = [Wikimedia Codex](https://doc.wikimedia.org/codex/latest/style-guide/bidirectionality.html) · **SP** = [Spotify Engineering](https://engineering.atspotify.com/2019/04/right-to-left-the-mirror-world) · **AN** = [Android RTL](https://developer.android.com/training/basics/supporting-devices/languages)

| # | Element | Ruling | Sources | Notes |
|---|---|---|---|---|
| 1 | **Arrows — navigational / relative** ("next", "back", "forward") | **MIRROR** | M1: *"Icons that communicate direction, like arrows, are mirrored"*. AP: images flip if they *"communicate a sense of direction, such as arrows"*. AW, GI, MZ, SP | The one rule everyone agrees on. |
| 1b | **Arrows — absolute / spatial** ("move left", compass) | **DO NOT MIRROR** | AW (explicit): SF Symbols `arrow.left`/`arrow.right` *"always point those absolute directions"* | **Google disagrees** — GI's mirror-list *does* include `arrow_left`/`arrow_right`. Google's naming carries no absolute/relative distinction, so its list is not safe to apply verbatim. |
| 1c | **Arrow characters in text** (U+2190 …) | **DO NOT auto-mirror** | L2/22-026 | The UBA will not flip them. Only deliberately mirrored assets flip. |
| 2 | **Breadcrumb chevrons / separators** | **MIRROR** — glyph **and trail order** | GI (`chevron_left/right`, `navigate_before/next`, `first_page`, `last_page`); CX; Adobe Spectrum *[via index]* | Root goes farthest right, current location farthest left. No source argues against. |
| 3 | **Indent / outdent** | **MIRROR** | GI (explicit: `format_indent_decrease`, `format_indent_increase`); AW | Indentation is defined relative to reading direction. |
| 3b | **Text-*alignment* controls** (align-left / center / align-right) | **DO NOT MIRROR** | AW (worked example): a Bold/Italic/Underline group uses `Unspecified` and reverses; a **text-alignment control uses `Spatial` and does not** | Easy to get wrong: indent/outdent mirrors, align-left/right must keep both glyphs **and** button order — each denotes an absolute alignment. |
| 4 | **Back / forward navigation** (browser + wizard Next/Back) | **MIRROR** | SP: *"back and forward navigation buttons have to be reversed"*; MZ; M1; GI; AP/AW; AN | Mirror glyph **and** placement — Back sits at inline-start (right) in RTL. Applies to PatternFly Wizard. |
| 5 | **Progress bars / steppers** — fill direction and step order | **MIRROR** | M1: *"Progress bars fill in the same direction as content is read"*; AP; CX; M3 *[via index]* | M3 carves out **Hebrew** (linear progress stays LTR). **Farsi is not carved out — for fa-IR, progress mirrors.** |
| 5b | **Circular spinners / clockwise progress arcs** | **DO NOT MIRROR** | M3 *[via index]*: *"Clock icons, circular refresh icons, and progress indicators with arrows pointing clockwise shouldn't be mirrored"*; M1 | Linear progress mirrors; circular clockwise progress does not. |
| 6 | **Sliders / range inputs** | **MIRROR** — min moves to the inline-start (right) | M3 Sliders *[via index]*; CX; M1 (volume slider *"should progress RTL"*) | Two Apple carve-outs (AW): a **media scrubber** takes `.playback` and does not flip; an **absolute spatial** slider (audio L/R balance) takes `.spatial` and does not flip. |
| 7 | **Media playback controls** — play, pause, rewind, FF, skip | **DO NOT MIRROR** | AP (*"Video controls and timeline indicators"*); AW (`.playback`); MS (*"fast-forward and rewind icons … use the same orientation in both LTR and RTL"*); MS2; M1; M3 *[via index]*; MZ; CX; SP | **Rulings agree; rationales conflict — see §1.2.** Corroborating: `play_arrow`, `fast_forward`, `fast_rewind`, `skip_next/previous` are all **absent** from GI's mirror-list. |
| 8a | **Clocks / clock icons** | **DO NOT MIRROR** | AP (verbatim: *"Clocks"*); M1: *"Clocks still turn clockwise for RTL languages"*; CX | Clockwise is a horological convention, not a reading convention. |
| 8b | **Refresh / reload** | **DO NOT MIRROR** | M3 *[via index]*; M1 | `refresh`, `sync`, `autorenew`, `rotate_right` absent from GI's mirror-list. |
| 8c | **Undo / redo** | **CONTESTED** | **Mirror:** GI's list contains `undo` **and** `redo`; Apple's `arrow.uturn.backward/forward` follow the flipping convention. **Don't:** M3's *[via index]* clockwise rule would catch the curved arcs. | Google's own two documents point opposite ways for the same glyph. **[INFERENCE]** undo/redo are semantically *backward/forward through history* → mirror; refresh is *rotational* → don't. That reconciles them, but it is my synthesis. |
| 9 | **Checkmarks / tick** | **DO NOT MIRROR** | MZ (explicit); CX | `check`, `done`, `check_circle` absent from GI's mirror-list. No source says otherwise. |
| 10 | **Charts with a time axis** | **CONTESTED — genuinely unresolved** | **Don't flip:** AP (*"Graphs (x– and y–axes always appear in the same orientation)"*); M1; CX (conditional). **Flip:** [Datawrapper](https://www.datawrapper.de/blog/right-to-left-visualizations/) | **See §1.3 for the empirical picture.** Also: GI mirrors chart *glyphs* (`trending_up`, `show_chart`) while M1 declines to mirror chart *components*. |
| 11 | **Logos and brand marks** | **DO NOT MIRROR** | MZ; M1; AN; PatternFly's own handbook | |
| 12 | **Icons containing Latin text / letters / numerals** | **DO NOT MIRROR** | MZ (don't mirror *"Text or numbers"*); M1; AN | Direct consequence: `scaleX(-1)` is unusable on these — it reverses the embedded glyphs. |
| 13 | **Images / photos** | **DO NOT MIRROR unless directional** | AP: *"Images, unless they communicate a sense of direction, such as arrows"*; M1 (a person moving "forward" faces **left** in RTL); MS | The explicit "it depends on context" case. |
| 14 | **Numbers / numerals** | **DO NOT MIRROR — localize instead** | M1; MZ; UAX #9 | For fa-IR: switch to Persian digits ۰–۹. A numbering-system choice, orthogonal to mirroring. See §2.2 and §3.3. |
| 15a | **Search / magnifier** | **CONTESTED in ruling; agreed in principle** | **Don't:** M1 — handle at bottom-right *"because the majority of users are right-handed"*. **Do:** MZ — mirror *"icons representing objects that are meant to be handheld"* so they look right-handed | Both assert the **same principle** and reach opposite instructions **because their base assets are drawn with the handle on opposite sides**. **[INFERENCE]** Resolve by inspecting PatternFly's own asset, not by copying either verdict. |
| 15b | **Phone / envelope** | **DO NOT MIRROR** — **[INFERENCE]** from the general non-directional rule | M1 (*"Icons that do not communicate direction, such as a camera"*); MZ | But directional **call-log** icons **do** mirror — GI lists `call_made`, `call_received`, `call_missed`, `call_merge`, `call_split`. |
| 16 | **Hamburger / menu** | Glyph: **DO NOT MIRROR**. Button: **move to inline-start (right)** | **[INFERENCE]** — no primary source names it. Glyph is horizontally symmetric so mirroring is a no-op. Placement follows MS/MS2 | Flagged as inference. |
| 17 | **Swipe / gestures, carousels, motion** | **MIRROR** | AN; SP (carousel slides move the opposite direction); MZ | Motion direction is part of mirroring, not just static layout. |
| 18 | **Scrollbars** | **MIRROR (move left)** | MS: *"If a scroll bar is required, it appears on the left side"* | Minor counter-note: Mozilla Hacks lists scrollbars as not-mirrored on ergonomic grounds. Browser default follows `dir` anyway. |
| 19 | **Code, file paths, URLs, emails, phone numbers as text** | **DO NOT MIRROR; force LTR** | MZ (`direction: ltr` + `text-align: match-parent`); CX | |
| 20 | **Toggles, rating selectors, button groups** | **MIRROR** | CX; AP (macOS segmented controls flip) | |
| 21 | **Text fields — icon side, alignment** | **MIRROR** | M1: *"Text fields icons are displayed on the opposite side of a field"*; W3C | Caveat (MS2): a text block over ~2–3 lines may warrant alignment opposite the app direction. Rare. |
| 22 | **Music notes / sheet music** | **DO NOT MIRROR** | AP (verbatim do-not-flip list) | |
| 23 | **Question-mark (help) icons** | **MIRROR for Arabic and Farsi**; not Hebrew | M3 *[via index]*; AW | **fa-IR specific:** Persian uses `؟` U+061F, a **distinct character**, not a mirrored `?`. Help icons should be **redrawn** with `؟`, not geometrically flipped. |

### 1.2 Contested case — media playback controls

**Every source rules the same way (do not mirror). The rationales are mutually incompatible**, which matters because a design system inherits the rationale along with the rule.

| Source | Position | Stated rationale |
|---|---|---|
| Apple (AP) | Do-not-flip list reads *"Video controls and timeline indicators"* | None given |
| Apple (AW) | `.playback` semantic attribute → does not reverse | Mechanism, not rationale — an API-level opt-out |
| Microsoft (MS) | *"fast-forward and rewind icons … use the same orientation in both LTR and RTL layouts"* | None given |
| Material 1 | *"Do not mirror media playback buttons and the media progress indicator"* | **Tape metaphor** — arrows refer to the direction the media travels |
| Material 3 *[via index]* | *media controls … are always LTR*; **and separately** *in Hebrew, timelines and media controls should retain LTR* | Same tape rationale, but the Hebrew-specific phrasing **contradicts the "always LTR" phrasing on the same page.** Unresolved — the page would not render for direct fetch |
| Mozilla | Video/audio controls don't mirror | **Physical-hardware convention** — audio hardware in RTL regions has always had this layout. Explicitly a *different* argument from Google's |
| Spotify | Didn't mirror playback or progress bar; **did** mirror back/forward nav and carousels | **Measured user expectation** — *"Arabic speaking users expect playback controls and progress bar to look the same as they would in a left-to-right language"*. A research finding, not an a-priori rule |

**The residual ambiguity a design system must resolve explicitly:** a progress indicator mirrors (row 5) but a *media* progress indicator / scrubber does not (row 7). **These are the same visual primitive with different semantics.** PatternFly needs either two component behaviours or one component with an explicit `variant="playback"` opt-out — the equivalent of Apple's `UISemanticContentAttribute`.

### 1.3 Contested case — charts with a time axis

**Guidelines say don't flip. Tooling flips. Practice is split. Nobody has authority.**

| Position | Source | Exact position |
|---|---|---|
| Don't flip | Apple | *"Graphs (x– and y–axes always appear in the same orientation)"* |
| Don't flip | Material 1 | *"Charts and graphs"* listed under not-mirrored |
| Conditional | Codex | *"Charts and graphs if mirroring could impact data interpretation"* |
| **Do flip** | Datawrapper | *"line charts, area charts, column charts, and scatter plots, x-axes run from right to left"*. **Cites no user research** — stated rationale is localisation consistency |
| **Empirically split** | [Alebri, Rakotondravony & Harrison, IEEE VIS 2024](https://discovery.ucl.ac.uk/10194127/1/Alebri_accessible-2024_VIS_RTL_short_paper.pdf) | 128 visualizations, 51 articles, 7 Arabic news outlets |

The IEEE VIS 2024 corpus study is the strongest evidence available and it does not settle the question:

- **Numerical x-axis (incl. time series): 58% kept the LTR pattern; 31% mirrored it.**
- **Categorical x-axis: 81% put the y-axis on the right (RTL); 9% left.**
- The LTR-time-axis pattern is a **mainstream-media habit** — 85% of it came from CNN Arabic, BBC Arabic and similar; the mirrored pattern came 84% from independent outlets (Inkyfada, Alsifr).
- The authors observed **inconsistent mirroring within single articles** and flag this as actively harmful — readers must change reading direction mid-article.
- Their own conclusion: *"there are no clear guidelines on designing visualizations for RTL users"*; designers rely on *"tacit knowledge"*.
- **Cognitive evidence cuts the other way:** they cite Fuhrman & Boroditsky (2010) showing Arabic/Hebrew speakers arrange event pictures right-to-left — **the mental timeline itself runs RTL.**

**No Persian-specific study was found.** The Arabic media evidence is the closest available proxy.

**[INFERENCE]** The defensible PatternFly position: default to **not** flipping a quantitative/time x-axis (matching Apple, Material, Codex and the 58% majority), make flipping an explicit opt-in, mirror the chart *chrome* (legend, label alignment, tooltip anchoring, y-axis side for categorical charts) regardless, and **require consistency across all charts in one view** — the study's strongest empirical warning is against mixing patterns.

### 1.4 Where Google contradicts itself

Worth calling out because GI's mirror-list is the most copy-pasted artefact in this space:

1. It mirrors `arrow_left`/`arrow_right` — **Apple explicitly does not** (row 1b).
2. It mirrors `trending_up`/`show_chart`/`multiline_chart` — **Material's own guidance says charts don't mirror** (row 10).
3. It mirrors `undo`/`redo` — **M3's clockwise rule would not** (row 8c).

Google's own framing is *"Icons should only be mirrored if their direction matches other UI elements in RTL mode"* — i.e. the list is advisory, not normative. **Do not adopt it wholesale.**

### 1.5 Implementation guidance

**Setting direction.** Use the `dir` attribute on `<html>`, **not CSS**. W3C is emphatic: *"Do **not** use CSS to apply base direction in HTML pages"* — direction is semantic and must survive with the markup ([qa-html-dir](https://www.w3.org/International/questions/qa-html-dir)). Use `dir="auto"` and `<bdi>` for runtime-injected strings of unknown direction. PatternFly today already uses `<html dir="rtl">` with `.pf-v6-m-dir-ltr/rtl` helpers.

**Logical properties.** W3C: *"use 'start' and 'end', rather than 'left' or 'right'"* so *"the mirroring happens automatically"*. Substitution table (Mozilla): `margin-inline-start/end`, `padding-inline-start/end`, `float: inline-start`, `inset-inline-start`, `border-inline-end`, `border-{start/end}-{start/end}-radius`, `text-align: start` / `match-parent`.

> **Known PatternFly mismatch:** components already use `block-start`/`inline-end`/etc., but **token *names* retain top/bottom/left/right** for backward compatibility. That naming/semantics gap should be called out explicitly in the fa-IR work.

**`:dir()` selector.** Matches the **computed** direction including `dir="auto"`; `[dir="rtl"]` matches only an explicit attribute and **never matches `dir="auto"`**. **Baseline widely available since December 2023** ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir)) — safe to use.

**`transform: scaleX(-1)` caveats.** Google publishes this as *the* web mirroring technique, but:

1. **Mozilla, explicit:** it *"doesn't work when the image is a part of an element with text using `background-image`, because then the text would be mirrored along with the image"*.
2. **Any embedded glyph reverses** — so it is unusable on any icon containing letters or digits (row 12).
3. **Android says the same at platform level:** `autoMirrored` *"only works for simple drawables … If your drawable contains multiple elements or if reflection changes its meaning, provide separate resources instead"*.
4. **[INFERENCE]** It also reverses lighting/shadow and gradient direction on any non-flat icon.

**Separate RTL asset variants — every platform ships this escape hatch:** Material (`convert -flop`, swap under `:dir()`), Android (`autoMirrored` / `res/drawable-ldrtl/`), iOS/macOS (asset-catalog Direction: Fixed/Mirrors/Both), Windows (`file.layoutdir-rtl.png`), PatternFly (`.pf-v6-m-mirror-inline-rtl`, `shouldMirrorRTL` on `<Icon>`).

**The pattern worth copying — Apple's `UISemanticContentAttribute`.** It maps exactly onto the contested rows:

| Value | Meaning | Maps to |
|---|---|---|
| `unspecified` | default; reverses for RTL | rows 1, 2, 3, 4, 5, 6, 20, 21 |
| `playback` | media playback control; does not reverse | row 7 |
| `spatial` | moves things in **absolute** directions; does not reverse | rows 1b, 3b |
| `forceLeftToRight` | hard override | rows 11, 12, 19 |

**[INFERENCE]** SF Symbols' **naming convention is itself the policy** — `left`/`right` means absolute (never flips), `backward`/`forward` means relative (flips). Adopting that discipline in PatternFly's icon names is the cheapest way to make the row-1 vs row-1b distinction survive contact with implementers.

**Known gaps:** `rtlcss`/`css-flip` automate stylesheet flipping with a `/* @noflip */` escape. Firefox test switch: `intl.uidirection = 1`. **PatternFly's own documented gap: components built on Popper.js (tooltips, popovers) have no built-in RTL support** and need manual placement handling — carry this into the fa-IR plan.

Mozilla's blunt warning, worth quoting to stakeholders: *"Do RTL right or don't bother! Doing it halfway will lose your audience and credibility."*

---

## 2. Persian webfonts

### 2.1 Licensing

> **Scope caveat.** This is not legal advice. For the OFL fonts the licence text is unambiguous and I read it directly. For the FontIran-family fonts the terms are proprietary and Persian-language, and **no complete downloadable EULA could be obtained** — only the vendor's public licence descriptions. Those are marked **do not ship**, not "probably fine".

| Font | Licence (as read) | Commercial | Webfont embed | **Redistribute** | RFN | Google Fonts | Last activity | Verdict |
|---|---|---|---|---|---|---|---|---|
| **Estedad** | **OFL 1.1** — [OFL.txt](https://raw.githubusercontent.com/aminabedi68/Estedad/master/OFL.txt) | Yes | Yes | Yes | **None** | **Yes** | Release **v8.5 2026‑03‑20**, push 2026‑07‑19 | ✅ **SAFE — best maintained** |
| **Vazirmatn** | **OFL 1.1** — [OFL.txt](https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/OFL.txt) | Yes | Yes | Yes | **None** | **Yes** | Release v33.003 **2022‑06‑22**; last commit 2023‑05‑01 | ✅ **SAFE — but unmaintained** |
| **Noto Sans / Naskh Arabic** | **OFL 1.1** — [OFL.txt](https://raw.githubusercontent.com/notofonts/arabic/main/OFL.txt) | Yes | Yes | Yes | **None** | **Yes** | Push 2026‑02‑26 | ✅ **SAFE — best fallback** |
| **Sahel** | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/sahel-font/master/LICENSE) (+ Open Sans glyphs Apache 2.0) | Yes | Yes | Yes | None | No | Push 2021‑02‑25 | ⚠️ Safe, **dormant** |
| **Shabnam** | **OFL 1.1** — [LICENSE](https://raw.githubusercontent.com/rastikerdar/shabnam-font/master/LICENSE) (+ Roboto Apache 2.0) | Yes | Yes | Yes | None | No | **Repo ARCHIVED 2022‑08‑12**, explicitly discontinued | ⚠️ Legally safe, **do not adopt** |
| **Samim / Gandom / Parastoo** | **OFL 1.1** (read each) | Yes | Yes | Yes | None | No | All discontinued | ⚠️ Legally safe, dead |
| **IRANSans** | **Proprietary EULA**, all rights reserved. Rights holder **Moslem Ebrahimi**, exclusive seller [fontiran.com](https://fontiran.com/fonts/iransans) | Purchase only | Purchase only | **NO** | n/a | No | n/a | ❌ **DO NOT SHIP** |
| **Yekan Bakh** | **Proprietary EULA**. **Reza Bakhtiarifard & Mahan Jafarzadeh**, [fontiran.com](https://fontiran.com/fonts/yekan-bakh) | Purchase only | Purchase only | **NO — explicitly forbidden** | n/a | No | n/a | ❌ **DO NOT SHIP** |
| **IRANYekan / Dana / Anjoman** | **Proprietary**, fontiran.com | No | No | **No** | n/a | No | n/a | ❌ **DO NOT SHIP** |
| **IranNastaliq** | **UNCLEAR — CONTESTED** (see below) | Unclear | Unclear | **No** | n/a | No | 2022‑04‑30 | ❌ **DO NOT SHIP — verify with counsel** |
| **Ravi** | **UNCLEAR — could not verify.** No canonical repo or foundry page found at all | Unknown | Unknown | Unknown | Unknown | No | Unknown | ❌ **DO NOT SHIP until sourced** |

**The two headline traps.**

**IRANSans is the biggest one.** **[VENDOR SAYS]** fontiran.com is the exclusive seller; the free tier is **personal desktop only**, with paid tiers from 350,000 to 8,500,000 Toman. Purchasers receive *usage* rights — **not reproduction, distribution, or modification**. IRANSans is also one of the most-pirated fonts on the web: aggregator copies are labelled variously *"free for personal use"*, *"redistribute, change or rename according to GPL"*, and *"copyright moslemebrahimi.com"*. **These labels contradict each other and contradict the rights holder's own site.** There is also a separate, differently-licensed font called *"Iranian Sans"* whose name similarity has caused people to believe IRANSans is free. **[INFERENCE]** Any "free IRANSans" is almost certainly an unlicensed copy; the GPL claim is supported by nothing on fontiran.com.

**Yekan Bakh's terms are clear and they forbid exactly what we want to do.** **[VENDOR SAYS]**, quoted from the vendor page: *"You are restricted from copying, distributing, and modifying files"*, and *"The font files must be purchased by the user from fontiran.com domain."* **[INFERENCE]** A purchased WebFont licence would let *us* serve woff2 from *our* site. It would **not** let us publish those files in a public npm package that third parties copy — that is redistribution. **For a published open-source design system this is fatal.**

**FontIran's governing principle**, from [their own licence page](https://fontiran.com/about-licenses): *"برای هر نوع استفاده که ناچارید فایل فونت را فراتر از سیستم شخصی خود کپی کنید لایسنس نیاز است"* — **any** use requiring copying the font file beyond your own personal system needs a licence. What could **not** be found: a complete EULA with clauses on pageview/domain limits, whether subsetting counts as prohibited "modification", or sublicensing to downstream consumers. **LICENSE DETAIL UNCLEAR** — but it does not change the verdict, since redistribution is forbidden either way.

**IranNastaliq — a live relicensing problem.** The original carries *"Copyright Hamoonsoft (2007-2008), all rights reserved"* and *"You may not copy or distribute this software"*. A repackage at [font-store/font-IranNastaliq](https://github.com/font-store/font-IranNastaliq) is labelled OFL-1.1 by GitHub — but **[LICENSE FILE SAYS]** the file is **generic OFL 1.1 boilerplate with no copyright holder line and no RFN declaration**, and the README shows **no statement of permission to relicense**. **[INFERENCE, flagged loudly]** A third party applying OFL to a font whose original terms say "all rights reserved" is not a valid open-source licence. (Nastaliq is a calligraphic display style and wrong for UI anyway.)

> **Knock-on warning:** the *same* org (`font-store`) labels several other fonts OFL-1.1 — BehdadFont, NikaFont, GanjnamehFont, FarbodFont, font-Iranian. **Those badges were not individually verified and that org's labelling has already proven unreliable once.** Verify per-font before use.

**On Reserved Font Names.** None of the OFL fonts above declares an RFN. OFL §3 restricts only names *"specified as such after the copyright statement(s)"*. **[INFERENCE]** This means PatternFly may legally fork, modify, subset **and rename** (e.g. ship `PatternFly Sans Arabic` built from Vazirmatn sources) without permission — unusually permissive, and the escape hatch that makes Vazirmatn's unmaintained status survivable. Worth a second reader, since absence of an RFN is a negative fact.

**Attribution chains** (affect NOTICE files, not permission): Vazirmatn's Latin comes from **Roboto** (Apache 2.0) with a **DejaVu/Bitstream Vera** base; Sahel's non-Arabic glyphs from **Open Sans** (Apache 2.0); Shabnam from **Roboto**; Gandom from **Noto Serif**. Note Vazirmatn's README calls DejaVu "public domain" — imprecise: DejaVu *changes* are public domain but the underlying Bitstream Vera licence is permissive-but-conditional.

**The maintenance story is the real risk, not the licensing.** Vazirmatn's last substantive release was **June 2022**; author **Saber Rastikerdar died 13 November 2023** with no recorded successor or official fork. It is the best-known Persian webfont and ships in Telegram Desktop, so it will not disappear — but **expect no bug fixes**. Estedad is the only actively maintained option on this list.

### 2.2 What Persian fonts must handle that Latin fonts do not

#### Ascenders, descenders, and line-height

**There is no normative W3C line-height number.** W3C [alreq §7.4](https://www.w3.org/TR/alreq/) says only that *"Arabic ascenders and descenders extend much further than those of the Latin script"*. The [Arabic Script Gap Analysis](https://www.w3.org/TR/alreq-gap/) has the line-height question **open with no recorded gap and no severity**. **Anyone who tells you "the W3C says 1.8 for Arabic" is wrong.** alreq §4.2.1 further notes Arabic may sit on **inclined or stepped baselines** — "the baseline" is not one flat line as in Latin.

**The actual mechanism is font vertical metrics.** Per [Google Fonts' vertical-metrics guide](https://googlefonts.github.io/gf-guide/metrics.html), an OpenType font carries **three competing sets**:

- `hhea` ascender/descender — **used by macOS**
- `OS/2` **typo** metrics — used by Microsoft apps *only when the flag below is set*
- `OS/2` **win** metrics — Microsoft's fallback, functioning as a **clipping box**

**[SOURCE SAYS]** *"If the font includes tall/deep writing systems such as Arabic or Devanagari, the winAscent and winDescent can be greater than the yMax and abs(yMin)"* — and if they are **less**, **glyphs clip on Windows**. But raising them *"can lead to very loose line heights … This mainly occurs in families featuring Vietnamese, Devanagari, **Arabic**, or other tall scripts."* The fix is **`OS/2.fsSelection` bit 7 = `USE_TYPO_METRICS`**, which forces Microsoft apps to use `Typo` values, letting a designer set `Win` tall enough to avoid clipping while controlling line height separately.

So the answer to *"why does the same line-height break Persian?"* is two-part:

1. Persian glyphs genuinely occupy more vertical space — deep bowls on **ج ح خ ع غ ی**, dots *below* the baseline (**ب پ ج چ ی**), marks *above*, tall ascenders on **ا ل ک گ**. A `line-height` tuned to Latin's band does not contain them.
2. Compounding it, a font with tall `win` metrics and **no** `USE_TYPO_METRICS` gives Windows browsers an enormous default line box — so the *same font* looks **tight on macOS and loose on Windows**. This is a font-metrics bug, not a CSS bug.

**This bites the actual candidate fonts:**

- **Vazirmatn ships `USE_TYPO_METRICS` set** — its [build script](https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/make-fonts.sh) explicitly fixes fsSelection bit 7. Good.
- **Vazirmatn ships a whole `UI` family purely for line-height** — per the upstream description, it *"provides generally smaller height to be more suitable for UI"*, and the changelog records *"Fixed height issue in the UI version"*. **[INFERENCE] For a component library — buttons, chips, table cells, form labels, anything with a fixed control height — `Vazirmatn UI` is the correct variant, not plain `Vazirmatn`.** Plain Vazirmatn is for prose.
- **Estedad had this exact bug in 2026.** Release **v8.5** notes it *"resolved vertical metric mismatches between hhea and OS/2 tables"*. **[INFERENCE] Pin ≥ v8.5**; earlier versions have known cross-platform line-height drift.

**Practical numbers.** WCAG 2.2 SC 1.4.12 requires usability at `line-height: 1.5×` — a floor for all languages, not an Arabic recommendation. Notably, **both Gulf government design systems checked do *not* differentiate Arabic from Latin metrics at all**: [Dubai](https://designsystem.dubai.ae/foundations/typography) publishes one scale (body 16/24) applied identically to both; [UAE](https://designsystem.gov.ae/guidelines/typography) uses one 1.333-ratio scale, differing only in `font-family`. **[INFERENCE]** These are existence proofs that a shared scale is shippable **if** you pick a face whose Arabic and Latin were drawn to the same vertical budget — both avoided the problem **by font choice rather than CSS overrides**. That is the strategy to copy. Practitioner rules of thumb (≈1.7–1.85 for Arabic body) exist but come from **blog posts, not primary sources**.

**Does Persian need a larger font-size than Latin? — CONTESTED, no primary source either way.** alreq §4.1 mentions font-selection considerations but **states no size relationship to Latin**. The practitioner literature **actively disagrees with itself** — some claim Arabic's larger x-height means it should be set *smaller*, others that it needs to be *larger* for tooth-and-dot legibility. **[INFERENCE] This must be resolved empirically per chosen face, not by rule.**

#### Numeral form variants — three ranges, and a bidi gotcha

Confirmed from [Unicode ch. 9](https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-9/) and alreq §6.1.2:

| Family | Range | Glyphs | Used by |
|---|---|---|---|
| European / ASCII | **U+0030–U+0039** | 0 1 2 3 4 5 6 7 8 9 | Maghreb; also widely in Iran online |
| **Arabic-Indic** | **U+0660–U+0669** | ٠ ١ ٢ ٣ ٤ ٥ ٦ ٧ ٨ ٩ | *"most of the Arabic world"* — Egypt, Saudi, Iraq |
| **Extended Arabic-Indic** ← **this is Persian** | **U+06F0–U+06F9** | ۰ ۱ ۲ ۳ ۴ ۵ ۶ ۷ ۸ ۹ | *"Afghanistan, India, Iran, and Pakistan"* |

**⚠️ THE BIDI GOTCHA — this is a layout issue, not a cosmetic one.** alreq §6.1.2 records that Arabic-Indic digits (U+0660–0669) have **Bidi_Class = AN (Arabic Number)** whereas Persian Extended digits (U+06F0–06F9) have **Bidi_Class = EN (European Number)**. **[INFERENCE]** These resolve differently under UAX #9, so **switching a component's digits between the two ranges can change the directional layout of the surrounding run**, not just glyph shapes. Any PatternFly number-formatting utility must treat "which digit range" as a **layout** decision and test it inside mixed strings (dates, versions, IDs, table cells).

Also: **[SOURCE SAYS]** Unicode notes *"for four, six, and seven, there is substantial variation between locales"* — ۴ ۶ ۷ are drawn differently in Persian vs Urdu **at the same code point**. That is what `locl` exists for.

**⚠️ THE FONT-FEATURE LANDMINE.** Both leading fonts can substitute Farsi digits, **with different tags**:

- **Vazirmatn: `ss01` = "Farsi Digits"** — its [feature file](https://raw.githubusercontent.com/rastikerdar/vazirmatn/master/scripts/farsi-digits.fea) maps both ASCII and Arabic-Indic → U+06F0–06F9, registered for FAR/KUR/URD.
- **Estedad: `ss20` = "Latin to Farsi Digits"**. Estedad's **`ss01` means "Arabic Round Dots"** — something completely different.

**[INFERENCE]** A shared token like `--pf-t--font--feature--farsi-digits: "ss01"` **will silently do the wrong thing when the font is swapped.** This must be a per-font mapping or a `@font-face`-scoped descriptor, never one global string. Note also that `font-feature-settings` is **not additive** — a child declaring `"tnum"` silently drops an inherited `"ss01"`.

**What CSS can and cannot do:**

- **`font-variant-numeric` cannot switch numeral systems.** Per [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-variant-numeric) it controls figure *style* only (lining/oldstyle, proportional/tabular, fractions, ordinal, slashed-zero). **There is no standard CSS property for switching numeral scripts.**
- **`font-feature-settings` is the only lever**, and MDN calls it *"a low-level feature designed to handle special cases where no other way exists"*.
- **`locl` will NOT convert Latin digits to Persian digits.** The [OpenType spec](https://learn.microsoft.com/en-us/typography/opentype/spec/features_ko#locl) defines it as substituting localized variants *for a given Unicode value* — one-to-one between alternate glyphs of *the same character*. **[INFERENCE]** So `lang="fa"` correctly gets you the Persian *shape* of ۴/۶/۷ — but will **not** turn `123` into `۱۲۳`.
- **`lang` and `dir` do not transliterate digits.** `lang` selects the OpenType language system (driving `locl`); `dir` drives the bidi paragraph level.

**[INFERENCE] The correct architecture:** decide numeral form in the **data/formatting layer** — `Intl.NumberFormat('fa-IR')` emits U+06F0–06F9 directly, giving code points that copy, screen-read and search correctly. Use `ss01`/`ss20` only as a visual override for content you cannot re-format, and be aware that **`ss01`-substituted digits still copy as Latin `123`** — a real accessibility and copy-fidelity problem.

**Browser bug to track:** Gap Analysis issue **#279**, severity *Advanced* — extended Arabic-Indic digits in CSS **list counter styles** get wrong glyph shapes; Blink shows Persian shapes universally, WebKit and Gecko vary. Test ordered lists in all three engines.

#### ZWNJ (U+200C) rendering quality

**Non-negotiable, per Unicode ch. 9:** *"The use of a non-joiner between two letters prevents those letters from forming a cursive connection"*, and examples *"include the Persian plural suffix"* — *"**ignoring or removing them will result in text with a different meaning, or in meaningless text**."* alreq §4.3.4.1 names it the disjoining-enforcement character.

**Properties:** General_Category **Cf (Format)** — it is **not** a space character; Bidi_Class **BN**; Script Inherited; zero combining class.

**[INFERENCE]** Stripping ZWNJ in a sanitiser, slugifier, diff, or `trim()`-style normaliser **changes the meaning of Persian text**. Every PatternFly text utility — search highlighting, truncation, `text-overflow`, copy-to-clipboard, CSV export — must be ZWNJ-safe.

**Correct rendering** requires the font to (a) contain a ZWNJ glyph so the shaper doesn't fall back, (b) give it zero advance width, (c) still produce the **final form** of the preceding letter and **initial form** of the following one.

**Two real bugs, both in Vazirmatn, seven years apart:**

1. **[Issue #7](https://github.com/rastikerdar/vazirmatn/issues/7)** (2015) — ZWNJ glyph **missing from the font entirely**, causing font fallback in Word. Fixed in v1.8.
2. **[Issue #249](https://github.com/rastikerdar/vazirmatn/issues/249)** (2022) — **the same bug regressed.** Fixed in v32.101; changelog: *"رفع نبود نیم‌فاصله در فونت‌های تولید شده"* ("fixed the absence of the half-space in the generated fonts").

**[INFERENCE] This is a regression class, not a one-off** — a build-pipeline bug that dropped the glyph from generated instances twice. **Add a ZWNJ assertion to font QA:** render `می‌رود` / `کتاب‌ها` and assert no font fallback, zero advance width, correct final form. **Since Vazirmatn is now unmaintained, nobody upstream will catch a third regression.** No ZWNJ bugs found for Estedad, Sahel, Shabnam or Noto — but absence of reports is weak evidence; test rather than assume.

**Line-break behaviour — NOT VERIFIED.** ZWNJ's `Line_Break` class could not be confirmed from a primary source; UAX #14 discusses **ZWJ** but not ZWNJ. Secondary sources **conflict** — some say it has no effect on break opportunities, others that it can act as one. **Flagged rather than resolved.** If line-breaking around ZWNJ matters to a component (truncated table cells, tags, breadcrumbs), **test empirically in all three engines**.

**Text selection — verified, and it's good news.** Gap Analysis §5.2: *"All major desktop browsers select a whole word when you double-click on it, including when the word contains ZWNJ."* Status: functioning, no gap. **[INFERENCE]** But in-page find (Ctrl+F) is a **different code path** not covered by that statement — a user typing a plain space where the text has a ZWNJ will not match. Any PatternFly search/filter component should **normalise ZWNJ (and the ي/ی, ك/ک variants) on both sides of the comparison while preserving it in the rendered DOM.**

*(Note: §3.1 below resolves the ZWNJ line-break question that this section flags as unverified — `LineBreak.txt` gives `200C ; CM`.)*

---

## 3. Persian typographic conventions

### 3.0 The authority landscape — read this first

**There is no single authority for Persian typography.** Four bodies legislate four non-overlapping things:

| Body | Legislates | Does **not** legislate |
|---|---|---|
| **فرهنگستان زبان و ادب فارسی** (the Academy) | Orthography: spelling, word-joining, spacing (فاصله‌گذاری), hamza, ezāfe | **Punctuation, numerals, encoding, dates** |
| **ISIRI** (Iranian national standards) — 6219:2002, 9147 (keyboard) | Which code points are permitted in Persian; keyboard layout | Orthography |
| **Unicode / CLDR** | Code points, normalization, bidi, locale defaults | Orthography |
| **Publishers' شیوه‌نامه‌ها / Wikipedia MoS** | Punctuation, numeral policy, date style | (nothing binding) |

**[SOURCE] The Academy explicitly disclaims punctuation**, in its own introduction:

> «همهٔ مسائل و مشکلات خطّ فارسی در این دفتر مطرح نشده و آیین‌مند کردن اموری از قبیل **نشانه‌گذاری یا سجاوندی** … در این مجموعهٔ قواعد مورد نظر نبوده است.»
> — *دستور خطّ فارسی (ویراست جدید)*, ۱۴۰۱, مقدمه بند ۳, p. 12

So **anything a design system needs about punctuation, numerals or dates is not answerable from the Academy.** Peer-reviewed confirmation that this layer is genuinely fragmented: Ahmadi Darani & Karamatian Fard reviewed **eighteen** current Persian style manuals and found *«تناقض‌های درونی، اختلاف دیدگاه‌های نویسندگان»* — systematic internal and mutual contradictions ([Isfahan University, DOI 10.22108/liar.2023.135551.2198](https://liar.ui.ac.ir/article_27287.html)).

### ⚠️ 3.0.1 The headline finding — there are two editions, and everyone cites the wrong one

**This is the most consequential single fact in this section.** Both PDFs were downloaded from apll.ir and text-extracted directly.

| | **ویراست نخست** (1st ed., 13th printing ۱۳۹۴, 58 pp.) | **ویراست جدید** (2nd ed., **۱۴۰۱**, 88 pp.) |
|---|---|---|
| Half-space (نیم‌فاصله) | **OPTIONAL** (اختیاری) | **MANDATORY** in enumerated cases |
| Spacing model | 2 kinds: برون‌کلمه / درون‌کلمه | **3 kinds: فاصلهٔ کامل / نیم‌فاصله / بی‌فاصله** |
| PDF | [D-1394.pdf](https://apll.ir/wp-content/uploads/2018/10/D-1394.pdf) | [Dastour-e-Khat-17.04.1402.pdf](https://apll.ir/wp-content/uploads/2023/07/Dastour-e-Khat-17.04.1402.pdf) |

**[SOURCE]** The old edition, §7 p. 10, verbatim: *«رعایت این نیم‌فاصله به‌ویژه در دست‌نوشته‌ها دشوار است و ازاین‌رو **اختیاری** است»* — the half-space is optional, justified by handwriting difficulty.

**The ۱۴۰۱ edition deletes that sentence entirely** and replaces it with a mandatory three-way model. Its preface says the revision was driven precisely by the typesetting problem: *«سامان دادن به امر فاصله‌گذاری در حروف‌نگاری ترکیب‌ها»*.

> **Any Persian style guide, blog post, or LLM answer claiming "the Academy says ZWNJ is optional" is quoting the superseded edition.** Cite the ۱۴۰۱ edition. Persian Wikipedia's MoS has already migrated to it.

*(apll.ir serves an incomplete TLS chain; fetching needs relaxed cert verification or the [archive.org mirror](https://archive.org/details/https__apll.ir_wp-content_uploads_2018_10_d-1394.pdf).)*

### 3.1 ZWNJ / نیم‌فاصله (U+200C)

#### The operative rule a design system needs

**[SOURCE]** The ۱۴۰۱ three-way model (§7, pp. 22–23):

- **الف) فاصلهٔ کامل** — *«فاصلهٔ طبیعی میان واژه‌ها و ترکیب‌های مستقل»*. Independent words.
- **ب) نیم‌فاصله** — for compounds whose previous part's last letter *«قابلیت اتصال به حرف بعد را دارد»* (can connect). e.g. می‌آیم، وسیع‌تر، بی‌دلیل، هم‌محل
- **ج) بی‌فاصله** — no character at all, where the previous part ends in a **non-connecting** letter. e.g. بدکنش، پرفروش، مادربزرگ، هوادار. The Academy's own note: *«خودبه‌خود فاصله‌ای حداقلی … ایجاب می‌کند و **دیگر به درج نیم‌فاصله نیازی نیست**»*

**This is the single most important operational rule.** نیم‌فاصله and بی‌فاصله are the **same orthographic decision** — the parts form one word — realised differently depending on the last letter:

| Last letter of first part | Action |
|---|---|
| **Connecting** (25 letters: ب پ ت ث ج چ ح خ س ش ص ض ط ظ ع غ ف ق ک گ ل م ن ه ی) | **Insert U+200C** |
| **Non-connecting** (7 letters: **ا د ذ ر ز ژ و**) | **Insert nothing** — the shaper already leaves a gap |

**[SOURCE]** fa-wiki states the hard constraint: *«**استفاده از نویسهٔ فاصلهٔ مجازی پس از حروف منفصل دیگر مجاز نیست**»* — a stray U+200C after ا د ذ ر ز ژ و **is an error**, and fa-wiki's bot auto-strips them ([ویکی‌پدیا:نیم‌فاصله](https://fa.wikipedia.org/wiki/ویکی‌پدیا:نیم‌فاصله)).

#### Case-by-case rulings (ویراست جدید ۱۴۰۱)

| Construction | Ruling | p. | Examples |
|---|---|---|---|
| **می‌ / همی‌** (imperfective prefix) | **ZWNJ mandatory** — *«همواره با نیم‌فاصله»* | 39 | می‌رود، می‌افکند، همی‌گوید |
| **نمی‌** | نـ attaches to می; ZWNJ before stem | 38–39 | نمی‌شود |
| **-تر / -ترین** | **Mandatory**, 6 exceptions | 40 | بزرگ‌تر، وسیع‌تر — *except* **بهتر، کهتر، مهتر، بیشتر، کمتر، کلانتر** |
| **-ها** (plural) | **BOTH forms valid**; separate merely *recommended* | 40 | Academy: *«به هر دو صورتِ پیوسته و جدا … به کار می‌رود، ولی جدانویسی آن، ازلحاظ آموزشی و همچنین **مسائل فنّی مربوط به پردازش متن**، توصیه می‌شود»* — so both کتابها and کتاب‌ها are correct |
| -ها: 6 mandatory-separate cases | **Required** | 40–41 | after foreign words (ویتامین‌ها); >3 teeth (حسّاسیت‌ها); proper names (سعدی‌ها); after ه غیرملفوظ (خانه‌ها); after یای ساکن (نی‌ها) |
| **بی‌-** (privative) | **Mandatory** + closed exceptions | 39 | بی‌دلیل، بی‌توجه — *except* بیجا، بیچاره، بیخود، بیداد، بیراه، بیزار، بیکار، بینوا، بیهوش. As a **preposition**: full space (بی هیچ چشمداشتی) |
| **هم‌-** | **Mandatory** + long exceptions | 40 | هم‌وطن، هم‌بازی — *except* همان، همراه، همسر، همکار، همیشه، همچنین… As a free word: full space |
| **به-** | Three-way | 38 | پیوسته before verbs (بروم); **ZWNJ** in adverbials (به‌خصوص، به‌سختی); **full space** as preposition (به برادرت گفتم) |
| **Attached pronouns** ـم ـت ـش ـمان | Attached; ZWNJ after ه غیرملفوظ or ی | 44 | خانه‌ام، خانه‌اش، کشتی‌ام — but کتابم، کتابت (no ZWNJ) |
| **ی نکره / مصدری** | ZWNJ after ه غیرملفوظ, ی | 46 | خانه‌ای، کشتی‌ای |
| **Copula ام/ای/ایم/اید/اند** | Attached, ZWNJ after connecting letter | 42 | خسته‌ام، خسته‌اند — but **است** takes a full space (خسته است) |
| **Prefixes, non-connecting finals** | **بی‌فاصله** (nothing inserted) | 36 | بازآفرینی، درخواست، زیرمجموعه، فرایند، ناخودآگاه، واکنش |
| **Prefixes, connecting finals** | **نیم‌فاصله** | 36 | برون‌مرزی، بوم‌شناسی، زیست‌فناوری، نیم‌بند |
| **هر** | **بی‌فاصله** (ر is non-connecting) | 34–35 | هرچند، هرکدام، هرگاه، هرگونه |
| Coordinative compounds | ZWNJ/بی‌فاصله | 63 | آب‌وهوا، رفت‌وآمد، پروبال |

#### How Persian users actually type it — and why you cannot assume they can

**[SOURCE]** fa-wiki: ZWNJ is **Shift+Space** on the standard Persian keyboard; **Ctrl+Shift+2** or Alt+0157 on the non-standard Windows layout ([ویکی‌پدیا:صفحه‌کلید فارسی](https://fa.wikipedia.org/wiki/ویکی‌پدیا:صفحه‌کلید_فارسی)).

**[SOURCE]** But **Windows' legacy "Persian" layout is not ISIRI-conformant.** Windows 8 introduced "Persian (Standard)" based on ISIRI 9147 but **shipped without Shift+Space→ZWNJ**, added later by update ([Behnam Esfahbod](http://zwnj.behnam.es/2014/02/microsoft-and-persian-keyboard-layouts.html)). The same legacy layout produces the **Arabic ي and ك** — the root cause of the normalization hazard in §3.4.

**[INFERENCE]** You cannot assume users can type ZWNJ. **Any text matching — search, filter, autocomplete, form validation — must be ZWNJ-insensitive.**

#### What breaks without it

**Meaning collisions are real. [SOURCE]** fa-wiki: «علی هر **روزنامه‌ای** می‌خواند» (*a newspaper*) vs «علی هر **روز نامه‌ای** می‌خواند» (*a letter each day*). Also خردورزی (reason) vs خُرد ورزی.

**[SOURCE]** Mozilla's Persian l10n rules: *"It's wrong to use SPACE in the middle of a word to break the joining."* ([L10n:Teams:fa/Rules](https://wiki.mozilla.org/L10n:Teams:fa/Rules))

Three concrete failures if a plain space is substituted:

1. **[DATA]** `LineBreak.txt`: `200C ; CM`. **Line_Break=CM means the compound cannot be split across lines.** A space-separated compound **can** wrap mid-word. *(This resolves the question §2.2 flagged as unverified.)*
2. **[DATA]** `WordBreakProperty.txt`: `200C ; Extend` — ZWNJ keeps the compound as **one** word for segmentation, double-click-select and word-count. A space makes it two.
3. It is orthographically wrong — a full space is reserved for independent words.

**Silently stripped by tooling is the biggest practical hazard.** U+200C is `General_Category=Cf`, `Bidi_Class=BN`. Naive "strip invisible characters" sanitizers, slug generators, CSV/DB pipelines and PDF extractors drop it. **Demonstrated during this research: `pdftotext` on the Academy's own official PDF returned ZERO U+200C characters**, though the printed pages show half-spaces throughout.

**[INFERENCE] Normalize on *comparison*, never on *storage*.** Store the ZWNJ; strip it only when building a search/sort key.

#### Where practice diverges

- **اضافی compounds — open and unresolved.** Academy (both editions): **full space** — دست کم، شورای عالی، سیب زمینی، آب میوه. fa-wiki MoS: **ZWNJ** — دست‌کم، سیب‌زمینی، آب‌میوه. **[INFERENCE]** fa-wiki appears to read the Academy's «جدا» as "not cursively joined", whereas the ۱۴۰۱ model distinguishes «جدا با نیم‌فاصله» from «جدا با فاصلهٔ کامل» and puts these in the latter. **Affects a large word class.**
- **Plural ها.** Academy: both correct. fa-wiki: forbids the full-space form. **[PRACTICE]** Modern Persian web/UI overwhelmingly writes کتاب‌ها; کتابها reads as dated despite being Academy-legal.
- **fa-wiki has voted in extra rules the Academy does not state** (prefixed verbs always take ZWNJ; coordinative compounds joined). Documented as **local consensus**, not orthographic authority.

### 3.2 Punctuation

#### The character inventory — the authority is CLDR, not the Academy

**[DATA]** `common/main/fa.xml`:

```xml
<exemplarCharacters type="punctuation">[\- ‐‑ ، ٫ ٬ ؛ \: ! ؟ . … ‹ › « » ( ) \[ \] * / \\]</exemplarCharacters>
<delimiters>
  <quotationStart>«</quotationStart><quotationEnd>»</quotationEnd>
  <alternateQuotationStart>‹</alternateQuotationStart><alternateQuotationEnd>›</alternateQuotationEnd>
</delimiters>
```

| Mark | Char | Code point | Persian-specific? | Unicode props **[DATA]** |
|---|---|---|---|---|
| Comma / ویرگول | `،` | **U+060C** | **Yes** | gc=Po, **bidi=CS**, LB=IS, WB=**MidNum** |
| Semicolon | `؛` | **U+061B** | **Yes** | gc=Po, bidi=AL, LB=EX |
| Question mark | `؟` | **U+061F** | **Yes** | gc=Po, bidi=AL, LB=EX |
| **Full stop** | `.` | **U+002E** | **NO — plain Latin period** | — |
| Colon / Exclamation | `:` `!` | U+003A / U+0021 | **NO — Latin** | — |
| Quotes / گیومه | `«` `»` | U+00AB / U+00BB | **Yes — guillemets required** | Bidi_Mirrored=**Y** |
| Nested quotes | `‹` `›` | U+2039 / U+203A | Yes | Bidi_Mirrored=Y |
| Parens / brackets | `( ) [ ]` | U+0028… | **NO — Latin** | Bidi_Mirrored=Y |
| Percent | `٪` | **U+066A** | Yes (contested — see below) | gc=Po, bidi=ET |
| Decimal / ممیز | `٫` | **U+066B** | **Yes** | **bidi=AN**, LB=NU |
| Thousands | `٬` | **U+066C** | **Yes** | **bidi=AN**, WB=MidNum |

**Answer to "is the Persian full stop `.` or something else?" — it is the plain Latin `.` (U+002E).** There is no separate Persian full stop; same for `:` `!` `(` `)` `[` `]`. **Only ، ؛ ؟ ٪ ٫ ٬ « » are Persian-specific.** **[SOURCE]** Behdad Esfahbod, *Persian Computing with Unicode* (IUC-25, 2004): *"Latin quotation marks are not allowed in Persian text and Double Angle Quotation Marks should be used instead. … Other Latin punctuation marks are allowed."* ([PDF](https://behdad.org/doc/persiancomputing-paper.pdf))

#### Two bidi traps hiding in the punctuation set

**[DATA] Trap 1 — U+060C ARABIC COMMA is `Bidi_Class=CS` and `Word_Break=MidNum`.** Those are the properties of a *numeric* separator. Placing `،` between two digit runs (`۱۲،۳۴`) makes bidi and the word segmenter treat the whole thing as **one number**. This is precisely why `٬` U+066C exists and why CLDR sets the fa thousands separator to `٬`, not `،`.

**[DATA] Trap 2** — the EN/AN split already covered in §2.2: Persian digits behave in bidi like Latin digits; Arabic-Indic digits do not.

#### Quotation-mark ordering — settled empirically

**[DATA]** Both `«` and `»` are `Bidi_Mirrored=Y` and paired in `BidiMirroring.txt`, so visual appearance is renderer-determined. But the **logical** order in real corpora is unambiguous: a scan of **281 quote pairs** across three Persian Wikipedia policy pages found **every single one** opens with U+00AB and closes with U+00BB, matching CLDR.

**[INFERENCE] Store `«` = U+00AB as opening and `»` = U+00BB as closing, in logical order. NEVER swap them programmatically for RTL — that double-flips.** Same for parentheses and brackets.

#### Spacing around marks

The Academy is silent. The consistent rule across editorial style guides (**[SOURCE]** [کتاب جمکران](https://ketabejamkaran.ir/editorialmanual/), [utype.ir](https://utype.ir/docs/نگارش-فارسی/نشانه-گذاری/)) is **identical in shape to Western practice**:

- `. ، ؛ ؟ : !` → no space before, one space after
- `« ( [` → one space before, no space after
- `» ) ]` → no space before, one space after
- `٫ ٬ ٪` → no spaces at all

**[SOURCE]** fa-wiki forbids `/` as a decimal or thousands separator: *«**نباید** از نویسهٔ / … استفاده کرد، بلکه باید از نویسهٔ ممیز فارسی (٫) استفاده کرد»*. **[PRACTICE]** But `/` as decimal point (`۲/۵` for 2.5) is **extremely common** in everyday Iranian writing — which is why CLDR's Persian guidance says it out loud. A genuine authority-vs-practice split.

### 3.3 Numeral policy — the loudest live disagreement

#### What CLDR sets as the fa default

**[DATA]** `common/main/fa.xml`: `<defaultNumberingSystem>arabext</defaultNumberingSystem>` — **`arabext` = U+06F0–U+06F9 (۰۱۲۳۴۵۶۷۸۹)**. So `Intl.NumberFormat('fa')`, ICU, Android, iOS and anything CLDR-backed renders **Persian digits by default**.

**[DATA]** Symbols (fa overrides marked ✎): decimal `٫` U+066B · group `٬` U+066C · list `؛` · percent `٪` U+066A · **plusSign ✎ `‎+` = U+200E U+002B** · **minusSign ✎ `‎−` = U+200E U+2212** (MINUS SIGN, **not** hyphen) · perMille `؉` · nan ✎ `ناعدد`.

> **[INFERENCE]** Note the **U+200E LRM prefix** on the sign characters. A design system that hand-rolls `"-" + number` for negatives in fa produces a **bidi-unstable string**. Use `Intl.NumberFormat`.

**[DATA]** fa's number exemplar set deliberately contains **both** families — `[… 0۰ 1۱ 2۲ … 9۹]`. **CLDR expects Latin digits to occur in Persian text.**

#### What the standards prescribe

**[SOURCE]** [CLDR's Persian style guide](https://cldr.unicode.org/translation/language-specific/persian), citing **ISIRI 6219**:

> *"For digits, use **U+06F0..U+06F9 ۰۱۲۳۴۵۶۷۸۹** (and not U+0660..U+0669). For decimal separator, use **U+066B ٫** (and not /). For thousands separator, use **U+066C ٬**."*

#### Where each is conventional — no authority speaks with one voice

**Position 1 — "script of the digit follows the script of the run."** **[SOURCE]** Behdad Esfahbod (IUC-25), the most explicit primary statement found and the only implementable formulation:

> *"In Iran people always read and write Persian digits. This means that **page numbers, section numbers, monetary values, font sizes, spreadsheet cells, are all supposed to be in Persian digits.** … In Iran people read and write **western digits in a Latin context.** … So **turning all western digits into Persian digits automatically is not an option.** … **Arabic-Indic digits should not be used in Persian text.**"*

**Position 2 — fa-wiki MoS:** Persian digits mandatory; **spell out 0–9 in words** in prose («دو گربه و سه سگ»); digits **never** spelled out in formulas; proper names never changed (خیابان ۱۷ شهریور); ordinals in words (✓ پنجم, ✗ ۵ام).

**Position 3 — publisher guides:** split by density — Persian digits for technical/tabular, Persian **words** for prose with few numbers.

**Position 4 — de facto software practice: Latin digits.** **[SOURCE]** Behdad on *why*: *"Microsoft software does not interpret Persian digits characters as numerical data yet. As a consequence they have put western digits on their Persian keyboard … and finally **you see Persian sites with western digits typed in everywhere.**"* Twenty years on, the habit persists.

#### Context-by-context

| Context | Recommendation | Basis |
|---|---|---|
| **Code, identifiers, CLI, config** | **Latin 0–9, always** | **[INFERENCE]** — Latin-script runs; Persian digits invalid in most grammars |
| **Version numbers** (`v5.2.1`) | **Latin** | **[INFERENCE]** — identifiers, not quantities; the `.` would be ambiguous against `٫` |
| **Technical prose** | **Persian digits** | **[SOURCE]** CLDR/ISIRI |
| **UI numerics — counts, badges, table cells, pagination** | **Persian digits by default** | **[DATA]** `defaultNumberingSystem=arabext` |
| **Form inputs** | **Accept both; normalize on parse** | **[INFERENCE]** — `<input type="number">` rejects Persian digits outright |
| **Dates** | **Persian digits** | **[SOURCE]** fa-wiki + CLDR |
| **Phone numbers** | **Contested — no authority found.** Display per locale, store ASCII | **[PRACTICE]** |

**Percent sign — fa-wiki contradicts itself.** **[DATA]** CLDR's `#,##0%` makes it a **suffix in logical order**, rendering **left** of the digits in an RTL run; **[SOURCE]** alreq §6.1.4 and fa-wiki's numbers MoS agree. **[SOURCE]** But fa-wiki's *punctuation* page says *«**اجماعی در خصوص برتری یکی از این دو روش نسبت به دیگری وجود ندارد**»* — no consensus exists. Both pages are fa-wiki. **[SOURCE]** Both fa-wiki and کتاب جمکران agree to use the **word** «درصد» in non-technical prose and reserve `٪` for technical text and tables.

### 3.4 Ezāfe marking — and the highest-severity technical finding in this document

#### What the Academy prescribes

**[SOURCE]** *دستور خطّ فارسی (ویراست جدید)*, «کسرۀ اضافه», p. 47 — a three-way ruling:

1. **Default: write nothing.** *«نشانهٔ کسرهٔ اضافه در خط آورده نمی‌شود»* — کتاب من, not کتابِ من.
2. **Obligatory exception — word ends in silent ه** → write **ۀ**: خانۀ او، برنامۀ روزانه، رانندۀ ماهر.
3. **Optional exception — to disambiguate**: حکومتِ نظامی vs حکومت‌نظامی.

Words ending in *pronounced* ه, or in hamza, take a kasre but *«گذاشتن این کسره در نگارش الزامی نیست»* — writing it is **not** obligatory.

**⚠️ Crucial footnote on p. 47 — the Academy answers the encoding question itself:**

> «این علامت **کوتاه‌شدهٔ «ی» (یای کوتاه)** است و **نباید آن را با نشانهٔ همزه اشتباه گرفت**.»
> *("This sign is a shortened form of «ی» (short yeh) and must not be confused with the hamza sign.")*

**[SOURCE]** CLDR agrees and extends it: *"Always write the ezafe over he, if it's pronounced. For example, use **مقدونیهٔ شمالی** for North Macedonia."*

#### ⚠️ The U+06C0 trap — no normalization form reconciles it

There are two ways to encode ۀ. **They are not Unicode-equivalent under ANY normalization form.**

**[DATA]** From `UnicodeData.txt`:
```
06C0;ARABIC LETTER HEH WITH YEH ABOVE;Lo;0;AL;06D5 0654;…
06D5;ARABIC LETTER AE;Lo;0;AL;;…
```
**U+06C0's canonical decomposition is `06D5 0654` — ARABIC LETTER *AE*, a Kurdish/Uyghur letter, not Persian heh.**

**[DATA]** All four forms verified:
```
NFC   U+06C0 → [U+06C0]           | <0647,0654> → [U+0647, U+0654]
NFD   U+06C0 → [U+06D5, U+0654]   | <0647,0654> → [U+0647, U+0654]
NFKC  U+06C0 → [U+06C0]           | <0647,0654> → [U+0647, U+0654]
NFKD  U+06C0 → [U+06D5, U+0654]   | <0647,0654> → [U+0647, U+0654]
```
**Equal under any normalization form: NO.**

Three independent authorities say use the sequence:

- **[SOURCE] Unicode ch. 9:** *"When the hamza occurs over a heh, **do not represent this with U+06C0** … because U+06C0 decomposes to a heh form not used in Persian or Urdu"*; use `<U+0647, U+0654>`.
- **[SOURCE] CLDR:** *"For ezafe over he, use `<U+0647, U+0654>` هٔ (**and not U+06C0**)."*
- **[SOURCE] Behdad (IUC-25):** *"**when search engines break down the sequence, they will not be able to process this sequence correctly for Persian.** … even in WinXP, the U+06C0 has been mapped on the Persian keyboard … so **the user unknowingly propagates this error.**"*

**[DATA] CLDR practices what it preaches:** `fa.xml` contains **0** occurrences of U+06C0 and **114** of the `<U+0647, U+0654>` sequence.

**[INFERENCE]** `خانهٔ` from a legacy Windows keyboard and `خانهٔ` from an ISIRI keyboard **look identical, are byte-different, and `String.prototype.normalize()` will not equate them in any form.** Search, sort, dedupe and i18n key lookup all silently mismatch. **This requires a hand-written fold table.**

#### The ی/ي and ک/ك hazard — same class, larger blast radius

**[SOURCE] CLDR, normative:** *"For **kaaf**, use U+06A9 ک (and not U+0643 ك). For **ye**, use U+06CC ی (and not U+0649 or U+064A)."*

**[SOURCE] Unicode ch. 9** explains why substitution goes unnoticed: Farsi Yeh is *"**exactly like U+0649 ALEF MAKSURA in final and isolated forms, but exactly like U+064A ARABIC YEH in initial and medial forms**"* — contextually identical to two different Arabic letters.

**[SOURCE] Behdad** on how the corruption spread: *"the Persian Yeh is also **mapped incorrectly on the keyboard layout in Microsoft Windows products** … **you see more than a half of Persian web pages use Arabic Yeh** … making it **impossible to search the content using any search engine**."*

**[DATA]** These are *separate letters* — no decomposition, no equivalence under any normalization form. CLDR's fa exemplars encode it correctly: `ک` and `ی` in the **main** set; `ك` and `ىي` in the **auxiliary** set. `fa.xml` contains 4093 × U+06CC vs 1 × U+064A.

**Required fold for any fa-IR design system [INFERENCE]:**

```
U+064A ي  → U+06CC ی           (Arabic yeh → Farsi yeh)
U+0649 ى  → U+06CC ی           (alef maksura → Farsi yeh)  [except in quoted Arabic]
U+0643 ك  → U+06A9 ک           (Arabic kaf → keheh)
U+06C0 ۀ  → U+0647 U+0654 هٔ    (precomposed → sequence)
U+0660–U+0669 → U+06F0–U+06F9  (Arabic-Indic → Persian, display)
U+06F0–U+06F9 → U+0030–U+0039  (Persian → ASCII, for parsing)
U+200C → ∅                     (search keys ONLY, never storage)
```

**[SOURCE]** Behdad flags the exception: the Arabic letters *"are allowed to appear in Persian documents when quoting Arabic text."* So this is a **search/index-key transform, not a content transform.**

#### Ezāfe changes month names — directly relevant to date components

**[SOURCE] CLDR:** *"**stand-alone patterns (LLLL etc) are localized without ezafe, while formatting patterns (MMMM etc) are localized with ezafe.**"* — January 12 is ۱۲ ژانویه but January 2019 is **ژانویهٔ ۲۰۱۹**.

**[DATA] Verified in `fa.xml`:** format wide months are `ژانویهٔ فوریهٔ … ژوئیهٔ` (with ezāfe); stand-alone wide are `ژانویه فوریه … ژوئیه` (without).

**[INFERENCE]** A design system that hard-codes **one** month-name array, or uses `LLLL` where `MMMM` is required, **produces grammatically wrong Persian dates.**

### 3.5 Dates and calendars

**Official status. [SOURCE]** Solar Hijri (هجری شمسی / خورشیدی) is the **sole official calendar of Iran**, adopted by law on ۱۱ فروردین ۱۳۰۴ (31 March 1925) by the fifth مجلس. The year begins on the first day of spring. Gregorian (میلادی) and Lunar Hijri (قمری) are secondary.

**[DATA] CLDR `supplementalData.xml`:**
```xml
<calendarPreference territories="AF IR" ordering="persian gregorian islamic islamic-civil islamic-tbla"/>
<firstDay day="sat" territories="… IR …"/>
<weekendStart day="fri" .../> <weekendEnd day="fri" territories="AF IR"/>
```

> **Three defaults a date component will get wrong:** the default calendar is **persian**; the week starts **Saturday (شنبه)**; and the weekend is **Friday only — a single-day weekend**, unlike almost every other locale. **[INFERENCE]** Any date picker hard-coding a Sunday/Monday week start or a two-day weekend is wrong for fa-IR.

**[DATA] Persian-calendar patterns in fa:** `short` = `y/M/d` (۱۴۰۴/۵/۹) · `medium`/`long` = `d MMM y` / `d MMMM y` (۹ مرداد ۱۴۰۴).

**⚠️ [DATA] A CLDR anomaly worth reporting upstream:** the **gregorian** `full` pattern in fa is `EEEE d MMMM y` (correct), but the **persian** `full` pattern is `y MMMM d, EEEE` — a differently-ordered pattern. Verified at byte level; no bidi controls involved. **The two calendars genuinely carry different full patterns.** Test this.

**[DATA] Era names:** persian → هجری شمسی / ه‍.ش. · islamic → هجری قمری / ه‍.ق. · gregorian → میلادی / م.

#### Month names — Iran and Afghanistan are completely different

| # | **Iran (fa)** | **Afghanistan (fa_AF)** | days |
|---|---|---|---|
| 1 | فروردین | حَمَل | 31 |
| 2 | اردیبهشت | ثور | 31 |
| 3 | خرداد | جَوزا | 31 |
| 4 | تیر | سرطان | 31 |
| 5 | مرداد | اسد | 31 |
| 6 | شهریور | سُنبُله | 31 |
| 7 | مهر | میزان | 30 |
| 8 | آبان | عقرب | 30 |
| 9 | آذر | قوس | 30 |
| 10 | دی | جَدْی | 30 |
| 11 | بهمن | دلو | 30 |
| 12 | اسفند | حوت | 29–30 |

Iran uses Zoroastrian/Old-Persian names; **Afghanistan uses the Arabic zodiac names.** Gregorian month names differ too — Iran's are French-derived (ژانویه، فوریه، مارس), Afghanistan's English-derived (جنوری، فبروری، مارچ). **[DATA]** Minor note: CLDR `fa_AF.xml` stores month 6 as `سنبلهٔ` with a trailing ezāfe, which looks like a **data error** given the other eleven have none.

**[SOURCE]** fa-wiki also standardises two spellings: **اردیبهشت** (not اردی‌بهشت) and **مرداد** (not امرداد).

#### Date format — another live disagreement

| Position | Format | Source |
|---|---|---|
| **A — CLDR + real-world practice** | `y/M/d` → **۱۴۰۴/۰۵/۰۹** | **[DATA]** CLDR `short`. **[PRACTICE]** Near-universal on Iranian forms, IDs, receipts, websites |
| **B — fa-wiki MoS** | **۲۹ آذر ۱۳۹۵** — day in digits, month in words, 4-digit year | **[SOURCE]** *«از اسلش برای جدا کردن اجزای تاریخ استفاده نکنید»* — **slashes explicitly forbidden** |

**fa-wiki explicitly forbids exactly the format CLDR ships as `short` and that Iranians actually use.** **[INFERENCE]** The reconciliation is that they address different **registers** — fa-wiki legislates encyclopedic *prose*; CLDR's `short` is the *compact/tabular* form. A design system needs both, mapped to `dateStyle: 'long'` and `dateStyle: 'short'`.

**Other [SOURCE] fa-wiki date rules:** ranges use «تا» in prose; numeric ranges are written **left-to-right** with an EN dash and the larger number on the right (`۴۴–۱۳۴۳`); times are colon-separated (۱۳:۳۸:۰۹), 24-hour zero-padded, `۰۰:۱۰` not `۲۴:۱۰`; one calendar per article.

**[SOURCE]** ISO 8601 has **no Solar Hijri profile** — it is used in Iran for machine-readable exchange applied to **Gregorian** dates. **[INFERENCE]** APIs should exchange ISO-8601 Gregorian and convert at the presentation layer.

### 3.6 Consolidated disagreement register

| # | Question | Position 1 | Position 2 | Status |
|---|---|---|---|---|
| D1 | Is ZWNJ mandatory? | **Academy ۱۴۰۱:** mandatory in enumerated cases | **Academy ۱۳۹۴:** «اختیاری» | **Resolved by recency** — but most secondary literature still cites the old ruling |
| D2 | Plural `ها` | **Academy:** both correct | **fa-wiki:** never a full space | Open, low stakes |
| D3 | اضافی compounds | **Academy:** full space (سیب زمینی) | **fa-wiki:** ZWNJ (سیب‌زمینی) | **Open** — affects a large word class |
| D4 | Percent-sign side | CLDR + alreq + fa-wiki numbers MoS: suffix | **fa-wiki punctuation page: «اجماعی … وجود ندارد»** | **Open — fa-wiki contradicts itself** |
| D5 | Decimal separator | CLDR/ISIRI/fa-wiki: `٫`, `/` forbidden | **[PRACTICE]** `/` widespread | **Authority vs practice** |
| D6 | Digit family in UI | CLDR/ISIRI/fa-wiki: Persian ۰–۹ | **[PRACTICE]** Latin 0–9 very common | **Live and loud** |
| D7 | Numbers 0–9 in prose | fa-wiki + publishers: spell out | CLDR/Unicode silent | Only style guides speak |
| D8 | Date format | CLDR `y/M/d` + practice | fa-wiki: slashes **forbidden** | **Open** — register-dependent, support both |
| D9 | Ezāfe encoding | Unicode + CLDR + ISIRI: `<U+0647,U+0654>` | Legacy Windows keyboard emits U+06C0 | **Settled; corpus contaminated** |
| D10 | ی / ک encoding | Unicode + CLDR + ISIRI: U+06CC, U+06A9 | Legacy MS keyboard + >50% of older Persian web | **Settled; corpus contaminated** |
| D11 | Punctuation authority | Academy: **explicitly out of scope** | 18 competing style guides with documented contradictions | **Structurally unresolvable** — pick one and document it |

---

## 4. Existing Persian UI vocabulary

> **Nothing in this section is invented.** Every Persian term was copied out of a named primary source — shipped localization files fetched directly, not summaries. Where no established term exists, the entry says **"no established term found"**. A later ticket makes that call.

**Sources** (21 fetched directly): WordPress fa glossary (2,571 entries) · Mozilla firefox-l10n `fa/` · GNOME/GTK `po/fa.po` (1,783 entries, complete ARIA role set) · KDE `kconfigwidgets` fa · AOSP `values-fa` (2,402 strings) · Material Components Android `values-fa` · **Google TalkBack `values-fa`** (Persian screen-reader role names) · **Chromium `generated_resources_fa.xtb`** (10,615 strings) · Microsoft fa-IR Style Guide PDF · Ant Design / Element Plus / Vuetify / MUI-X / PrimeLocale fa locales · Persian Wikipedia · **فرهنگستان's official approved-words wiki** · Persian-HIG · **Sonnat Design System** · a published Persian UX glossary.

### 4.0 Two headline findings

#### ⚠️ Finding 1 — Persian UI vocabulary splits into three mutually incompatible registers

**Register choice must precede word choice.** These registers disagree on almost every term:

| Register | Who writes it | "icon" | "menu" | "checkbox" |
|---|---|---|---|---|
| **A. Purist / free-desktop** (GNOME, KDE, FarsiWeb, فرهنگستان) | volunteer & academic translators | شمایل / نقشک | گزینگان | جعبهٔ تیکی |
| **B. Big-vendor localization** (Google, Microsoft, Mozilla) | paid professional localizers | نماد | منو / فهرست | چارگوش انتخاب |
| **C. Iranian product & design industry** (Divar/Sonnat, WordPress fa, dev community) | working designers & devs | آیکون | منو | **چک‌باکس** |

**Register C — what actual Iranian product teams speak — is heavily loanword-based.** For a design system aimed at Iranian practitioners that is the right target, and it means accepting مودال، تب، اسلایدر، چیپس، فیلتر، دیالوگ، کامپوننت، لیبل، گرید. **[INFERENCE]** Register A terms (گزینگان، شمایل، سرنده، بیرق، نقشک) *"will read as archaic or comical to an Iranian product designer."*

#### ⚠️ Finding 2 — فرهنگستان offers nothing for components. There is no authority to defer to.

The Academy's official approved-words wiki was queried directly. It has approved terms for **1990s desktop vocabulary** and for **zero modern UI component names**.

**Confirmed to have NO approved term at all** (each queried; zero hits in the رایانه و فنّاوری اطلاعات domain): *modal, card, dialog box, check box, radio button, slider, widget, wizard, tooltip, breadcrumb, accordion, badge, dropdown, tab (UI sense), pagination, notification, toast, avatar, banner, sidebar, header, footer, form (computing sense).*

Where it *has* ruled, software mostly ignored it — and **that gap is itself a finding worth recording:**

| English | فرهنگستان approved | Does software use it? |
|---|---|---|
| window | **پنجره** | ✅ universal |
| toolbar | **نوارابزار** | ✅ universal |
| browser / cursor / template | مرورگر / مکان‌نما / الگو | ✅ yes |
| link | **پیوند** | ✅ yes — a rare win |
| **menu** | گزینگان | ❌ **No.** Only KDE + Persian-HIG. fa-wiki `insource:` — گزینگان **2** hits vs منو **1,088** |
| **icon** | نقشک | ❌ **No.** Essentially unused by anyone |
| **interface** | واسط | ❌ **No.** Industry-universal is **رابط** (رابط کاربری = UI) |
| **scroll bar** | نوار نَوَرد | ❌ **No.** GTK: نوار لغزش; fa-wiki: نوار پیمایش |
| **password** | اسم رمز | ❌ **No.** Everyone: گذرواژه / رمز عبور |
| **search engine** | جویشگر | ❌ **No.** Everyone: موتور جستجو |

#### The most relevant source found: Sonnat (سنّت), Divar's published design system

[sonnat.design](https://www.sonnat.design/) · [github.com/sonnat/sonnat-ui](https://github.com/sonnat/sonnat-ui) — **the only publicly documented Persian design system found.** It has real Persian component documentation and is the closest existing prior art to this project. Digikala, Snapp, Cafe Bazaar, Tapsell and Zarinpal were all checked: **their design systems are internal and unpublished.**

### 4.1 The required terms

**"Most widespread"** is a judgement from convergence across independent shipped localizations, weighted toward Iranian industry usage. Where sources genuinely disagree the row says **CONTESTED** and **all competing terms are reported**.

| Concept | Persian term(s) found | Translit. | Sources | Most widespread | Notes |
|---|---|---|---|---|---|
| **Modal** | مودال · مدال · پنجرهٔ مودال · دیالوگ مُدال | modāl | fa-wiki article title **پنجره مودال**; Sonnat ("مُدال‌ها", "دیالوگ‌های مُدال"); Aslani glossary | **مودال** | ⚠️ **LOANWORD DOMINATES.** Two spellings compete: مودال (commoner online) vs مدال (Sonnat) — note **مدال is homographic with "medal"**. **No native coinage exists in any shipped software.** |
| **Card** | کارت | kārt | Chromium ("کارت پیش‌نمایش"); Sonnat `Card`; Aslani | **کارت** | ✅ Settled. Same word as physical/payment card; context disambiguates. No competing term found. |
| **Toolbar** | نوار ابزار | navār-e abzār | WordPress; GTK; Microsoft; **فرهنگستان approved**; Sonnat | **نوار ابزار** | ✅ **Highest-confidence term in this document** — native, approved, and universally used. |
| **Breadcrumb** | بردکرام · بردکرامب · نوار موقعیت · مسیر راهنما · خرده‌نان | bredkerām(b) | Sonnat component page **بردکرام**; fa-wiki article **بردکرامب**; Element Plus `breadcrumb.label` = **مسیر راهنما**; Aslani | **بردکرامب / بردکرام** | ⚠️ **LOANWORD DOMINATES** — both Persian Wikipedia *and* Divar chose it. مسیر راهنما and نوار موقعیت are real but minority. خرده‌نان is a literal calque, rare. |
| **Dropdown** | منوی کشویی · فهرست کشویی · کشویی · جعبهٔ بازشونده | (meno-ye) keshuyi | WordPress `dropdown = کشویی`; Element Plus; TalkBack `combobox` = **فهرست کشویی**; GTK; fa-wiki **فهرست کشویی (در نرم‌افزار)** | **منوی کشویی / فهرست کشویی** | ✅ **Native term won here.** کشویی ("sliding") is stable across every source. Loanword دراپ‌داون exists in speech but scored **0** on fa-wiki and appears in **no** shipped localization. |
| **Wizard** | جادوگر · ویزارد · دستیار | jādugar · vizārd | KDE fa (obsolete) **جادوگر گزارش اشکال**; Mozilla `wizard.ftl` translates only the *buttons*, never the word | **CONTESTED — weak; effectively no established term** | ⚠️ **Neither Mozilla nor Microsoft nor Google names the pattern in Persian.** جادوگر is a literal calque ("magician") that reads oddly; ویزارد is the spoken loanword. |
| **Empty state** | حالت خالی — *as a component name:* **no established term found** | hālat-e khāli | Every source translates the *message*, never the pattern | **no established term found** | The standard *copy* is highly converged: **داده‌ای موجود نیست** (Ant + Vuetify + Element Plus, independently). Use that string; the pattern name is unnamed. |
| **Toast** | **no established term found** · اسنک‌بار · توست · پیام‌گیر | esnak-bār | Aslani "Snackbars / پیام‌گیر" (that glossary's own coinage); Sonnat ships `Snackbar` with **no Persian doc page** | **no established term found** | ⚠️ **Genuine gap.** Devs say اسنک‌بار or توست; neither appears in any shipped localization. پیام‌گیر is one author's invention, not established. |
| **Tooltip** | راهنمای ابزار · نکته‌ابزار · تولتیپ | rāhnamā-ye abzār | Sonnat component page **راهنمای ابزار**; GTK `tool tip` = **راهنمای ابزار**; AOSP = **نکته‌ابزار** | **راهنمای ابزار** | ✅ Good confidence — Divar and GNOME **independently converged**. Android's نکته‌ابزار is a Google-only outlier. تولتیپ scored **0** on fa-wiki and appears in no shipped source. |
| **Primary / Secondary / Tertiary** | اصلی · اولیه / ثانویه · فرعی · دوم / — | asli / sānaviye | WordPress `primary = اصلی، اولیه`, `secondary = دوم، فرعی`; **Sonnat does not use this axis at all** | **اصلی / ثانویه**; **tertiary — no established term found** | ⚠️ **Structural finding: the Iranian design industry's own design system doesn't use primary/secondary/tertiary.** Sonnat uses an **emphasis scale** — درجهٔ اهمیت بالا/متوسط/پایین — with shapes توپُر (filled) / توخالی (outlined) / متنی (inlined). If the three-tier naming is kept, **ثانویه** fits better than دوم/فرعی (which read as "second"/"sub"). |
| **Data list** | **no established term found** | — | Sonnat's nearest is **ردیف داده** (`InfoRow`); generic list = **فهرست** | **no established term found** | Generic "list" is settled as **فهرست**. *DataList* as a distinct component has no Persian name. |
| **Chip** | چیپس · چیپ | chips | Sonnat component page **چیپس** (`Chip`, `ActionChip`, `ChoiceChip`, `RemovableChip`) | **چیپس** | ⚠️ **LOANWORD DOMINATES.** Note Divar chose **چیپس** (everyday Persian for *potato crisps*) over چیپ (*silicon chip*). A real, shipped, documented choice — **but it is one source. Low consensus.** Distinct from **Tag = برچسب**, which Sonnat deliberately separates. |
| **Skeleton** | اسکلتون · لودینگ اسکلتی · اسکلت | eskeleton | Persian dev writing only; Sonnat ships `Skeleton` with **no Persian doc page** | **اسکلتون / لودینگ اسکلتی** | ⚠️ **LOANWORD DOMINATES**, but **no localization-glossary source at all** — evidence is community blog posts. **Weak establishment.** |
| **Button** | دکمه | dokme | WordPress, GTK, AOSP, TalkBack, Chromium (82×), Microsoft, فرهنگستان, Sonnat | **دکمه** | ✅ **Universal — zero disagreement across all 21 sources.** |
| **Form** | فرم | form | WordPress; Sonnat; Chromium (24×); Aslani | **فرم** | ✅ Settled loanword, fully naturalized. ⚠️ **GTK `fa.po` has a bug** — the ARIA role `form` is mistranslated as **از** ("from"). Do not copy GTK here. |
| **Navigation** | راهبری · ناوبری · پیمایش · هدایت | rāhbari / nāvbari | Sonnat section **راهبری**; WordPress `navigation = راهبری`; GTK = **ناوبری**; fa-wiki **نوار ناوبری**; TalkBack uses **پیمایش** for the *act* | **CONTESTED: راهبری vs ناوبری** | Split by register. **راهبری** = WordPress + Divar (industry). **ناوبری** = GNOME + fa-wiki (encyclopedic/FOSS). **پیمایش** is the verb, not the noun. A real decision, not a lookup. |
| **Pagination** | صفحه‌بندی | safhe-bandi | fa-wiki article; Aslani; Element Plus + Vuetify + Ant all ship pagination strings | **صفحه‌بندی** | ✅ Settled, native. |
| **Tab** | زبانه · تب · نوار تب | zabāne / tab | Chromium **زبانه ×572**; GTK, Firefox, WordPress, Microsoft all **زبانه**; **Sonnat component titled نوار تب**, body uses **تب‌ها** | **CONTESTED: زبانه (platform) vs تب (product design)** | ⚠️ **Sharpest split in the dataset.** *Browser* tabs are **زبانه** everywhere — total vendor convergence. But the *component* in the Iranian design industry is **تب**. |
| **Accordion** | آکاردئون · گسترنده | ākārdeon | Sonnat `AccordionRow` = **ردیف آکاردئون**; GTK `expander` = **گسترنده** | **آکاردئون** | ⚠️ **LOANWORD DOMINATES.** گسترنده refers to GTK's narrower `expander` widget. |
| **Checkbox** | چک‌باکس · چارگوش انتخاب · کادر انتخاب · جعبهٔ تیکی · جعبه بررسی | chek-bāks | Sonnat **چک‌باکس**; MUI-X **چک‌باکس انتخاب**; TalkBack **چارگوش انتخاب**; GTK **جعبهٔ تیکی**; fa-wiki **جعبه بررسی** | **چک‌باکس** (industry); **چارگوش انتخاب** (Google) | ⚠️ **LOANWORD DOMINATES in the design/dev register.** **Five different native coinages exist and none agree with each other** — which is itself the evidence that no native term won. fa-wiki's جعبه بررسی is a poor translation ("inspection box"). |
| **Radio (radio button)** | دکمهٔ رادیویی | dokme-ye rādioyi | Sonnat; TalkBack; fa-wiki article; GTK | **دکمهٔ رادیویی** | ✅ **Total convergence** — Google, GNOME, Wikipedia and Divar all identical. High confidence. |
| **Switch (toggle)** | کلید · دکمهٔ تغییر وضعیت | kelid | Sonnat **کلید (Switch)**; GTK `switch` = **کلید**, `toggle button` = **دکمهٔ تغییر وضعیت**; WordPress | **کلید** (component) / **تغییر وضعیت** (action) | ✅ Good confidence — Divar and GNOME independently chose **کلید**. Loanword سوییچ exists in speech but in no shipped source. |
| **Slider** | اسلایدر · لغزنده · سرنده | eslāydar / laghzande | Sonnat **اسلایدر محدوده**; WordPress lists **both**; Element Plus + TalkBack = **لغزنده**; GTK = **سرنده** | **CONTESTED: لغزنده (localization) vs اسلایدر (design industry)** | ⚠️ **لغزنده** wins in shipped software; **اسلایدر** wins in Iranian product-design docs. GTK's سرنده is an isolated coinage (7 fa-wiki hits) — ignore. ⚠️ **Watch out: "اسلایدر" in Iranian web-agency speech usually means a *carousel*, not a range input.** |
| **Badge** | نشان · نشانگر · بج | neshān | Sonnat component **نشان و نشانگر** — نشان = badge with text, نشانگر = dot indicator; Vuetify `badge` = **نشان**; Aslani | **نشان** | ✅ Good confidence. **Sonnat's نشان / نشانگر split (text badge vs dot) is a useful precedent PatternFly can reuse.** |
| **Alert** | هشدار | hoshdār | GTK `alert` = **هشدار**; Chromium **هشدار ×38**; WordPress `warning = هشدار`; AOSP | **هشدار** | ✅ Universal. ⚠️ **But هشدار also carries "warning" — Persian does not distinguish alert/warning lexically**, which directly affects PatternFly's alert variants (info/success/warning/danger). |

### 4.2 Additional terms

| Concept | Terms found | Most widespread | Notes |
|---|---|---|---|
| Menu | منو · فهرست · گزینگان | **منو** | Three-way. گزینگان approved but used essentially nowhere. فهرست is ambiguous (also "list"/"index"). |
| Sidebar | نوار کناری · منوی کناری | **نوار کناری** | ✅ Settled (WordPress + GTK + Sonnat). |
| Header | سربرگ · هدر · سرصفحه · سرایند · عنوان | **CONTESTED — sense-dependent** | Page header = سربرگ/هدر; **table column header = سرایند ستون (GTK) / سرصفحه ستون (TalkBack)**; heading = عنوان. **Do not conflate.** |
| Footer | پابرگ · فوتر · پاورقی | **پابرگ** / **فوتر** (spoken) | Only one glossary source. Weak. |
| Search | جستجو · جست‌وجو | **جستجو** | ✅ Universal. Orthography split: جستجو (Google, industry) vs جست‌وجو (GNOME, careful editorial) — **pick one for the style guide.** |
| Filter | فیلتر · پالایش · صافی | **فیلتر** | ⚠️ LOANWORD DOMINATES — every shipped component library uses فیلتر. |
| Sort | مرتب‌سازی | **مرتب‌سازی** | ✅ Universal. Ascending = **صعودی**, descending = **نزولی** (converged). |
| Table | جدول | **جدول** | ✅ Universal. Row = ردیف/سطر, column = ستون, cell = سلول. |
| Icon | آیکون · نماد · شمایل · نقشک · آیکن | **CONTESTED: آیکون (industry) vs نماد (Google/MS)** | ⚠️ **Five-way split — messiest term in the set.** Google and Microsoft both ship **نماد**; WordPress, Divar and the design community say **آیکون**; فرهنگستان says نقشک, used by nobody. |
| Avatar | آواتار · نیم‌رخ · تصویر کاربر | **آواتار** | WordPress's نیم‌رخ is idiosyncratic. |
| Progress bar | نوار پیشرفت · نشانگر پیشرفت | **نوار پیشرفت** (bar) / **نشانگر پیشرفت** (umbrella) | ✅ Non-conflicting. **Sonnat uses نشانگر as the family name with خطی/دایره‌ای/نقطه‌ای variants — good precedent.** |
| Spinner / Loading | در حال بارگذاری · لودینگ | **در حال بارگذاری** (copy); **no established term for the component** | State copy fully converged; the component is unnamed. |
| Notification | اعلان · آگاه‌سازی · اطلاعیه | **اعلان** | ✅ Strong — Google + Mozilla + Android all اعلان. |
| Banner | بنر · بیرق | **بنر** | GTK's بیرق ("flag/standard") is GNOME purism nobody else uses. |
| Popover | **no established term found** · پنجرهٔ بازشو | **no established term found** | Only the "pop-up" family (بازشو) has Persian. |
| Drawer | کشو · برگ زیرین · برگ کناری | **CONTESTED — weak** | ⚠️ Element Plus fa literally translates the drawer's close label as "بستن این **دیالوگ**" — the translator had no word for drawer. Google's **برگ زیرین / برگ کناری** are the only real shipped names. |
| Stepper | فیلد پله‌ای · گام‌به‌گام | **no established term found** (wizard sense) | ⚠️ **Sonnat's فیلد پله‌ای is a *numeric* stepper input — a different component. Do not reuse it.** |
| Label | برچسب · لیبل | **برچسب** (formal) / **لیبل** (speech) | ⚠️ **Collision: برچسب is also the standard word for Tag.** PatternFly has both concepts — this needs resolving. |
| Placeholder | متن راهنما · نگهدارنده مکان · جایگزین | **متن راهنما** (input hint) | ⚠️ Sources describe **different things**: WordPress's نگهدارنده مکان = layout placeholder; Sonnat's متن راهنما = input hint. Disambiguate first. |
| Input / Text field | فیلد متنی · کادر متنی · ورودی · جعبهٔ متنی | **فیلد متنی** | ✅ **Sonnat's فیلد متنی (single-line) / کادر متنی (multi-line) pair is the cleanest published precedent** and directly answers Textarea. |
| Link | پیوند · لینک | **پیوند** (formal, approved) / **لینک** (speech) | ✅ A rare case where the approved term genuinely won. |
| Divider | جداکننده · جداساز · تقسیم‌کننده | **جداکننده** | Divar's term. |
| Panel | پنل · تابلو | **پنل** | Firefox's تابلو is Mozilla-fa house style, unique to them. |
| Grid | شبکه · گرید | **CONTESTED — but splits usefully by sense** | ARIA role grid = **شبکه**; layout system = **گرید** (Sonnat). Sonnat also gives **نقاط‌شکست** for breakpoints. |
| Layout | چیدمان · طرح · صفحه‌بندی | **چیدمان** | ✅ Divar + WordPress + CS dictionary agree. |
| Dashboard | داشبورد · پیشخوان | **داشبورد** | ⚠️ **پیشخوان is a WordPress-specific brand choice** (what wp-admin is called) — do not generalize. |
| Settings / Save / Delete / Close | تنظیمات · ذخیره · حذف · بستن | all ✅ **Universal** | *Remove* (vs delete) tends to be **پاک کردن** or **برداشتن**. |
| Cancel | لغو · انصراف | **لغو** | ⚠️ Clean split: **component libraries → لغو** (5 of 5 agree); **desktop apps (GTK/Firefox) → انصراف**. |
| Next / Back | بعدی · قبلی · عقب · بازگشت | **بعدی / قبلی** | ✅ Three independent component libraries converge exactly on بعدی/قبلی/پایان. |
| Widget | ابزارک · ویجت | **ابزارک** | ✅ Rare win for a native coinage — GNOME and WordPress independently agree. |
| Dialog (box) | کادر گفتگو · گفت‌وگو · دیالوگ | **CONTESTED: کادر گفتگو (vendors) vs دیالوگ (web industry)** | Same platform-vs-industry split as Tab. |
| Hamburger menu | منوی همبرگری · دکمه همبرگری | **منوی همبرگری** | fa-wiki article **دکمه همبرگری**. |

### 4.3 Where the loanword dominates — the explicit list

**This is the finding, not a gap.** In these cases the borrowed word is what people actually use, and **[INFERENCE]** a native coinage would be the wrong call:

**مودال** (modal) · **بردکرامب** (breadcrumb) · **چیپس** (chip) · **اسکلتون** (skeleton) · **آکاردئون** (accordion) · **فیلتر** (filter) · **دیالوگ** (dialog, web) · **تب** (tab, component) · **اسلایدر** (slider, design docs) · **چک‌باکس** (checkbox) · **داشبورد** (dashboard) · **بنر** (banner) · **اسنک‌بار** (snackbar) · **کامپوننت** (component) · **لیبل** (label, speech) · **گرید** (grid, layout)

Also fully naturalized in Sonnat's prose: **فرم، آیکون، اسکرول، هاور، فوکوس، تایپوگرافی، کارت**.

### 4.4 Where nothing established exists — the roadmap for original work

| Concept | What was checked | Result |
|---|---|---|
| **Toast** | WordPress glossary, all 5 component-library fa locales, Sonnat, fa-wiki | **Empty.** Only اسنک‌بار / توست in speech. |
| **Empty state** (as a pattern name) | All 5 locales, Sonnat, WordPress, fa-wiki | **Empty as a name** — though the *copy* is converged (داده‌ای موجود نیست). |
| **Skeleton** | Every shipped localization; Sonnat has no Persian page | **Empty in localizations.** Only community blog usage. |
| **Data list** | WordPress, Sonnat, all component libraries | **Empty.** Only generic فهرست. |
| **Tertiary** | WordPress (has primary + secondary, no tertiary), Sonnat (uses emphasis scale) | **Empty.** |
| **Popover** | All 21 sources | **Empty.** Only the pop-up family (بازشو). |
| **Stepper** (progress/wizard sense) | Vuetify, Sonnat | **Empty.** |
| **Wizard** | Mozilla, Microsoft, Google, GNOME, فرهنگستان | **Effectively empty.** Only KDE's obsolete جادوگر. |
| **Spinner** (as a component) | All sources | **Empty.** Only the state copy. |

**Sources looked for and NOT found:** a published design system from Digikala, Snapp, Cafe Bazaar, Tapsell or Zarinpal (**all internal**) · a Mozilla fa style guide (Pontoon's 102-term fa Terminology project exists but isn't fetchable) · **the Microsoft fa-IR terminology database — the Language Portal closed 2023-06-30**, so only the style guide PDF survives · a VS Code Persian language pack (no `fa`) · `dic.farsilinux.org`, the reference Persian FOSS glossary cited by Persian-HIG (**dead**) · Persian Wikipedia articles for Tooltip, Tab (UI), Sidebar, Accordion (UI), Toast, Empty state, Wizard, Dialog box, Dashboard (**all missing — fa-wiki's UI-component coverage is thin**).

### 4.5 ⚠️ Quality defects in specific sources — do not copy blindly

- **GTK `fa.po`**: ARIA role `form` → **از** ("from" — wrong); `article` → **حرف تعریف** (the grammatical article — wrong); `marquee` → **چادر** ("tent" — wrong).
- **PrimeLocale `fa.json`**: reads **partly machine-translated** — `collapse` → **سقوط - فروپاشی** (*societal* collapse); `apply` → **درخواست دادن** ("to request"); `chooseYear` duplicates `chooseDate`.
- **Element Plus `fa.ts`**: `drawer.close` reuses the *dialog* string verbatim.

**[INFERENCE] Weight Sonnat, Chromium, GTK (for ARIA role names specifically), WordPress and TalkBack above these.**

**On Persian Wikipedia `insource:` counts:** they are noisy and were leaned on only where the term is unambiguous. توست returns 609 hits — *almost all toast the bread*; چیپ 468 — mostly potato/silicon chips; نماد 15,868 — mostly "symbol" in general prose.

### 4.6 Evidence-ranked starting point (not a decision)

- **Tier 1 — universal, zero disagreement:** دکمه · نوار ابزار · بستن · حذف · ذخیره · تنظیمات · جدول · جستجو · پنجره · پیوند · دکمهٔ رادیویی · هشدار · صفحه‌بندی · مرتب‌سازی · بعدی/قبلی · اعلان · فرم · نوار پیشرفت · نوار کناری · ابزارک
- **Tier 2 — well attested, one clear leader:** مودال · کارت · بردکرامب · راهنمای ابزار · منوی کشویی · چک‌باکس · کلید · نشان · آکاردئون · چیدمان · جداکننده · فیلد متنی / کادر متنی · فیلتر · لغو
- **Tier 3 — CONTESTED, needs an explicit project decision:** tab (تب vs زبانه) · navigation (راهبری vs ناوبری) · icon (آیکون vs نماد) · slider (اسلایدر vs لغزنده) · menu (منو vs فهرست) · dialog (دیالوگ vs کادر گفتگو) · grid (گرید vs شبکه) · **label vs tag (both want برچسب)**
- **Tier 4 — no established term; original work required:** toast · empty state · skeleton · data list · tertiary · popover · stepper · wizard · spinner

---

## Appendix — method, and backing detail

This document synthesises four parallel primary-source investigations. The full working files sit alongside it and carry complete per-source citation lists, additional verbatim quotations (including Persian originals), and per-claim evidence tags:

| Area | File | Sources fetched |
|---|---|---|
| 1 — Bidi mirroring | `area1-bidi-mirroring.md` | 31 catalogued, **27 fetched and quoted directly** |
| 2 — Persian webfonts | `area2-persian-webfonts.md` | 35 (LICENSE files, vendor pages, W3C/Unicode specs, font build scripts, GitHub API) |
| 3 — Typographic conventions | `area3-typographic-conventions.md` | 32 (both Academy PDFs, UCD data files, CLDR XML, W3C alreq) |
| 4 — UI vocabulary | `area4-ui-vocabulary.md` | 21 (raw localization files fetched via curl, not summaries) |

**Method notes and limits, stated plainly:**

- **Four pages could not be fetched** — they are client-side rendered and returned title-only: **Material Design 3 bidirectionality**, M3 Sliders, the *current* Apple HIG "Right to left", and Adobe Spectrum Breadcrumbs. Everything drawn from them is marked `[via index]` at each use. **M3 is load-bearing for several rulings** (circular progress, the Hebrew carve-out, question-mark icons) and **should get a human eyeball before entering a normative PatternFly doc.** For Apple this was compensated by fetching the archived developer-library document (which carries the verbatim do-not-flip list) and the WWDC22 session 10107 transcript directly.
- **Both editions of the Academy's دستور خطّ فارسی were downloaded from apll.ir and text-extracted**, not read about second-hand. *(apll.ir serves an incomplete TLS chain; fetching needs relaxed cert verification or the archive.org mirror.)*
- **Unicode normalization claims in §3.4 were machine-verified**, not asserted — all four forms computed for both encodings.
- **Licence verdicts in §2.1 come from reading the actual LICENSE file at the URL given**, not from a GitHub badge. Where a badge and the file disagreed (Sahel, IranNastaliq) the file won, and the discrepancy is recorded.
- **Two things remain unverified and are flagged rather than guessed:** ZWNJ's UAX #14 line-break class — resolved later from `LineBreak.txt` (`200C ; CM`) — and whether Persian needs a larger font-size than Latin, where the practitioner literature actively contradicts itself and no primary source rules either way. That one must be settled empirically per chosen face.
- **This is not legal advice.** For the OFL fonts the licence text is unambiguous and machine-checkable. For the FontIran family no complete downloadable EULA could be obtained — only vendor summary pages — so those are marked *do not ship* rather than "probably fine".

