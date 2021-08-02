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
console.log();

let info2 = {
  personagem: 'Margarida',
  origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

console.log("Ultimo exercicio:");

for (key in info){
    if (key=='recorrente' && info[key] == info2[key]){
      console.log("Ambos recorrentes");  
    }else{
      console.log(info[key] + " e " + info2[key]);
    }
}