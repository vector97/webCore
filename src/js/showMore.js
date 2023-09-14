const showMore = () => {
  const buttons = document.querySelectorAll('.show-more--type--block')
  const list = document.querySelectorAll('.show-more__block')

  buttons.forEach((button, i) => {
    const label = button.querySelector('.show-more__label')

    button.addEventListener('click', () => {
      const height = list[i].scrollHeight

      list[i].classList.toggle('show-more__block--open')
      button.classList.toggle('show-more--open')

      if (button.classList.contains('show-more--open')) {
        list[i].style.maxHeight = `${height}px`
        label.textContent = 'Скрыть'
      } else {
        list[i].style.maxHeight = ''
        label.textContent = 'Показать все'
      }
    })
  })
}

export default showMore
