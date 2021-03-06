/*
/*
Cálculo de aposentadoria
Crie um programa para calcular a aposentadoria de uma pessoa.

Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)

Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;
Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para 
se aposentar e no fim imprima uma mensagem em tela.

O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no 
mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
Dica: Você pode unir duas condições, veja o exemplo abaixo

if (condicao1) {
  if (condicao2) {
    // Condição 1 e 2 passaram
  } else {
    // Condição 1 passou, porém condição 2 não passou
  }
} else {
  // Condição 1 não passou
}
*/

const Mulher = {
  sexo: "F" ,
  nome: "Maria",
  idade: 55,
  contribuicao: 30 
}
const Homem = {
  sexo: "M", 
  nome: 'José', 
  idade: "55",
  contribuicao: 34
}
const homem = Homem.idade + Homem.contribuicao
const mulher =  homem


// tempo de contribuição mínimo para os homens - 35 anos, para as mulheres - 30.
// Regra 85-95 -> idade + tempo de contribuição
// Para homens, mínimo de 95 anos.
// Para mulheres, mínimo de 85 anos.

if (Homem.sexo == 'M'){
  if (homem.contribuicao >= 35 &&  homem >= 95){
    console.log(`${Homem.nome}, você cumpriu todos os requisitos para se aposentar.`)
  }
  else {
    console.log (`${Homem.nome}, infelizmente você não cumpre os requisitos mínimos para se aposentar.`)
  }
}

if (Mulher.sexo == 'F'){
  if (mulher.contribuicao >= 30 &&  mulher >= 85){
    console.log(`${ Mulher.nome}, você cumpriu todos os requisitos para se aposentar.`)
  }
  else {
    console.log (`${Mulher.nome}, infelizmente você não cumpre os requisitos mínimos para se aposentar.`)
  }
}