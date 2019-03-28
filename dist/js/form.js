/// F. Form
console.log('form.js loaded')

/// F.1. Elements
const alertForm = {
  id: '#alert-form',
  element: null
}

const formContact = {
  id: '#form-contact',
  element: null
}


/// F.2. document.ready
$(document).ready(function() {
  alertForm.element = $(alertForm.id)
  formContact.element = $(formContact.id)

  hide(alertForm.element)

  submitForm(formContact.element)
})


/// F.3. Helper functions
function show(jqElement) {
  jqElement.show()
}

function hide(jqElement) {
  jqElement.hide()
}


/// F.4. Form functions
function validateForm(form) {
  const formValidateConstraints = {
    name: {
      presence: {
        allowEmpty: false
      }
    },
    email: {
      presence: {
        allowEmpty: false
      },
      email: true
    },
    tel: {
      presence: {
        allowEmpty: false
      }
    },
    subject: {
      presence: {
        allowEmpty: false
      },
      inclusion:  {
        within: ['project', 'hire', 'coffee', 'others'],
        message: "^%{value} is not a valid Subject."
      }
    },
    message: {
      presence: {
        allowEmpty: false
      }
    }
  }

  console.log(validate.collectFormValues(form))
  console.log(validate(validate.collectFormValues(form), formValidateConstraints))
}

function submitForm(form) {
  $(form).submit(function (e) {
    event.preventDefault()

    validateForm()
  })
}