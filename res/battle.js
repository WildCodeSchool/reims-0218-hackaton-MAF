/*
 * Ces objets sont donnés à titre d'exemple
 * A remplacer par les éléments donnés par l'API (rappel: POW = pv ; STR = atk ; DUR = def)
 */
const example1 = {
    name: "Batman",
    pv: 50,
    atk: 30,
    def: 15,
}

const example2 = {
    name: "Pacman",
    pv: 35,
    atk: 40,
    def: 20,
}

// Module de combat
const startFight = (battler1, battler2) => {
    let degats = 0

    // Capital: reset de toutes les valeurs (pour pouvoir lancer plusieurs fois le combat) --> A mutualiser sous fonction ?
    battler1.pv = 50
    battler1.atk = 30
    battler1.def = 15
    battler2.pv = 35
    battler2.atk = 40
    battler2.def = 20   

    /*
     * DEBUG
     */
    console.log(`PV de ${battler1.name}: ${battler1.pv}`)
    console.log(`ATK de ${battler1.name}: ${battler1.atk}`)
    console.log(`DEF de ${battler1.name}: ${battler1.def}`)
    console.log(`PV de ${battler2.name}: ${battler2.pv}`)
    console.log(`ATK de ${battler2.name}: ${battler2.atk}`)
    console.log(`DEF de ${battler2.name}: ${battler2.def}`)
    /*
     * FIN DEBUG
     */

    while (battler1.pv > 0 && battler2.pv > 0) {
        console.log(`${battler1.name} attaque ${battler2.name} !`)
        degats = battler1.atk - (Math.round(battler2.def / 2)) // Math.round force les dégâts à être un nombre entier
        battler2.pv -= degats
        if (battler2.pv <= 0) {
            console.log(`${degats} dégâts infligés à ${battler2.name} ! ${battler2.name} vaincu ! ${battler1.name} a gagné !`)
            return true // Le return interrompt automatiquement la fonction, même si je suis dans une boucle
        } else {
            console.log(`${degats} dégâts infligés à ${battler2.name} ! Reste ${battler2.pv}.`)
        }
        console.log(`${battler2.name} attaque ${battler1.name} !`)
        degats = battler2.atk - (Math.round(battler1.def / 2))
        battler1.pv -= degats
        if (battler1.pv <= 0) {
            console.log(`${degats} dégâts infligés à ${battler1.name} ! ${battler1.name} vaincu ! ${battler2.name} a gagné !`)
            return false
        } else {
            console.log(`${degats} dégâts infligés à ${battler1.name} ! Reste ${battler1.pv}.`)
        }
    }
}

startFight(example1, example2)