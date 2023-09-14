const menu = () => {
  const openMenuBtn = document.querySelector('.header__menu-icon')
  const closeMenuBtn = document.querySelector('.menu__close-btn')
  const page = document.querySelector('.page')
  const overlay = document.querySelector('.overlay')
  const menu = document.querySelector('.menu')
  let isOpen = false

  const openMenu = () => {
    overlay.classList.add('overlay--open')
    menu.classList.add('menu--open')
    page.classList.add('page--lock')
    isOpen = true

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMenu()
      }
    })
  }

  const closeMenu = () => {
    overlay.classList.remove('overlay--open')
    menu.classList.remove('menu--open')
    page.classList.remove('page--lock')
    isOpen = false
  }

  openMenuBtn.addEventListener('click', openMenu)
  overlay.addEventListener('click', closeMenu)
  closeMenuBtn.addEventListener('click', closeMenu)
}

export default menu
