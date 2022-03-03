//...rest operator reduce arguments
function sum(...rest) {
	return rest.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3, 4, 5));

//.../spreed  array
let a = [1, 2, 3];
console.log(...a);

//...spreed  object
let obj = {
	a: 10,
	b: 20,
	c: 30,
};
console.log(obj);
let obj2 = { ...obj };
obj2.b = 50;
console.log(obj2);
