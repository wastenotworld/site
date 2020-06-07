import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🏗️' />

export default {
  name: 'listing',
  title: 'Listing',
  type: 'document',
  liveEdit: false,
  icon: Icon,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "content",
      type: "listingContent",
    }
  ],
  preview: {
    select: {
      title: 'content.main.name',
      media: 'content.main.image'
    }
  }
}
