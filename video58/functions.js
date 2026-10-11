function print(name){
    console.log("Hiii "+name+" How r u?");
    console.log("Hello "+name+" kaisey ho?");
}

print("mahesh");

function sum(a,b){
    return a+b;
}
result = sum(2,3);
console.log(result);


// setting a default value to the local var c=2
function multi(a,b,c=2){
    return a*b*c;
}

rs1 = multi(2,3);
rs2 = multi(2,3,4);

// NaN as op because u r tryin to multiply with nothing
rs3 = multi(2);

console.log(rs1);
console.log(rs2);
console.log(rs3);







