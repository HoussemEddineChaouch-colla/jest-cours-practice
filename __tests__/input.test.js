const theFilter = require("../input");

describe("Validate the Input Field", () => {
  test("Check if name is empty", () => {
    expect(theFilter()).toBe("Unknown");
  });
  test("Check for space (start + end)", () => {
    expect(theFilter(" Houssem ")).toBe("Houssem");
  });
  test("Check if name length > 10", () => {
    expect(theFilter("Houssem_Eddine_Chaouch")).toBe("Houssem_Ed");
  });
  test("Check if name not start with Underscore", () => {
    expect(theFilter("_Houssem")).toBe("Houssem");
  });
});
