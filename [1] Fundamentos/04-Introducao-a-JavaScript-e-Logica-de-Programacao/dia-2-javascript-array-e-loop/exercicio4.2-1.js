let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
for (let numb of numbers) {
  console.log(numb);
  soma = soma + numb;
}

console.log("soma total: " + soma);