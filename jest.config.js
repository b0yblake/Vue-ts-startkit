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
