import {
  Middleware,
  SlackViewAction,
  SlackViewMiddlewareArgs,
  ViewStateValue,
} from "@slack/bolt"
import { ActionID, BlockID } from "./exampleModalView"

type Values = {
  [key in BlockID]: {
    [key in ActionID]: ViewStateValue
  }
}

export const callbackExampleModalViewListener: Middleware<
  SlackViewMiddlewareArgs<SlackViewAction>
> = async ({ ack, body, client, logger }) => {
  await ack()
  if (body.type !== "view_submission") {
    return
  }

  const values = body.view.state.values as Values

  try {
    const result = await client.chat.postMessage({
      as_user: true,
      channel: body.user.id,
      text: `echo from modal: ${values.title_block.title.value ?? ""}, ${
        values.description_block.description.value ?? ""
      }`,
    })
    logger.debug(result)
  } catch (error) {
    logger.error(error)
  }
}
