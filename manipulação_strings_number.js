// Manipulação de strings

/*

Retorna o tamanho de uma string

const textSize = "Texto".lenght;
console.log(`Quantidade de letras: ${textSize}`)


Retorna um array quebrando a string por um delimitador

const splittedText = "Texto".split("x")
console.log('\nArray com as posições separadas pelo delimitador', splittedText)

Busca por um valor e substitui por outro

const replacedText = "Texto".replace("Texto", "txte")
console.log("\nSubstituição de valor: ", replacedText)

Retorna a fatia de um valor

const lastChar = "Texto".slice(-1)
console.log("\nÚltima letra de uma string: ", lastChar)

const allWithoutLastChar = "Texto".slice(3, -1)
console.log("\nValor da string da primeira letra menos a última: ", allWithoutLastChar)

const secondToEnd = "Texto".slice(1)
console.log("\nValor da string da segunda letra até a última", secondToEnd)

Retorna N caracteres a partir de uma posição

const twoCharsBeforeFirstPos = "Texto".substr(0, 2) // o primeiro parâmetro é o início e o segundo é a quantidade de caracteres
console.log("\nAs duas primeiras letras são: ", twoCharsBeforeFirstPos)

*/

// Numeros

/*
const myNumber = 12.4832

Transformar número para string

const numberAsString = myNumber.toString()
console.log("Número transformado em string: ", typeof numberAsString)

Retorna número com um número de casas decimais

const fixedTwoDecimals = muNumber.toFixed(2)
console.log("\nNúmero com duas casas decimais: ", fixedTwoDecimals)

Transforma uma string em float
console.log("\nString parseada para float: ", parseFloat("13.22"))

Transforma uma string em int
console.log("\nString parseada para int: ", parseIn("13.20"))
*/