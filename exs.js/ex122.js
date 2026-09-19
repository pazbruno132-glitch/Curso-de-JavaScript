let numero = 1;
let soma = 0;
let quantidade = 0;

do {
  if (numero % 2 === 0) {
    soma += numero;
  } else {
    quantidade++;
  }

  numero++;
} while (numero <= 20);

console.log(`Soma dos pares: ${soma}`);
console.log(`Quantidade de ímpares: ${quantidade}`);
