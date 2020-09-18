import { component } from 'picoapp'

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

  const source = node.querySelector('.js-source-selection')
  const mistake = node.querySelector('.js-source-mistake')
  const questionable = node.querySelector('.js-source-questionable-info')

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
    const formFields = `{${encode(e.currentTarget.elements)}}`
    console.log(formFields)
    // fetch(`/api/github`)
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log('hey man?', json)
    //   })
  })

  const questionableTicketButton = node.querySelector('.js-source-questionable')

  questionableTicketButton.addEventListener('click', () => {
    source.classList.add('hidden')
    console.log(questionable)
    questionable.classList.remove('hidden')
  })

  const questionableForm = questionable.querySelector('form')

  questionableForm.addEventListener('submit', e => {
    e.repventDefault()

    const formFields = `{${encode(e.currentTarget.elements)}}`
    console.log(formFields)
  })
})