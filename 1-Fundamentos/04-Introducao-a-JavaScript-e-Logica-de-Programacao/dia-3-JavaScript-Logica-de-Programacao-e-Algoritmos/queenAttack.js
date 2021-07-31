let rainha = [4,4]; //rainha[0] = linha e rainha[1]=coluna
let peca = [1,4];
let statusAtaque = false;

if (rainha[0] === peca[0] || rainha[1] === peca[1]) { //se não estiver na mesma linha ou coluna
    statusAtaque = true;
}


console.log(statusAtaque);