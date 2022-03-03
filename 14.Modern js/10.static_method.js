let str = '{ "name": "Mahfuzar", "email": "mahfuzar@gmail.com" }';

class Person {
	constructor(name, email) {
		this.name = name;
		this.email = email;
	}
	print() {
		console.log(this.name, this.email);
	}
	static createPerson(str) {
		let person = JSON.parse(str);
		return new Person(person.name, person.email);
	}
}

let p1 = Person.createPerson(str);
console.log(p1);
p1.print();
