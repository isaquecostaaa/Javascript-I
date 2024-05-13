let divHistorico = document.getElementById("div-historico");
divHistorico.style.display = "none";
function calcularIdade(O_ANO_NASCIMENTO) {
    const HOJE = new Date()
    const ANO_ATUAL = HOJE.getFullYear()
    const IDADE = ANO_ATUAL - O_ANO_NASCIMENTO

    return IDADE
}

function calcularAdicional(A_IDADE) {
    const SALARIO_ATE_20 = 1000
    const SALARIO_ACIMA_20 = 2000
    const IDADE_LIMITE = 20
    let adicional = SALARIO_ACIMA_20
    if (A_IDADE <= IDADE_LIMITE) {
        adicional = SALARIO_ATE_20
    }

    return adicional
}

function calcularSalarioLiquido(A_IDADE,O_SALARIO_BASE,A_GRATIFICACAO,O_BONUS,O_DESCONTO) {
    let adicional = calcularAdicional(A_IDADE)
    
    let oSalarioLiquido = O_SALARIO_BASE + A_GRATIFICACAO + O_BONUS - O_DESCONTO + adicional

    return oSalarioLiquido
}

function impressao(){

    
    //input

    const ANO_NASCIMENTO = parseInt(document.getElementById("anoNascimento").value)
    const NOME = document.getElementById("nome").value
    const SALARIO_BASE = parseFloat(document.getElementById("salarioBase").value)
    const GRATIFICACAO = parseFloat(document.getElementById("gratificacao").value)
    const BONUS = parseFloat(document.getElementById("bonus").value)
    const DESCONTO = parseFloat(document.getElementById("desconto").value)

    //Processamento

    const IDADE = calcularIdade(ANO_NASCIMENTO)

   // let adicional = calcularAdicional(IDADE)

    let salarioLiquido = calcularSalarioLiquido(IDADE,SALARIO_BASE,GRATIFICACAO,BONUS,DESCONTO)

    //output
    let mensagem = ("Eu sou " + NOME + ", tenho " + IDADE + " anos e recebo R$" + salarioLiquido)

criarItemHistorico(mensagem)

    divHistorico.style.display = "block";
}
 function criarItemHistorico(aMensagem) {
    let historico = document.getElementById("ul-historico")
    let listItem = document.createElement("li")
    listItem.textContent = aMensagem
    historico.appendChild(listItem)
 }