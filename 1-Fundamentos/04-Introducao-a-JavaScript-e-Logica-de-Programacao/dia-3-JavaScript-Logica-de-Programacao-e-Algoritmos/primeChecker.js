let numb = 20934657;
let divisores = [];

const timeStart = new Date().getTime()

if (numb < 0){
  console.log("O número selecioando deve ser inteiro e positivo");

} else {

for (let i = 1; i <= numb; i++) {
  if ((numb % i) === 0){
    divisores.push(i);
  };
};

console.log(divisores);

if (divisores.length <= 2) {
  console.log("O número " + numb + " é primo.");
  } else {
  console.log("O número " + numb + " não é primo.")
};

const timeEnd = new Date().getTime();
let duration = timeEnd - timeStart;
console.log("Tempo necessário para o cálculo: " + duration + "ms");

}