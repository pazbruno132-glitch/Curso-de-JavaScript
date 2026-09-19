let numero = 1;
let pares = 0;
let impares = 0;

do {
  if (numero % 2 === 0) {
    pares++;
  } else {
    impares++;
  }

  numero++;
} while (numero <= 10);

console.log(pares);
console.log(impares);
