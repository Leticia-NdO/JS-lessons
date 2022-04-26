const array = [0, 1, 2, 3, 4, 5];

array.forEach(item => {
  if (item % 2 === 0) {   // se a seguinte condição for verdade
    console.log(`O número ${item} é par`); // esse bloco é executado
  } else {  // caso contrário
    console.log(`o número ${item} é impar`); // esse bloco é executado
  }
});


const array2 = [2, 3, 4, 5, 6, 8, 10, 15];

array.forEach(item => {
  if (item % 2 === 0) {
    console.log(`O número ${item} é divisível por 2`); // se esse bloco for false cai no debaxo
  } else if(item % 3 === 0) {
    console.log(`o número ${item} é divisível por 3`); // se esse bloco for false cai no debaxo
  } else if(item % 5 === 0) {
    console.log(`o número ${item} é divisível por 5`); // se esse bloco for false cai no debaxo
  } else{
      console.log(`O número ${item} é primo`)
  }
});