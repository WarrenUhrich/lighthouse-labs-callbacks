sayHello1('Domara');

// Basic function declaration.
function sayHello1(name) {
    console.log(`Hello, ${name}!`);
}

// Function expression.
const sayHello2 = function(name) {
    console.log(`Hello, ${name}!`);
};

sayHello2('Erkan');

sayHello2.mySecretMessage = 'shhh, this is secret!';

console.log(sayHello2.mySecretMessage);

// Store array of functions

const functions = [];
functions.push(sayHello1);
functions.push(sayHello2);

console.log(functions);

functions[1]('Michael');

// Execute all funcs in the array?
for(const func of functions) {
    func('Aarij');
}
