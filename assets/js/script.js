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
};

function calculateGrade() {
    const scoreInput = document.getElementById('scoreInput');
    const result = document.getElementById('result2');
    const score = parseInt(scoreInput.value, 10);

    if (score >= 90) {
        result.textContent = 'Grade: A';
    }   else if (score >= 80) {
        result.textContent = 'Grade: B';
    }   else if (score >= 70) {
        result.textContent = 'Grade C';
    }   else if (score >= 60) {
        result.textContent = 'Grade D';
    } else if (score >= 50) {
        result.textContent = 'Grade F! You have failed your family!';
    }
}

