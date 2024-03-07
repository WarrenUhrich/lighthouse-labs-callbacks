console.log(
    // myFunction(), // Function expressions CANNOT be called before initialization.
    myOtherFunction() // Function declarations CAN be called before they're initialized/declared! "HOISTING"
);


// Function Expression - preffered! By why?
const myFunction = function() {
    return 'Hello, World!';
};

const myFuncResult = myFunction();
console.log('myFuncResult:', myFuncResult);

// Function Declaration
function myOtherFunction() {
    return 'Goodbye, World!';
}

const myOtherFuncResult = myOtherFunction();
console.log('myOtherFuncResult:', myOtherFuncResult);

console.log('myFunction:', myFunction, String(myFunction)); // The function itself! We can pass around a function by name.
console.log('myOtherFunction:', myOtherFunction, String(myOtherFunction)); // The function itself! We can pass around a function by name.

/**
 * Function Declaration for Asking How People Are!
 */

function declarationHowAreYou(name) {
    return `How are you, ${name}?`;
};

/**
 * Function Expression for Greeting People!
 */

const expressionGreeting = function(name) {
    return `Hello, ${name}!`;
};

console.log(
    expressionGreeting('Aaron') // How do I say hello to someone in particular?
);

const listOfNames = ['Amrinder', 'Anim', 'Aaron', 'Lily', 'Jasjot'];

for(const name of listOfNames) {
    console.log('*', expressionGreeting(name));
}

const listOfFunctions = [declarationHowAreYou, expressionGreeting];

console.log(
    listOfFunctions[0]('Amrinder')
);

// What do we expect to see?
for(const func of listOfFunctions) {
    console.log(
        func('Lily')
    );
}
