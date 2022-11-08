function player1Choosing() {
  return Number(window.prompt("Type a number between 1 and 6", ""))
}
function player2Choosing() {
    return Number(window.prompt("Type a number between 1 and 6", ""));
}
let player1Choice = 0
let button1 = document.getElementById("chooseButton1")
button1.addEventListener('click', () => {
   player1Choice = player1Choosing()
   button1.disabled = true;
   button1.style.visibility = "hidden";
})
let player2Choice = 0
let button2 = document.getElementById("chooseButton2")
button2.addEventListener("click", () => {
    player2Choice = player2Choosing()
    button2.disabled = true;
    button2.style.visibility = "hidden";
})
let buttons = document.querySelectorAll('#button');
function showNumber(button) {
  if (button.value == player2Choice) {
     button.style.backgroundColor = "#FF0000";
     player1Died();
     resetButtonShow();
  } else {
    player2Turn()
    button.style.backgroundColor = "#008000"
    button.disabled = true;   
  }
}
buttons.forEach(button => {
    button.addEventListener("click", () => {
      showNumber(button)
    });
  }); 

let buttons2 = document.querySelectorAll('#button2');
function showNumber2(button) {
  if (button.value == player1Choice) {
     button.style.backgroundColor = "#FF0000"
     player2Died()
     resetButtonShow()
  } else {
    player1Turn()
    button.style.backgroundColor = "#008000"
    button.disabled = true;
  }
}
buttons2.forEach(button => {
    button.addEventListener("click", () => {
      showNumber2(button)
    });
  }); 
function player1Turn() {
        var image = document.getElementById("imageDictator");
        image.src="https://38.media.tumblr.com/d902edf4453bedd91b13d57a44b155bd/tumblr_n54rlu9jZV1t427mro2_400.gif";
  }
function player2Turn() {
    var image = document.getElementById("imageDictator");
    image.src = "https://media.giphy.com/media/iPuggAost1xde/giphy.gif";
  }
function player1Died() {
    var playerImage = document.getElementById("player1Image");
    var image = document.getElementById("imageDictator");
    playerImage.style.visibility = "hidden";
    image.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d1e16859c09183b.png";
    image.style.height = '450px';
    image.style.width = '300px';
}
function player2Died() {
    var player2Image = document.getElementById("player2Image");
    var image = document.getElementById("imageDictator");
    player2Image.style.visibility = "hidden";
    image.src = "http://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d1e16859c09183b.png";
    image.style.height = '250px';
    image.style.width = '340px';
}
function resetButtonShow() {
    document.getElementById("resetButton").style.display = "block";
}




