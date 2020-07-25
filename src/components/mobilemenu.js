const mobileMenu = document.querySelectorAll(".mobile-menu");
const headerBar = document.querySelector(".header-bar");
let menuOpen = false;

headerBar.addEventListener("click", () => {
  let i;
  if (!menuOpen) {
    for (i = 0; i < mobileMenu.length; i++) {
      mobileMenu[i].classList.add("open");
    }
    // mobileMenu.classList.add("open");
    headerBar.classList.add("close");
    menuOpen = true;
  } else {
    for (i = 0; i < mobileMenu.length; i++) {
      mobileMenu[i].classList.remove("open");
    }
    headerBar.classList.remove("close");
    menuOpen = false;
  }
});
