const snacks = ['chips', 'cookies', 'peanuts', 'carrots', 'apples'];

// for(const snack of snacks) {
//     console.log('A snack I enjoy is', snack);
// }

const loopThroughArray = (array, callback) => {
    for(const item of array) {
        callback(item);
    }
};

const enjoySnack = snack => console.log('A snack I enjoy is', snack);

loopThroughArray(snacks, enjoySnack);

loopThroughArray(snacks, snack => console.log(`I dislike ${snack} a lot!`));
