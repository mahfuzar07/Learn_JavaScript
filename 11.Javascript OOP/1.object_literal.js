//object Literal
var rect = {
	name: 'object literal',
	width: 100,
	height: 50,

	draw: function () {
		console.log('I am a rectangle ');
		console.log('my width is ' + this.width);
		console.log('my height is ' + this.height);
	},
};
console.log(`-- ${rect.name} --`);
rect.draw();
