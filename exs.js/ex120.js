let numero = 1
let somaPares = 0
let somaImpares = 0

do{
    if(numero % 2 === 0){
        somaPares += numero
    } else {
        somaImpares += numero
    }

    numero++
} while(numero <= 10)

console.log(`Soma dos pares: ${somaPares}`)
console.log(`Soma dos Ímpares: ${somaImpares}`)