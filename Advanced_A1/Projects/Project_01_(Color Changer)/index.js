const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");
console.log(buttons)

buttons.forEach(function (button) {
    console.log(button)

    let strColor = "#212121"
    let buttonColor = button.getAttribute("id")
    console.log(buttonColor);


    button.addEventListener("click", function(event) {
        console.log(event.target.id);

        
        switch (event.target.id) {
          case "black":
            body.style.backgroundColor = event.target.id;

            //!want to toggle between other colors on selection, #work to be done
            event.target.style.backgroundColor =  "grey"
            console.log(event.target);
            break;

          case "purple":
            body.style.backgroundColor = event.target.id;
            break;

          case "blue":
            body.style.backgroundColor = event.target.id;
            break;

          case "yellow":
            body.style.backgroundColor = event.target.id;
            break;

          default:
            body.style.backgroundColor = "#212121";
            break;
        }
    })
});