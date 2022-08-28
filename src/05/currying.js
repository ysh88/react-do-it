const multiply = (a, b) => a * b;
const add = (a, b) => a + b;

const multiplyX = x => a => a * x;
const addX = x => a => a + x;

const addFour = addX(4);
const multiplyTwo = multiplyX(2);
const multiplyThree = multiplyX(3);

const formula = x => addFour(multiplyThree(multiplyTwo(x)));
console.log(formula(10));


