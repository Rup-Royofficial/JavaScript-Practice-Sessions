// Dafult Form of Switch statement :

// switch (key) {
//     case value:
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;   // it is necessary to use the break statement in the cases of switch statements, 
                //as if we don't use it, then even if a case is true and gets executed, 
                //even then all the other cases AFTER that case, will  get executed
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}