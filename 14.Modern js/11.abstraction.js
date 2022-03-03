//JavaScript Abstraction
//An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.
const _print = Symbol();
class Ractangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	[_print]() {
		console.log('width is ' + this.width);
		console.log('height is ' + this.height);
	}

	draw() {
		this[_print]();
	}
}

var rect = new Ractangle(400, 200);
rect.draw();

//here print function hiding the implementation details and showing only the functionality to the users.
