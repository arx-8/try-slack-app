import { config } from "dotenv"
import { nonNull } from "../types/utils"

config()

export const SERVER_LISTEN_PORT = nonNull(
  process.env["SERVER_LISTEN_PORT"],
  `env of "SERVER_LISTEN_PORT" is not defined.`
)
export const LOG_LEVEL = nonNull(
  process.env["LOG_LEVEL"],
  `env of "LOG_LEVEL" is not defined.`
)
export const SLACK_SIGNING_SECRET = nonNull(
  process.env["SLACK_SIGNING_SECRET"],
  `env of "SLACK_SIGNING_SECRET" is not defined.`
)
export const SLACK_APP_BOT_USER_OAUTH_TOKEN = nonNull(
  process.env["SLACK_APP_BOT_USER_OAUTH_TOKEN"],
  `env of "SLACK_APP_BOT_USER_OAUTH_TOKEN" is not defined.`
)
