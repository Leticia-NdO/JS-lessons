// Currying: Em ciência da computação, currying é 
// uma técnica de transformação de uma função que recebe múltiplos parâmetros de forma que ela pode ser chamada como uma cadeia de funções que recebem somente um parâmetro cada.

// function soma(a,b){
//     return a + b
// }

// console.log(soma(2,4))

function soma(a) {
    return function (b) {
        return a + b
    }
}

const soma2 = soma(2)
console.log(soma2(0))

// Hoisting com variável: uma variável é declarada depois de ser chamada, o javascript puxa essa variável para antes da sua declaração. Assim, não há um reference error:

function fn() {
    console.log(text)  // ao invés de dar um reference error, ele só aparece como undefined
    var text = "texto"
    console.log(text)
}

fn()

/* É como se o seguinte estivesse acontecendo:


function fn(){
    var text    // a variável é içada.
    console.log(text)

    var text = "texto"

    console.log(text)
}
*/

// Hoisting com função: a diferença é que a função é completamente içada. A variável é içada, mas sem seu conteúdo (por isso o undefined). Já a função é completamente içada.

function vn() {
    log("hoisting de função")     // a função tá sendo chamada antes de ser declarada, mas tá funcionando do mesmo jeito

    function log(value) {
        console.log(value)
    }
}

vn()

/*
É como se o seguinte estivesse acontecendo:

function vn(){
    function log(value){
        console.log(value)
    }

    log("hoisting de função!")
}
*/

// Imutabilidade: se a gente quiser alterar uma variável, a gente tem que criar uma nova constante.

const user = {
    name: "Leticia",
    lastName: "N. de Oliveira"
}

function getUserFullname(user) {
    return {
        ...user,
        fullname: `${user.name} ${user.lastName}`
    }
}

const userWithFullName = getUserFullname(user)
console.log(user)
console.log(userWithFullName)

// Exemplo 2:

const students = [
    {
        name: "Leticia",
        grade: 10
    },
    {
        name: "Amanda",
        grade: 7
    },
    {
        name: "Mulato",
        grade: 6
    }
]

function getApprovedStudents(studentsList) {
    return studentsList.filter(student => student.grade >= 7)
}

console.log("Alunos aprovados")
console.log(getApprovedStudents(students))  // a função não altera a constante students

console.log(students)



// tipos e variáveis

/*
string: texto;
number: número;
boolean: true ou false;
null: nulo;
undefined: a variável existe, mas não possui um valor atribuído à ela
symbol: "um valor symbol é criado através da função Symbol(), que dinamicamente produz um valor único e anônimo."
object: objeto é como um dicionário em python, sinalizado pelas chaves {}. Suas propriedades são chamadas pelo . e o nome da propriedade
// ou por colchetes.
function: são objetos que podem ser chamados
array: é como uma lista no python, delimitado por colchetes []
*/



// Symbol


const user1 = {
    name: "Leticia",
    lastName: "Neves",
    age: 19
}

// for (const prop in user1){
//     console.log(`${prop}: ${user1[`${prop}`]}`)  // um jeito de dar um loop pelas propriedades de um objeto
// }

// Operadores

