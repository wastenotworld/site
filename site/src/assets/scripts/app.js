import { picoapp } from 'picoapp'

import image from './lib/image.js'
import form from './lib/form.js'

const state = {
  menuOpen: false
}

const components = {
  image,
  form
}

export default picoapp(components, state)