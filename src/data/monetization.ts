// ─────────────────────────────────────────────────────────────────────────────
// Monetization settings: the ONLY file you need to edit.
//
// • Replace values containing "REPLACE". Until then they show as dashed
//   placeholders in `npm run dev` and are HIDDEN in production builds.
// • {placement} in a URL is replaced with where the link was shown, so your
//   affiliate/sponsor dashboard can tell you which spot performs.
// • Plain links only (no third-party scripts). Keep it that way: developers
//   block ad scripts, and the strict CSP is part of the site's credibility.
// ─────────────────────────────────────────────────────────────────────────────

export interface Offer {
  id: string;
  kicker: string;
  title: string;
  text: string;
  cta: string;
  url: string;
  icon: string;
  sponsored: boolean;
}

export const MONETIZATION = {
  disclosure: 'Some links are affiliate or sponsored links. We may earn a commission at no extra cost to you. It keeps these calculators free.',

  app: {
    appStoreId: 'REPLACE_APP_STORE_ID',
    name: 'REPLACE App Name',
  },

  donate: {
    label: 'Buy me a coffee',
    url: 'REPLACE_DONATION_URL',
  },

  offers: {
    // Sell a sponsor slot to a subscription SDK / paywall platform.
    paywall: {
      id: 'paywall',
      kicker: 'Sponsor',
      title: 'Grow subscription revenue faster',
      text: 'Paywall A/B tests, subscription analytics and receipt validation in one SDK.',
      cta: 'Learn more',
      url: 'REPLACE_SUBSCRIPTION_SDK_SPONSOR_URL?utm_source=shipmath&utm_medium={placement}',
      icon: 'trending',
      sponsored: true,
    },
    aso: {
      id: 'aso',
      kicker: 'Recommended',
      title: 'Find keywords people actually search',
      text: 'Keyword volume, difficulty and competitor tracking for the App Store.',
      cta: 'Try it free',
      url: 'REPLACE_ASO_TOOL_AFFILIATE_URL?ref={placement}',
      icon: 'search',
      sponsored: true,
    },
    screenshots: {
      id: 'screenshots',
      kicker: 'Recommended',
      title: 'Design App Store screenshots in minutes',
      text: 'Device frames, captions and every required size exported at once.',
      cta: 'Try it free',
      url: 'REPLACE_SCREENSHOT_TOOL_AFFILIATE_URL?ref={placement}',
      icon: 'image',
      sponsored: true,
    },
    myapp: {
      id: 'myapp',
      kicker: 'Built by the author',
      title: 'REPLACE: your app’s headline',
      text: 'A one-line pitch for your own iOS app. Developers trust tools made by developers.',
      cta: 'View on the App Store',
      url: 'https://apps.apple.com/app/idREPLACE_APP_STORE_ID',
      icon: 'phone',
      sponsored: false,
    },
  } satisfies Record<string, Offer>,

  placements: {
    fee: ['paywall', 'myapp'],
    subscription: ['paywall'],
    aso: ['aso', 'screenshots'],
    assets: ['screenshots', 'aso'],
    guideApp: ['paywall', 'aso', 'myapp'],
    sidebar: ['myapp'],
  },
} as const;

export type OfferId = keyof typeof MONETIZATION.offers;
export type PlacementId = keyof typeof MONETIZATION.placements;
export const isConfigured = (value: string) => !!value && !value.includes('REPLACE');
