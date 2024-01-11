// Callbacks:
// Any time a function is passed as an argument (to a function.)

// Higher order function:
// Any function that follows one of these two rules...
// 1. Accept a function as an argument (accepts a callback.)
// 2. Return a function as its result.

const sayHello = function(name) {
    return `Hello, ${name}!`;
};

const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

const higherOrderFunction = function(callback) { // Accepting a function as an arg. makes this higher-order.
    console.log('higherOrderFunction is starting...');

    const result = callback('Mr. HigherOrderFunction');
    console.log('result:', result);

    console.log('higherOrderFunction is done!');
};

higherOrderFunction(sayHello);
higherOrderFunction(sayGoodbye);

// A popular pattern when working with callbacks is to use anonymous functions!
// Anonymous Function: a function without a name!

higherOrderFunction(function(name) {
    name = name.replace('Mr. ', 'Mrs. ');
    return name;
});

higherOrderFunction(function(name) {
    name = name.split('').reverse().join('');
    return name;
});
