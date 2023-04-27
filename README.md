# Lighthouse Labs | Callbacks

[GitHub Repository Branch](https://github.com/WarrenUhrich/lighthouse-labs-callbacks/tree/2023.04.27-web-flex-day-17april2023) | [Vimeo Video Recording](https://vimeo.com/821786768/57025e4609?share=copy)

* [X] Functions as Values
* [X] Callbacks and Higher Order Functions
* [X] Anonymous Functions
* [X] Arrow Functions
* [X] Make our own Higher Order Functions

### Functions as Values

* Just like everything else in JavaScript, functions are values
* As a result, they can be stored in variables just like any other value

```js
const myFunction = function() {
  // do something
};
```

* They can also be passed around just like any other variable

```js
const myFunction = function() {
  // do something
}

const myVar = myFunction;

myVar(); // equivalent to calling myFunction()
```

* And they can be passed to other functions as arguments

```js
const myFunction = function() {
  // do something
}

const myHigherOrderFunction = function(callback) {
  callback(); // equivalent to myFunction()
}

myHigherOrderFunction(myFunction);
```

### Callbacks and Higher Order Functions

* A callback is a function that gets passed to another function to be executed by that function
* Callback functions are used all over the place in JavaScript
* They encapsulate reusable code that can be passed around like any other JS variable
* We call the function that accepts another function as an argument a **higher order function**

### Anonymous Functions

* We can pass callback functions _inline_ to a higher order function rather than storing the callback in a variable first

```js
const myHigherOrderFunction = function(callback) {
  callback();
}

// the function we pass as an argument has no name
myHigherOrderFunction(function() {});
```

* Anonymous functions are simply functions that do not have a name
* [Naming things is hard](https://martinfowler.com/bliki/TwoHardThings.html)

### Arrow Functions

* Arrow functions give us a syntactic alternative to using the `function` keyword

```js
// function keyword
const myFunc = function() {
  // do something
};

// arrow function
const myArrowFunc = () => {
  // do something
};
```

* There are some _gotchas_ around using the `this` keyword inside an arrow function, but if you aren't using `this`, arrow functions can be used interchangeably with "regular" functions
* Arrow functions are often used as callbacks because they are shorter/cleaner to type

```js
arr.forEach(function(element) {});

// vs
arr.forEach((element) => {});
```

### Useful Links

* [Wikipedia: Callbacks](https://en.wikipedia.org/wiki/Callback_(computer_programming))
* [MDN: Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
