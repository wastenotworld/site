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

  const source = node.querySelector('.js-source-selection')
  const mistake = node.querySelector('.js-source-mistake')

  const sourceOpen = node.querySelector('.js-source-open')
  sourceOpen.addEventListener('click', () => node.classList.toggle('source'))

  const mistakeTicketButton = node.querySelector('.js-source-mistake-btn')
  mistakeTicketButton.addEventListener('click', () => {
    source.classList.add('hidden')
    mistake.classList.remove('hidden')
  })

  const mistakeForm = node.querySelector('.js-mistake-form')

  mistakeForm.addEventListener('submit', e => {
    e.preventDefault()
    console.log('wiyo?')
    fetch(`/api/github`)
      .then(res => res.json())
      .then(json => {
        console.log('hey man?', json)
      })
  })
})