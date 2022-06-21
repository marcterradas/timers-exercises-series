import { expect, test } from "vitest";
import { cleanString, cleanNumber } from "../src/logic/helpers";

test("cleanString", () => {
  expect(cleanString()).toBe("");
});
