//pass by value vs pass by reference
//cal; by value vs call by reference

//pass premitive data so no change original value
var n = 10;
function add(n) {
	n = n + 100;
	console.log(n);
}
add(n);
console.log(n);

//pass reference change main object value
var obj = {
	a: 10,
	b: 20,
};
function change(obj) {
	obj.a = obj.a + 100;
	obj.b = obj.b + 100;
	console.log(obj);
}
change(obj);
console.log(obj);
