// Space Battle Project

// make a class ship
class Ship {
    constructor(hull, firePower, accuracy) {
        this.hull = hull || 20
        this.firePower = firePower || 5
        this.accuracy = accuracy || .7
    }
    attack() {}
}

const USSAssembly = new Ship()
console.log(USSAssembly)

let alienHull = Math.floor(Math.random(3,6)*6)
let alienFirePower = Math.random(2,4)
let alienAccuracy = (Math.random(.6,.8)*.9).toFixed(1)

const alien1 = new Ship(alienHull, alienFirePower, alienAccuracy)
const alien2 = new Ship(alienHull, alienFirePower, alienAccuracy)
const alien3 = new Ship(alienHull, alienFirePower, alienAccuracy)
const alien4 = new Ship(alienHull, alienFirePower, alienAccuracy)
const alien6 = new Ship(alienHull, alienFirePower, alienAccuracy)
console.log(alien1)

// make a ship factory will pop out 6 aliens and your ship
// set each alien properties using random
// set your own ship properties
// play the game