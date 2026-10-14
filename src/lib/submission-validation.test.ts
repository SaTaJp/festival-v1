import { describe, expect, it } from "vitest";
import { jstToday, validateSubmissionDates } from "./submission-validation";
describe("submission date validation", () => {
  const now = new Date("2026-10-15T00:30:00.000Z");
  it("uses a JST calendar day", () => expect(jstToday(now)).toBe("2026-10-15"));
  it("rejects ended, malformed, and reversed events but allows today", () => {
    expect(validateSubmissionDates("2026-10-13", "2026-10-14", now)).toBe("past");
    expect(validateSubmissionDates("2026-10-15", "2026-10-15", now)).toBeNull();
    expect(validateSubmissionDates("2026-10-16", "2026-10-15", now)).toBe("order");
    expect(validateSubmissionDates("2026-02-30", "2026-10-15", now)).toBe("invalid");
  });
});
