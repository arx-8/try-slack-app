import { Middleware, SlackCommandMiddlewareArgs } from "@slack/bolt"

export const commandHeyListener: Middleware<
  SlackCommandMiddlewareArgs
> = async ({ ack, body, logger, say }) => {
  try {
    await ack()

    // TODO Get user from body.text
    // const target = await client.users.profile.get({
    //   user: "U0xxx",
    // })

    const result = await say({
      blocks: [
        {
          text: {
            text: `Ho! your team_id is ${body.team_id}, echo: ${body.text}`,
            type: "mrkdwn",
          },
          type: "section",
        },
      ],
    })

    logger.debug(result)
  } catch (error) {
    logger.error(error)
  }
}
