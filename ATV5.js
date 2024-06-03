// 1. Função de boas-vindas
function exibirBoasVindas() {
    alert("Bem-vindo à nossa página!");
}

// 2. Função para verificar se um número é par ou ímpar
function verificarParidade(numero) {
    return numero % 2 === 0;
}

// 3. Função para calcular a média aritmética de um array de números
function calcularMedia(numeros) {
    let soma = 0;
    for (let numero of numeros) {
        soma += numero;
    }
    return soma / numeros.length;
}

// 4. Função para converter uma string para caixa alta
function converterParaCaixaAlta(texto) {
    return texto.toUpperCase();
}

// 5. Função para verificar se um número é primo
function verificarPrimalidade(numero) {
    if (numero <= 1) return false;
    if (numero <= 3) return true;
    if (numero % 2 === 0 || numero % 3 === 0) return false;
    let divisor = 5;
    while (divisor * divisor <= numero) {
        if (numero % divisor === 0 || numero % (divisor + 2) === 0) return false;
        divisor += 6;
    }
    return true;
}

// 6. Função para inverter a ordem dos elementos em um array
function inverterArray(array) {
    return array.reverse();
}

// 7. Função para calcular o valor acrescido de uma porcentagem
function calcularPorcentagem(valor, porcentagem) {
    return valor * (1 + porcentagem / 100);
}

// 8. Função para verificar se uma palavra é um palíndromo
function verificarPalindromo(palavra) {
    const palavraReversa = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === palavraReversa.toLowerCase();
}

// 9. Função para converter um número para sua representação binária
function converterParaBinario(numero) {
    return numero.toString(2);
}

// 10. Função para calcular o fatorial de um número
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) return 1;
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

// Chamada das funções para demonstração
exibirBoasVindas();
console.log(verificarParidade(5)); // false
console.log(calcularMedia([10, 20, 30])); // 20
console.log(converterParaCaixaAlta("Olá Mundo")); // "OLÁ MUNDO"
console.log(verificarPrimalidade(17)); // true
console.log(inverterArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(calcularPorcentagem(100, 10)); // 110
console.log(verificarPalindromo("Ovo")); // true
console.log(converterParaBinario(10)); // "1010"
console.log(calcularFatorial(5)); // 120
