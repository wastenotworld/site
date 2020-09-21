import { component } from 'picoapp'
import vsbl from 'vsbl'

export default component((node) => {
  const vs = vsbl(node)(() => {
    node.classList.add('is-visible')
  })
  vs.update()
})