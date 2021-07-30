let n = 7;

if (n <= 1){
  console.log("N precisa ser maior que 2");
}else{
  // faz um quadrado de nxn
  for (let i = 1; i < n+1; i += 1){
    console.log("*".repeat(n));
  };
  console.log();
  // faz um triângulo equilátero de n
  for (let j = 1; j < n+1; j += 1){
    console.log("*".repeat(j));
  };
  console.log();
  // faz um triângulo equilátero de n invertido
  for (let k = 1; k < n+1; k += 1){
    console.log(" ".repeat(n-k) + "*".repeat(k));
  };
  console.log();
  // faz uma pirâmide com base n
  for (let k = 1; k < n+1; k += 2){
    console.log(" ".repeat((n-k)/2) + "*".repeat(k) + " ".repeat((n-k)/2));
  };
  console.log(); 
  // faz uma pirâmide ôca com base n
  for (let f = 1; f < n+1; f += 2){
    if (f==1){
      console.log(" ".repeat((n-1)/2) + "*" + " ".repeat((n-1)/2));
    }else if(f==n){
      console.log("*".repeat(n));
    }else{
      console.log(" ".repeat((n-f)/2) + "*" + " ".repeat(f-2) + "*" + " ".repeat((n-f)/2));
    }
  };

}