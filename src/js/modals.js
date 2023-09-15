const modals = () => {
  const openCallbackBtns = document.querySelectorAll('.interface__callback')
  const openFeedbackBtns = document.querySelectorAll('.interface__feedback')

  const modalCallback = document.querySelector('.modal--callback')
  const modalFeedback = document.querySelector('.modal--feedback')

  const closeModalBtns = document.querySelectorAll('.modal__close')

  const overlay = document.querySelector('.overlay')
  const page = document.querySelector('.page')
  const menu = document.querySelector('.menu')

  let openedModal = null

  const openCallback = () => {
    overlay.classList.add('overlay--open')
    modalCallback.classList.add('modal--open')
    menu.classList.remove('menu--open')
    page.classList.add('page--lock')
    openedModal = modalCallback

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(openedModal)
      }
    })
  }

  const openFeedback = () => {
    overlay.classList.add('overlay--open')
    modalFeedback.classList.add('modal--open')
    menu.classList.remove('menu--open')
    page.classList.add('page--lock')
    openedModal = modalFeedback

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(openedModal)
      }
    })
  }

  const closeModal = (modal) => {
    modal.classList.remove('modal--open')
    overlay.classList.remove('overlay--open')
    page.classList.remove('page--lock')
  }

  openCallbackBtns.forEach((btn) => {
    btn.addEventListener('click', openCallback)
  })

  openFeedbackBtns.forEach((btn) => {
    btn.addEventListener('click', openFeedback)
  })

  closeModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(openedModal)
    })
  })

  overlay.addEventListener('click', () => {
    closeModal(openedModal)
  })
}

export default modals
