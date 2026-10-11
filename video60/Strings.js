console.log(" strings are Immutable");

let a = "Mahesh";

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);

// or 
console.log(a.charAt(1));

console.log(a.length);

let fname = "Mahesh";
let lname = "Reddy";

console.log("His name is"+ fname +lname);

// TEMPLATE LITERALS
console.log(`heyy this is ${fname} ${lname}`)

// String interpolation
console.log(`Heyyy hehe "Mr" ${fname} ${lname} Here`);

/* Escape sequence characters

 \n -> NewLine
 \t -> Tab 
 \r -> carriage return 
 */

// String properties and methods
let b = "Reddy";

console.log(b.toUpperCase());
console.log(b.toLowerCase());
console.log(b.length);

// it is like a substring 
console.log(b.slice(1,5));

// gives all the chars from index 2
console.log(b.slice(2));

// Replace string
console.log(b.replace("Re","07"));

// concat two strings 
console.log(b.concat(a));

console.log(a.concat(b));
console.log(b.concat(a," Hello"));

// remove whitespaces
console.log(b.trim);

// starts and Startswith
console.log(b.startsWith("Re"));

// starts and endswith
console.log(b.endsWith("yy"));