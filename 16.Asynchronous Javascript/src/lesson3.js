function sayMyName(name) {
  let result;
  setTimeout(() => {
    console.log('I have done...');
    console.log(name);
  }, 3000);
  return result;
}

let output = sayMyName('HM Nayem');
console.log(output);
