import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $objectSliders = document.querySelectorAll(".object-slider");
$objectSliders.forEach(($objectSlider) => {
  const $sliderMain = $objectSlider.querySelector(".object-slider__main");
  const $prev = $objectSlider.querySelector(".object-slider__prev");
  const $next = $objectSlider.querySelector(".object-slider__next");
  const $pagination = $objectSlider.querySelector(".object-slider__pagination");

  new Swiper($sliderMain, {
    modules: [Navigation, Pagination],
    speed: 500,
    slidesPerView: 1,
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
  });
});
