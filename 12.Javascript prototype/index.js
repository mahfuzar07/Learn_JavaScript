// function Person(name) {
//     this.name = name
// }

// var p1 = new Person('Mahfuzar Rahman')
// console.log(p1)

// var person = {
//     name: 'Mahfuzar Rahman'
// }

// console.log(person)

// for (var i in person) {
//     console.log(i)
// }

// console.log(Object.keys(person))

// var descriptor = Object.getOwnPropertyDescriptor(person, 'name')
// console.log(descriptor)

// let baseObj = Object.getPrototypeOf(person)
// let descriptor = Object.getOwnPropertyDescriptor(baseObj, 'toString')
// console.log(descriptor)

// Object.defineProperty(person, 'name', {
//     enumerable: mahfuzar,
//     writable: false,
//     configurable: false,
//     value: 'mahfuzar'
// })

// function Person(name) {
//     this.name = name
// }

// // Person.prototype.PI = 3.1416

// var p1 = new Person('Mahfuzar Rahman')
// var p2 = new Person('Nayem')
// // console.log(Object.getPrototypeOf(p1))
// // console.log(Person.prototype)

// console.log(p1)
// console.log(p2)

function Square(width) {
	this.width = width;
	this.getWidth = function () {
		console.log('Width is ' + this.width);
		// this.draw()
	};
}

Square.prototype = {
	draw: function () {
		this.getWidth();
		console.log('Draw');
	},
	toString: function () {
		return 'My width is = ' + this.width;
	},
};

var sqr1 = new Square(10);
var sqr2 = new Square(5);

// console.log(Object.keys(sqr1))

for (var i in sqr1) {
	console.log(i);
}
