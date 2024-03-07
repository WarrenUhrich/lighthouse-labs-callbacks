const readlineObj = require('readline');

const readline = readlineObj.createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question(`What's your name? `, name => {
    console.log(`Hi ${name}!`);


    readline.question(`Enter num 1: `, num1 => {

        num1 = Number(num1);

        readline.question(`Enter num 2: `, num2 => {

            num2 = Number(num2);

            const result = num1 + num2;

            console.log(`${num1} + ${num2} = ${result}`);

            readline.close();
        }); 
    });
});
