/* 
Crie:

let numeros = [10,20,30,40,50];

Mostre apenas os números maiores que 25.

Saída:

30
40
50

*/

let numeros = [10, 20, 30, 40, 50];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] >= 25) {
    console.log(numeros[i]);
  }
}
