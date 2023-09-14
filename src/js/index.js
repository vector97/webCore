import '../scss/style.scss'
import menu from './menu.js'
import modal from './modal.js'
import readMore from './readMore.js'
import showMore from './showMore.js'
import resizableSwiper from './slider.js'

menu()
modal()
readMore()
showMore()
resizableSwiper('(max-width: 767px)', '.brands__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
resizableSwiper('(max-width: 767px)', '.technic__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
resizableSwiper('(max-width: 767px)', '.price__swiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
