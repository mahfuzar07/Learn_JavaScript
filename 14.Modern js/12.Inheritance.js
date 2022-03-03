class Car {
	constructor(brand) {
		this.carname = brand;
	}
}
//To create a class inheritance, use the extends keyword.
class Model extends Car {
	constructor(brand, mod) {
		super(brand); //The super() method refers to the parent class.
		this.model = mod;
	}
	show() {
		console.log('I have a ' + this.carname + ' it is a ' + this.model);
	}
}

let myCar = new Model('Ford', 'Mustang');
myCar.show();
