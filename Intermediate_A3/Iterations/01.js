// for
/* A normal for loop : here , first there is initialization
                     then, the condition is Checked
                     depending on true/false, the lines within '{}' are executed 
                     then after the last line is executed or gone-through, 
                     then the iterator is either incremented (i++) or decremented as per user instructions
*/


for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}

// console.log(element);// out of scope error


// Below one is pretty self-explanatory, basic nested loops, 
for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
    
}



let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    //console.log(element);
    
}


// break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break // break statement is basically an end statement, eg:- a captial punishment which does not have any warnings
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // continue statement is more like after this line, the focus will shift to the line 54, for loops intructions, eg:- a warning/tickets given for breaking less significant laws
    }
   console.log(`Value of i is ${index}`);
    
}