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

  console.log(data)

  return statusReturn(200, { body: 'success' })
//   try {
//     const response = await octokit.request("POST /repos/wastenotworld/site/issues", {
//       org: "wastenotworld",
//       repo: "site",
//       title: "Testing",
//       body: `
// # New Listing Request - Spacing Test

// Include an additional description here to clarify any of the information below


// ### Material or product name
// * * *
// testing

// ### Material or product URL
// * * *
// [testing](https://testing.com)

// ### Parent supplier name
// * * *
// spaghetti

// ### Parent supplier URL
// * * *
// [spaghetti](https://testing.com)

// ### Country
// * * *
// USA

// ### City
// * * *
// Brooklyn

// ### Description
// * * *
// desccccription

// ### Minimums
// * * *
// Low Minimums

// ### Is it?
// * * *
// - [x] Biodegradable
// - [ ] Compostable
// - [x] Home Compostable
// - [ ] Renewed Material
// - [x] Bio Based
// - [ ] Dissolvable
// - [ ] Recycable

// ### Tags (Optional)
// * * *
// - [x] Customizable
// - [ ] Claims low energy usage
// - [ ] Range of finishes
// - [ ] Claims closed loop
// - [ ] Drop ship options
// - [ ] Claims renewable natural resource
// - [ ] Claims low water usage
// - [x] Claims lower greenhouse emissions
// - [ ] Claims carbon neutrality
// - [ ] Claims zero waste
//       `
//     })
//     console.log('response', response)
//     return statusReturn(200, { body: 'success' })
//   } catch (err) {
//     console.log(err)
//     return statusReturn(500, { error: err.message })
//   }
}