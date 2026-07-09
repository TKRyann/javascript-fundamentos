/*
Crie uma função chamada maiorNumero().

Receba dois números.

Retorne o maior deles.
*/

function maiorNumero(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
}
let maior = maiorNumero(20, 15);
console.log(maior);
