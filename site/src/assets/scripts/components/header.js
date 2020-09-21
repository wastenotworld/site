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

  const mobileImageDom = node.querySelectorAll('.js-mobile-images img')
  let currentIndex = 1
  setInterval(() => {
    mobileImageDom.forEach(img => img.classList.remove('active'))
    mobileImageDom[currentIndex].classList.add('active')
    if (currentIndex === mobileImageDom.length - 1) {
      currentIndex = 0
    } else {
      currentIndex++
    }
  }, 2000)
})