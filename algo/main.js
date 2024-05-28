function twoSum(array, target) {
    let numIndices = new Map(); // je créer un objet pour pouvoir savoir ce qui a deja été utiliser
    for (let indice = 0; indice < array.length; indice++) {
        let complement = target - array[indice];
        if (numIndices.has(complement)) {
            return [numIndices.get(complement), indice];
        }
        numIndices.set(array[indice], indice);
    }
}


let nums = [2, 7,11,15];
let target = 9;
let result = twoSum(nums, target);
console.log(result); 


