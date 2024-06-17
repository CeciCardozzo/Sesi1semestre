function calcular(evento){
    evento.preventDefault()
let peso = document.querySelector("#id_peso").value
let altura = document.querySelector("#id_altura").value
let nome = document.querySelector("#id_nome").value
let profissao = document.querySelector("#id_profissao").value
let url = document.querySelector("#id_url").value
let imc = peso / (altura * altura)
let paragrafo = document.querySelector("#paragrafo")
let classificacaoImc


switch(true){
    case(imc < 18.5):
        classificacaoImc = 'Magreza'
        break
    case(imc < 24.9):
        classificacaoImc = 'Normal'
        break
    case(imc < 29.9):
        classificacaoImc = 'Sobrepeso'
        break
    case(imc < 39.9):
        classificacaoImc = 'Obesidade'
        break
    case(imc < 40):
        classificacaoImc = 'Obesidade grave' 
        break
}


paragrafo.innerHTML = `Nome:${nome}\nPeso:${peso}\nAltura:${altura}\nProfissão:${profissao}\nImc:${imc}\nClassificaçao:${classificacaoImc}`



}