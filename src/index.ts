import { App, ExpressReceiver } from "@slack/bolt"
import {
  SERVER_LISTEN_PORT,
  SLACK_APP_BOT_USER_OAUTH_TOKEN,
  SLACK_SIGNING_SECRET,
} from "./constants/env"

const main = async (): Promise<void> => {
  // For health check endpoint. See https://github.com/slackapi/bolt-js/issues/797
  const receiver = new ExpressReceiver({
    signingSecret: SLACK_SIGNING_SECRET,
  })
  receiver.router.get("/healthz", (_, resp) => {
    resp.status(200).send("OK")
  })

  const app = new App({
    receiver,
    signingSecret: SLACK_SIGNING_SECRET,
    token: SLACK_APP_BOT_USER_OAUTH_TOKEN,
  })

  app.message("hello", async ({ message, say, ...rest }) => {
    // Listens to incoming messages that contain "hello"
    // say() sends a message to the channel where the event was triggered
    console.log(rest)
    await say(`Hey there ${JSON.stringify(message)}!`)
  })

  await app.start(SERVER_LISTEN_PORT)
  console.log(`⚡️ Bolt app is running on port ${SERVER_LISTEN_PORT}!`)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
