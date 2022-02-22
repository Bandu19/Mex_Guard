// import "./styles.css";

window.onscroll = () => {
  scroll = document.documentElement.scrollTop;
  header = document.querySelector(".content_ani");
  h1 = document.querySelector(".color_letter");

  if (scroll > 30) {
    header.classList.add("nav_mod");
  } else if (scroll < 30) {
    header.classList.remove("nav_mod");
  }

  if (scroll > 500) {
    h1.classList.add("nav_h1");
    header.classList.add("nav_mod_int");
  } else if (scroll < 500) {
    h1.classList.remove("nav_h1");
    header.classList.remove("nav_mod_int");
  }
};
