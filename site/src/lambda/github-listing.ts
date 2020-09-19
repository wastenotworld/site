import { APIGatewayEvent } from 'aws-lambda'
import { Octokit } from '@octokit/core'

const {
  GIT_AUTH
} = process.env

const octokit = new Octokit({
  auth: GIT_AUTH
})

import {
  statusReturn
} from './requestConfig'


export const handler = async (event: APIGatewayEvent): Promise<any> => {
  console.log('tacos', event)
  if (event.httpMethod !== 'POST' || !event.body) return statusReturn(400, {})

  let data = {}
  try {
    data = JSON.parse(event.body)
  } catch (error) {
    console.log('JSON parsing error:', error);
    return statusReturn(400, { error: 'Bad Request Body' })
  }


  try {
    const response = await octokit.request("POST /repos/wastenotworld/site/issues", {
      org: "wastenotworld",
      repo: "site",
      title: `Listing Issue with - ${data.name}`,
      body: `

**What item has the mistake?/questionable info?**
${data.select}

**Describe the issue**
${data.description}

      `
    })
    return statusReturn(200, { body: response })
  } catch (err) {
    console.log(err)
    return statusReturn(500, { error: err.message })
  }
}