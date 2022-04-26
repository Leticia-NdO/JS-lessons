// Functions

function lp() {
    return 'Code here'  // jeito clássico de declarar uma função
}

const arrowLp = () => console.log("Code here")  // arrow function vem com o return implicito. Caso outros blocos sejam inseridos na função (if, for, etc), aí é necessário explicitar o return

const arrowLp2 = () => {
    return console.log("Code here")  // mesma coisa que a anterior
}

// funções também são objetos

lp.prop = "Criando propriedades dentro da função"  // é possível, mas não é comum
console.log(lp.prop)

// receber parâmetros

const logValue = value => console.log(value)  // recebe um parâmetro e printa ele
const logLpResult = lpParam => console.log(lpParam())  // a função recebe como parâmetro uma função e retorna essa função executada

logLpResult(lp)

// Receber e retornar funções

const controlLpExec = lpParam => allowed => {  // recebe um parâmetro, o memoriza e depois recebe outro
    if (allowed) {
        console.log(lpParam())
    }
}

const handleLpExecution = controlLpExec(lp)  // aqui ele tá recebendo o primeiro parâmetro (lpParam) e o memorizando

handleLpExecution(true); // aqui ele tá recebendo o segundo parâmetro (allowed)

// como fazer isso com o function normal:

// function controlLpExec2 (lpParam) {
//     return function(allowed){
//         if (allowed) {
//             console.log(lpParam())
//         }
//     }
// }

// const handleLpExecution2 = controlLpExec2(lp)

// handleLpExecution2(true)



(() => {
    this.name = "arrow function"

    const getNameArrowLp = () => this.name  // aqui ela vai referenciar o this.name ali de cima ao invés de cumprir sua função como this e referenciar o objeto em que se encontra

    function getName(){
        return this.name
    }

    const user2 = {
        name: "nome do objeto de execução",
        getNameArrowLp, // tá referenciando o this.name = "arrow function"
        getName // tá referenciando o name desse objeto
    }

    console.log(user2.getNameArrowLp())  //
    console.log(user2.getName())
})()
