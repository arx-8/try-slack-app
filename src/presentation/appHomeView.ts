import { HomeView } from "@slack/bolt"
import { actionID } from "../constants/slack"

type Props = {
  address: string
  teamID: string
  userID: string
}

/**
 * @see https://app.slack.com/block-kit-builder
 */
export const renderAppHomeView = ({
  address,
  teamID,
  userID,
}: Props): HomeView => {
  return {
    blocks: [
      {
        accessory: {
          action_id: actionID.openExampleModalView,
          text: {
            emoji: true,
            text: "Send",
            type: "plain_text",
          },
          type: "button",
        },
        text: {
          text: "Send Hey!",
          type: "mrkdwn",
        },
        type: "section",
      },
      {
        text: {
          text: `*Welcome home, <@${userID}> :house:*`,
          type: "mrkdwn",
        },
        type: "section",
      },
      {
        text: {
          text: `Your team_id is ${teamID}`,
          type: "mrkdwn",
        },
        type: "section",
      },
      {
        text: {
          text: `Your address is ${address}`,
          type: "mrkdwn",
        },
        type: "section",
      },
    ],
    type: "home",
  }
}
