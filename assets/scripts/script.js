let body = $("body");
let main = $("main");
// let navBar = $(".nav");
// let list = $("li");
let txt = $(".txt");
let h1 = $("h1");
let paragrafo = $("p");
function mudarTema() {
  body.toggleClass("body-dark");
  main.toggleClass("main-dark");
  //   navBar.toggleClass("nav-dark");
  //   list.toggleClass("li-dark");
}

function maiusculo() {
  txt.toggleClass("maiuscula");
}

function minusculo() {
  txt.toggleClass("minuscula");
}

function PrimeiraMaiuscula() {
  txt.toggleClass("capitalizar");
}

function resetar() {
  txt.removeClass();
}

function sumirH1() {
  h1.toggleClass("sumir");
}

function sumirP() {
  paragrafo.toggleClass("sumir");
}
