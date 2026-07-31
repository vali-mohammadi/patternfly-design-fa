# Area 1 — Bidi mirroring rules for UI elements and icons

Research for a Persian (fa-IR) RTL adaptation of PatternFly.
Date of research: 2026-07-31.

---

## 0. Source-integrity notes (read first)

**Fetched directly and quoted from the page itself:**

| # | Source | URL |
|---|---|---|
| S1 | Unicode UAX #9, Unicode Bidirectional Algorithm | https://www.unicode.org/reports/tr9/ |
| S2 | Unicode `BidiMirroring.txt` (UCD, latest) | https://www.unicode.org/Public/UCD/latest/ucd/BidiMirroring.txt |
| S3 | Unicode Corrigendum #6: Bidi Mirroring | https://www.unicode.org/versions/corrigendum6.html |
| S4 | Unicode L2/22-026, Kent Karlsson, "Glyph mirroring: NonBidiMirroring.txt" | https://www.unicode.org/L2/L2022/22026-non-bidi-mirroring.pdf |
| S5 | Unicode LDML (CLDR) TR35 Part 1, Layout Elements | https://www.unicode.org/reports/tr35/tr35-general.html |
| S6 | W3C i18n — "Structural markup and right-to-left text in HTML" | https://www.w3.org/International/questions/qa-html-dir |
| S7 | W3C i18n — Best Practices: Handling RTL Scripts in XHTML/HTML | https://www.w3.org/International/geo/html-tech/tech-bidi.html |
| S8 | W3C — "Authoring HTML: Handling Right-to-left Scripts" (TR; page self-labels as outdated) | https://www.w3.org/TR/i18n-html-tech-bidi/ |
| S9 | W3C i18n — "Languages using RTL scripts" | https://www.w3.org/International/questions/qa-scripts |
| S10 | W3C i18n-drafts issue #757, "Guideline for RTL UI" | https://github.com/w3c/i18n-drafts/issues/757 |
| S11 | Material Design 1 — Usability › Bidirectionality (the canonical Google list) | https://m1.material.io/usability/bidirectionality.html |
| S12 | Google Fonts — Material Icons Guide (incl. the explicit RTL-mirroring icon list) | https://developers.google.com/fonts/docs/material_icons |
| S13 | Apple — "Supporting Right-to-Left Languages" (developer library archive) | https://developer.apple.com/library/archive/documentation/MacOSX/Conceptual/BPInternational/SupportingRight-To-LeftLanguages/SupportingRight-To-LeftLanguages.html |
| S14 | Apple WWDC22 session 10107, "Get it right (to left)" (transcript) | https://developer.apple.com/videos/play/wwdc2022/10107/ |
| S15 | Microsoft Learn — Globalization › Mirroring | https://learn.microsoft.com/en-us/globalization/fonts-layout/mirroring |
| S16 | Microsoft Learn — "Design your app for bidirectional text" | https://learn.microsoft.com/en-us/windows/apps/design/globalizing/design-for-bidi-text |
| S17 | Microsoft Learn — "Adjust layout and fonts, and support RTL" | https://learn.microsoft.com/en-us/windows/apps/design/globalizing/adjust-layout-and-fonts--and-support-rtl |
| S18 | Mozilla — Firefox Source Docs, RTL Guidelines | https://firefox-source-docs.mozilla.org/code-quality/coding-style/rtl_guidelines.html |
| S19 | Mozilla Hacks — Building RTL-Aware Web Apps, Part 1 | https://hacks.mozilla.org/2015/09/building-rtl-aware-web-apps-and-websites-part-1/ |
| S20 | Android Developers — "Support different languages and cultures" (RTL section) | https://developer.android.com/training/basics/supporting-devices/languages |
| S21 | Wikimedia Codex — Style guide › Bidirectionality | https://doc.wikimedia.org/codex/latest/style-guide/bidirectionality.html |
| S22 | Spotify Engineering — "Right to Left (The Mirror World)" | https://engineering.atspotify.com/2019/04/right-to-left-the-mirror-world |
| S23 | Alebri, Rakotondravony & Harrison, "Design Patterns in Right-to-Left Visualizations: The Case of Arabic Content", IEEE VIS 2024 | https://discovery.ucl.ac.uk/10194127/1/Alebri_accessible-2024_VIS_RTL_short_paper.pdf |
| S24 | Datawrapper — "Support for right-to-left languages in all visualizations" | https://www.datawrapper.de/blog/right-to-left-visualizations/ |
| S25 | MDN — CSS `:dir()` | https://developer.mozilla.org/en-US/docs/Web/CSS/:dir |
| S26 | PatternFly — Right-to-left handbook (our own current baseline) | https://www.patternfly.org/developer-resources/right-to-left-handbook/ |
| S27 | ItielMaN/rtl-guidelines (community compendium, mirrors S18) | https://github.com/ItielMaN/rtl-guidelines |

**Could NOT be fetched directly — client-side-rendered, returned title only.** Content below attributed to these is from search-engine indexed text of the pages, and is labelled `[via index]` every time it is used. Treat as needing a human eyeball before it goes into a normative PatternFly doc:

| # | Source | URL |
|---|---|---|
| S28 | Material Design 3 — Bidirectionality & RTL | https://m3.material.io/foundations/layout/bidirectionality-rtl |
| S29 | Material Design 3 — Sliders guidelines | https://m3.material.io/components/sliders/guidelines |
| S30 | Apple HIG — "Right to left" (current) | https://developer.apple.com/design/human-interface-guidelines/right-to-left |
| S31 | Adobe Spectrum — Breadcrumbs | https://spectrum.adobe.com/page/breadcrumbs/ |

**There is no W3C normative ruling on UI/icon mirroring.** W3C i18n has an *open, unanswered* issue asking for exactly this document (S10 — "Guideline for RTL UI", opened by xfq, no positions recorded, no assignee, no milestone). W3C's published RTL material (S6–S9) covers `dir`, markup and logical CSS values; it does **not** enumerate which icons flip. Do not cite W3C for icon rulings.

**Unicode's mirroring is character-level only, not UI-level.** UAX #9 rule L4 (S1): *"A character is depicted by a mirrored glyph if and only if (a) the resolved directionality of that character is R, and (b) the Bidi_Mirrored property value of that character is Yes."* This governs brackets/parens/relational operators in text. It says nothing about icons, images or layout. Do not cite UAX #9 for icon rulings either.

---

## 1. The MIRROR / DO-NOT-MIRROR / CONTESTED table

Rulings marked **[inference]** are mine, not any source's.

| # | Element | Ruling | Source(s) | Notes |
|---|---|---|---|---|
| 1 | **Arrows — navigational / relative ("next", "back", "forward")** | **MIRROR** | S11: *"Icons that communicate direction, like arrows, are mirrored"*. S13 (Apple): images flip if they *"communicate a sense of direction, such as arrows"*. S14: SF Symbols `arrow.backward` / `arrow.forward`, `arrowtriangle.forward.fill` flip. S12 mirror-list: `arrow_back`, `arrow_forward`, `arrow_back_ios`, `arrow_forward_ios`. S18. S22. | The core rule everyone agrees on. |
| 1b | **Arrows — absolute/spatial ("move left", "align right", compass)** | **DO NOT MIRROR** | S14 (Apple, explicit): SF Symbols `arrow.left` / `arrow.right` *"always point those absolute directions"*; naming convention is left/right = absolute (non-flipping), backward/forward = relative (flipping). Apple `UISemanticContentAttribute.spatial` exists precisely for *"spatial controls moving things in absolute directions"* (S14). | **Disagreement with Google:** S12's mirror-list *does* include `arrow_left` and `arrow_right`. Google mirrors them; Apple does not. Google's naming carries no absolute/relative distinction, so their list is not safe to apply verbatim. |
| 1c | **Arrows — arrow *characters* in text (U+2190 etc.)** | **DO NOT auto-mirror under the UBA** | S4 (Unicode L2/22-026): arrows *"do not have the bidiMirrored=Yes property value, and thus are not in BidiMirroring.txt … One could argue that they should have had … but they don't, and cannot now get that."* Same doc: mappings in the proposed `NonBidiMirroring.txt` *"must not be used when mirroring due to bidi RTL text."* | Practical consequence: an arrow typed as a character will **not** flip; only an arrow shipped as an icon asset that you deliberately mirror will. Do not rely on the bidi algorithm for arrows. |
| 2 | **Breadcrumb chevrons / separators** | **MIRROR** | S12 mirror-list: `chevron_left`, `chevron_right`, `navigate_before`, `navigate_next`, `first_page`, `last_page`. S21 (Codex): *"Paginations"* and *"Navigation items"* mirror. S31 [via index] (Adobe Spectrum): breadcrumbs right-aligned, hierarchy order mirrored, root farthest right, current location farthest left, *and the separator icon mirrored to point left*. | No source argues against. Also mirror the **order** of the trail, not just the glyph. |
| 3 | **Indent / outdent (text indentation controls)** | **MIRROR** | S12 mirror-list, explicit: `format_indent_decrease`, `format_indent_increase`. Also `format_list_bulleted`, `wrap_text`, `short_text`, `subject`, `toc`, `list`, `view_list`. S14: Apple's bulleted-list symbol ships distinct LTR/RTL versions that mirror automatically. | Indentation is defined relative to the reading direction, so the glyph must follow it. |
| 3b | **Text-*alignment* controls (align-left / center / align-right segmented control)** | **DO NOT MIRROR** | S14 (Apple, worked example): a Bold/Italic/Underline segmented control uses `Semantic = Unspecified` and reverses; a **text alignment control uses `Semantic = Spatial` and does *not* reverse**. | Important nuance and easy to get wrong: indent/outdent mirrors, but align-left/align-right must keep both their glyphs and their button order, because each button denotes an absolute alignment. |
| 4 | **Back / forward navigation (browser and in-app wizard next/back)** | **MIRROR** | S22 (Spotify, from shipping Arabic): *"back and forward navigation buttons have to be reversed"*. S18 (Mozilla): mirror *"icons or animations that imply directionality or motion like back/forward buttons"*. S11. S12 (`arrow_back`/`arrow_forward`). S13/S14 (Apple). S20 (Android: "navigation arrows/buttons" mirror). | Mirror both the glyph and the physical placement (Back sits at inline-start = right in RTL). Applies equally to PatternFly Wizard Next/Back. |
| 5 | **Progress bars / steppers — direction of fill and step order** | **MIRROR** | S11 (Material): *"Progress bars fill in the same direction as content is read"* → right-to-left in RTL. S13 (Apple): on macOS *"most controls—such as segmented controls, progress indicators, and outline views—also appear flipped"*. S21 (Codex): *"Progress elements indicating sequences or steps"* mirror. S28 [via index]: linear progress indicators move right-to-left for RTL languages. | **One documented carve-out:** S28 [via index] says linear progress should stay LTR **for Hebrew specifically**, RTL for other RTL languages. Farsi is not carved out, so for fa-IR progress mirrors. |
| 5b | **Circular / indeterminate spinners and clockwise progress arcs** | **DO NOT MIRROR** | S28 [via index]: *"Clock icons, circular refresh icons, and progress indicators with arrows pointing clockwise shouldn't be mirrored."* Consistent with S11's clock rule. | Linear progress mirrors; circular clockwise progress does not. |
| 6 | **Sliders / range inputs (which end is min)** | **MIRROR — min goes at the inline-start (right) in RTL** | S29 [via index] (M3 Sliders): *for LTR the values increase left→right; for RTL this is reversed*. S21 (Codex): *"Sliders, toggle switches, and control elements"* mirror. S11: a volume icon with a slider mirrors — *"The slider should progress RTL, and the sound waves should emerge from the right."* | Two exceptions carved out by Apple (S14): a slider acting as a **media scrubber** takes `UISemanticContentAttribute.playback` and does **not** flip; a slider representing an **absolute spatial** quantity (e.g. audio L/R balance) takes `.spatial` and does not flip. |
| 7 | **Media playback controls — play, pause, rewind, fast-forward, skip** | **DO NOT MIRROR** *(near-unanimous; see disagreement column)* | S13 (Apple, verbatim in the do-not-flip list): *"Video controls and timeline indicators"*. S14: `UISemanticContentAttribute` `.playback` = *"a media playback control or part of a group of playback controls"* → does not reverse. S15 (Microsoft): *"common icons such as the fast-forward and rewind icons in media players, use the same orientation in both LTR and RTL layouts."* S16 (Microsoft): media player controls retain LTR. S11 (Material): *"Do not mirror media playback buttons and the media progress indicator."* S28 [via index]: *media controls for video/audio players are always LTR*. S18 (Mozilla): *"Video/audio player controls"* do not mirror. S19. S21 (Codex). S22 (Spotify). | **See §2 for the full contested-case write-up.** The rulings agree; the *stated rationales* do not (tape direction vs. physical hardware convention vs. measured user expectation), and M3 muddles it by also framing it as a Hebrew-specific rule. Corroborating negative evidence: `play_arrow`, `fast_forward`, `fast_rewind`, `skip_next`, `skip_previous` are all **absent** from S12's mirror-list, while `featured_video`/`featured_play_list`/`playlist_add`/`queue_music` (layout icons, not transport controls) are present. |
| 8a | **Clocks / clock icons** | **DO NOT MIRROR** | S13 (Apple do-not-flip list, verbatim): *"Clocks"*. S11: *"Clocks still turn clockwise for RTL languages"*. S21 (Codex): *"icons representing time"* and *"components or elements representing time"* do not mirror. S28 [via index]. | Clockwise is a physical/horological convention, not a reading convention. |
| 8b | **Refresh / reload (circular clockwise arrow)** | **DO NOT MIRROR** | S28 [via index]: *"circular refresh icons … shouldn't be mirrored"*. S11: refresh icons showing clockwise motion remain unchanged. Corroborating: `refresh`, `sync`, `autorenew`, `rotate_right` are **absent** from S12's mirror-list. | |
| 8c | **Undo / redo** | **CONTESTED** | **Mirror:** S12's mirror-list explicitly contains `undo` **and** `redo`. Apple's `arrow.uturn.backward` / `arrow.uturn.forward` follow the backward/forward naming convention, i.e. they flip (S14). **Do not mirror:** S28 [via index]'s blanket rule that *icons with arrows pointing clockwise shouldn't be mirrored* would catch the curved undo/redo arcs. | Google's own two documents point opposite ways for the same glyph. My reading **[inference]**: undo/redo are semantically *backward/forward through history*, so they should mirror; refresh is *rotational*, so it should not. That reconciles S12 with S28 but is my synthesis, not a source's ruling. |
| 9 | **Checkmarks / tick** | **DO NOT MIRROR** | S18 (Mozilla, explicit do-not-mirror list): *"Checkmark icons"*. S21 (Codex): icons *"containing check symbols"* do not mirror. Corroborating: `check`, `done`, `check_circle` are absent from S12's mirror-list. | No source says otherwise. Applies to PatternFly's check/success iconography and checkbox marks. |
| 10 | **Charts with a time axis (does the time axis flip?)** | **CONTESTED — genuinely unresolved** | **Do NOT flip:** S13 (Apple, verbatim do-not-flip list): *"Graphs (x– and y–axes always appear in the same orientation)"*. S11 (Material): *"Charts and graphs"* listed under items that are not mirrored. S21 (Codex): *"Charts and graphs if mirroring could impact data interpretation"*. **DO flip:** S24 (Datawrapper): in *"line charts, area charts, column charts, and scatter plots, x-axes run from right to left"*, and *"In all bar charts, labels sit on the right side and bars read from right to left."* | **See §3 for the empirical picture.** Note a further internal inconsistency in Google's material: S12's mirror-list contains `trending_up`, `trending_down`, `show_chart`, `multiline_chart` — i.e. Google mirrors chart *glyphs* while S11 declines to mirror chart *components*. |
| 11 | **Logos and brand marks** | **DO NOT MIRROR** | S18 (Mozilla, explicit): *"Product logos"*. S11: *"Logos and untranslated text"* are not mirrored. S20 (Android): "Logos/brands" in the don't-mirror list. S26 (PatternFly's own handbook already says logos do not flip). | |
| 12 | **Icons containing Latin text, letters or numerals** | **DO NOT MIRROR** | S18 (Mozilla): do not mirror *"Text or numbers"* or *"icons containing text/numbers"*; also do not reorder *"1920x1080"* dimension strings or unit order. S11: *"Numbers, including icons containing numbers, must be localized for languages that use different numerals"* — localize, don't mirror. S20 (Android). | Direct consequence for `transform: scaleX(-1)`: it will reverse embedded glyphs. See §4. |
| 13 | **Images / photos** | **DO NOT MIRROR, unless the image conveys direction** | S13 (Apple, verbatim do-not-flip list): *"Images, unless they communicate a sense of direction, such as arrows"*. S11: directional imagery does mirror — a bicycle or person moving "forward" should face **left** in RTL. S15 (Microsoft): *"not all images and icons should be mirrored."* | This is the "it depends on context" case Apple and Google both call out explicitly. |
| 14 | **Numbers / numerals** | **DO NOT MIRROR — but do localize, and keep digit runs LTR inside RTL text** | S11: *"Numbers, such as the clock and phone numbers"* are not mirrored; numbers must be localized by numeral system. S18: never mirror text or numbers. S1 (UAX #9) governs the ordering of digit runs inside bidi text automatically. | For fa-IR: switch to Persian digits ۰–۹ per CLDR (`arabext` numbering system); this is a numbering-system choice, orthogonal to mirroring. |
| 15a | **Search / magnifier icon** | **CONTESTED (in ruling; agreed in principle)** | **Do not mirror:** S11 (Material): *"The search icon typically has its handle at the bottom right side, because the majority of users are right-handed"* — and is therefore not mirrored. **Do mirror:** S18 (Mozilla): mirror *"Icons representing objects that are meant to be handheld"* so they *"look like they're being right-handed"*, naming the magnifying glass. | Both sources assert the **same principle** ("the tool should read as right-handed") and reach opposite instructions because their base assets are drawn with the handle on opposite sides. **[inference]** The actionable rule for PatternFly: mirror only if PatternFly's base magnifier would end up left-handed after the container mirrors; otherwise leave fixed. Decide by inspecting the asset, not by copying either vendor's verdict. |
| 15b | **Phone / envelope icons** | **DO NOT MIRROR** — **[inference]**, from the general "non-directional icons don't mirror" rule | S11: *"Icons that do not communicate direction, such as a camera"* remain unchanged. S18: direction-neutral and symmetric icons do not mirror. Corroborating: `mail`, `email`, `phone` are absent from S12's mirror-list. | Directional **call-log** icons are a different matter and **do** mirror — S12's list contains `call_made`, `call_received`, `call_missed`, `call_missed_outgoing`, `call_merge`, `call_split`. |
| 16 | **Hamburger / menu icon** | **DO NOT MIRROR the glyph; DO move the button to the inline-start (right)** | **[inference]** from S18's *"symmetric icons"* rule (the glyph is horizontally symmetric, so mirroring is a no-op); no source addresses the hamburger by name. Placement follows S15/S16 (Microsoft: UI flow mirrors; *"first item appears top-right in RTL"*). | Flagged as inference because no primary source rules on it explicitly. |
| 17 | **Swipe / gesture direction, carousels, motion** | **MIRROR** | S20 (Android): "swipe gesture indicators" mirror. S22 (Spotify): *directional animations were flipped, requiring carousel slides to move in the opposite direction for RTL*. S18 (Mozilla): mirror *"icons or animations that imply directionality or motion"*. | Motion direction is part of mirroring, not just static layout. |
| 18 | **Scroll bars** | **MIRROR (move to the left)** | S15 (Microsoft): *"If a scroll bar is required, it appears on the left side of the control."* | Counter-note: S19 (Mozilla Hacks) lists scroll bars among things not to mirror, on ergonomic hand-access grounds. Minor disagreement; browser default behaviour follows `dir` anyway. |
| 19 | **Code, file paths, URLs, email addresses, phone numbers as text** | **DO NOT MIRROR; force LTR** | S18: use `direction: ltr` / `dir="ltr"` for URLs, paths, code, usernames, phone numbers, with `text-align: match-parent`; *"icons related to code"* also stay LTR. S21 (Codex): phone numbers, postal codes, URLs, email addresses, currency symbols do not mirror. | |
| 20 | **Toggle switches, rating selectors, button groups** | **MIRROR** | S21 (Codex): *"Buttons and group of buttons"*, *"Sliders, toggle switches, and control elements"*, *"Rating selectors"*. S13 (Apple): macOS segmented controls flip. | |
| 21 | **Text fields — icon side, text alignment** | **MIRROR** | S11: *"Text fields icons are displayed on the opposite side of a field"*; *"Navigation buttons are displayed in reverse order"*; text alignment shifts right. S6/S7 (W3C): `dir="rtl"` right-aligns and reverses block/table flow. | Caveat from S16 (Microsoft): a text block of more than ~2–3 lines may warrant alignment opposite the app direction for readability — a rare exception. |
| 22 | **Music notes / sheet music** | **DO NOT MIRROR** | S13 (Apple, verbatim do-not-flip list): *"Music notes and sheet music"*. | Included because PatternFly-adjacent products sometimes ship notation-like glyphs. |
| 23 | **Question-mark icons (help)** | **MIRROR for Arabic and Farsi; do NOT for Hebrew** | S28 [via index]: icons containing a question mark need mirroring in Arabic and Farsi but not Hebrew. S14 (Apple): Arabic uses the reversed question mark and SF Symbols supplies it automatically. | **Directly relevant to fa-IR:** Persian uses `؟` U+061F ARABIC QUESTION MARK, which is a distinct character, not a mirrored `?`. A help icon drawn with a Latin `?` should be redrawn with `؟` rather than geometrically flipped. |

---

## 2. Contested case #1 — media playback controls (full, un-smoothed)

**Every primary source I fetched rules the same way: do not mirror.** The contest is in *scope* and *rationale*, and there is one framing inconsistency inside Google's own docs.

| Source | Exact position | Stated rationale |
|---|---|---|
| Apple, S13 | Do-not-flip list literally reads *"Video controls and timeline indicators"*. | None given; presented as a category. |
| Apple, S14 | `UISemanticContentAttribute.playback` documented as *"a media playback control or part of a group of playback controls"* → does not reverse. Apple's own worked example: a slider used as a video scrubber should be marked `.playback`. | Mechanism, not rationale — Apple ships an API-level opt-out rather than a design argument. |
| Microsoft, S15 | *"common icons such as the fast-forward and rewind icons in media players, use the same orientation in both LTR and RTL layouts."* | None given. |
| Microsoft, S16 | Media player controls listed under elements that don't mirror. | None given. |
| Material 1, S11 | *"Do not mirror media playback buttons and the media progress indicator."* | **Tape metaphor** — the arrows refer to the direction the tape/media travels, not the direction of time or of reading. |
| Material 3, S28 [via index] | *media controls for video or audio players are always LTR*; and separately, *in Hebrew, timelines and media controls should retain LTR directionality*. | Same tape rationale; but the Hebrew-specific phrasing implies the rule is locale-scoped, which contradicts the "always LTR" phrasing on the same page. **This is a real inconsistency in M3 and I could not resolve it because the page would not render for direct fetch.** |
| Mozilla, S18/S19 | Video/audio player controls do not mirror. | **Physical-hardware convention** — audio hardware in RTL regions has always had the same button layout, so mirroring breaks recognition. Explicitly a *different* argument from Google's tape metaphor. |
| Spotify, S22 | Did not mirror playback buttons or the media progress bar, while *did* mirror back/forward navigation and carousels. | **Measured user expectation** — *"Arabic speaking users expect playback controls and progress bar to look the same as they would in a left-to-right language."* Reported as a research finding, not an a-priori rule. |
| Codex, S21 | Media control icons (play, pause, rewind) do not mirror. | None given. |

**Residual ambiguity a design system must resolve explicitly:** "progress indicator" mirrors (row 5) but "media progress indicator / scrubber" does not (row 7). These are the same visual primitive with different semantics. PatternFly needs two distinct component behaviours, or one component with an explicit `variant="playback"` opt-out — the equivalent of Apple's `.playback` attribute.

---

## 3. Contested case #2 — charts with a time axis (full, un-smoothed)

**Guidelines say don't flip. Practice and tooling flip. Nobody has authority here.**

| Position | Source | Exact position |
|---|---|---|
| **Do not flip** | Apple, S13 | Do-not-flip list literally reads *"Graphs (x– and y–axes always appear in the same orientation)"*. |
| **Do not flip** | Material 1, S11 | *"Charts and graphs"* listed under items that are not mirrored. |
| **Conditional — don't flip if it hurts comprehension** | Codex, S21 | *"Charts and graphs if mirroring could impact data interpretation"* are in the do-not-mirror list. |
| **Do flip** | Datawrapper, S24 | *"line charts, area charts, column charts, and scatter plots, x-axes run from right to left"*; *"In all bar charts, labels sit on the right side and bars read from right to left."* Datawrapper cites **no** user research or expert consultation for this; the stated rationale is design consistency when localising a chart. |
| **Empirically split** | Alebri et al., IEEE VIS 2024, S23 | Corpus: 128 visualizations from 51 articles across 7 Arabic news outlets (Alarabiya, Aljazeera, BBC Arabic, CNN Arabic, Inkyfada, Alsifr, Arij), 57 of which had an axis. **Numerical x-axis (incl. time series): 58% kept the LTR pattern (y-axis left, x-axis LTR); 31% mirrored it (y-axis right, x-axis RTL).** **Categorical x-axis: 81% put the y-axis on the right (RTL); 9% on the left.** |

Additional findings from S23 that bear on the ruling:

- The LTR-time-axis pattern is a **mainstream-media** habit: *85%* of the visualizations using it came from CNN Arabic, BBC Arabic and similar; the mirrored pattern came *84%* from independent Arabic outlets (Inkyfada, Alsifr).
- The authors' own conclusion is that no standard exists: they note *"there are no clear guidelines on designing visualizations for RTL users"* and that designers rely on *"tacit knowledge to use mirroring."*
- They observed the same article using **inconsistent** mirroring across its own charts, and flag this as harmful: readers must change reading direction mid-article.
- They speculate designers *"may get their inspiration from web design guidelines for RTL scripts"* (they cite S12 and S6 by name) and therefore mirror categorical axes while leaving numerical ones alone.
- Cognitive backing for flipping: they cite Fuhrman & Boroditsky (Cognitive Science 2010) showing Arabic/Hebrew speakers arrange event pictures right-to-left, matching their reading direction — i.e. the **mental timeline itself runs RTL** for these readers.
- The paper explicitly calls for W3C-style guidelines to be extended to visualization — i.e. the gap is acknowledged in the literature, matching the open W3C issue S10.

**Google contradicts itself here too:** S12's mirror-in-RTL list contains `trending_up`, `trending_down`, `show_chart`, `multiline_chart` — chart *glyphs* mirror — while S11 declines to mirror chart *components*. A design system cannot copy both.

**[inference]** For PatternFly the defensible position is: default to **not** flipping a quantitative/time x-axis (matching Apple, Material and Codex, and the 58% majority in real Arabic media), make flipping an explicit opt-in, mirror the chart *chrome* (legend position, label alignment, tooltip anchoring, y-axis side for categorical charts) regardless, and require consistency across all charts in one view — S23's strongest empirical warning is against mixing patterns.

---

## 4. Implementation-level guidance a design system needs

### 4.1 Setting direction

- **Use the `dir` attribute on `<html>`, not CSS.** S6 (W3C): *"add `dir="rtl"` to the `html` tag any time the overall document direction is right-to-left"*, and *"Do **not** use CSS to apply base direction in HTML pages"* — direction is semantic and must survive with the markup. S8 repeats: *"Do not use CSS styling to control directionality in HTML. Use markup."*
- All block elements inherit it; only set `dir` lower down where the direction actually changes (S6, S7).
- **`dir="auto"` and `<bdi>`** for runtime-injected / user-generated strings of unknown direction — the browser resolves from the first strongly-typed character (S6, S8).
- PatternFly today (S26) uses `<html dir="rtl">` as the preferred mechanism, with `.pf-v6-m-dir-ltr` / `.pf-v6-m-dir-rtl` helper classes as an alternative for nested subtrees.

### 4.2 CSS logical properties

S6/S7 (W3C): *"use 'start' and 'end', rather than 'left' or 'right'"* so *"the mirroring happens automatically and without the need for the translator to mess with your code."*

The full substitution table (S18, Mozilla):

| Use | Instead of |
|---|---|
| `margin-inline-start` / `margin-inline-end` | `margin-left` / `margin-right` |
| `padding-inline-start` / `padding-inline-end` | `padding-left` / `padding-right` |
| `float: inline-start` | `float: left` |
| `inset-inline-start` | `left` |
| `border-inline-end` | `border-right` |
| `border-{start/end}-{start/end}-radius` | `border-{top/bottom}-{left/right}-radius` |
| `text-align: start` / `text-align: match-parent` | `text-align: left` |

PatternFly (S26) already uses `block-start` / `inline-end` / `block-end` / `inline-start` in components, while token *names* retain top/bottom/left/right for backward compatibility — a known naming/semantics mismatch worth calling out in the fa-IR work.

Android's equivalent (S20): `gravity="start|end"`, `paddingStart/End`, `layout_marginStart/End`, `drawableStart/End`; on API 17+ start/end win over left/right when both are set.

### 4.3 `:dir()` selector

- Matches the **computed** direction, including inherited direction and `dir="auto"`; `[dir="rtl"]` matches only an explicit attribute and never matches `dir="auto"` (S25, MDN).
- **Baseline widely available since December 2023** (S25) — safe to use now.
- S18 recommends `:dir(rtl)` specifically for the cases logical properties can't express, and for swapping in pre-mirrored assets.

### 4.4 `transform: scaleX(-1)` — the technique and its caveats

Google publishes this as the web mirroring technique (S12):

```css
html[dir="rtl"] .icon {
  transform: scaleX(-1);
  filter: FlipH;            /* legacy IE */
  -ms-filter: "FlipH";
}
```

Caveats:

1. **S18 (Mozilla), explicit:** *"mirroring images that way doesn't work when the image is a part of an element with text using `background-image`, because then the text would be mirrored along with the image."* Remedy: ship a pre-mirrored asset and swap it under `:dir(rtl)`.
2. **Any embedded glyph reverses.** Rows 12 and 14 above forbid mirroring text and numerals, so `scaleX(-1)` is unusable on any icon containing letters or digits.
3. **S20 (Android), the same warning at the platform level:** `android:autoMirrored="true"` *"only works for simple drawables whose mirroring is a graphical reflection of the entire drawable. If your drawable contains multiple elements or if reflection changes its meaning, provide separate resources instead"* (via `res/drawable-ldrtl/`).
4. Mirroring changes lighting/shadow direction and gradient direction on any non-flat icon — **[inference]**, not stated by a source, but follows directly from the geometry.

### 4.5 Separate RTL asset variants — every major platform ships this escape hatch

| Platform | Mechanism | Source |
|---|---|---|
| Web / Material | pre-mirror with ImageMagick `convert -flop my_icon.png my_icon_rtl.png`, swap under `[dir]`/`:dir()` | S12 |
| Android | `android:autoMirrored="true"` (API 19+) for simple drawables; `res/drawable-ldrtl/` and `res/layout-ldrtl/` for complex ones; `res/*-ar/` beats `*-ldrtl/` for language-specific overrides; `android:supportsRtl="true"` in the manifest | S20 |
| iOS/macOS | Asset-catalog **Direction**: `Fixed` (never mirrors) / `Mirrors` / `Both` (separate LTR and RTL images); `imageFlippedForRightToLeftLayoutDirection()` | S14 |
| Windows | `FlowDirection` in XAML, or the `LayoutDirection` resource qualifier — *"The system chooses an image named `file.layoutdir-rtl.png` when the app runtime language is set to an RTL language"* — for cases where only part of an image should flip | S17 |
| PatternFly (today) | `.pf-v6-m-mirror-inline-rtl` CSS class, or `shouldMirrorRTL` on the React `<Icon>` component; component-internal directional icons already reverse | S26 |

### 4.6 Semantic opt-outs (the pattern worth copying)

Apple's `UISemanticContentAttribute` (S14) is the cleanest model, and it maps onto exactly the contested rows above:

| Value | Meaning | Maps to |
|---|---|---|
| `unspecified` | default; the view reverses for RTL | rows 1, 2, 3, 4, 5, 6, 20, 21 |
| `playback` | *"a media playback control or part of a group of playback controls"*; does not reverse | row 7 |
| `spatial` | a control that moves things in **absolute** directions; does not reverse | rows 1b, 3b |
| `forceLeftToRight` / `forceRightToLeft` | hard override | rows 11, 12, 19 |

SwiftUI equivalent: `.environment(\.layoutDirection, .leftToRight)` on the containing view, inherited by children. AppKit: `Mirror = Automatically | Never`, plus `userInterfaceLayoutDirection`.

SF Symbols' **naming convention is itself the policy** (S14): `left`/`right` in a symbol name means absolute and does not flip; `backward`/`forward` means relative and does flip. **[inference]** PatternFly's icon set would benefit from the same naming discipline — it is the cheapest way to make the row-1 vs row-1b distinction survive contact with implementers.

### 4.7 Build tooling and known gaps

- `rtlcss` and `css-flip` automate stylesheet flipping, with a `/* @noflip */` directive to exclude specific declarations (S19).
- Firefox testing switch: `intl.uidirection = 1` in `about:config` (S18). Android: **Force RTL layout direction** in Developer Options (S20).
- **Known PatternFly gap (S26):** components built on Popper.js — tooltips, popovers — have no built-in RTL support and need manual placement handling. Worth carrying into the fa-IR plan.
- **S19's blunt warning, worth quoting to stakeholders:** *"Do RTL right or don't bother! Doing it halfway will lose your audience and credibility."*

### 4.8 The concrete Google mirror-list (S12) — useful as a starting checklist, with caveats

`arrow_back, arrow_back_ios, arrow_forward, arrow_forward_ios, arrow_left, arrow_right, assignment, assignment_return, backspace, battery_unknown, call_made, call_merge, call_missed, call_missed_outgoing, call_received, call_split, chevron_left, chevron_right, chrome_reader_mode, device_unknown, dvr, event_note, featured_play_list, featured_video, first_page, flight_land, flight_takeoff, format_indent_decrease, format_indent_increase, format_list_bulleted, forward, functions, input, keyboard_tab, label, label_important, label_outline, last_page, launch, list, live_help, mobile_screen_share, multiline_chart, navigate_before, navigate_next, next_week, note, open_in_new, playlist_add, queue_music, redo, reply, reply_all, screen_share, send, short_text, show_chart, sort, star_half, subject, trending_flat, toc, trending_down, trending_up, undo, view_list, view_quilt, wrap_text`

Caveats before adopting it wholesale: it mirrors `arrow_left`/`arrow_right` (Apple says don't — row 1b); it mirrors `trending_up`/`show_chart`/`multiline_chart` while Material's own guidance says charts don't mirror (row 10); it mirrors `undo`/`redo` while M3's clockwise rule would not (row 8c). Google's own framing (S12) is *"Icons should only be mirrored if their direction matches other UI elements in RTL mode."*

---

## 5. Unicode / CLDR layer — what it does and does not give you

- **UAX #9 rule L4 (S1)** mirrors a character *iff* its resolved direction is R **and** `Bidi_Mirrored=Yes`. Worked example from the spec: `U+0028 LEFT PARENTHESIS` renders as `(` at even level and as the mirrored glyph at odd level. Backward-compat exception: `U+FD3E` / `U+FD3F` ORNATE PARENTHESES are **not** mirrored.
- **HL6 (S1, §4.3)** is the higher-level-protocol hook that permits additional mirroring beyond the default — the standard's own acknowledgement that the default set is not sufficient.
- **`BidiMirroring.txt` (S2)** maps `Bidi_Mirrored=Yes` characters to their mirror-image character *where one exists*, and warns that it is incomplete: characters with `Bidi_Mirrored=Yes` but no suitable mirror character *"are listed as comments at the end of the file"*, and *"for 'real' mirroring, a rendering engine needs to select appropriate alternative glyphs."*
- **Corrigendum #6 (S3)** shows the property is not immutable: Unicode 5.0 had set `Bidi_Mirrored=Yes` on eleven quotation-mark characters (U+2018–201F, U+301D–301F); this *"adversely affected several quotation mark characters in deployed data"* and was reverted to `No` effective 2007-08-10, folded into Unicode 5.1.
- **L2/22-026 (S4)** is the closest Unicode has to an "icon mirroring" document, and it is an *individual contribution, not a standard*. It proposes a `NonBidiMirroring.txt` data file listing `Bidi_Mirrored=No` characters that nonetheless have a mirror-image character — overwhelmingly arrows (U+2190↔U+2192, U+21A2↔U+21A3, the whole U+2B00 and U+1F800 arrow blocks), plus triangles/pointers (U+25B6↔U+25C0 — i.e. the play-triangle characters), crop marks, corner brackets, harpoons, and `U+2E2E REVERSED QUESTION MARK ↔ U+003F QUESTION MARK`. **Two load-bearing statements:** arrows *"were never given the Bidi_Mirrored=Yes property, though many are non-left-right symmetric"*; and *"the mirroring mappings in NonBidiMirroring.txt must not be used when mirroring due to bidi RTL text"* — they are for editing operations only.
- **CLDR/LDML (S5)** supplies only `<layout>` → `lineOrder` / `characterOrder` (paragraph direction per locale), with the constraint that if `lineOrder` is vertical then `characterOrder` must be horizontal and vice versa, and the explicit note that this *"does not override the ordering behavior of bidirectional text; it does, however, supply the paragraph direction for that text."* **CLDR carries no per-locale icon or symbol mirroring data.** Any claim that "CLDR tells you which symbols mirror" is wrong.

**Net:** the Unicode/CLDR layer covers brackets and relational operators in *text*. Every ruling in §1 above is a *design-system* decision, not a standards decision. That is why the W3C issue in S10 is still open.

---

## 6. Persian (fa-IR) specifics surfaced during this research

1. **Farsi is listed as an RTL language** written in the Arabic script — S9 (W3C) lists Iranian Persian [pes], ~77.4 M speakers.
2. **Question mark:** S28 [via index] states question-mark icons mirror **in Arabic and Farsi**, not Hebrew. Persian uses `؟` U+061F, a separate character — so help/FAQ icons should be **redrawn** with `؟`, not geometrically flipped. Apple ships this automatically in SF Symbols (S14).
3. **The Hebrew carve-outs do not apply to fa-IR.** M3's exceptions for linear progress indicators and timelines staying LTR are explicitly scoped to Hebrew (S28 [via index]). For Persian, progress mirrors.
4. **Digits:** localize to Persian digits ۰–۹ rather than mirroring anything (row 14). This is a numbering-system selection, not a bidi operation.
5. **Empirical Arabic-media evidence (S23) is the closest available proxy** for Persian chart conventions, and it is split 58/31 on time axes. There is no Persian-specific study in what I found.

---

## 7. Ranked open questions for the PatternFly fa-IR decision

1. **Time-axis charts** — the only truly unresolved item (§3). Needs a PatternFly ruling, plus a consistency requirement across a view.
2. **Media scrubber vs. progress bar** — same primitive, opposite rulings (rows 5 and 7). Needs a `playback` opt-out in the component API, mirroring Apple's `UISemanticContentAttribute`.
3. **Absolute vs. relative arrows** — Google and Apple genuinely disagree (row 1b). Recommend adopting Apple's naming discipline so the distinction is encoded in the icon name.
4. **Undo/redo** — Google's own two documents conflict (row 8c).
5. **Magnifier** — resolvable by inspecting PatternFly's own asset (row 15a); do not copy either vendor's verdict.
6. **Popper.js-based components** — already a documented PatternFly RTL gap (S26 §4.7).
