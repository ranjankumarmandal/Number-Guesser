/*
Number Guesser game - a random number will be analysed by the system, you need to guess that number
*/

// game values
let min = 1, max = 10, guessesLeft = 3, winingNum = Math.floor(Math.random()*9+1);

// UI element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxnNum = document.querySelector('.max-num'),
      guessInput = document.querySelector('#guess-input'),
      guessBtn = document.querySelector('#guess-btn'),
      message = document.querySelector('.message');

// assign UI min and max
minNum.textContent = min;
maxnNum.textContent = max;

// play again btn event
game.addEventListener('mousedown', function(e) {
    if(e.target.className === 'play-again') {
        window.location.reload();
    }
});

// listen for guess - submitBtn event
guessBtn.addEventListener('click', function(e) {
    let guess = parseInt(guessInput.value);

    // check if input number is min or max than our boundary or check if that is empty
    if(isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // check if won or wrong number
    else if(guess === winingNum) {
        gameOver(true, `${winingNum} is correct, YOU WIN!`);
    } else {
        // wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            // game over - lost
            gameOver(false, `Game Over, you lost. The correct number was ${winingNum}`)
        } else {
            // game continues - answer wrong
            guessInput.style.borderColor = 'red'; // border color 'red'
            guessInput.value = ''; // make input empty
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red'); // print message
        }
    }
});

// game over - won or lost ?
function gameOver(won, msg) {
    guessInput.disabled = true; // disable input 

    let color;
    won === true ? color = 'green' : 'red';

    guessInput.style.borderColor = color; // make input tag border green
    setMessage(msg, color); // game over - wining or loosing msg

    // Play Again
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

// setMessage
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}




