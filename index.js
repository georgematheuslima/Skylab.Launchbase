// Criar um programa que calcula a média
// das notas dos alunos e envia
// mensagem do cálculo da média.

const AlunosdaTurmaA = [
    {nome:"George", nota: 9.8},
    {nome: "Matheus", nota: 5},
    {nome: "fulano", nota: 3}

]


const AlunosdaTurmaB = [
    {nome: "Cleito",nota: 10},
    {nome: "Aristides",nota: 7},
    {nome: "ciclano", nota: 5}

]


function calculamedia(Alunos) {
    return  (Alunos[0].nota + Alunos[1].nota + Alunos[2].nota) / 3
    
}
 
const media1 = calculamedia(AlunosdaTurmaA)
console.log(calculamedia(AlunosdaTurmaA))
const media2 = calculamedia(AlunosdaTurmaB)
console.log(calculamedia(AlunosdaTurmaB))
// Se a média foi maior que 7, parabenizar a turma.

function enviarmensagem(media, turma){
    if (media > 7){ 
        return console.log(`Parabéns ${turma}, sua média foi: ${media}`)
    }
    else{
        return console.log(`Média abaixo do esperado. A média da turma ${turma} foi: ${media}`)
    }
}

enviarmensagem(media1, 'turmaA')
enviarmensagem(media2, 'TurmaB')