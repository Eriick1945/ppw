//Programa para calcular a potência de um número:

let base = parseFloat(prompt("Digite a base:"));
let expoente = parseInt(prompt("Digite o expoente:"));
let resultado = 1;
for (let i = 1; i <= expoente; i++) {
    resultado *= base;
}
console.log(`${base} elevado a ${expoente} é igual a ${resultado}`);

//Programa para contar números pares e ímpares:
let pares = 0;
let impares = 0;
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt(`Digite o ${i+1}º número:`));
    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }
}
console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);

//Programa para gerar a série de Fibonacci até o valor 500:

let termo1 = 0;
let termo2 = 1;
let proximoTermo = termo1 + termo2;
console.log(termo1);
console.log(termo2);
while (proximoTermo <= 500) {
    console.log(proximoTermo);
    termo1 = termo2;
    termo2 = proximoTermo;
    proximoTermo = termo1 + termo2;
}
