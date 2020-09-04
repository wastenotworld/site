import { component } from 'picoapp'

export default component((node) => {
  console.log('criteria')
  const gButton = node.querySelector('.js-guarentee')
  gButton.addEventListener('click', () => {
    node.classList.toggle('open')
  })
})