import { component } from 'picoapp'
import SlimSelect from 'slim-select'

export default component((node) => {
  const selectMain = node.querySelector('.js-submit-view')

  const views = node.querySelectorAll('.js-view')

  const help = node.querySelector('.js-help')
  const tech = node.querySelector('.js-tech')
  const supplier = node.querySelector('.js-supplier')

  const showHide = (value) => {
    views.forEach(view => {
      view.classList.add('hidden')
    })
    switch (value) {
      case 'help':
        help.classList.remove('hidden')
        break
      case 'savvy':
        tech.classList.remove('hidden')
        break
      case 'manufacturer':
        supplier.classList.remove('hidden')
        break
    }
  }

  new SlimSelect({
    select: selectMain,
    showSearch: false,
    onChange: (info) => {
      showHide(info.value)
    }
  })
})