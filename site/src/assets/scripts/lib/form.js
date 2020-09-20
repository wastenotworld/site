import { component } from 'picoapp'

import astrochimp from 'astrochimp'

export default component((node) => {
  const form = node.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const success = node.querySelector('.js-spaghetti')
    const email = form.elements.email

    console.log(email.value)
    astrochimp('https://world.us2.list-manage.com/subscribe/post?u=8e8fe8709d1e629cb0e653519&amp;id=257c47747d', {
      EMAIL: email.value
    }, (err, data) => {
      console.log('success?', err, data)
      if (!err) {
      
        form.reset()
        form.classList.add('hidden')
        success.classList.remove('hidden')
      }
    })
  })
})