//Qustão 1

// let idade = Number(prompt('Digite a sua idade:'))
// if(idade < 18){
//     alert('Você é menor de idade.')
// }if(idade <= 59){
//     alert('Você é adulto.')
//     }if(idade >= 60){
//         alert('Você é idoso.')
//     }




//Questão 2

// let mes = Number(prompt('Digite qual o numero do mês que estamos:'))
// switch(mes){
//     case 12 :
//     case 1  :
//     case  2 :
//         alert('Estamos no verão!')
//         break
//     case 3 :
//     case 4 :
//     case 5 :
//         alert('Estamos no outono!')
//         break
//     case 6 :
//     case 7 :
//     case 8 :
//         alert('Estamos no inverno!')
//         break
//     case 9  :
//     case 10 :
//     case 11 :
//         alert('Estamos na primavera!')
//     default: 
//         alert('Numero invalido.')
// }




//Questao 3

// let listaDeNumeros = [1, 3, 7, 8, 3, 5, 3, 0]
// let contador = 0
//     for(let i = 0; i < listaDeNumeros.length; i++){
//         if(listaDeNumeros[i] == 3){
//             contador++
//         }
//     }
    
//     console.log(`O numero 3 aparece ${contador} vezes`)



//Questao 4 

// let opcao = 0 
// let lista = []
// while(opcao != 'f'){
// opcao = prompt(' a) Adicionar uma tarefa comum \n b) Adicionar uma tarefa prioritária \n c) Remover a primeira tarefa \n d) Remover a última tarefa \n e) Listar tarefas \n f) Encerrar o programa')
// switch(opcao){
//     case 'a' :
//         let a = prompt('qual tarefa voce vai adicionar?')
//         lista.push(a)
//         console.log(lista)
//         break
//     case 'b' : 
//         let b = prompt('qual tarefa voce vai adicionar?')
//         lista.unshift(b)   
//         console.log(lista) 
//         break
//     case 'c' :
//         lista.shift()
//         break
//     case 'd' :
//         lista.pop()
//         break
//     case 'e' : 
//         alert(lista)
//         break
//     default :
//      alert('letra ivalido.')


// }
// }

//Questao 5 

// let fila = []
// while(fila.length < 5){
//     let escolha = prompt('a) Entrar na fila \n b) Sair da fila')
// switch(escolha){
//     case 'a' :
//         let nome = prompt('Qual seu nome?')
//         fila.push(nome)
//         break
//     case 'b' :
//         fila.shift()
//         break

//         default:
//         alert('errado')
// }
// }
// console.log(fila)
