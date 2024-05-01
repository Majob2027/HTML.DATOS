
// Función para mostrar la animación de bienvenida
function showWelcomeAnimation() {
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');
  overlay.id = 'overlay';
  const img = document.createElement('img');
  img.src = './gifs/BIENVENIDO-AL-CASINO-DE-MAJO-30-4-2024-removebg-preview.png';
  
  // Establecer el tamaño de la imagen
  img.style.width = '700px'; // Cambia '300px' al tamaño que desees
  img.style.height = '400px'; // Mantener la relación de aspecto
  
  overlay.appendChild(img);
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.style.opacity = '1';
    setTimeout(() => {
      overlay.style.opacity = '0';
      overlay.classList.add('hide');
    }, 3000);
  }, 0);
}




const BASE_URL = 'https://deckofcardsapi.com/api/deck';
//Aqui se declaran las variables para guardar el id de casa cosa que vamos a usar
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



// Llamar a la función para mostrar la animación de bienvenida
showWelcomeAnimation();

dealBtn.addEventListener('click', deal);
hitBtn.addEventListener('click', hit);
standBtn.addEventListener('click', stand);
// async lo usamos para funciones asincronicas y fetch para solicitudes asincronicas
//la programación asíncrona permite que las operaciones que pueden tardar en completarse 
//se manejen de manera eficiente, lo que evita que el programa se bloquee mientras espera que estas operaciones se completen.


//4 funciones que le dan la funcionalidad al juego
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
  playerHandDiv.innerHTML = '<h2>Tus cartas:</h2>';
  playerHand.forEach(card => {
    playerHandDiv.innerHTML += `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
  });

  dealerHandDiv.innerHTML = '<h2>Cartas de la maquina:</h2>';
  for (let i = dealerHand.length - 1; i >= 0; i--) {
    const card = dealerHand[i];
    dealerHandDiv.innerHTML += `<img src="${card.image}" alt="${card.value} of ${card.suit}">`;
  }
}

function endGame(message) {
  resultDiv.textContent = message;
  hitBtn.disabled = true;
  standBtn.disabled = true;
  dealBtn.disabled = false;
}










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
  
  // Habilitar los botones de Hit y Stand
  hitBtn.disabled = false;
  standBtn.disabled = false;
}


async function hit() {
  await drawCard(1, playerHand);
  renderHands();
  if (calculateScore(playerHand) > 21) {
    endGame('Tu maso se paso de 21');
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
    endGame('Ganaste!');
  } else if (playerFinalScore < dealerFinalScore) {
    endGame('Gano la maquina');
  } else {
    endGame('It\'s a tie!');
  }
}


deal();

