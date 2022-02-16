    // DÉCLARATION DES VARIABLES.

let playerOne, playerOneGlobalScore, PlayerOneCurrentScore,
    playerTwo, playerTwoGlobalScore, PlayerTwoCurrentScore,
    newGame, rollDice, hold, dice, last, randomNumber;

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
}

function init() {

    diceNumber();

    dice.innerHTML = `<img src="images/${randomNumber}.png" alt="Image du dé">`
    playerOne.innerHTML   = 'PLAYER 1 <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" class="bi bi-dot text-danger" viewBox="0 0 16 16"><path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/></svg>';
    last = 0 + randomNumber;
    if (randomNumber !== 1) {
        last += randomNumber;
        PlayerOneCurrentScore.textContent = roundScore;
    } else {
    }

}

    // AJOUT DES ÉVÈNEMENTS ET ÉCOUTEURS.

newGame.addEventListener('click', () => {
    playerOneGlobalScore.textContent  = 0;
    playerTwoGlobalScore.textContent  = 0;
    PlayerOneCurrentScore.textContent = 0;
    PlayerTwoCurrentScore.textContent = 0;
});

rollDice.addEventListener('click', init)