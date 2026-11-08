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
