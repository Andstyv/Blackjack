let player = {
  name: "Anders",
  chips: 1000,
};
let cards = [];
let dealerCards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let sumDealer = document.getElementById("sum-dealer");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");
let dealer = document.getElementById("dealer-el");
let gameMessage = document.getElementById("game-message");
let cardImage1 = document.getElementById("card-img1");
let cardImage2 = document.getElementById("card-img2");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function showDealer() {
  if (isAlive) {
    let dealerRandom1 = getRandomCard();
    let dealerRandom2 = getRandomCard();
    let dealerTotal = dealerRandom1 + dealerRandom2;

    if (dealerTotal <= 16) {
      let dealerRandom3 = getRandomCard();
      dealer.textContent = "Cards: " + dealerRandom1 + ", " + dealerRandom2 + ", " + dealerRandom3;
      sumDealer.textContent = dealerRandom1 + dealerRandom2 + dealerRandom3;
      isAlive = false;
    } else {
      dealer.textContent = "Cards: " + dealerRandom1 + ", " + dealerRandom2;
      sumDealer.textContent = dealerRandom1 + dealerRandom2;
      isAlive = false;
    }

    if (dealerTotal >= sum && dealerTotal <= 21) {
      gameMessage.textContent = "YOU LOSE";
      player.chips -= 100;
      playerEl.textContent = player.name + ": $" + player.chips;
    } else {
      gameMessage.textContent = "YOU WIN";
      player.chips += 100;
      playerEl.textContent = player.name + ": $" + player.chips;
    }
  }
}

function startGame() {
  gameMessage.textContent = "";
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  //   cardImage1.style.backgroundImage = `url(img/${firstCard}C.png)`;
  //   cardImage2.style.backgroundImage = `url(img/${secondCard}C.png)`;

  // background-image: url(img/2C.png);

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  sum = firstCard + secondCard;
  dealer.textContent = "";
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ", ";
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "BLACKJACK";
    hasBlackJack = true;
    player.chips += 200;
    playerEl.textContent = player.name + ": $" + player.chips;
  } else {
    message = "Lose";
    gameMessage.textContent = "YOU LOSE";
    isAlive = false;
    player.chips -= 100;
    playerEl.textContent = player.name + ": $" + player.chips;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
