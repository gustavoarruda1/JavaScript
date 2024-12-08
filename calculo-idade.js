//Calculando idade

var anoNascimento = prompt("Informe o ano de seu nascimento:");

while (anoNascimento >= 2024) {
    alert("Informe seu ano de nascimento corretamente");
    anoNascimento = prompt("Informe o ano de seu nascimento:");
}

var anoAtual = prompt("Digite o ano em que está respondendo:");

while (anoAtual < 2024) {
    alert("Informe o ano atual corretamente");
    anoAtual = prompt("Digite o ano em que está respondendo:");
}

var idadeFinal = anoAtual - anoNascimento;

alert("A idade final é " + idadeFinal);