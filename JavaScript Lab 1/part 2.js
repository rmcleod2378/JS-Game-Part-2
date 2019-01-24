" use strict";
//variables
let userName = undefined;
let wins = 0;
let grantHp = 40;
let userHp = 10;

function startGame() {
    //prompt the user to play
    let playGame = prompt("Do you want to play?");
    //if the user accepts play
    if (playGame === "yes") {
        //ask for user name
        let userName = prompt("What is your name?");
        //start combat
function startCombat() {
        //if wins are less than 3
    while (wins <= 3) {
        let firstCombat = true;
        //prompt the user to attack
        let continueCombat = prompt(`${userName}, do you want to attack?`);
}   //if wants to attack
    if (continueCombat === "yes");
    //if user health points are greater than 0
    if (userHp > 0); 
        const getDamage = (damage); { 
    //return random math with damage range of 1-5
    return Math.floor(Math.random() * 5) + 1;
        //user health goes down
        userHp -= getDamage();
        //grant health goes down
        grantHp -= getDamage();
            //log user name and health left
            console.log(`${userName} has ${userHp} health left.`); 
            //log grants health left
            console.log(`Grant has ${grantHp} health left.`);
    //if grants health is 0 and has been beat 2 times
    if (grantHp <= 0 && wins === 2) {
            //log user name and win status with health left
            console.log(`${userName} has defeated Grant 3 times with ${userHp} health left`);
            wins++;
        
}   else if (grantHp <= 0) { 
        grantHp = 10;
        wins++;
            console.log(`You have defeated Grant ${wins} times.`);
} 
    else {
        console.log(`Grant has beat you with ${grantHp} health left.`);
}
}   if (continueCombat === "no") {
                    alert ("Thats a bummer.");
                    
                }
startCombat();
    if (playGame === "no") {
        console.log("Lets play some other time.");
}    
startGame(); 
    }
}
