let n = 5;

if (n <= 1){
  console.log("N precisa ser maior que 2");
}else{
  // faz um quadrado de nxn
  for (let i = 1; i < n; i += 1){
    console.log("*".repeat(n));
  }
  console.log();
  // faz um triângulo equilátero de n
  for (let j = 1; j < n; j += 1){
    console.log("*".repeat(j));
  }

}