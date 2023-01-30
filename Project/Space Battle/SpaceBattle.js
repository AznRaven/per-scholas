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
        log.innerHTML = `hull: ${USSAssembly.firePower}  firepower: ${USSAssembly.firePower}`
        // console.log(alien.alienShip.length)
        // console.log('inside choice')
        console.log(USSAssembly)
        alien.alienShip.length == 0 ? this.playerWin() : null

        let alienCounter = 0
        // alienShips.innerHTML = 'hello'
        while (alienCounter < alien.alienShip.length) {
            alienCounter++
        }
        // let msg = document.querySelector('.message')
        // var msgP = document.createElement('p')
        msgP.innerHTML = `There are ${alienCounter} alien ships!`
        msgP.innerHTML += '<br>'
        msgP.innerHTML += `Click on an alien ship to attack!` + '<br>'
        msg.appendChild(msgP)
        console.log(`There are ${alienCounter} alien ships!`)

        // let ship = prompt(`Which ship do you want to attack? Please pick a number between 1 and ${alien.alienShip.length}`);
        alienDiv.addEventListener('click', alienDivShips)

        function alienDivShips(e) {
            let str = e.target.innerHTML;
            // console.log(str)
            let ship = str.match(/#(\d+)/)[1];
            // console.log('choice ' + ship);
            // console.log(index);

            if (e.target.tagName == 'P') {
                console.log(e.target)
            } else {
                return
            }
            console.log(e.target.innerText)
            msgP.innerHTML = '<br>' + `Attacking ${e.target.innerText}`

            if (ship >= 1 && ship <= alien.alienShip.length) {
                console.log("Attacking alien ship #" + ship)
                USSAssembly.playerAttack(alien, USSAssembly, ship)
            } else {
                console.log(`Please pick a number between 1 and ${alien.alienShip.length}`)
                this.choice(alien, USSAssembly)
            }
        }

        // if (ship >= 1 && ship <= alien.alienShip.length) {
        //     console.log("Attacking alien ship #" + ship)
        //     this.playerAttack(alien, USSAssembly, ship)
        // } else {
        //     console.log(`Please pick a number between 1 and ${alien.alienShip.length}`)
        //     this.choice(alien, USSAssembly)
        // }

    } // end Choice
    // newGame
    newGame() {

        const USSAssembly = new Ship()
        this.hull = 20
        const alien = new Factory('Alien')
        // alienShips.innerHTML = 'hi'
        // generate 6 aliens
        alien.generateShip()
        // console.log('after new game')
        // console.log(alien)
        // console.log('Alien Status')
        // console.log('**********************************************\n')
        // var alienDiv = document.querySelector('.alienShip')
        for (let i = 0; i < alien.alienShip.length; i++) {
            // let alienShips = document.createElement('p')
            // alienDiv.innerHTML +=   `hi ${i}`
            // alienShips.classList.add('alienShip', `a${i}`)
            alienShips.innerHTML += `Alien Ship #${i + 1} - `
            alienShips.innerHTML += `(hull: ${alien.alienShip[i].hull} firepower: ${alien.alienShip[i].firePower} accuracy: ${alien.alienShip[i].accuracy})` + '<br><br>'
            console.log(alienShips)

            alienDiv.appendChild(alienShips)
        }
        // console.log('**********************************************\n')


        // playerShip.innerHTML = 'hello'
        this.choice(alien, USSAssembly)
    } // end newGame
    // playerAttack
    playerAttack(alien, USSAssembly, ship) {
        // console.log('inside playerAttack')
        // console.log('ship' + ship)
        // decrement ship # to match index #
        ship--
        // console.log('ship' + ship)
        // console.log(USSAssembly)

        if (Math.random() < USSAssembly.accuracy) {
            // console.log('ship' + ship)
            console.log("You hit alien ship #" + (ship + 1) + " for 5 damange\n")
            // console.log(ship)
            alien.alienShip[ship].hull -= USSAssembly.firePower
            alien.alienShip[ship].hull <= 0 ? console.log('!!!!! Alien ship is destroyed !!!!!\n')
                : null



            msgP.innerHTML += '<br>' + '!!!!! Alien ship is destroyed !!!!!'

            while (alienDiv.firstChild) {
                alienDiv.removeChild(alienDiv.firstChild);

            }
            // console.log(alienDiv)
            // let alienDelete = '.a' + String(ship)
            // let child = document.querySelector(alienDelete);
            // child.remove()
            // let alienDiv = document.querySelector('.alienShip')

            // console.log(alienShips.innerHTML)
            for (let i = 0; i < alien.alienShip.length; i++) {
                // console.log('hi')
                if (alien.alienShip[i].hull == 0) {
                    
                    continue
                } else {
                    let alienShips = document.createElement('p')
                    alienShips.classList.add('alienShip', `a${i}`)
                    alienShips.innerHTML = `Alien Ship #${i + 1} - `
                    alienShips.innerHTML += `(hull: ${alien.alienShip[i].hull} firepower: ${alien.alienShip[i].firePower} accuracy: ${alien.alienShip[i].accuracy})`
                }

                console.log(alienShips)

                alienDiv.appendChild(alienShips)
            }

            console.log('log alien')
            console.log(alien)

            alien.alienShip[ship].hull <= 0 ? alien.alienShip.splice(ship, 1)
                : null

            // console.log(alien)
            console.log('Player Status')
            console.log('**********************************************')
            console.log(USSAssembly)
            console.log('**********************************************\n')
            console.log('Alien Status')
            console.log('**********************************************\n')
            for (let i = 0; i < alien.alienShip.length; i++) {
                // alienShips.innerHTML = `Alien ship #${i + 1}`
                alienShips.innerHTML = `Alien Ship #${i + 1} - `
                alienShips.innerHTML += `(hull: ${alien.alienShip[i].hull} firepower: ${alien.alienShip[i].firePower} accuracy: ${alien.alienShip[i].accuracy})`

                console.log(`Alien ship #${i + 1}`)
                console.log(alien.alienShip[i])
                console.log('\n')
            }
            console.log('**********************************************\n')
            // alien.alienShip.forEach(x => console.log('Alien') + console.log(x))
            this.choice(alien, USSAssembly)


        } else {
            // console.log('ship' + ship)
            console.log("You missed")
            // console.log(alien)
            // this.choice(alien)
            // console.log('ship' + ship)
            this.alienAttack(alien, USSAssembly, ship)
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

var title = document.querySelector('.title')
title.innerHTML = "Space Battle"

var playerStatus = document.querySelector('.playerStatus')
playerStatus.innerHTML = 'Player Status'
var playerDiv = document.querySelector('.playerDiv')

var alienStatus = document.querySelector('.alienStatus')
alienStatus.innerHTML = 'Alien Status'
var alienDiv = document.querySelector('.alienShip')
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

