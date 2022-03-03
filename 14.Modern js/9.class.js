class Rectangle {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	draw() {
		console.log(`Width is ${this.width} and Height is ${this.height}`);
	}
}
let rect1 = new Rectangle(40, 60);
rect1.draw();
