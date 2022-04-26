/*
Herança
Herança é baseada em protótipos, onde é utilizada aparece o tipo prototype, toda vez que é criada uma variável no javascript é criado um referência proto que aponta para o prototype do tipo que criamos, esse tipo é o constructor. Baseado em um constructor é criado um prototype e nessa variável é armazenada a referência proto

baseadas em protótipos
prototype : é uma variável que armazenas as definições do objeto
__proto__: aponta o prototype do tipo que criamos
constructor: esse tipo é um constructor. Baseado em um constructor é criado um prototype, e nesse variável __proto__ armazenam-se as referências dela.
*/

'use strict';
const myText = 'Hello prototype!';
console.log(myText.split('')); //<-- de onde vem o split?

const myText2 = String('Hello prototype!');  // o split é carregado do prototype ta função construtura String 
console.log(myText2.__proto__.split) //<-- quando é criado uma string é utilizado a função construtora String, essa função construtora carrega um prototype, e toda vez que é criado uma variável utilizando uma função construtora é criada uma referência __proto__ .
// myText2.__proto__.split === String.prototype.split

// o __proto__ aponta para um prototype que é criado a partir de uma função construtura (constructor)

function Animal(){}

console.log(Animal.constructor)   // aqui, indica que o constructor de animal é function

// f Animal.contructor --> f Function --> Function.prototype.contructor --> f Object() {} --> Object.prototype = null
//  Constructor do animal aponta para function, function prototype constructor aponto para a função construtura Object(), e object prototype não aponta para nada porque é uma estrutura raíz do javascript
// isso porque toda função é um objeto que pode ser chamado.

// O que ocorre no javascript ao utilizar new?

/*
1- Um novo objeto é criado, herdando Foo.prototype;
2- A função construtora Foo é chamda com os argumentos específicados e com o this vínculado ao novo o obejto criado;
3- Caso a função construtora tenha um retorno explíctio, será respeitado o seu return, senão, será retornado o objeto criado no passo 1.
 */


//exemplo simples de herança, onde um construtor chama o outro
function Animal1(){
    this.qtdePatas = 4
}

const cachorro = new Animal1() // ao objeto cachorro herda o prototype da função Animal1
console.log(cachorro.qtdePatas)
console.log(cachorro.constructor)

function Animal2(quatidadePatas) {
    this.quatidadePatas = quatidadePatas;
  }
  
  function Cachorro(morde) {
    Animal2.call(this, 4); // ".call: Calls a method of an object, substituting another object for the current object."
  
    this.morde = morde;   // o this vai ser vinculado ao novo objeto criado
  }
  
  const pug = new Cachorro(false); // a função construtura tá sendo chamada com um argumento especificado

  console.log(pug);
  console.log(pug.constructor)  // pug herdou o prototype da função Cachorro
  // Cachorro {quatidadePatas: 4, morde: false}

function Pessoa(name){
    this.name = name
    return {
        name: 'teste'
    }
}

const p = new Pessoa("Leticia")

console.log(p) // --> mesmo chamando a função construtora chamando um argumento, ele vai me retornar o return explicito da função

// eu posso criar novos prototypes pra uma função por fora:

function Cachorro2() {}

Cachorro2.prototype.latir = function() {}

const c = new Cachorro2
console.log(c.__proto__)

Cachorro2.prototype.teste = function() {}

console.log(c.__proto__) // o objeto vai ser atualizado junto com a função que ela herda

// Classes

/*
* - ES6: criado no ES6
* - simplificação da herança de protótipos
* - palavra chave class
*/

'use strict';

class Animal {

  constructor(quatidadePatas) {
    this.quatidadePatas = quatidadePatas
  }
}

class Cachorro extends Animal {  // a classe Cachorro herda as propriedades da classe Animal
  
    constructor(morde) {
    super(4);
    this.morde = morde;
  }
}

const pug2 = new Cachorro(false);
console.log(pug2);
//Cachorro {quatidadePatas: 4, morde: false}

// Modificadores de acesso

// controle do que é privado / público dentro da classe

'user script'

class Person {
    #name = '';  // o atributo name é privado, ou seja, ele não é exposto diretamente quando eu chamo o new Person
  
    constructor(initialName) {   
      this.#name = initialName;
    }
  
    getName = function() {    // então eu tenho que obrigatoriamente implementar funções para permitir que, de fora, alguém altere esse valor
      return this.#name
    }
  
    setName = function(newName) {
      this.#name = newName;
    }
  }
  
  
const a = new Person('Daniel');
  
console.log(a)
//Person {getName: f, setName: f}
  
a.getName();
//daniel
  
a.name;
//undefined
  
a.setName('Thiago');
a.getName();
//Thiago

// Encapsulamento: Oculta detalhes do funcionamento interno

class Person2 {
    #name = '';
  
    constructor(name) {
      this.#name = name;
    }
  
    get name() {
      return this.#name
    }
  
    set name(name) {
      this.#name = name;
    }
  }

// Static: Acessar métodos/atributos sem instanciar


class Person3 {
    static walk() {
      console.log('walking..');
    }
  }
  
console.log(Person3.walk());
//walking...