<h1 align="center">Unit test with Jest</h1>

### Jest

0. Some explain

- `vue-test-utils` The next iteration of Vue Test Utils. It targets Vue 3.
- `jest` Delightful JavaScript Testing.
- `vue-jest Jest` Vue transformer
- `ts-jest` A Jest transformer with source map support that lets you use Jest to test projects written in TypeScript.

1. Install

> npm i @vue/test-utils@next jest vue-jest@next ts-jest -D

2. Creating file configuration in root directory `jest.config.js`

```
module.exports = {
	moduleFileExtensions: ["vue", "js", "ts"],
	preset: "ts-jest",
	testEnvironment: "jsdom",
	transform: {
		"^.+\\.vue$": "vue-jest",
		"^.+\\.ts$": "ts-jest",
	},
	// Match the .js/.ts file in the __tests__ directory or xx.test.js/ts xx.spec.js/ts
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$",
	moduleNameMapper: {
		"^@/(.*)$": "<rootDir>/src/$1", // Configure jest @ -> src
	},
};
```

3. Create file unit test

- 2 types of file test: `*.spec.ts` `*.test.ts`

- Prefer 2 ways to create file test:
> In root directory: "__tests__" => contain all files test

> In every sngle feature in component or view directory: "tests" => contain file test

4. Issues cause during run

- Type jest not found: `test` `describe` `it` `expect` => not work

> npm i @types/jest -D

Config in file: `ts.config.json`

```
{
  "compilerOptions": {
    ...
    "types": ["vite/client", "jest"]
  },
}
```

- `ESlint` can not detech `jest`

> npm i eslint-plugin-jest -D

Config in file: `.eslintrc.js`

```
module.exports = {
  ...
  extends: [
    ...
    'plugin:jest/recommended'
  ],
  ...
}
```

- Problems with jest version

```
// Run newest version of Jest
> npm i ts-jest

// Show config Jest
npx jest --showConfig

// Clear cache Jest
npx jest --clearCache
```

- 

