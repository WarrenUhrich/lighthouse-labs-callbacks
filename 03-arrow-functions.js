// Declaration
function sayHelloDeclaration(name) {
    return `Hello, ${name}!`;
}

// Expression
const sayHelloExpression = function (name) {
    return `Hello, ${name}!`;
};

// Arrow
const sayHelloArrow = (name) => { // If you have more than one param, use parentheses!
    return `Hello, ${name}!`;
};

// Shorthand arrow
const sayHelloArrowShorter = name => `Hello, ${name}!`;

console.log(
    'sayHelloDeclaration: ',  sayHelloDeclaration('Arrow Function'), '\r\n',
    'sayHelloExpression: ',   sayHelloExpression('Arrow Function'), '\r\n',
    'sayHelloArrow: ',        sayHelloArrow('Arrow Function'), '\r\n',
    'sayHelloArrowShorter: ', sayHelloArrowShorter('Arrow Function'), '\r\n'
);
