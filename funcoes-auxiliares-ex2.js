const entradas = [5, 3, 4, 1, 10, 8];
let i = 0;
let menorImpar = null;
let maiorPar = null;

function gets() {
  while (i < entradas.length - 1) {
    let valor = entradas[i + 1];
    if (valor % 2 === 0) {
      if (maiorPar === null || maiorPar < valor) {
        maiorPar = valor;
      }
    } else {
      if (menorImpar === null || valor < menorImpar) {
        menorImpar = valor;
      }
    }
    i++;
  }
  return `Maior numero par: ${maiorPar}\nMenor numero impar: ${menorImpar}`;
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
