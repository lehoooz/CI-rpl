// sum.test.js
const { sum } = require("./sum");

test("menjumlahkan dua angka", () => {
  expect(sum(2, 3)).toBe(5);
});
