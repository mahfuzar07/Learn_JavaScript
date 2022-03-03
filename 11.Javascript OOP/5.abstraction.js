//JavaScript Abstraction
//An abstraction is a way of hiding the implementation details and showing only the functionality to the users. In other words, it ignores the irrelevant details and shows only the required one.

var Ractangle = function (width, height) {
	this.width = width;
	this.height = height;

	var print = function () {
		console.log('width is ' + this.width);
		console.log('height is ' + this.height);
	}.bind(this);

	this.draw = function () {
		print();
	};
};
var rect = new Ractangle(400, 200);
rect.draw();

//here print function hiding the implementation details and showing only the functionality to the users.
