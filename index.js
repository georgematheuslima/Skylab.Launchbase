
const AlunosdaTurmaA = [
    { nome: "George", nota: 9.8 },
    { nome: "Matheus", nota: 5 },
    { nome: "fulano", nota: 3 },
    { nome: "Delsivan", nota: 10 }

]

const AlunosdaTurmaB = [
    { nome: "Cleito", nota: 10 },
    { nome: "Aristides", nota: 7 },
    { nome: "ciclano", nota: 5 },
    { nome: "beltrano", nota: 6 }
]

function calculaMedia(alunos) {
    let soma = 0
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota

    }

    const media = soma / alunos.length
    return media

}

function enviarmensagem(media, turma) {
    if (media >= 7) {
        return console.log(`Parabéns ${turma}, sua média foi: ${media}`)
    }
    else {
        return console.log(`Média abaixo do esperado. A média da turma ${turma} foi: ${media}`)
    }
}

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 7) {
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno) {
    if (aluno.reprovado) {
        console.log(`O aluno ${aluno.nome} está reprovado`)
    }
}

function alunosReprovado(alunos) {
    for (let aluno of alunos) {
        marcarComoReprovado(aluno)
        enviarMensagemReprovado(aluno)
    }
}

const media1 = calculaMedia(AlunosdaTurmaA)
const media2 = calculaMedia(AlunosdaTurmaB)

enviarmensagem(media1, 'turmaA')
enviarmensagem(media2, 'TurmaB')

marcarComoReprovado(AlunosdaTurmaA)

alunosReprovado(AlunosdaTurmaA)
alunosReprovado(AlunosdaTurmaB)