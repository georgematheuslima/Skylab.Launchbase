// Criar um programa que calcula a média
// das notas dos alunos e envia
// mensagem do cálculo da média.

const aluno1 = 'George'
const nota1 = 9.8


const aluno2 = "Matheus"
const nota2 = 5

const aluno3 = 'fulano'
const nota3 = 3


const media = (nota1 + nota2 + nota3) / 3 

console.log(`a media foi ${media}`)

// Se a média foi maior que 7, parabenizar a turma.

if (media > 7){ 
    return console.log('Parabéns')
}
else{
    return console.log('Média abaixo do esperado.')
}