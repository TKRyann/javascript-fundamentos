//Exercício 6 — Array de objetos
let filme = [
  {
    titulo: "Alma",
    ano: 2010,
    genero: "ficção",
    nota: 7.5,
  },
  {
    titulo: "Fundo do poço",
    ano: 2000,
    genero: "Suspense",
    nota: 8.5,
  },
  {
    titulo: "Vida longa",
    ano: 2017,
    genero: "Romance",
    nota: 6,
  },
];

filme.push({
  titulo: "Intruso",
  ano: 2026,
  genero: "Ação",
  nota: 9,
});

filme[2].nota = 10;
console.log(filme[0].titulo);
console.log(filme[1].nota);
console.log(filme[2].nota);
console.log(filme[3]);
