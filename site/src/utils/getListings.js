const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')
const { uniqBy } = require('lodash')

function generateListing (listing) {
  return {
    ...listing,
    description: BlocksToMarkdown(listing.content.main.description, { serializers, ...client.config() })
  }
}


async function getListings () {
  const filter = groq`*[_type == "listing"] {
    ...,
    content {
      ...,
      main {
        ...,
        'image': image.asset->,
        origin->,
        tags[]-> {
          title
        }
      }
    },
    'supplier': *[_type =='manufacturer' && references(^._id)] [0] {
      content,
      _id
    }
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const listings = docs.map(generateListing)
  return listings
}

module.exports = getListings