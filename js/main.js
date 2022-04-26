function botao() {
    document.getElementById('agradecimento').innerHTML = '<b>Obrigado por clicar</b>' //innerHTML injeta um texto
    // alert('Obrigado por clicar')
}

function redirecionar(){
    window.open('https://web.whatsapp.com/') // abre o link em outra aba
    window.location.href = "https://www.notion.so/uni-ef8aa95790d043b893cbc32343070db1" // abre o link na mesma aba
}

function trocar(elemento){
    // document.getElementById('mousemove').innerHTML = "Obrigado por passar o mouse"
    elemento.innerHTML = "Obrigado por passar o mouse"
    
    // alert('trocar texto')
}

function voltar(elemento){
    // document.getElementById('mousemove').innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(elemento){
    alert('Bem-vindo!')
}

function FuncaoChange(elemento){
    if (elemento.value = "1"){
        window.open('https://g1.globo.com/')
    }
    if (elemento.value = "2"){
        window.open('https://web.whatsapp.com/')
    }else{
        window.open('https://www.notion.so/uni-ef8aa95790d043b893cbc32343070db1')
    }
    console.log(elemento.value)
}

// DOM significa Document Object Model, é o documento gerado pelo browser. Graças a esse documento em forma de árvore, o javascript consegue fazer qualquer alteração no site.
// var nome = 'Leticia'
// var idade = 19
// var idade2 = 10
// //alert(nome + ' tem ' + idade)
// // alert(idade + idade2)
// console.log(idade)
// console.log(nome)
// var frase = 'Japão é o melhor time do mundo'
// alert(frase.replace('Japão', 'Brasil'))

/*
var lista = ['maçã', 'pera', 'laranja']
console.log(lista[1])
alert(lista[1])
lista.push('morango')
console.log(lista)
lista.pop()  // descarta o último elemento
console.log(lista)
console.log(lista.length)
console.log(lista.reverse())
alert(lista.toString())
alert(lista.join(" - ")) // tbm transforma em string, mas com qualquer elemento pra separar

var frutas = [{
    nome: 'maçã',           // o que em python são dicionários, em javascript são objetos
    cor: 'vermelha',        // um array é uma lista de objetos.
    },
    {
    nome: 'laranja',
    cor: 'laranja',
    },
    {
    nome: 'uva',
    cor: 'roxo'
    }
]
console.log(frutas[1].nome)
*/

// var idade = prompt("Qual a sua idade?")

// if (idade >= 18) {
//     alert('Maior de idade!')
// } else {
//     alert('Menor de idade!')
// }

// var count = 0

// // while (count < 5){
// //     console.log(count)
// //     count += 1
// // }

// for (count = 1; count <= 5; count ++){  // o primeiro argumento é o estado inicial do contador, o segundo é a condição, o terceiro é o que deve acontecer com o contador a cada loop
//     alert(count)
// }

// var d = new Date()
// alert(d.getDay() + '/' + d.getMonth() + '/' + d.getFullYear())

// var lista = ['1', '2', '3']
// lista.pop('2')
// console.log(lista)

// function soma(n1, n2){
//     return n1+n2
// }

// function substituir(frase){
//     frase.join('')
//     return frase.replace(frase[0], 'cu')
// }

// alert(soma(2, 2))

// frase = prompt('Digite uma frase:')
// alert(substituir(frase))

