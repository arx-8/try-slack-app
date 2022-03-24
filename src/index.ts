import { App, ExpressReceiver } from "@slack/bolt"
import {
  SERVER_LISTEN_PORT,
  SLACK_APP_BOT_USER_OAUTH_TOKEN,
  SLACK_SIGNING_SECRET,
} from "./constants/env"
import { logLevel } from "./constants/slack"
import { appHomeOpenedListener } from "./presentation/appHomeOpenedListener"

const main = async (): Promise<void> => {
  // For health check endpoint. See https://github.com/slackapi/bolt-js/issues/797
  const receiver = new ExpressReceiver({
    signingSecret: SLACK_SIGNING_SECRET,
  })
  receiver.router.get("/healthz", (_, resp) => {
    resp.status(200).send("OK")
  })

  const app = new App({
    logLevel,
    receiver,
    signingSecret: SLACK_SIGNING_SECRET,
    token: SLACK_APP_BOT_USER_OAUTH_TOKEN,
  })

  // define events
  app.event("app_home_opened", appHomeOpenedListener)
  app.message("hello", async ({ message, say }) => {
    // Listens to incoming messages that contain "hello"
    // say() sends a message to the channel where the event was triggered
    await say({
      blocks: [
        {
          accessory: {
            action_id: "button_click",
            text: {
              text: "Click Me",
              type: "plain_text",
            },
            type: "button",
          },
          text: {
            text: `Hey there <@${message.type}>!`,
            type: "mrkdwn",
          },
          type: "section",
        },
      ],
      text: `Hey there <@${message.subtype ?? ""}>!`,
    })
  })
  app.action("button_click", async ({ ack, body, client, say }) => {
    await ack()

    try {
      const user = await client.users.info({
        user: body.user.id,
      })

      await say(`Hey ${user.user?.profile?.email ?? ""}`)
    } catch (error) {
      await say(`error`)
    }
  })

  await app.start(SERVER_LISTEN_PORT)
  console.log(`⚡️ Bolt app is running on port ${SERVER_LISTEN_PORT}!`)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
