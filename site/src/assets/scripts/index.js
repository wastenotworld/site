import app from './app.js'
import operator from 'operator'

import '/css/styles.css';
import BodyStatus from 'easydropdown/dist/State/Constants/BodyStatus';

export const router = operator('#root')

const theme = () => {
  const themeDom = document.querySelector('[data-theme]')
  document.querySelector('body').className = ''
  if (themeDom) {
    document.querySelector('body').classList.add(themeDom.getAttribute('data-theme'))
  }
}

document.addEventListener('DOMContentLoaded', e => {
  console.log('🍝 Built by Kevin Green');
  app.mount()
  theme()

  window.__app = app
})

router.on('after', ({ title, location }) => {
  document.title = title
  theme()
  window.history.pushState({}, '', location)
  app.mount()
})
