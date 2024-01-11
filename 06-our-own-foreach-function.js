// forEach

const books = [
    'Tom Clancy\'s Hunt for the Red October',
    'Hunger Games',
    'Hitchhiker\'s guide to the Galaxy',
    'Mistborn'
];

const outputWithStars = (book, index, array) => console.log(`${index + 1}/${array.length} ⭐⭐⭐⭐⭐ ${book}`);

books.forEach(outputWithStars);

const forEach = (array, callback) => {
    for(let index = 0; index < array.length; index++) {
        const element = array[index];
        callback(element, index, array);
    }
};

forEach(books, outputWithStars);
