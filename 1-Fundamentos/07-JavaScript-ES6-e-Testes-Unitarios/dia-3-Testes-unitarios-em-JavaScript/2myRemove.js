const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemove([1,2,3,4],3),[1,2,4]); //é necessário verificar os itens dentro dos arrays e seus tipos para determinar se o resultado é igual.
assert.notDeepStrictEqual(myRemove([1,2,3,4],3),[1,2,3,4]);

const toCheck = [1,2,3,4];
assert.fail(myRemove(toCheck,3), toCheck, 'O array sofreu alteração');
assert.deepStrictEqual(myRemove(toCheck,3),toCheck);
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5),toCheck);