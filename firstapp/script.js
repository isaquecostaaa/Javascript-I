//input
anoNascimento = 2003
nome = "Isaque"

//Processamento
hoje = new Date()
anoAtual = hoje.getFullYear()
idade = anoAtual - anoNascimento
mensagem = ("Eu sou " + nome + " e tenho " + idade + " anos ")

alert(mensagem)