let myAnimals = ['dog', 'cat', 'horse', 'meerkat']
let newAnimal = prompt("Type an animal or 'STOP' to end the program")

myAnimals.push(newAnimal.toLowerCase())

let lastAnimal=myAnimals[myAnimals.length-1]
console.log(`The last animal is a/an ${lastAnimal}.`)