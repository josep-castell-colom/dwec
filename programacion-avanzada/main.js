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
const notasArrayOutput = document.getElementById("notas-array");
const notasFinal = document.getElementById("notas-final");
let contadorNotas = 0;
let notasArray = [];

notasButton.addEventListener("click", () => {
  if (notasInput.value < 0 || notasInput.value > 10) {
    notasArrayOutput.innerText = "Introduce una nota del 0 al 10";
    return;
  }
  if (contadorNotas == 5) {
    return;
  }
  notasArray.push([parseInt(notasInput.value), switchNotas(parseInt(notasInput.value))]);
  notasArrayOutput.innerText = `${notasArray}`;
  if (contadorNotas == 4) {
    notasButton.disabled = true;
    notasFinal.innerText = `Nota final: ${notasMedia(notasArray)} - ${switchNotas(notasMedia(notasArray))}`;
  }
  contadorNotas++;
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

const signos = [
  {
    name: "Aquario",
    inicio: new Date(2022, 0, 21),
    fin: new Date(2022, 1, 19),
    planeta: "Urano",
    elemento: "Aire"
  },
  {
    name: "Piscis",
    inicio: new Date(2022, 1, 20),
    fin: new Date(2022, 2, 20),
    planeta: "Neptuno",
    elemento: "Agua"
  },
  {
    name: "Aries",
    inicio: new Date(2022, 2, 21),
    fin: new Date(2022, 3, 20),
    planeta: "Marte",
    elemento: "Fuego"
  },
  {
    name: "Tauro",
    inicio: new Date(2022, 3, 21),
    fin: new Date(2022, 4, 21),
    planeta: "Venus",
    elemento: "Tierra"
  },
  {
    name: "Géminis",
    inicio: new Date(2022, 4, 22),
    fin: new Date(2022, 5, 21),
    planeta: "Mercurio",
    elemento: "Aire"
  },
  {
    name: "Cáncer",
    inicio: new Date(2022, 5, 22),
    fin: new Date(2022, 6, 23),
    planeta: "Luna",
    elemento: "Agua"
  },
  {
    name: "Leo",
    inicio: new Date(2022, 6, 24),
    fin: new Date(2022, 7, 23),
    planeta: "Sol",
    elemento: "Fuego"
  },
  {
    name: "Virgo",
    inicio: new Date(2022, 7, 24),
    fin: new Date(2022, 8, 23),
    planeta: "Mercurio",
    elemento: "Tierra"
  },
  {
    name: "Libra",
    inicio: new Date(2022, 8, 24),
    fin: new Date(2022, 9, 23),
    planeta: "Venus",
    elemento: "Aire"
  },
  {
    name: "Escorpio",
    inicio: new Date(2022, 9, 24),
    fin: new Date(2022, 10, 22),
    planeta: "Marte y Plutón",
    elemento: "Agua"
  },
  {
    name: "Sagitario",
    inicio: new Date(2022, 10, 23),
    fin: new Date(2022, 11, 22),
    planeta: "Júpiter",
    elemento: "Fuego"
  },{
    name: "Capricornio",
    inicio: new Date(2022, 11, 23),
    fin: new Date(2022, 0, 20),
    planeta: "Saturno",
    elemento: "Tierra"
  },
];

zodiacButton.addEventListener("click", () => {
  let fecha = new Date(zodiacInput.value);

  signos.map(({name, inicio, fin, planeta, elemento}) => {
    if ((fecha.getMonth() == inicio.getMonth() && fecha.getDate() >= inicio.getDate()) || 
          (fecha.getMonth() == fin.getMonth() && fecha.getDate() <= fin.getDate())){
      zodiacOutput.innerText = `Tu signo zodiacal es: ${name}. El astro que lo regenta es ${planeta} y su elemento es ${elemento}.`
    }
  })
})

// Actividad C4
const tablaInputMultiplicador = document.getElementById("tabla-multiplicador");
const tablaInputMultiplicando = document.getElementById("tabla-multiplicando");
const tablaButton = document.getElementById("tabla-button");
const tablaOutput = document.getElementById("tabla-output");

tablaButton.addEventListener("click", () => {
  let multiplicando = tablaInputMultiplicando.value;
  let multiplicador = tablaInputMultiplicador.value;
  let output = "<table>";

  for (let i = 0; i < multiplicando; i++) {
    output += "<tr>";

    for (let j = 0; j < multiplicador; j++) {
      output += `<td>${(i + 1) * (j + 1)}</td>`;
    }
    output += "</tr>";
  }
  output += "</table>";
  tablaOutput.innerHTML = output;
});

// Actividad C5
const viajeInput = document.getElementById("viaje-input");
const viajeButton = document.getElementById("viaje-button");
const viajeReset = document.getElementById("viaje-reset");
const viajeOutput = document.getElementById("viaje-output");

let tramos = [];
let i = 0;

viajeButton.addEventListener("click", () => {
  if (parseInt(viajeInput.value) === 0){
    viajeButton.disabled = true;
    viajeOutput.innerHTML += `Tiempo total del viaje: ${calcularTotal(tramos)}`;
    return;
  }
  if (viajeInput.value != "") {
    tramos.push(parseInt(viajeInput.value));
    viajeOutput.innerHTML += `<p>Tramo ${i + 1}: ${tramos[i]} minutos</p>`;
    i++;
  }
});

viajeReset.addEventListener("click", () => {
  tramos = [];
  viajeOutput.innerHTML = "";
  viajeButton.disabled = false;
});

function calcularTotal(array) {
  let total = 0;
  array.forEach(e => {
    total += e;
  })
  if (total < 60) {
    return `${total} minutos`;
  }
  let horas = Math.floor(total / 60);
  let minutos = total - horas * 60;
  return `${horas} hora(s), ${minutos} minuto(s)`;
}

// Actividad C6
// a)
const adivinaInput = document.getElementById("adivina-input");
const adivinaButton = document.getElementById("adivina-button");
const adivinaReinicia = document.getElementById("adivina-reinicia");
const adivinaOutput = document.getElementById("adivina-output");

let numeroSecreto;
let adivinaContador = 0;

function crearNumero() {
  return Math.floor(Math.random() * 100)
}

function responder(num) {
  if (num == numeroSecreto) return "=";
  return num < numeroSecreto ? "+" : "-";
}

adivinaButton.addEventListener("click", () => {
  if(!numeroSecreto) numeroSecreto = crearNumero();
  let respuesta = responder(adivinaInput.value);

  adivinaContador ++;
  if (respuesta == "=") {
    adivinaOutput.innerText = `¡Lo has adivinado! Has necesitado ${adivinaContador} intentos.`;
    adivinaButton.disabled = true;
    return;
  } 
  if (respuesta == "+") {
    adivinaOutput.innerText = "Demasiado bajo.";
  } else if (respuesta == "-") {
    adivinaOutput.innerText = "Demasiado alto.";
  } else {
    adivinaOutput.innerText = "Error, vuelve a intentarlo";
  }
})

adivinaReinicia.addEventListener("click", () => {
  numeroSecreto = null;
  adivinaInput.value = undefined;
  adivinaOutput.innerText = "";
})

// b)
const piensaButton = document.getElementById("piensa-button");
const piensaOutput = document.getElementById("piensa-output");
const piensaMayor = document.getElementById("piensa-button-mayor");
const piensaMenor = document.getElementById("piensa-button-menor");
const piensaCorrecto = document.getElementById("piensa-button-correcto");
const piensaReinicia = document.getElementById("piensa-reinicia");

let min = 0;
let max = 100;
let contadorIntentos;

piensaButton.addEventListener("click", () => {
  contadorIntentos = 0;
  piensaOutput.innerText = `Es ${Math.floor((max + min) / 2)}?`;
  piensaMayor.disabled = false;
  piensaMenor.disabled = false;
  piensaCorrecto.disabled = false;
  piensaButton.disabled = true;
})

piensaMayor.addEventListener("click", () => {
  min = (max + min) / 2;
  piensaOutput.innerText = `Es ${Math.floor((max + min) / 2)}?`;
  contadorIntentos ++;
})

piensaMenor.addEventListener("click", () => {
  max = (max + min) / 2;
  piensaOutput.innerText = `Es ${Math.floor((max + min) / 2)}?`;
  contadorIntentos ++;
})

piensaCorrecto.addEventListener("click", () => {
  piensaMayor.disabled = true;
  piensaMenor.disabled = true;
  piensaCorrecto.disabled = true;
  piensaOutput.innerText = `¡Soy una máquina! Lo he adivinado en ${contadorIntentos} intentos.`;
})

piensaReinicia.addEventListener("click", () => {
  min = 0;
  max = 100;
  piensaOutput.innerText = "";
  piensaButton.disabled = false;
  piensaMayor.disabled = true;
  piensaMenor.disabled = true;
  piensaCorrecto.disabled = true;
})

// Actividad C7
const select = document.getElementById("producto");
const seleccionarProducto = document.getElementById("seleccionar-producto");
const reiniciarProducto = document.getElementById("producto-reinicia");
const productoSeleccionadoOutput = document.getElementById("producto-seleccionado");
const diez = document.getElementById("10");
const cincuenta = document.getElementById("50");
const cien = document.getElementById("100");
const totalOutput = document.getElementById("total-introducido");
const cambioOutput = document.getElementById("cambio");

let productoSeleccionado = [];
let monedas = [];

seleccionarProducto.addEventListener("click", () => {
  productoSeleccionado["nombre"] = select.value;
  productoSeleccionado["precio"] = document.getElementById("producto" + productoSeleccionado.nombre).dataset.precio;
  seleccionarProducto.disabled = true;
  select.disabled = true;
  productoSeleccionadoOutput. innerText = `Ha seleccionado ${productoSeleccionado.nombre}. Por favor, introduzca ${productoSeleccionado.precio}€.`;
  if(comprobarTotal(productoSeleccionado.precio, sumaTotal(monedas))){
    devolverCambio();
  }
})

reiniciarProducto.addEventListener("click", () => {
  productoSeleccionado = [];
  productoSeleccionadoOutput.innerText = "";
  monedas = [];
  totalOutput.innerText = "";
  cambioOutput.innerText = "";
  seleccionarProducto.disabled = false;
  select.disabled = false;
  habilitarMasMonedas();
})

diez.addEventListener("click", () => {
  monedas.push(10);
  totalOutput.innerText = `${sumaTotal(monedas)}€`;
  if(comprobarTotal(productoSeleccionado.precio, sumaTotal(monedas))){
    devolverCambio();
  }
})

cincuenta.addEventListener("click", () => {
  monedas.push(50);
  totalOutput.innerText = `${sumaTotal(monedas)}€`;
  if(comprobarTotal(productoSeleccionado.precio, sumaTotal(monedas))){
    devolverCambio();
  }
})

cien.addEventListener("click", () => {
  monedas.push(100);
  totalOutput.innerText = `${sumaTotal(monedas)}€`;
  if(comprobarTotal(productoSeleccionado.precio, sumaTotal(monedas))){
    devolverCambio();
  }
})

function sumaTotal(array) {
  let total = 0;
  array.forEach(element => {
    total += element;
  });
  return parseFloat(total / 100).toFixed(2);
}

function comprobarTotal(necesario, introducido) {
  if (parseFloat(introducido) >= parseFloat(necesario)) {
    return true;
  }
}

function deshabilitarMasMonedas(){
  diez.disabled = true;
  cincuenta.disabled = true;
  cien.disabled = true;
}

function habilitarMasMonedas(){
  diez.disabled = false;
  cincuenta.disabled = false;
  cien.disabled = false;
}

function dividirCambio(cambio){
  let cambioCent = cambio * 100;
  let monedasCambio = [];
  
  if(cambioCent >= 100){
    let contador = 0;
    for(let i = 0; i < Math.floor(cambioCent / 100); i++) {
      monedasCambio.push('<span class="coin unEuro">1€</span>');
      contador++;
    }
    cambioCent = parseFloat(cambioCent - (contador * 100)).toFixed(2);
  }

  if(cambioCent >= 50){
    let contador = 0;
    for(let i = 0; i < Math.floor(cambioCent / 50); i++) {
      monedasCambio.push('<span class="coin cincuentaCent">50cent</span>');
      contador++;
    }
    cambioCent = parseFloat(cambioCent - (contador * 50)).toFixed(2);
  }

  if(cambioCent >= 10){
    let contador = 0;
    for(let i = 0; i < Math.floor(cambioCent / 10); i++) {
      monedasCambio.push('<span class="coin diezCent">10cent</span>');
      contador++;
    }
    cambioCent = parseFloat(cambioCent - (contador * 10)).toFixed(2);
  }

  return monedasCambio;
}

function devolverCambio() {
  deshabilitarMasMonedas();
  let cambio = parseFloat(sumaTotal(monedas) - productoSeleccionado.precio).toFixed(2);
  totalOutput.innerText += ` - Su cambio: ${cambio}€.`
  setTimeout(() => {
    dividirCambio(cambio).forEach((e, i) => {
      setTimeout(() => {
        cambioOutput.innerHTML += `${e}`;
      },500 * (i + 1));
    });
  },1000);
}

// Actividad C8
const nInput = document.getElementById("n");
const numProductos = document.getElementById("n-productos");
const nButton = document.getElementById("n-button");
const nReinicia = document.getElementById("reinicia-n");
const precioProducto = document.getElementById("precio-producto");
const precioButton = document.getElementById("precio-producto-button");
const precioProductoContainer = document.getElementById("precio-producto-container");
const label = document.getElementById("precio-producto-label");
const nOutput = document.getElementById("n-output");

let n;
let nProductos;
let listaPrecios = [];

nButton.addEventListener("click", () => {
  if (nInput.value && numProductos.value) {
    n = nInput.value;
    nProductos = numProductos.value;
    precioProductoContainer.style.display = "block";
    nButton.disabled = true;
  }
});

precioButton.addEventListener("click", () => {
  if(precioProducto.value){
    listaPrecios.push(parseFloat(precioProducto.value));
  }
  if(listaPrecios.length == nProductos){
    precioButton.disabled = true;
    nOutput.innerHTML = "";
    let listaDescuentos = devolverTotal(listaPrecios, n);
    nOutput.innerHTML += "<hr>";
    nOutput.innerHTML += `<p>Total: ${parseFloat(sumaTotal(listaPrecios) * 100).toFixed(2)}€</p>`;
    nOutput.innerHTML += `<p>Total descuento: ${parseFloat(sumaTotal(listaDescuentos) * 100).toFixed(2)}€</p>`;
    nOutput.innerHTML += `<p>A pagar: ${parseFloat((sumaTotal(listaPrecios) - sumaTotal(listaDescuentos)) * 100).toFixed(2)}€`;
    return;
  }
  if(listaPrecios.length < nProductos){
    label.innerText = `Precio producto ${listaPrecios.length + 1}: `;
    nOutput.innerHTML += `<p>Precio producto ${listaPrecios.length}: ${listaPrecios[listaPrecios.length - 1]}</p>`;
  }
});

function devolverTotal(listaPrecios, n){
  let listaDescuentos = listaPrecios.map((e, i) => {
    if(i < n){
      nOutput.innerHTML += `<p>Precio producto ${i + 1}: ${e}€ -- Descuento: ${parseFloat(e * 0.2).toFixed(2)}€ (20%)</p>`;
      return e * 0.2;
    }
    if(i < n * 2){
      nOutput.innerHTML += `<p>Precio producto ${i + 1}: ${e}€ -- Descuento: ${parseFloat(e * 0.1).toFixed(2)}€ (10%)</p>`;
      return e * 0.1;
    }
    if(i < n * 3){
      nOutput.innerHTML += `<p>Precio producto ${i + 1}: ${e}€ -- Descuento: ${parseFloat(e * 0.05).toFixed(2)}€ (5%)</p>`;
      return e * 0.05;
    }
    nOutput.innerHTML += `<p>Precio producto ${i + 1}: ${e}€</p>`;
    return e;
  });
  return listaDescuentos;
}

nReinicia.addEventListener("click", () => {
  n = undefined;
  nProductos = undefined;
  listaPrecios = [];
  nInput.value = undefined;
  numProductos.value = undefined;
  nButton.disabled = false;
  nOutput.innerHTML = "";
  precioButton.disabled = false;
})
