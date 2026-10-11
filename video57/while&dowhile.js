let i =0;

while(i < 5){
    console.log(i);
    i++;
}

let j = 5;

// do while
do{
    console.log(j);
    j++;
}while(j < 5);

// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}


let student= {
    name:"mahesh",
    age:"24",
    college:"Atria Institute of technology"
}

// for in 
for(let objs in student){
    console.log(objs);
    console.log(student[objs]);
}