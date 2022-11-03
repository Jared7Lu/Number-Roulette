//Player Chooses number 

function playerChoice() {
    let playerSelected = document.getElementById("testing123").value;
 }
//AI Chooses number
let aiChoice = Math.floor(Math.random() * 6) + 1;

//arrays

let playerArray = [1, 2, 3, 4, 5, 6]
 let aiArray = [1, 2, 3, 4, 5, 6]

//array filter

let aiShoot = playerArray.filter(afterAiShot)
function afterAiShot(value) {
    return value % 2 === 0;
}

//Player chooses another

let playerShoot = aiArray.filter(playerAfterShot)
function playerAfterShot(value) {
    return
}

// ai n player aray

