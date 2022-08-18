import { expect, test } from "vitest";
import { secondsToMinutes } from "../src/logic/timer";

test("secondsToMinutes", () => {
  expect(secondsToMinutes()).toBe("00:00");
  expect(secondsToMinutes(null)).toBe("00:00");
  expect(secondsToMinutes(false)).toBe("00:00");
  expect(secondsToMinutes(undefined)).toBe("00:00");
  expect(secondsToMinutes(0)).toBe("00:00");
});
