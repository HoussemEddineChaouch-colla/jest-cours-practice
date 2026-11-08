# jest-cours-practice

This is my presonal repo to practice the jest (unit testing)

## 02 - Setting Environment And Tools

Install Jest as a development dependency:

```sh
npm i jest --save-dev
```

What this command does:

- `npm i`: Installs an npm package.
- `jest`: Specifies the package to install.
- `--save-dev`: Adds Jest to devDependencies in package.json, because Jest is used during development and testing, not in production.

### Configure the Test Script

Add the following script to `package.json`:

```json
"scripts": {
  "test": "jest"
}
```

**What does it do?**

- `"scripts"`: Defines custom commands that can be executed using npm.
- `"test"`: Defines the command name.
- `"jest"`: Executes the Jest test runner.

**How to run tests:**

```bash
npm test
```

npm automatically executes the `jest` command defined in the `test` script.

**Note:** You can run Jest using `npx jest` too, but `npm test` is the standard and recommended way to run your project's tests.

## 03 - Test Driven Development And Your First Test

### 1. Enable Watch Mode

Update the `test` script in `package.json`:

```json
"scripts": {
  "test": "jest --watchAll"
}
```

**What is `--watchAll`?**

It tells Jest to watch all test files and automatically rerun the test suites whenever relevant files change.

### 2. Create Your First Function

Create `say.js`:

```javascript
function sayHello() {
  return `Hello Jest`;
}

module.exports = sayHello;
```

**What is `module.exports`?**

It allows us to export a function from one file so that another file can import and use it with `require()`.

### 3. Create Your First Test

Create `say.test.js`:

```javascript
const sayHello = require("./say");

test("Say Jest Message", () => {
  expect(sayHello()).toBe("Hello Jest");
});
```

**Understanding the test:**

- `require("./say")`: Imports the function from `say.js`.
- `test()`: Defines an individual test case.
- `"Say Jest Message"`: Describes what the test checks.
- `expect()`: Defines the actual value to test.
- `.toBe()`: Checks whether the actual result matches the expected value.

### 4. Run Your First Test

Execute:

```bash
npm test
```

**Terminal output:**

```text
PASS  ./say.test.js
  √ Say Jest Message (4 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
```

<escape>**Understanding the results:**</escape>

- `PASS`: The test suite passed successfully.
- `1 passed`: One test suite passed.
- `1 total`: One individual test was executed.
- `Snapshots: 0`: No snapshot tests were used.

**Result:** Your first Jest test passed successfully!

**Note:** If you put `say.test.js` inside the `__tests__` folder instead, change the import to:

```javascript
const sayHello = require("../say");
```

## 04 - Jest Global Methods Test Part 1

### 1. Jest Global Methods

Jest provides global methods that can be used directly without importing them.

Two methods for defining test cases are:

```javascript
test(name, fn, timeout);
it(name, fn, timeout);
```

**What do these parameters mean?**

- `name`: A description of what the test should verify.
- `fn`: A callback function containing the test logic.
- `timeout`: Optional maximum execution time for the test.

**Important:** `test()` and `it()` do exactly the same thing in Jest. You can use either one.

### 2. Create the Sum Function

Create `sum.js`:

```javascript
const theSum = (num1, num2, num3) => {
  return (num1 || 0) + (num2 || null) + (num3 || null);
};

module.exports = theSum;
```

**Understanding the function:**

- Accepts up to three numbers.
- Adds the provided numbers.
- Uses fallback values when arguments are missing.
- Exports the function using `module.exports`.

### 3. Write Your Tests

Create `sum.test.js`:

```javascript
const theSum = require("../sum");

// test(name, fn, timeout)
// it(name, fn, timeout)

test("should return the same number", () => {
  expect(theSum(5)).toBe(5);
});

test("should return the number one + two", () => {
  expect(theSum(5, 4)).toBe(9);
});

test("should return the number one + two + three", () => {
  expect(theSum(5, 4, 1)).toBe(10);
});

test("should return 0 if no number is provided", () => {
  expect(theSum()).toBe(0);
});
```

### 4. Test Results

Run:

```bash
npm test
```

Expected result:

- 4 tests executed.
- 4 tests passed.
- 0 tests failed.

### Key Takeaways

- `test()` defines a test case.
- `it()` is an alias for `test()`.
- `expect()` receives the actual value.
- `.toBe()` compares the actual result with the expected value.
- `module.exports` and `require()` allow sharing functions between files.

## 06 - Jest Global Methods: Describe

### 1. The `describe()` Method

```javascript
describe(name, fn);
```

**What does it do?**

The `describe()` method groups related test cases into a logical test suite.

It helps organize tests into categories, making them easier to read, understand, and maintain.

### 2. Nested Describe Blocks

You can also use `describe()` inside another `describe()` to create nested groups.

Example:

```javascript
describe("Check the Numbers Sum total", () => {
  describe("Check If No number or one number only", () => {
    // Tests related to zero or one argument
  });

  describe("For more than one number", () => {
    // Tests related to multiple arguments
  });
});
```

**Understanding the structure:**

- **Outer describe:** Groups all tests related to the sum function.
- **First nested describe:** Groups tests for zero or one argument.
- **Second nested describe:** Groups tests for multiple arguments.
- **test():** Defines individual test cases inside each group.

### Key Takeaways

- `describe()` organizes related tests into groups.
- You can nest multiple `describe()` blocks.
- `describe()` does not execute assertions itself; it organizes test cases.
- Grouping tests improves code readability and maintainability.

## 07 - Jest Watch Mode Usage

When running Jest with `--watchAll`, Jest provides interactive shortcuts to control test execution.

**Available shortcuts:**

| Key     | Description                                       |
| ------- | ------------------------------------------------- |
| `f`     | Run only failed tests.                            |
| `o`     | Run tests related to changed files.               |
| `p`     | Filter test files using a filename regex pattern. |
| `t`     | Filter tests using a test name regex pattern.     |
| `q`     | Quit watch mode.                                  |
| `Enter` | Trigger a test run manually.                      |

**Important:** These shortcuts are available in Jest's interactive Watch Mode.

## 08 - Write Simple Comments From Tests (JSDoc)

### 1. What is JSDoc?

JSDoc is a documentation syntax used to describe JavaScript functions, parameters, return values, and other code elements.

It uses special comments starting with `/**` instead of ordinary `//` comments.

### 2. Basic JSDoc Syntax

```javascript
/**
 * Description of the function.
 *
 * @param {number} num1 - First number.
 * @param {number} num2 - Second number.
 * @returns {number} The sum of both numbers.
 */
function sum(num1, num2) {
  return num1 + num2;
}
```

### 3. Common JSDoc Tags

| Tag            | Purpose                          |
| -------------- | -------------------------------- |
| `@param`       | Documents a function parameter.  |
| `@returns`     | Documents the returned value.    |
| `@type`        | Defines the type of a variable.  |
| `@example`     | Provides an example of usage.    |
| `@description` | Provides a detailed description. |

[JSDoc Link](https://jsdoc.app/)
**Key Takeaway:** JSDoc makes JavaScript code easier to understand, maintain, and document.

## 09 - Jest Global Methods: Test Only And Skip

### 1. `test.only()`

The `test.only()` method tells Jest to execute **only the specified test**, ignoring other tests in the same run.

```javascript
test.only("should return the correct sum", () => {
  expect(theSum(5, 4)).toBe(9);
});
```

**Use case:** Useful when you want to focus on debugging or testing a specific test case.

### 2. `test.skip()`

The `test.skip()` method tells Jest to **skip the specified test** without executing it.

```javascript
test.skip("should return the correct sum", () => {
  expect(theSum(5, 4)).toBe(9);
});
```

**Use case:** Useful when a test is temporarily disabled or not ready to be executed.

### 3. Describe Only And Skip

You can also apply these methods to `describe()` blocks:

```javascript
describe.only("Sum tests", () => {
  // Only this test group will run
});

describe.skip("Other tests", () => {
  // This entire test group will be skipped
});
```

### 4. Quick Comparison

| Method | Behavior |
|---|---|
| `test()` | Executes the test normally. |
| `test.only()` | Executes only the selected test. |
| `test.skip()` | Skips the selected test. |
| `describe.only()` | Executes only the selected test group. |
| `describe.skip()` | Skips the entire selected test group. |

### Key Takeaways

- `.only()` focuses test execution on selected tests or groups.
- `.skip()` temporarily disables tests without deleting them.
- `it.only()` and `it.skip()` work exactly like their `test()` equivalents.

**Important:** Avoid committing `test.only()` or `describe.only()` to production branches. They can cause Jest to ignore the rest of your test suite.