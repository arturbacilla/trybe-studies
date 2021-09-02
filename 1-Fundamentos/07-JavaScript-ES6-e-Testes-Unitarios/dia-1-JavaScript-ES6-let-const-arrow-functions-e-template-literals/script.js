// PARTE I
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope}  ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(`${elseScope} ótimo, fui utilizada no escopo !`);
  }
  // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//referencia em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortedArray = oddsAndEvens.sort(function (a,b) {
  return a - b
});

console.log(`Os números ${sortedArray.join()} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha �

//PARTE 2
//1
//ref https://stackoverflow.com/questions/25228394/how-do-i-write-an-arrow-function-in-es6-recursively
const fatorial = (num) => (num >= 0 && num < 2) ? 1 : num*fatorial(num-1) ;
console.log(fatorial(1));

//2

const longestWord = (phrase) => {
  const countArray = [];
  const wordsToCheck = phrase.split(' ');
  wordsToCheck.forEach(word => {
    countArray.push(word.length);
  });
  const biggerCount = Math.max.apply(countArray);
  return biggerCount;
}
console.log(longestWord("Antônio foi no banheiros e não sabemos o que aconteceu"));
