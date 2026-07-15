// Exercício 3 — Alterar propriedades
let livro = {
  titulo: "A busca do incontrolável",
  autor: "Jobson Hits",
  qtdPaginas: 100,
  lido: false,
};

livro.lido = true;
livro.qtdPaginas = livro.qtdPaginas + 10;

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.qtdPaginas);
console.log(livro.lido);
