import { picoapp } from 'picoapp'

import image from './lib/image.js'
import form from './lib/form.js'
import pop from './components/pop.js'
import listingCard from './components/listing-card.js'
import easy from './components/easy.js'

const state = {
  menuOpen: false
}

const components = {
  image,
  pop,
  listingCard,
  easy,
  form
}

export default picoapp(components, state)