const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateCategory (category) {
  return {
    ...category,
    // info: BlocksToMarkdown(project.content.main.description, { serializers, ...client.config() })
  }
}

async function getCategories () {
  const filter = groq`*[_type == "category"] {
    ...
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const categories = docs.map(generateCategory)
  return categories
}

module.exports = getCategories