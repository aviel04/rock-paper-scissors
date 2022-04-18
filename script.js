const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
        return userInput
    } else {
        console.log(`error ${userInput} not valid input`)
    }
}

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function determineWinner(computerChoice, userChoice) {
    if (computerChoice === userChoice) { return "its a tie" };
    switch (userChoice) {
        case "rock":
            if (computerChoice === "paper") { return "pc won" } else { return "you won" };
        case "paper":
            if (computerChoice === "scissors") { return "pc won" } else { return "you won" };
        case "scissors":
            if (computerChoice === "rock") { return "pc won" } else { return "you won" };
    }
}
const playGame = () => {
    const userChoice = getUserChoice("scissors");
    const computerChoice = getComputerChoice()
    console.log(`the user and pc values are ${userChoice +" & " + computerChoice}`)
    console.log(determineWinner(computerChoice, userChoice))
}
playGame()