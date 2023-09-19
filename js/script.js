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

tempsTravailInput.addEventListener("input", () => {
    tempsTravail = parseInt(this.value, 10);
    localStorage.setItem("tempsTravail", tempsTravail);
});

tempsPauseInput.addEventListener("input", () => {
    tempsPause = parseInt(this.value, 10);
    localStorage.setItem("tempsPause", tempsPause);
});

tempsLonguePauseInput.addEventListener("input", () => {
    tempsLonguePause = parseInt(this.value, 10);
    localStorage.setItem("tempsLonguePause", tempsLonguePause);
});

boutonTimer.addEventListener("click", () => {
    if (boutonTimer.value == "Lancer Timer") {
        boutonTimer.value = "Arrêter Timer";
        setInterval(timer, 1000);
    } else {
        boutonTimer.value = "Lancer Timer";
        location.reload();
    }
});

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

document.addEventListener("DOMContentLoaded", () => {
    tempsTravail = parseInt(localStorage.getItem("tempsTravail") || 25, 10);
    tempsPause = parseInt(localStorage.getItem("tempsPause") || 5, 10);
    tempsLonguePause = parseInt(localStorage.getItem("tempsLonguePause") || 20, 10);

    tempsTravailInput.value = tempsTravail;
    tempsPauseInput.value = tempsPause;
    tempsLonguePauseInput.value = tempsLonguePause;

    temps = tempsTravail * 60;
    minutes = parseInt(temps / 60, 10) < 10 ? "0" + parseInt(temps / 60, 10) : parseInt(temps / 60, 10);
    secondes = parseInt(temps % 60, 10) < 10 ? "0" + parseInt(temps % 60, 10) : parseInt(temps % 60, 10);
    duree.innerText = minutes + ":" + secondes;
});

function couleurPause() {
    divTimer.style.backgroundColor = "green";
    travail.style.color = "white";
    pause.style.color = "yellow";
    boutonTimer.style.backgroundColor = "green";
    boutons.style.backgroundColor = "green";
}

for (let resultat of input) {
    resultat.addEventListener("input", () => {
        let valeur = this.value.match(/^\d+$/);
        if (valeur === null) {
            this.value = "";
        }
    });
}

function recupValeurs() {
    tempsTravail = parseInt(tempsTravailInput.value);
    tempsPause = parseInt(tempsPauseInput.value);
    tempsLonguePause = parseInt(tempsLonguePauseInput.value);
    temps = tempsTravail * 60;
    minutes = parseInt(temps / 60, 10) < 10 ? "0" + parseInt(temps / 60, 10) : parseInt(temps / 60, 10);
    secondes = parseInt(temps % 60, 10) < 10 ? "0" + parseInt(temps % 60, 10) : parseInt(temps % 60, 10);
    duree.innerText = minutes + ":" + secondes;
}

