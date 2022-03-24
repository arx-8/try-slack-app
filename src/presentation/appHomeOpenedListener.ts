import { Middleware, SlackEventMiddlewareArgs } from "@slack/bolt"
import axios from "axios"

export type JapanZipCodeAPIResponse =
  | {
      message: null
      results: {
        address1: string
        address2: string
        address3: string
        kana1: string
        kana2: string
        kana3: string
        prefcode: string
        zipcode: string
      }[]
      status: number
    }
  | {
      message: string
      results: null
      status: number
    }

/**
 * Required permissions: Event Subscriptions > Subscribe to bot events > app_home_opened
 */
export const appHomeOpenedListener: Middleware<
  SlackEventMiddlewareArgs<"app_home_opened">
> = async ({ body, client, event, logger }) => {
  try {
    // example of external api call
    const resp = await axios.get<JapanZipCodeAPIResponse>(
      "https://zipcloud.ibsnet.co.jp/api/search?zipcode=1000001"
    )
    const address = `${resp.data.results?.[0]?.address1 ?? ""} ${
      resp.data.results?.[0]?.address2 ?? ""
    } ${resp.data.results?.[0]?.address3 ?? ""}`

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
              text: `Your team_id is ${body.team_id}`,
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
      },
    })

    logger.debug(result)
  } catch (error) {
    logger.error(error)
  }
}
