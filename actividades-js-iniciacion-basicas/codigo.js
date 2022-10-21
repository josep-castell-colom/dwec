const sections = document.querySelectorAll("section");

const mensaje = `<javascript>\n\nHola Mundo!\nQué facil es incluir 'comillas simples'\ny "comillas dobles"`;
function alertaMensaje() {
  alert(mensaje);
}

// Crea un elemento 'p'
const p = document.createElement("p");
// Añade texto al elemento creado anteriormente
p.innerText = "Soy el primer script";
// Añade el elemento como hijo del elemento que señalemos (en este caso 'body')
document.querySelector("#a1").appendChild(p);

// Actividad 3

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

function mostrarMeses() {
  for (let mes of meses) {
    alert(mes);
  }
}

// Actividad 4

const valores = [true, 5, false, "hola", "adios", 2];
let strings = [];
let booleans = [];
let numbers = [];

function splitArrayByType(array) {
  for (element of array) {
    switch (typeof element) {
      case "string":
        strings.push(element);
        break;
      case "boolean":
        booleans.push(element);
        break;
      case "number":
        numbers.push(element);
        break;
      default:
        break;
    }
  }
}

splitArrayByType(valores);

function longestString() {
  let longest = "";

  strings.forEach(str => {
    if (str.length > longest.length) {
      longest = str;
    }
  });
  alert(`Mayor string: '${longest}'`);
  return longest;
}

function booleanValuesOr() {
  alert(booleans[0] || booleans[1]);
}

function booleanValuesAnd() {
  alert(booleans[0] && booleans[1]);
}

function numberOperations() {
  let a = numbers[0];
  let b = numbers[1];

  alert(`${a} + ${b} = ${a + b}`);
  alert(`${a} - ${b} = ${a - b}`);
  alert(`${a} * ${b} = ${a * b}`);
  alert(`${a} / ${b} = ${a / b}`);
  alert(`${a} ** ${b} = ${a ** b}`);
}

// Actividad 5

function compareNumbers() {
  let numero1 = 5;
  let numero2 = 8;

  if (numero1 < numero2) {
    alert("numero1 no es mayor que numero2");
  }
  if (numero2 > 0) {
    alert("numero2 es positivo");
  }
  if (numero1 < 0 || numero1 != 0) {
    alert("numero1 es negativo o distinto de cero");
  }
  if (++numero1 < numero2) {
    alert(
      "Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2"
    );
  }
}

// Actividad 6 - DNI

function getLetraDni() {
  let numero = prompt("Introduce un número de DNI:");
  let letra = prompt("Introduce la letra: ");
  const letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
  ];
  if (numero < 0 || numero > 99999999) {
    alert("Número de DNI erróneo");
    return false;
  }
  if (letras[numero % 23] == letra) {
    alert(`El DNI ${numero}${letra} es correcto.`);
    return true;
  }
  alert("DNI erróneo");
  return false;
}

// Actividad 7

function calcularFactorial() {
  let numero = prompt("Introduce un número para calcular su factorial: ");
  let factorial = numero;
  for (let i = 1; i < numero; i++) {
    factorial *= numero - i;
  }
  alert(`El factorial de ${numero} es ${factorial}`);
  return factorial;
}

// Actividad B1

function calcularPesoLunar(pesoTerrestre) {
  return pesoTerrestre * 0.17;
}

function pesoLunar() {
  alert(calcularPesoLunar(prompt("Introduce tu peso: ")));
}

// Actividad B2 - TODO: Mostrar mensajes clasificación

function calcularIMC(peso, estatura) {
  return peso / estatura ** 2;
}

function imc() {
  alert(
    calcularIMC(
      prompt("Introuce tu peso(kg): "),
      prompt("Introduce tu estatura(m): ")
    )
  );
}

// Actividad B3

function convertirPiePulgada(pies) {
  return pies * 12;
}

function piePulgada() {
  alert(convertirPiePulgada(prompt("Pies")));
}

// Actividad B4

function convertirPulgadaCmM(pulgadas) {
  return pulgadas * 2.54 + " cm - " + pulgadas * 0.254 + " m";
}

function pulgadaCmM() {
  alert(convertirPulgadaCmM(prompt("Introduce pulgadas:")));
}

// Actividad B5

function calcularMedia(notas) {
  let total = 0;
  for (let nota of notas) {
    total += nota;
  }
  return total / notas.length;
}

function media() {
  alert(calcularMedia([7, 5.5, 8, 5]));
}

// Actividad B6

function calcularSalario(precioHora, precioHoraExtra, numHoras, numHorasExtra) {
  return precioHora * numHoras + precioHoraExtra * numHorasExtra;
}

function salario() {
  alert(
    calcularSalario(
      prompt("Introduce €/hora:"),
      prompt("Introduce €/horas extra: "),
      prompt("Introduce numero de horas: "),
      prompt("Introduce numero de horas extra: ")
    )
  );
}

// Actividad B7
function numeroAleatorio(maxNum){
  return Math.floor(Math.random() * maxNum);
}
function alertAleatorio(maxNum){
  alert(numeroAleatorio(maxNum));
}

// Actividad B8
function calcularMayor(numberArray) {
  return Math.max(numberArray);
}

function mayor() {
  alert(calcularMayor(prompt("Numero: "), prompt("Numero: ")));
}

function calcularMenor(a, b, c) {
  let numberArray = [a, b, c];
  return Math.min(numberArray);
}

function menor() {
  alert(
    calcularMenor(prompt("Numero: "), prompt("Numero: "), prompt("Numero: "))
  );
}

function ordenar(a, b, c){
  let numberArray = [parseInt(a), parseInt(b), parseInt(c)];
  let min = a;
  let mid = b;
  let max = c;
  numberArray.forEach(e => {
    if(e < min){
      min = e;
    }
  })  
  numberArray.forEach(e => {
    if(e > max){
      max = e;
    }
  })
  numberArray.forEach(e => {
    if((e >= min && e < max) || (e > min && e <= max)){
      mid = e;
    }
  })
  return `${min}, ${mid}, ${max}`;
}

function alertOrdenar(){
  alert(ordenar(prompt('Numero1:'), prompt('Numero2:'), prompt('Numero3:')));
}
