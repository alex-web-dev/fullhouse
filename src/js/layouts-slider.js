import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $layoutsSliders = document.querySelectorAll(".layouts-slider");
$layoutsSliders.forEach(($layoutsSlider) => {
  const $sliderMain = $layoutsSlider.querySelector(".layouts-slider__main");
  const $prev = $layoutsSlider.querySelector(".layouts-slider__prev");
  const $next = $layoutsSlider.querySelector(".layouts-slider__next");
  const $pagination = $layoutsSlider.querySelector(".layouts-slider__pagination");

  new Swiper($sliderMain, {
    modules: [Navigation, Pagination],
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    enabled: true,
    watchSlidesProgress: true,
    navigation: {
      prevEl: $prev,
      nextEl: $next,
    },
    pagination: {
      clickable: true,
      el: $pagination,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1201: {
        slidesPerView: 2,
        spaceBetween: 32,
      },
    },
  });
});
