/// M. Modal


/// M.1. elements
const modal = {
  id: '#modal',
  element: null,
  show: (modal) => {
    modal.element.show()
  },
  hide: (modal) => {
    modal.element.hide()
  }
}

const btnAbout = {
  id: '#btn-about',
  element: null
}

const btnResume = {
  id: '#btn-resume',
  element: null
}

const btnX = {
  id: '#btn-x',
  element: null
}

const btnClose = {
  id: '#btn-close',
  element: null
}

const headingAbout = {
  id: '#heading-about',
  element: null
}

const headingResume = {
  id: '#heading-resume',
  element: null
}

const contentAbout = {
  id: '#content-about',
  element: null
}

const contentResume = {
  id: '#content-resume',
  element: null
}


/// M.2. document.ready
$(document).ready(function() {
  modal.element = $(modal.id)
  btnAbout.element = $(btnAbout.id)
  btnResume.element = $(btnResume.id)
  btnX.element = $(btnX.id)
  btnClose.element = $(btnClose.id)
  headingAbout.element = $(headingAbout.id)
  contentAbout.element = $(contentAbout.id)
  headingResume.element = $(headingResume.id)
  contentResume.element = $(contentResume.id)

  hide(modal.element)

  btnAbout.element.click(function() {
    show(modal.element)
    
    show(headingAbout.element)
    show(contentAbout.element)

    hide(headingResume.element)
    hide(contentResume.element)
  })
  btnResume.element.click(function() {
    show(modal.element)

    show(headingResume.element)
    show(contentResume.element)

    hide(headingAbout.element)
    hide(contentAbout.element)
  })
  btnX.element.click(function() {
    hide(modal.element)
  })
  btnClose.element.click(function() {
    hide(modal.element)
  })
})


/// M.3. Triggers
function show(jqElement) {
  jqElement.show()
}

function hide(jqElement) {
  jqElement.hide()
}