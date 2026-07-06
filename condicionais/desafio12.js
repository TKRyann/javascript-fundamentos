/*
Peça um ano.

Pesquise como descobrir se um ano é bissexto e implemente a lógica.

*/

let ano = 2024;

if (ano % 4 === 0) {
  console.log("Ano Bissexto");
} else {
  console.log("Ano não Bissexto");
}

// Com ajuda dar IA para corrigir pequenas erros de logicas quando o ano termina em '00' (anos centernarios)

let ano = 2024;

// Um ano é bissexto se for divisível por 4 E NÃO for divisível por 100,
// A MENOS QUE também seja divisível por 400.
if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log("Ano Bissexto");
} else {
  console.log("Ano não Bissexto");
}
