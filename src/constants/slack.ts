import { LogLevel } from "@slack/bolt"
import { nonNull, objectKeys } from "../types/utils"
import { LOG_LEVEL } from "./env"

export const listenerID = {
  exampleModalView: "exampleModalView",
  openExampleModalView: "openExampleModalView",
} as const

export const logLevel: LogLevel = (() => {
  const reversedMap = new Map<string, LogLevel>()
  objectKeys(LogLevel).forEach((key) => {
    const e = LogLevel[key]
    reversedMap.set(e.toString(), e)
  })

  return nonNull(reversedMap.get(LOG_LEVEL), "unexpected logLevel")
})()
