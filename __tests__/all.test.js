const allData = require("../all");

test("Check if array conatins 6 elements 1st Method", () => {
  expect(allData.length).toBe(6);
});

test("Check if array conatins 6 elements 2nd Method", () => {
  expect(allData).toHaveLength(6);
});

test("Check if String length is 7", () => {
  expect("Houssem").toHaveLength(7);
});

test("Check if array conatins number 3", () => {
  expect(allData).toContain(3);
});

test("Check if array not conatins number 8", () => {
  expect(allData).not.toContain(8);
});

test("Check if String not length 7", () => {
  expect("Houssem").not.toHaveLength(8);
});

test("Check if array not conatins number 0", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(allData[i]).not.toBe(0);
  }
});
