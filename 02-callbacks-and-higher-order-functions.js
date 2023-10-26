// callbacks
// Any function we pass into another function.

// higher order functions
// Any function that follows AT LEAST ONE of these two rules:
// 1. Accepts a function as an argument (aka accepts a callback)
// 2. Return a function as its result

function sayHello(name) {
    return `Hello, ${name}!`;
}
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

const higherOrderFunction = function(callbackFunction) {
    console.log('higherOrderFunction is starting...');

    const result = callbackFunction('higherOrderFunction');
    console.log('callbackFunction result:', result);

    console.log('higherOrderFunction is finished...');
};

higherOrderFunction(sayHello);
higherOrderFunction(sayGoodbye);

/**
 * An anonymous function is one that has no name!
 * * if you only need it once, save the space and time
 */
higherOrderFunction(function (string) {
    string = string.split('');
    string = string.reverse();
    return string.join('');
});
