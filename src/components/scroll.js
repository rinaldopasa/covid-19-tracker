const headerArea = document.querySelector(".header-area");

const onScroll = () => {
  const scroll = document.documentElement.scrollTop;

  if (scroll > 100) {
    headerArea.classList.add("animated", "fadeInDown", "menu-fixed");
  } else {
    headerArea.classList.remove("animated", "fadeInDown", "menu-fixed");
  }
};

window.addEventListener("scroll", onScroll);
