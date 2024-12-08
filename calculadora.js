//Calculadora dinâmica

var num1 = prompt("Digite o primeiro número: ");

var operacao = prompt("Escolha a operação desejada (+,-,*,/) ");

while (operacao != '+' && operacao != "-" && operacao != '*' && operacao != '/') {
    alert("Informe uma operação válida");
    operacao = prompt("Escolha a operação desejada (+,-,*,/) ");
}

var num2 = prompt("Digite o segundo número: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

var resultadoFinal = 0;
if (operacao == '+') {
    resultadoFinal = num1 + num2;
} else if (operacao == '-') {
    resultadoFinal = num1 - num2;
} else if (operacao == "*") {
    resultadoFinal = num1 * num2;
} else if (operacao == "/") {
    resultadoFinal = num1 / num2;
} else {
    alert("Operação inválida");
}

alert("O resultado final é: " + resultadoFinal);