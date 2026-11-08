import assert from "node:assert/strict";
import { nextRovingIndex } from "./keyboard.ts";

assert.equal(nextRovingIndex("ArrowRight", 0, 3), 1);
assert.equal(nextRovingIndex("ArrowLeft", 0, 3), 2);
assert.equal(nextRovingIndex("ArrowDown", 2, 3), 0);
assert.equal(nextRovingIndex("ArrowUp", 0, 3), 2);
assert.equal(nextRovingIndex("Home", 2, 3), 0);
assert.equal(nextRovingIndex("End", 0, 3), 2);
assert.equal(nextRovingIndex("Enter", 0, 3), null);
assert.equal(nextRovingIndex("ArrowRight", 0, 0), null);
