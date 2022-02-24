

const options = document.querySelectorAll(".options");
const computerOptions = ["rock", "paper", "scissors"];
let computerInput = computerOptions[Math.floor(Math.random() * 3)];

let playerTotal = 0;
let computerTotal = 0;
let rounds = 0;
let playerInput;
let finalWinner;

const playerScoreDisplay = document.querySelector("#p-score");
const computerScoreDisplay = document.querySelector("#c-score");
const results = document.querySelector(".results")
const actions = document.querySelector(".player-action")
const gameOver = document.querySelector(".game-over")
const resetBtn = document.querySelector("#submitBtn")
const winRounds = document.querySelector("#win-rounds");
gameOver.style.display = 'none';


const logicObj = {
    rock: {
        weakAgainst: 'paper', strongAgainst: 'scissors'
    },
    paper: {
        weakAgainst: 'scissors', strongAgainst: 'rock'
    },
    scissors: {
        weakAgainst: 'rock', strongAgainst: 'paper'
    }
}

function game() {

    options.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();
            playerInput = element.value;

            console.log(playerInput);
            console.log(computerInput);
            winner();
            if (playerTotal === 3 || computerTotal === 3) {
                // results.innerHTML = gameOver;
                ultimateWinner();
                actions.style.display = 'none';
                results.style.display = 'none';
                gameOver.style.display = 'inline';

            }

        })
    });


    if (!playerInput === '') {
        game();
    }

    resetBtn.addEventListener('click', event => {
        resetGame();
    })
}
function winner() {
    if (logicObj[playerInput].strongAgainst === computerInput) {
        playerTotal++;
        rounds++;
        playerScoreDisplay.innerHTML = playerTotal;
        results.innerHTML = `${playerInput.charAt(0).toUpperCase() + playerInput.slice(1)} demolishes ${computerInput}! Player One Wins Round #${rounds}!`;
        console.log(playerTotal)



    }
    else if (logicObj[playerInput].weakAgainst === computerInput) {
        computerTotal++;
        rounds++;
        computerScoreDisplay.innerHTML = computerTotal;
        results.innerHTML = `${computerInput.charAt(0).toUpperCase() + computerInput.slice(1)} demolishes ${playerInput}! Computer Wins Round #${rounds}!`;

    } else {
        results.innerHTML = 'It is a tie!';
    }
}

function ultimateWinner() {
    if (playerTotal === 3) {
        winRounds.innerHTML = "<h2> You are the Winner! </h2>"
    } else {
        winRounds.innerHTML = "<h2> Computer is the Winner!</h2>"
    }
}

function resetGame() {
    console.log("Is it working")
    playerTotal = 0;
    computerTotal = 0;
    playerInput;
    gameOver.style.display = 'none';
    actions.style.display = 'inline';
    results.style.display = 'inline';
    results.innerHTML = '';
    playerScoreDisplay.innerHTML = 0;
    computerScoreDisplay.innerHTML = 0;

}


game();
