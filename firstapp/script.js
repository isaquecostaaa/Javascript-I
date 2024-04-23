//constantes

const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000

//input

anoNascimento = parseInt(prompt("Informe o seu ano de nascimento"))
nome = prompt("Informe o seu nome")
salarioBase = parseFloat(prompt("Informe seu salário base"))
gratificacao = parseFloat(prompt("Informe o valor da sua gratificação"))
bonus = parseFloat(prompt("Informe o valor do seu bônus"))
desconto = parseFloat(prompt("Informe o valor do seu desconto"))
salarioLiquido = 0
adicional = 0

//Processamento

hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
if (idade <= 20 ) {
adicional = SALARIO_ATE_20 
} else {
adicional = SALARIO_ACIMA_20 }
salarioLiquido = salarioBase + gratificacao + bonus - desconto + adicional


//output
mensagem = ("Eu sou " + nome + ", tenho " + idade + " anos e recebo R$" + salarioLiquido)
alert(mensagem)