function playerChoosing(e) {
    var playerChoice = document.getElementById('testing123').value
    console.log(playerChoice)
}
let aiNumber = Math.floor(Math.random() *6) +1;

let playerArray = [1, 2, 3, 4, 5, 6]

function playerShot(e) {
    var optionShot = document.getElementById('playerShootingList').value
    console.log(optionShot)
    if (optionShot == aiNumber) {
        alert("you Died")
    } else {
        alert("You live")
    } //else{
    //     function aiShot();
    // }
    }

// function aiShot() {
//   for (i=0; i=playerArray.length; i--)
// }
