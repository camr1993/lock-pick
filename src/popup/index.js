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
  console.log('Here', store)
  alert(`Password Hints: ${store.getHints('amazon')}`)
}

function clickAddRules() {
  const main = document.getElementById('main')
  const newTextarea = addTextarea()
  newTextarea.placeholder = 'Add password requirements...'
  main.insertBefore(newTextarea, main.childNodes[7])
  document.getElementById('add-rules-btn').disabled = true
}

function addTextarea() {
  const main = document.getElementById('main')
  main.style.height = '320px'
  const newText = document.createElement('textarea')
  newText.style.resize = 'none'
  newText.style.height = '100px'
  newText.style.marginLeft = '15px'
  newText.style.marginRight = '15px'
  newText.style.marginBottom = '15px'
  newText.style.marginTop = '10px'
  newText.style.fontFamily = 'system-ui, sans-serif'
  newText.style.backgroundColor = 'rgb(219, 219, 219)'
  newText.style.border = '0'
  newText.style.borderRadius = '2px'
  newText.style.padding = '5px'
  return newText
}
