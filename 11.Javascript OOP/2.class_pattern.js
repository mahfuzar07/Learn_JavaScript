//class factory pattern
var createRect = function (width, height) {
	return {
		width: width,
		height: height,

		draw: function () {
			console.log('widht is ' + this.width);
			console.log('height is ' + this.height);
		},
	};
};
var rect = createRect(40, 20);
rect.draw();

//class contstructor pattern
var Ractangle = function (width, height) {
	this.width = width;
	this.height = height;

	this.draw = function () {
		console.log('widht is ' + this.width);
		console.log('height is ' + this.height);
	};
};
var rect1 = new Ractangle(400, 200);
rect1.draw();
