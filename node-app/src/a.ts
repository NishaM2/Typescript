//eg 1
function greet(firstname: string) {
    console.log("hello " + firstname);
}

greet("nisha");

//type inference
function sum(a: number, b: number)/*: number*/ {
    return a+b;
}

const value = sum(5,6);
console.log(value);

//
function isLegal(age: number) {
    if (age >= 18) {
        return true;
    } else { 
        return false;
    }
}
console.log(isLegal(17));

//
function runAfter1s(fn: () => void) {
    setTimeout(fn, 1000);
}

runAfter1s(function() {
    console.log("hi there")
})

//interface
interface User {
    firstname: String,
    lastname: String,
    age: number
}

function isLegall(user: User) {
    if(user.age > 18) {
        return true;
    } else {
        return false;
    }
}
function greett(user: User) {
    console.log("hello " + user.firstname);
}

greett({
    firstname: "nisha",
    lastname: "m",
    age: 20
})