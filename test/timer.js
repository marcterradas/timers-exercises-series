import { expect, test } from "vitest";
import { secondsToMinutes } from "../src/logic/timer";

test("secondsToMinutes", () => {
  expect(secondsToMinutes()).toBe("00:00");
  expect(secondsToMinutes(null)).toBe("00:00");
  expect(secondsToMinutes(false)).toBe("00:00");
  expect(secondsToMinutes(undefined)).toBe("00:00");
  expect(secondsToMinutes(0)).toBe("00:00");
  expect(secondsToMinutes(60)).toBe("01:00");
  expect(secondsToMinutes(90)).toBe("01:30");
  expect(secondsToMinutes(30)).toBe("00:30");
  expect(secondsToMinutes(59)).toBe("00:59");
});
