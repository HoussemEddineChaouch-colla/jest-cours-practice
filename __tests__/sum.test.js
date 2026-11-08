const theSum = require("../sum");

// test(name, fn, timeout)
// it(name, fn, timeout)

test("should 0 if no number", () => {
  expect(theSum()).toBe(0);
});

test("should return the same number", () => {
  expect(theSum(5)).toBe(5);
});

test("should return the number one + two", () => {
  expect(theSum(5, 4)).toBe(9);
});

test("should return the number one + two + three", () => {
  expect(theSum(5, 4, 1)).toBe(10);
});

test("should return the number one + two + three + fourth", () => {
  expect(theSum(5, 4, 1, 5)).toBe(15);
});

test("should return the result of all numbers", () => {
  expect(theSum(1, 9, 10, 20, 50, 100, 10)).toBe(200);
});

