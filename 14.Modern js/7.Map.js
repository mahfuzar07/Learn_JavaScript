//Map Collection
let map = new Map([
	['a', 10],
	['b', 20],
	['c', 30],
]);
map.set('d', 40);
map.delete('a');
console.log(map);
console.log(map.size);
console.log(map.get('b'));
console.log(map.values());
console.log(map.keys());

map.forEach((value, keys) => {
	console.log(value, keys);
});

// -----------weak Map--------------
//weck Map is work for object
let obj = { a: 10, b: 20 };

let weakMap = new WeakMap([obj]);
console.log(weakMap);
