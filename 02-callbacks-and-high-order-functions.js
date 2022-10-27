const sayHello = function(name) {
    console.log(`Hello, ${name}!`);
};

// High order function (accepts a function as an argument.)
const runOurFunction = function(callback) {
    console.log('runOurFunction is running!');
    callback();
};

// runOurFunction highOrderFunction
// sayHello is the callback
runOurFunction(sayHello);
