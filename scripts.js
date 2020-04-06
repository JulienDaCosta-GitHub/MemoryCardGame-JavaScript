const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard= false;
let firstCard,secondCard;

function flipCard() {
    this.classList.toggle('flip');

    if(!hasFlippedCard){
        // premier clic 
        hasFlippedCard=true;
        firstCard=this;

        console.log({hasFlippedCard,firstCard});
    } else {
        // second clic
        hasFlippedCard=false;
        secondCard= this;

        if(firstCard.dataset.framework === secondCard.dataset.framework){
            // Il y a match !
            flipCard.removeEventListener('click',flipCard);
            secondCard.removeEventListener('click',flipCard); 
        } else {
            // Il n'y a pas match
            setTimeout(()=> {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            }, 1500);
            
        }
    }
}

cards.forEach(card => card.addEventListener('click', flipCard))

