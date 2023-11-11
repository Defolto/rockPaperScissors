const wr = document.querySelector(".wr")
const enemy = document.getElementById("enemy")
const points = document.getElementById("points")
const replay = document.getElementById("replay")
const reset = document.getElementById("reset")

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// rock = камень, papers = ножницы, scissors = бумага
const things = ["rock", "papers", "scissors"]
const thingsRus = {
    "rock": "камень",
    "papers": "ножницы",
    "scissors": "бумага"
}
let myPoints = 0
let enemyPoints = 0
wr.addEventListener('click', (e) => {
    document.querySelectorAll(".wr button").forEach(btn=>btn.style.backgroundColor = "white")
    e.target.style.backgroundColor = "green"
    let myChoose = e.target.id
    let enemyChoose = things[getRandom(0, 2)]
    enemy.innerHTML = thingsRus[enemyChoose]

    if (myChoose == "rock" && enemyChoose == "papers") {
        myPoints += 1
    } else if (myChoose == "scissors" && enemyChoose == "rock") {
        myPoints += 1
    } else if (myChoose == "papers" && enemyChoose == "scissors") {
        myPoints += 1
    }if (enemyChoose == "rock" && myChoose == "papers") {
        enemyPoints += 1
    } else if (enemyChoose == "scissors" && myChoose == "rock") {
        enemyPoints += 1
    } else if (enemyChoose == "papers" && myChoose == "scissors") {
        enemyPoints += 1
    }

    points.innerHTML = `${myPoints}:${enemyPoints}`
})

reset.addEventListener("click", () => {
    myPoints = 0
    enemyPoints = 0
    points.innerHTML = `${myPoints}:${enemyPoints}`
})

