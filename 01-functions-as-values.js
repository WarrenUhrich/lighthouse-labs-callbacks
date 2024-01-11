// myFunction(); // Errors! Oh no! Expressions must be used AFTER assignment.
myOtherFunction(); // Declarations can be used BEFORE assignment.

const myFunction = function () { return 'Hello, World!'; }; // Function expression

function myOtherFunction() { return 'Goodbye, World!'; } // Function declaration

// myFunction();
// myOtherFunction();

const expressionGreeting = function(name) {
    return `Hello, ${name}!`;
};

console.log(
    expressionGreeting('Mikhail'),
    expressionGreeting('Evangelo'),
    expressionGreeting('Cedric')
);

const listOfLangs = function() {
    return `
        * JavaScript
        * Python
        * Ruby
        * SQL
        * PHP
    `;
};

console.log( listOfLangs() );

console.log( String(listOfLangs) ); // Shows the source code!

// I want an array of functions, and I want to run them all.
const arrayOfFuncs = [expressionGreeting, listOfLangs, myFunction, myOtherFunction];
console.log('arrayOfFuncs:', arrayOfFuncs);

for(const func of arrayOfFuncs) {
    console.log(
        func,  // Shows us WHICH function!
        func() // Runs the function, shows us the RETURN value.
    );
}
