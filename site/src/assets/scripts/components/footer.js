import { component } from 'picoapp'

export default component((node) => {
  const creditOpen = node.querySelector('.js-credit-open')
  const credits = node.querySelector('.js-credits')
  creditOpen.addEventListener('click', e => {
    e.preventDefault()
    credits.classList.toggle('open')
  })
})