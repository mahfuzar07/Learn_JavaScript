function makeWords(text) {
	try {
		let str = text.trim();
		let words = str.split(' ');
		console.log(words);
	} catch (e) {
		console.log('Please Provide a Valid Text');
	}
}

let words = makeWords(86);
