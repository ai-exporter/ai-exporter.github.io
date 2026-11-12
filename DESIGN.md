# AI Chat Exporter — Product Visual Identity

Product: AI Chat Exporter Chrome Extension
Vibe/Aesthetic: "Calm Utility" — Cal.com's editorial structure and confident
typography, softened by AI Fiesta's mint/aqua atmosphere and VideoHub's
oversized footer wordmark.
Target Emotion: Trustworthy, spacious, quietly premium, and deeply private.

## Core directives

1. **Copy is product truth.** Do not rewrite marketing claims or privacy policy
   wording. The privacy policy text must remain byte-for-byte identical when
   restyling.
2. **Calm over noise.** Whitespace, hairline borders, and one accent color do
   the work. Avoid stacked gradients, neon glows, glassmorphism everywhere, and
   decorative 3D blobs.
3. **Light by default.** White canvas, soft gray surfaces, deep forest accent.
   Dark UI is reserved for the privacy feature card, the JSON format card, and
   the footer.
4. **Real proof only.** The reviews carousel uses real Chrome Web Store reviews
   (4.6 average / 19 ratings). Do not invent testimonials, logos, or metrics.

## Design direction

- **Structure and type:** Cal.com — centered hero, generous section rhythm,
  large display headlines, compact body copy, pill buttons, quiet nav.
- **Atmosphere:** AI Fiesta — mint and aqua gradients used as large, soft stages
  behind product UI; white floating cards; subtle dot patterns.
- **Footer and motion:** VideoHub / vidub — dark forest footer with a giant,
  low-contrast wordmark and gentle floating chips in hero/CTA stages.

## Color tokens

Defined in `tailwind.config.ts` and `app/globals.css`.

| Token | Value | Use |
| --- | --- | --- |
| `canvas` | `#ffffff` | Page background |
| `surface` | `#f5f5f5` | Filled bars, skeletons |
| `surface-soft` | `#f8f9fa` | Quiet panels, hover fills |
| `hairline` | `#e5e7eb` | Borders and dividers |
| `hairline-soft` | `#f3f4f6` | Inner dividers |
| `ink` | `#111111` | Headings and primary text |
| `body` | `#374151` | Body copy |
| `muted` | `#6b7280` | Metadata, captions |
| `mint` | `#eaf8f2` | Icon tiles, badges, accents |
| `mint-strong` | `#d7f0e5` | Stronger mint wash |
| `aqua` | `#e7f4f9` | Secondary cool wash |
| `forest` | `#0c3b2e` | Primary CTA, links, footer |
| `forest-hover` | `#0f4a39` | CTA hover |
| `emerald` | `#10b981` | Small live/local status dots |

Stage gradients combine mint → aqua → a hint of periwinkle:

```css
linear-gradient(125deg, #eaf8f2 0%, #e7f4f9 52%, #eef3ff 100%)
```

Use white at low opacity plus a radial highlight inside stages so the product
mockup feels lit, not flat.

## Typography

- **Display:** Cal Sans (self-hosted, OFL) via `next/font/local`.
  Single weight 400, renders semibold by design. Tight tracking
  (`-0.03em` to `-0.05em`), tight leading (0.96–1.05) for large headlines.
- **Body/UI:** Inter via `next/font/google`. 14–17px body, 1.6–1.8 line height.
- **Technical metadata:** JetBrains Mono via `next/font/google`. Used for
  version numbers, dates, file names, code previews, and small labels.

Rules:

- Headings use `font-display` through the base layer.
- Keep body copy at `text-body`; reserve pure `text-ink` for emphasis.
- Eyebrows: 11–12px, semibold, uppercase, `0.18em` tracking, `text-muted`.
- Avoid all-caps for long strings and avoid more than two typefaces per view.

## Layout

- Max content width: **1200px** (`.container-page`, 20px mobile gutters,
  32px from `sm`).
- Section vertical rhythm: 80px mobile, 96–112px desktop. Hero gets extra top
  padding for the fixed 64px navbar.
- Grids: 1 column mobile, 2 at `sm`, 3 at `lg` for feature/format cards.
- How-it-works sits inside a full-width `stage-soft` panel with an interactive
  three-step tab switcher.
- Reviews are a horizontal snap carousel, not a grid: card width 84vw mobile,
  380px desktop, arrows top-right, edge fade on desktop.
- Footer closes the page; the closing CTA stage sits between FAQ and footer.

## Components

- **Navbar:** fixed, 64px tall, white/85 with backdrop blur, hairline bottom.
  Text links, Privacy, and a deep-forest pill CTA. Full-screen mobile sheet.
- **Buttons:** 44–48px tall, fully rounded. Primary `forest`; secondary white
  with a hairline border. Add `hover:bg-forest-hover` and a soft forest shadow
  on primary hover.
- **Cards:** 16px radius (`rounded-2xl`), 1px hairline, white fill, `shadow-soft`
  (`0 1px 2px` + `0 8px 24px` at low opacity). Hover lift is 4px max.
- **Stages:** 28–32px radius, gradient fill, thin white border. Use for hero
  product demo, how-it-works, format showcase, closing CTA, and welcome hero.
- **Chips:** White/90 pills, hairline or white border, 11–12px semibold, tiny
  mint/forest icon. Used for ratings, trust signals, and format labels.
- **Floating chips:** White cards with a small colored icon tile, 12px labels,
  and a 30px soft shadow. Use sparingly around product stages; hide on mobile.
- **Browser mockups:** Rounded 20px, hairline border, three traffic-light dots,
  a URL pill, and product UI inside. Keep real screenshot imagery where it adds
  credibility.
- **Footer:** Deep forest with a 1px dot grid, white logo variant, three link
  columns, trust badges, legal disclaimer, and a giant `AI Chat Exporter`
  wordmark at 8% white. It should feel like a closing curtain, not a sitemap.

## Iconography

- Lucide icons, 1.8 stroke width, 16–20px in UI, 20–24px in tiles.
- Icon tiles are 40–44px, `rounded-xl`, mint background with forest icon, or a
  tinted format color (red for PDF, mint for Markdown, aqua for JSON).
- Do not mix filled, outlined, and emoji icons in the same surface.

## Motion

- Only three motions: card hover lift, floating chips (`animate-float`), and
  accordion/tab transitions (200–300ms ease-out).
- No autoplaying carousels. Review arrows use native smooth scrolling.
- Respect `prefers-reduced-motion`; all animation and smooth scrolling is
  disabled in `app/globals.css`.

## Page composition (home)

1. Hero — rating/usage chips, display headline with hand-drawn underline,
   subhead, dual CTA, trust line, full browser stage with floating format
   chips, works-with strip.
2. Features — centered intro, six-card grid, dark forest privacy card.
3. How it works — gradient stage, step tabs, two-column copy/mockup panel.
4. Formats — gradient stage with PDF, Markdown, and dark JSON cards.
5. Reviews — real reviews carousel with aggregate rating and store link.
6. FAQ — sticky left intro/support card, right hairline accordion.
7. Closing CTA — gradient stage, oversized headline, install + reviews CTAs.
8. Footer — dark forest, giant wordmark.

## Accessibility and quality checks

- One `h1` per page; section headings follow in order.
- All interactive controls have visible focus rings (forest, 2px, 3px offset).
- Icon-only controls need `aria-label`; decorative visuals are `aria-hidden`.
- Review carousel is a focusable `region` with arrow controls and scroll
  state.
- Mobile menu traps nothing it shouldn't: Escape closes, body scroll locks,
  menu links close the sheet.
- Text must meet WCAG AA on white and forest backgrounds. White/65 on forest is
  the floor for secondary footer text.
- Use `next/link` for internal routes and plain anchors for hashes/external
  URLs. External links use `rel="noopener noreferrer"`.

## Anti-patterns (do not ship)

- Cream paper backgrounds, hard offset shadows, serif editorial headlines.
- Purple/blue "AI" gradients, glowing orbs, or gradient text.
- Rounded-square buttons when a pill would do.
- Fabricated reviews, star inflation, or "trusted by" logos we cannot prove.
- Changing privacy policy wording, feature claims, or version numbers.
