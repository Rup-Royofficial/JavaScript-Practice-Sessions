const numberInput = document.querySelector('.input-guess');
const form = document.querySelector('form');

let randomNumber = parseInt(Math.random()*1000+1);
let guessCounter = 10;

function validateGuess(guess) {

}
function checkCondition() {}
function newGame() {}
function endGame() {}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let guess = parseInt(numberInput.value);
    console.log(e, guess);
    // if(validateGuess(guess)){

    // } else{
    //     alert("Your input is not valid!")
    // }
})

console.log(randomNumber);