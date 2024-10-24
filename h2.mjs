import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});


let speelveld = [];
for (let i = 0; i < 10; i++) {
    let rij = [];
    for (let j = 0; j < 10; j++) {
        rij.push(" "); 
    }
    speelveld.push(rij);
}


function schiet(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        speelveld[y][x] = "*"; 
    } else {
        console.log("Ongeldige coördinaten!");
    }
}

schiet(4, 5); 
console.table(speelveld); 

process.exit()