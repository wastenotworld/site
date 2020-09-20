import { component } from 'picoapp'

export default component((node) => {
  const creditOpen = node.querySelector('.js-credit-open')
  const credits = node.querySelector('.js-credits')
  creditOpen.addEventListener('click', e => {
    e.preventDefault()
    credits.classList.toggle('open')
  })

  const form = node.querySelector('.js-subscribe')
  form.addEventListener('submit', e => { 
    e.preventDefault()
    const { email } = e.currentTarget.elements
  })
  astrochimp('blewp', {
      EMAIL: email.value
    }, (err, data) => {
      console.log('success?', err, data)
      if (!err) {
        setSuccess(true)
      }
    })
})