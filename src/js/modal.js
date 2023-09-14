const modal = () => {
  const openModalBtn = document.querySelector('.interface__callback')
  const modal = document.querySelector('.callback')
  const overlay = document.querySelector('.overlay')

  openModalBtn.addEventListener('click', () => {
    overlay.classList.add('overlay--open')
    modal.classList.add('callback--open')
  })
}

export default modal
