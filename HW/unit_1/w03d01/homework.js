class Hamster {
    constructor(name) {
      this.owner = ''
      this.name = name
      this.price = 15
    }
    wheelRun() {
      console.log('squeak squeak')
    }
    eatFood() {
      console.log('nibble nibble')
    }
    getPrice() {
      return this.price
    }
  }

  // create person class ----------------------------------------------------------------------------------
  class Person {
    constructor(name)   
    {
      this.name = name //'john'
      this.age = 0 
      this.height = 0
      this.weight = 0
      this.mood = 0
      this.hamsters = []
      this.bankAccount = 0
  }
  getName() {
    return this.name
  }
  getAge() {
    return this.age
  }
  getWeight() {
    return this.weight
  }
  greet () {
    console.log ('My name is ' + this.name)
  }
  eat () {
    this.weight++
    this.mood++
  }
  exercise() {
    this.weight--
  }
  ageUp () {
    this.age++
    this.height++
    this.weight++
    this.mood--
    this.bankAccount += 10
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster)
    this.mood += 10
    //get the price of the hamster
    //subtract the price of the hamster from bankaccount
  this.bankAccount -= hamster.getPrice()
  }
  }

  // Create a Story with your Person class ----------------------------------------------------------------------------------
//1. Instantiate a new Person named Timmy
  const p1 = new Person('Timmy')

// 2. Age Timmy five years
let ageCounter = 0;
while (ageCounter <5) {
  p1.ageUp();
  ageCounter++
}

// 3. At this point Timmy's a little bummed. As a precocious child, he feels he's "seen it all" already. Have him eat five times.
let eatCounter = 0;
while (eatCounter < 5) {
  p1.eat();
  eatCounter++
}

// 4. Now Timmy's a little heavier than he wants to be. Kindergarten's coming up and he wants to look good. Have him exercise five times
let exCounter = 0;
while (exCounter < 5) {
  p1.exercise();
  exCounter++
}

// 5. Age Timmy 9 years
ageCounter = 0;
while (ageCounter < 9) {
  p1.ageUp();
  ageCounter++
}

// 6. Create a hamster named "Gus"
const ham1 = new Hamster('Gus');

// 7. Set Gus's owner to the string "Timmy"
ham1.owner = 'Timmy'

// 8. Have Timmy "buy" Gus
p1.buyHamster(ham1)

// 9. Age Timmy 15 years
ageCounter = 0;
while (ageCounter < 15) {
  p1.ageUp();
  ageCounter++
}

// 10. Have Timmy eat twice
eatCounter = 0;
while (eatCounter < 2) {
  p1.eat();
  eatCounter++
}

// 11. Have Timmy exercise twice
exCounter = 0;
while (exCounter < 2) {
  p1.exercise();
  exCounter++
}

// Result
console.log(p1);

// Chef Make Dinners -------------------------------------------------------------------------------------------------------------
class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  createDinner(appetizer, entree, dessert) {
    return new Dinner(appetizer, entree, dessert);
  }
}

const chef = new Chef();

const dinner1 = chef.createDinner("Salad", "Steak", "Cheesecake");
const dinner2 = chef.createDinner("Soup", "Fish", "Ice Cream");
const dinner3 = chef.createDinner("Fruit", "Chicken", "Brownie");

console.log(dinner1);
console.log(dinner2);
console.log(dinner3);

