import { component } from 'picoapp'
import SlimSelect from 'slim-select'

import { router } from '../index.js'

export default component((node) => {
  const listingList = document.querySelector('.js-category-list')
  const toggle = node.querySelector('.js-filter-toggle')

  toggle.addEventListener('click', e => {
    e.preventDefault()
    node.classList.toggle('show')
    if (node.classList.contains('show')) {
      toggle.innerHTML = `Refine results`
    } else {
      toggle.innerHTML = `Filter`
    }
  })


  let countries = []
  const listings = listingList.querySelectorAll('.js-card')
  const empty = document.querySelector('.js-empty')
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
    const listingLength = listings.length
    let listingHidden = 0
    listings.forEach(item => {
      if (item.classList.contains('hide-qty') || item.classList.contains('hidden') || item.classList.contains('hide-filter')) {
        listingHidden++
      }
    })
    if (listingLength === listingHidden) {
      empty.classList.remove('hidden')
    } else {
      empty.classList.add('hidden')
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
      checkIfVisible()
    })
  })

  const checkFilter = node.querySelectorAll('.js-check-filters input')
  checkFilter.forEach(filter => {
    filter.addEventListener('change', () => {
      hideAll('hide-filter')
      let filtersActive = true
      checkFilter.forEach(check => {
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
        showAll('hide-filter')
      }
      checkIfVisible()
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