// Arrays are mutable unlike strings

let arr = [1, 3, 5, 7];

console.log(arr);
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[6]); // undefined

// Arrays are mutable
arr[0] = 566;

console.log(arr[0]);

// Type of array is object
console.log(arr, typeof arr);

// Converts array to string
console.log(arr.toString()); // "566,3,5,7"

// Joins array elements with " and "
console.log(arr.join(" and ")); // "566 and 3 and 5 and 7"


let a = [10, 20, 30, 40];

console.log(a.length);

// pop() removes the last element and returns it
console.log(a.pop()); // 40

console.log(a); // [10, 20, 30]

// push() adds element at the end
a.push(599);

a.push("Mahesh");

console.log(a);

// shift() removes element from the beginning
a.shift();

console.log(a);

// unshift() adds element at the beginning
a.unshift("Mahi");

console.log(a);

// delete removes the element but leaves an empty slot
delete a[3];

console.log(a);


// concat() joins arrays and returns a new array
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

let a4 = a1.concat(a2, a3);

console.log(a4);


// sort() sorts the array
a4.sort();

console.log(a4);


// splice()
// Starts from index 1 and removes 4 elements

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(1, 4);
console.log(numbers); // [1, 6, 7, 8, 9]

// slice out a peace from an array
numbers.slice(2);
numbers.slice(1,3);

// reverse 
numbers.reverse();

