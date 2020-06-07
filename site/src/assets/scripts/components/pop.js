import { component } from 'picoapp'
import Poppy from 'poppy'

export default component((node) => {
  const pops = node.querySelectorAll('.js-pop')
  pops.forEach(pop => {
    const popText = pop.getAttribute('data-pop')
    const popp = new Poppy({
      target: pop,
      popover: `
      <div class='poppy__inner'>
        <p class='serif'>${popText}</p>
      </div>`,
      position: 'top',
      transitionSpeed: 200
    })
    pop.addEventListener('mouseenter', popp.pin)
    pop.addEventListener('mouseleave', popp.unpin)
  })
})