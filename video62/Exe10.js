
/*
adjectives list
--------------------
*/
let a ="carzy"
let b = "Amazing"
let c = "Fire"

/* shop name
--------------
Engine 
Foods 
Garments*/

let x = "Engine";
let y = "Foods";
let z = "Garments";

/* Another word
----------------
Bros 
Limited
Hub */

let d = "Bros";
let e = "Limited";
let f = "Hub";


let rand = Math.random();

if(rand < 0.33){
    BusinessNameGenerator(a,x,d);
}
else if(rand < 0.66){
    BusinessNameGenerator(b,y,e);
}
else{
    BusinessNameGenerator(c,z,f);
}

function BusinessNameGenerator(adj,shopname , Aword){
    console.log(`The Business name is ${adj} ${shopname} ${Aword}`);
}


/*
let a = "Crazy";
let b = "Amazing";
let c = "Fire";

let x = "Engine";
let y = "Foods";
let z = "Garments";

let d = "Bros";
let e = "Limited";
let f = "Hub";

let r1 = Math.random();
let r2 = Math.random();
let r3 = Math.random();

let adj;
let shop;
let last;

if (r1 < 0.33) {
    adj = a;
} else if (r1 < 0.66) {
    adj = b;
} else {
    adj = c;
}

if (r2 < 0.33) {
    shop = x;
} else if (r2 < 0.66) {
    shop = y;
} else {
    shop = z;
}

if (r3 < 0.33) {
    last = d;
} else if (r3 < 0.66) {
    last = e;
} else {
    last = f;
}

console.log(`Business Name: ${adj} ${shop} ${last}`);
*/