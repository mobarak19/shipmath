// App Store / Play / web checkout economics. All money in the storefront currency.

export interface Proceeds {
  price: number;
  tax: number;
  net: number; // price excluding VAT/GST
  commission: number;
  fees: number; // payment processing (web checkout)
  proceeds: number;
  effectiveRate: number; // share of the customer price lost to tax + fees
}

/** Store purchase: tax is removed first, then the store commission is taken from the net price. */
export function storeProceeds(price: number, vatPct: number, commissionPct: number): Proceeds {
  const net = price / (1 + vatPct / 100);
  const commission = net * (commissionPct / 100);
  const proceeds = net - commission;
  return { price, tax: price - net, net, commission, fees: 0, proceeds, effectiveRate: price ? 1 - proceeds / price : 0 };
}

/** Web checkout: you (or your merchant of record) remit tax and pay card fees on the full charge. */
export function webProceeds(price: number, vatPct: number, feePct: number, feeFixed: number, platformPct = 0): Proceeds {
  const net = price / (1 + vatPct / 100);
  const fees = price * (feePct / 100) + feeFixed;
  const commission = net * (platformPct / 100);
  const proceeds = net - fees - commission;
  return { price, tax: price - net, net, commission, fees, proceeds, effectiveRate: price ? 1 - proceeds / price : 0 };
}

/** Normalise any plan price to a monthly amount. */
export const toMonthly = (price: number, period: 'week' | 'month' | 'year') =>
  period === 'week' ? (price * 52) / 12 : period === 'year' ? price / 12 : price;

export function ltv(arpuMonthly: number, churnMonthlyPct: number, marginPct: number) {
  const churn = churnMonthlyPct / 100;
  const lifetimeMonths = churn > 0 ? 1 / churn : Infinity;
  return { lifetimeMonths, ltv: churn > 0 ? (arpuMonthly * (marginPct / 100)) / churn : Infinity };
}

/** Expected number of paid periods out of `n`, when `churnPct` of payers cancel before each renewal. */
export function paidPeriods(n: number, churnPct: number): number {
  const c = churnPct / 100;
  if (n <= 0) return 0;
  return c > 0 ? (1 - Math.pow(1 - c, n)) / c : n;
}

/** Reviews at `stars` needed to lift an average of `avg` over `count` ratings to `target`. */
export function reviewsNeeded(avg: number, count: number, target: number, stars = 5): number {
  if (target <= avg) return 0;
  if (stars <= target) return Infinity;
  // Round before ceil so float noise (72.0000000001) doesn't add a review.
  return Math.ceil(Math.round(((count * (target - avg)) / (stars - target)) * 1e6) / 1e6);
}

/** Average after adding `n` ratings of `stars`. */
export const ratingAfter = (avg: number, count: number, n: number, stars: number) =>
  count + n > 0 ? (avg * count + stars * n) / (count + n) : 0;
