// Sélection des éléments HTML dont on a besoin
let boutonTimer = document.getElementById("timer");
let tempsTravailInput = document.getElementById("tempsTravail");
let tempsPauseInput = document.getElementById("tempsPause");
let tempsLonguePauseInput = document.getElementById("tempsLonguePause");
let temps;
let tempsLonguePause;
let tempsPause;
let tempsTravail;
let compteur = 0;
let nbPomodori = document.getElementById("nbPomodori");
let divTimer = document.getElementById("divTimer");
let duree = document.getElementById("duree");

let pause = document.getElementById("pause");
let travail = document.getElementById("travail");
travail.style.color = "yellow";
let boutons = document.getElementById("boutons");

let minutes;
let secondes;

const input = [tempsPauseInput, tempsLonguePauseInput, tempsTravailInput];

// Gestionnaire d'événements pour le champ "tempsTravailInput"
tempsTravailInput.addEventListener("input", (e) => {
    tempsTravail = parseInt(e.target.value, 10); // Convertit la valeur en nombre
    localStorage.setItem("tempsTravail", tempsTravail); // Stocke la valeur dans le localStorage
});

// Gestionnaire d'événements pour le champ "tempsPauseInput"
tempsPauseInput.addEventListener("input", (e) => {
    tempsPause = parseInt(e.target.value, 10); // Convertit la valeur en nombre
    localStorage.setItem("tempsPause", tempsPause); // Stocke la valeur dans le localStorage
});

// Gestionnaire d'événements pour le champ "tempsLonguePauseInput"
tempsLonguePauseInput.addEventListener("input", (e) => {
    tempsLonguePause = parseInt(e.target.value, 10); // Convertit la valeur en nombre
    localStorage.setItem("tempsLonguePause", tempsLonguePause); // Stocke la valeur dans le localStorage
});

// Gestionnaire d'événements pour le bouton "boutonTimer"
boutonTimer.addEventListener("click", () => {
    if (boutonTimer.value == "Lancer Timer") {
        boutonTimer.value = "Arrêter Timer";
        setInterval(timer, 1000); // Lance le timer avec une intervalle de 1 seconde
    } else {
        boutonTimer.value = "Lancer Timer";
        location.reload(); // Recharge la page pour réinitialiser le timer
    }
});

// Fonction de mise à jour du minuteur / du minuteur
function timer() {
    if (temps != 0) {
        temps--;
        minutes = parseInt(temps / 60, 10) < 10 ? "0" + parseInt(temps / 60, 10) : parseInt(temps / 60, 10);
        secondes = parseInt(temps % 60, 10) < 10 ? "0" + parseInt(temps % 60, 10) : parseInt(temps % 60, 10);
        duree.innerText = minutes + ":" + secondes;
    } else {
        compteur++;
        if (compteur % 2 === 0 && compteur % 9 !== 0) {
            temps = tempsTravail * 60;
            divTimer.style.backgroundColor = "#EA3712";
            pause.style.color = "white";
            travail.style.color = "yellow";
            boutonTimer.style.backgroundColor = "#EA3712";
            boutons.style.backgroundColor = "#EA3712";
            nbPomodori.innerText = parseInt(nbPomodori.innerText) + 1;
        } else if (compteur % 9 === 0) {
            temps = tempsLonguePause * 60;
            couleurPause();
        } else if (compteur % 2 !== 0) {
            temps = tempsPause * 60;
            couleurPause();
        }
    }
}

// Gestionnaire d'événements lorsque le DOM est complètement chargé
document.addEventListener("DOMContentLoaded", () => {
    tempsTravail = parseInt(localStorage.getItem("tempsTravail") || 25, 10); // Récupère la valeur depuis le localStorage
    tempsPause = parseInt(localStorage.getItem("tempsPause") || 5, 10); // Récupère la valeur depuis le localStorage
    tempsLonguePause = parseInt(localStorage.getItem("tempsLonguePause") || 20, 10); // Récupère la valeur depuis le localStorage

    temps = tempsTravail * 60;

    tempsTravailInput.value = tempsTravail;
    tempsPauseInput.value = tempsPause;
    tempsLonguePauseInput.value = tempsLonguePause;

    minutes = parseInt(temps / 60, 10) < 10 ? "0" + parseInt(temps / 60, 10) : parseInt(temps / 60, 10);
    secondes = parseInt(temps % 60, 10) < 10 ? "0" + parseInt(temps % 60, 10) : parseInt(temps % 60, 10);
    duree.innerText = minutes + ":" + secondes;
});

// Fonction pour changer les couleurs pendant les pauses
function couleurPause() {
    divTimer.style.backgroundColor = "green";
    travail.style.color = "white";
    pause.style.color = "yellow";
    boutonTimer.style.backgroundColor = "green";
    boutons.style.backgroundColor = "green";
}

// Gestionnaires d'événements pour les champs de saisie pour assurer la saisie de nombres
for (let resultat of input) {
    resultat.addEventListener("input", (e) => {
        let valeur = e.target.value.match(/^\d+$/);
        if (valeur === null) {
            e.target.value = 0;
        }
    });
}

// Fonction pour récupérer les valeurs des champs de saisie et mettre à jour le minuteur
function recupValeurs() {
    tempsTravail = parseInt(tempsTravailInput.value);
    tempsPause = parseInt(tempsPauseInput.value);
    tempsLonguePause = parseInt(tempsLonguePauseInput.value);
    temps = tempsTravail * 60;
    minutes = parseInt(temps / 60, 10) < 10 ? "0" + parseInt(temps / 60, 10) : parseInt(temps / 60, 10);
    secondes = parseInt(temps % 60, 10) < 10 ? "0" + parseInt(temps % 60, 10) : parseInt(temps % 60, 10);
    duree.innerText = minutes + ":" + secondes;
}