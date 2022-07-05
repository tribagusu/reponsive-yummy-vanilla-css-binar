// _show/hide nav menu
const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// close nav menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// _show/hide menu item
const menuList = document.querySelectorAll(".menu-list");
const yummyBtn = document.querySelector("our-menu__navbar a");

menuList.forEach((yummyBtn) => {
  yummyBtn.addEventListener("click", () => {
    menuList.classList.toggle("open");
  });
});
