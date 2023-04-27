const sayHello = function(name) {
    return `Hello, ${name}!`;
};

const sayHelloArrow = (name) => {
    return `Hello, ${name}!`;
};

const sayHelloArrowSlimmer = name => console.log(`Hello, ${name}!`);
sayHelloArrowSlimmer('Estelle');
// console.log(
//     'sayHelloArrowSlimmer(\'Brady\'):',
//     sayHelloArrowSlimmer('Brady')
// );

const runOurFunction = function(callbackFunction) {
    console.log('runOurFunction is running...');

    callbackFunction('runOurFunction'); // Run our callback.

    console.log('runOurFunction is done.');
};

runOurFunction((text) => console.log(`Hi! Text said: ${text}`));
runOurFunction((message) => console.log(`Oh wow, this is inside: ${message}!`));
runOurFunction(() => console.log(`Hi Mom! ${text}`));
