const usuarios = [
    {nome: 'George Matheus', tecnologias: ['Python', ' Java Script']},
    {nome: 'José', tecnologias: ['C', ' C++']},
    {nome: 'Francleito', tecnologias: ['Java', ' Node.js']},
    {nome: 'Pedro', tecnologias: ['Java Script', ' React Native']},
    {nome: 'Adalberto', tecnologias: ['HTML', 'CSS']}
]



function apresentar (usuarios) {
    for (let i = 0; i < usuarios.length; i ++)
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}.`)
    return
}

apresentar(usuarios)


function usuarioCss(usuarios){

usuarioCss(usuarios)