/* As propriedades próprias são definidas diretamente na própria instância do objeto.
 E as propriedades do protótipo são definidas no protótipo */


//Understand Own Properties

class Bird {
    constructor(name) {
            this.name = name //own property
            this.numLegs = 2
        }
        //methods here
        //more methods here
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");

const ownProps = []

for (const property in duck) {
    if (Object.hasOwnProperty.call(duck, property)) {
        const element = duck[property]
        ownProps.push(element)
    }
}
console.log(ownProps)


//Iterate Over All Properties

function Dog(name) {
    this.name = name;
}
//prototype properties
Dog.prototype.numLegs = 4; //prototype

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}

console.log(ownProps);
console.log(prototypeProps);