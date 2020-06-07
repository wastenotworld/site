const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')
const { uniqBy } = require('lodash')

function generateListing (listing) {
  // let friends = []
  // let singleFriends = []
  // if (user.content.projects && user.content.projects.length > 0) {
  //   const allUsers = []
  //   user.content.projects.forEach(item => {
  //     if (item.project.content.main.linkedUsers) {
  //       item.project.content.main.linkedUsers.forEach(lUser => {
  //         const user = {
  //           slug: lUser.content.main.slug,
  //           name: lUser.content.main.name
  //         }
  //         allUsers.push(user)
  //       })
  //     }
  //   })
  //   friends = uniqBy(allUsers, (e) => {
  //     return e.slug.current
  //   })
  //   singleFriends = friends.reduce((friendSingle, elm) => {
  //     if (elm.slug.current !== user.content.main.slug.current) {
  //       friendSingle.push(elm)
  //     }
  //     return friendSingle
  //   }, [])
  // }
  return {
    ...listing,
    // friends: singleFriends
    // bio: BlocksToMarkdown(user.bio, { serializers, ...client.config() })
  }
}


async function getListings () {
  const filter = groq`*[_type == "listing"] {
    ...,
    content {
      ...
    }
  }`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const users = docs.map(generateListing)
  return users
}

module.exports = getListings