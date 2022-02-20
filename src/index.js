// import "./styles.css";

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
