"use strict";
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
let list = [1, 2, 3, 4, 5];
let list2 = [1, 2, 3, 4, 5];
// Definiting a basic function
// 1.
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet('John'));
// 2.
function add(x, y) {
    return x + y;
}
console.log(add(10999, 209808));
// 3.
let add2 = (x, y) => {
    return x + y;
};
console.log(add2(10999, 209808));
// 4.
// functions with opional parameter
function buildName(firstName, lastName) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    }
    else {
        return firstName;
    }
}
// 5.
// functions with default parameter
function buildName2(firstName, lastName = 'John') {
    return `${firstName} ${lastName}`;
}
function greet2(person) {
    return `Hello ${person.firstName} ${person.lastName}`;
}
