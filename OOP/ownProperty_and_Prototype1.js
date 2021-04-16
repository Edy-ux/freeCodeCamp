/* Observe que a propriedade do construtor é uma referência à função construtura que criou a instância.
 A vantagem da propriedade constructor é que é possível verificar essa propriedade para descobrir que 
 tipo de objeto ela é. Aqui está um exemplo de como isso poderia ser usado */

class Bird {
    constructor(name) {
            this.name = name //own property
            this.numLegs = 2
        }
        //methods here
        //more methods here
}


let duck = new Bird('some');
let beagle = new Dog('some2');

console.log(duck.constructor === Bird) //true
console.log(beagle.constructor === Dog) //true

function joinBirdFraternity(candidate) {
    if (candidate.constructor === Bird) {
        return true;
    } else {
        return false;
    }
}

// Mudar prototype para New Object

//Isso se torna tedioso depois de mais do que algumas propriedades.

Bird.prototype.eat = function() {
    console.log("nom nom nom");
}

Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
}

/* Uma maneira mais eficiente é definir o protótipo para um novo objeto que já contém as propriedades. Dessa forma, as propriedades são adicionadas todas de uma vez: */


/* Adicione a propriedade numLegs e os dois métodos eat () e describe () 
ao prototype de Dog definindo o prototype para um novo objeto.*/


function Bird(name) {
    this.name = name; //Own Property 
}

Bird.prototype = { //prototype
    nunLegs: 4,
    eat: function() {
        return console.log("mom mom mom")
    },
    describe: function() {
        return console.log("My mane is " + this.name)
    }
}

/* Há um defeito crucial ao definir manualmente os property para new Object. Ele apaga
 a propriedade constructor dessa propiedade. Essa propiedade pode ser usada p/ checar que função construtora ou Class criou a instancia, mas uma vez que property foi reescrita. Agora dar um resultado falso */

const beagle = new Bird('Twistk')

console.log(beagle.constructor === Bird)
console.log(beagle.constructor === Object)
console.log(beagle instanceof Bird)

//To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

Bird.prototype = {
    constructor: Bird,
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom");
    },
    describe: function() {
        console.log("My name is " + this.name);
    }
}