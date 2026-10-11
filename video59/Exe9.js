// faulty calculator

let random = Math.random();

let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

// eval
if (random > 0.1) {
    // Perform correct calculation
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else{
    // perform wrong calculation
    c = obj[c]
     alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}


/* using if else conditions

// Faulty Calculator

let random = Math.random();

let a = Number(prompt("Enter first number"));
let c = prompt("Enter operation");
let b = Number(prompt("Enter second number"));

let result;

if (random <= 0.1) {
    if (c == "+") {
        result = a - b;
    } else if (c == "*") {
        result = a + b;
    } else if (c == "-") {
        result = a / b;
    } else if (c == "/") {
        result = a ** b;
    }
} else {
    if (c == "+") {
        result = a + b;
    } else if (c == "-") {
        result = a - b;
    } else if (c == "*") {
        result = a * b;
    } else if (c == "/") {
        result = a / b;
    }
}

alert(`The result is ${result}`);
*/