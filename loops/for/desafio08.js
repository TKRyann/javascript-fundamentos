/*
Desenhe um quadrado usando *.

Saída:

*****
*****
*****
*****
***** 
*/

let linha = "";

for (let i = 1; i <= 5; i++) {
  linha = "";

  for (let j = 1; j <= 5; j++) {
    linha += "*";
  }

  console.log(linha);
}
