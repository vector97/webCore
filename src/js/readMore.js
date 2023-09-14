const readMore = () => {
  const button = document.querySelector('.about__show-more')
  const label = button.querySelector('.show-more__label')
  const list = document.querySelector('.about__description')

  button.addEventListener('click', () => {
    list.classList.toggle('about__description--open')
    button.classList.toggle('show-more--open')

    if (button.classList.contains('show-more--open')) {
      label.textContent = 'Скрыть'
    } else {
      label.textContent = 'Читать далее'
    }
  })
}

export default readMore
