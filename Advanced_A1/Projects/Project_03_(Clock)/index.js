let time = document.querySelector('.time-container')
// let date = 

setInterval(() => {
    let date = new Date()
    time.innerHTML = date.toLocaleTimeString('en-in')
}, 1000) // here 1000 is in milliseconds

// clearInterval() ** refer below |

/*

The setInterval() function in JavaScript is used to repeatedly execute a specified function or code block at fixed intervals.
Here are the key points about setInterval():

Purpose:
    a) Repeatedly calls a function or executes a code snippet at specified time intervals.
    b) Continues calling the function until clearInterval() is called or the window is closed.


Syntax: JavaScript

    setInterval(function, milliseconds);
    a) function: The function to execute.
    b) milliseconds: The time interval between function executions.


    
Behavior:
    a) The function is invoked repeatedly with the specified interval.
    b) Returns an interval ID (a number) that uniquely identifies the interval.
    c) Use this ID with clearInterval() to cancel the timer.


    Example: JavaScript

        //!Display "Hello" every second
        setInterval(function() {
        element.innerHTML += "Hello";
        }, 1000);

Note:
*To execute the function only once, use setTimeout() instead.
*Remember, setInterval() is useful for creating periodic tasks, animations, and real-time updates in web applications!

*/