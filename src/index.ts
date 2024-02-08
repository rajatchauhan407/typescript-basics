// Basic Types:
// 1. Boolean
// 2. Number
// 3. String
// 4. Array
// 5. Tuple
// 6. Enum
// 7. Any
// 8. Void
// 9. Null and Undefined
// 10. Never
// 11. Object
// 12. Type assertions
// 13. Type inference
// 14. Type compatibility
// 15. Advanced Types

// functions


// Defining an Array

let list:number[] = [1, 2, 3, 4, 5];
let list2:Array<number> = [1, 2, 3, 4, 5];

// Definiting a basic function
// 1.
function greet(name: string): string {
    return `Hello ${name}`;
}

console.log(greet('John'));

// 2.
function add(x: number, y: number): number {
    return x + y;
}

console.log(add(10999, 209808));

// 3.
let add2 = (x: number, y: number): number => {
    return x + y;
}

console.log(add2(10999, 209808));

// 4.
// functions with opional parameter

function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}

// 5.
// functions with default parameter
function buildName2(firstName: string, lastName = 'John') {
    return `${firstName} ${lastName}`;
}

// interfaces

// interface define the shape of an object
interface Person {
    firstName: string;
    lastName: string;
}

function greet2(person: Person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}