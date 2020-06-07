import { component } from 'picoapp'

import { subscribe } from "klaviyo-subscribe"

export default component((node) => {
  const form = node.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const success = node.querySelector('.js-spaghetti')
    const email = form.elements.email

    console.log(email.value)

    subscribe("Yf9WmD", email.value, {})
      .then(response => {
        form.reset()
        form.classList.add('hidden')
        success.classList.remove('hidden')
        console.log('response', response)
      })
  })
})