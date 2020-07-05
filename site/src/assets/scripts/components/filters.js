import { component } from 'picoapp'
import SlimSelect from 'slim-select'

import { router } from '../index.js'

export default component((node) => {
  const listingList = document.querySelector('.js-category-list')
  let countries = []
  const listings = listingList.querySelectorAll('.js-card')

  const hideAll = (className) => {
    listings.forEach(item => {
      item.classList.add(className)
    })
  }

  const showAll = (className) => {
    listings.forEach(item => {
      item.classList.remove(className)
    })
  }

  const checkIfVisible = () => {
    if (countries.length > 0) {
      hideAll('hidden')
      countries.forEach(country => {
        listings.forEach(item => {
          if (item.classList.contains(country.value)) {
            item.classList.remove('hidden')
          }
        })
      })
    } else {
      showAll('hidden')
    }
  }

  const qtSelect = node.querySelector('.js-quantites')
  const radios = qtSelect.querySelectorAll('input')
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      listings.forEach(item => {
        if (item.classList.contains(radio.value)) {
          item.classList.remove('hide-qty')
        } else {
          item.classList.add('hide-qty')
        }
        if (radio.value === 'show-all') {
          item.classList.remove('hide-qty')
        }
      })
    })
  })

  const checkFilter = node.querySelectorAll('.js-check-filters input')
  checkFilter.forEach(filter => {
    filter.addEventListener('change', () => {
      hideAll('hide-filter')
      let filtersActive = true
      checkFilter.forEach(check => {
        console.log(check.checked, check.value)
        if (check.checked === true) {
          filtersActive = false
          listings.forEach(item => {
            if (item.classList.contains(check.value)) {
              item.classList.remove('hide-filter')
            }
          })
        }
      })
      if (filtersActive) {
        console.log('what?')
        showAll('hide-filter')
      }
    })
  })

  new SlimSelect({
    select: '#multiple',
    showSearch: false,
    placeholder: 'Anywhere',
    onChange: (info) => {
      countries = info
      checkIfVisible()
    }
  })
})