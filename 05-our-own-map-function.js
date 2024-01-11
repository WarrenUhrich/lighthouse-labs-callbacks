// What is the map method?

const favouriteMovies = [
    'The Room',
    'Jurassic Park',
    'Inception',
    'Battlefield Earth',
    'TRON (1982)'
];

const lowerCaseMovies = favouriteMovies.map(movie => movie.toLowerCase());
console.log('lowerCaseMovies:', lowerCaseMovies);
console.log('favouriteMovies:', favouriteMovies);

const map = (array, transformation) => {
    // Create a new array!
    const newArray = [];
    // Loop through values...
    for(const item of array) {
        // Transform item.
        const transformed = transformation(item);
        // Add transformed version to the array.
        newArray.push(transformed);
    }
    // Return the new array.
    return newArray;
};

const upperCaseMovies = map(favouriteMovies, movie => movie.toUpperCase());
console.log('upperCaseMovies:', upperCaseMovies);
console.log('favouriteMovies:', favouriteMovies);

// console.log(String(Array.prototype.map));