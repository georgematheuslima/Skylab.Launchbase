/* 
Vetores e objetos
Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias 
que trabalha.

Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

{ nome: 'C++', especialidade: 'Desktop' }
{ nome: 'Python', especialidade: 'Data Science' }
{ nome: 'JavaScript', especialidade: 'Web/Mobile' }
Por exemplo:

const objeto = {
  propriedade: [
    { nome: "C++", especialidade: "Desktop" },
    { nome: "JavaScript", especialidade: "Web/Mobile" }
  ]
};
Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:

O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
*/

const programador = {
        nome: 'José Bonifácio',
        idade: 33,
        // Criando um array para armazenar as tecnologias.
        tecnologia : [
          {nome: "python", especialidade: 'Machine Learning'},
          {nome: "Java Script", especialidade: "Mobile"}
        ]
}
console.log(`O usuário ${programador.nome}, tem ${programador.idade}, e usa a tecnologia ${programador.tecnologia[0].nome}
com especialidade em ${programador.tecnologia[0].especialidade}`)