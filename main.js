function player1Choosing() {
  return Number(window.prompt("Type a number between 1 and 6", ""))
}
function player2Choosing() {
    return Number(window.prompt("Type a number between 1 and 6", ""))
}
let player1Choice = 0
let button1 = document.getElementById("chooseButton1")
button1.addEventListener('click', () => {
   player1Choice = player1Choosing()
})

let player2Choice = 0
let button2 = document.getElementById("chooseButton2")
button2.addEventListener("click", () => {
    player2Choice = player2Choosing()
})

function player1Shot(e) {
    var optionShot = document.getElementById('player2ShootingList').value
    console.log(optionShot)
    if (optionShot == player2Choice) {
        prompt("Player 1 Died")
    } else {
        player2Shot();
        alert("Player 1 live")
        
    } 
    }
function player2Shot(e) {
    var optionShot2 = document.getElementById('player2ShootingList').value
    console.log(optionShot2)
    if (optionShot2 == player1Choice) {
        alert("Player 2 Died")
    } else {
        alert ("Player 2 Lives")
        player1Shot();
    }
}



