// loops

let a = [1, 93, 5, 6, 88];

for (let i = 0; i < a.length; i++) {
  // const ele = a[i];
  console.log(a[i]);
}

// for each loop for using value , index , Array
a.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

// for in =>  used for objects
for (const key in obj) {
  console.log(key, obj[key]);
}

// for of => mainly used for arrays
for (const iterator of a) {
  console.log(iterator);
}

/*
push()     → add at end
pop()      → remove from end
unshift()  → add at beginning
shift()    → remove from beginning
delete     → empty slot, length unchanged
concat()   → joins arrays
sort()     → sorts array
splice()   → removes/adds elements at a position
*/

let arr = [1, 3, 5, 7, 11, 13];

/*
let newArr = [];

for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  newArr.push(element ** 2);
}
*/

// Map -> [ 1, 9, 25, 49, 121, 169 ]
let newArr = arr.map((e) => {
  return e ** 2;
});

console.log(newArr);

// used to filter for ex : e > 7
const greaterThanSeven = (e) => {
  if (e > 7) {
    return true;
  }
  return false;
};

console.log(arr.filter(greaterThanSeven));

// reduce() reduces all array elements into one final value.
const add = (a, b) => {
    return a + b;
};

let sum = arr.reduce(add);
console.log(sum);

/*
Array.from() → converts an iterable (like a string) into an array.
             → converts iterable or array-like values into an array.
["H", "a", "r", "r", "y"]
*/

Array.from("Harry");