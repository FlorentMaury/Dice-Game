    // DÉCLARATION DES VARIABLES.

let playerOne, playerOneGlobalScore, PlayerOneCurrentScore,
    playerTwo, playerTwoGlobalScore, PlayerTwoCurrentScore,
    newGame, rollDice, hold, dice, randomNumber;
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
PlayerOneCurrentScore = document.querySelector('#PlayerOneCurrentScore');
PlayerTwoCurrentScore = document.querySelector('#PlayerTwoCurrentScore');

    // CRÉATION DES FONCTIONS.

function diceNumber() {
    randomNumber = Math.floor(Math.random() * 6) + 1;
    dice.innerHTML = `<img src="images/${randomNumber}.png" alt="Image du dé">`;
}

function init() {
    diceNumber();
    playerOne.innerHTML   = 'PLAYER 1 <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-dot text-danger" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>';
    playerOne.style.fontWeight = 300;
    if (randomNumber !== 1) {
        last += randomNumber;
        PlayerOneCurrentScore.textContent = last;
    } else {
        PlayerOneCurrentScore.textContent = 0;
        last = 0;
    }
}

function save() {
    global += last
    playerOneGlobalScore.textContent = global;
    last = 0;
    PlayerOneCurrentScore.textContent = 0;
    if (global >= 100) {
        alert(`C'est gagné !`);
    }
}

function newRound() {
    playerOneGlobalScore.textContent  = 0;
    playerTwoGlobalScore.textContent  = 0;
    PlayerOneCurrentScore.textContent = 0;
    PlayerTwoCurrentScore.textContent = 0;
    last = 0;
}

    // AJOUT DES ÉVÈNEMENTS ET ÉCOUTEURS.

newGame.addEventListener('click', newRound);

rollDice.addEventListener('click', init);

hold.addEventListener('click', save);