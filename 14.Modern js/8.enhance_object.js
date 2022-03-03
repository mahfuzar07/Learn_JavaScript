let a = 10,
	b = 20;

let obj = {
	a, //a:a
	b, //b:b
	print() {
		console.log(this);
	},
};
obj.print();

//object destructuring
let person = {
	name: 'Mahfuzar Rahman',
	email: 'mahfuzar271@gmail.com',
	address: {
		city: 'Dhaka',
	},
};
//destructuring
// let {properties name} = object name
let {
	name,
	email,
	address: { city },
} = person;
console.log(name, email, city);

//object transforme  array

let transform = Object.entries(person);
console.log(transform);
console.log(transform[1]);

//array transforme Object
let arrayObject = [
	['a', a],
	['b', b],
];
console.log(Object.fromEntries(arrayObject));
