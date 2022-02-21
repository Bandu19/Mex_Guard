import "./styles.css";

window.onscroll = () => {
  //Datos que va almacenando en el scroll(nav)
  /*El scroll se refiere al numero de pixeles
  que recorremos hacia abajo*/
  scroll = document.documentElement.scrollTop;
  //Header de nuestra pagina web
  header = document.getElementById("header");

  if (scroll > 20) {
    header.classList.add("nav_mod");
  } else if (scroll < 20) {
    header.classList.remove("nav_mod");
  }
};

document.getElementById("btn_menu").addEventListener("click", mostrar_menu);

const menu = document.getElementById("header");
const body = document.getElementById("container_all");
const nav = document.getElementById("nav"); //Obtienes el id

function mostrar_menu() {
  menu.classList.toggle("move_content");
  body.classList.toggle("move_content");
  nav.classList.toggle("move_nav");
}

window.addEventListener("risize", () => {
  if (window.innerWidth > 760) {
    menu.classList.remove("move_content");
    body.classList.remove("move_content");
    nav.classList.remove("move_nav");
  }
});
