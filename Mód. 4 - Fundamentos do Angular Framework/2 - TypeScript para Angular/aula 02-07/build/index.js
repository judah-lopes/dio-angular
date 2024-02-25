"use strict";
/*--------- GENERICS ---------*/
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3]);
const stgArray = concatArray(["Pedro", "Judah"], ["Lopes"]);
numArray.push('Indiozinhos');
console.log(numArray);
console.log(stgArray);
