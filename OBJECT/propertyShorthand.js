//Write Concise Object Literal Declarations Using Object Property Shorthand

const getMousePosition = (x, y) => ({ x, y })

console.log(getMousePosition(19, 19))


const createPerson = (name, age, gender) => ({
    name,
    age,
    gender

})

const Person = createPerson("Zodiac Hasbro", 56, "male")

console.log(Person) //{ name: 'Zodiac Hasbro', age: 56, gender: 'male' }