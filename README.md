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
