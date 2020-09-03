import { component } from 'picoapp'

export default component((node) => {
  const toggle = node.querySelector('.js-nav-toggle')
  const mobileHeader = node.querySelector('.js-mobile-header')
  const mobileLinks = mobileHeader.querySelectorAll('a')
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open')
    mobileHeader.classList.toggle('open')
  })

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.toggle('open')
      mobileHeader.classList.toggle('open')
    })
  })
})