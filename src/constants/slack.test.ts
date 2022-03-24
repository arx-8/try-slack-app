import { uniq } from "lodash-es"
import { listenerID, logLevel } from "./slack"

describe("listenerID", () => {
  it("must be unique", () => {
    const ids = Object.values(listenerID)
    expect(ids.length).toStrictEqual(uniq(ids).length)
  })
})

describe("logLevel", () => {
  it("can get", () => {
    expect(logLevel).toStrictEqual("debug")
  })
})
