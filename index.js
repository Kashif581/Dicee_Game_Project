var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
var randomNumber2 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage; 
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomDiceImage = "dice" + randomNumber2 + ".png";
var randomImageSource = "images/" + randomDiceImage; 
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomImageSource);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player2 wins! 🚩"
}else{ document.querySelector("h1").textContent = "Draw"}

  
  