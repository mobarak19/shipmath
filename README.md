# ShipMath: App Store calculators for iOS developers

Calculators and tools for iOS developers. Static site (Astro), hosted on Cloudflare. **AI cost tools moved to the sister site TokenMeter** (`~/Desktop/sites/Top_4_Ideas/02_AI_ML_Developer_Utilities/website`), so the two sites don't compete for the same searches.

## Pages (26)

| Section | Tools |
|---|---|
| **Fees & payments** | App Store fee calculator (VAT-aware, 25 storefronts) · Google Play fee calculator · Web checkout vs in-app purchase (2025 US ruling) · EU alternative terms (DMA fees, editable rates) |
| **Subscriptions & growth** | Revenue · MRR & ARR · LTV (+ CAC payback, LTV:CAC) · Churn · Paywall & free trial (plan A vs B) · ROAS & paid UA payback · Ad revenue (AdMob-style eCPM) |
| **Submission & ASO** | Privacy manifest generator (`PrivacyInfo.xcprivacy`) · Screenshot size checker & resizer · App icon generator (`AppIcon.appiconset`) · ASO character & keyword optimiser · App rating calculator |
| Content | Guides: App Store fees explained, Web checkout vs IAP after the 2025 ruling · About · Privacy · Terms · Disclosure |

## Run

Requires **Node.js 22.12+** (Astro 7).

```bash
npm install
npm run dev            # http://localhost:4321
npm run build && npm run preview
```

## Deploy (Cloudflare Workers)

Cloudflare builds and deploys on every push to `main` (Workers Builds: build command `npm run build`, static assets from `dist`). Node 24 comes from `.node-version`. `public/_headers` (CSP and security headers) is applied automatically.

- Live URL: `SITE.url` in `src/data/site.ts`, used for canonical links and the sitemap. Change it when you add a custom domain.
- Visit statistics: create a site under Cloudflare dashboard → Web Analytics, and paste its token into `SITE.analyticsToken`.

Use `u('/path/')` for internal links.

## Before launch

- Re-check dated rules: `RULES_REVIEWED` and `EU_ALT_TERMS` in `src/data/appstore.ts`, the 2025 US link-out ruling (Apple's appeal), and screenshot sizes after each WWDC.

- Name & URL: `src/data/site.ts` ("ShipMath" is a placeholder), `public/manifest.webmanifest`.
- Monetization: `src/data/monetization.ts`: subscription-SDK sponsor, ASO tool, screenshot tool, your own app. Hidden in production until filled. Set `sister.url` in `src/data/site.ts` to TokenMeter's real URL.
- Add the site to Google Search Console and submit `sitemap-index.xml`.

## Engineering notes

- **Strict CSP** (`script-src 'self'`) as a `<meta>` tag; `vite.build.assetsInlineLimit: 0` keeps Astro from inlining scripts, which the CSP would block.
- Calculators: live results, inputs mirrored to the URL (shareable), `Copy link` / `Reset`, and a sticky live-result bar on mobile.
- Icons and resized screenshots are written with a small **RGB PNG encoder** (`src/lib/png.ts`), because `canvas.toBlob()` always adds an alpha channel, which App Store Connect rejects for app icons.
- VAT is removed **before** commission (€9.99 DE @15% → €7.14, not €8.49).

## Tests run before hand-off

October 2026 additions: maths checks for the new calculators (rating formula verified minimal against 20k random cases, renewal maths against simulation, web-checkout break-even), generated `PrivacyInfo.xcprivacy` validated with `plutil -lint`, every new page rendered in headless Chrome with results matching hand calculations and no console/CSP errors.

Earlier:

25 browser checks (exact calculator values, URL state, screenshot ZIP, icon set with RGB PNG, 9 pages at 390 px, dark mode, zero console/CSP errors) and ~690 randomized maths checks against independent formulas. All re-run under a GitHub Pages sub-path after the AI tools were moved out.
