// ANALISIS SEMANTICO

// VARIABLES
let bin = document.getElementById('bin');
let nPar = document.getElementById('nPar');
let firstResult = document.getElementById('first-result');
let messageBox = document.getElementById('message-box');
// FUNCIONES

function valPar() {
  bin[bin.length - 1] == 0 ? showMessage(1) : null;
  /* if (bin[bin.length - 1] == 0) {
    showMessage(1);
  } */
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
  /* if (/[2-9]/.test(bin)) {
  } else {
    valPar();
  } */
}
/* function show(par, base10, base2) {
  property.style.opacity = 1
  [nPar].value = value
}


function interfaz () {
  if(valBinario(bin)) {
    if(valPar()) {
      show(1,bin,)
    } else {
      show(0,1,1)
    }
  } else {
    showMesagge(1)
  }
}

function interfaz () {
  if(valBinario(bin)) {
    if(options.esPar) {
      show(nPar, '> Si')
    } if(options.base10) {
      show(nPar, '> Si')
    }
  }
} */
