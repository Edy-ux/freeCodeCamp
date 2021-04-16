/* Assim como as pessoas herdam genes de seus pais, um objeto herda seu protótipo diretamente da função construtora que o criou. Por exemplo, aqui o construtor Bird cria o objeto duck */


function Bird(name) {
    this.name = name;
}

let duck = new Bird("Donald")

//isPrototypeOf() Determina se um objeto existe na cadeia de protótipo de outro objeto. 
console.log(Bird.prototype.isPrototypeOf(duck))

//Entenda a cadeia de protótipos: Prototype chain