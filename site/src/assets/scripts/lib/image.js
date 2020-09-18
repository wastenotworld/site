import { component } from 'picoapp'
import vsbl from 'vsbl'

export default component((node) => {
  node.onload = e => node.classList.add('is-loaded')
  if (/.png/.test(node.getAttribute('data-src'))) {
    node.parentNode.classList.add('transparent')
  }
  node.src = node.getAttribute('data-src')
  const vs = vsbl(node)(() => {
    node.classList.add('is-visible')
  })
  vs.update()
})
