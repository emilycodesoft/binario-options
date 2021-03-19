// VARIABLES
const bin = document.getElementById('bin');
let results = document.querySelectorAll(`span[class="result"]`);
let btnExecute = document.getElementById('execute');

// FUNCIONES
function getSelectedCheckboxValues() {
  let checkboxes = document.querySelectorAll(`input[name="opcion"]:checked`); //FIX ---> variable afuera de la funcion no funcion, mirar scope.
  let values = [];
  checkboxes.forEach((checkbox) => {
    values.push(checkbox.value);
  });
  return values;
}

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

function random(max, min) {
  let binRandom = '';
  for (let i = 0; i <= 8; i++) {
    binRandom += Math.floor(Math.random() * (max - min)) + min;
  }
  return binRandom;
}
function cleanTotalSpan() {
  let totalSpan = document.querySelectorAll('span[class="result"]');
  totalSpan.forEach((span) => (span.innerHTML = ''));
}
//ESCUCHADORES DE EVENTOS
btnExecute.addEventListener('click', (event) => {
  if (/[2-9]/.test(bin.value)) {
    cleanProgram();
    showAlert();
    cleanTotalSpan();
  }
  let checkboxsSelected = getSelectedCheckboxValues();
  options.forEach((option, index) => {
    if (checkboxsSelected.includes(option.name) || option.default === true) {
      let value = option.fn(bin.value);
      let span = document.getElementById(option.name);
      span.style.opacity = 1;
      span.innerHTML = value;
    }
  });
  cleanProgram();
});

function showAlert() {
  let alert = document.getElementById('alert-box');
  alert.style.display = 'inherit';
  setTimeout(() => {
    alert.style.display = 'none';
  }, 4000);
}
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
      return bin[bin.length - 1] == 1 ? ' Sí' : ' No';
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
      let nUnos = bin.split('').filter((dig) => dig == 1);
      return nUnos.length;
    },
  },
  {
    name: 'espaciosBinarios',
    fn: (bin) => {
      let nUnos = bin.split('').join('----');
      return nUnos;
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
];
