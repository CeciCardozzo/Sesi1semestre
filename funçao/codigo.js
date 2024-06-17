// function mostrarMensagem(){
//     //Bloco de codigo que vai ser executado quando a funcao for chamada
//     alert('seja bem vindo ao sistema')
// }
// mostrarMensagem()  //Executar a funcao


// function somar(numero1, numero2){
//     let soma = numero1 + numero2
//     alert(`A soma de ${numero1} com o ${numero2} é igual a ${soma}`)
// }
// somar(2, 2)



// function verificarDano(dano){
//     if(dano > 10){
//         alert('Dano critico')
//     }else {
//         alert('Dano baixo')
//     }
// }
//  verificarDano(5)
//  verificarDano(15)


// function somaComRetorno(numero1 = 0, numero2 = 0){
//     let soma = numero1 + numero2
//     return soma
// }
// let resultado = somaComRetorno(35, 56)
// alert(`O resutado da soma foi ${resultado}`)


//EXCICIOS

// function calculoArea (largura, profundidade){
//     let area = largura * profundidade
//     return  area 
// }
// let resultado = calculoArea(50, 40)
// let resultado1 = calculoArea(30, 40)
// let resultado2 = calculoArea(100, 100)
// let resultado3 = calculoArea(40, 40)

// alert(resultado)
// alert(resultado1)
// alert(resultado2)
// alert(resultado3)


// function parOuImpar(numero){
//     if(numero % 2 == 0){
//         console.log(`o numero ${numero} é par`)
//     }else{
//         console.log(`o numero ${numero} é impar`)
//     }
    
// }
// parOuImpar(2)
// parOuImpar(5)


// function somar(numero1, numero2){
//     let soma = numero1 + numero2
//     return soma
// }
// function subtrair(numero1, numero2){
//     let subtracao = numero1 - numero2
//     return subtracao
// }
// function multiplicar(numero1, numero2){
//     let multiplicacao = numero1 * numero2
//     return multiplicacao
// }
// function dividir(numero1, numero2){
//     let  divisao = numero1 / numero2
//     return divisao
// }
// let num1 = Number(prompt('Escolha um numero:'))
// let num2 = Number(prompt('Escolha um numero:'))
// let escolha = Number(prompt('Ecolha qual tipo de opracao voce que fazer:\n 1 - Soma 2 - Subtração 3 - Multiplicação 4 - Divisão'))
// switch(escolha){
//     case 1 :
//     let resultado = somar(num1, num2)
//     alert(`O numero ${num1} + o ${num2} é igual a ${resultado}`)
//     break
//     case 2 :
//     let resultado1 = subtrair(num1, num2)
//     alert(`O numero ${num1} - o numero ${num2} é igual a ${resultado1} `)
//     break
//     case 3 :
//     let resultado3 = multiplicar(num1, num2)
//     alert(`O numero ${num1} * o numero ${num2} é igual a ${resultado3} `)
//     break
//     case 4 : let resultado4 = dividir(num1, num2)
//     alert(`O numero ${num1} / o numero ${num2} é igual a ${resultado4}`)
//     break
//     default :
//     alert('Numero invalido')

// }

//funtion.....

// const somar = function(numero1, numero2){
//     return numero1 + numero2
// }

// let resultado = somar(54, 78)
// alert(resultado)



// function processarAposReceberNome(meuUmaFuncao){
//     let nome = prompt('qual é seu nome?')
//    meuUmaFuncao(nome)
// }

// processarAposReceberNome(function(nomeRecebido){
//     alert(`Feliz aniversario ${nomeRecebido}`)
// })


// let lista = [1,2,3,4,5,6,7,8,]
// // arrey.filter(callback)
// let listapares = lista.filter(itemRodando => {
//     console.log(`estou verificando ${itemRodando}`)
//     return itemRodando % 2 == 0
// })
// console.log(listapares)
//every todos sao vdd


//ATIVIDADES



// let lista = [1,5,7,5,5,5,5,5,5,1]

// let listaImpares = lista.every(itemRodando => {
//     console.log(`Estou verificando ${itemRodando}`)
//     return itemRodando % 2 != 0
// })
// console.log(listaImpares)

let casamento = function(nomeConvidado, data, horario, local, nomeNoivos){
    (`Ola ${nomeConvidado}, queremos convidar voce para o nosso casamento! Sera no dia ${}, as ${horario}.Esperamos voce la. ass: ${nomeNoivos}`)
}