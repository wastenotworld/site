import React from 'react'
import Emoji from 'a11y-react-emoji'

const Icon = () => <Emoji style={{ fontSize: '2rem' }} symbol='🎨' />

export default {
  name: 'manufacturer',
  title: 'Manufacturer',
  type: 'document',
  liveEdit: false,
  icon: Icon,
  fields: [
    {
      name: "content",
      type: "manufacturerContent",
    }
  ],
  preview: {
    select: {
      title: 'content.main.name'
    }
  }
}
