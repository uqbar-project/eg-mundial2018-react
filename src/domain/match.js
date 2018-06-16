export class Match {

    constructor(teamA, goalA, teamB, goalB) {
        if (!teamA) {
            throw new Error('Debe ingresar el primer equipo')
        }
        if (!teamB) {
            throw new Error('Debe ingresar el segundo equipo')
        }
        if (teamA.group !== teamB.group) {
            throw new Error('Los equipos son de diferentes grupos')
        }
        this.teamA = teamA
        this.teamB = teamB
        this.goalA = goalA
        this.goalB = goalB
    }

    get key() {
        return this.teamA.name + "_" + this.teamB.name
    }

    group() {
        return this.teamA.group
    }

    updateScore(teamName, goals) {
        if (this.teamA.name === teamName) {
            this.goalA = goals
        } else {
            this.goalB = goals
        }
    }
}