import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

const $projectSliders = document.querySelectorAll(".project-slider");
$projectSliders.forEach(($projectSlider) => {
  const $sliderMain = $projectSlider.querySelector(".project-slider__main");
  const $prev = $projectSlider.querySelector(".project-slider__prev");
  const $next = $projectSlider.querySelector(".project-slider__next");
  const $pagination = $projectSlider.querySelector(".project-slider__pagination");

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
