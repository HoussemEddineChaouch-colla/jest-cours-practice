const sayHello = require("../say");

test("Say Jest Messge", () => {
  expect(sayHello()).toBe("Hello Jest");
});
