//variables (var let const)
//var variable
var js = 'Hello!';
console.log(js);

var firstName = 'Mahfuzar Rahman';
console.log(js, firstName);

//let variable ( not assign same variable but change same variable value,assign new variable, block scope  )
function letNumber() {
	let y = 20;
	y = y + 1;
	console.log(y);
}
letNumber();

//const variable ( not Assign same variable,assign new variable, and not change same variable value, block scope )
function constNumber() {
	const z = 30;
	a = z + 1;
	console.log(a);
}
constNumber();
