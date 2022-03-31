import { BlockAction, Middleware, SlackActionMiddlewareArgs } from "@slack/bolt"
import { exampleModalView } from "./exampleModalView"

export const openExampleModalViewListener: Middleware<
  SlackActionMiddlewareArgs<BlockAction>
> = async ({ ack, body, client, logger }) => {
  await ack()

  try {
    const result = await client.views.open({
      trigger_id: body.trigger_id,
      view: exampleModalView,
    })

    logger.debug(result)
  } catch (error) {
    logger.error(error)
  }
}
