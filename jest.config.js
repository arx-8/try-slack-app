// @ts-check

/**
 * @type {import("@jest/types").Config.InitialOptions}
 */
const config = {
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
}

module.exports = config
