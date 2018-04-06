// Module de combat
const startFight = (battler1, battler2) => {
    let degats = 0
    let startPVBattler1 = battler1.powerstats.power
    let startPVBattler2 = battler2.powerstats.power
    let battleResult = null

    while (battler1.powerstats.power > 0 && battler2.powerstats.power > 0) {
        document.getElementById("battleScreen").innerHTML += `<p>${battler1.name} attaque ${battler2.name} !</p>`
        degats = battler1.powerstats.strength - (Math.round(battler2.powerstats.durability / 2)) // Math.round force les dégâts à être un nombre entier
        if (degats <= 0) {
            document.getElementById("battleScreen").innerHTML += `<p>${battler2.name} ne subit aucun dégât ! Reste ${battler2.powerstats.power} PV.</p>`
        } else {
            battler2.powerstats.power -= degats
            if (battler2.powerstats.power <= 0) {
                document.getElementById("battleScreen").innerHTML += `<p>${degats} dégâts infligés à ${battler2.name} ! ${battler2.name} vaincu ! ${battler1.name} a gagné !</p>`
                resetStats(battler1, battler2, startPVBattler1, startPVBattler2)
                showWinner(battler1)
                return // Le return interrompt automatiquement la fonction, même si je suis dans une boucle
            } else {
                document.getElementById("battleScreen").innerHTML += `<p>${degats} dégâts infligés à ${battler2.name} ! Reste ${battler2.powerstats.power} PV.</p>`
            }
        }
        document.getElementById("battleScreen").innerHTML += `<p>${battler2.name} attaque ${battler1.name} !</p>`
        degats = battler2.powerstats.strength - (Math.round(battler1.powerstats.durability / 2))
        if (degats <= 0) {
            document.getElementById("battleScreen").innerHTML += `<p>${battler1.name} ne subit aucun dégât ! Reste ${battler1.powerstats.power} PV.</p>`
        } else {
            battler1.powerstats.power -= degats
            if (battler1.powerstats.power <= 0) {
                document.getElementById("battleScreen").innerHTML += `<p>${degats} dégâts infligés à ${battler1.name} ! ${battler1.name} vaincu ! ${battler2.name} a gagné !</p>`
                resetStats(battler1, battler2, startPVBattler1, startPVBattler2)
                showWinner(battler2)
                return // Le return interrompt automatiquement la fonction, même si je suis dans une boucle
            } else {
                document.getElementById("battleScreen").innerHTML += `<p>${degats} dégâts infligés à ${battler1.name} ! Reste ${battler1.powerstats.power} PV.</p>`
            }
        }
    }
}

const resetStats = (battler1, battler2, battler1StartPV, battler2StartPV) => {
    battler1.powerstats.power = battler1StartPV
    battler2.powerstats.power = battler2StartPV
}

// Photo du gagnant
const showWinner = (winner) => {
    document.getElementById("battleScreen").innerHTML += `<img id="winner" src="${winner.images.sm}">`
}