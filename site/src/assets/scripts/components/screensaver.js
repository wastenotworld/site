import { component } from 'picoapp'
import IdleTracker from 'idle-tracker'


export default component((node) => {
  const idleFunction = (payload) => {
    const body = document.querySelector('body')
    if (payload.idle) {
      body.classList.add('show-screensaver')
    } else {
      body.classList.remove('show-screensaver')
    }
  }

  const idleTracker = new IdleTracker({
    timeout: 20000,
    onIdleCallback: idleFunction
  })

  idleTracker.start()
})
