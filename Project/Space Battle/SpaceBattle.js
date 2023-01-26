// Space Battle Project

// make a class ship
class Ship {
    constructor(hull, firePower, accuracy) {
      this.hull = hull || 20
      this.firePower = firePower || 5
      this.accuracy = accuracy || .7
    }
    attack() { }
  }
  // alien ship factory
  class Factory {
    constructor(alien) {
      this.alien = alien
      this.alienShip = []
    }
    generateShip(numShips) {
      let counter = 1
      
      while (counter <= numShips) {
        let hull = Math.floor(Math.random() * (4) + 3)
        let firePower = Math.floor(Math.random() * (3) + 2)
        let accuracy = Number(((Math.random() * (2) + 6) / 10).toFixed(1))
  
        const newShip = new Ship(hull, firePower, accuracy)
        this.alienShip.push(newShip)
        counter++
      }
  
    }
    findShip(index) {
      return this.alienShip[index]
    }
  }
  
  // new alien factory
  const alien = new Factory('Alien')
  
  // generate 6 aliens
  alien.generateShip(6)
  console.log(alien)
  console.log(alien.alienShip[3])
  
  // create player
  const USSAssembly = new Ship()
  console.log(USSAssembly)
  
  console.log("There are 6 alien ships!")
  
  // play the game
  