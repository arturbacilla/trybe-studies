let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log("Bem vinda, " + info.personagem + "\n\nChaves:");

//mostra todas as chaves
for (chaves in info){
  console.log(chaves);
};
console.log("\nValores das chaves:")
//mostra todas os valores das chaves
for (let chaves in info){
  console.log(info[chaves]);
};