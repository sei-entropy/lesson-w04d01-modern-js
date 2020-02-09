'use strict';
console.log('It works!');
// // Function Declaration
// function sayHello() {
//   console.log('Hello World');
// }
// // Function Expression
// const sayHello = function() {
//   console.log('Hello World');
// }
// // Arrow function expression
// const sayHello = () => {
//   console.log('Hello World');
// }
// // Arrow function expression (compact)
// const sayHello = () => console.log('Hello World');
// // Arrow function expression (compact) with single param & return value
// const sayHello = (name) => `Hello ${name}`;
// console.log( sayHello('Usman') );
// const add = function(x, y) {
//   return x + y;
// }
// const add = (x, y) => x + y;
const instructors = ['Usman', 'Mohammad', 'Hisham', 'Sager'];
const greetings = [];
// Hello Usman, Hello Mohammad, ..., ...
let instructorsCopy = [];
// // For Loop
// for (let i = 0; i < instructors.length; i++) {
//   instructorsCopy.push(instructors[i]);
// }
// // forEach Loop
// instructors.forEach(function(item) {
//   instructorsCopy.push(item);
// });
// instructorsCopy = instructors.map(function(item) {
//   return `Hello ${item}`;
// });
// console.log(instructorsCopy);
// const messages = ['Hello Usman', 'Hello Hisham', 'Bye Sager'];
// const helloMessages = messages.filter(function(item) {
//   return item.includes('Hello');
// });
// console.log(helloMessages);
const numbers = [2, 4, 6, 8, 12];
// let sumTotal = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sumTotal += numbers[i];
// }
// console.log('test', sumTotal);
const total = numbers.reduce(function(accumulator, currentNumber) {
  console.log('from inside', accumulator)
  return accumulator + currentNumber;
});
console.log(total);