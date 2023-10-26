const otherHello = sayHello('Cody'); // Function declarations are HOISTED.
// console.log('otherHello', otherHello); // (we can call them before they are defined in-file)

// const otherGoodbye = sayGoodbye('Sasha'); // Throws an error, sayGoodbye is not defined.
// console.log('otherGoodbye', otherGoodbye); // What will happen?

// "Function Declaration" - ARE hoisted.
function sayHello(name) {
    return `Hello, ${name}!`;
}

const firstGreeting = sayHello('Sofia');
// console.log('firstGreeting', firstGreeting); // What's inside?

// console.log(sayHello('Matthew')); // What will we see?
// console.log(sayHello); // What will we see?

// "Function Expression" - this is NOT hoisted.
const sayGoodbye = function(name) {
    return `Goodbye, ${name}!`;
};

const firstGoodbye = sayGoodbye('Alysha');
// console.log('firstGoodbye', firstGoodbye);

// I want to put our functions into an array?
const funcs = [];

funcs.push(sayHello);
funcs.push(sayGoodbye);

// console.log('funcs', funcs);

for(const func of funcs) {
    // console.log(func('Paul'));

    const stringifiedFunc = String(func);
    console.log(stringifiedFunc);
}
