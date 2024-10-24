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


function schiet(x, y) {
    if (x >= 0 && x < 10 && y >= 0 && y < 10) {
        if (speelveld[y][x] === "B") {
            console.log("Raak! Een boot is geraakt.");
            speelveld[y][x] = "*"; 
        } else if (speelveld[y][x] === " ") {
            console.log("Mis! Geen boot geraakt.");
            speelveld[y][x] = "^"; 
        } else {
            console.log("Je hebt hier al geschoten!");
        }
    } else {
        console.log("Ongeldige coördinaten!");
    }
}


plaatsBoot(4, "right", 3, 2);


schiet(3, 2); 
schiet(7, 7); 
schiet(3, 2); 


console.table(speelveld);


process.exit()