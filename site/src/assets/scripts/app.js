import { picoapp } from 'picoapp'

import image from './lib/image.js'
import form from './lib/form.js'
import pop from './components/pop.js'
import easy from './components/easy.js'

const state = {
  menuOpen: false
}

const components = {
  image,
  pop,
  easy,
  form
}

export default picoapp(components, state)