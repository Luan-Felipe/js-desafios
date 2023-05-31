function gets(media) {
  if (media < 5) {
    print("Reprovado");
  } else if (media >= 5 && media < 7) {
    print("Recuperação");
  } else {
    print("Aprovado");
  }
}

function print(texto) {
  console.log(texto);
}

module.exports = { gets, print };
