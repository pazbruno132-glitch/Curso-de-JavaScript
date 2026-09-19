let numero = 1;
let maior = 0;
let menor = 0;

do {
  if (numero > 5) {
    maior++
  } else {
    menor++
  }

  numero++;
} while (numero <= 10);

console.log(`Maiores que 5: ${maior}`);
console.log(`Menores ou iguais a 5: ${menor}`);
