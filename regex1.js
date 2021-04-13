//TODO
const str = "Para maiores informações, veja o Capítulo 3.4.5.1"
const re = /(capítulo \d+(\.\d)*)/i
const found = str.match(re)

console.log(found)

// retorna ["Capítulo 3.4.5.1"],
/* "Capítulo 3.4.5.1",
".1",
index: 33,
    input: "Para maiores informações, veja o Capítulo 3.4.5.1"] */

// "Capítulo 3.4.5.1" é a primeira correspondência e o primeiro valor
//  capturado a partir de (capítulo\d+(\.\d)*). 
// ".1" é o útlimo valor de (\.\d).
// A propriedade "index" (33) é o índice de base zero da correspôndencia inteira.
// A propriedade "input" é a string original que foi analisada.

const str = 'Ednei'
const NameRegex = /dne/
console.log(NameRegex.test(str)) // true
console.log(NameRegex.test(str)) // true
console.log(str.match(NameRegex)) //["dni" , index: 1, input: "Ednei, ...."]

/* Use uma classe de caracteres com vogais (a, e, i, o, u) em seu regex vowelRegex para encontrar todas as vogais na string quoteSample. */
const quoteSample = "Beware of bugs in the above code I have only proved it correct, not tried it.";
const vowelRegex = /[aeiou]/gi
const result = quoteSample.match(vowelRegex)
console.log(result) //result 
    /* ['e', 'a', 'e', 'o', 'u', 'i',
    'e', 'a', 'o', 'e', 'o', 'e',
    'I', 'a', 'e', 'o', 'o', 'e',
    'i', 'o', 'e', 'o', 'i', 'e','i' ] */

//retornando todas os caracteres do alfabeto
const quoteSample = "The quick brown fox jumps over the lazy dog."
const alphabetRegex = /[a-z]/ig
const result = quoteSample.match(alphabetRegex)
console.log(result.sort())
    //Array
const result2 = result.filter((elem, index, arr) => {
        return arr.indexOf(elem) === index
    })
    //Destructions retirando primeto elem do array result
const [, ...result3] = result2
console.log(result3)

// é possível combinar uma série de letras e números em um único conjunto de caracteres
let quoteSample = "Blueberry 3.141592653s are delicious."
let myRegex = /[h-s0-5]/gi // de h á s, de 0 a 5
let result = quoteSample.match(myRegex)

console.log(result)


/* Para criar um conjunto de caracteres negado, coloque um caractere circunflexo (^) após o colchete de abertura e antes dos caracteres que não deseja corresponder. */

/* . Note que caracteres como  [., !, [, @, ]  e espaço em branco são combinados - o conjunto de carateres de negação apenas exclui vogais não combinadas */
let quoteSample = "3 blind mice."
let myRegex = /[^aeiouu0-9]/ig // caracter de negação
let result = quoteSample.match(myRegex) // Change this line

console.log(result)

// MATCH CARACTHERS THAT OCCUR ONE OR MORE TIME

/* Por exemplo, / a + / g encontraria uma correspondência em abc e retornaria ["a"]. Por causa do +, ele também encontraria uma única correspondência em aabc e retornaria ["aa"]. */

let difficultSpelling = "Mississippi"
let myRegex = /s+/gi
let result = difficultSpelling.match(myRegex)

console.log(result)