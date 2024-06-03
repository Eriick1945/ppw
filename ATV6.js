let nota;
do {
    nota = parseFloat(prompt("Digite uma nota entre zero e dez:"));
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        console.log("Valor inválido. Digite novamente.");
    }
} while (nota < 0 || nota > 10 || isNaN(nota));
console.log("Nota válida:", nota);

let nomeUsuario, senha;
do {
    nomeUsuario = prompt("Digite o nome de usuário:");
    senha = prompt("Digite a senha:");
    if (senha === nomeUsuario) {
        console.log("Erro: senha igual ao nome de usuário. Tente novamente.");
    }
} while (senha === nomeUsuario);
console.log("Nome de usuário:", nomeUsuario, "Senha:", senha);

let nome, idade, salario, sexo, estadoCivil;
do {
    nome = prompt("Digite o nome (maior que 3 caracteres):");
    idade = parseInt(prompt("Digite a idade (entre 0 e 150):"));
    salario = parseFloat(prompt("Digite o salário (maior que zero):"));
    sexo = prompt("Digite o sexo (f ou m):");
    estadoCivil = prompt("Digite o estado civil (s, c, v, d):");
    if (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd')) {
        console.log("Informações inválidas. Tente novamente.");
    }
} while (nome.length <= 3 || idade < 0 || idade > 150 || salario <= 0 || (sexo !== 'f' && sexo !== 'm') || (estadoCivil !== 's' && estadoCivil !== 'c' && estadoCivil !== 'v' && estadoCivil !== 'd'));
console.log("Informações válidas:", nome, idade, salario, sexo, estadoCivil);
