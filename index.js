function rollDice() {
  // Resetting winners
  document.querySelector(".player1").innerHTML = "Player 1"
  document.querySelector(".player2").innerHTML = "Player 2"

  // Generating 2 random numbers from 1 to 6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Updating dice images according to random numbers
  document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  // Updating h1 and p to display the winner or a draw
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    document.querySelector(".player1").innerHTML = "🚩 Player 1"
  }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
    document.querySelector(".player2").innerHTML = "🚩 Player 2"
  } else {
    document.querySelector("h1").innerHTML = "Draw! ";
  }
}
