import { component } from 'picoapp'
import vsbl from 'vsbl'

export default component((node) => {
  const bag = node.querySelector('.js-bag')
  const vs = vsbl(bag)(() => {
    bag.classList.add('show')
  })
  vs.update()
})