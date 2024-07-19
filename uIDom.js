document.addEventListener("DOMContentLoaded", () => {

    let humanScore = 0
    let computerScore = 0

    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);


    const rockButton = document.createElement("button")
    rockButton.textContent = "ROCK"
    rockButton.classList.add("rockButton")
    container.appendChild(rockButton)

    const paperButton = document.createElement("button")
    paperButton.textContent = "PAPER"
    paperButton.classList.add("paperButton")
    container.appendChild(paperButton)


    const scissorsButton = document.createElement("button")
    scissorsButton.textContent = "SCISSORS"
    scissorsButton.classList.add("scissorsButton")
    container.appendChild(scissorsButton)


    const showResult = document.createElement("div")
    showResult.classList.add("result")
    document.body.appendChild(showResult)




    let information = document.createElement("p")
    let resultInfo = document.createElement("p")
    let humanScoreKeeper = document.createElement("p")
    humanScoreKeeper.textContent = ` You: ${humanScore}`
    let computerScoreKeeper = document.createElement("p")
    computerScoreKeeper.textContent = `Computer: ${computerScore}`

    showResult.appendChild(information)
    showResult.appendChild(resultInfo)
    showResult.appendChild(humanScoreKeeper)
    showResult.appendChild(computerScoreKeeper)

    const gameFinished = document.createElement("div")
    document.body.appendChild(gameFinished)

    const reveal = document.createElement("p")
    gameFinished.appendChild(reveal)


    const rockPaperScissors = {
        "rock": "scissors",
        "paper": "rock",
        "scissors": "paper"
    };

    let keyDict = Object.keys(rockPaperScissors)


    function computerRandom(key) {
        // Gives the computer a random choice between rock, paper or scissors
        let randomChoice = Math.floor(Math.random() * key.length)
        return key[randomChoice].toLowerCase()
    }

    function checkResult(computerChoice, userChoice) {
        // Checks both user and computer choice, to determine the winner
        information.textContent = (`Your choice was: ${userChoice} and the computer picked: ${computerChoice} `)
        if (rockPaperScissors[computerChoice] === userChoice.toLowerCase()) {
            resultInfo.textContent = (`You lose ${computerChoice} beats ${userChoice}`)
            return false
        } else if (computerChoice === rockPaperScissors[userChoice]) {
            resultInfo.textContent = (`you win ${userChoice} beats ${computerChoice}`)
            return true
        } else {
            resultInfo.textContent = ("its a draw")
            return null
        }

    }

    function gameWon(humanScore, computerScore) {
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore > computerScore) {
                reveal.textContent = `You've won `

            } else {
                reveal.textContent = "You've lost"
            }
            return true
        }
    }

    const winningCondition= () => {
        paperButton.disabled = true
        rockButton.disabled = true
        scissorsButton.disabled = true
        const restart = document.createElement("button")
        restart.textContent = "RESTART"
        restart.classList.add("restart");
        gameFinished.appendChild(restart)


        restart.addEventListener("click", () => {
            humanScore = 0
            computerScore = 0
            humanScoreKeeper.textContent = ` You: ${humanScore}`
            computerScoreKeeper.textContent = `Computer: ${computerScore}`
            information.textContent = ""
            resultInfo.textContent = ""
            reveal.textContent = ""
            paperButton.disabled = false
            rockButton.disabled = false
            scissorsButton.disabled = false
            restart.remove()

        })}


    function main(choice) {
        let userChoice = choice
        let computerChoice = computerRandom(keyDict)
        let resultChecker = checkResult(computerChoice, userChoice)
        if (resultChecker === true) {
            humanScore += 1
            humanScoreKeeper.textContent = ` You: ${humanScore}`
        } else if (resultChecker === false) {
            computerScore += 1
            computerScoreKeeper.textContent = `Computer: ${computerScore}`
        }
        if (gameWon(humanScore, computerScore)) {
            winningCondition()
        }
    }

        rockButton.addEventListener("click", () =>{
            main("rock")
        })


        paperButton.addEventListener("click", () => {

            main("paper")
        })


        scissorsButton.addEventListener("click", () => {

            main("scissors")

        })

    })

