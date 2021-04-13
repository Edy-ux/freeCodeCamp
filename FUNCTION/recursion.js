function loop(x) {

    if (x == 0) // "x >= 10" is the exit condition (equivalent to "!(x < 10)")
        return 1;
    else
        return x * loop(x - 1) // the recursive call
}

console.log(loop(9))

function recursiveFatorial(x) {
    if (x == 0)
        return 0;
    else
        return x * recursiveFatorial(x - 1);
}

console.log("Resultado da funcao recursiveFatorial: ", recursiveFatorial(5)); ///5*4*3*2*1 *


function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));