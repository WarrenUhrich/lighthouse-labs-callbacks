// Declaration
function sayHello(name) {
    return `Hello, ${name}!`;
}

// Expression
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

// Arrow function - NOT hoisted - arrow functions don't bind the `this`
const sayGoodJob = (name) => {
    return `Good job, ${name}!`;
};
console.log('sayGoodJob', sayGoodJob('Spencer'));

// If you have only 1 parameter, parentheses are optional
// If you have only 1 line of logic you want to return, curly braces and 'return' are optional
const sayAwesomeJob = name => `Awesome job, ${name}!`;
console.log('sayAwesomeJob', sayAwesomeJob('Spencer'));
