import { closeDropdown } from "./dropdown";

const $filterMenuBoxes = document.querySelectorAll(".filter-menu");
$filterMenuBoxes.forEach(($filterMenu) => {
  const $btnText = $filterMenu.querySelector(".filter-menu__btn-text");
  const $inputs = $filterMenu.querySelectorAll(".filter-checkbox__input");
  const $dropdown = $filterMenu.closest(".dropdown");

  $inputs.forEach(($input) => {
    $input.addEventListener("change", () => {
      if (!$input.checked) return;

      const $labelText = $input.closest(".filter-checkbox").querySelector(".filter-checkbox__text-normal").innerText;
      $btnText.innerText = $labelText;

      closeDropdown($dropdown);
    });
  });
});
