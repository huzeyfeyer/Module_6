import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let studentList = []

do {
let name = await userInput.question('Geef een name in:\nGeef `S` in om te stoppen -> ');

if(name.toLowerCase() === 's'){
    break
}

studentList.push(name)

}while(true)

console.log(studentList)

process.exit()

