// function add(a,b){
//   return a + b;
// };
//
// console.log(add(3,1));
//
// var toAdd = [9,5];
//
// console.log(add(...toAdd));

// var groupA = ['jen', 'cory'];
// var groupB = ['vikram'];
// var final = [...groupA,...groupB];
// console.log(final);


var person = ['Andrew',25];
var person2 = ['Jen',29];

function greeting (name,age){
  console.log('Hi ' + name + ', you are ' + age);
};

greeting(...person);
greeting(...person2);

var names = ['Mike', 'Ben'];
var final = ['Andrew',...names];

final.forEach(function(name){
  console.log('Hi ' + name + '!');
});
