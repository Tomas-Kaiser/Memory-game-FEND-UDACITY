/*
 * Create a list that holds all of your cards
 */
let cards = document.querySelectorAll('.card');
let newArrayCards = [...cards];
const deck = document.querySelector('.deck');
let openedCards = [];


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

 startGame();

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

/*
 *
 * Start game function
 * 
 */
function startGame() {
    deck.innerHTML = '';
    shuffle(newArrayCards);

    for (const newArrayCard of newArrayCards) {
        deck.appendChild(newArrayCard);
        newArrayCard.classList.remove('open', 'show', 'match');
    }
}

/*
 *
 * Toggle classes function
 * 
 */

let openCard = function() {
    this.classList.toggle('open');
    this.classList.toggle('show');
}

/*
 *
 * Main events listener
 * 
 */
for (const card of cards) {
    card.addEventListener('click', openCard);
    card.addEventListener('click', openCards);
}

/*
 *
 * Open Card function
 * 
 */
function openCards() {
    openedCards.push(this);
    if (openedCards.length === 1) {
        console.log('movesCounter()');
    }else{
        if (openedCards[0].innerHTML != openedCards[1].innerHTML) {
            unmatched();
        }else{
            matched();
        }
    }
}

/*
 *
 *Matched, unmatched
 * 
 */
function matched() {
    openedCards[0].classList.add('match');
    openedCards[1].classList.add('match');
    openedCards[0].classList.remove('open', 'show');
    openedCards[1].classList.remove('open', 'show');
    openedCards = [];
}

function unmatched() {
    disabled();
    setTimeout(function() {
        openedCards[0].classList.remove('open', 'show');
        openedCards[1].classList.remove('open', 'show');
        openedCards = [];
    }, 1500);
}

function disabled() {
    for (const newArrayCard of newArrayCards) {
        newArrayCard.classList.add('disabled');
    }
}
 


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
