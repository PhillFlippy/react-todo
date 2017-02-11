// function add(a,b){
//   return a+b;
// }
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
// console.log(add(...toAdd));


// var groupA = ['fsd', 'rwefs'];
// var groupB = ['sfadwer', 'jntyguh'];
// var final = [3, ...groupA, groupB];
//
// console.log(final);

var person = ['sf', 24];
var personTwo = ['dsa', 23];

function greet (name, age){
  console.log('Hi ' +name + ", you are " + age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Bo'];
var final = ['andrew', ...names];

final.forEach(function(name){
  console.log('Hi '+name);
});
