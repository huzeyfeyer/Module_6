import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

let prijzenLijst = [100, 200, 300, 400, 500]; 

function geefKorting(prijs) {
    return prijs * 0.85; 
}

for (let i = 0; i < prijzenLijst.length; i++) {
    let nieuwePrijs = geefKorting(prijzenLijst[i]);
    console.log("Oorspronkelijke prijs: " + prijzenLijst[i] + " - Nieuwe prijs: " + nieuwePrijs);
}

process.exit()
