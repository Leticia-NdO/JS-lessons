/*Factory
Todas as funções que retornam um objeto, sem a necessidade de chamá-las com o new, 
são considerasd funções Factory.
 */

// Exemplo

function Pessoa(customProperties) {
    return {
      name: 'Leticia',
      lastName: 'Neves de Oliveira',
      ...customProperties
    }
  }
  
  // Factory
  const pessoa = Pessoa({name: 'Custom Name', age: 19});
  console.log(pessoa);

/*Singleton
O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la 
toda vez que for necessário utilizá-la.
 */

// Exemplo:

var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
  }
  
//retorna Pessoa.instance quando instanciado, caso contrario instancia e depois devolve
function Pessoa() {
    if (!Pessoa.instance) {  // caso essa função já não tenha sido instanciada, ela será instanciada.
      Pessoa.instance = this;  // .instance é só uma propriedade para controlar se a função foi instanciada ou não.
    }
  
    return Pessoa.instance  // Agora, se ela já tiver sido instanciada, não se alterará.
  }
  
const pessoa1 = Pessoa.call({name: 'Daniel'});   // Aqui ele ainda não tinha sido instanciada.
  
const pessoa2 = Pessoa.call({name: 'Custom Name'});  // aqui, essa função já foi instanciada, então não vai mudar as suas propriedades.
  
console.log(pessoa1);
  
console.log(pessoa2);

/*Decorator
Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento 
sem modificá-la explicitamente. */

//função
let loggedIn = false;

function callIfAuthenticated(fn) {
  return !!loggedIn && fn();    // se loggedIn for true retorna a função, caso contrário, dá false
}

function sum(a, b) {
  return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));

//só executa se logado
loggedIn = true;
console.log(callIfAuthenticated(() => sum(2, 3)));
loggedIn = false;
console.log(callIfAuthenticated(() => sum(2, 3)));

/*Observer
É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém 
uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

 */

class Observable {

    constructor() {
      this.observables = [];
    }
  
    subscribe(fn) {               // vai colocar a função na lista de observables
      this.observables.push(fn);
    }
  
    notify(data) {
      this.observables.forEach(fn => fn(data));   // o notify vai passar o seu parâmetro para cada função na lista de observables
    }
  
    unsubscribe(fn) {     // para retirar uma função da lista de observables
      this.observables = this.observables.filter(obs => obs !== fn);
    }
  }
  
const o = new Observable();
  
const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);
  
o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);


o.notify('notified 1');   // é possível chamar várias funções ao mesmo tempo assim
  
o.unsubscribe(logData2);
  
o.notify('notified 2');

/*Module
É um pattern que possibilita organizarmos melhor o nosso código necessidade de expor 
variáveis globais. */

let name = 'default';

function getName() {
  return name;
}

function setName(newName) {
  name = newName;
}

module.exports = {
  getName,
  setName
};


//6-module-import.js
const {getName, setName} = require('./5-module.js');

console.log(getName());
console.log(setName('Daniel'));
console.log(getName());