// comparadores
condicao ? valor1 : valor2

true ? 'foo' : 'bar' //retorna 'foo' | se a condição for verdadeira, retorna o primeiro valor, se for falsa, retorna o segundo valor
false ? 'foo' : 'bar' //retorna 'bar'

exp1 && exp2

//AND lógico (&&)  os dois precisam ser true pra retornar true, precisa que só um seja false pra retornar false
var a1 = true && true       //retorna true
var a2 = true && false      //retorna false
var a3 = false && true      //retorna false
var a4 = false && (3 == 4)  //retorna false
var a5 = "Gato" && "Cão"    //retorna Cão
var a6 = false && "Gato"    //retorna false
var a7 = "Gato" && false    //retorna false

//OU lógico (||)  basta que só um seja true pra retornar true, precisa que os dois sejam false pra retornar false.
exp1 || exp2

var o1 = true || true       //retorna true  
var o2 = false || true      //retorna true
var o3 = true || false      //retorna true
var o4 = false || (3 == 4)  //retorna false
var o5 = "Gato" || "Cão"    //retorna Gato
var o6 = false || "Gato"    //retorna Gato
var o7 = "Gato" || false    //retorna Gato