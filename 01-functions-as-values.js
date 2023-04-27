console.log(sayHello('Camron')); // Function declarations are hoisted
// console.log(sayHello2('Camron')); // Function expressions are not hoisted

// Basic function declaration
function sayHello(name) { // Expected parameter
    return `Hello, ${name}!`;
}

console.log('sayHello(\'Keegan\'):', sayHello('Keegan')); // Passing in arguments.
console.log('sayHello(\'Alex\'):', sayHello('Alex')); 

// const result = sayHello('Sourav');

// Function expression
const sayHello2 = function(name) {
    return `Hello, ${name}!`;
};

console.log('sayHello2(\'Ryan\')', sayHello2('Ryan'));

// Store functions in an array
const functions = [];
functions.push(sayHello);
functions.push(sayHello2);

console.log('functions array:', functions);

const result = functions[1]('Hossein');
console.log('functions[1](\'Hossein\')', result);

for(const func of functions) {
    console.log('in our loop:', func('Caleb'));
}

for(const func in functions) {
    console.log(functions[func]('Carmelia'));
}
