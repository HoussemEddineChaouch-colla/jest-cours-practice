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