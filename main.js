const multiplyTableTd = document.querySelectorAll("#multiply-table *[data-x]");

function show(element) {
  document.getElementById(element).classList.toggle("hidden");
  showMultiplication(element);
}

function showMultiplication(element) {
  if (element === "tabla-tablas-multiplicar") {
    show("show-multiplication");
  }
}

document.querySelector(".theme-switcher").addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
  document.querySelector("#theme-light").classList.toggle("theme-active");
  document.querySelector("#theme-dark").classList.toggle("theme-active");
});

document.querySelectorAll("#multiply-table td").forEach(e => {
  e.addEventListener("mouseover", () => {
    let x = parseInt(e.dataset.x);
    let y = parseInt(e.dataset.y);

    multiplyTableTd.forEach(td => {
      td.style.backgroundColor = "inherit";
    });

    multiplyTableTd.forEach(td => {
      if (parseInt(td.dataset.x) == x && parseInt(td.dataset.y) <= y) {
        td.style.backgroundColor = "rgba(255,0,0,0.3)";
      }
    });

    multiplyTableTd.forEach(td => {
      if (parseInt(td.dataset.y) == y && parseInt(td.dataset.x) <= x) {
        td.style.backgroundColor = "rgba(255,0,0,0.3)";
      }
    });

    multiplyTableTd.forEach(td => {
      if (parseInt(td.dataset.x) == x && parseInt(td.dataset.y) == y) {
        td.style.backgroundColor = "rgba(255,0,0,0.7)";
      }
    });

    document.getElementById("show-multiplication").innerText =
      `${x} * ${y} = ` + x * y;
  });
});

document.getElementById("multiply-table").addEventListener("mouseout", () => {
  multiplyTableTd.forEach(td => {
    td.style.backgroundColor = "inherit";
  });

  document.getElementById("show-multiplication").innerText =
    "Pasa el ratón sobre la tabla";
});
