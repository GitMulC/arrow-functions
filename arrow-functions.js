/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
function addTwoNumbers1(a, b) {
    //Code block
    return a + b;
}
let sum1 = addTwoNumbers1(3,5);
console.log(sum1);

// Arrow Function With Parameters
const addTwoNumbers2 = (a,b) => {
    // Code block
    return a + b;
}
let sum2 = addTwoNumbers2(3,5);
console.log(sum2);

// Single Line Arrow Function With Parameters
const addTwoNumbers3 = (a, b) => a + b;
const addTwoNumbers4 = (a, b) => (a + b); //also valid
let sum3 = addTwoNumbers3(6, 4);
console.log(sum3)

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!!')

const sayHello = () => console.log('hello')
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
        This is a multi line string!
    </p>`
)
console.log(returnMultipleLines());