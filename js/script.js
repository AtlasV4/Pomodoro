let boutonTimer = document.getElementById("timer")
let temps = 5
const timerElement = document.getElementById("divTimer")
timerElement.innerText = parseInt(temps/60,10) + ":" + parseInt(temps%60,10)

boutonTimer.addEventListener("click", () => {
    if(boutonTimer.textContent == "Lancer Timer") {
        boutonTimer.textContent = "Arrêter Timer"
        let myInterval = setInterval(function() {
            if(temps != 0) {
                let minutes
                let secondes
                minutes = parseInt(temps/60,10)
                secondes = parseInt(temps % 60,10)

                temps = temps < 10 ? "o"+temps : temps

                if(minutes < 10 && secondes < 10) {
                    timerElement.innerText = "0" + minutes + ":" + "0" + secondes
                }
                if(minutes < 10 && secondes > 9) {
                    timerElement.innerText = "0" + minutes + ":" + secondes
                }
                if(minutes > 9 && secondes < 10) {
                    timerElement.innerText = minutes + ":" + "0" + secondes
                }
                else {
                    timerElement.innerText = minutes + ":" + secondes
                }
                temps--
            }
            else {
                temps = 300
                myInterval
            }
            }, 1000)
        }
    else {
        boutonTimer.textContent = "Lancer Timer"
        location.reload()
    }
})

function stopTimer() {
    clearInterval(myInterval)
}