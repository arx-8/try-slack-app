import {
  SERVER_LISTEN_PORT,
  SLACK_APP_LEVEL_TOKEN,
  SLACK_SIGNING_SECRET,
} from "./constants/env"
import { greet } from "./hello"

console.log(greet())

console.log(process.env["NODE_ENV"])
console.log(SERVER_LISTEN_PORT)
console.log(SLACK_SIGNING_SECRET)
console.log(SLACK_APP_LEVEL_TOKEN)
