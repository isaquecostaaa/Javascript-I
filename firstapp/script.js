//constantes

const SALARIO_ATE_20 = 1000
const SALARIO_ACIMA_20 = 2000
const IDADE_LIMITE = 20

//input

const ANO_NASCIMENTO = parseInt(prompt("Informe o seu ano de nascimento"))
const NOME = prompt("Informe o seu nome")
const SALARIO_BASE = parseFloat(prompt("Informe seu salário base"))
const GRATIFICACAO = parseFloat(prompt("Informe o valor da sua gratificação"))
const BONUS = parseFloat(prompt("Informe o valor do seu bônus"))
const DESCONTO = parseFloat(prompt("Informe o valor do seu desconto"))


//Processamento

const HOJE = new Date()
const ANO_ATUAL = HOJE.getFullYear()
const IDADE = ANO_ATUAL - ANO_NASCIMENTO

let adicional = SALARIO_ACIMA_20
if (IDADE <= IDADE_LIMITE) {
adicional = SALARIO_ATE_20 }

let salarioLiquido = SALARIO_BASE + GRATIFICACAO + BONUS - DESCONTO + adicional


//output
let mensagem = ("Eu sou " + NOME + ", tenho " + IDADE + " anos e recebo R$" + salarioLiquido)
alert(mensagem)