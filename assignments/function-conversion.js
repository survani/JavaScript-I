// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

//Note: Take all (//) in the console.log to make it show.

// let myFunction = function () {
// console.log("Function was invoked!");
// };
// myFunction();

//re-write below #1 
let myFunction = () => {
    //console.log("Function was invoked!");
};
myFunction();
//------------------------------------------------

// let anotherFunction = function (param) {
//   return param;
// };
// anotherFunction("Example");

//re-write below #2
let anotherFunction = param => {
    return param;
};
//remove this and (//) to make it show 
//console.log(anotherFunction('Example'));
//------------------------------------------------

// let add = function (param1, param2) {
//   return param1 + param2;
// };
// add(1,2);

//re-write below #3
let add = (param1, param2) => {
    return param1 + param2;
}
//remove this and (//) to make it show 
//console.log(add(1, 2));
//------------------------------------------------

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

//re-write below #3
let subtract = (param1, param2) => {
        return param1 - param2;
};
//remove this and (//) to make it show 
// console.log(subtract(1,2)); 
//------------------------------------------------

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);

//Note: Take all (//) in the console.log to make it show.