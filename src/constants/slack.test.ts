import { uniq } from "lodash-es"
import { actionID, callbackID, logLevel } from "./slack"

describe("IDs", () => {
  it("must be consistently unique.", () => {
    const ids = Object.values({
      ...actionID,
      ...callbackID,
    })
    expect(ids.length).toStrictEqual(uniq(ids).length)
  })
})

describe("logLevel", () => {
  it("can get", () => {
    expect(logLevel).toStrictEqual("debug")
  })
})
