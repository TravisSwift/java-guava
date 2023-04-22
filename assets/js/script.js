/* Example of a console log saying "Hello World!"  */
console.log('Hello World!');

/* A javascript function viewable in devtools showing a numerical value */
function exampleFunction() {
var myVar = 42;
console.log('The function has been called, and the value of myVar is:', myVar);
}


// exampleFunction();

// var name = "John";
// let age = 30;
// const pi = 3.14159

/* JS Function using an if else statement to determine if a number is odd or even */
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


/* JS Function using multiple if else statements to calculate a letter grade from a numerical value */
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


/* A JS function using a switch statement to give a different message for each day of the week */
function showMessage() {
    const dayInput = document.getElementById('dayInput');
    const result = document.getElementById('result4');
    const day = dayInput.value.trim().toLowerCase();

    switch (day) {
        case 'monday':
            result.textContent = 'Someone has a case of the Mondays!';
            break;
        case 'tuesday':
            result.textContent = 'It\'s Tuesday, you can do this!';
            break;
        case 'wednesday':
            result.textContent = 'Halfway through the week, it\'s Humpday!';
            break;
        case 'thursday':
            result.textContent = 'Almost Friday!';
            break;
        case 'friday':
            result.textContent = 'TGIF! WOOT WOOT';
            break;
        case 'saturday':
            result.textContent = 'Saturday\'s are for sleeping in!';
            break;
        case 'sunday':
            result.textContent = 'Sunday morning, rain is falling . .';
            break;
        default:
            result.textContent = 'Please enter a valid day of the week.';
    }
}

function generateRandomNumbers() {
    const numberList = document.getElementById('numberList');
    numberList.innerHTML = '';

    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const listItem = document.createElement('li');
        listItem.textContent = randomNumber;
        numberList.appendChild(listItem);
    }
}

function displayFibonacci() {


    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result5');
    const terms = parseInt(userInput.value);

    if (isNaN(terms) || terms < 1) {
        result.textContent = 'Please enter a number 1 or greater.';
        return;
    }

    let firstTerm = 0;
    let secondTerm = 1;
    let count = 0;
    let fibonacciSequence = '';

    while (count < terms) {
        fibonacciSequence += firstTerm + ', ';
        const nextTerm = firstTerm + secondTerm;
        firstTerm = secondTerm;
        secondTerm = nextTerm;
        count++;
    }

    result.textContent = `The first ${terms} Fibonacci terms are: ${fibonacciSequence.slice(0, -2)}.`;
}

function printOddNumbers() {
    const oddNumberList = document.getElementById('oddNumberList');
    oddNumberList.innerHTML = '';

    let i = 1;
    do {
        const listItem = document.createElement('li');
        listItem.textContent = i;
        oddNumberList.appendChild(listItem);
        i += 2;
    } while (i <= 19);
}

function reset() {
    const oddNumberList = document.getElementById('oddNumberList');
    oddNumberList.innerHTML = '';
}

function add(a, b) {
    return a + b;
  }
  
  const sum = add(3, 5);
  console.log(sum); // Output: 8