import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";

let swiper;

function toggleFeaturedImages($featuredImages) {
  const isMobile = window.innerWidth < 768;
  const $pagination = $featuredImages.querySelector(".featured-images__pagination");
  const $slider = $featuredImages.querySelector(".featured-images__main");

  if (isMobile && !swiper) {
    swiper = new Swiper($slider, {
      modules: [Navigation, Pagination],
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        clickable: true,
        el: $pagination,
      },
    });
  }

  if (!isMobile && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

const $featuredImagesBoxes = document.querySelectorAll(".featured-images");
$featuredImagesBoxes.forEach(($featuredImages) => {
  toggleFeaturedImages($featuredImages);
  window.addEventListener("resize", () => toggleFeaturedImages($featuredImages));
});
