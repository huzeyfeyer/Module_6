import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let namen = ["Amin", "Sofie", "Samantha", "Karel", "Mehdi", "Joris", "Nuria"];

function zoekNaam(naam, namenLijst) {
    for (let i = 0; i < namenLijst.length; i++) {
        if (namenLijst[i] === naam) {
            return i; 
        }
    }
    return -1; 
}

let zoekResultaat = zoekNaam("Mehdi", namen);
console.log("Resultaat van de zoekopdracht: ", zoekResultaat);
process.exit()
