// Retrouver les cartes ayant la bonne classe
const cards = document.querySelectorAll('.memory-card');

// Définition de variables
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// Ajout de la classe flip a la carte séléctionnée
function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        //  Premier click
        hasFlippedCard = true;
        firstCard = this;

        return;
    }
        // Second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
}

// Si il y a une correspondance entre les deux cartes elles sont bloquées, sinon on les retourne
function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    isMatch ? disableCards() : unflipCards();
}

// Pour bloquer les cartes = Empécher de re-cliquer dessus
function disableCards() {
    flipCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

// Si il n'y a pas de match, cette fonction est appelée pour bloquer les cartes pendant 1.5 secondes, puis les retourner
function unflipCards() {
    lockBoard = true;

    setTimeout(()=> {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard();
        }, 1500);
}

// Permet de réinitialiser les valeurs par défault des variables (définit en haut du script)
function resetBoard() {
  [hasFlippedCard,lockBoard] = [false,false];
  [firstCard,secondCard] = [null,null];
}

// Mélanger les cartes
(function shuffle(){
  cards.forEach(card =>{
    let randomPos = Math.floor(Math.random()*12);
    card.style.order = randomPos;
  });
})();

// Enregsitrer le click sur les cartes et effectuer la fonction flipCard
cards.forEach(card => card.addEventListener('click', flipCard))

