import store from '../store'

// JavaScript for popup.html (with jQuery!)
$(document).ready(function () {
  eventListeners()
})

function eventListeners() {
  $('#toggle').on('click', clickToggle)
  $('#show-rules-btn').on('click', clickShowRules)
  $('#add-rules-btn').on('click', clickAddRules)
  $('#report').on('click', clickReport)
}

function clickToggle() {
  console.log('toggle', store.toggle)
  store.toggleOnOff()
  if (store.toggle) {
    enableBtns()
  } else {
    disableBtns()
  }
}

function disableBtns() {
  $('.hint-button')
    .css({
      backgroundColor: 'rgb(160, 160, 160)',
      cursor: 'auto',
    })
    .unbind('mouseenter mouseleave')
}

function enableBtns() {
  $('.hint-button')
    .css({
      backgroundColor: 'rgb(52, 123, 255)',
      cursor: 'pointer',
    })
    .hover(
      function () {
        $(this).css({ backgroundColor: 'rgb(42, 97, 199)' })
      },
      function () {
        $(this).css({ backgroundColor: 'rgb(52, 123, 255)' })
      }
    )
}

function clickShowRules() {
  if (!store.toggle) return
  console.table(store.passwordHints)
  console.log('Here', store)
  alert(`Password Hints: ${store.getHints('amazon')}`)
}

function clickAddRules() {
  if (!store.toggle) return
  const textarea = checkForTextarea()
  textarea.attr('placeholder', 'Add password requirements...')
  checkForSubmitBtn()
}

function clickReport() {
  const textarea = checkForTextarea()
  textarea.attr('placeholder', 'Report issue...')
  checkForSubmitBtn()
}

function checkForTextarea() {
  let textarea
  // if textarea is already there, just select it and change the placeholder
  // else create a textarea
  if ($('textarea').length) {
    textarea = $('textarea')
  } else {
    textarea = addTextarea()
  }
  return textarea
}

function checkForSubmitBtn() {
  let submitBtn
  if ($('#submit-btn').length) {
    submitBtn = $('#submit-btn')
  } else {
    submitBtn = addSubmitBtn()
  }
  return submitBtn
}

function addTextarea() {
  $('#main').height('350px')
  $('<textarea/>').insertBefore('#report')
  return $('textarea').css({
    resize: 'none',
    height: '100px',
    marginLeft: '15px',
    marginRight: '15px',
    fontFamily: 'system-ui, sans-serif',
    backgroundColor: 'rgb(240, 240, 240)',
    border: 0,
    borderRadius: '2px',
    padding: '5px',
  })
}

function addSubmitBtn() {
  $('<button id="submit-btn">Submit</button>')
    .insertBefore('#report')
    .css({
      marginLeft: '15px',
      marginRight: '15px',
      marginTop: '10px',
      marginBottom: '10px',
      height: '30px',
      border: '0',
      color: 'white',
      backgroundColor: '#E6AB00',
      borderRadius: '3px',
      boxShadow: '0px 0.7px 2px black',
      cursor: 'pointer',
    })
    .hover(
      function () {
        $(this).css({ backgroundColor: '#c59503' })
      },
      function () {
        $(this).css({ backgroundColor: '#E6AB00' })
      }
    )
}
