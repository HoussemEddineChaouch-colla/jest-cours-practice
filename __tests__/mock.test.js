const mocker = require("../mock");

test("Mock Function", () => {
  const mocker = jest.fn((name) => `Hello ${name}`);
  expect(mocker("Houssem")).toBe("Hello Houssem");
  expect(mocker("Ahmed")).toBe("Hello Ahmed");
  expect(mocker("Sayed")).toBe("Hello Sayed");
  expect(mocker).toHaveBeenCalled();
  expect(mocker).toHaveBeenCalledWith("Houssem");
  expect(mocker).toHaveBeenLastCalledWith("Sayed");
});
