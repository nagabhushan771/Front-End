/* 
*Properties
*Anything as the key to an object which is not a function
*eg. length

*Methods
*Functions given as keys to the object where this keyword refers to the parent object
*eg. filter(), .map, foreach, floor, split, pop ,push, join, sort

*Events
*click, mouseover, change => this keyword in case of an event will refer to the element on which the event occured
*/

// const person = {
//   firstName: "Nagabhushan",
//   lastName: "N",
//   age: 46,
//   fullName: function(){
//       return `${this.firstName} ${this.lastName}`;
//   }
// };

// person.fullName = function () {
//   return `${this.firstName} ${this.lastName}`;
// };

// console.log(this);
// document.getElementById('demo').innerHTML = person.fullName();
// console.log(person.fullName());

/*
constructor invokes the creation of the object
it is a constructor when we call it with the new key word
and it returns the object the difeined parameters in the constructor method
*/

// function personConstructor(fName, lName) {
//   this.firstName = fName;
//   this.lastName = lName;
// }

// const person2 = new personConstructor("Tulsi", "Kumar");
// console.log(person2.firstName);

//CALL => write a method but it can be used with different objects
// const person = {
//   work: function () {
//     return this.genere + " " + this.profession;
//   },

//   intro: function (city, country) {
//     return `${this.firstName} ${this.lastName} is a ${this.genere} ${this.profession} lives in ${city}, ${country}`;
//   },
// };

// const developer = {
//   firstName: "Nagabhushan",
//   lastName: "N",
//   genere: "Full-Stack",
//   profession: "Developer",
// };

// const designer = {
//   firstName: "Tulsi",
//   lastName: "Kumar",
//   genere: "UI/UX",
//   profession: "Designer",
// };

// console.log(person.work.call(developer));
// console.log(person.intro.call(designer, "Delhi", "India"));

//apply() method can also be used to call same functions on different objects
// console.log(person.work.apply(designer));

//apply() => takes arguments other the target object in the form of array
// console.log(person.intro.apply(designer, ["Delhi", "India"]));

// bind() => object will be able to borrow the method
// const person = {
//   firstName: "Nagabhushan",
//   lastName: "N",
//   Name: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// const member = {
//   firstName: "Tulsi",
//   lastName: "Kumar",
// };
//fullName will have the Name function of the person bound to it with the member object
// let fullName = person.Name.bind(member);
// console.log(fullName);

//setTimeout() => used to delay the execution of the mention method by the menioned amount of miliSeconds
console.log("Hey");
console.log("This");
setTimeout(myName, 2000);
console.log("is");

function myName(){
    console.log("Nagabhushan");
}