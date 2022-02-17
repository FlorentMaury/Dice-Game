    // DÉCLARATION DES VARIABLES.

let playerOne, playerOneGlobalScore, playerOneCurrentScore,
    playerTwo, playerTwoGlobalScore, playerTwoCurrentScore,
    newGame, rollDice, hold, dice, randomNumber,
    playerOneTurn;
let last = 0;
let global = 0;

    // RÉCUPÉRATION DES ÉLÉMENTS DE LA PAGE HTML.

newGame   = document.querySelector('#newGame');
rollDice  = document.querySelector('#rollDice');
hold      = document.querySelector('#hold');
dice      = document.querySelector('#dice');
playerOne = document.querySelector('#playerOne');
playerTwo = document.querySelector('#playerTwo');
playerOneGlobalScore  = document.querySelector('#playerOneGlobalScore');
playerTwoGlobalScore  = document.querySelector('#playerTwoGlobalScore');
playerOneCurrentScore = document.querySelector('#PlayerOneCurrentScore');
playerTwoCurrentScore = document.querySelector('#PlayerTwoCurrentScore');

    // CRÉATION DES FONCTIONS.

function diceNumber() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = `<img src="images/${randomNumber}.png" alt="Image du dé">`;
}

function init() {

    diceNumber();

    if (randomNumber !== 1) {
        last += randomNumber;
        if (playerOneTurn) {
            playerOneCurrentScore.textContent = last;
        } else {
            playerTwoCurrentScore.textContent = last;
        }
    } else {
        if (playerOneTurn) {
            playerOneCurrentScore.textContent = 0;
        } else {
            playerTwoCurrentScore.textContent = 0;
        }
        last = 0;
        nextPlayer()
    }

}

function nextPlayer() {

    if (playerOneTurn) {
        playerOneTurn = false;
    } else {
        playerOneTurn = true;
    }
}

function save() {
    global += last
    last = 0;

    if (playerOneTurn) {
        playerOneGlobalScore.textContent = global;
        playerOneCurrentScore.textContent = 0;
        playerOneTurn = false;
    } else {
        playerTwoGlobalScore.textContent = global;
        playerTwoCurrentScore.textContent = 0;
        playerOneTurn = true;
    }

    if (global >= 100) {
        alert(`C'est gagné !`);
    }
}

    // AJOUT DES ÉVÈNEMENTS ET ÉCOUTEURS.

newGame.addEventListener('click', function () {
    playerOneGlobalScore.textContent  = 0;
    playerTwoGlobalScore.textContent  = 0;
    playerOneCurrentScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;
    last   = 0;
    global = 0;
    playerOneTurn = true;
  });

rollDice.addEventListener('click', init);

hold.addEventListener('click', save);