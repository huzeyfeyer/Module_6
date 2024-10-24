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


function plaatsBoot(lengte, richting, startX, startY) {
    if (richting === "right" && startX + lengte <= 10) {
        for (let i = 0; i < lengte; i++) {
            speelveld[startY][startX + i] = "B"; 
        }
    } else if (richting === "left" && startX - lengte >= -1) {
        for (let i = 0; i < lengte; i++) {
            speelveld[startY][startX - i] = "B"; 
        }
    } else if (richting === "down" && startY + lengte <= 10) {
        for (let i = 0; i < lengte; i++) {
            speelveld[startY + i][startX] = "B"; 
        }
    } else if (richting === "up" && startY - lengte >= -1) {
        for (let i = 0; i < lengte; i++) {
            speelveld[startY - i][startX] = "B";
        }
    } else {
        console.log("Geen plaats voor de boot!");
    }
}


plaatsBoot(3, "right", 2, 2);
console.table(speelveld); 

process.exit()