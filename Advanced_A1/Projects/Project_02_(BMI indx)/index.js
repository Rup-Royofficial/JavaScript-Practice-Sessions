const form = document.querySelector('form');
// const height = parseInt(document.querySelector('.height-input'))
// const weight = parseInt(document.querySelector('.weight-input'))

form.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event)
    const height = parseInt(event.target[0].value) // why are we not writing in the place along with const form ***
    const weight = parseInt(event.target[1].value)
    let ans = (weight/((height*height)/10000)).toFixed(1);
    document.querySelector('.result').innerHTML = `<span>${ans}</span>`

    
})


/*
Better to use:

const height = parseInt(document.querySelector('.height-input').value)
const weight = parseInt(document.querySelector('.weight-input').value)

why?
*The issue is occurring because you're trying to parse the values of height and weight outside the event listener, 
at a time when those input fields are likely empty. As a result, parseInt on an empty string returns NaN. When you perform the calculation with NaN, 
the result is also NaN.

You should parse the input values inside the event listener, ensuring you get the latest values entered by the user at the time the form is submitted.

!Benefits of Using document.querySelector :
Readability: It's immediately clear which input you're referencing, improving code readability.

Maintainability: If the form structure changes (e.g., reordering inputs), you don't have to update index references.

Reusability: You can reuse the same input elements in different parts of your code if needed.


***
*The reason to not write that alongweith form is bacause, during that scenrario, whenever the page is loaded, the empty input would get stored in the const
!Resultant ouput will always be NaN
***


another format :
const heightInput = document.querySelector('.height-input'); // Or use an id if you add one
const weightInput = document.querySelector('.weight-input');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const height = parseInt(heightInput.value); 
    const weight = parseInt(weightInput.value);
    ...


*/