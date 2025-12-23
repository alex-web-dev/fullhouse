import { closeDropdown } from "./dropdown";

function syncMobileBtnText($navBtns) {
  const activeBtn = $navBtns.querySelector(".tabs-btns__btn--active");
  const mobileText = $navBtns.querySelector(".nav-btn__text");

  if (!activeBtn || !mobileText) return;

  mobileText.textContent = activeBtn.dataset.tabTitle || activeBtn.textContent;
}

const $navBtnsBoxes = document.querySelectorAll(".nav-btns");
$navBtnsBoxes.forEach(($navBtns) => syncMobileBtnText($navBtns));

document.addEventListener("click", (e) => {
  const $tabBtn = e.target.closest(".tabs-btns__btn");
  if (!$tabBtn) return;

  const $navBtns = $tabBtn.closest(".nav-btns");
  if (!$navBtns) return;

  $navBtns.querySelectorAll(".tabs-btns__btn").forEach((btn) => {
    btn.classList.remove("tabs-btns__btn--active");
  });
  $tabBtn.classList.add("tabs-btns__btn--active");

  syncMobileBtnText($navBtns);

  const dropdown = $navBtns.closest(".dropdown");
  if (dropdown && window.innerWidth <= 767) {
    closeDropdown(dropdown);
  }
});
