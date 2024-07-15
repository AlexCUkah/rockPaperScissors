const input = require("prompt-sync")()

/// Rock, Paper and Scissors Game
// Create dictionairy
// Key beats value
// computer randomly selects Key
// User selects key
// if user wins print user wins,
// else if user and computer have the same draw
//else user loses and computer wins

const rockPaperScissors = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

keyDict = Object.keys(rockPaperScissors)



function computerRandom(key){
    let randomChoice = Math.floor(Math.random() * key.length)
    return key[randomChoice].toLowerCase()
}


function checkResult(computerChoice,userChoice){
    console.log(`Your choice was: ${userChoice} and the computer picked: ${computerChoice} `)
    if (rockPaperScissors[computerChoice] === userChoice.toLowerCase()){
        console.log(`You lose ${computerChoice} beats ${userChoice}`)
        return false
    }
    else if(computerChoice === rockPaperScissors[userChoice]){
        console.log(`you win ${userChoice} beats ${computerChoice}`)
        return true
    }
    else{
        console.log("its a draw")
        return null
    }

}

function printScore(humanScore,computerScore){
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
}

function restart(prompt){
    let restartGame= prompt("Do you want to play again? y/n ").toLowerCase()
    if(restartGame !== "y") {
        console.log("Thank you for playing bye")
     return false
    }
    return true
}

function main(prompt) {
    let gameStart = true
    console.log("welcome to Rock, paper, scissors")
    let rounds = 1
    let humanScore = 0
    let computerScore = 0
    while (gameStart) {
        console.log(`Round: ${rounds} `)
        if (rounds === 4){
            console.log("FINAL ROUND")
        }
        printScore(humanScore,computerScore)
        let userChoice = prompt("Rock, Paper or Scissors? ").toLowerCase()
        if (!keyDict.includes(userChoice)) {
            console.log("Invalid pick rock, paper or scissors ")
            continue;
        }
        let computerChoice = computerRandom(keyDict)
        let resultChecker= checkResult(computerChoice,userChoice)
        if (resultChecker === true) {
            humanScore += 1
        } else if (resultChecker === false) {
            computerScore += 1
        }
        rounds += 1
        if(rounds === 5){
            console.log("This game only lasts 5 rounds thank you for playing bye")
            printScore(humanScore,computerScore)
            break
        }

        let restartGame = restart(prompt)
        if (!restartGame){
            printScore(humanScore,computerScore)
            gameStart = false

        }
    }
}

main(input)