// Tool registry: one entry per tool page (content written for people first).
import type { PlacementId } from './monetization';

export type Section = 'ios';

export interface Tool {
  slug: string;
  section: Section;
  icon: string;
  name: string;
  card: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  placement?: PlacementId;
  sections: { h2: string; html: string }[];
  faq: [string, string][];
  related: string[];
}

export const SECTIONS: Record<Section, { name: string; short: string; icon: string; hub: string; text: string }> = {
  ios: { name: 'App Store tools', short: 'iOS', icon: 'phone', hub: 'app-store-tools', text: 'Fees, proceeds, subscription metrics and App Store assets for iOS developers.' },
};

export const TOOLS: Tool[] = [
  // ───────────────────────────────────────────────────────────── iOS
  {
    slug: 'app-store-fee-calculator',
    section: 'ios',
    icon: 'dollar',
    name: 'App Store Fee Calculator',
    card: 'What Apple keeps and what you receive, including VAT. Compared with Google Play and web checkout.',
    title: 'App Store Fee Calculator: Apple Commission & Proceeds (with VAT)',
    description: 'Calculate your App Store proceeds after Apple’s 15% or 30% commission and VAT. Compare with Google Play and web checkout fees, by country.',
    h1: 'App Store fee calculator',
    lead: 'See exactly what Apple keeps and what you receive from each sale or subscription, with VAT removed correctly for every storefront.',
    placement: 'fee',
    sections: [
      {
        h2: 'How Apple calculates your proceeds',
        html: `<p>Apple removes <strong>sales tax / VAT first</strong>, then takes its commission from the remaining net price:</p>
<pre><code>net price  = customer price ÷ (1 + VAT rate)
commission = net price × 15% or 30%
proceeds   = net price − commission</code></pre>
<p>In the US and Canada, prices are shown <em>before</em> tax, so a $9.99 sale at 15% pays you about <strong>$8.49</strong>. In most other countries the price <em>includes</em> VAT. A €9.99 sale in Germany (19% VAT) at 15% pays about <strong>€7.14</strong>, not €8.49. Calculators that skip this step overstate international revenue by 15–20%.</p>`,
      },
      {
        h2: '15% or 30%?',
        html: `<ul><li><strong>30%</strong>: the standard commission.</li><li><strong>15%</strong>: members of the <a href="https://developer.apple.com/app-store/small-business-program/" rel="noopener">App Store Small Business Program</a> (up to $1M in proceeds in the previous calendar year).</li><li><strong>15%</strong>: auto-renewable subscriptions after a subscriber has completed one year of paid service.</li></ul>
<p>Google Play is similar: 15% on the first $1M of earnings each year and on auto-renewing subscriptions, 30% above that.</p>
<div class="callout"><p>Rules differ by region and change over time (for example, alternative terms in the EU and court-ordered changes to linking out to web purchases in the US). Use the “web checkout” comparison as a scenario, and confirm what applies to your app in App Store Connect.</p></div>`,
      },
    ],
    faq: [
      ['Does Apple take its commission before or after VAT?', 'After. Apple first removes the VAT or GST included in the price, then calculates its commission on the net amount. That is why the same price earns less in VAT-inclusive countries.'],
      ['How much do I get from a $0.99 app?', 'In the US: about $0.84 at 15% commission or $0.69 at 30%. In VAT countries it is less, because VAT is removed first.'],
      ['Are these the exact amounts Apple pays?', 'They are close estimates. Apple uses fixed price points and publishes exact proceeds per storefront in App Store Connect (Pricing and Availability). Some countries also apply digital services taxes, and currency conversion happens at payout.'],
      ['Is web checkout always cheaper?', 'Not necessarily. Card fees are lower than 15–30%, but conversion is usually lower outside the native purchase sheet, and you handle refunds, tax and support. Use the conversion field to model the trade-off.'],
    ],
    related: ['web-checkout-vs-in-app-purchase-calculator', 'google-play-fee-calculator', 'eu-alternative-terms-calculator', 'app-revenue-calculator'],
  },
  {
    slug: 'app-revenue-calculator',
    section: 'ios',
    icon: 'trending',
    name: 'App Revenue Calculator',
    card: 'Downloads × conversion × price → monthly revenue and proceeds after fees and refunds.',
    title: 'App Revenue Calculator: Estimate App Store Income',
    description: 'Estimate monthly and yearly app revenue from downloads, conversion rate and price, after Apple’s commission, VAT and refunds. Free App Store revenue estimator.',
    h1: 'App revenue calculator',
    lead: 'Turn downloads, conversion rate and price into realistic monthly proceeds after the store’s cut, VAT and refunds.',
    placement: 'fee',
    sections: [
      {
        h2: 'The formula',
        html: `<pre><code>paying users  = downloads × conversion rate
gross sales   = paying users × price
proceeds      = gross ÷ (1 + VAT) × (1 − commission) × (1 − refund rate)</code></pre>
<p>Typical download-to-paid conversion ranges from under 1% for ad-supported or freemium apps to several percent for apps with a strong paywall and free trial. Use your own App Store Connect numbers once you have them.</p>`,
      },
    ],
    faq: [
      ['What is a good conversion rate for a paid app?', 'It varies widely by category and paywall design. Many subscription apps see roughly 1–5% of installs start paying. Measure your own, because benchmarks are only a starting point.'],
      ['Should I use the average VAT rate?', 'Use a blended rate that matches where your users are. US-heavy apps can use a low rate; Europe-heavy apps should use about 20%.'],
    ],
    related: ['app-store-fee-calculator', 'subscription-mrr-calculator', 'app-ltv-calculator', 'app-churn-calculator'],
  },
  {
    slug: 'subscription-mrr-calculator',
    section: 'ios',
    icon: 'repeat',
    name: 'MRR & ARR Calculator',
    card: 'Monthly and annual recurring revenue from weekly, monthly and yearly subscribers.',
    title: 'MRR & ARR Calculator for App Subscriptions',
    description: 'Calculate MRR and ARR for app subscriptions with weekly, monthly and annual plans, before and after App Store fees. Normalises every plan correctly.',
    h1: 'MRR & ARR calculator for app subscriptions',
    lead: 'Add your subscribers per plan and see monthly and annual recurring revenue, both gross and after the store’s commission.',
    placement: 'subscription',
    sections: [
      {
        h2: 'How plans are normalised',
        html: `<ul><li><strong>Weekly</strong>: price × 52 ÷ 12 per month (not × 4, which understates by 8%).</li><li><strong>Monthly</strong>: price as is.</li><li><strong>Yearly</strong>: price ÷ 12. MRR spreads annual revenue evenly, even though you are paid up front.</li></ul>
<p><strong>ARR = MRR × 12.</strong> Trials are excluded: only paying subscribers count toward MRR.</p>`,
      },
    ],
    faq: [
      ['Should MRR be calculated before or after Apple’s fee?', 'Both are useful. Gross MRR compares with industry benchmarks; net MRR (proceeds) is what you actually receive. This calculator shows both.'],
      ['Do annual plans count fully in the month they are paid?', 'No. For MRR, divide annual revenue by 12. Cash flow is different: you receive the full annual payment, minus fees, up front.'],
    ],
    related: ['app-ltv-calculator', 'paywall-trial-calculator', 'app-churn-calculator', 'app-store-fee-calculator'],
  },
  {
    slug: 'app-ltv-calculator',
    section: 'ios',
    icon: 'coins',
    name: 'App LTV Calculator',
    card: 'Customer lifetime value from ARPU and churn, with CAC payback and LTV:CAC.',
    title: 'App LTV Calculator: Lifetime Value, CAC Payback & LTV:CAC',
    description: 'Calculate subscriber lifetime value (LTV) for your app from monthly revenue per user and churn, and check CAC payback and LTV:CAC for paid user acquisition.',
    h1: 'App LTV calculator',
    lead: 'Estimate how much a subscriber is worth over their lifetime, and how much you can afford to pay to acquire one.',
    placement: 'subscription',
    sections: [
      {
        h2: 'The formula',
        html: `<pre><code>lifetime (months) = 1 ÷ monthly churn
LTV              = monthly proceeds per subscriber × margin ÷ monthly churn
cost per payer   = cost per install ÷ install-to-paid conversion
LTV:CAC          = LTV ÷ cost per payer</code></pre>
<p>A common rule of thumb is <strong>LTV:CAC ≥ 3</strong> with payback in under 12 months, but cash-constrained indie developers often want payback within the first billing cycle.</p>
<div class="callout"><p>Simple LTV assumes constant churn. Real subscription churn is highest in the first months and then flattens. Use cohort data from your analytics once you have a few months of history.</p></div>`,
      },
    ],
    faq: [
      ['Should I use proceeds or price for ARPU?', 'Use proceeds (after store commission and VAT). That is the money available to pay for acquisition.'],
      ['What churn should I use for annual plans?', 'Convert to a monthly equivalent. If 60% of annual subscribers renew, monthly churn is about 1 − 0.6^(1/12) ≈ 4.2%.'],
    ],
    related: ['app-roas-calculator', 'app-churn-calculator', 'paywall-trial-calculator', 'subscription-mrr-calculator'],
  },
  {
    slug: 'app-churn-calculator',
    section: 'ios',
    icon: 'users',
    name: 'App Churn Calculator',
    card: 'Churn rate, retention and average subscriber lifetime from your monthly numbers.',
    title: 'App Churn Calculator: Subscriber Churn & Retention Rate',
    description: 'Calculate monthly subscriber churn, retention, net growth and average subscriber lifetime for your app. Includes annualised churn.',
    h1: 'App churn calculator',
    lead: 'Enter subscribers at the start of the month, new subscribers and cancellations to get churn, retention and growth.',
    placement: 'subscription',
    sections: [
      {
        h2: 'Definitions',
        html: `<pre><code>churn rate      = cancellations ÷ subscribers at start of period
retention       = 1 − churn
net growth      = (new − cancellations) ÷ start
annual churn    = 1 − (1 − monthly churn)^12
avg lifetime    = 1 ÷ monthly churn</code></pre>
<p>Count a subscriber as churned when their subscription <em>expires</em>, not when they turn off auto-renew, so that billing-retry recoveries aren't counted as churn.</p>`,
      },
    ],
    faq: [
      ['What is a good monthly churn rate for a subscription app?', 'It depends heavily on plan mix and category. Monthly plans often churn far faster than annual plans. Track churn per plan rather than one blended number.'],
      ['Is 5% monthly churn the same as 60% yearly?', 'No. Churn compounds: 5% per month is about 46% per year (1 − 0.95¹²).'],
    ],
    related: ['app-ltv-calculator', 'subscription-mrr-calculator', 'app-revenue-calculator', 'app-store-fee-calculator'],
  },
  {
    slug: 'app-store-screenshot-sizes',
    section: 'ios',
    icon: 'image',
    name: 'Screenshot Size Checker & Resizer',
    card: 'Check App Store screenshot sizes and resize images to an exact required size, in your browser.',
    title: 'App Store Screenshot Sizes: Checker & Resizer (iPhone, iPad, Mac)',
    description: 'Check your App Store screenshots against Apple’s required sizes for iPhone 6.9″, 6.5″, iPad 13″, Mac and Apple TV, and resize them to the exact pixel size. No upload.',
    h1: 'App Store screenshot sizes: check & resize',
    lead: 'Drop your screenshots to see which device size each one matches, or resize them to an exact accepted size, all processed locally.',
    placement: 'assets',
    sections: [
      {
        h2: 'Which sizes do you need?',
        html: `<p>For iPhone apps, Apple asks for the largest display size (<strong>6.9″</strong>, or 6.5″ if you don’t provide 6.9″) and scales those screenshots down for smaller devices. iPad apps need <strong>13″</strong> screenshots. You can upload up to 10 screenshots per localisation. They must be PNG or JPEG, RGB and flattened, with no transparency.</p>
<p>The sizes in this tool follow Apple’s published <a href="https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications" rel="noopener">screenshot specifications</a>. Apple adds new sizes when new devices launch, so double-check that page before a big release.</p>`,
      },
    ],
    faq: [
      ['Can I upload only 6.9″ screenshots for all iPhones?', 'Generally yes. Apple scales the largest size for smaller displays. Provide device-specific sets only if your UI differs significantly.'],
      ['Why is my screenshot rejected?', 'Common causes: the size isn’t on the accepted list, the image has transparency (alpha), or it uses a non-RGB colour space. The checker flags all three.'],
      ['Are my screenshots uploaded?', 'No. Images are read and resized in your browser and never leave your device.'],
    ],
    related: ['app-icon-generator', 'privacy-manifest-generator', 'aso-keyword-character-counter', 'app-rating-calculator'],
  },
  {
    slug: 'app-icon-generator',
    section: 'ios',
    icon: 'grid',
    name: 'App Icon Generator',
    card: 'Create a ready-to-drop AppIcon.appiconset (iOS single-size + dark/tinted, macOS set).',
    title: 'iOS App Icon Generator: AppIcon.appiconset for Xcode (Free)',
    description: 'Generate an Xcode AppIcon.appiconset from one 1024×1024 image: iOS single-size with dark and tinted variants, plus the full macOS icon set. Removes transparency. No upload.',
    h1: 'App icon generator for Xcode',
    lead: 'Drop one 1024×1024 image and download a complete AppIcon.appiconset: iOS (with optional dark and tinted variants) and macOS sizes, with Contents.json.',
    placement: 'assets',
    sections: [
      {
        h2: 'What you get',
        html: `<ul><li><strong>iOS</strong>: a single 1024×1024 icon. Since Xcode 14, Xcode generates every smaller size automatically.</li><li><strong>Dark &amp; tinted variants</strong> (iOS 18+), if you upload them.</li><li><strong>macOS</strong>: 16, 32, 128, 256 and 512 pt at @1x and @2x.</li><li>A correct <code>Contents.json</code>, so you can drag the folder into <code>Assets.xcassets</code>.</li></ul>
<p>The App Store icon must not contain transparency. The generator fills transparent areas with the background colour you choose. Don’t round the corners yourself; the system applies the mask.</p>`,
      },
    ],
    faq: [
      ['What size should my source image be?', '1024×1024 pixels, square, PNG. Larger square images are scaled down; smaller ones will look soft.'],
      ['Does this support the new iOS icon formats?', 'It produces the standard asset-catalog icon with light, dark and tinted appearances. Layered icons made in Apple’s Icon Composer are a separate file format; use Icon Composer for those.'],
    ],
    related: ['app-store-screenshot-sizes', 'aso-keyword-character-counter', 'app-store-fee-calculator', 'app-revenue-calculator'],
  },
  {
    slug: 'aso-keyword-character-counter',
    section: 'ios',
    icon: 'type',
    name: 'ASO Character Counter',
    card: 'App name, subtitle and keyword field limits, with duplicate-word and wasted-space checks.',
    title: 'App Store Keyword Field & Character Counter (ASO)',
    description: 'Count characters for your App Store name (30), subtitle (30), keywords (100 bytes), promotional text and description. Finds duplicate words and wasted keyword space.',
    h1: 'App Store character counter & keyword checker',
    lead: 'Write your App Store metadata within the limits, and get your 100-byte keyword field working harder.',
    placement: 'aso',
    sections: [
      {
        h2: 'Keyword field tips',
        html: `<ul><li>Separate keywords with commas and <strong>no spaces</strong>. Spaces waste bytes.</li><li>Don’t repeat words already in your <strong>app name or subtitle</strong>; they are indexed already.</li><li>Use singular <em>or</em> plural, not both, and don’t include your app name or category name.</li><li>The limit is <strong>100 bytes</strong>, not characters. Accented and non-Latin characters take 2–3 bytes each, which matters for localised keyword fields.</li></ul>`,
      },
    ],
    faq: [
      ['Is the description indexed for App Store search?', 'Apple has stated that the App Store relies on the name, subtitle and keyword field (plus things like in-app purchase names), not the long description. Write the description for conversion.'],
      ['Do spaces after commas count?', 'Yes. Every byte counts, so “photo, editor” wastes one byte compared with “photo,editor”.'],
    ],
    related: ['app-rating-calculator', 'app-store-screenshot-sizes', 'app-icon-generator', 'privacy-manifest-generator'],
  },
  {
    slug: 'web-checkout-vs-in-app-purchase-calculator',
    section: 'ios',
    icon: 'link',
    name: 'Web Checkout vs In-App Purchase',
    card: 'Should you link out to web payments? Fees, conversion drop-off and the break-even point.',
    title: 'Web Checkout vs In-App Purchase Calculator (Stripe vs Apple IAP)',
    description: 'Compare Apple in-app purchase with web checkout via Stripe or Paddle. Model card fees, conversion drop-off and the share of buyers who pay on the web, and find your break-even.',
    h1: 'Web checkout vs in-app purchase calculator',
    lead: 'Lower fees only help if buyers still finish paying. Model how many leave the app, how many complete checkout on the web, and what you keep either way.',
    placement: 'fee',
    sections: [
      {
        h2: 'How the comparison works',
        html: `<pre><code>in-app proceeds = price ÷ (1 + VAT) × (1 − Apple commission)
web proceeds    = price ÷ (1 + VAT) − card fee % × price − fixed fee − any Apple fee
mixed month     = buyers × (1 − web share) × in-app proceeds
                + buyers × web share × web conversion × web proceeds
break-even      = in-app proceeds ÷ web proceeds</code></pre>
<p>The key input is <strong>web conversion</strong>: of the buyers who tap your web link, how many finish paying compared with the native purchase sheet? Leaving the app, typing card details and signing in all lose people. Apple Pay and Link on the web page help.</p>`,
      },
      {
        h2: 'Why this changed in 2025',
        html: `<p>In April 2025 a US federal court ruled in <em>Epic v. Apple</em> that Apple must let apps on the <strong>US storefront</strong> link to web purchases without charging a commission on them or adding scare screens. Apple updated its App Review Guidelines for the US shortly after. Apple appealed, and later decisions could allow it to charge some fee on linked purchases, so the calculator has an <strong>Apple fee on web</strong> field you can set.</p>
<p>Outside the US, linking out is governed by different rules (for example the EU’s <a href="../eu-alternative-terms-calculator/">alternative terms</a>). Read our <a href="../guides/web-checkout-vs-in-app-purchase/">guide to the 2025 US ruling</a> for the details.</p>`,
      },
    ],
    faq: [
      ['Can US apps link to a website to pay?', 'Yes. Since the April 2025 court order, apps on the US App Store can include buttons and links to purchase on the web. Check Apple’s current guidelines, as the case has continued on appeal.'],
      ['Is Stripe cheaper than Apple’s 15–30%?', 'Per sale, yes: typical card fees are around 3% plus a fixed fee. But you lose some buyers on the way to the web, and you handle tax, refunds and support yourself (or pay a merchant of record more to do it).'],
      ['What web conversion should I assume?', 'There is no universal number. Start with a cautious guess, such as 60–80% of in-app conversion, then A/B test with a share of your users and measure.'],
      ['Should I keep in-app purchase as well?', 'Usually yes. Offering both lets buyers who prefer Apple Pay in the app pay there, and lets you measure the difference.'],
    ],
    related: ['app-store-fee-calculator', 'eu-alternative-terms-calculator', 'paywall-trial-calculator', 'subscription-mrr-calculator'],
  },
  {
    slug: 'eu-alternative-terms-calculator',
    section: 'ios',
    icon: 'globe',
    name: 'EU Alternative Terms Calculator',
    card: 'Apple’s EU (DMA) fees: acquisition fee, store services tiers and Core Technology Commission.',
    title: 'EU Alternative Terms Calculator: Apple DMA Fees vs Standard',
    description: 'Compare Apple’s standard App Store commission with the EU alternative business terms: initial acquisition fee, store services fee tiers and Core Technology Commission. Editable rates.',
    h1: 'EU alternative terms calculator',
    lead: 'Apple’s EU business terms replace one commission with three fees. See what each costs on your EU sales, and whether switching would earn you more.',
    placement: 'fee',
    sections: [
      {
        h2: 'The three fees',
        html: `<ul><li><strong>Initial acquisition fee</strong>: charged on sales to <em>new</em> users in their first six months. Enter the share of your sales that comes from new users.</li><li><strong>Store services fee</strong>: Tier 1 for basic App Store services, Tier 2 for the full set (automatic updates, App Store promotion, ratings and reviews and more). Tier 2 has a reduced rate for Small Business Program members and subscriptions after the first year.</li><li><strong>Core Technology Commission (CTC)</strong>: replaced the per-install Core Technology Fee from 1 January 2026.</li></ul>
<pre><code>net sales        = sales ÷ (1 + VAT)
alternative fees = net × (acquisition × new-user share + store services + CTC)
standard fee     = net × 15% or 30%</code></pre>`,
      },
      {
        h2: 'Before you switch',
        html: `<div class="callout"><p>These terms have changed several times since 2024, and the contract has details (eligibility, link-out rules, payment processing options) that a calculator can’t capture. Use this to see whether switching is worth a closer look, then read Apple’s <a href="https://developer.apple.com/support/dma-and-apps-in-the-eu/" rel="noopener">EU terms page</a>. All rates are editable for when they change.</p></div>`,
      },
    ],
    faq: [
      ['Who can use the EU alternative terms?', 'Developers distributing apps in the EU can opt into them. The terms apply to EU storefronts only; other countries stay on standard terms.'],
      ['Is the Core Technology Fee still €0.50 per install?', 'Apple announced that the per-install Core Technology Fee would be replaced by a percentage Core Technology Commission from 1 January 2026. Check Apple’s current page, as the terms keep changing.'],
      ['Are fees taken before or after VAT?', 'After. As with standard commission, Apple’s fees are calculated on the price excluding VAT.'],
    ],
    related: ['app-store-fee-calculator', 'web-checkout-vs-in-app-purchase-calculator', 'google-play-fee-calculator', 'app-revenue-calculator'],
  },
  {
    slug: 'google-play-fee-calculator',
    section: 'ios',
    icon: 'play',
    name: 'Google Play Fee Calculator',
    card: 'What Google keeps (15% or 30%) and what you earn, with tax removed by country.',
    title: 'Google Play Fee Calculator: Service Fee & Earnings (15% / 30%)',
    description: 'Calculate your Google Play earnings after the 15% or 30% service fee and VAT, by country. Compare with App Store proceeds for the same price.',
    h1: 'Google Play fee calculator',
    lead: 'See what Google keeps from each sale or subscription and what you earn, with tax handled for 25 countries, side by side with the App Store.',
    placement: 'fee',
    sections: [
      {
        h2: 'How Google Play fees work',
        html: `<ul><li><strong>15%</strong> on the first $1M of earnings each year (you need to enrol in the 15% tier), and on all auto-renewing subscriptions.</li><li><strong>30%</strong> on earnings above $1M in a year.</li></ul>
<p>Where Google is responsible for collecting VAT or GST, tax is removed first and the service fee is calculated on the rest, as on the App Store:</p>
<pre><code>net      = price ÷ (1 + VAT)
fee      = net × 15% or 30%
earnings = net − fee</code></pre>`,
      },
    ],
    faq: [
      ['Is Google Play’s fee 15% or 30%?', '15% on the first $1M of earnings each year and on subscriptions; 30% above $1M for one-time purchases. Some programmes and countries have other rates.'],
      ['Do I get the 15% rate automatically?', 'No. You enrol your account group in the 15% service fee tier in Play Console.'],
      ['Is Google Play cheaper than the App Store?', 'For most small developers the rates are the same (15%). Differences come from price points, tax handling in specific countries and subscription rules.'],
    ],
    related: ['app-store-fee-calculator', 'eu-alternative-terms-calculator', 'app-revenue-calculator', 'subscription-mrr-calculator'],
  },
  {
    slug: 'privacy-manifest-generator',
    section: 'ios',
    icon: 'shieldCheck',
    name: 'Privacy Manifest Generator',
    card: 'Build PrivacyInfo.xcprivacy: required-reason APIs, collected data types and tracking domains.',
    title: 'Privacy Manifest Generator: PrivacyInfo.xcprivacy for iOS',
    description: 'Generate a PrivacyInfo.xcprivacy file for your iOS app or SDK: required-reason API codes (UserDefaults, file timestamps, boot time, disk space), collected data types and tracking domains.',
    h1: 'Privacy manifest generator',
    lead: 'Tick the APIs you use and the data you collect, and download a valid PrivacyInfo.xcprivacy for your app or SDK. Avoid the ITMS-91053 “missing API declaration” email.',
    placement: 'assets',
    sections: [
      {
        h2: 'What goes in a privacy manifest',
        html: `<ul><li><strong>Required-reason APIs</strong> (<code>NSPrivacyAccessedAPITypes</code>): if your code calls APIs such as <code>UserDefaults</code>, file timestamps, system boot time, disk space or active keyboards, you must declare an approved reason code for each category.</li><li><strong>Collected data</strong> (<code>NSPrivacyCollectedDataTypes</code>): data your app or SDK sends off the device, whether it’s linked to the user and why it’s collected. This should match your App Store privacy label.</li><li><strong>Tracking</strong> (<code>NSPrivacyTracking</code> and <code>NSPrivacyTrackingDomains</code>): whether you track users as defined by App Tracking Transparency, and which domains are used for it. iOS blocks connections to listed domains until the user allows tracking.</li></ul>`,
      },
      {
        h2: 'Common rejection: ITMS-91053',
        html: `<p>App Store Connect sends <em>ITMS-91053: Missing API declaration</em> when your binary uses a required-reason API without a matching entry. Almost every app reads <code>UserDefaults</code>, so <strong>CA92.1</strong> is pre-selected. Also check your dependencies: popular SDKs ship their own manifests, but older versions may not.</p>`,
      },
    ],
    faq: [
      ['Where do I put PrivacyInfo.xcprivacy?', 'Add it to your app target in Xcode (File › New › File › App Privacy, or drag in the downloaded file and tick your target). SDKs include their own manifest in their bundle or XCFramework.'],
      ['Which reason should I pick for UserDefaults?', 'CA92.1 if only your app reads and writes the values. Use 1C8F.1 if you share them through an App Group with extensions.'],
      ['Does the manifest replace the App Store privacy label?', 'No. You still fill in App Privacy in App Store Connect. Xcode can generate a privacy report from all manifests in your app to help you fill it in.'],
      ['Is my selection sent anywhere?', 'No. The file is generated in your browser.'],
    ],
    related: ['app-icon-generator', 'app-store-screenshot-sizes', 'aso-keyword-character-counter', 'app-rating-calculator'],
  },
  {
    slug: 'app-rating-calculator',
    section: 'ios',
    icon: 'star',
    name: 'App Rating Calculator',
    card: 'How many 5-star ratings to reach 4.5 (or any target), and what one bad review costs.',
    title: 'App Rating Calculator: 5-Star Reviews Needed to Reach 4.5',
    description: 'Find out how many 5-star ratings your app needs to reach a target average such as 4.5 or 4.8, and how much a single 1-star review lowers it.',
    h1: 'App rating calculator',
    lead: 'Enter your current average and number of ratings to see how many 5-star ratings it takes to reach your target.',
    placement: 'aso',
    sections: [
      {
        h2: 'The formula',
        html: `<pre><code>ratings needed = count × (target − current) ÷ (new rating − target)</code></pre>
<p>Example: 120 ratings averaging 4.2 need <strong>72</strong> five-star ratings to reach 4.5. Going from 4.5 to 4.8 is much harder, because each new 5★ adds less as the average gets close to 5.</p>
<p>Ratings and reviews are shown per country on the App Store, so work with one storefront at a time. When you ship a new version you can choose to reset the summary rating for that storefront.</p>`,
      },
    ],
    faq: [
      ['How many 5-star reviews do I need to get a 4.5 rating?', 'It depends on where you start. Use the calculator: from 4.2 with 120 ratings you need 72; from 4.0 with 500 ratings you need 500.'],
      ['How often can I ask users for a rating?', 'The system prompt (SKStoreReviewController / requestReview) is shown at most three times in 365 days per user. Ask after a success moment, not at launch.'],
      ['Can I reset my App Store rating?', 'Yes, when you release a new version you can reset the summary rating in App Store Connect. Written reviews stay visible.'],
    ],
    related: ['aso-keyword-character-counter', 'app-store-screenshot-sizes', 'privacy-manifest-generator', 'app-revenue-calculator'],
  },
  {
    slug: 'paywall-trial-calculator',
    section: 'ios',
    icon: 'lock',
    name: 'Paywall & Free Trial Calculator',
    card: 'Weekly vs annual plan and trial length: which earns more per paywall view?',
    title: 'Paywall Calculator: Weekly vs Annual Plan & Free Trial Length',
    description: 'Compare two subscription offers (weekly vs yearly, trial vs no trial) by first-year proceeds per paywall view, after App Store commission and VAT.',
    h1: 'Paywall & free trial calculator',
    lead: 'A cheap weekly plan or an annual plan with a trial? Compare two paywall offers by what they earn from the same paywall traffic.',
    placement: 'subscription',
    sections: [
      {
        h2: 'How each plan is valued',
        html: `<pre><code>payers   = paywall views × start rate × trial-to-paid rate
charges  = payments due in the 365 days after start (first one at trial end)
payments = expected charges after churn at each renewal
proceeds = payers × price × payments ÷ (1 + VAT) × (1 − commission)</code></pre>
<p>Weekly plans often win on first-year revenue per subscriber but churn fast. Annual plans bring cash up front and lower churn, but convert fewer people. Use your own paywall analytics for the start and trial-to-paid rates; this calculator shows which inputs matter most.</p>`,
      },
    ],
    faq: [
      ['Is a free trial worth it?', 'Trials usually raise the share of people who start but lower the share who end up paying. Compare “start rate × trial-to-paid” with and without a trial to see which is higher for your app.'],
      ['Weekly or annual subscription: which earns more?', 'It depends on churn. A weekly plan that keeps 88% of payers each week earns about 8 payments in a year; at $6.99 that beats a $39.99 annual plan only if enough people convert.'],
      ['Why only the first year?', 'It keeps the two plans comparable and avoids guessing long-term retention. Use the LTV calculator for lifetime value.'],
    ],
    related: ['subscription-mrr-calculator', 'app-ltv-calculator', 'app-churn-calculator', 'web-checkout-vs-in-app-purchase-calculator'],
  },
  {
    slug: 'admob-revenue-calculator',
    section: 'ios',
    icon: 'eye',
    name: 'Ad Revenue Calculator',
    card: 'AdMob-style ad income from DAU, impressions and eCPM, compared with subscriptions.',
    title: 'AdMob Revenue Calculator: App Ad Income from DAU & eCPM',
    description: 'Estimate monthly ad revenue for your app from daily active users, impressions per user and eCPM for banner, interstitial and rewarded ads. Compare with subscription revenue.',
    h1: 'App ad revenue calculator',
    lead: 'Estimate what banners, interstitials and rewarded videos earn from your daily users, and how many subscribers would earn the same.',
    placement: 'fee',
    sections: [
      {
        h2: 'The formula',
        html: `<pre><code>daily revenue = DAU × impressions per user × fill rate × eCPM ÷ 1000
monthly       = daily × 30.4
ARPDAU        = daily revenue ÷ DAU</code></pre>
<p><strong>eCPM</strong> is what you earn per 1,000 impressions. It varies a lot by country (US and UK traffic often earns several times more than other markets), format and season (higher in Q4). Rewarded video usually has the highest eCPM because users choose to watch.</p>`,
      },
    ],
    faq: [
      ['How much does an app earn from ads per user?', 'Many apps earn a few cents per daily active user per day or less. Use the calculator with your own eCPM from your ad network.'],
      ['Does Apple take a commission on ad revenue?', 'No. App Store commission applies to digital goods and subscriptions sold in the app, not to advertising income.'],
      ['Ads or subscriptions?', 'The calculator shows how many subscribers would earn the same. Many apps combine both: ads for free users and a subscription to remove them.'],
    ],
    related: ['app-revenue-calculator', 'subscription-mrr-calculator', 'paywall-trial-calculator', 'app-roas-calculator'],
  },
  {
    slug: 'app-roas-calculator',
    section: 'ios',
    icon: 'gauge',
    name: 'ROAS & Paid UA Calculator',
    card: 'Return on ad spend by month, payback period and the break-even cost per install.',
    title: 'App ROAS Calculator: Paid UA Payback & Break-even CPI',
    description: 'Calculate return on ad spend (ROAS) for app install campaigns at 1, 3, 6, 12 and 24 months, the payback month and the maximum cost per install you can afford.',
    h1: 'App ROAS & paid acquisition calculator',
    lead: 'Enter ad spend, cost per install and how installs turn into paying users to see when a campaign pays back.',
    placement: 'subscription',
    sections: [
      {
        h2: 'The formula',
        html: `<pre><code>installs        = spend ÷ CPI
payers          = installs × install-to-paid rate
proceeds by m   = payers × monthly proceeds × expected months paid by month m
ROAS(m)         = proceeds by month m ÷ spend
break-even CPI  = install-to-paid × 12-month proceeds per payer</code></pre>
<p>Ad networks report day-7 or day-30 ROAS, which looks low for subscription apps. What matters is when cumulative proceeds pass your spend, and whether you can fund the gap until then.</p>`,
      },
    ],
    faq: [
      ['What is a good ROAS for an app?', 'Above 100% within your payback target. Many indie developers want payback within 6–12 months; well-funded apps accept longer.'],
      ['Should ROAS use revenue or proceeds?', 'Proceeds, after App Store commission and VAT. That is the money you actually get back.'],
      ['How is this different from LTV:CAC?', 'LTV:CAC compares lifetime value with cost. ROAS by month shows when you get your money back, which matters for cash flow.'],
    ],
    related: ['app-ltv-calculator', 'app-churn-calculator', 'admob-revenue-calculator', 'app-revenue-calculator'],
  },
];

export const toolBySlug = (slug: string) => TOOLS.find((t) => t.slug === slug)!;
export const toolsIn = (s: Section) => TOOLS.filter((t) => t.section === s);
