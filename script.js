'use strict'

function getComputerChoice() {
    let x = Math.random() * 10;
    let ans = (Math.floor(x % 3));
    let choice;
    if (ans == 0) {
        choice = 'rock';
    } else if (ans == 1) {
        choice = 'paper'
    } else {
        choice = 'cessor';
    }
    return choice;
}

function userChoice() {
    let userinput = prompt('enter your choice');
    userinput = (userinput % 3);
    let choice
    if (userinput == 0) {
        choice = 'rock';
    } else if (userinput == 1) {
        choice = 'paper'
    } else {
        choice = 'cessor';
    }
    return choice;
}

let uc = userChoice();
let cc = getComputerChoice();

if ((uc == 'rock' && cc == 'cessor') || (uc == 'paper' && cc == 'rock') || (uc == 'cessor' && cc == 'paper')) {
    console.log(uc, cc)
    console.log('you win')
} else if ((uc == 'cessor' && cc == 'rock') || (uc == 'rock' && cc == 'paper') || (uc == 'paper' && cc == 'cessor')) {
    console.log(uc, cc)
    console.log('conputer win')
} else {
    console.log(uc, cc)
    console.log('tie')
}


