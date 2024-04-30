const BASE_URL = 'https://deckofcardsapi.com/api/deck';

let deckId;
let playerHand = [];
let dealerHand = [];
let playerScore = 0;
let dealerScore = 0;

const dealBtn = document.getElementById('dealBtn');
const hitBtn = document.getElementById('hitBtn');
const standBtn = document.getElementById('standBtn');
const playerHandDiv = document.getElementById('playerHand');
const dealerHandDiv = document.getElementById('dealerHand');
const resultDiv = document.getElementById('result');

dealBtn.addEventListener('click', deal);
hitBtn.addEventListener('click', hit);
standBtn.addEventListener('click', stand);

async function deal() {
  playerHand = [];
  dealerHand = [];
  playerScore = 0;
  dealerScore = 0;
  resultDiv.textContent = '';
  const response = await fetch(`${BASE_URL}/new/shuffle/?deck_count=1`);
  const data = await response.json();
  deckId = data.deck_id;
  await drawCard(2, playerHand);
  await drawCard(2, dealerHand);
  renderHands();
}

async function hit() {
  await drawCard(1, playerHand);
  renderHands();
  if (calculateScore(playerHand) > 21) {
    endGame('You busted! Dealer wins.');
  }
}

async function stand() {
  while (calculateScore(dealerHand) < 17) {
    await drawCard(1, dealerHand);
  }
  renderHands();
  const playerFinalScore = calculateScore(playerHand);
  const dealerFinalScore = calculateScore(dealerHand);
  if (dealerFinalScore > 21 || playerFinalScore > dealerFinalScore) {
    endGame('You win!');
  } else if (playerFinalScore < dealerFinalScore) {
    endGame('Dealer wins.');
  } else {
    endGame('It\'s a tie!');
  }
}

async function drawCard(numCards, hand) {
  const response = await fetch(`${BASE_URL}/${deckId}/draw/?count=${numCards}`);
  const data = await response.json();
  data.cards.forEach(card => {
    hand.push(card);
  });
}

function calculateScore(hand) {
  let score = 0;
  let aceCount = 0;
  hand.forEach(card => {
    if (card.value === 'ACE') {
      aceCount++;
      score += 11;
    } else if (['JACK', 'QUEEN', 'KING'].includes(card.value)) {
      score += 10;
    } else {
      score += parseInt(card.value);
    }
  });
  while (score > 21 && aceCount > 0) {
    score -= 10;
    aceCount--;
  }
  return score;
}

function renderHands() {
  playerHandDiv.innerHTML = '<h2>Your Hand:</h2>';
  playerHand.forEach(card => {
    playerHandDiv.innerHTML += `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
  });
  dealerHandDiv.innerHTML = '<h2>Dealer\'s Hand:</h2>';
  dealerHand.forEach((card, index) => {
    if (index === 0) {
      dealerHandDiv.innerHTML += '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Playing_card_back.jpg/250px-Playing_card_back.jpg" alt="Card Back">';
    } else {
      dealerHandDiv.innerHTML += `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
    }
  });
}

function endGame(message) {
  resultDiv.textContent = message;
  hitBtn.disabled = true;
  standBtn.disabled = true;
  dealBtn.disabled = false;
}

deal();
