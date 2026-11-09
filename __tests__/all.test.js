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

test("Check if array conatins only numbers 1st method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBe(false);
  }
});

test("Check if array conatins only numbers 2nd method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).toBeFalsy();
  }
});

test("Check if array conatins only numbers 3rd method", () => {
  for (let i = 0; i < allData.length; i++) {
    expect(isNaN(allData[i])).not.toBeTruthy();
  }
});

test("Check if array second element is larger than 1 ", () => {
  expect(allData[1]).toBeGreaterThan(1);
});

test("Check if array first element is larger than 1 ", () => {
  expect(allData[0]).toBeGreaterThanOrEqual(1);
});

test("Check if array first element is less than 5 ", () => {
  expect(allData[0]).toBeLessThan(5);
});

test("Check if array first element is less than 5 ", () => {
  expect(allData[0]).toBeLessThanOrEqual(5);
});

test("Check For Undefined ", () => {
  let a;
  expect(a).toBeUndefined();
});

test("Check For substring inside string by RegExp ", () => {
  let myString = "I Love Javascript";
  expect(myString).toMatch(/Javascript/);
});

test("Check For properties age", () => {
  let myObject = {
    name: "Houssem",
    age: 24,
  };
  expect(myObject).toHaveProperty("age");
});

test("Check For properties age value is 24", () => {
  let myObject = {
    name: "Houssem",
    age: 24,
  };
  expect(myObject).toHaveProperty("age", 24);
});

expect.extend({
  toBeLargerThan(received, target) {
    const pass = received > target;
    if (pass) {
      return {
        message: () => `Expected ${received} to Be Larger Than ${target}`,
        pass: true,
      };
    } else {
      return {
        message: () =>
          `Error: Expected ${received} to Be Larger Than ${target}`,
        pass: false,
      };
    }
  },
});

test("Check if number larger than number", () => {
  expect(10).toBeLargerThan(5);
});
