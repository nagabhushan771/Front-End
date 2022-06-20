//Any function that takes another function as the input or return the another function as output that is called higher order function
const radius = [6, 2, 1, 3];

const area = function (radius) {
  return Math.PI * radius * radius;
};

const circumference = function (radius) {
  return 2 * Math.PI * radius;
};

const diameter = function (radius) {
  return 2 * radius;
};

// const calculate = function (arr, logic) {
//   const output = [];
//   arr.forEach((element) => {
//     output.push(logic(element));
//   });
//   return output;
// };

// console.log(calculate(radius, diameter));
// console.log(calculate(radius, circumference));
// console.log(calculate(radius, area));

//* To convert any function to prototype of the Array
Array.prototype.calculate = function (logic) {
  const output = [];
  this.forEach((element) => {
    output.push(logic(element));
  });
  return output;
};

console.log(radius.calculate(diameter));
console.log(radius.calculate(circumference));
console.log(radius.calculate(area));
