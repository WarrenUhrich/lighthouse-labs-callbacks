/**
 * What is the Array.prototype.forEach() method?
 * 
 * Allows us to run a function/callback on each item in an array.
 * 
 * (Traditionally we might reach for... C-Style, for...of, for...in)
 */

const books = [
    '1984',
    'The Hunger Games',
    'Mistborn'
];

// books.forEach((book, index, array) => {
//     console.log(book);
// });

/**
 * Our own array forEach function!
 */

const forEach = (array, callback) => {
    for(let index = 0; index < array.length; index++) {
        const item = array[index];
        callback(item, index, array);
    }
    // undefined implicit return!
};

forEach(books, (book, index, array) => {
    console.log(book);
});

forEach(books, book => console.log(book));

forEach(books, book => console.log(` * ${book}`));
