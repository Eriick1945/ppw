function verificarSaldo(saldo) {
    if (saldo > 0) {
        console.log("Saldo positivo");
    } else {
        console.log("Saldo negativo");
    }
}

function realizarSaque(saldoAtual, valorSaque) {
    if (valorSaque <= saldoAtual) {
        saldoAtual -= valorSaque;
        console.log(`Saque realizado com sucesso. Saldo atual: R$${saldoAtual}`);
    } else {
        console.log("Saldo insuficiente");
    }
}

function realizarDeposito(saldoAtual, valorDeposito) {
    saldoAtual += valorDeposito;
    console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual}`);
}

function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
    if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
        saldoOrigem -= valorTransferencia;
        saldoDestino += valorTransferencia;
        console.log("Transferência realizada com sucesso");
    } else if (valorTransferencia > saldoOrigem) {
        console.log("Saldo insuficiente para transferência");
    } else {
        console.log("Valor excede o limite de transferência");
    }
}

function checarChequeEspecial(saldo) {
    if (saldo < 0) {
        console.log("Dentro do limite do cheque especial");
    } else {
        console.log("Fora do limite do cheque especial");
    }
}

function atualizarCadastro(cadastroAtivo, saldo) {
    if (cadastroAtivo) {
        if (saldo > 0) {
            console.log("Cadastro ativo e saldo positivo");
        } else {
            console.log("Cadastro ativo mas precisa regularizar saldo");
        }
    } else {
        console.log("Por favor, atualize seu cadastro");
    }
}

function avaliarCredito(saldo, historicoCredito, rendaMensal) {
    if (saldo > 1000 && historicoCredito && rendaMensal > 3000) {
        console.log("Crédito aprovado");
    } else {
        console.log("Crédito negado");
    }
}

// Função para exibir o menu
function exibirMenu() {
    console.log("------ Menu ------");
    console.log("1. Verificar saldo");
    console.log("2. Realizar saque");
    console.log("3. Realizar depósito");
    console.log("4. Realizar transferência");
    console.log("5. Checar cheque especial");
    console.log("6. Atualizar cadastro");
    console.log("7. Avaliar crédito");
    console.log("0. Sair");
}

// Função principal que gerencia o menu
function main() {
    let opcao;

    do {
        exibirMenu();
        opcao = parseInt(prompt("Escolha uma opção:"));

        switch (opcao) {
            case 1:
                verificarSaldo(parseFloat(prompt("Informe o saldo:")));
                break;
            case 2:
                realizarSaque(parseFloat(prompt("Informe o saldo atual:")), parseFloat(prompt("Informe o valor do saque:")));
                break;
            case 3:
                realizarDeposito(parseFloat(prompt("Informe o saldo atual:")), parseFloat(prompt("Informe o valor do depósito:")));
                break;
            case 4:
                realizarTransferencia(parseFloat(prompt("Informe o saldo da origem:")), parseFloat(prompt("Informe o saldo do destino:")), parseFloat(prompt("Informe o valor da transferência:")), parseFloat(prompt("Informe o limite de transferência:")));
                break;
            case 5:
                checarChequeEspecial(parseFloat(prompt("Informe o saldo:")));
                break;
            case 6:
                atualizarCadastro(confirm("O cadastro está ativo?"), parseFloat(prompt("Informe o saldo:")));
                break;
            case 7:
                avaliarCredito(parseFloat(prompt("Informe o saldo:")), confirm("Possui histórico de crédito bom?"), parseFloat(prompt("Informe a renda mensal:")));
                break;
            case 0:
                console.log("Saindo...");
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    } while (opcao !== 0);
}

// Chamando a função principal para iniciar o sistema
main();
