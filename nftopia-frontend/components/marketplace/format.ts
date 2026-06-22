/** Formatting helpers shared by the creator marketplace pages. */

/**
 * Formats a numeric amount with its currency for display, e.g. `25 XLM`.
 * Trims trailing zeros while keeping up to 7 decimals (Stellar precision).
 */
export function formatAmount(amount: number, currency = "XLM"): string {
  const value = Number.isFinite(amount) ? amount : 0;
  const formatted = value
    .toLocaleString(undefined, { maximumFractionDigits: 7 })
    .replace(/\.?0+$/, "");
  return `${formatted} ${currency}`;
}

/** Formats an ISO timestamp into a short, locale-aware date string. */
export function formatDate(timestamp: string): string {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "—";
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
