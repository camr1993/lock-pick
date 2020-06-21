import store from '../store'

// JavaScript for popup.html
document.addEventListener('DOMContentLoaded', eventListeners(), false)

function eventListeners() {
  document
    .getElementById('show-rules-btn')
    .addEventListener('click', clickShowRules, false)
  document
    .getElementById('add-rules-btn')
    .addEventListener('click', clickAddRules, false)
}

function clickShowRules() {
  console.table(store.passwordHints)
  alert('Show Rules Here')
}

function clickAddRules() {
  console.table(store.passwordHints)
  alert('Add Rules')
}
