import { component } from 'picoapp'
import SlimSelect from 'slim-select'


function encode(data) {
  return Object.keys(data)
    .map((key) => {
      console.log('hey key', data)
      return `"${data[key].name}":"${data[key].value}"`
    })
    .join(',')
}

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

  const supplierForm = supplier.querySelector('form')

  supplierForm.addEventListener('submit', e => {
    e.preventDefault()

    const formFields = `{${encode(e.currentTarget.elements)}}`
    fetch('https://api.staticforms.xyz/submit', {
      method: 'POST',
      body: formFields,
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.log('wifo?', json)
      })
    console.log(formFields)
  })

  new SlimSelect({
    select: selectMain,
    showSearch: false,
    onChange: (info) => {
      showHide(info.value)
    }
  })
})