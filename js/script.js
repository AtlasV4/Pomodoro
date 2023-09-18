let boutonTimer = document.getElementById("timer")
let tempsTravail
let tempsPause
let temps
let compteur = 0
let nbPomodori = document.getElementById("nbPomodori")
let divTimer = document.getElementById("divTimer")
let duree = document.getElementById("duree")

let pause = document.getElementById("pause")
let travail = document.getElementById("travail")
travail.style.color = "yellow"
let boutons = document.getElementById("boutons")

let minutes
let secondes

getValue()
console.log(tempsPause, tempsTravail)

boutonTimer.addEventListener("click", () => {
    if(boutonTimer.value == "Lancer Timer") {
        boutonTimer.value = "Arrêter Timer"
        setInterval(timer, 1000)
    }
    else {
        boutonTimer.value = "Lancer Timer"
        location.reload()
    }
})

function timer() {
    if(temps != 0) {
        temps--
        minutes = parseInt(temps/60,10) < 10 ? "0"+parseInt(temps/60,10) : parseInt(temps/60,10)
        secondes = parseInt(temps % 60,10) < 10 ? "0"+parseInt(temps % 60,10) : parseInt(temps % 60,10)
        duree.innerText = minutes + ":" + secondes
    }
    else {
        compteur++
        if (compteur % 2 === 0 && compteur % 8 !== 0) {
            temps = tempsTravail * 60;
            divTimer.style.backgroundColor = "#EA3712";
            pause.style.color = "white";
            travail.style.color = "yellow";
            boutonTimer.style.backgroundColor = "#EA3712";
            boutons.style.backgroundColor = "#EA3712";
            nbPomodori.innerText = parseInt(nbPomodori.innerText) + 1
        } else if (compteur % 8 === 0 && compteur % 2 === 0) {
            nbPomodori.innerText = parseInt(nbPomodori.innerText) + 1
            temps = 1200;
            divTimer.style.backgroundColor = "green";
            travail.style.color = "white";
            pause.style.color = "yellow";
            boutonTimer.style.backgroundColor = "green";
            boutons.style.backgroundColor = "green";
        } else if (compteur % 2 !== 0) {
            temps = tempsPause * 60;
            divTimer.style.backgroundColor = "green";
            travail.style.color = "white";
            pause.style.color = "yellow";
            boutonTimer.style.backgroundColor = "green";
            boutons.style.backgroundColor = "green";
        }
    }
}

function getValue() {
    tempsTravail = document.getElementById("tempsTravail").value
    tempsPause = document.getElementById("tempsPause").value
    temps = tempsTravail * 60
    minutes = parseInt(temps/60,10) < 10 ? "0"+parseInt(temps/60,10) : parseInt(temps/60,10)
    secondes = parseInt(temps % 60,10) < 10 ? "0"+parseInt(temps % 60,10) : parseInt(temps % 60,10)
    duree.innerText = minutes + ":" + secondes
}