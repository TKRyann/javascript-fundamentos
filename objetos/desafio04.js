// Exercício 4 — Adicionar propriedades
let livro = {
  titulo: "A busca do incontrolável",
  autor: "Jobson Hits",
  qtdPaginas: 100,
  lido: false,
};

livro.genero = "ação";
livro.anoPublicacao = 2026;
livro.notaAvaliacao = 9.0;
livro.lido = true;
livro.qtdPaginas = livro.qtdPaginas + 10;

console.log(livro);
