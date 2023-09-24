import '../../node_modules/swiper/swiper.scss'
import '../../node_modules/swiper/modules/pagination.scss'
import '../scss/style.scss'
import menu from './menu.js'
import modals from './modals.js'
import readMore from './readMore.js'
import showMore from './showMore.js'
import { Pagination } from 'swiper/modules'
import resizableSwiper from './slider.js'

menu()
modals()
readMore()
showMore()
resizableSwiper('(max-width: 767px)', '.brands__swiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
resizableSwiper('(max-width: 767px)', '.technic__swiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
resizableSwiper('(max-width: 767px)', '.price__swiper', {
  modules: [Pagination],
  loop: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
