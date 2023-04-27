const cities = [
    'Vancouver',
    'Winnipeg',
    'Montreal',
    'Toronto',
    'Edmonton',
    'Victoria'
];


const map = (array, callback) => {
    const newMappedArr = [];

    for(const item of array) {
        const updatedItem = callback(item);
        newMappedArr.push(updatedItem);
    }

    return newMappedArr;
};

const lowerCities = map(cities, (city) => city.toLowerCase());
console.log(lowerCities);

const upperCities = map(cities, function(city) {
    return city.toUpperCase();
});
console.log(upperCities);

const liCities = map(cities, city => `<li>${city}</li>`);
console.log(liCities);

const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredNums = map(numbersArr, num => num * num);
console.log(squaredNums);

const plusTwoNums = map(numbersArr, num => num + 2);
console.log(plusTwoNums);

// console.log(cities);

// const upperCities = cities.map(function(city) {
//     return city.toUpperCase();
// });

// console.log(upperCities);

// const turnStringIntoLI = function(city) {
//     return `<li>${city}</li>`;
// };
// const liCities = cities.map(turnStringIntoLI);

// console.log(liCities);

// const lowerCities = cities.map(city => city.toLowerCase());
// console.log(lowerCities);

