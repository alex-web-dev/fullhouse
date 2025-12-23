const $dropdowns = document.querySelectorAll(".dropdown");
$dropdowns.forEach(($dropdown) => {
  const $btn = $dropdown.querySelector(".dropdown__btn");
  $btn.addEventListener("click", (e) => dropdownBtnHandler($btn, $dropdown, e));
});

window.addEventListener("click", (e) => {
  const $activeDropdown = document.querySelector(".dropdown--active");
  const isInner = e.target.closest(".dropdown") && !e.target.classList.contains("dropdown");

  if (!$activeDropdown || isInner) {
    return;
  }

  closeDropdown($activeDropdown);
});

function dropdownBtnHandler($btn, $dropdown, e) {
  e.stopPropagation();

  const isActive = $dropdown.classList.contains("dropdown--active");

  document.querySelectorAll(".dropdown--active").forEach(($activeDropdown) => closeDropdown($activeDropdown));

  if (!isActive && (!$btn.dataset.dropdownMinWidth || window.innerWidth > $btn.dataset.dropdownMinWidth)) {
    openDropdown($dropdown);
  }
}

export function openDropdown($dropdown, backdrop = false) {
  if (!$dropdown) return;

  const $btn = $dropdown.querySelector(".dropdown__btn");
  $dropdown.classList.add("dropdown--active");
  $btn.classList.add("dropdown__btn--active");

  const event = new Event("dropdown:show");
  $dropdown.dispatchEvent(event);

  const isBackdrop = $dropdown.dataset.dropdownBackdrop !== undefined;
  if (isBackdrop) {
    const $bodyBackdrop = document.querySelector(".body__backdrop");
    $bodyBackdrop?.classList.add("body__backdrop--active");
  }
}

export function closeDropdown($dropdown, backdrop = false) {
  if (!$dropdown) return;

  const $btn = $dropdown.querySelector(".dropdown__btn");
  $dropdown.classList.remove("dropdown--active");
  $btn.classList.remove("dropdown__btn--active");

  const event = new Event("dropdown:hide");
  $dropdown.dispatchEvent(event);

  const isBackdrop = $dropdown.dataset.dropdownBackdrop !== undefined;
  if (isBackdrop) {
    const $bodyBackdrop = document.querySelector(".body__backdrop");
    $bodyBackdrop?.classList.remove("body__backdrop--active");
  }
}

export default {
  openDropdown,
  closeDropdown,
};
