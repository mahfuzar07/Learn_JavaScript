//ES5 function
function add(a, b) {
	return a + b;
}
console.log(add(10, 20));

//arrow function
let sub = (a, b) => a + b;
console.log(sub(10, 20));

//arrow function this
let obj = {
	name: 'Mahfuzar',
	print: function () {
		setTimeout(() => {
			console.log(`Hello  ${this.name}`);
		}, 0);
	},
};
obj.print();
