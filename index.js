var randomNumber1 = Math.floor(Math.random() * 38) + 1;

var randomDiceImage = "sila" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

if (randomNumber1 === 1) {
  document.querySelector("h1").innerHTML = "Çimen"
}
else if (randomNumber1 >= 2 && randomNumber1 <= 3 ) {
  document.querySelector("h1").innerHTML = "Hunili"
}
else if (randomNumber1 >= 4 && randomNumber1 <= 5 ) {
  document.querySelector("h1").innerHTML = "Uyumuş"
}
else if (randomNumber1 >= 6 && randomNumber1 <= 7 ) {
  document.querySelector("h1").innerHTML = "Gamer"
}
else if (randomNumber1 >= 8 && randomNumber1 <= 11 ) {
  document.querySelector("h1").innerHTML = "Lavabo"
}
else if (randomNumber1 >= 12 && randomNumber1 <= 14 ) {
  document.querySelector("h1").innerHTML = "Acıkmış"
}
else if (randomNumber1 === 15 ) {
  document.querySelector("h1").innerHTML = "Dövüşçü"
}
else if (randomNumber1 === 16 ) {
  document.querySelector("h1").innerHTML = "Yemek Bekleyen"
}
else if (randomNumber1 === 17 ) {
  document.querySelector("h1").innerHTML = "Ayak Düşmanı"
}
else if (randomNumber1 >= 18 && randomNumber1 <= 19 ) {
  document.querySelector("h1").innerHTML = "Acıkmış"
}
else if (randomNumber1 >= 20 && randomNumber1 <= 21 ) {
  document.querySelector("h1").innerHTML = "Alerjili"
}
else if (randomNumber1 >= 22 && randomNumber1 <= 23 ) {
  document.querySelector("h1").innerHTML = "K-pop fanı"
}
else if (randomNumber1 >= 24 && randomNumber1 <= 26 ) {
  document.querySelector("h1").innerHTML = "Arabalı"
}
else if (randomNumber1 >= 27 && randomNumber1 <= 28 ) {
  document.querySelector("h1").innerHTML = "Koli"
}
else if (randomNumber1 === 29) {
  document.querySelector("h1").innerHTML = "Poşet"
}
else if (randomNumber1 >= 30 && randomNumber1 <= 31 ) {
  document.querySelector("h1").innerHTML = "Susamış"
}
else if (randomNumber1 >= 32 && randomNumber1 <= 33 ) {
  document.querySelector("h1").innerHTML = "Tedirgin"
}
else if (randomNumber1 === 34) {
  document.querySelector("h1").innerHTML = "Dinozor"
}
else if (randomNumber1 === 35) {
  document.querySelector("h1").innerHTML = "Haydut"
}
else if (randomNumber1 === 36) {
  document.querySelector("h1").innerHTML = "Parti"
}
else if (randomNumber1 === 37) {
  document.querySelector("h1").innerHTML = "Sandalye"
}
else if (randomNumber1 === 38) {
  document.querySelector("h1").innerHTML = "Dolap"
}
