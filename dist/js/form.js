/// F. Form
console.log('form.js loaded')


/// F.1. document.ready
$(document).ready(function() {

  const alertForm = {

    selector: '#alert-form',
    element: null,
    heading: {
      selector: '#alert-form > .alert-title',
      element: null
    },
    content: {
      selector: '#alert-form > .alert-message',
      element: null
    }

  }

  const formContact = {

    selector: '#form-contact',
    element: null

  }

  const formField = {

    selector: '.form-field'

  }

  const formFields = {

    'name': {
      name: 'name',
      selector: "input[name='name']",
      element: null
    }, 
    'email': {
      name: 'email',
      selector: "input[name='email']",
      element: null
    },
    'mobile': {
      name: 'mobile',
      selector: "input[name='mobile']",
      element: null
    },
    'subject': {
      name: 'subject',
      selector: "select[name='subject']",
      element: null
    },
    'message': {
      name: 'message',
      selector: "textarea[name='message']",
      element: null
    }

  }


  alertForm.element = $(alertForm.selector)
  alertForm.heading.element = $(alertForm.heading.selector)
  alertForm.content.element = $(alertForm.content.selector)

  formContact.element = $(formContact.selector)
  Object.keys(formFields).map(key => {
    formFields[key].element = $(formFields[key].selector)
  })

  hide(alertForm.element)

  submitForm(formContact.element, formFields, alertForm)

})


/// F.2. Helper functions
function show(element) {

  element.show()

}

function hide(element) {

  element.hide()

}

function success(elementTypes, elementType, element) {

  switch (elementType) {
    case elementTypes.formField:
      element.parent('.form-field')
        .addClass('form-success')
        .removeClass('form-error')
      break

    case elementTypes.alert:
      element
        .addClass('alert-col-success')
        .removeClass('alert-col-danger')
      break

    default:
      break
  }

}

function error(elementTypes, elementType, element) {

  switch (elementType) {
    case elementTypes.formField:
      element.parent('.form-field')
        .addClass('form-error')
        .removeClass('form-success')
      break

    case elementTypes.alert:
      element
        .addClass('alert-col-error')
        .removeClass('alert-col-success')
      break

    default:
      break
  }

}


/// F.3. Form functions
function submitForm(form, fields, alert) {

  const elementTypes = {
    formField: 'formField',
    alert: 'alert'
  }

  $(form).submit(function(event) {
    event.preventDefault()

    const errors = validateForm(form, fields)

    // Assign success classes to all fields
    Object.keys(fields).map(key => {
      success(elementTypes, elementTypes.formField, fields[key].element)
    })

    if (errors && Object.keys(errors).length > 0) {
      
      // Assign error classes to fields with errors
      Object.keys(errors).map(errKey => {
        const field = fields[errKey]
        if (field) {
          error(elementTypes, elementTypes.formField, field.element)
        }
      })

      //TODO: Construct error message
      //TODO: Change alert heading
      //TODO: Change alert content
      //TODO: Show alert

    } else {
      sendEmail()
    }
  })

}

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

  return validate(validate.collectFormValues(form), formValidateConstraints)
}

function sendEmail() {
  console.log('TODO: Send Email')
}