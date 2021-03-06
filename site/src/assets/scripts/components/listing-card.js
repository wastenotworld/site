import { component } from 'picoapp'
import vsbl from 'vsbl'

function encode(data) {
  return Object.keys(data)
    .map((key) => {
      if (data[key].type === 'checkbox') {
        return `"${data[key].name}":"${data[key].checked}"`
      } else {
        return `"${data[key].name}":"${data[key].value}"`
      }
    })
    .join(',')
}

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

  const vs = vsbl(node)(() => {
    node.classList.add('is-visible')
  })
  vs.update()

  const source = node.querySelector('.js-source-selection')
  const mistake = node.querySelector('.js-source-mistake')
  const questionable = node.querySelector('.js-source-questionable-info')
  const thanks = node.querySelector('.js-thanks')

  const resetAll = node.querySelector('.js-reset-all')

  const resets = node.querySelectorAll('.js-reset')

  resets.forEach(reset => {
    reset.addEventListener('click', () => {
      source.classList.add('hidden')
      mistake.classList.add('hidden')
      questionable.classList.add('hidden')
      node.classList.remove('source')
      setTimeout(() => {
        source.classList.remove('hidden')
      }, 1000)
    })
  })

  resetAll.addEventListener('click', () => {
    mistake.classList.add('hidden')
    thanks.classList.add('hidden')
    questionable.classList.add('hidden')
    source.classList.remove('hidden')
  })

  const sourceOpen = node.querySelector('.js-source-open')
  sourceOpen.addEventListener('click', () => node.classList.toggle('source'))

  const mistakeTicketButton = node.querySelector('.js-source-mistake-btn')
  mistakeTicketButton.addEventListener('click', () => {
    source.classList.add('hidden')
    mistake.classList.remove('hidden')
  })

  const mistakeForm = mistake.querySelector('form')

  mistakeForm.addEventListener('submit', e => {
    e.preventDefault()
    const formFields = `{${encode(e.currentTarget.elements)}}`
    fetch('/.netlify/functions/github-listing', {
      method: 'POST',
      body: formFields,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
      console.log('we did it!', json)
      mistake.classList.add('hidden')
      thanks.classList.remove('hidden')
    })
  })

  const questionableTicketButton = node.querySelector('.js-source-questionable')

  questionableTicketButton.addEventListener('click', () => {
    source.classList.add('hidden')
    questionable.classList.remove('hidden')
  })

  const questionableForm = questionable.querySelector('form')

  questionableForm.addEventListener('submit', e => {
    e.preventDefault()

    const formFields = `{${encode(e.currentTarget.elements)}}`
    fetch('/.netlify/functions/github-listing', {
      method: 'POST',
      body: formFields,
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(json => {
      console.log('we did it!', json)
      questionable.classList.add('hidden')
      thanks.classList.remove('hidden')
    })
  })
})