const candies = [
    'KitKat',
    'Lindt',
    'Oh Henry!',
    'Snickers',
    'Chocolate-Covered Almonds'
];

const holidays = [
    'New Years',
    'Christmas',
    'Halloween',
    'Easter',
    'Canada Day',
    'Labour Day'
];

// for(const holiday of holidays) {
//     console.log(`* ${holiday}`);
// }

const loopThroughArray = (array, callback) => {
    for(const item of array) {
        callback(item);
    }
};

loopThroughArray(candies, (candy) => { console.log(`* ${candy}`); });

loopThroughArray(holidays, (holiday) => {
    switch(holiday) {
        case 'Canada Day':
            console.log('🍁');
            break;
        case 'Christmas':
            console.log('🎄');
            break;
        case 'New Years':
            console.log('🎉');
            break;
        default:
            console.log(holiday);
            break;
    }
    
    // if(holiday == 'Canada Day') console.log('🍁');
    // else if(holiday == 'Christmas') console.log('🎄');
    // else if(holiday == 'New Years') console.log('🎉');
    // else console.log(holiday);
});

const reverseText = text => console.log( text.split('').reverse().join('') );
loopThroughArray(candies, reverseText);
loopThroughArray(holidays, reverseText);
