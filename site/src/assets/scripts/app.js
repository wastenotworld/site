import { picoapp } from 'picoapp'

import image from './lib/image.js'
import form from './lib/form.js'
import footer from './components/footer.js'
import pop from './components/pop.js'
import header from './components/header.js'
import submit from './components/submit.js'
import filters from './components/filters.js'
import listingCard from './components/listing-card.js'
import screensaver from './components/screensaver.js'
import easy from './components/easy.js'

const state = {
  menuOpen: false
}

const components = {
  image,
  pop,
  header,
  listingCard,
  submit,
  footer,
  screensaver,
  filters,
  easy,
  form
}

export default picoapp(components, state)