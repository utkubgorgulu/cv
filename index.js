var randomNumber1 = Math.floor(Math.random() * 3) + 1; //1-6

var randomDiceImage = "sila" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

if (randomNumber1 === 1) {
  document.querySelector("h1").innerHTML = "Şişman"
}
else if (randomNumber1 === 2) {
  document.querySelector("h1").innerHTML = "Aç"
}
else if (randomNumber1 === 3) {
  document.querySelector("h1").innerHTML = "Arabalı"
}
