import { Middleware, SlackEventMiddlewareArgs } from "@slack/bolt"

/**
 * Required permissions: Event Subscriptions > Subscribe to bot events > app_home_opened
 */
export const appHomeOpenedListener: Middleware<
  SlackEventMiddlewareArgs<"app_home_opened">
> = async ({ client, event, logger }) => {
  try {
    const result = await client.views.publish({
      user_id: event.user,
      view: {
        blocks: [
          {
            text: {
              text: `*Welcome home, <@${event.user}> :house:*`,
              type: "mrkdwn",
            },
            type: "section",
          },
          {
            text: {
              text: "Learn how home tabs can be more useful and interactive <https://api.slack.com/surfaces/tabs/using|*in the documentation*>.",
              type: "mrkdwn",
            },
            type: "section",
          },
        ],
        type: "home",
      },
    })

    logger.debug(result)
  } catch (error) {
    logger.error(error)
  }
}
