// Array 

const users = ["Leticia", "Amanda", "Mulato"]
// const users = new Array("Leticia", "Amanda", "Mulato")
// const users = Array.of("Leticia", "Amanda", "Mulato")
// const users = Array.from("Leticia", "Amanda", "Mulato") // o Array.from precisa de um parâmet4ro array-like ou iterable object

const gender = {
    MAN: Symbol("M"),
    WOMAN: Symbol("W")
}

const persons = [
    {
        name: users[0],
        age: 20,
        gender: gender.WOMAN
    },
    {
        name: users[1],
        age: 20,
        gender: gender.WOMAN
    },
    {
        name: users[2],
        age: 21,
        gender: gender.MAN
    }
]

console.log(persons[0])
console.log(persons[1])
console.log(persons[2])

// retornar a quantidade de items de um array

console.log("itens:", persons.length)

// verificar se é array

console.log("A variável persons é um array: ", Array.isArray(persons))

// Iterar os itens de um array:

persons.forEach((person, index, arr) => {  // o primeiro parâmetro é o objeto da vez, o segundo é o index e o terceiro é o array inteiro. O segundo e terceiro parâmetros são opcionais.
    console.log(`index: ${index}, nome: ${person.name}, age: ${person.age}, gender: ${person.gender.toString()}`)
    // console.log(arr)
})

// Outra forma de iterar itens de um array é usando o map

persons.map((person, index)=>{
    console.log(`index: ${index}, nome: ${person.name}, age: ${person.age}, gender: ${person.gender.toString()}`)
})

const arr0 = [1, 2, 3, 4, 5]
console.log(arr0.map(value => value*2))

// as funções a seguir não alteram o array original, só retornam um novo

// Filtrar array

const women = persons.filter(person => person.gender === gender.WOMAN) // filter e map recebem os mesmos argumentos do forEach
console.log("\nLista de mulheres:", women)

// Retornar um novo

const personsWithCourse = persons.map(person => {
    person.course = "introdução ao javascript";
    return person
})

console.log("\nPessoas com a adição do course:", personsWithCourse)

// Transformar um array em outro tipo

const totalAge = persons.reduce((age, person)=>{  // primeiro vem o item dentro do array que me interessa, depois person, index e array
    age += person.age
    return age
}, 0) // o primeiro parâmetro é a função que eu quero que seja executada, o segundo é o valor inicial do meu age.

console.log("\nSoma de idade das pessoas:", totalAge)

// juntando operações

const totalEvenAges = persons.filter(person => person.age % 2 === 0).reduce((age, person)=>{
    age += person.age;
    return age
}, 0)

console.log("\nSoma de idades das pessoas que possuem idade par:", totalEvenAges)


/* array-like são objetos que não são array "de verdade", mas possuem uma propriedade length (indicando seu tamanho), 
a capacidade de ter seus elementos individuais acessados por índices numérios (x[0]), e vários outros métodos pertencentes ao tipo.*/

// Inserir e remover elementos

// Push: Adiciona um ou mais elementos no final do array e retorna o tamanaho do novo array

const arr1 = ['banana', 'melancia', 'abacate'];
const arr1Length = arr1.push('acerola');

console.log(arr1Length)

console.log(arr1)


//Pop: Remove o último elemento de um array e retorna o elemento removido

const arr2 = ['banana', 'melancia', 'abacate'];
const removedItem = arr2.pop();

console.log(removedItem);

console.log(arr2)


// Unshift: Adiciona um ou mais elementos no início do array e retorna o tamanho do novo array

const arr3 = ['banana', 'melancia', 'abacate'];
const arr3Length = arr2.unshift('acerola');

console.log(arr1Length)

console.log(arr1)


// Shift: Remove o primeiro elemento de um array e retorna o elemento removido

const arr4 = ['banana', 'melancia', 'abacate'];
const removedItemArr4 = arr4.pop();

console.log(removedItemArr4);
console.log(arr4)


// Concat: Concatena um ou mais arrays retornando um novo array

const arr5 = ['banana', 'melancia', 'abacate'];
const arr6 = ['coxinha', 'kibe', 'empada'];
const arr7 = arr5.concat(arr6);

console.log(arr7)



// Slice: Retorna um novo array "fatiando" o array de acordo com o início e fim

const arr8 = ['banana', 'melancia', 'abacate', 'acerola', 'laranja'];

//retorna de-até
console.log(arr8.slice(0, 2));


//retorna a partir de
console.log(arr8.slice(2));


//realiza o mesmo procedimento do a partir de porém ao contrário
console.log(arr8.slice(-1));


//realiza o mesmo procedimento do a partir de porém ao contrário
console.log(arr8.slice(-3));


// Splice: Altera um array adicionando novos elementos enquanto remove elementos antigos

const arr9 = [1, 2, 3, 4, 5];

//remove os elementos do array original a partir de

arr9.splice(2);

console.log(arr9);

//é possível remover e adicionar ao mesmo tempo
//nesse exemplo, na posição 0, remove 0 elementos, adiciona o item 'first'

arr9.splice(0, 0, 'first');
//retorno é sempre os elementos removidos


console.log(arr9);

// keys: Retorna um Array Iterator que contém as chaves para cada elemento do array.

const arr10 = [1, 2, 3, 4];
const arrIterator = arr10.keys();
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

// Values: Retorna um Array Iterator que contém os valores para cada elemento do array.

const arr11 = [1, 2, 3, 4];
const arrIterator2 = arr11.values();

console.log(arrIterator2.next())
console.log(arrIterator2.next())
console.log(arrIterator2.next())
console.log(arrIterator2.next())

// Entries: Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array

const arr12 = [1, 2, 3, 4];
const arrIterator3 = arr12.entries();

console.log(arrIterator3.next())
console.log(arrIterator3.next())
console.log(arrIterator3.next())
console.log(arrIterator3.next())



/// Buscar elementos

// find: Retorna o primeiro item de um array que satisfaz a condição

const arr13 = [1, 2, 3, 4];
const firstGreatThanTwo = arr13.find(value => value > 2);

console.log(firstGreatThanTwo);

// findIndex: Retorna o índice do primeiro item de um array que satisfaz a condição

const arr14 = [1, 2, 3, 4];
const firstGreatThanTwo2 = arr14.findIndex(value => value > 2);

console.log(firstGreatThanTwo2);

// filter: Retorna um novo array com todos os elementos que satisfazem a condição

const arr15 = [1, 2, 3, 4];
const allValuesGreatThanTwo = arr15.filter(value => value > 2);

console.log(allValuesGreatThanTwo);


// indexOf: Retorna o primeiro índice em que um elemento pode ser encontrado no arra

const arr16 = [1, 2, 3, 4];
const firstIndexOfItem = arr16.indexOf(3);

console.log(firstIndexOfItem);

// lastIndexOf: Retorna o último índice em que um elemento pode ser encontrado no array

const arr17 = [1, 2, 3, 4, 3];
const lastIndexOfItem = arr17.lastIndexOf(3);

console.log(lastIndexOfItem);

// includes: Retorna um booleano verificando se determinado elemento existe no array

const arr18 = [1, 3, 3, 4, 3]

const hasItemOne = arr18.includes(1);
console.log(hasItemOne)

const hasItemTwo = arr18.includes(2);
console.log(hasItemTwo)

// some: Retorna um bolleano verificando se pelo menos um item do array satisfaz a condição.

const arr19 = [1, 3, 3, 4, 3];

const hasSomeEvenNumber = arr19.some(value => value % 2 === 0);

console.log(hasSomeEvenNumber)

// every: Retorna um bolleano verificando se todos os itens de um array satisfazem a condição

const arr20 = [1, 3, 3, 4, 3];

const allEvenNumbers = arr20.every(value => value % 2 === 0);

console.log(allEvenNumbers)

/// Ordenar elementos

// sort: Ordena os elementos de um array de acordo com a condição

const arr21 = [{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}];

console.log(arr21.sort((curret, next) => next.grade - curret.grade));

// reverse: Inverte os elementos de um array

const arr22 = [1, 2, 3, 4, 5]

console.log(arr22.reverse());

/// Transformar o tipo de dado

// join: Junta todos os elementos de um array, separados por um delimitador e retorna uma string

const arr23 = [1, 2, 3, 4, 5];

console.log(arr23.join("-"));

// reduce: Retorna um novo tipo de dado iterando cada posição de um array

const arr24 = [1, 2, 3, 4, 5]

console.log(arr24.reduce((total, value) => total += value, 0));

const arr25 = [{name: 'John', grade: 7}, {name: 'Jenny', grade: 5}, {name: 'Peter', grade: 4}];

//média simples com reduce
console.log(arr25.reduce((totalGrades, student) => totalGrades += student.grade, 0) / arr25.length);


console.log(arr25.reduce((studentsNames, student) => studentsNames += student.name + ' ', ''));
