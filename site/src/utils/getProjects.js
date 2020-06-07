const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateProject (project) {
  return {
    ...project,
    info: BlocksToMarkdown(project.content.main.description, { serializers, ...client.config() })
  }
}

async function getProjects () {
  const filter = groq`*[_type == "project"] | order(content.main.launchDate desc) {
    ...,
    'image': content.main.image.asset->,
    'video': content.main.video.asset->url,
  	content {
      ...,
      main {
        ...,
        siteScreens[] {
          ...,
          'image': asset->
        },
        description[] {
          ...,
          markDefs[]{
            ...,
            _type == "internalLink" => {
              ...,
              "slug": @.reference->content.main.slug
            }
          }
        }
      }
    }
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const projects = docs.map(generateProject)
  return projects
}

module.exports = getProjects