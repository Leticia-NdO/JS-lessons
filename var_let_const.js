// Var, let e const

// o var não respeita escopo de bloco, só global e de função:

var test = "exemplo";

(() => {
    console.log(`Valor dentro da função ${test}`)  // dentro da função, a variável declarada no escopo global é ignorada. E essa variável tá sendo içada do bloco if

    if (true){
        var test = "exemplo2"  // essa variável foi declarada dentro do bloco if, mas ainda funciona dentro da função. Isso porque o var ignora o escopo do bloco
        console.log(`Valor dentro do if ${test}`)
    }

    console.log(`Valor após a execução do if ${test}`)
})()

console.log(test); // aqui, não vale a variável declarada dentro do if na função, e sim a global


console.log('-----------------');
// escopo com o let

(()=>{
    let test2 = 'valor função';
    console.log(`Valor dentro da função "${test2}"`)
    
    if (true){
        let test2 = "valor if"                          // o let respeita o escopo de bloco, então esse let só vale dentro do bloco if
        console.log(`Valor dentro do if "${test2}"`)
    }

    console.log(`Valor após a execução do if "${test2}"`)  // fora, vale o let da função
})()