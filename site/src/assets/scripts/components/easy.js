import { component } from 'picoapp'
import easydropdown from 'easydropdown'
import SlimSelect from 'slim-select'

import { router } from '../index.js'

export default component((node) => {
  // const edd = easydropdown(node, {
  //   callbacks: {
  //     onOptionClick: value => {
  //       router.go(value)
  //     },
  //     onOpen: () => {
  //       const optionValues = document.querySelectorAll('.edd-option')
  //       optionValues.forEach(opt => {
  //         if (!opt.classList.contains('edd-option-disabled')) {
  //           console.log('not disabled')
  //           opt.setAttribute('type', 'zag')
  //           opt.classList.add('taco')
  //         }
  //       })
  //     }
  //   },
  //   classNames: {
  //     rootHasValue: 'waste-value'
  //   }
  // })

  // return node => {
  //   edd.destroy()
  // }
  const placeholder = node.getAttribute('data-placeholder')
  console.log(placeholder)
  new SlimSelect({
    select: '#navigationalDrop',
    showSearch: false,
    placeholder: placeholder ? placeholder : 'Search Materials',
    onChange: (info) => {
      console.log(info)
    }
  })
})