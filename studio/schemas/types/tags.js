import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎟️' />

export default {
  name: 'tag',
  title: 'Tags',
  type: 'document',
  liveEdit: false,
  icon: Icon,
  fields: [
    {
      name: "title",
      title: "Name",
      type: "string",
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
