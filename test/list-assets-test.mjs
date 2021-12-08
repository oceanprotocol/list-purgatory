//@format
import test from "ava";

test("if list-assets is a valid JSON by importing it", async t => {
  const res = await import("../list-assets.json");
  t.truthy(res);
});
