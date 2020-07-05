import { component } from 'picoapp'
import SlimSelect from 'slim-select'

import { router } from '../index.js'

export default component((node) => {
  new SlimSelect({
    select: '#multiple',
    showSearch: false,
    placeholder: 'Anywhere',
    onChange: (info) => {
      console.log(info)
    }
  })
})