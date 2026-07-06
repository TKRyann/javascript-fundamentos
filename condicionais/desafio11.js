/*
Pergunte:

valor da compra

Se a compra for maior ou igual a R$100:

Aplique 10% de desconto.

Senão:

Mostre que não há desconto.
*/

let valorCompra = 100.0; // Exemplo de valor

if (valorCompra >= 100) {
  let desconto = valorCompra * 0.1; // Calcula 10%
  valorCompra = valorCompra - desconto; // Aplica o desconto
  console.log("Desconto aplicado! Novo valor: R$", valorCompra.toFixed(2));
} else {
  console.log("Sem desconto. Valor: R$", valorCompra.toFixed(2)); //  Garante que o valor final exiba sempre duas casas decimais (centavos).
}
