// let play = true


// make a class ship
class Ship {
    constructor(hull, firePower, accuracy) {
        this.hull = hull || 20
        this.firePower = firePower || 5
        this.accuracy = accuracy || .7
    }
    // choice
    choice(alien, USSAssembly) {
        // log.innerHTML = 'choice'
        // console.log(alien.alienShip.length)
        // console.log('inside choice')
        console.log(USSAssembly)
        alien.alienShip.length == 0 ? this.playerWin() : null

        let alienCounter = 0

        while (alienCounter < alien.alienShip.length) {
            alienCounter++
        }

        console.log(`There are ${alienCounter} alien ships!`)
        msg.innerHTML = `There are ${alienCounter} alien ships!` + '<br>'
        msg.innerHTML += `Click on an Alien ship to attack!` + '<br>'

        //   let ship = prompt(`Which ship do you want to attack? Please pick a number between 1 and ${alien.alienShip.length}`);
        console.log('\n')

        alienShipEl.addEventListener('click', alienDivShips)

        function alienDivShips(e) {

            Array.from(alienShipEl.children).forEach(x => x.style.color = "black")
            msg.innerHTML = ''
            if (e.target.tagName == "P") {

                e.target.style.color = "red"
                console.log(e.target)
                let str = e.target.innerHTML
                let result = str.match(/#(\d+)/)
                let ship = result[1]
                if (ship >= 1 && ship <= alien.alienShip.length) {
                    msg.innerHTML = "Attacking alien ship #" + ship
                    console.log("Attacking alien ship #" + ship)
                    USSAssembly.playerAttack(alien, USSAssembly, ship)
                } else {
                    log.innerHTML = `Please pick a number between 1 and ${alien.alienShip.length}`
                    console.log(`Please pick a number between 1 and ${alien.alienShip.length}`)
                    USSAssembly.choice(alien, USSAssembly)
                }
            }

            // log.innerHTML = `${e.target}`
        }


    } // end Choice
    // newGame
    newGame() {
        // log.innerHTML = 'newGame'
        const USSAssembly = new Ship()
        this.hull = 20
        // console.log('newGame')
        const alien = new Factory('Alien')
        // generate random alien ships
        alien.generateShip()

        console.log('Alien Status')
        console.log('**********************************************\n')
        for (let i = 0; i < alien.alienShip.length; i++) {
            console.log(`Alien ship #${i + 1}`)
            alienShipEl.innerHTML += `<p>Alien ship #${i + 1}</p>` + '<br>'

            console.log(alien.alienShip[i])
            alienShipEl.innerHTML += `(
            hull: ${alien.alienShip[i].hull} 
            firepower: ${alien.alienShip[i].firePower} 
            accuracy: ${alien.alienShip[i].accuracy})` + '<br><br>'

            console.log('\n')
        }
        console.log('**********************************************\n')
        this.choice(alien, USSAssembly)
    } // end newGame
    // playerAttack
    playerAttack(alien, USSAssembly, ship) {
        // log.innerHTML = 'playerAttack'
        // console.log('inside playerAttack')
        // console.log('ship' + ship)
        // decrement ship # to match index #
        ship--
        // console.log('ship' + ship)
        // console.log(USSAssembly)
        if (Math.random() < USSAssembly.accuracy) {
            // console.log('ship' + ship)
            msg.innerHTML += '<br>' + "You hit alien ship #" + (ship + 1) + " for 5 damange"
            console.log("You hit alien ship #" + (ship + 1) + " for 5 damange\n")
            // console.log(ship)
            alien.alienShip[ship].hull -= USSAssembly.firePower
            alien.alienShip[ship].hull <= 0 ? console.log('!!!!! Alien ship is destroyed !!!!!\n')
                : null

            alien.alienShip[ship].hull <= 0 ? alien.alienShip.splice(ship, 1)
                : null

            // console.log(alien)
            console.log('Player Status')
            console.log('**********************************************')
            console.log(USSAssembly)
            console.log('**********************************************\n')
            console.log('Alien Status')
            console.log('**********************************************\n')
            alienShipEl.innerHTML = ''
            for (let i = 0; i < alien.alienShip.length; i++) {
                // alienShipEl.innerHTML += `Alien ship #${i + 1}`
                // console.log(`Alien ship #${i + 1}`)
                // alienShipEl.innerHTML = alien.alienShip[i]
                // console.log(alien.alienShip[i])
                console.log(`Alien ship #${i + 1}`)
                alienShipEl.innerHTML += `<p>Alien ship #${i + 1}</p>` + '<br>'

                console.log(alien.alienShip[i])
                alienShipEl.innerHTML += `(
                    hull: ${alien.alienShip[i].hull} 
                    firepower: ${alien.alienShip[i].firePower} 
                    accuracy: ${alien.alienShip[i].accuracy})` + '<br><br>'

                console.log('\n')
            }
            console.log('**********************************************\n')
            // alien.alienShip.forEach(x => console.log('Alien') + console.log(x))
            // this.choice(alien, USSAssembly)


        } else {
            // console.log('ship' + ship)
            msg.innerHTML += '<br>' + 'Your attack missed!'
            console.log("Your attack missed!")
            // console.log(alien)
            // this.choice(alien)
            // console.log('ship' + ship)
            // this.alienAttack(alien, USSAssembly, ship)
        }


    } // end playerAttack
    // alienAttack
    alienAttack(alien, USSAssembly, ship) {
        console.log('inside alien attack')
        console.log('\n')
        console.log('Warning!!! Incoming alien attack!!!')
        // console.log('ship' + ship)
        if (Math.random() < alien.alienShip[ship].accuracy) {

            console.log('\n')
            // console.log(alien.alienShip[0].firepower)
            console.log(`You got hit by alien ship for ${alien.alienShip[ship].firePower} damange!!!\n`)
            USSAssembly.hull -= alien.alienShip[ship].firePower
            // console.log('USSAssembly Ship Status')
            // console.log(USSAssembly)
            console.log('Player Status')
            console.log('**********************************************')
            console.log(USSAssembly)
            console.log('**********************************************\n')
            for (let i = 0; i < alien.alienShip.length; i++) {
                console.log(`Alien ship #${i + 1}`)
                console.log(alien.alienShip[i])
                console.log('\n')
            }
            console.log('**********************************************\n')
            USSAssembly.hull <= 0 ? this.playerLost()
                : null

            // console.log(alien)
            this.choice(alien, USSAssembly)
            alien.alienShip.forEach(x => console.log(x))

        } else {
            console.log("Alien missed!!!")
            // console.log(alien)
            // this.choice(alien)
            console.log('ship' + ship)
            ship++
            this.playerAttack(alien, USSAssembly, ship)
        }

    } // end alienAttack
    // playerWin
    playerWin() {
        console.log('********** You Win **********')
        this.playAgain()

    } // end playerWin
    // playerLost
    playerLost() {
        console.log('***** Your ship has been destroyed *****')
        console.log('You Lost')
        this.playAgain()
    } // end playerLost
    // playAgain - Bonus Bonuses
    playAgain() {
        let play = prompt("Would you like to play again?\nPress (Y/Yes) to play again.\nPress any key to exit.")
        play.toLocaleLowerCase
        if (play == 'y' || play == 'yes') {

            this.newGame()
        } else {
            this.gameOver()
        }
    } // end playAgain
    // gameOver
    gameOver() {
        console.log('Game Over. Thanks For Playing')
        play = false
        process.exit()
    } // end gameOver

}

// alien ship factory
class Factory {
    constructor(alien) {
        this.alien = alien
        this.alienShip = []
    }
    generateShip() {
        let counter = 1
        // bonus - The aliens send a random number of ships to attack Earth. Think of a reasonable range and implement it. Creating between 4-8 alien ships.
        let numShips = Math.floor(Math.random() * (6) + 4)

        // generate alien ships
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

// alienDiv.addEventListener('click', alienDivShips)

// function alienDivShips(x) {
//     console.log(e.target.innerText)
// }

// create player
const USSAssembly = new Ship()
console.log('Player Ship: USSAssembly\n')
console.log('Player Status')
console.log('**********************************************')
console.log(USSAssembly)
console.log('**********************************************\n')

var titleEl = document.querySelector('.title')
titleEl.innerHTML = "Space Battle"

var playerStatusEl = document.querySelector('.playerStatus')
playerStatusEl.innerHTML = 'Player Status'
var playerDiv = document.querySelector('.playerDiv')

var alienStatus = document.querySelector('.alienStatus')
alienStatus.innerHTML = 'Alien Status'
var alienShipEl = document.querySelector('.alienShip')
var alienShips = document.createElement('p')

var msg = document.querySelector('.message')
var log = document.querySelector('.log')
var msgP = document.createElement('p')


// var alienDiv = document.querySelector('.alienDiv')

let playerName = document.createElement('p')
var playerShip = document.createElement('P')

playerName.innerHTML = 'Player Ship: USSAssembly'
playerShip.innerHTML = `(hull: ${USSAssembly.hull} firepower: ${USSAssembly.firePower} accuracy: ${USSAssembly.accuracy})`
playerDiv.appendChild(playerName)
playerDiv.appendChild(playerShip)
// start new game
USSAssembly.newGame()


// newGame(USSAssembly)
// newGame1(USSAssembly)

