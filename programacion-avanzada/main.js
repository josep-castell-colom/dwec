// Actividad 8
const parImparInput = document.getElementById("par-o-impar-input");
const parImparButton = document.getElementById("par-o-impar-button");
const parImparOutput = document.getElementById("par-o-impar-output");

parImparButton.addEventListener("click", () => {
  parImparOutput.innerText = esPar(parseInt(parImparInput.value));
});

function esPar(num) {
  return num % 2 == 0 ? "Es par" : "Es impar";
}

// Actividad 9
const mayusMinusInput = document.getElementById("mayus-minus-input");
const mayusMinusButton = document.getElementById("mayus-minus-button");
const mayusMinusOutput = document.getElementById("mayus-minus-output");

mayusMinusButton.addEventListener("click", () => {
  mayusMinusOutput.innerText = mayusMinus(mayusMinusInput.value);
});

function mayusMinus(texto) {
  if (texto == texto.toUpperCase()) {
    return "Todo mayúsculas";
  }
  if (texto == texto.toLowerCase()) {
    return "Todo minúsculas";
  }
  return "Una mezcla de ambas";
}

// Actividad 10
const palInput = document.getElementById("palindromo-input");
const palButton = document.getElementById("palindromo-button");
const palOutput = document.getElementById("palindromo-output");

palButton.addEventListener("click", () => {
  palOutput.innerText = esPalindromo(palInput.value);
});

function esPalindromo(texto) {
  return dividirTexto(texto)[0] == invertirTexto(dividirTexto(texto)[1])
    ? "Es palíndromo"
    : "No es palíndromo";
}

function dividirTexto(texto) {
  let trim = texto.replace(/\s/g, "").toLowerCase();
  let textoDividido = [];
  textoDividido[0] = trim.substring(0, Math.floor(trim.length / 2));
  textoDividido[1] = trim.substring(Math.ceil(trim.length / 2), trim.length);
  return textoDividido;
}

function invertirTexto(texto) {
  return texto.split("").reverse().join("");
}

// Actividad C1
const mesButton = document.getElementById("mes-button");
const mesOutput = document.getElementById("mes-output");
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
let fecha = new Date();

mesButton.addEventListener("click", () => {
  mesOutput.innerText = meses[fecha.getMonth()];
});

// Actividad C2
const notasInput = document.getElementById("notas-input");
const notasButton = document.getElementById("notas-button");
const notasLetras = document.getElementById("notas-letras");
const notasArrayOutput = document.getElementById("notas-array");
const notasFinal = document.getElementById("notas-final");
let contador = 0;
let notasArray = [];

notasButton.addEventListener("click", () => {
  if (notasInput.value < 0 || notasInput.value > 10) {
    notasArrayOutput.innerText = "Introduce una nota del 0 al 10";
    return;
  }
  if (contador == 5) {
    return;
  }
  notasArray.push([parseInt(notasInput.value), switchNotas(parseInt(notasInput.value))]);
  notasArrayOutput.innerText = `${notasArray}`;
  if (contador == 4) {
    notasButton.disabled = true;
    notasFinal.innerText = `Nota final: ${notasMedia(notasArray)} - ${switchNotas(notasMedia(notasArray))}`;
  }
  contador++;
});

function notasMedia(arrayNotas) {
  let total = 0;
  arrayNotas.forEach(e => {
    total += e[0];
  });
  return total / arrayNotas.length;
}

function switchNotas(nota) {
  switch(true) {
    case nota < 5:
      return "Insuficiente";
    case nota <= 6:
      return "Suficiente";
    case nota <= 8:
      return "Notable";
    case nota <= 10:
      return "Excelente";
    default:
      return false;
  }
}

// Actividad C3
const zodiacInput = document.getElementById("zodiaco-input");
const zodiacButton = document.getElementById("zodiaco-button");
const zodiacOutput = document.getElementById("zodiaco-output");

const signos = new Map([
  [signo => "Acuario", inicio => Date(), fin => Date()]
])
