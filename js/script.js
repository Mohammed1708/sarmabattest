const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const positionWindow = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", positionWindow);
  sideBar.classList.remove("menu-active");
});

const menuBar = document.querySelector(".menu");
const sideBar = document.querySelector(".navigation");

menuBar.addEventListener("click", () => {
  sideBar.classList.toggle("menu-active");
});

const iconClose = document.querySelector(".ri-close-line");

iconClose.addEventListener("click", () => {
  sideBar.classList.remove("menu-active");
});

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};
