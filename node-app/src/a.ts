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
    firstname: string,
    lastname: string,
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
    console.log("hellooooo " + user.firstname);
}

greett({
    firstname: "nisha",
    lastname: "m",
    age: 20
})


//interface
interface User1 {
    firstname: string,
    lastname: string,
    age: number
}

//type
type User2 = {
    firstname: string,
    lastname: string,
    age: number
}


//either number or string
type hiArg = number | string | boolean;
function hi(id: hiArg){
    console.log(`ID: ${id}`)
}
hi(1);
hi("2")


//intersection
type Employee = {
    name: string,
    startDate: Date
};

interface Manager {
    name: string,
    department: string
};

type TeamLead = Employee & Manager;

const teamLead: TeamLead = {
    name: "nisha",
    startDate: new Date(),
    department: "HR"
};

//arrays

type NumberArr = number[];

function maxvalue(arr: NumberArr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

maxvalue([1, 2, 3])

//enums
enum Direction {
    up = "up",
    down = "down",
    left = "left",
    right = "right"
}

function doSomething(keyPressed: Direction) {
    if(keyPressed == Direction.down) {

    }
}

doSomething(Direction.down)
console.log(Direction.down)
console.log(Direction.up)

//generics
function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}
const el = getFirstElement(["nisha", "m"]);
const el1 = getFirstElement([1,2]);

console.log(el.toUpperCase());
