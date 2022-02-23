    // DÉCLARATION DES VARIABLES.

let playerOne, playerOneGlobalScore, playerOneCurrentScore, nameOne, globalOne = 0,
    playerTwo, playerTwoGlobalScore, playerTwoCurrentScore, nameTwo, globalTwo = 0,
    newGame, rollDice, hold, dice, randomNumber, last = 0,
    playerOneTurn;

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

window.onload = () => {
    playerOneTurn = true;
    playerOne.classList.add('currentPlayer');
}

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
        nextPlayer();
    }

}

function nextPlayer() {

    if (playerOneTurn) {
        playerOne.classList.remove('currentPlayer');
        playerTwo.classList.add('currentPlayer');
        playerOneTurn = false;
    } else {
        playerOne.classList.add('currentPlayer');
        playerTwo.classList.remove('currentPlayer');
        playerOneTurn = true;
    }
}

function save() {

    if (playerOneTurn) {
        playerOneGlobalScore.textContent = globalOne += last;
        playerOneCurrentScore.textContent = 0;
        nextPlayer();
        last = 0;
    } else {
        playerTwoGlobalScore.textContent = globalTwo += last;
        playerTwoCurrentScore.textContent = 0;
        nextPlayer();
    }

    if (globalOne >= 100 || globalTwo >= 100) {
        rollDice.disabled = true;
        hold.disabled = true;
        dice.removeEventListener('click', init);
        if (globalOne >= 100) {
            playerOne.textContent = 'WINNER';
            playerOne.classList.add('currentPlayer');
            playerTwo.classList.remove('currentPlayer');
            document.querySelector('#playerTwoArea').style.opacity = .2;
        } else if (globalTwo >= 100) {
            playerTwo.textContent = 'WINNER';
            playerOne.classList.remove('currentPlayer');
            playerTwo.classList.add('currentPlayer');
            document.querySelector('#playerOneArea').style.opacity = .2;
        }
    }

    last = 0;
}


    // AJOUT DES ÉVÈNEMENTS ET ÉCOUTEURS.

newGame.addEventListener('click', () => {
    playerOneGlobalScore.textContent  = 0;
    playerTwoGlobalScore.textContent  = 0;
    playerOneCurrentScore.textContent = 0;
    playerTwoCurrentScore.textContent = 0;
    last      = 0;
    globalOne = 0;
    globalTwo = 0;
    playerOneTurn = true;
    playerOne.classList.add('currentPlayer');
    playerTwo.classList.remove('currentPlayer');
    document.querySelector('#playerOneArea').style.opacity = 1;
    document.querySelector('#playerTwoArea').style.opacity = 1;
    playerOne.textContent = 'PLAYER 1';
    playerTwo.textContent = 'PLAYER 2';

    dice.addEventListener('click', init);
    rollDice.disabled = false;
    hold.disabled     = false;
  });

playerOne.addEventListener('click', () => {
    nameOne = prompt('Entrez un nom').toUpperCase();
    playerOne.textContent = nameOne;
  })

playerTwo.addEventListener('click', () => {
    nameTwo = prompt('Entrez un nom').toUpperCase();
    playerTwo.textContent = nameTwo;
})

rollDice.addEventListener('click', init);

dice.addEventListener('click', init);

hold.addEventListener('click', save);