const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateManufacturer (manufacturer) {

  return {
    ...manufacturer,
    // info: BlocksToMarkdown(project.content.main.description, { serializers, ...client.config() })
  }
}

async function getManufacturers () {
  const filter = groq`*[_type == "manufacturer"] {
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
        },
        'supplier': *[_type =='manufacturer' && references(^._id)] [0] {
          content,
          _id
        }
      }
    },
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const manufacturers = docs.map(generateManufacturer)
  return manufacturers
}

module.exports = getManufacturers