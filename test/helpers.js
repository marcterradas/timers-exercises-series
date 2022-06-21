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
