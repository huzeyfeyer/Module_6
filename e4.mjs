import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let scoresList = [8, 7, 9, 6, 10]; 
let total = 0;

for (let i = 0; i < scoresList.length; i++) {
    total += scoresList[i];
}

let average = total / scoresList.length;

console.log('Average score:' + average);

process.exit()