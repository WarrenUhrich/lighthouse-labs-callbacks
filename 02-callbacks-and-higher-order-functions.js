// higher-order function?
// Any function that follows at least one of two rules:
// 1. Accepts a function as an argument
// 2. Returns a function as a result

// callback?
// Any function passed into another as an argument

const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};
const sayGoodbye = function(name) {
    console.log(`Goodbye, ${name}!`);
};

const runOurFunction = function(callbackFunction) {
    console.log('runOurFunction is running...');

    callbackFunction('runOurFunction'); // Run our callback.

    console.log('runOurFunction is done.');
};

runOurFunction(sayHello);
runOurFunction(sayGoodbye);
