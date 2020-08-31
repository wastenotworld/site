import { component } from 'picoapp'
import SlimSelect from 'slim-select'

import { router } from '../index.js'

export default component((node) => {
  console.log(node)
  new SlimSelect({
    select: node,
    showSearch: false,
    onChange: (info) => {
      console.log(info)
      router.go(info.value)
    }
  })
})