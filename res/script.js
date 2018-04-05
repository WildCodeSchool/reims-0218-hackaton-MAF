// Module de choix de personnage
const startGame = () => {
    // ID des 30 combattants
    const roster = [18, 60, 69, 105, 106, 146,
        149, 176, 196, 208, 216, 225,
        226, 236, 351, 356, 398, 405,
        418, 457, 476, 522, 542, 556,
        590, 620, 623, 665, 718, 729]

    // DOM du jeu
    const gameScreen = document.getElementById("listCharacter")
    for (let i = 0; i < roster.length; i++) {
        gameScreen.innerHTML += `<li>Combattant ID ${roster[i]}</li>`
    }
    console.log(gameScreen.innerHTML)
}

startGame()
