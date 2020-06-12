/*
Construção e impressão de objetos
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260
Obs.: Para armazenar os dados de endereço da empresa você pode criar objetos intercalados, por exemplo:

const usuario = {
  nome: "Diego",
  empresa: {
    nome: "Rocketseat"
  }
};
Imprima em tela utilizando console.log o nome da empresa e seu endereço no seguinte formato:

A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
Obs. Para imprimir em tela utilize o formato de template strings, por exemplo

console.log(`O nome do usuário é ${usuario.nome}`);
*/


const usuario = {
    nome: "Rocketseat",
    empresa: {
        cor: 'roxo', 
        foco: 'programação', 
        endereco: {
            rua:"Rua Guilherme Gembala, 260"
        }
    }
}

console.log(`A empresa ${usuario.nome} tem como cor principal a cor ${usuario.empresa.cor}, é uma empresa com foco em ${usuario.empresa.foco}
e está localizada na ${usuario.empresa.endereco.rua}`)