import { component } from 'picoapp'
import easydropdown from 'easydropdown'

import { router } from '../index.js'

export default component((node) => {
  const edd = easydropdown(node, {
    callbacks: {
      onOptionClick: value => {
        router.go(value)
      }
    }
  })
})