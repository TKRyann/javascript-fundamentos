/* 
Peça um número.

Mostre a tabuada dele.

Exemplo:

5 x 1 = 5
5 x 2 = 10
...
5 x 10 = 50

*/

let contador = 1;

while (contador <= 10) {
  let resultado = 5 * contador;
  console.log(`5 * ${contador} = ${resultado}`);

  contador++;
}
