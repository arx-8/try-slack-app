// @ts-check

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  moduleNameMapper: {
    // for prevent "Jest encountered an unexpected token" error
    "^lodash-es$": "lodash",
  },
  modulePathIgnorePatterns: ["<rootDir>/dist/"],
  setupFiles: ["<rootDir>/jest.setup.js"],
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
}

module.exports = config
