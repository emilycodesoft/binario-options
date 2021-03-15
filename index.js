// ANALISIS SEMANTICO

// VARIABLES
let bin = document.getElementById('bin');
let nPar = document.getElementById('nPar');
let firstResult = document.getElementById('first-result');
let messageBox = document.getElementById('message-box');
// FUNCIONES

function valPar() {
  bin[bin.length - 1] == 0 ? showMessage(1) : null;
}

function showMessage(val) {
  if (val) {
    nPar.innerHTML = '> Sí';
    firstResult.style.opacity = 1;
  }
  if (val == 2) {
    m;
  }
}

function valBinario() {
  bin = bin.value;
  /[2-9]/.test(bin) ? showMessage(2) : valPar();
}
