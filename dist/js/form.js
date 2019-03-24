/// F. Form
console.log('form.js loaded')

/// F.1. Elements
const alertForm = {
  id: '#alert-form',
  element: null
}


/// F.2. document.ready
/// TODO: Load validate.js
$(document).ready(function() {
  alertForm.element = $(alertForm.id)

  hide(alertForm.element)
})


/// F.3. Helper functions
function show(jqElement) {
  jqElement.show()
}

function hide(jqElement) {
  jqElement.hide()
}