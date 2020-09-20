import { component } from 'picoapp'

export default component((node) => {
  const questions = node.querySelectorAll('.js-faq')

  questions.forEach(question => {
    question.addEventListener('click', e => {
      e.preventDefault()
      if (question.classList.contains('active')) {
        questions.forEach(question => question.classList.remove('active'))
        question.classList.remove('active')
      } else {
        questions.forEach(question => question.classList.remove('active'))
        question.classList.add('active')
      }
    })
  })
})