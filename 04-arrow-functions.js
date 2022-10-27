// function expression syntax.
const sayHello1 = function(name) {
    return `Hello there, ${name}!`;
};

console.log( sayHello1('Jacky') );

// arrow syntax function
const sayHello2 = (name) => {
    return `Hello there, ${name}!`;
};

console.log( sayHello2('Jacky') );

// 1 argument... we can exclude the parameter parenthesis
// 1 line of logic... we can exclude the code block curly braces
// 1 line will return implicitly (no need for keyword)
const sayHello3 = name => `Hello there, ${name}!`;

console.log( sayHello3('Jacky') );

// benefits?
// * no function keyword to have to type or misspell
// * 1 argument... we can exclude the parameter parenthesis
// * 1 line of logic... we can exclude the code block curly braces
// * 1 line will return implicitly (no need for keyword)

// downsides?
// * can be trickier to read if you're unfamiliar
// * doesn't keep track of `this`, will look for a parent function's

const runOurFunction = callback => {
    console.log('runOurFunction is running!');
    console.log(callback('runOurFunction'));
};

runOurFunction(sayHello3);
runOurFunction(text => `<<<NEW FORMATTED TEXT:${text}:>>>`);
