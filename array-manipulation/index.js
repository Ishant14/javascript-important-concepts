var myArray = [1,2,3,5]

myArray.push("end");
myArray.unshift("start");

console.log(myArray);


// Now to do in ES6

var es6Array = [1,2,3,5]

es6Array = [...es6Array, "end"];
es6Array = ["start", ...es6Array];

console.log(es6Array);
