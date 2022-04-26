//spread
var partes = ['ombro', 'joelhos'];

var musica = ['cabeça', ...partes, 'e', 'pés'];  // spread é a possibilidade de integrar dois objetos usando as reticências
console.log(musica)


function fn(x, y, x) { }
var args = [0, 1, 2];
fn(...args);  // usando o spread pra passar cada elemento do array como parâmetros da função

// in retorna true se algo estiver dentro de algo, e false se o contrário for verdadeiro

something in somethingItems

//arrays
var arvores = new Array("pau-brasil", "loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;           //retorna true
3 in arvores;           //retorna true
6 in arvores;           //retorna false pq é  um array de 5 posições
"cedro" in arvores      //retorna false (você deve especificar o número do índice),
                        //não o valor naquele índice
"cedro" in arvores[2]   //retorna true
"length" in arvores     //retorna true (length é uma propriedade de Array)


//objetos predefinidos
"PI" in Math;               //retona true
var minhaString = new String("coral");
"length" in minhaString;    //retorna true


//objetos personalizados
var meuCarro = { marca: "Honda", modelo: "Accord", ano: 1998 };
"marca" in meuCarro;        //retorna true
"modelo" in meuCarro        //retorna true


//instanceof verifica s e o objeto é instância de alguma coisa
objeto instanceof tipoObjeto

var dia = new Date(2020, 4, 13);

if(dia instanceof Date) {
  //code here
}