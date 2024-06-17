// 1-buscar elemento no html
let imagem = document.querySelector('img')

// 2-mudar o atributo src da imagem setAttribute
imagem.attribute()

// importar botoes e inputs
let inputIdade = document.querySelector('#id_idade')
let inputNome = document.querySelector('#id_nome')
let botao = document.querySelector('button')

// acionar um alert quando o botao for clicado 
botao.onclick = function(){
    // alert(inputIdade.value)
    // console.log(inputIdade)
    // console.log(inputNome)
    // comsole.log(botao)
    alert(`idade ${inputIdade} \nnome${inputNome}`)
}