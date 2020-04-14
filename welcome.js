// Variables pour séléctionner le texte que l'on veut et diviser les lettres

const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitText = strText.split("");

// On cache notre h1 de base
text.textContent = "";

// Générer des span pour afficher les lettres côte à côte (en prenant en compte les espaces SI il y en a)
for (let i=0; i < splitText.length; i++)
{
    let char = (splitText[i] === " ") ? "&nbsp;" : splitText[i];
    text.innerHTML += "<span>" + char + "</span>";
}

// Variables qui vont définir le nombre de lettres, et donner un temps à l'animation
let char = 0;
let timer = setInterval(onTick, 50);

// On séléctionne tous les span générés et on ajoute un interval de 0.05s entre les lettres pour l'animation
function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++

    // Si on arrive à la fin du texte, on fait la fonction 'complete'
    if(char === splitText.length) {
        complete();
        return;
    }
}

// On vide le timer
function complete() {
    clearInterval(timer);
    timer = null;
}