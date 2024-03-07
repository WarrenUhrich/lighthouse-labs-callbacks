/**
 * Higher Order Function:
 * Any function that follows at least one of two rules...
 * 1. Accept a function as an argument (accepts a callback.)
 * 2. Returns a function as its result.
 * 
 * Callback:
 * Any function passed into another as an argument.
 */

const sayHello = function(name) {
    return `Hello, ${name}!`;
};

const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

// Higher order function! Accepts a callback in this case:
const higherOrderFunction = function(callback) {
    console.log('higherOrderFunction is starting!');

    const result = callback('Mr. higherOrderFunction');
    console.log('result from callback:', result);

    console.log('higherOrderFunction is ending!');
};

higherOrderFunction(sayHello);
higherOrderFunction(sayGoodbye);

/**
 * What are anonymous functions?
 * * These are functions without a name
 * * If you think a callback will only ever be used ONCE, an anonymous function is often preferred.
 * * Benefit: naming is difficult...!
 */

higherOrderFunction(function(text) {
    return text.toUpperCase();
});

higherOrderFunction(function(text) {
    return text.toLowerCase();
});

const anotherListOfFunctions = [
    sayHello,
    sayGoodbye,
    higherOrderFunction,
    function() { return 'I\'m anonymous!'; },
    function() { return '3 + 3 is 6!'; },
];

// Can run any of the above...
anotherListOfFunctions[1]();
anotherListOfFunctions[4]();

