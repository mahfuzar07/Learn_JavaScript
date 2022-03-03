// If a function is not a method of a JavaScript object, it is a function of the global object.
//Methods like call(), apply(), and bind() can refer this to any object.

var obj = {
	a: 10,
	b: 10,
};
function add(c) {
	console.log(this.a + this.b + c);
}
// The call() method takes arguments separately.
add.call(obj, 10);
//The apply() method takes arguments as an array
add.apply(obj, [10]);
//bind
add.bind(obj)(5);
