// Localized / one-time use...
// It's hard to name things...

const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

const runOurFunction = function(callback) {
    console.log('runOurFunction is running!');
    callback();
};

runOurFunction(sayHello);

runOurFunction(function() { // an anonymous function
    console.log('Goodbye!');
});