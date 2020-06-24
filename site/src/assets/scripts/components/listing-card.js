import { component } from 'picoapp'

export default component((node) => {

  const expanders = node.querySelectorAll('.js-expand-open')
  expanders.forEach(expand => {
    expand.addEventListener('click', () => {
      node.classList.toggle('open')
      if (node.classList.contains('source')) {
        node.classList.remove('source')
      }
    })
  })

  const sourceOpen = node.querySelector('.js-source-open')
  sourceOpen.addEventListener('click', () => node.classList.toggle('source'))
})