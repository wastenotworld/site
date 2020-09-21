import { component } from 'picoapp'

export default component((node) => {

  const text = node.querySelectorAll('.js-world-text')
  let currentIndex = 1
  setInterval(() => {
    text.forEach(t => t.classList.remove('active'))
    text[currentIndex].classList.add('active')
    if (currentIndex === text.length - 1) {
      currentIndex = 0
    } else {
      currentIndex++
    }
  }, 4000)
})