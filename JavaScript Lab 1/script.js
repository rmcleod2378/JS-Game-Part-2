"use strict"
//prompt the user to play and answer with yes or no
//let playing = prompt("Do you want to play a game?");

//if answer is yes, ask for name of player
/*if (playing === "yes") {
    console.log("What is your name?");    
}*/

//if answer is no, display message to play later
/*if (playing === "no") {
console.log ("Okay, we'll play later!");
}*/
//variables and health points (HP) for players
let playing = prompt("Do you want to play a game?");
let playerName = prompt("What is your name?"); //ask users name
let wins = 0; //start a 0
let playerHP = 40; //player starts with 40 HP
let grantHP = 10; //grant starts with 10 HP

if (playing === "yes") {
    //if wins are less than or equal to 3
    while (wins <= 3) {
        //displays player name how much HP player has left
        console.log(`${playerName} has ${playerHP} health left`);
        //displays how much HP grant has left
        console.log(`Grant the Almighty has ${grantHP} health left.`);
        //if players HP is greater than 0 they keep playing
        if (playerHP > 0) {
            //randon number generator to remove players HP by 1 or 2
            //not sure how to keep these numbers to generate positive values
            playerHP -= Math.floor(Math.random() * 2) + 1;
            //randon number generator to remove grants HP by 1 or 2
            //not sure how to keep these numbers to generate positive values
            grantHP -= Math.floor(Math.random() * 2) + 1;
        }
        //if you defeat grants and have already won 2 times 
        if (grantHP <= 0 && wins === 2) {
            console.log(`${playerName} has beat Grant with ${playerHP} health left`);
            wins++;
            break;
        }
        //if grants HP are equal to 0 HP reset to 10
        else if (grantHP === 0) {
            grantHP = 10;
            wins++;
        }
        //if grant beats you with HP remaining
        else {
            console.log(`Grant has beat you with ${grantHP} health left`);
        }
        //if user decides not to accept our invatation to play
        if (playing === "no") {
            //display message okay we'll play another time
            console.log("Okay we'll play another time!");

        }

    }

}