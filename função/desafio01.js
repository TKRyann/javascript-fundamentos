// function
//elevar um numero x a uma potência y

function calculaPotencia(num, pow) {
  let resultado = 1;
  for (let i = 0; i < pow; i++) {
    resultado = resultado * 2;
  }
  return resultado;
}

console.log(calculaPotencia(4, 3));
console.log(calculaPotencia(5, 6));
