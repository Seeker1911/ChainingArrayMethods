// Using one single line of JavaScript code, complete the following tasks on the array of integers below.
// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.

var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// //sort descending
// integers.sort(function (a,b) {return b-a});
// console.log("sort:", integers);
// //remove integers greater than 19
// integers.splice(0, 4);
// console.log("splice: ", integers);
// // multiply remaining numbers 
// integers = integers.map(function(num){return num * 1.5 -1});
// console.log("multiply: ", integers);
// //sum all remaining numbers.
// integers = integers.reduce(function(previousValue, currentValue, index, array){return previousValue + currentValue});
// console.log("sum", integers);

//add all methods together.
integers = integers
.sort(function (a,b) {return b-a})
.splice(4).map(function (num){return num *1.5 -1})
.reduce(function (previousValue, currentValue, index, array){return previousValue + currentValue});
console.log("Single line answer: ", integers);