import store from '../store'

// JavaScript for popup.html (with jQuery!)
$(document).ready(function () {
  eventListeners()
})

function eventListeners() {
  $('#show-rules-btn').on('click', clickShowRules)
  $('#add-rules-btn').on('click', clickAddRules)
}

function clickShowRules() {
  console.table(store.passwordHints)
  console.log('Here', store)
  alert(`Password Hints: ${store.getHints('amazon')}`)
}

function clickAddRules() {
  addTextarea()
  $('#add-rules-btn').attr('disabled', 'true')
}

function addTextarea() {
  $('#main').height('320px')
  $('<textarea/>').insertBefore('#report')
  $('textarea')
    .css({
      resize: 'none',
      height: '100px',
      marginLeft: '15px',
      marginRight: '15px',
      marginTop: '10px',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: 'rgb(240, 240, 240)',
      border: 0,
      borderRadius: '2px',
      padding: '5px',
    })
    .attr('placeholder', 'Add password requirements...')
}
