const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateSupplier (supplier) {
  return {
    ...supplier,
    info: BlocksToMarkdown(supplier.content.main.description, { serializers, ...client.config() })
  }
}

async function getSupplierss () {
  const filter = groq`*[_type == "manufacturer"] {
    ...,
    content {
      ...,
      main {
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
      }
    },
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const suppliers = docs.map(generateSupplier)
  return suppliers
}

module.exports = getSupplierss