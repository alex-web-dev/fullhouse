import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $sliderBoxes = document.querySelectorAll(".products-slider");

$sliderBoxes.forEach(($sliderBox) => {
  const $slider = $sliderBox.querySelector(".products-slider__main");
  if (!$slider) return;

  const isMobileOnly = $slider.classList.contains("products-slider__main--mobile");

  const $prev = $sliderBox.querySelector(".products-slider__prev");
  const $next = $sliderBox.querySelector(".products-slider__next");
  const $pagination = $sliderBox.querySelector(".products-slider__pagination");

  const breakpoints = {
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
  };

  if (isMobileOnly) {
    breakpoints[1201] = {
      slidesPerView: "auto",
      spaceBetween: 0,
      enabled: false,
    };
  }

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
    breakpoints,
  });
});
