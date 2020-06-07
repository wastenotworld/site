import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🌐' />

export default {
  name: 'country',
  title: 'Country',
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
      name: 'color',
      title: 'Color Association',
      type: 'color'
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
}
