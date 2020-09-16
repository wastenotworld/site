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
      title: data.materialName,
      body: `
# New Listing Request - ${data.materialName}

Include an additional description here to clarify any of the information below


### Material or product name
* * *
${data.materialName}

### Material or product URL
* * *
[${data.materialName}](${data.materialURL})

### Parent supplier name
* * *
${data.supplierName}

### Parent supplier URL
* * *
[${data.supplierName}](${data.supplierURL})

### Country
* * *
${data.country}

### City
* * *
${data.city}

### Description
* * *
${data.description}

### Minimums
* * *
${data.minimums}

### Is it?
* * *
- [${data.biodegradable === 'true' ? 'x' : ' '}] Biodegradable
- [${data.compostable === 'true' ? 'x' : ' '}] Compostable
- [${data.homeCompostable === 'true' ? 'x' : ' '}] Home Compostable
- [${data.renewedMaterial === 'true' ? 'x' : ' '}] Renewed Material
- [${data.bioBased === 'true' ? 'x' : ' '}] Bio Based
- [${data.dissolvable === 'true' ? 'x' : ' '}] Dissolvable
- [${data.recyclable === 'true' ? 'x' : ' '}] Recycable

### Tags (Optional)
* * *
- [${data.customizable === 'true' ? 'x' : ' '}] Customizable
- [${data.claimsLowEnergy === 'true' ? 'x' : ' '}] Claims low energy usage
- [${data.rangeOfFinishes === 'true' ? 'x' : ' '}] Range of finishes
- [${data.claimsClosed === 'true' ? 'x' : ' '}] Claims closed loop
- [${data.dropShip === 'true' ? 'x' : ' '}] Drop ship options
- [${data.claimsRenewable === 'true' ? 'x' : ' '}] Claims renewable natural resource
- [${data.claimsLowWater === 'true' ? 'x' : ' '}] Claims low water usage
- [${data.claimsLowerGreenhouse === 'true' ? 'x' : ' '}] Claims lower greenhouse emissions
- [${data.claimsCarbon === 'true' ? 'x' : ' '}] Claims carbon neutrality
- [${data.claimsZero === 'true' ? 'x' : ' '}] Claims zero waste
      `
    })
    console.log('response', response)
    return statusReturn(200, { body: 'success' })
  } catch (err) {
    console.log(err)
    return statusReturn(500, { error: err.message })
  }
}