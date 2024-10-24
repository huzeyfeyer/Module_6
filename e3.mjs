import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let studentList = []
let name;

while (true) {
    name = console.log("Voer een naam in (of 'S' om te stoppen): ");
    if (name === 'S') {
        break;
    }
    studentList.push(name);
}

for (let i = 0; i < studentList.length; i++) {
    console.log(studentList[i] + " is uitgenodigd om deel te nemen aan een superleuk vak!");
}

process.exit()