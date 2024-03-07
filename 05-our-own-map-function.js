/**
 * What is the Array.prototype.map() method?
 * 
 * Applies a transformation to an array, creating a copy.
 * The function we pass-in, its return will replace the original value.
 */

const favouriteMovies = [
    'Forrest Gump',
    'Good Fellas',
    'TRON'
];

// Built-in map method...
// const lowerCaseMovies = favouriteMovies.map((movie, index, arr) => {
//     return movie.toLowerCase();
// });

// console.log('lowerCaseMovies:', lowerCaseMovies);
// console.log('favouriteMovies:', favouriteMovies);

/**
 * Let's build our own array map function!
 */

// map is a higher order function! Accepts "transformation", a callback!
const map = (array, transformation) => {
    // To ensure we're working on a NEW array (don't want to override the original.)
    const newArr = [];
    // We're applying the transformation to each item in our array.
    for(let index = 0; index < array.length; index = index + 1) {
        const item = array[index];
        const transformedValue = transformation(item, index, array);
        newArr.push(transformedValue);
    }
    // Return the updated/transformed copy of the array.
    return newArr;
};

const lowerCaseMovies = map(favouriteMovies, (movie, index, arr) => {
    return movie.toLowerCase();
});
console.log('lowerCaseMovies:', lowerCaseMovies);
console.log('favouriteMovies:', favouriteMovies);

const upperCaseMovies = map(favouriteMovies, movie => movie.toUpperCase());
console.log('upperCaseMovies:', upperCaseMovies);
console.log('favouriteMovies:', favouriteMovies);

const listItemMovies = map(favouriteMovies, movie => `<li>${movie}</li>`);
console.log('listItemMovies:', listItemMovies);
console.log('favouriteMovies:', favouriteMovies);

const showIndex = map(favouriteMovies, (movie, i) => `${i}. ${movie}`);
console.log('showIndex:', showIndex);
console.log('favouriteMovies:', favouriteMovies);
