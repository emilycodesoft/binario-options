// VARIABLES
// datos que necesito para conectarme al DOM y procesar los datos del usuario
const bin = document.getElementById('bin');
let results = document.querySelectorAll(`span[class="result"]`);
let btnExecute = document.getElementById('execute');

//ESCUCHADORES DE EVENTOS
btnExecute.addEventListener('click', () => {
  //primera validacion  --> si el numero es binario
  valBinario();
  let checkboxsSelected = getSelectedCheckboxValues();
  options.forEach((option, index) => {
    if (checkboxsSelected.includes(option.name) || option.default === true) {
      showInSpan(option);
    }
  });
  cleanProgram();
});

function valBinario() {
  if (/[2-9]/.test(bin.value)) {
    // regular expression
    cleanProgram();
    showAlert();
    cleanTotalSpan();
  }
}
//------------------------------------FUNCIONES DE LIMPIEZA DEL DOOM---------------------------
function cleanProgram() {
  bin.value = '';
  cleanSelectedCheckbox();
}

function cleanSelectedCheckbox() {
  let checkboxes = document.querySelectorAll(`input[name="opcion"]:checked`);
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
}
function cleanTotalSpan() {
  let totalSpan = document.querySelectorAll('span[class="result"]');
  totalSpan.forEach((span) => (span.innerHTML = ''));
}

function showAlert() {
  let alert = document.getElementById('alert-box');
  alert.style.display = 'inherit';
  setTimeout(() => {
    alert.style.display = 'none';
  }, 4000);
}
//------------------------------------------------------------------------------------------------------
// FUNCIONES
function getSelectedCheckboxValues() {
  let checkboxes = document.querySelectorAll(`input[name="opcion"]:checked`); //FIX ---> variable afuera de la funcion no funcion, mirar scope.
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}
function showInSpan(option) {
  let value = option.fn(bin.value);
  let span = document.getElementById(option.name);
  span.style.opacity = 1;
  span.innerHTML = value;
}

// VARIABLES GLOBALES
let pesos = [];

// puede ser una clase
let options = [
  {
    name: 'showBin',
    fn: (bin) => {
      return bin;
    },
    default: true,
  },
  {
    name: 'numPar',
    fn: (bin) => {
      return bin.endsWith('1') ? ' Sí' : ' No';
    },
  },
  {
    name: 'numDigitos',
    fn: (bin) => {
      return bin.length;
    },
  },
  {
    name: 'numUnos',
    fn: (bin) => {
      let nUnos = bin.split('').filter((dig) => dig == 1); // regular expression: match
      return nUnos.length;
    },
  },
  {
    name: 'espaciosBinarios',
    fn: (bin) => {
      let spaces = bin.split('').join('----');
      return spaces;
    },
  },
  {
    name: 'primerDigito',
    fn: (bin) => {
      return bin.indexOf('1'); //contando desde cero
    },
  },
  {
    name: 'ultimoDigito',
    fn: (bin) => {
      return bin.lastIndexOf('1');
    },
  },
  {
    name: 'binRandom',
    fn: (bin) => {
      return random(2, 0);
    },
  },
  {
    name: 'binRandomUnos',
    fn: (bin) => {
      return random(1, 1);
    },
  },
  {
    name: 'binRandomCeros',
    fn: (bin) => {
      return random(0, 0);
    },
  },
  {
    name: 'numPesos',
    fn: (bin) => {
      let binArr = bin.split('');
      for (let i = 1; i <= bin.length; i++) {
        pesos.push([Math.pow(2, bin.length - i), binArr[i - 1]]);
      }
      let pesosHTML = [];
      pesos.forEach((peso) => {
        pesosHTML.push(`<div>${peso[0]} <br> ${peso[1]}</div>`);
      });
      return pesosHTML.join(' ');
    },

    default: true,
  },
  {
    name: 'numBase2',
    fn: (bin) => {
      let numeroBase2 = 0;
      pesos.forEach((peso) => (peso[1] == 1 ? (numeroBase2 += peso[0]) : null));
      return numeroBase2;
    },
  },
];

function random(max, min) {
  let binRandom = '';
  for (let i = 1; i <= 8; i++) {
    binRandom += Math.floor(Math.random() * (max - min)) + min;
  }
  return binRandom;
}

// funcion que diga cuantos digitos hay en el input en tiempo real
