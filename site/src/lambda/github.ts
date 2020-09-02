import { APIGatewayEvent } from 'aws-lambda'
import { Octokit } from '@octokit/core'

const octokit = new Octokit({
  auth: `50973cdf9877f05848ea267dc59eea47e2c79e4e`
})

import {
  statusReturn
} from './requestConfig'


export const handler = async (event: APIGatewayEvent): Promise<any> => {
  try {
    const response = await octokit.request("POST /repos/wastenotworld/site/issues", {
      org: "wastenotworld",
      repo: "site",
      title: "Testing"
    })
    console.log('response', response)
    return statusReturn(200, { body: 'success' })
  } catch (err) {
    console.log(err)
    return statusReturn(500, { error: err.message })
  }
}