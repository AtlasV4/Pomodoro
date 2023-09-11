let boutonTimer = document.getElementById("timer")
let temps = 1500
const timerElement = document.getElementById("divTimer")
timerElement.innerText = parseInt(temps/60,10) + ":" + parseInt(temps%60,10)

boutonTimer.addEventListener("click", () => {
    if(boutonTimer.textContent == "Lancer Timer") {
        boutonTimer.textContent = "Arrêter Timer"
        setInterval(lancerTimer,1000)
    }
    else {
        boutonTimer.textContent = "Lancer Timer"
        stopTimer()
    }
})

lancerTimer = function() {
    let minutes = parseInt(temps/60,10)
    let secondes = parseInt(temps % 60,10)
    timerElement.innerText = minutes + ":" + secondes
    temps--
}

stopTimer = function() {
    clearInterval(lancerTimer)
}