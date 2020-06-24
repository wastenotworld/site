import { component } from 'picoapp'

export default component((node) => {

  const expanders = node.querySelectorAll('.js-expand-open')
  expanders.forEach(expand => {
    expand.addEventListener('click', () => node.classList.toggle('open'))
  })
})