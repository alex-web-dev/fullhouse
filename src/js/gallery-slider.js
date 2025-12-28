import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $sliderBoxes = document.querySelectorAll(".gallery-slider");

$sliderBoxes.forEach(($sliderBox) => {
  const $slider = $sliderBox.querySelector(".gallery-slider__main");
  if (!$slider) return;

  const $prev = $sliderBox.querySelector(".gallery-slider__prev");
  const $next = $sliderBox.querySelector(".gallery-slider__next");
  const $pagination = $sliderBox.querySelector(".gallery-slider__pagination");

  new Swiper($slider, {
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
        enabled: true,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
        enabled: true,
      },
      1201: {
        slidesPerView: 3,
        spaceBetween: 32,
        enabled: true,
      },
    },
  });
});
