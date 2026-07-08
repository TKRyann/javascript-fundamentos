/* 
Conte quantos números existem de 1 até 100.

No final mostre:

Existem 100 números.
*/

let contador = 1;
let quantidade = 0;

while (contador <= 100) {
  console.log(contador);

  quantidade++;
  contador++;
}

console.log(`Existem ${quantidade} números.`);
