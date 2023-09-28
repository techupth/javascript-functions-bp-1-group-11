// Exercise #4 Grouping Function with Objects

// Start coding here
let add = (a, b) => {return a+b};
let subtract = (a, b) => {return a-b};
let multiply = (a, b) => {return a*b};
let divide = (a, b) => {return a/b};

let calculator = {add, subtract, multiply, divide}

let resultAdd = calculator.add(10, 20);
console.log(resultAdd)

let resultDivide = calculator.divide(3000, 10);
console.log(resultDivide)

