// const mensaje = `<javascript>\n\nHola Mundo!\nQué facil es incluir 'comillas simples'\ny "comillas dobles"`;
// alert(mensaje);

// // Crea un elemento 'p'
// const p = document.createElement("p");
// // Añade texto al elemento creado anteriormente
// p.innerText = "Soy el primer script";
// // Añade el elemento como hijo del elemento que señalemos (en este caso 'body')
// document.querySelector("body").appendChild(p);

// Actividad 3

// const meses = [
//   "enero",
//   "febrero",
//   "marzo",
//   "abril",
//   "mayo",
//   "junio",
//   "julio",
//   "agosto",
//   "septiembre",
//   "octubre",
//   "noviembre",
//   "diciembre",
// ];

// for (let mes of meses) {
//   alert(mes);
// }

// Actividad 4

var valores = [true, 5, false, "hola", "adios", 2];
let strings = [];

for (let valor of valores) {
  if (typeof valor == "string") {
    strings.push(valor);
  }
}
