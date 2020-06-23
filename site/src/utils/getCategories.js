const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateCategory (category) {
  const newListings = category.content.listings
  if (newListings) {
    newListings.forEach(listing => {
      listing.description = BlocksToMarkdown(listing.content.main.description, { serializers, ...client.config() })
    })
    category.content.listings = newListings
  }
  return {
    ...category,
    // info: BlocksToMarkdown(project.content.main.description, { serializers, ...client.config() })
  }
}

async function getCategories () {
  const filter = groq`*[_type == "category"] {
    ...,
    content {
      ...,
      listings[]-> {
        ...,
        content {
          ...,
          main {
            ...,
            'image': image.asset->,
            origin->,
            tags[]->
          }
        }
      }
    }
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const categories = docs.map(generateCategory)
  return categories
}

module.exports = getCategories