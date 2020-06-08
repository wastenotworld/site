const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')
const  _ = require('lodash')

function generateCategory (category) {
  return {
    ...category,
    total: category.content.listings ? category.content.listings.length : 0
    // info: BlocksToMarkdown(project.content.main.description, { serializers, ...client.config() })
  }
}

function handleKey (key) {
  switch (key) {
    case 'packaging':
      return 'Packing'
    case 'interior':
      return 'Interior'
    case 'fashion':
      return 'Fashion and soft goods'
    default:
      return null
  }
}

async function getParents () {
  const filter = groq`*[_type == "category"] {
    ...
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const categories = docs.map(generateCategory)
  const grouped = _(categories).groupBy('content.main.parent').map((value, key) => ({
    parent: handleKey(key), listings: value
  })).value()
  return _.sortBy(grouped, ['parent']).reverse()
}

module.exports = getParents