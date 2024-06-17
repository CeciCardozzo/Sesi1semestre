function mudarTextoECor(){
// Importar o elemento HTML no js
const body = document.querySelector('body')
// Mudar a cor de fundo, utilizando a propriedade style
body.style.backgroundColor = 'blue'
// Mudar cor do texto
body.style.color = 'pink'
// Mudar tamanho do texto 
body.style.fontSize = '30px'
// Alturar a fonte do site
body.style.fontFamily = 'sans-sarif'
// Alinhar o texto
body.style.textAlign = 'center'
// Sublinhado 
body.style.textDecoration = 'underline'

}

function mudarQuadrados(){
    // Importar os elementos HTML no js 
    const quadrado1 = document.querySelector('#quadrado1')
    const quadrado2 = document.querySelector('#quadrado2')
    // Mudar a altura dos elementos
    quadrado1.style.height = '100px'
    quadrado2.style.height = '200px'
    // Mudar a cor de fundo
    quadrado1.style.backgroundColor = 'blue'
    quadrado2.style.backgroundColor = 'purple'
    // Mudar a largura dos elementos
    quadrado1.style.width = '200px'
    quadrado2.style.width = '400px'
    // Mudar a margem dos elementos 
    quadrado1.style.margin = '10px'
    quadrado2.style.margin = '10px'
    // Mudar o padding
    quadrado1.style.padding = '20px'
    quadrado2.style.padding = '20px'
    // Mudar a borda
    quadrado1.style.border = '5px solid purple'
    quadrado2.style.border = '5px solid brown'
}
function esconderTexto(){
    // Importar elemento
    const  divSumir = document.querySelector('#div-sumir')
    // Para ocultar o elemento da pagina, usar display: none
    
    if(divSumir.style.display == 'none'){
        // fazer o elemento voltar a aparecer 
        divSumir.style.display = "block"
    }else{
        // Para ocultar o elemento da pagia, usar display : none
        divSumir.style.display = 'none'
    }
}

function tivarFlex(){
    // Imporatar o body para manipular
    const body = document.querySelector('body')
    // Ativar o display: flex
    body.style.display = 'flex'
    // Deixar elemento na direcao da coluna
    body.style.flexDirection = 'column'
    // Centralizado no eixo tranversal da coluna (linha)
    body.style.alignItems = 'center'
    // alinhar no eixo principal (coluna)
    body.style.justifyContent = 'space-between'

    // style.backgroundImg = url("imagem.jpg")
    // style.backgroundSize = 'cover
}

function alterarPosicaoImagem(){
    // Importar a imagem 
    const imagem = document.querySelector('img')
    // Deixar a posicao fixa
    imagem.style.position = 'fixed'
    // Definir em qual local da pagina ela vai ficar
    imagem.style.top = '10px'
    imagem.style.right = '10px'
    
}
