// const {
//   SHOPIFY_TOKEN,
//   SHOPIFY_GRAPHQL_URL
// } = process.env

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json'
}

// const shopifyConfig = {
//   'Content-Type': 'application/json',
//   'X-Shopify-Storefront-Access-Token': SHOPIFY_TOKEN
// }


const statusReturn = (code: number, body: {}) => {
  return {
    statusCode: code,
    headers,
    body: JSON.stringify(body)
  }
}

const preparePayload = (query, v) => {
  return {
    query,
    variables: v
  }
}

export {
  headers,
  statusReturn,
  preparePayload
}