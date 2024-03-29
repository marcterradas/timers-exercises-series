import { expect, test } from "vitest";
import {
  secondsToMinutes,
  minutesToSeconds,
  substractOneSecond,
} from "../src/logic/timer";

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

test("minutesToSeconds", () => {
  expect(minutesToSeconds()).toBe(0);
  expect(minutesToSeconds(null)).toBe(0);
  expect(minutesToSeconds(false)).toBe(0);
  expect(minutesToSeconds(undefined)).toBe(0);
  expect(minutesToSeconds("")).toBe(0);
  expect(minutesToSeconds("00:00")).toBe(0);
  expect(minutesToSeconds("01:00")).toBe(60);
  expect(minutesToSeconds("01:30")).toBe(90);
  expect(minutesToSeconds("00:30")).toBe(30);
  expect(minutesToSeconds("00:59")).toBe(59);
});

test("substractOneSecond", () => {
  expect(substractOneSecond()).toBe("00:00");
  expect(substractOneSecond(null)).toBe("00:00");
  expect(substractOneSecond(false)).toBe("00:00");
  expect(substractOneSecond(undefined)).toBe("00:00");
  expect(substractOneSecond("")).toBe("00:00");
  expect(substractOneSecond("00:00")).toBe("00:00");
  expect(substractOneSecond("01:00")).toBe("00:59");
  expect(substractOneSecond("01:30")).toBe("01:29");
  expect(substractOneSecond("00:30")).toBe("00:29");
  expect(substractOneSecond("00:01")).toBe("00:00");
});
