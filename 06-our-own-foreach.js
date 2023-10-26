// Our own higher order "forEach" function!
const forEach = (array, callback) => {
    for(const index in array) {
        // console.log('index', index); console.log('value', array[index]); console.log('array', array);
        const element = array[index];
        callback(element, index, array);
    }
};

const programmingLanguages = ['JavaScript', 'Ruby', 'Python', 'PHP'];

forEach(programmingLanguages, (programmingLang, index) => console.log(`${index}: ${programmingLang}`));

// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
programmingLanguages.forEach((programmingLang, index) => console.log(`${index}: ${programmingLang}`));

console.log(String(Array.prototype.forEach));
