/* 
Percorra:
let notas = [10,8,9,7,6];

Mostre a maior nota.

*/

let notas = [10, 8, 9, 7, 6];

let menor = notas[0];

for (let i = 0; i < notas.length; i++) {
  if (notas[i] < menor) {
    menor = notas[i];
  }
}

console.log(menor);
