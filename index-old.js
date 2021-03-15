//FUNCION ULTIMO DIGITO
let ud = (bin) => bin[bin.length - 1];

//VALIDACION SI BINARIO ES PAR
let binarioEsPar = (ud) => (ud == 0 ? true : false);

//VALIDACION QUE TODOS LOS NUMEROS SEAN 1 O 0
function val(bin) {
  if (!bin.match('[2-9]')) {
    return true;
  }
  return false;
}

//INTERFAZ
function interfaz(bin) {
  if (val(bin) && val(bin)) {
    if (binarioEsPar(ud(bin))) {
      return `El numero ${bin} es par`;
    }
    return `El numero ${bin} no es par`;
  }
  return `El numero ${bin} no es un binario`;
}

console.log(interfaz('120200'));
