import { APIGatewayEvent } from 'aws-lambda'
import { Octokit } from '@octokit/core'

import {
  GIT_AUTH
} from process.env

const octokit = new Octokit({
  auth: GIT_AUTH
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