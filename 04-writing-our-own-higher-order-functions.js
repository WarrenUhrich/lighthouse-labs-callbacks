const candies = [
    'Twix',
    'KitKat',
    'Jolly Ranchers',
    'Crunch bar',
    'Kinder Bueno',
    'Fuzzy Peaches',
    'Lychee'
];

const loopThroughArray = (array, callback) => {
    for(const item of array) {
        callback(item);
    }
};

const printSnackMessage = (snack) => {
    console.log(`A snack enjoyed in this class is: ${snack}`);
};
loopThroughArray(candies, printSnackMessage);

loopThroughArray(candies, (candy) => {
    if(candy !== 'KitKat') {
        console.log(`${candy} is cool!`);
    }
});

loopThroughArray(candies, candy => console.log(candy === 'KitKat' ? 'KitKat! This array is cool 😎' : 'No KitKat, this array is lame... 👎'));

const favHolidays = [
    'Halloween',
    'Christmas',
    'Easter'
];

loopThroughArray(favHolidays, holiday => console.log(`${holiday} is a great holiday!`));
