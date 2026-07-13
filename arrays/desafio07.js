/* 
Crie:

let numeros = [10,20,30,40,50];

Some todos os números do Array.

Resultado esperado:

150

*/

let numeros = [10, 20, 30, 40, 50];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma = soma + numeros[i];
  console.log(`A soma dos números é  ${soma}.`);
}
