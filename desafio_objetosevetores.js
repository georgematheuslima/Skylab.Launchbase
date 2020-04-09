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