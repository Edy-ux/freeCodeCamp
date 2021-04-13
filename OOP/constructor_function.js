/*  Constructors follow a few conventions:

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
Constructors use the keyword this to set properties of the object they will create. Inside the constructor, this refers to the new object it will create.
Constructors define properties and behaviors instead of returning a value as other functions might. */

function Dog() {
    this.name = "Rupert"
    this.color = "brown"
    this.numLegs = 4
}

const newDog = new Dog()
console.log(newDog)

/* NOTE: this inside the constructor always refers to the object being created. */

/* The Bird and Dog constructors from the last challenge worked well. However, notice that all Birds that are created with the Bird constructor are automatically named Albert, are blue in color, and have two legs. What if you want birds with different values for name and color? It's possible to change the properties of each bird manually but that would be a lot of work: */

/* Eles agrupam objetos com base em características e comportamentos compartilhados e definem um projeto(planta, blueprint) que automatiza sua criação. */

function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
}
const terrier = new Dog('Tierri', 'blue')
console.log(terrier)

//terrier intanceof Dog verifica se o Objeto terrier foi uma instancia de Dog, a parti de um construtor 

console.log(terrier instanceof Dog)
    //=============================================



/* Observe que a propriedade do construtor é uma referência à função construtura que criou a instância. A vantagem da propriedade constructor é que é possível verificar essa propriedade para descobrir que tipo de objeto ela é. Aqui está um exemplo de como isso poderia ser usado */

let duck = new Bird();
let beagle = new Dog();

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

Bird.prototype = {
    numLegs: 2,
    eat: function() {
        console.log("nom nom nom")
    },
    describe: function() {
        console.log("My name is " + this.name)
    }
}