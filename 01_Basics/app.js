console.log('Hello World!');

var person = {
	firstName : "Dragon",
	lastName : "Warrior"
};

function addNumbers(a, b){
	return a + b;
};

function worthless(){};
// in node, all functions must have return value,
// otherwise undefined is returned

var printFunction = function(){
	console.log('Welcome to the new world!');
}
// we dont always need names for a function, we can make them as 
// anonymous functions, and assign them to variables

console.log(person);
console.log(addNumbers(7, 8));
console.log(worthless());
printFunction();

// can now use the variable names for anonymnous functions inside other functions
setTimeout(printFunction, 2000);

// everything is through references in node
var dragon = {
	favColor : "black"
};

console.log(dragon.favColor);

var newDragon = dragon;
newDragon.favColor = "red";

console.log(dragon.favColor);

console.log(19 == '19'); // true
console.log(19 === '19'); // false

// this keyword
var Dragon = {
	printFunction(){
		console.log('My name is Dragon!');
		console.log(this === Dragon);
	}
};

// the default calling context is global
function noVarFunction(){
	console.log('I am not assined to any var');
	console.log(this === global);
};

Dragon.printFunction();
NewDragon = Dragon;
NewDragon.printFunction();
noVarFunction();