// for
const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {   // em ordem, são: o estado inicial inicial, a condição e o incremento
    const element = array[index];
    console.log(`Element #${index}: ${element}`);
}

// for... in

let arr = [3, 5, 7];
arr.foo = "hello";

//for-in - imprime indices do array
for (let i in arr) {
    console.log(i); //0, 1, 2, foo
}

//for-of - imprime valores do array
for (let i of arr) {
    console.log(i); //3, 5, 7
}

// while

var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x += n; //1, 3, 6
}

console.log(x);

let i = 0;

do {    // o do while faz primeiro e depois verifica a condição
    i += 1;
    console.log(i);
} while (i < 5);