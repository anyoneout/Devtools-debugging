// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2: 
let button = document.querySelector("#actionButton"); 
button.addEventListener('click', eventHandler); 

function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerHTML = 'You clicked the button!';
}

// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 

// Error 6: Misusing variable scope
function updateMessage() {
  let localMessage = 'Updated message';
  console.log(localMessage); 
}
updateMessage();


// Error 7:
document.getElementById('actionButton').addEventListener('click', testFunction());

function testFunction() {
  console.log('Test function executed');
}

// Error 8:
let number1 = 10;
let number2 = 5;
console.log(`Sum is: ${number1 - number2}`);

// Error 9: 
let nullVar = [];
console.log(nullVar.length);

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData);

// Error 12: 
//tryToCallFunction();

// Error 13:
let user = { name: 'Alice' };
console.log(user.name)

// Error 14: 
let someNumber = 123;
console.log(someNumber); 

// Error 15: 
let greeting = "Hello, world!";

// Error 16: 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Error 17:
let five = 5;
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}
// Error 18:
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
    let numbers = [];
numbers.push(1);
console.log(numbers);
};


// Error 19:
x = 5;
console.log(x);


// Error 20:
let myString = 'Hello';
myString.p = 'World';
console.log(myString.p); 

