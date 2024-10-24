import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let fibonacci = [0, 1];

while (fibonacci.length < 10) {
    let nextNumber = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    fibonacci.push(nextNumber);
}

console.log("Fibonacci reeks:", fibonacci);
process.exit()