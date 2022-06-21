import { expect, test } from "vitest";
import { cleanString, cleanNumber } from "../src/logic/helpers";

test("cleanString", () => {
  expect(cleanString()).toBe("");
  expect(cleanString(null)).toBe("");
  expect(cleanString(false)).toBe("");
  expect(cleanString(undefined)).toBe("");
  expect(cleanString("")).toBe("");
  expect(cleanString("s")).toBe("S");
  expect(cleanString("string")).toBe("String");
  expect(cleanString("String")).toBe("String");
  expect(cleanString(" string ")).toBe("String");
  expect(cleanString(" String ")).toBe("String");
});

test("cleanNumber", () => {
  expect(cleanNumber()).toBe(0);
  expect(cleanNumber(null)).toBe(0);
  expect(cleanNumber(false)).toBe(0);
  expect(cleanNumber(undefined)).toBe(0);
  expect(cleanNumber("0")).toBe(0);
  expect(cleanNumber(0)).toBe(0);
  expect(cleanNumber("022")).toBe(22);
  expect(cleanNumber(22)).toBe(22);
});
