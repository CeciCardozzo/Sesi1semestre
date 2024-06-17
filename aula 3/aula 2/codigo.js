// let idade = prompt ('qual a sua idade?')
// if (idade < 16){
//     alert('Não pode votar.')
// }else if (idade ==16 || idade ==17 || idade >=70){
//     alert('Voto opcional.')
// }else{
//     alert('Voto obrigatorio!')
// }


// let nota1 = Number(prompt ('escreva a nota:'))
// let nota2 = Number(prompt ('escreva a nota:'))
// let nota3 = Number(prompt ('escreva a nota:'))
// let media = ( nota1 + nota2  + nota3) /3 
// if(media >7){
//     alert(`Aprovado! ${media}`)
// }else if(media <7){
//     alert(`Reprovado! ${media}`)
// }


// let altura = Number(prompt ('Qual seu altura?'))
// let peso = Number(prompt ('qual seu peso?'))
// let imc = peso / (altura *altura)
// if(imc < 18){
//     alert(`abaixo do peso, seu IMC é ${imc}`)
// }else if(imc <= 25){
//     alert(`peso ideal, seu IMC é ${imc}`)
// }else{
//     alert(`Voce esta acima do IMC ideal, seu IMC é ${imc}`)
// }


// let populacao = Number(prompt('informe a populaçao'))
// let area = Number(prompt('informe a area do local em m2'))
// let densidadeDemografica = populacao / area
//     if(densidadeDemografica < 25){
//         alert(`a densidade demografica é ${densidadeDemografica} e se enquadra como densidade baixa `)
//     }else if (densidadeDemografica <= 100){
//     alert(`a densidade demografica é ${densidadeDemografica} e se enquadra como densidade media `)
//     }else{
//         alert(`a densidade demografica é ${densidadeDemografica} e se enquadra como densidade alto `)
//     }


// let mes = Number ( prompt('Qual mes estamos?'))
// switch (mes){
//         case 1 :
//         alert('janeiro')
//         break
//         case 2 :
//         alert('fevereiro')
//         break
//         case 3:
//         alert('março')
//         break
//         case 4 :
//         alert('abril')
//         break
//         case 5 : 
//         alert ('maio')
//         break
//         case 6 :
//         alert ('junho')
//         break
//         case 7 :
//         alert ('julho')
//         break

//         default: alert ('numero invalido')

// }


// let numero1 = Number(prompt('escreva um numero'))
// let numero2 = Number(prompt('escreva um numero'))

// let resultado = Number(prompt('(1)adicao\n (2)subtracao\n (3) divisao\n (4)multiplicacao\n escolha um desses numeros'))
// switch(resultado){
//         case 1 :
//         alert(numero1 + numero2)
//         break
//         case 2 : 
//         alert(numero1 - numero2)
//         break
//         case 3 :
//         alert(numero1 / numero2)
//         break
//         case 4 :
//         alert(numero1 * numero2)
//         break

// }


// let anoNascimento = Number(prompt('escreva o ano que voce nasceu'))
// switch(true){
//     case  anoNascimento <= 1945:
//         alert('sem geracao')
//         break
//         case anoNascimento <=1965:
//             alert('baby boomesr')
// }


// let mes = Number(prompt("Em que mes estamos?"))
// switch (mes) {
//     case 1:
//         prompt("janeiro 31 dias")
//         break
//     case 2:
//         prompt("fevereiro 29 dias")
//         break
//     case 3:
//         prompt("março 31 dias")
//         break
//     case 4:
//         prompt("abril 30 dias")
//         break
//     case 5:
//         prompt("maio 31 dias")
//         break
//     case 6:
//         prompt("junho 30 dias")
//         break
//     default:
//         prompt("numero invalido")

// }


// let conta = Number (prompt("Qual o numero da sua conta bancaria?"))
// let tipoDeOperacao = Number (prompt("Qual o tipo de operaçao voce quer realizar?\n 1)Saldo\n 2)Deposito\n 3)Saque"))
// let dindin = 1000

// switch(tipoDeOperacao){

//     case 1: 
//     alert(dindin)
//     break
//     case 2: 
//     let deposito = Number (prompt("Quanto voce quer depositar?"))
//     alert(dindin + deposito)
//     break
//     case 3: 
//     let saque = Number(prompt("Quanto voce quer saquar?"))
//     if(saque <= dindin){
//         alert(dindin - saque)
//     }else{
//         alert("Voce nao tem esse valor")
//     }
//     break
//     default:
//         prompt("Numero invalido!")
// }


// let compra = Number (prompt("Qual o valor da sua compra?"))
// let frete = 12.50 

// let tipoAssinante = Number(prompt(" 1) Assinante Premium, ganha 20% de desconto e frete grátis.\n 2) Assinante Gold, ganha 20% de desconto mas paga frete\n 3) Assinante Silver, ganha 10% de desconto mas paga frete.\n 4) Não assinante, sem benefícios. "))
// switch(tipoAssinante){
//     case 1 :
//         alert("O valor final da sua compra foi: " +  compra * 0.80  )
//         break
//     case 2 : 
//     alert ("O valor final da sua compra foi: " + ((compra * 0.80) + 12.50 ))
//     break
//     case 3 :
//     alert ("O valor final da sua compra foi: " + ((compra * 0.90) + 12.50))
//     break
//     case 4 : 
//     alert ("O valor final da sua compra foi: " + compra )
//     break
//     default:
//         alert("numero invalido")

// }


// let peteca1 = Number (prompt("Qual a pontuaçao do seu arremesso? "))
// let peteca2 = Number (prompt("Qual a pontuacao do seu aremesso?"))
// let peteca3 = Number (prompt("Qual a pontuacao do seu aremesso?"))
// let total = peteca1 + peteca2 + peteca3
// switch(total){
//     case 15 : 
//     alert("Deus da peteca!")
//     break
//     case 14:
//     case 13:
//     case 12: 
//     case 11:
//     case 10:
//     alert("petequeiro profissional!")
//     break
//     case 9: 
//     case 8: 
//     case 7:
//     case 6:
//     case 5:
//     alert("petequeiro de final de semana")
//     break
//     case 4:
//     case 3:
//     case 2:
//     case 1:
//     alert("petequeiro de final de semana")
//     break
//     case 0:
//     alert("Avaí das petecas")
//     break
//     default:
//      alert("numero invalido!")
// }


// let serie = Number (prompt("Escolha o genero de filme que voce dejesa ver:\n 1)comedia \n 2)drama \n 3)açao"))
// switch(serie){
//     case 1:
//         alert("Voce vai gostar do filme: risos")
//         break
//     case 2: 
//     alert("Voce vai gostar do filmr: choro")
//     break
//     case 3:
//         alert("Voce vai gostar do filme: corra") 
//         break
//         default:
//             alert("esta opçao esta invalida!")
// }


// let dia = Number( prompt("Qual dia da semana estamos?"))
// switch(dia){
//     case 1: 
//     alert("segunda feira")
//     break
//     case 2:
//     alert("terça feira")
//     break
//     case 3:
//     alert("quarta feira")
//     break
//     case 4: 
//     alert("quinta feira")
//     break
//     case 5:
//     alert("sexta feira")
//     break
//     case 6:
//     case 7:
//     alert("final de semana")
//    break
//    default:
//     alert("numero invalido")
// }


let nome 
let notaRenda
let notaEducacao
let notaSaude 

