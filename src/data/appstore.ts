// App Store / Google Play reference data used by the iOS calculators.
// Everything here is editable and shown with its source on the site.
// Re-check after each WWDC and whenever Apple announces business-term changes.

export const RULES_REVIEWED = '2025'; // when these rules were last checked against official docs

export const COMMISSION = {
  apple: {
    standard: 30,
    reduced: 15, // App Store Small Business Program (≤ $1M proceeds in the previous calendar year) and subscriptions after a subscriber's first year
    source: 'https://developer.apple.com/app-store/small-business-program/',
  },
  google: {
    standard: 30,
    reduced: 15, // first $1M of earnings each year; auto-renewing subscriptions
    source: 'https://support.google.com/googleplay/android-developer/answer/112622',
  },
};

/** Example card-processing fee for web checkout comparisons. Users can edit it. */
export const WEB_CHECKOUT_DEFAULT = { percent: 2.9, fixed: 0.3 };

/**
 * Storefronts. vat = standard VAT/GST rate included in the customer price.
 * 0 = price shown without tax (tax is added at checkout, e.g. US and Canada).
 * Apple's per-storefront proceeds table in App Store Connect is authoritative;
 * some countries also apply digital services taxes not modelled here.
 */
export const STOREFRONTS: { code: string; name: string; currency: string; vat: number }[] = [
  { code: 'US', name: 'United States', currency: 'USD', vat: 0 },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', vat: 20 },
  { code: 'DE', name: 'Germany', currency: 'EUR', vat: 19 },
  { code: 'FR', name: 'France', currency: 'EUR', vat: 20 },
  { code: 'IT', name: 'Italy', currency: 'EUR', vat: 22 },
  { code: 'ES', name: 'Spain', currency: 'EUR', vat: 21 },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', vat: 21 },
  { code: 'IE', name: 'Ireland', currency: 'EUR', vat: 23 },
  { code: 'SE', name: 'Sweden', currency: 'SEK', vat: 25 },
  { code: 'DK', name: 'Denmark', currency: 'DKK', vat: 25 },
  { code: 'NO', name: 'Norway', currency: 'NOK', vat: 25 },
  { code: 'PL', name: 'Poland', currency: 'PLN', vat: 23 },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', vat: 8.1 },
  { code: 'JP', name: 'Japan', currency: 'JPY', vat: 10 },
  { code: 'AU', name: 'Australia', currency: 'AUD', vat: 10 },
  { code: 'NZ', name: 'New Zealand', currency: 'NZD', vat: 15 },
  { code: 'IN', name: 'India', currency: 'INR', vat: 18 },
  { code: 'SG', name: 'Singapore', currency: 'SGD', vat: 9 },
  { code: 'KR', name: 'South Korea', currency: 'KRW', vat: 10 },
  { code: 'AE', name: 'United Arab Emirates', currency: 'AED', vat: 5 },
  { code: 'SA', name: 'Saudi Arabia', currency: 'SAR', vat: 15 },
  { code: 'ZA', name: 'South Africa', currency: 'ZAR', vat: 15 },
  { code: 'TR', name: 'Türkiye', currency: 'TRY', vat: 20 },
  { code: 'MX', name: 'Mexico', currency: 'MXN', vat: 16 },
  { code: 'CA', name: 'Canada', currency: 'CAD', vat: 0 },
];

/** App Store screenshot sizes (portrait; landscape = swapped). */
export const SCREENSHOT_SPECS_SOURCE = 'https://developer.apple.com/help/app-store-connect/reference/screenshot-specifications';
export const SCREENSHOT_SPECS: { id: string; device: string; sizes: [number, number][]; note?: string; required?: boolean }[] = [
  { id: 'iphone69', device: 'iPhone 6.9″', sizes: [[1320, 2868], [1290, 2796], [1260, 2736]], required: true, note: 'Required for iPhone apps (or provide 6.5″).' },
  { id: 'iphone65', device: 'iPhone 6.5″', sizes: [[1284, 2778], [1242, 2688]], note: 'Accepted instead of 6.9″.' },
  { id: 'iphone63', device: 'iPhone 6.3″', sizes: [[1206, 2622], [1179, 2556]] },
  { id: 'iphone61', device: 'iPhone 6.1″', sizes: [[1170, 2532], [1125, 2436], [1080, 2340]] },
  { id: 'iphone55', device: 'iPhone 5.5″', sizes: [[1242, 2208]] },
  { id: 'iphone47', device: 'iPhone 4.7″', sizes: [[750, 1334]] },
  { id: 'ipad13', device: 'iPad 13″', sizes: [[2064, 2752], [2048, 2732]], required: true, note: 'Required if your app runs on iPad.' },
  { id: 'ipad11', device: 'iPad 11″', sizes: [[1668, 2420], [1668, 2388], [1640, 2360], [1488, 2266]] },
  { id: 'mac', device: 'Mac (16:10)', sizes: [[2880, 1800], [2560, 1600], [1440, 900], [1280, 800]] },
  { id: 'tv', device: 'Apple TV', sizes: [[3840, 2160], [1920, 1080]] },
];

/** App Store Connect text limits. */
export const ASO_LIMITS = [
  { id: 'name', label: 'App name', limit: 30, unit: 'chars', hint: 'Indexed for search. Lead with your brand and strongest keyword.' },
  { id: 'subtitle', label: 'Subtitle', limit: 30, unit: 'chars', hint: 'Indexed for search. Don’t repeat words from the name.' },
  { id: 'keywords', label: 'Keywords', limit: 100, unit: 'bytes', hint: 'Comma-separated, no spaces. Counted in bytes, so non-Latin characters use more.' },
  { id: 'promo', label: 'Promotional text', limit: 170, unit: 'chars', hint: 'Not indexed. Can be changed without a new build.' },
  { id: 'description', label: 'Description', limit: 4000, unit: 'chars', hint: 'Not indexed on the App Store. Write for conversion.' },
] as const;

/**
 * EU alternative business terms (DMA). Apple announced these in June 2025, with the
 * Core Technology Commission replacing the per-install Core Technology Fee from
 * 1 January 2026. They change often: every rate is editable in the calculator.
 */
export const EU_TERMS_REVIEWED = 'June 2025 announcement';
export const EU_ALT_TERMS = {
  acquisition: 2, // initial acquisition fee: sales to new users in their first 6 months
  storeServices: { tier1: 5, tier2: 13, tier2Reduced: 10 }, // reduced: Small Business Program / subs after year 1
  ctc: 5, // Core Technology Commission
  source: 'https://developer.apple.com/support/dma-and-apps-in-the-eu/',
};

/** Typical eCPM starting points (USD) per ad format. Real values vary hugely by country and app. */
export const AD_FORMATS = [
  { id: 'ban', name: 'Banner', imp: 20, ecpm: 0.5 },
  { id: 'int', name: 'Interstitial', imp: 2, ecpm: 8 },
  { id: 'rew', name: 'Rewarded video', imp: 1, ecpm: 12 },
] as const;

/** Privacy manifest (PrivacyInfo.xcprivacy): required-reason API categories and approved reasons. */
export const PRIVACY_SOURCE = 'https://developer.apple.com/documentation/bundleresources/privacy-manifest-files';
export const PRIVACY_API_TYPES: { id: string; key: string; name: string; examples: string; reasons: [string, string][] }[] = [
  {
    id: 'ud', key: 'NSPrivacyAccessedAPICategoryUserDefaults', name: 'User defaults', examples: 'UserDefaults, @AppStorage',
    reasons: [
      ['CA92.1', 'Read/write information only accessible to the app itself'],
      ['1C8F.1', 'Read/write information shared with apps, extensions and App Clips in the same App Group'],
      ['C56D.1', 'Third-party SDK wrapping UserDefaults for the app (SDKs only)'],
      ['AC6B.1', 'Read managed app configuration (MDM) or store feedback'],
    ],
  },
  {
    id: 'ft', key: 'NSPrivacyAccessedAPICategoryFileTimestamp', name: 'File timestamps', examples: 'creationDate, modificationDate, stat, getattrlist',
    reasons: [
      ['C617.1', 'Timestamps of files inside the app container, App Group or CloudKit container'],
      ['DDA9.1', 'Display file timestamps to the person using the device'],
      ['3B52.1', 'Timestamps of files the user granted access to (e.g. document picker)'],
      ['0A2A.1', 'Third-party SDK wrapping file timestamp APIs for the app (SDKs only)'],
    ],
  },
  {
    id: 'bt', key: 'NSPrivacyAccessedAPICategorySystemBootTime', name: 'System boot time', examples: 'systemUptime, mach_absolute_time',
    reasons: [
      ['35F9.1', 'Measure time elapsed between events inside the app'],
      ['8FFB.1', 'Calculate absolute timestamps for events inside the app'],
      ['3D61.1', 'Include in an optional bug report the user chooses to submit'],
    ],
  },
  {
    id: 'ds', key: 'NSPrivacyAccessedAPICategoryDiskSpace', name: 'Disk space', examples: 'volumeAvailableCapacityKey, statfs',
    reasons: [
      ['E174.1', 'Check there is enough space before writing files'],
      ['85F4.1', 'Display disk space to the person using the device'],
      ['7D9E.1', 'Include in an optional bug report the user chooses to submit'],
      ['B728.1', 'Health research app: detect low disk space affecting data collection'],
    ],
  },
  {
    id: 'kb', key: 'NSPrivacyAccessedAPICategoryActiveKeyboards', name: 'Active keyboards', examples: 'activeInputModes',
    reasons: [
      ['3EC4.1', 'The app is a custom keyboard app and checks active keyboards'],
      ['54BD.1', 'Customise the UI for the active keyboards'],
    ],
  },
];

export const PRIVACY_PURPOSES: [string, string][] = [
  ['AppFunctionality', 'App functionality'],
  ['Analytics', 'Analytics'],
  ['ProductPersonalization', 'Personalisation'],
  ['DeveloperAdvertising', 'Developer’s advertising'],
  ['ThirdPartyAdvertising', 'Third-party advertising'],
  ['Other', 'Other'],
];

/** Collected data types (key suffix after NSPrivacyCollectedDataType), grouped as in App Store Connect. */
export const PRIVACY_DATA_TYPES: { group: string; types: [string, string][] }[] = [
  { group: 'Contact info', types: [['Name', 'Name'], ['EmailAddress', 'Email address'], ['PhoneNumber', 'Phone number'], ['PhysicalAddress', 'Physical address'], ['OtherUserContactInfo', 'Other contact info']] },
  { group: 'Health & fitness', types: [['Health', 'Health'], ['Fitness', 'Fitness']] },
  { group: 'Financial info', types: [['PaymentInfo', 'Payment info'], ['CreditInfo', 'Credit info'], ['OtherFinancialInfo', 'Other financial info']] },
  { group: 'Location', types: [['PreciseLocation', 'Precise location'], ['CoarseLocation', 'Coarse location']] },
  { group: 'Sensitive & contacts', types: [['SensitiveInfo', 'Sensitive info'], ['Contacts', 'Contacts']] },
  { group: 'User content', types: [['EmailsOrTextMessages', 'Emails or text messages'], ['PhotosorVideos', 'Photos or videos'], ['AudioData', 'Audio data'], ['GameplayContent', 'Gameplay content'], ['CustomerSupport', 'Customer support'], ['OtherUserContent', 'Other user content']] },
  { group: 'Browsing & search', types: [['BrowsingHistory', 'Browsing history'], ['SearchHistory', 'Search history']] },
  { group: 'Identifiers', types: [['UserID', 'User ID'], ['DeviceID', 'Device ID']] },
  { group: 'Purchases & usage', types: [['PurchaseHistory', 'Purchase history'], ['ProductInteraction', 'Product interaction'], ['AdvertisingData', 'Advertising data'], ['OtherUsageData', 'Other usage data']] },
  { group: 'Diagnostics', types: [['CrashData', 'Crash data'], ['PerformanceData', 'Performance data'], ['OtherDiagnosticData', 'Other diagnostic data']] },
  { group: 'Surroundings, body & other', types: [['EnvironmentScanning', 'Environment scanning'], ['Hands', 'Hands'], ['Head', 'Head'], ['OtherDataTypes', 'Other data types']] },
];
