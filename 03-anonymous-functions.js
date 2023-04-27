// An anonymous function is one that has no name
// * if you only need it once, save the space and time!
// * naming is hard

const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

const runOurFunction = function(callbackFunction) {
    console.log('runOurFunction is running...');

    callbackFunction('runOurFunction'); // Run our callback.

    console.log('runOurFunction is done.');
};

runOurFunction(sayHello);
runOurFunction(sayHello);
runOurFunction(function() {
    console.log('I\'m an anonymous function!');
});
