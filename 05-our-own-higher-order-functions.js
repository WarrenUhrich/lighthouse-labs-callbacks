const snacks = ['Kit Kat', 'Chips', 'Cookies', 'Oreo'];

// for(const snack of snacks) {
//     console.log('A snack I enjoy is:', snack);
// }

// We'll pass in an array to loop through
// We'll pass in a function that can be run against each item
const loopThroughArray = (array, callback) => {
    for(const item of array) {
        callback(item);
    }
};

loopThroughArray(snacks, function(snack) {
    console.log('A snack I enjoy is:', snack);
});

loopThroughArray(snacks, (snack) => {
    if(snack !== 'Kit Kat') {
        console.log('A snack I don\'t enjoy is:', snack);
    }
});
