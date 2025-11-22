import { sum } from "./sum.js";

test("menjumlahkan dua angka", () => {
  expect(sum(2, 3)).toBe(5);
});
