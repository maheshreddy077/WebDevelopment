let a = 5;
/*
let fact = 1;
for (let index = 1; index <= a; index++) {
  fact *= index;
}
console.log(fact);
*/

// using reduce()
let arr = [];
for (let i = 1; i <= a; i++) {
  arr[i - 1] = i;
}

// function
const factorial = (a, b) => {
  return a * b;
};

let fact = arr.reduce(factorial);

console.log(fact);
console.log(arr);
