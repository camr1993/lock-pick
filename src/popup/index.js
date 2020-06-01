import store from '../store';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', onclick, false);

  function onclick (){
    console.table(store.passwordHints);
    alert('hi there from the popup')
  }

}, false)
