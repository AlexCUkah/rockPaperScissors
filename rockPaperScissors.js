const input = require("prompt-sync")()

/** Rock, Paper and Scissors Game
 Create dictionary
 Key beats value
 Computer randomly selects Key
 User selects key
 If user wins print user wins,
 Else if user and computer have the same draw
 Else user loses and computer wins
*/

const rockPaperScissors = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"
}

// Keys of rockPaperScissors dictionary
let keyDict = Object.keys(rockPaperScissors)



function computerRandom(key){
    // Gives the computer a random choice between rock, paper or scissors
    let randomChoice = Math.floor(Math.random() * key.length)
    return key[randomChoice].toLowerCase()
}


function checkResult(computerChoice,userChoice){
    // Checks both user and computer choice, to determine the winner
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

function gameWon(humanScore,computerScore){
    if (humanScore === 5|| computerScore === 5 ){
        return true
    }
}

function printScore(humanScore,computerScore){
    // displays the score of both the user and the computer
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`)
}

function restart(prompt){
    // gives the user the choice to replay the game
    let restartGame= prompt("Do you want to play again? y/n ").toLowerCase()
    if(restartGame !== "y") {
        console.log("Thank you for playing bye")
     return false
    }
    return true
}

function main(prompt) {
    // Rock paper, scissors game functionality
    let gameStart = true
    console.log("welcome to Rock, paper, scissors")
    let humanScore = 0
    let computerScore = 0
    while (gameStart) {
        printScore(humanScore, computerScore)
        let userChoice = prompt("Rock, Paper or Scissors? ").toLowerCase()
        if (!keyDict.includes(userChoice)) {
            console.log("Invalid pick rock, paper or scissors ")
            continue;
        }

        let computerChoice = computerRandom(keyDict)
        let resultChecker = checkResult(computerChoice, userChoice)
        if (resultChecker === true) {
            humanScore += 1
        } else if (resultChecker === false) {
            computerScore += 1
        }

        if (gameWon(humanScore,computerScore)){
            printScore(humanScore,computerScore)
            let restartGame = restart(prompt)
            if (!restartGame) {
                printScore(humanScore, computerScore)
                gameStart = false

            }
            else{
                humanScore = 0
                computerScore = 0
            }
        }
    }
}


