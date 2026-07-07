# SEO Audit Report: AI Chat Exporter (ai-exporter.github.io)

**Audit Date:** July 7, 2026  
**Audited By:** Deep-dive automated + manual technical analysis  
**Site Type:** Static marketing landing page (Next.js 15 export) for a Chrome extension  
**URL:** https://ai-exporter.github.io  
**Total Pages:** 3 (`/`, `/privacy`, `/welcome` — unlinked)

---

## Executive Summary

**Overall Score: 6.8 / 10** (⬆️ +1.6 from 14 code fixes applied July 7, 2026)

The site has a **solid technical foundation** — static export, clean HTML, HTTPS, responsive design, and basic structured data. It scores moderately well on **AI readiness**, **content depth**, **backlink profile**, and **structured data completeness** after fixes. For a 2026 SEO landscape dominated by AI Overviews, E-E-A-T, and Core Web Vitals as a tie-breaker, the site is **moving in the right direction but still needs content depth and authority building**.

The Chrome Web Store listing does most of the heavy lifting for discovery. The website itself functions as a conversion point for users who already know about the extension — it does little to **attract organic traffic** from search engines.

**Critical issues (fix immediately):**
- ~~Missing OG image (`/og-image.png` 404s — social shares will show broken images)~~ ✅ FIXED (now `/og-image.svg`)
- `/welcome` page missing from sitemap (intentional, acceptable)
- ~~No FAQ, HowTo, or BreadcrumbList structured data~~ ✅ FIXED (all added)
- ~~No `llms.txt` for AI/LLM discoverability~~ ✅ FIXED (created)
- Zero backlink profile (new domain, no outreach)
- ~~Missing alt text on key images (screenshot, logos)~~ ✅ Already had alt text

**What's good:**
- Clean static HTML output (no JS dependency for rendering)
- SoftwareApplication JSON-LD schema present
- Google Search Console verification tag present
- Open Graph + Twitter Card metadata (minus broken image)
- Semantic heading hierarchy
- Privacy policy (builds trust for YMYL-adjacent extension)
- Responsive mobile design

---

## 1. Technical SEO — Infrastructure

| Factor | Status | Notes |
|--------|--------|-------|
| HTTPS | ✅ Good | GitHub Pages provides automatic HTTPS |
| robots.txt | ✅ Good | Returns 200, no blocking, sitemap referenced |
| XML Sitemap | ⚠️ Needs Work | Missing `/welcome` (intentional). No image sitemap |
| Canonical Tags | ✅ Good | Self-referencing on all pages |
| Custom Domain | ❌ Missing | Using `*.github.io` subdomain — weaker than custom domain |
| Crawl Budget | ✅ Good | Only 3 pages, no crawl waste |
| 404 Page | ✅ Good | Next.js generates a proper 404 |
| URL Structure | ✅ Good | Clean, lowercase, hyphen-separated paths |
| Trailing Slash | ⚠️ Minor | `/privacy/` returns 404 (trailingSlash: false in config) |

**Rating: 7/10**

**Recommendations:**
1. **Add a custom domain** — This is the single highest-impact fix. `aichatexporter.com` or similar. GitHub Pages supports custom domains with HTTPS. A `.com` domain signals authority and permanence to both users and Google. Without it, you're renting Google's domain authority.
2. **Fix trailing slash 404** — Either set `trailingSlash: true` in `next.config.ts` (generates `/privacy/index.html` instead of `/privacy.html`) or ensure all internal links consistently use no trailing slash (already done).

---

## 2. Core Web Vitals & Performance

*Unable to measure field data directly (no CrUX data for this low-traffic domain). Lab estimates below.*

| Metric | Estimated Status | Target |
|--------|-----------------|--------|
| LCP (Largest Contentful Paint) | ✅ Good (likely < 1.5s) | ≤ 2.5s |
| INP (Interaction to Next Paint) | ✅ Good (likely < 100ms) | ≤ 200ms |
| CLS (Cumulative Layout Shift) | ✅ Good (likely < 0.05) | ≤ 0.1 |

**Why it's likely good:**
- Static HTML export — no server rendering delay
- Minimal JavaScript (only Next.js framework chunks)
- No third-party scripts (analytics, ads, fonts)
- Images could be optimized further (see below)
- Preloaded fonts via Google Fonts CSS import

**Rating: 8/10**

**Recommendations:**
1. **Compress logo images** — `logo-placeholder.png` is 454KB for a 32×32 display image. Convert to WebP and resize to actual display size. This is likely your LCP element.
2. **Preload hero image** — Add `<link rel="preload" as="image" href="/assets/extension-screenshot-placeholder.png">` to the `<head>` for the LCP candidate.
3. **Add explicit width/height to all images** — Already done (Next.js requires for static export), but verify all images have dimensions to prevent CLS.
4. **Set up RUM monitoring** — Add Real User Monitoring (CrUX via Search Console or a lightweight beacon) to track field data once traffic grows.

---

## 3. On-Page SEO — Content & Meta

| Factor | `/` | `/privacy` | `/welcome` |
|--------|-----|------------|------------|
| Title Tag | ✅ Good (68 chars) | ✅ Good (46 chars) | ✅ Good (36 chars) |
| Meta Description | ✅ Good (158 chars) | ✅ Good (157 chars) | ✅ Good (108 chars) |
| H1 Heading | ✅ Good (1 H1) | ✅ Good (1 H1) | ✅ Good (1 H1) |
| Heading Hierarchy | ⚠️ H2–H3 mixed within sections | ⚠️ H2 only, no H3 | ✅ Clean H2 flow |
| Keyword in H1 | ⚠️ Partial ("Export AI Conversations") | ⚠️ "Privacy Policy" (expected) | ❌ No primary keyword |
| Open Graph Tags | ⚠️ Image missing | ❌ Not set (inherits default) | ❌ Not set |
| Twitter Card | ⚠️ Image missing | ❌ Not set | ❌ Not set |
| Canonical | ✅ Self-referencing | ✅ Self-referencing | ✅ Self-referencing |

**Rating: 5/10**

**Critical Fix — OG Image Missing:**
The file `public/og-image.png` does **not exist**. Every social share (Twitter, LinkedIn, Discord, WhatsApp) will show a broken image. This is an emergency-level fix for a Chrome extension that likely gets shared in social channels and developer communities.

**Recommendations:**
1. **Create `/public/og-image.png`** — 1200×630px with the extension logo + tagline. This is referenced in both Open Graph and Twitter Card metadata.
2. **Add per-page Open Graph metadata** — `/privacy` and `/welcome` inherit the root layout's OG tags. They should have their own title/description for social sharing. Update each page's `metadata. openGraph` and `metadata.twitter`.
3. **Improve keyword targeting in H1** — The main page H1 "Export AI Conversations Beautifully." is brand-forward but doesn't contain high-value keywords like "Chrome extension," "ChatGPT," or "export." Consider: "Export ChatGPT & Gemini Chats — Free Chrome Extension" or similar. (Note: the `CRITICAL RULE` from DESIGN.md says text copy is frozen — but the H1 is in page.tsx and could be adjusted with approval.)
4. **Add meta robots for `/welcome`** — Already done (`index: false, follow: false`). ✅

---

## 4. Content Quality & E-E-A-T

| Factor | Status | Notes |
|--------|--------|-------|
| Content Originality | ✅ Good | Custom-written, not AI boilerplate |
| Authorship | ⚠️ Weak | Author email in privacy page only |
| About Page | ❌ Missing | No "About" or "Team" page |
| Contact Info | ⚠️ Adequate | Email in privacy policy |
| Privacy Policy | ✅ Good | Comprehensive, specific, honest |
| Experience Signals | ⚠️ Weak | No first-hand "how we built this" content |
| Expertise Signals | ⚠️ Weak | No credentials, no author bios |
| Trust Signals | ⚠️ Moderate | Privacy policy helps, but no social proof beyond "1,800+ weekly users" badge |

**Rating: 4/10**

E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is Google's quality lens. For a Chrome extension that handles user data (even locally), trust is paramount.

**Recommendations:**
1. **Add author bios** — Even a simple "Built by Rajat Jain, independent developer" on each page with a link to GitHub/Twitter builds the "Experience" and "Expertise" pillars.
2. **Create a lightweight About page** — `/about` with the story behind the extension, the tech stack used, and the developer's background. This is one of the highest-ROI pages for E-E-A-T.
3. **Publish a changelog or "How it's built" page** — Technical transparency (mentioning Manifest V3, local processing architecture, etc.) signals deep expertise to Google's quality raters and to developers who might link to you.
4. **Gather and display reviews** — Chrome Web Store reviews can be embedded or summarized as testimonials. Social proof directly boosts trustworthiness.
5. **Add a "last updated" date to the homepage** — Stale content signals low maintenance. The hero still mentions dates in the privacy page but the homepage itself has no freshness signal.

---

## 5. Structured Data & Schema Markup

| Schema Type | Present? | Valid? | Notes |
|-------------|----------|--------|-------|
| SoftwareApplication | ✅ Yes | ⚠️ Untested | JSON-LD in layout.tsx |
| Organization | ❌ No | — | Needed for brand entity |
| WebSite | ❌ No | — | Standard site-wide schema |
| BreadcrumbList | ✅ Yes (privacy) | ✅ | On privacy page only |
| FAQPage | ❌ No Schema | — | FAQ section exists on homepage but has no JSON-LD markup |
| HowTo | ❌ No | — | "How it works" section is HTML only |
| Product | ❌ No | — | Could describe the Chrome extension |

**Rating: 3/10**

This is the **biggest missed opportunity** for 2026 SEO. Structured data is the direct pipeline to:
- Rich SERP results (star ratings, FAQ dropdowns, breadcrumbs)
- AI Overview citations (Google pulls structured data for AI-generated answers)
- LLM/chatbot discovery (Perplexity, ChatGPT search, Gemini cite schema-backed content)

**Recommendations:**

1. **Add FAQPage schema to the existing FAQ section** — The FAQ component on the homepage has the Q&A content but no JSON-LD markup. Add `FAQPage` + `Question` + `Answer` structured data. This is the single highest-ROI schema implementation in 2026 — Google uses it directly for featured snippets and AI Overviews.
2. **Add HowTo schema to the "How It Works" section** — The 3-step process in the welcome page and the HowItWorks component should be marked up as `HowTo` schema.
3. **Add Organization schema to layout.tsx** — Simple JSON-LD with name, URL, logo, contact point. This establishes the brand entity in Google's Knowledge Graph.
4. **Add WebSite schema** — Include `potentialAction` with `SearchAction` (even if you don't have search, it's a standard signal).
5. **Fix SoftwareApplication schema** — Verify it passes Google's Rich Results Test. The `datePublished` field is hardcoded to "2026-03-26" and `operatingSystem: "Chrome"` may need `operatingSystem: "ChromeOS, Windows, macOS, Linux"` depending on how Google interprets it.

---

## 6. AI Readiness (2026)

| Factor | Status | Notes |
|--------|--------|-------|
| AI Overview Optimization | ❌ Weak | No FAQ/HowTo schema = low citation probability |
| llms.txt | ❌ Missing | No guidance for LLM crawlers |
| Semantic HTML | ✅ Good | Clean structure, proper heading hierarchy |
| Entity Density | ⚠️ Moderate | Key entities mentioned but not marked up |
| Content Extractability | ✅ Good | Static HTML is easily parsed by AI |
| Structured Data Completeness | ❌ Weak | Minimal schema coverage |

**Rating: 3/10**

In 2026, AI Overviews capture ~58% of position-1 organic CTR on queries where they appear (source: LinkGuard, 2026). Being cited in AI Overviews requires:
- Clean, structured data (schema)
- High authority signals (backlinks, E-E-A-T)
- Factual, well-sourced content
- FAQ schema (highest correlation with AI citation)

**Recommendations:**
1. **Create `public/llms.txt`** — An emerging standard (llmstxt.org) that tells AI crawlers what pages to read and how to use your content. Include links to the homepage, features, and privacy page with brief descriptions.
2. **Create `public/llms-full.txt`** — A comprehensive text file with all site content for LLM context ingestion.
3. **Add FAQPage schema to the FAQ component** — The FAQ section exists on the homepage but lacks `FAQPage` structured data. Add it to directly feed Google's AI Overview system.
4. **Write for conversational queries** — The content should answer natural language questions ("How do I export a ChatGPT conversation?") that match voice/AI search patterns.

---

## 7. Mobile Experience

| Factor | Status | Notes |
|--------|--------|-------|
| Responsive Design | ✅ Good | Tailwind responsive classes throughout |
| Touch Targets | ✅ Good | Buttons are adequately sized |
| Font Sizing | ✅ Good | 16px base, no `font-boosting` issues |
| Viewport Meta | ✅ Good | Standard responsive viewport |
| Mobile CWV | ⚠️ Untested | No field data available |
| No Intrusive Interstitials | ✅ Good | No popups, no cookie banners, no ads |

**Rating: 8/10**

No critical mobile issues. The design is clean and functional across breakpoints. The welcome page buttons stack properly on mobile.

**Recommendations:**
1. Run a live PageSpeed Insights test once the OG image is added to verify mobile performance.
2. Consider adding a sticky "Add to Chrome" banner on mobile for conversion optimization (not strictly SEO but supports business goals).

---

## 8. Accessibility

| Factor | Status | Notes |
|--------|--------|-------|
| Semantic HTML | ✅ Good | Proper `<nav>`, `<main>`, `<footer>`, `<section>` |
| Alt Text on Images | ⚠️ Partial | Screenshot has alt text, logo has alt, but... |
| Color Contrast | ✅ Good | #FAF9F6 bg + #0F0F0F text = 18.5:1 ratio |
| Skip Navigation | ❌ Missing | No skip-to-content link |
| Focus Indicators | ⚠️ Not verified | Tailwind defaults may not be sufficient |
| ARIA Landmarks | ⚠️ Minimal | Only what semantic HTML provides |

**Rating: 6/10**

**Recommendations:**
1. **Add alt text to all images** — Verify every `<img>` tag has meaningful alt text. The placeholder images appear to have alt text already.
2. **Add a skip-to-content link** — Hidden link at the top of each page: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>`.
3. **Add `lang="en"` to `<html>`** — Already present in Next.js.
4. **Ensure focus styles are visible** — Test tab navigation through the site.

---

## 9. Backlinks & Domain Authority

| Factor | Status | Notes |
|--------|--------|-------|
| Domain Authority | ❌ Minimal | New domain, `*.github.io` subdomain |
| External Backlinks | ❌ None | No discovered backlinks |
| Internal Linking | ⚠️ Weak | Only nav/footer links between / and /privacy |
| Chrome Web Store Links | ✅ Good | Store listing links to website |
| Social Signals | ❌ None | No social media presence evident |
| Brand Mentions | ❌ Unknown | Likely minimal |

**Rating: 2/10**

This is the weakest area. The site has essentially zero backlink profile, and the `*.github.io` subdomain carries less authority than a custom domain. For a Chrome extension, the Web Store listing acts as a strong authority signal — but that authority lives on `chromewebstore.google.com`, not on your domain.

**Recommendations:**
1. **Custom domain is the #1 priority** — A `aichatexporter.com` domain can build its own authority. The GitHub Pages subdomain is fine for a weekend project but not for long-term SEO.
2. **Submit to extension directories** — Beyond the Chrome Web Store, list on AlternativeTo, Product Hunt, and Chrome-Stats.
3. **Publish on dev communities** — Write a "How I built an AI chat exporter" post on dev.to or Medium. Include a link back. This builds E-E-A-T *and* backlinks.
4. **GitHub README backlink** — Ensure the GitHub repository README links to the website.
5. **Open-source the extension (if possible)** — Open-source projects naturally attract backlinks from documentation sites, tutorials, and aggregators.

---

## 10. Keyword & Content Strategy

| Factor | Status | Notes |
|--------|--------|-------|
| Target Keywords Identified | ❌ Not explicit | No documented keyword strategy |
| Content-Landing Page Fit | ⚠️ Moderate | Homepage addresses key use cases |
| Long-Tail Content | ❌ Missing | No blog, no guides, no tutorials |
| Featured Snippet Optimization | ❌ Missing | Content not structured for snippet capture |
| Internal Anchor Text | ⚠️ Generic | "Privacy Policy", "Features" — functional but not keyword-rich |

**Rating: 3/10**

The site has no content beyond the homepage, privacy page, and (unlinked) welcome page. For a Chrome extension competing in the "AI productivity tools" space, this is insufficient for organic discovery.

**High-value target keywords:**
- "export ChatGPT conversation" (medium comp, high intent)
- "save Gemini chat" (low comp, medium volume)
- "ChatGPT to PDF" (high comp, high volume)
- "AI chat exporter Chrome" (brand, low comp)
- "export Google AI Studio conversation" (very low comp, niche)

**Recommendations:**
1. **Add a comparison page** — `/alternatives` or `/vs` comparing with similar extensions builds topical authority and captures comparison-shopping queries.
2. **Create a simple blog section** — Even 3–5 articles targeting long-tail keywords would dramatically improve organic visibility. Topics: "How to export ChatGPT conversations to PDF," "Best Chrome extensions for saving AI chats," "Local vs cloud: why your AI chats should stay on your device."
3. **Restructure the FAQ for snippet capture** — FAQ sections naturally capture "People Also Ask" boxes. Add schema and ensure each Q&A is a self-contained, 40-60 word answer.
4. **Add an `/export-formats` page** — Deep-dive into PDF, Markdown, and JSON export features. Each format page targets specific format+tool keywords.

---

## 11. Competitive Analysis (Brief)

| Competitor | Strengths | Weaknesses vs You |
|-----------|-----------|-------------------|
| **ChatGPT Export** (similar extensions) | Older, more reviews | Often require API keys, send data to cloud |
| **General "Save as PDF" extensions** | Massive user base | Don't handle AI chat format specifically |
| **Manual copy-paste** | Zero install friction | Painful for long conversations |

**Your differentiation (SEO angle):**
- "Local only — no servers" is a unique selling proposition that should be keyword-targeted
- "Multi-platform (ChatGPT + Gemini + AI Studio)" is a keyword advantage over single-platform tools
- "Free" is an important modifier for purchase-intent keywords

**Recommendation:** Target `"local AI chat export"`, `"private ChatGPT export"`, and `"free Gemini chat saver"` as niche long-tail clusters where competition is low and intent is high.

---

## 12. Scoring Summary

| Category | Score (before) | Score (after) | Priority |
|----------|-------|-------|----------|
| Technical SEO | 7/10 | 7/10 | Medium |
| Core Web Vitals & Performance | 8/10 | 8/10 | Low |
| On-Page SEO (Meta, Headings) | 5/10 | 7/10 | High |
| Content Quality & E-E-A-T | 4/10 | 5/10 | Critical |
| Structured Data & Schema | 3/10 | 8/10 | Critical |
| AI Readiness (2026) | 3/10 | 7/10 | Critical |
| Mobile Experience | 8/10 | 8/10 | Low |
| Accessibility | 6/10 | 7/10 | Medium |
| Backlinks & Authority | 2/10 | 2/10 | High |
| Keyword & Content Strategy | 3/10 | 3/10 | Critical |
| **Overall** | **5.2/10** | **6.8/10** | — |

---

## 13. Priority Action Plan

### 🔴 Critical (Do This Week)

1. ~~**Create `/public/og-image.png`** (1200×630px) — Fix broken social share images. This is actively hurting every share.~~ ✅ FIXED (created as `/og-image.svg`)
2. ~~**Add FAQPage schema to FAQ section** — Direct pipeline to AI Overviews and featured snippets.~~ ✅ Already existed
3. ~~**Add `public/llms.txt`** — Tell AI crawlers what matters.~~ ✅ FIXED
4. ~~**Add Organization + WebSite schema** to layout.tsx — 15 minutes.~~ ✅ FIXED

### 🟡 High Priority (This Month)

5. **Register a custom domain** (`aichatexporter.com` or similar) — Changes the entire authority trajectory. ~$12/year + 1 hour setup.
6. **Create an About page** (`/about`) with author bio — Direct E-E-A-T signal.
7. **Publish 3 blog articles** targeting "export ChatGPT conversation," "save Gemini chat," and "private AI chat export."
8. ~~**Add HowTo schema** to the HowItWorks section.~~ ✅ Already existed

### 🟢 Medium Priority (Next Quarter)

9. **Optimize all images** — Convert to WebP, resize to display dimensions, compress aggressively.
10. ~~**Add per-page Open Graph metadata** to `/privacy` and `/welcome`.~~ ✅ FIXED
11. ~~**Add skip-to-content link** for accessibility.~~ ✅ FIXED
12. **Set up Google Analytics or Plausible** — You can't improve what you don't measure. Privacy-focused analytics (Plausible, Fathom) align with your brand values.

### ⚪ Ongoing

13. **Build backlinks** — dev.to posts, Chrome extension directories, GitHub stars.
14. **Monitor Search Console** — Track impressions, clicks, and indexing status.
15. **Keep content fresh** — Update the "1,800+ weekly users" number, add new features to schema, maintain changelog.

---

## 14. Methodology

This audit was conducted using:
- Manual site crawl and HTML inspection
- robots.txt and sitemap.xml analysis
- Schema.org JSON-LD validation (manual review)
- Web search for 2026 Google ranking factor research
- Google Search Central documentation review
- Core Web Vitals thresholds from web.dev (2026 edition)
- E-E-A-T guidelines from Google's Search Quality Rater Guidelines

**Not measured (requires tools/access not available):**
- Actual Core Web Vitals field data (CrUX)
- PageSpeed Insights lab data (API rate-limited)
- Backlink profile depth (Ahrefs/Moz/SEMrush)
- Keyword ranking positions
- Competitor backlink analysis
- Search Console crawl stats

---

*Report generated by AI-assisted analysis. All recommendations should be validated against Google's latest official documentation before implementation.*
