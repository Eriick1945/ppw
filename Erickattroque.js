const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}


function categorizarIMC(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Peso normal";
    } else if (imc >= 25.0 && imc <= 29.9) {
        return "Excesso de peso";
    } else if (imc >= 30.0 && imc <= 34.9) {
        return "Obesidade grau I";
    } else if (imc >= 35.0 && imc <= 39.9) {
        return "Obesidade grau II";
    } else {
        return "Obesidade grau III";
    }
}


rl.question("Digite seu peso (em kg): ", function (peso) {
    rl.question("Digite sua altura (em metros): ", function (altura) {
        
        var imc = calcularIMC(parseFloat(peso), parseFloat(altura));

    
        var categoria = categorizarIMC(imc);

        console.log("Seu IMC é: " + imc.toFixed(2));
        console.log("Categoria do IMC: " + categoria);

        rl.close();

        const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite sua data de nascimento (AAAA-MM-DD): ", function (dataNascimento) {
    const idade = new Date().getFullYear() - new Date(dataNascimento).getFullYear();
    console.log(idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.");
    rl.close();
});

    
    });
    const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function genNum() {
    return Math.floor(Math.random() * 100) + 1;
}

function jogoAdv() {
    const numeroSecreto = genNum();
    let tentativas = 0;

    console.log("Bem-vindo ao Jogo de Adivinhação! Tente adivinhar o número secreto entre 1 e 100.");

    function chute() {
        rl.question("Digite seu palpite: ", function (entrada) {
            const palpite = parseInt(entrada);

            if (isNaN(palpite) || palpite < 1 || palpite > 100) {
                console.log("Por favor, digite um número válido entre 1 e 100.");
                chute();
            } else {
                tentativas++;

                if (palpite === numeroSecreto) {
                    console.log(`Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativa(s).`);
                    rl.close();
                } else if (palpite < numeroSecreto) {
                    console.log("Tente novamente. O número secreto é maior.");
                    chute();
                } else {
                    console.log("Tente novamente. O número secreto é menor.");
                    chute();
                }
            }
        });
    }

    chute();


    const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o valor que deseja sacar: ", function (valorSaque) {
    const valor = parseInt(valorSaque);

    if (valor % 10 === 0) {
        console.log("Saque realizado com sucesso.");
    } else {
        console.log("Valor inválido. Digite um valor múltiplo de 10.");
    }

    rl.close();
});

}

jogoAdv();

});




