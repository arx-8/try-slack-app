import { ModalView } from "@slack/bolt"
import { callbackID } from "../constants/slack"
import { sameKVObject } from "../types/utils"

const blockIDs = ["description_block", "title_block"] as const
const actionIDs = ["description", "title"] as const

export type BlockID = typeof blockIDs[number]
export type ActionID = typeof actionIDs[number]

const blockID = sameKVObject(blockIDs)
const actionID = sameKVObject(actionIDs)

export const exampleModalView: ModalView = {
  blocks: [
    {
      block_id: blockID.title_block,
      element: {
        action_id: actionID.title,
        type: "plain_text_input",
      },
      label: {
        text: "The title",
        type: "plain_text",
      },
      type: "input",
    },
    {
      block_id: blockID.description_block,
      element: {
        action_id: actionID.description,
        multiline: true,
        type: "plain_text_input",
      },
      label: {
        emoji: true,
        text: "Description",
        type: "plain_text",
      },
      optional: true,
      type: "input",
    },
  ],
  callback_id: callbackID.exampleModalView,
  submit: {
    text: "Send",
    type: "plain_text",
  },
  title: {
    text: "Example",
    type: "plain_text",
  },
  type: "modal",
}
