// input:
// ['Buy Milk', 'Study JavaScript', 'Wash the Car']
// output:
// ['<li>BUY MILK</li>', '<li>STUDY JAVASCRIPT</li>', '<li>WASH THE CAR</li>']
// ['* buy milk', '* study javascript', '* wash the car']

const map = (array, callback) => {
    let newMappedArr = [];

    for(const element of array) {
        const updatedElement = callback(element);
        newMappedArr.push(updatedElement);
    }

    return newMappedArr;
};

const toDosArr = ['Buy Milk', 'Study JavaScript', 'Wash the Car'];
const formattedToDos = map(toDosArr, (toDo) => {
    const uppercaseToDo = toDo.toUpperCase();
    // console.log(uppercaseToDo);
    const listifiedToDo = `<li>${uppercaseToDo}</li>`;
    return listifiedToDo;
});

console.log('formattedToDos', formattedToDos);

const markdownListToDos = map(toDosArr, toDo => `* ${toDo.toLowerCase()}`);
console.log('markdownListToDos', markdownListToDos);

// Using the built-in Array.prototype.map() method:
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
const verbs = toDosArr.map(toDo => toDo.split(' ')[0]);
console.log('verbs', verbs);
