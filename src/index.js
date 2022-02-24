// import "./styles.css";

window.onscroll = () => {
  scroll = document.documentElement.scrollTop;
  const header = document.querySelector(".content_ani");
  const h1 = document.querySelector(".color_letter");
  const marco = document.querySelector(".items--cta");
  const marco2 = document.querySelector(".items--cta2");
  const marco3 = document.querySelector(".items--cta4");

  if (scroll > 30) {
    header.classList.add("nav_mod");
  } else if (scroll < 30) {
    header.classList.remove("nav_mod");
  }

  if (scroll > 500) {
    h1.classList.add("nav_h1");
    header.classList.add("nav_mod_int");
    marco.classList.add("items--cta1");
    marco2.classList.add("items--cta3");
    marco3.classList.add("items--cta5");
  } else if (scroll < 500) {
    h1.classList.remove("nav_h1");
    header.classList.remove("nav_mod_int");
    marco.classList.remove("items--cta1");
    marco2.classList.remove("items--cta3");
    marco3.classList.remove("items--cta5");
  }
};
