import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let getallen = [23, 1, 56, 34, 12, 78, 43, 65, 9, 88]; 

getallen.sort(function(a, b) {
    return b - a; 
});

console.log("Gesorteerde getallen van groot naar klein:", getallen);
process.exit()
