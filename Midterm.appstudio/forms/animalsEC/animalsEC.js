myAnimals = ['dog', 'cat', 'horse', 'meerkat']
newAnimal = prompt("Type an animal or 'STOP' to end the program")

while (newAnimal!='STOP'){
  myAnimals.push(newAnimal.toLowerCase())
  newAnimal = prompt("Type an animal or 'STOP' to end the program")
}

lastAnimal=myAnimals[myAnimals.length-1]
console.log(`The last animal is a/an ${lastAnimal}.`)