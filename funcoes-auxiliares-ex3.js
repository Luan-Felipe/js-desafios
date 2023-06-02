const salarioBruto = 2501;
const beneficios = 250;
const aliquotas = [0.05, 0.1, 0.15];

function gets() {
  let salarioLiquido = 0;
  if (salarioBruto >= 0 && salarioBruto <= 1100) {
    salarioLiquido = salarioBruto - (salarioBruto * aliquotas[0]) + beneficios;
  } else if (salarioBruto >= 1000.01 && salarioBruto <= 2500) {
    salarioLiquido = salarioBruto - (salarioBruto * aliquotas[1]) + beneficios;
  } else {
    salarioLiquido = salarioBruto - (salarioBruto * aliquotas[2]) + beneficios;
  }

  return salarioLiquido.toFixed(2);
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
