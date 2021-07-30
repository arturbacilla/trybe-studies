let n = 5;

if (n <= 1){
  console.log("N precisa ser maior que 2");
}else{
  // faz um quadrado de nxn
  for (let i = 0; i < n; i += 1){
      console.log("*".repeat(n));
  }
}