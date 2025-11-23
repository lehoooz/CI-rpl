const { sum } = require("./sum");

test("menjumlahkan dua angka dengan benar", () => {
  const result = sum(2, 3);
  expect(result).toBe(5);
});

test("hasil penjumlahan angka negatif", () => {
  const result = sum(-1, 4);
  expect(result).toBe(3);
});
