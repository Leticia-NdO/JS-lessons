// Objetos

/*
let user = {
    name: "Leticia"
}
console.log(user)

Alterando a propriedade de um objeto

user.name = "Outro nome";
console.log(user)
user["name"] = "Outro nome 2" 
console.log(user)


const prop = "name"
user[prop] = "Outro nome 3"
console.log(user)

Criando uma propriedade

user.lastName = "Neves de Oliveira"
console.log(user)

Deletando uma propriedade

delete user.name
console.log(user)
*/

// Funções de objeto

/*
const user = {
    name: "Leticia",
    lastName: "Neves de Oliveira"
}

Recupera as chaves de um objeto
console.log("propriedades do objeto user: ", Object.keys(user))

Recupera os valores das chaves do objeto
console.log("\nValores das propriedades do objeto user: ", Object.values(user))

Retorna um array de arrays contendo ['nome_prop', 'valor_prop']
console.log("\nLista de propriedades e valores: ", Object.entries(user))

Mergear propriedades de objetos
Object.assign(user, {fullName: "Leticia Neves de Oliveira"}) // isso não é o recomendado, pois não é bom mudar o objeto principal
console.log("\nAdicione a propriedade fullName no objeto user: ", user) 
console.log("\nRetorna um novo objeto mergeando dois ou mais objetos", Object.assign({}, user, {age: 19})) // o recomendado é criar um objeto novo com todas as propriedadex mergeadas

Previne todas as alterações em um objeto

const newObj = { foo: "bar"}
object.freeze(newObj)

newObj.foo = "changes"  // vai dar erro
delete newObj.foo       // vai dar erro
newObj.bar = "foo"

console.log("\nVariável newObj após alterações: ", newObj)

Permite apenas a alteraão de propriedades existentes em um objeto
const person = { name: "Leticia"}
Object.seal(person) // a diferença para o freeze, é que ele não permite que elementos sejam adicionados ou deletados, mas podem ser alterados.
*/