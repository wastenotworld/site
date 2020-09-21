import { picoapp } from 'picoapp'

import image from './lib/image.js'
import form from './lib/form.js'
import footer from './components/footer.js'
import hero from './components/hero.js'
import pop from './components/pop.js'
import textAnimate from './components/text-animate.js'
import bag from './components/bag.js'
import listings from './components/listings.js'
import header from './components/header.js'
import criteria from './components/criteria.js'
import submit from './components/submit.js'
import contributions from './components/contributions.js'
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
  bag,
  textAnimate,
  hero,
  listings,
  criteria,
  listingCard,
  submit,
  contributions,
  footer,
  screensaver,
  filters,
  easy,
  form
}

export default picoapp(components, state)