console.log("Up and running, bro!")

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push(cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);


if (cardsInPlay.length === 2) {
} if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("Great work! It's a match! Wooo!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
  alert("Sorry, please try again.");
}


console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
