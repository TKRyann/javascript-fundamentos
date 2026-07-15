// Exercício 5 — Objeto dentro de objeto
let aluno = {
  nome: "Ryann",
  idade: 23,
  curso: "ADS",
  endereco: {
    cidade: "São Luís",
    estado: "Maranhão",
    bairro: "Maiobão",
  },
};
aluno.endereco.bairro = "Anjo da Guarda";
console.log(aluno.endereco.cidade);
console.log(aluno.endereco);
