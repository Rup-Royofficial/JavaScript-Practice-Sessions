const numberInput = document.querySelector('.input-guess');
const form = document.querySelector('form');

let randomNumber = parseInt(Math.random()*1000+1);
let guessCounter = 10;
let guessList = [];

function validateGuess(guess) {
    if((guess <= 0) || (guess > 1000) || (isNaN(guess)) || (isNaN(parseInt(guess)))){
        return false;
    }    
    return true;
}
function checkCondition(guess) {
    
    // Checking that the guessCounter is not less than 1
    if(guessCounter>=1 && guessList.length<=10){
        if((guessCounter !== 1) && guess > randomNumber) { // if the guessCounter is  1 && guess > randomNumber, then after that the counter would be 0, and it would lead to a bug, thus the check
            guessCounter--;
            guessList.push(guess);
            document.querySelector('.prevGuess-array').innerHTML  =  `<span>${guessList}</span>`
            document.querySelector('.number-of-guesses-left').innerHTML  =  `<span>${guessCounter}</span>`
            document.querySelector('.high-low-indicator').innerHTML = '<p>Your guess is high</p>'
        } else if ((guessCounter !== 1) && guess < randomNumber) { // if the guessCounter is  1 && guess < randomNumber, then after that the counter would be 0, and it would lead to a bug, thus the check
            guessCounter--;
            guessList.push(guess);
            document.querySelector('.prevGuess-array').innerHTML  =  `<span>${guessList}</span>`
            document.querySelector('.number-of-guesses-left').innerHTML  =  `<span>${guessCounter}</span>`
            document.querySelector('.high-low-indicator').innerHTML = '<p>Your guess is low</p>'
        } else if (guess === randomNumber){
            document.querySelector('.high-low-indicator').innerHTML = '<p>Correct Guess</p>'
            alert('You win!!!')
            endGame();
        } else {
            alert(`Your guesses has ended, Correct guess is ${randomNumber}`)
            endGame();
        }
    } else {
        alert(`Your guesses has ended, Correct guess is ${randomNumber}`)
        endGame();
    }

}
function newGame() {
    document.querySelector('.prevGuess-array').innerHTML  =  `<span>${guessList}</span>`
    document.querySelector('.number-of-guesses-left').innerHTML  =  `<span>${guessCounter}</span>`
    document.querySelector('.high-low-indicator').innerHTML = '<p>Try to guess the number</p>'
    numberInput.value='';
}
function endGame() {
    randomNumber = parseInt(Math.random()*1000+1);
    guessCounter = 10;
    guessList = [];
    newGame();
    console.log(randomNumber);
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let guess = parseInt(numberInput.value);
    console.log(e, guess);
    if(validateGuess(guess)){
        checkCondition(guess)
    } else{
        alert("Your input is not valid!")
    }
})

console.log(randomNumber);