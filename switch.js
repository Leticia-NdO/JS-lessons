const fruit = 'pera';

switch (fruit) {   // se o valor dessa constante
  case 'banana': // é esse
    console.log('R$ 3,00 / KG')  // então esse bloco é executado
    break;
  case 'mamão':   // se for esse
  case 'pera':    // ou esse
    console.log('R$ 2,00 / KG')  // então esse bloco é executado
    break;
  default:  // caso não for nenhuma das opções anteriores
    console.log('Produto não existe no estoque'); // Esse bloco é executado
    break;
}