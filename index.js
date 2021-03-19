// VARIABLES
const bin = document.getElementById('bin');
let results = document.querySelectorAll(`span[class="result"]`);
let btnExecute = document.getElementById('execute');

// FUNCIONES
function getSelectedCheckboxValues() {
  let checkboxes = document.querySelectorAll(`input[name="opcion"]:checked`);
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
function cleanTotalSpan() {
  totalSpan.forEach((span) => (span.innerHTML = ''));
}
//ESCUCHADORES DE EVENTOS
btnExecute.addEventListener('click', (event) => {
  let totalSpan = document.querySelectorAll('span[class="result"]');

  if (/[2-9]/.test(bin.value)) {
    cleanProgram();
    showAlert();
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
  }, 5000);
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
];
