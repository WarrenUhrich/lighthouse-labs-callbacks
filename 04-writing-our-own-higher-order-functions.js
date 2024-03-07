const candies = [
    'Coffee Crisp',
    'Skittles',
    'Kinder Bueno',
    'KitKat',
    'Candy Corn'
];

const holidays = [
    'St. Patrick\'s Day',
    'Easter',
    'Halloween'
];

// for(const candy of candies) {
//     console.log(`-> ${candy}`);
// }

// Higher order function!
const loopThroughArr = (arr, callback) => {
    for(const item of arr) {
        callback(item);
    }
};

loopThroughArr(candies, console.log);
loopThroughArr(holidays, (holiday) => { console.log(holiday.toUpperCase()); });

loopThroughArr(candies, (candy) => {
    if(candy === 'Candy Corn') console.log('Gross, this is a bad one...');
    else console.log(`Yum! ${candy}!`);
});

const reverseText = text => console.log(
    text.split('').reverse().join('')
);

loopThroughArr(holidays, reverseText);
