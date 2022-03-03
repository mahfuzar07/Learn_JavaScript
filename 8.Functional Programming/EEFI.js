!(function () {
  console.log('Hello, I am EEFI');
})();

void (function () {
  console.log('Hello, I am Also EEFI');
})()(
  // (function () {
  //     console.log('I am Classic Style EEFI')
  // }())

  // (function () {
  //     console.log('I am Classic Style EEFI')
  // })()

  function sayHello(name) {
    console.log('Hello, ' + name);
  }
)('Mahfuzar Rahman');
