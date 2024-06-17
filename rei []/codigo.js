//   0   1   2   3
// let idades = [15, 16, 17, 18]
// let i = 0 
// console.log(idades[i])
// alert(idades[3])

// let idades = [15, 16, 17, 18]
// for(i=0; i<6; i++){
//     if(idades[i] < 18){
//         console.log(idades[i])
//     }

// }

//  let meses = ["janeiro", "fevereiro", "março"," abril"," maio ", "junho", "julho", "agosto", "setembro"," outubro", "novembro" , "dezenbro"]

//  let n = Number(prompt('Digite o numero do mes:'))
//  let i = n -1
//  alert(meses[i])

// let diasDaSemana = ["segunda", "terça", "quarta", "quinta", "sexta", "sabado", "domingo", ]
// diasDaSemana [4] = "Melhor dia!"

// diasDaSemana.unshift("semana 1")
// diasDaSemana.push("feriado")
//  remove o ultimo diasDaSemana.pop()
// remove o primeiro diasDaSemana.shift()
// console.log(diasDaSemana)

// let i = diasDaSemana.indexOf('terça')
// // achar variavel
// console.log(+i)
// i = diasDaSemana.indexOf('domingo')
// console.log(+i)

// splice
// remover um elemento:
// diasDaSemana.splice(indiceInicio, quantidade)

// diasDaSemana.splice(2,1)
// console.log(diasDaSemana)

// EXERCICIOS

// let numeros = []
// for(i=2;i<=20;i++){
//     if(i % 2 == 0){
//         numeros.push(i)
//     }
// }
// console.log(numeros)




// let fru = ["banana", "maça", "uva"]
// fru.push("morango")
// fru.splice(1,1)
// console.log(fru)

// let amg = ["fe", "fer", "nando"]
// amg.push("f", "e", "r")
// console.log(amg)


// let idades = [2, 2, 2, 2, 2]
// 1 + 0
// console.log(idades)

// let compra = ["maças","pão","leite" ]
// compra.push("ovos", "arroz")
// compra.splice(1,2,)
// console.log(compra)


// let n = Math.floor(Math.random()*100) "numero aleatorio"

// console.log(n);







// let numeros = []
// for(i=0; i<25; i++){
//     let n = Math.ceil(Math.random()*100)
//     numeros.push(n)
// }
// console.log(numeros);

// let vetor = document.getElementById('divVetor')
// // vetor.innerHTML = '' tirar o texto
// for(i=0; i<numeros.length; i++){
//     vetor.innerHTML +=  numeros[i] + '<br>'
// }

// let n1, n2
// function lerN1(){
//     // alert("n1")
//     do{
//         n1 = Number(prompt("digite n1: "))

//     }while(n1<0 || n1>24)
// }
// function lerN2(){
//     do{
//         n2 = Number(prompt("digite n2: "))
//     }while (n2<0 || n2>24) 
// }
// let resultadoSoma = document.getElementById('divSoma')
// function calcularSoma(){
//     let soma = numeros[n1] + numeros[n2]
//     resultadoSoma.innerHTML = ' Resultado da soma' + soma 
// }


// let numeros = []
// let min = -100
// let max = 100

// let saida = document.getElementById('divSaida')

// for(i=0; i<50;i++){
//     let n = Math.floor(Math.random() * (max - min + 1) ) + min;
//     numeros.push(n)
// }
// console.log(numeros)

// for(i=0; i<numeros.length;i++){
//     saida.innerHTML += numeros[i] + ','
// }
// saida.innerHTML += '<hr>'
// for(i=0; i<numeros.length ; i++){
//     if(numeros[i] < 0){
//         numeros[i] = 0 
//     }
//     saida.innerHTML += numeros[i] + ','
// }



// let pai = []
// let mae = []
// let filho = []
// let max = 99, min = 10
// let saida = document.getElementById('divSaida')

// for(i=0; i<50;i ++){
//     pai.push(Math.floor(Math.random() * (max - min + 1) ) + min);
//     mae.push(Math.floor(Math.random() * (max - min + 1) ) + min);
// }
// console.log(pai)
// console.log(mae)

// for(i=0;i<50;i++){
//     if(i % 2 == 0){
//         filho.push(pai[i])

//     }else{
//         filho.push(mae[i])
//     }

//     }
//     console.log(filho)

//     for(i=0;i<50;i++){
//         if(i<10){
//             saida.innerHTML += '0'
//         }
//         saida.innerHTML += `${i} | ${pai[i]} | ${mae[i]} | ${filho[i]} <br>`
//     }

// let dia = []

// let min = 12
// let max = 35
// for(i=0;i<30;i++){
//     dia.push(Math.floor(Math.random() * (max - min + 1) ) + min);

// }
// console.log([i])





//EXplicaçao 



// let nomes = ['c', 'e', 'c']
// console.log(nomes[0])
// //adicionar um novo nome ao final da lista

// nomes.push('i')
// console.log(nomes)

// //adicionar um novo nome ao inicio da lista
// nomes.unshift('c')
// console.log(nomes)

// //romover um elemento do final da lista
// nomes.pop()
// console.log(nomes)

// //remover um elemento do comeco da lista
// nomes.shift()
// console.log(nomes)

// //indentificar o indice de um elemento dentro da lista
// let indice = nomes.indexOf('e')
// console.log(`o indice do elemento é ${indice}`)

// let numeros = [1, 2, 3, 4, 5 , 1 ,6 , 6]
// console.log(numeros)
// let primeiro1 = numeros.indexOf(1)
// let ultimo1 = numeros.lastIndexOf(1)
// console.log(`a primeira vez que o 1 aparece é no indice ${primeiro1} a ultima é no indice ${ultimo1}`)

// // coloca em order crescente 
// numeros.sort()
// console.log(numeros)

// //alterar um elemento da da lista
// numeros[4] = 20 
// console.log(numeros)
// //nomeDoArray.splice(indice, quantidadeRemover, novosElementosOpicionais)
// numeros.splice(5, 5) // a partir do 6 elemento, remover 5 
// console.log(numeros) 

// let impares = []
// soma = 0
// for(let contagem = 0; contagem < 5; contagem++){
//     let numero = Number(prompt('Digite um numero inteiro'))
//     // verificar se é impar
//     if(numero % 2 != 0){
//     // adicionar o numero no array de impares e na soma
//     impares.push(numero)
//     soma += numero
//     }
// }
// alert(`a soma dos numeros impares é ${soma} e os numeros sao \n${impares.join("\n")}`)

// let menor = 11
// let soma = 0 
// let maior = 0
// let notas = []
// for(let contador = 0; contador < 6; contador++){
//     let nota = Number(prompt('Digite uma nota'))
//     soma += nota
//     notas.push(nota)
//     // verificar se é a maior ate entao
//     if(nota > maior){
//         maior = nota
//     }
//     // verificar se é a menor ate entao 
//     if(nota > maior){

//     }

// }
// let somaFinal = soma - maior - menor
// let media = somaFinal / 4 
// alert(`As notas digitadas foram ${notas.join(',')} retirando a menor que foi ${menor} e a maior que foi ${maior} e a sua media é ${media}`)


// let notas = []

// for(let contador = 0; contador < 6; contador++){
//     let nota = Number(prompt('Digite uma nota'))
//     notas.push(nota)
// }
// console.log(notas)
// //ordenar a lista em ordem crescente
// notas.sort((atual, proximo) => atual - proximo)
// console.log(notas)
// //remover a menor(primeira)
// notas.shift()
// console.log(notas)
// //remover a maior(ultima)
// notas.pop()
// console.log(notas)
// let soma = notas[0] + notas[1] + notas[2] + notas[3]
// let media = soma / 4
// console.log(`sua media é ${media}`)




// let fila = []
// while(fila.length < 5){
//     let escolha = prompt('a) Entrar pessoa \n b) Sair pessoa')
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


// let vdd = []
// let tempo = 2010
// for (tempo; tempo < 2019; tempo++) {
//     let resposta = prompt(`Houve alistamento no ano de ${tempo}?`)
//     if (resposta.toLowerCase() == 's') {
//         vdd.push(tempo)
//     }
// }

// if (vdd.length == 0) {
//     alert('Não houve alistamento nos ultimos 10 anos.')
// }else{
//     alert(`O ultimo ano que houve alistamento foi em ${vdd[vdd.length-1]}`)
// }
// console.log(vdd)


// let nomes = []
// let nome
// let virus = []
// let bacteria = []
// let ambos = []
// let comoPega = []
// let total = Number(prompt('Quantas doenças você quer cadastrar?'))
// for(total; total > 0; total--){
//     nome = prompt('Qual o nome da doença que você vai cadastrar?')
//     let pegou = prompt('A doença que você pegou é:\na) Trasmitida por virus\nb) Bacteria\nc) Ou ambos')
//     comoPega.push(nome)
//     switch(pegou){
//         case 'a':
//             virus.push(nome)

//             break
//         case 'b':
//             bacteria.push(nome)
//             break
//         case 'c':
//             ambos.push(nome)
//             break
//     }
//     nomes.push(nome)
// }
// console.log(`Essas doenças são transmitidas por virus: ${virus}`)
// console.log(`Essas doenças são transmitidas por bacterias: ${bacteria}`)
// console.log(`Essas doenças são transmitidas por ambos: ${ambos}`)
// console.log(`Nome das doenças: ${nomes}`)


// let totalProdutos = []
// let totalPrecos = []
// let pergunta 
// while(pergunta< 5){
//     let produto = prompt('Qual o produto?')
//     let preco = prompt('Qual o preço do produto?')
// if(preco < 50){
//     alert()
// }

// }

// totalPrecos.push(preco)
// totalProdutos.push(produto)


// "PROVA"
// EXC 1
let lista = [12,2,6,1,7,3,8,15,10,3,14]
console.log(lista)
//remover todos os numeros que nao estiverem entre 1 e 5
//descobrir o ultimo indice 
let ultimoIndice = lista.length - 1 

//percorrer todos os indices da lista
for(let indice = 0; indice <= ultimoIndice; indice++){
    //analisar cada elemento, pois o indice começa no 0 e para mo ultimo indice 
    if(lista[indice] > 5){
        // splice ira remover um elemento a partir do indice analisado
        lista.splice(indice, 1)
        indice--
    }
}

console.log(lista)



