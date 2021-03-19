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
function show(i, value) {
  results[i - 1].style.opacity = 1;
  results[i - 1].innerHTML = value;
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
//ESCUCHADORES DE EVENTOS
btnExecute.addEventListener('click', (event) => {
  let checkboxsSelected = getSelectedCheckboxValues();
  options.forEach((option, index) => {
    if (checkboxsSelected.includes(option.name)) {
      let result = option.fn(bin.value);
      show(index, result);
    }
  });

  cleanProgram();
});

let options = [
  {
    name: 'valBinario',
    fn: (bin) => {
      console.log(/[2-9]/.test(bin) ? '> No' : '> Sí');
    },
  },
  {
    name: 'showBin',
    fn: (bin) => {
      return bin;
    },
  },
  {
    name: 'numPar',
    fn: (bin) => {
      return bin[bin.length - 1] == 1 ? '> Sí' : '> No';
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
