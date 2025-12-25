import { closeDropdown } from "./dropdown";

const $filterMenuBoxes = document.querySelectorAll(".filter-menu");

$filterMenuBoxes.forEach(($filterMenu) => {
  const $btnText = $filterMenu.querySelector(".filter-menu__btn-text");
  const $dropdown = $filterMenu.closest(".dropdown");

  $filterMenu.addEventListener("change", (event) => {
    const $input = event.target;

    if (!$input.classList.contains("filter-checkbox__input") || !$input.checked) {
      return;
    }

    const $labelText = $input.closest(".filter-checkbox").querySelector(".filter-checkbox__text-normal").innerText;
    $btnText.innerText = $labelText;

    closeDropdown($dropdown);
  });
});
