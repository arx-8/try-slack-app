import { HomeView } from "@slack/bolt"

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
