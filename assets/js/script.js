/* Example of a console log  */
console.log('Hello World!');

/* A javascript function viewable in devtools */
function exampleFunction() {
var myVar = 42;
console.log('The function has been called, and the value of myVar is:', myVar);
}


exampleFunction();
  

var name = "John";
let age = 30;
const pi = 3.14159

function checkEvenOdd() {
    const numberInput = document.getElementById('numberInput');
    const result = document.getElementById('result');
    const number = parseInt(numberInput.value, 10);
    if (number % 2 === 0) {
        result.textContent = number + ' is even.';
    } else {
        result.textContent = number + ' is odd.';
    }
}