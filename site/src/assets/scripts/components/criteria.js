import { component } from 'picoapp'

export default component((node) => {
  const gButtons = node.querySelectorAll('.js-guarantee')
  const closeG = node.querySelector('.js-close-guarantee')
  gButtons.forEach(b => {
    b.addEventListener('click', () => {
      node.classList.toggle('open')
    })
  })
  closeG.addEventListener('click', () => {
    node.classList.remove('open')
  })
})
