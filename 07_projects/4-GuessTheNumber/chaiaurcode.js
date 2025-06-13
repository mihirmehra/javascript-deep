const randomNumber = parseInt(Math.random() * 100 + 1);
const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const previous = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let pervGuesses = [];
let numguess = 1;

let playGame = true;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = userInput.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter a number more than 1');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else {
    pervGuesses.push(guess);
    if (numguess === 10) {
      displayGuess(guess);
      displayMessage(`Game Over, and the random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayGuess(guess);
    displayMessage('You won he game');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage('Number is Too Low');
  } else if (guess < randomNumber) {
    displayMessage('Number is Too High');
  }
}

function displayGuess(guess) {
  previous.innerHTML += `${guess}, `;
  userInput.value = '';
  remaining.innerHTML = `${11 - numguess}`;
  numguess++;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `${message}`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.innerHTML = "<button id='newGame'>Start Again</button>";
  startOver.appendChild(p);
  playGame = false;
  startGame();
}

function startGame() {
  const newGamebtn = document.querySelector('#newGame');
  newGamebtn.addEventListener('click', (e) => {
    pervGuesses = [];
    numguess = 1;
    previous.innerHTML = ``;
    lowOrHi.innerHTML = ``;
    remaining.innerHTML = `${11 - numguess}`;
    userInput.removeAttribute('disabled', '');
    startOver.removeChild(p);
    playGame = true;
  });
}
