// Declaration
// Declared functions can be hoisted!
function sayHelloDeclaration(name) {
    return `Hello, ${name}!`;
}

// Expression
const sayHelloExpression = function(name) {
    return `Hello, ${name}!`;
};

// Arrow
const sayHelloArrow = (name) => {
    return `Hello, ${name}!`;
};

// Shorthand for simple one-line return arrow functions!
// If there is only parameter, the parentheses are optional.
// If it is a one-line return, the curly braces are not required.
const sayHelloArrow2 = name => `Hello, ${name}!`;

console.log(
    'sayHelloDeclaration:', sayHelloDeclaration('Amrinder'), '\r\n',
    'sayHelloExpression:', sayHelloExpression('Amin'), '\r\n',
    'sayHelloArrow:', sayHelloArrow('Aaron'), '\r\n',
    'sayHelloArrow2:', sayHelloArrow2('Lily'), '\r\n'
);
