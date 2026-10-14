import { validDate } from "./autofill";

/** Calendar-only comparison: date inputs represent JST dates, never UTC instants. */
export function jstToday(now = new Date()): string { return new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Tokyo", year: "numeric", month: "2-digit", day: "2-digit" }).format(now); }
export function validateSubmissionDates(startDate: string, endDate: string, now = new Date()): string | null {
  if (!validDate(startDate) || !validDate(endDate)) return "invalid";
  if (startDate > endDate) return "order";
  return endDate < jstToday(now) ? "past" : null;
}
