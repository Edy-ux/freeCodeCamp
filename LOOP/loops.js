/* Se você tiver uma matriz multidimensional, poderá usar a mesma lógica do waypoint 
anterior para percorrer tanto a matriz quanto quaisquer submatrizes. Aqui está um exemplo:
 */
/* Isso gera cada subelemento  no array, um de cada vez. Observe que, para o loop interno,
 estamos verificando o comprimento de arr [i], uma vez que arr[i] é em si um array */

const array = [
    [1, 2],
    [3, 4],
    [5, 6],
    [
        [{
            7: "seven",
            8: "eight"
        }],

        9, 10
    ],
    [11, 12]
]

for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }
}

//OU................
array.forEach(elem => elem.map(elem => console.log(elem)))
    // 1, 2 ,3, 4, 5, 6, [{7: "seven", 8: "eigth"}],9, 10 ,11 ,12

// RECURSIVIDADE
function multiplyAll(arr) {
    var product = 1;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            const allNmbersInArr = arr[i][j]
            console.log(allNmbersInArr)
            product *= allNmbersInArr
        }
    }
    return console.log(product)
}
multiplyAll([
        [1, 2],
        [3, 4],
        [5, 6]
    ]) //5040

//==============================arr and push(i)

var myArray = [];
var i = 5
while (i >= 0) {
    myArray.push(i)
    i--
}

//odd
var myArray = [];
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

// 
var ourArray = [];
for (var i = 1; i < 10; i++) {
    ourArray.push(i);
}

console.log(ourArray.join('').split("4"))

//DO WHILE
var ourArray = [];
var i = 4;
do {
    ourArray.push(i, "cheguei");
    i++;
} while (i < 5);

// RECURSIVIDADE
function multiply(arr, n) {

    if (n <= 0) { //CASO BASE
        return 1
    } else {
        return multiply(arr, n - 1) * arr[n - 1] //call
    }


}

const array = [10, 3, 4, 2]
const result = multiply(array, 4)

console.log(result) // 10 * 3 * 4 = 120


const countdown = i => {
    console.log(i)
    if (i <= 1) {
        return
    } // CASO BASE
    else { // caso recursivo
        countdown(i - 1)
    }
}

//Está é a chamada inicial da função.
countdown(5)


function countup(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countup(n - 1);
        console.log(n, countArray);
        countArray.push(n);
        return countArray;
    }
}
console.log(countup(5));