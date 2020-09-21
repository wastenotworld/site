import { component } from 'picoapp'
import vsbl from 'vsbl'

export default component((node) => {
  const vs = vsbl(node, { threshold: 0.25  })(() => {
    node.classList.add('show')
  })
  vs.update()
})
